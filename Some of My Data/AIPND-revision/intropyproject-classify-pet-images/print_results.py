#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# */AIPND-revision/intropyproject-classify-pet-images/print_results.py
#                                                                             
# PROGRAMMER: 
# DATE CREATED:
# REVISED DATE: 
# PURPOSE: Create a function print_results that prints the results statistics
#          from the results statistics dictionary (results_stats_dic). It 
#          should also allow the user to be able to print out cases of misclassified
#          dogs and cases of misclassified breeds of dog using the Results 
#          dictionary (results_dic).  
#         This function inputs:
#            -The results dictionary as results_dic within print_results 
#             function and results for the function call within main.
#            -The results statistics dictionary as results_stats_dic within 
#             print_results function and results_stats for the function call within main.
#            -The CNN model architecture as model wihtin print_results function
#             and in_arg.arch for the function call within main. 
#            -Prints Incorrectly Classified Dogs as print_incorrect_dogs within
#             print_results function and set as either boolean value True or 
#             False in the function call within main (defaults to False)
#            -Prints Incorrectly Classified Breeds as print_incorrect_breed within
#             print_results function and set as either boolean value True or 
#             False in the function call within main (defaults to False)
#         This function does not output anything other than printing a summary
#         of the final results.
##
# TODO 6: Define print_results function below, specifically replace the None
#       below by the function definition of the print_results function. 
#       Notice that this function doesn't to return anything because it  
#       prints a summary of the results using results_dic and results_stats_dic
# 
def print_results(results_dic, results_stats_dic, model, 
                  print_incorrect_dogs = False, print_incorrect_breed = False):
    """
    Prints a summary of classification results, including overall statistics 
    from results_stats_dic and details of misclassified dogs and breeds based 
    on user preferences.
    
    Parameters:
      results_dic - Dictionary with key as image filename and value as a List 
             (index)idx 0 = pet image label (string)
                    idx 1 = classifier label (string)
                    idx 2 = 1/0 (int)  where 1 = match between pet image and 
                            classifier labels and 0 = no match between labels
                    idx 3 = 1/0 (int)  where 1 = pet image 'is-a' dog and 
                            0 = pet Image 'is-NOT-a' dog. 
                    idx 4 = 1/0 (int)  where 1 = Classifier classifies image 
                            'as-a' dog and 0 = Classifier classifies image  
                            'as-NOT-a' dog.
      results_stats_dic - Dictionary with statistics on results:
             Keys start with 'pct' for percentages or 'n' for counts.
      model - CNN model architecture (string, values: 'resnet', 'alexnet', 'vgg')
      print_incorrect_dogs - If True, prints details of images incorrectly classified as dogs/non-dogs.
      print_incorrect_breed - If True, prints details of images where breed classification was incorrect.
    Returns:
           None - function only prints the summary and optionally misclassifications.
    """    
    # Print the CNN model architecture used
    print(f"\n*** Results Summary for CNN Model Architecture: {model.upper()} ***")

    # Print overall counts of images, dog images, and "not-a" dog images
    print(f"Number of Images: {results_stats_dic['n_images']}")
    print(f"Number of Dog Images: {results_stats_dic['n_dogs_img']}")
    print(f"Number of 'Not-a' Dog Images: {results_stats_dic['n_notdogs_img']}")

    # Print all percentage statistics (those keys starting with 'pct')
    print("\n*** Classification Accuracy Statistics ***")
    for key in results_stats_dic:
        if key.startswith('pct'):
            print(f"{key}: {results_stats_dic[key]:.2f}%")

    # If requested, print misclassified dogs
                   
    # if print_incorrect_dogs:
    if print_incorrect_dogs and (results_stats_dic['n_correct_dogs'] + results_stats_dic['n_correct_notdogs'] != results_stats_dic['n_images']): 
        print("\n*** Misclassified Dogs ***")
        # Loop through results to find misclassified dogs
        for filename, values in results_dic.items():
            # Incorrect dog classification: pet label is a dog but classifier label is not (or vice versa)
            if values[3] != values[4]:
                #print(f"Image: {filename}") deleted for unusefulness
                print(f"Pet Label: {values[0]} - Classifier Label: {values[1]}")
    
    # If requested, print misclassified breeds
    if print_incorrect_breed and (results_stats_dic['n_correct_dogs'] != results_stats_dic['n_correct_breed']):   
    #if print_incorrect_breed:
        print("\n*** Misclassified Dog Breeds ***")
        # Loop through results to find misclassified breeds
        for filename, values in results_dic.items():
            # Incorrect breed classification: pet label and classifier both identify as dogs, but breeds do not match
            if values[3] == 1 and values[4] == 1 and values[2] == 0:
                #print(f"Image: {filename}") deleted for unusefulness
                print(f"Pet Label: {values[0]} - Classifier Label: {values[1]}")
