#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# */AIPND-revision/intropyproject-classify-pet-images/get_input_args.py
#                                                                             
# PROGRAMMER: 
# DATE CREATED:                                   
# REVISED DATE: 
# PURPOSE: Create a function that retrieves the following 3 command line inputs 
#          from the user using the Argparse Python module. If the user fails to 
#          provide some or all of the 3 inputs, then the default values are
#          used for the missing inputs. Command Line Arguments:
#     1. Image Folder as --dir with default value 'pet_images'
#     2. CNN Model Architecture as --arch with default value 'vgg'
#     3. Text File with Dog Names as --dogfile with default value 'dognames.txt'
#
##
# Imports python modules
import argparse

# TODO 1: Define get_input_args function below please be certain to replace None
#       in the return statement with parser.parse_args() parsed argument 
#       collection that you created with this function
# 
def get_input_args():
    """
    Retrieves and parses the command line arguments provided by the user when
    running the program from a terminal window. This function uses argparse
    to create and define three command line arguments:
        1. Image folder directory (mandatory positional argument)
        2. Model architecture (optional argument with default value)
        3. Dognames file (optional argument with default value)
        
    Parameters:
     None - simply using argparse module to create & store command line arguments
    
    Returns:
     parse_args() - data structure that stores the command line arguments object  
    """
    # Create Argument Parser object named parser
    parser = argparse.ArgumentParser(
        description="Retrieve command line arguments for image classification"
    )
    
    # Argument 1: Directory with pet images (mandatory)
    parser.add_argument(
        '--dir',
        type=str,
        default='pet_images/',
        help='Path to the folder of pet images (default: pet_images/)',
    )
    
    # Argument 2: CNN Model Architecture (optional, default: 'vgg')
    parser.add_argument(
        '--arch',
        type=str,
        default='vgg',
        choices=['vgg', 'alexnet', 'resnet'],
        help='Choose CNN model architecture (vgg, alexnet, or resnet; default: vgg)',
    )
    
    # Argument 3: Text file with dog names (optional, default: 'dognames.txt')
    parser.add_argument(
        '--dogfile',
        type=str,
        default='dognames.txt',
        help='Text file containing list of valid dognames (default: dognames.txt)',
    )
    
    # Parse and return command line arguments
    return parser.parse_args()
