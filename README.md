# Case-Study-HR-Salifort-Motors

# 📊 Employee Retention Analysis with Machine Learning

Welcome to the **Employee Retention Analysis** project! This project uses machine learning to analyze key factors influencing employee retention in an organization. With powerful visualizations, feature engineering, and classification models, we aim to identify the main contributors to employee attrition and suggest actionable insights.

![Employee Retention Analysis](assets/retention_analysis_banner.png)

## 🔍 Project Overview

Employee turnover can be costly and disruptive for organizations. This project explores how different factors such as **satisfaction level**, **average monthly hours**, and **number of projects** impact employee retention.

- **Data**: HR Dataset (`HR_comma_sep.csv`)
- **Goal**: Build and evaluate a model to predict employee turnover based on available features.

---

## 🚀 Project Workflow

1. **Data Loading and Exploration**: Loading data with `Pandas` and performing initial exploration with `Seaborn` and `Matplotlib`.
2. **Data Cleaning**: Handling missing values and transforming categorical variables.
3. **Feature Engineering**: Applying one-hot encoding and standardization to numeric features.
4. **Model Training**: Using a **Random Forest Classifier** and **Logistic Regression** to predict employee turnover.
5. **Model Evaluation**: Assessing model performance with metrics like **Accuracy**, **Precision**, **Recall**, and **F1 Score**.

---

## 🔧 Code Walkthrough

### 1. Data Loading and Preprocessing

```python
import pandas as pd
import numpy as np
data = pd.read_csv("HR_comma_sep.csv")
data.info()

