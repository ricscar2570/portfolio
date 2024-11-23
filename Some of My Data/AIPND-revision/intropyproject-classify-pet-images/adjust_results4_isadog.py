#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# */AIPND-revision/intropyproject-classify-pet-images/adjust_results4_isadog.py
#                                                                             
# PROGRAMMER: 
# DATE CREATED:                                 
# REVISED DATE: 
# PURPOSE: Create a function adjust_results4_isadog that adjusts the results 
#          dictionary to indicate whether or not the pet image label is of-a-dog, 
#          and to indicate whether or not the classifier image label is of-a-dog.
#          All dog labels from both the pet images and the classifier function
#          will be found in the dognames.txt file. We recommend reading all the
#          dog names in dognames.txt into a dictionary where the 'key' is the 
#          dog name (from dognames.txt) and the 'value' is one. If a label is 
#          found to exist within this dictionary of dog names then the label 
#          is of-a-dog, otherwise the label isn't of a dog. Alternatively one 
#          could also read all the dog names into a list and then if the label
#          is found to exist within this list - the label is of-a-dog, otherwise
#          the label isn't of a dog. 
#         This function inputs:
#            -The results dictionary as results_dic within adjust_results4_isadog 
#             function and results for the function call within main.
#            -The text file with dog names as dogfile within adjust_results4_isadog
#             function and in_arg.dogfile for the function call within main. 
#           This function uses the extend function to add items to the list 
#           that's the 'value' of the results dictionary. You will be adding the
#           whether or not the pet image label is of-a-dog as the item at index
#           3 of the list and whether or not the classifier label is of-a-dog as
#           the item at index 4 of the list. Note we recommend setting the values
#           at indices 3 & 4 to 1 when the label is of-a-dog and to 0 when the 
#           label isn't a dog.
#
##
# TODO 4: Define adjust_results4_isadog function below, specifically replace the None
#       below by the function definition of the adjust_results4_isadog function. 
#       Notice that this function doesn't return anything because the 
#       results_dic dictionary that is passed into the function is a mutable 
#       data type so no return is needed.
# 
def adjust_results4_isadog(results_dic, dogfile):
    """
    Adjusts the results dictionary to determine if classifier correctly 
    classified images 'as a dog' or 'not a dog', especially for cases where 
    there is no match between labels. The function adds two new items to each 
    entry in results_dic indicating if the pet and classifier labels are dogs.
    
    Parameters:
      results_dic - Dictionary with 'key' as image filename and 'value' as a 
                    List containing:
                  index 0 = pet image label (string)
                  index 1 = classifier label (string)
                  index 2 = 1/0 (int) where 1 = match between pet and classifier labels, 0 = no match
                ------ new indices added by this function -----
                 index 3 = 1/0 (int) where 1 = pet image 'is-a' dog, 0 = pet image 'is-NOT-a' dog
                 index 4 = 1/0 (int) where 1 = classifier label 'is-a' dog, 0 = classifier label 'is-NOT-a' dog
     dogfile - A text file containing names of all known dog breeds, one per line. Each name is in lowercase and may contain spaces.
     
    Returns:
           None - results_dic is mutable so no return needed.
    """           
    # Step 1: Create a dictionary of dog names from the dogfile
    dognames_dic = {}
    
    # Open the dogfile and read each line
    with open(dogfile, 'r') as f:
        for line in f:
            # Strip whitespace and newline, add name to dictionary with a value of 1
            dog_name = line.strip()
            dognames_dic[dog_name] = 1
    
    # Step 2: Adjust results dictionary based on whether labels are in dognames_dic
    for filename, attributes in results_dic.items():
        # Determine if pet label is a dog
        pet_label_is_dog = 1 if attributes[0] in dognames_dic else 0
        # Determine if classifier label is a dog by checking each term in the label
        classifier_label_is_dog = 0
        for term in attributes[1].split(", "):
            if term in dognames_dic:
                classifier_label_is_dog = 1
                break
        
        # Append the results for 'is-a-dog' checks to the results_dic entry
        attributes.extend([pet_label_is_dog, classifier_label_is_dog])
