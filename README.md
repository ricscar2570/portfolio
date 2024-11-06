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

import pandas as pd
import numpy as np
data = pd.read_csv("HR_comma_sep.csv")

### 2. Data Visualization **

We visualize key features like Satisfaction Level, Average Monthly Hours, and Number of Projects.

import matplotlib.pyplot as plt
import seaborn as sns

# Distribution of Average Monthly Hours
sns.histplot(data['average_montly_hours'], kde=True)
plt.title('Distribution of Average Monthly Hours')
plt.show()

### 3. Feature Engineering

Convert categorical features to dummy variables, handle missing values, and standardize numeric features for model compatibility.

from sklearn.preprocessing import StandardScaler
data = pd.get_dummies(data, drop_first=True)
scaler = StandardScaler()
scaled_data = scaler.fit_transform(data)

### 4. Model Training

We train a Random Forest Classifier and Logistic Regression model.

from sklearn.ensemble import RandomForestClassifier
rf_model = RandomForestClassifier(random_state=42)
rf_model.fit(X_train_scaled, y_train)

### 🧪 Model Performance

The models are evaluated using the following metrics:

    Accuracy
    Precision
    Recall
    F1 Score
    ROC AUC Score

### Example output:

Accuracy: 0.9877
Precision: 0.9855
Recall: 0.9618
F1 Score: 0.9735
ROC AUC Score: 0.9893

### Confusion Matrix

📈 Feature Importance

The Random Forest model provides insights into feature importance, helping us identify the most significant predictors of employee turnover.

📊 Results and Analysis

### Our analysis shows that:

    Satisfaction Level: Strongly influences retention, with lower satisfaction levels indicating higher turnover.
    Number of Projects and Average Monthly Hours: Significant factors in predicting employee retention.

This analysis serves as a foundation for HR departments to prioritize efforts in improving employee satisfaction and retention.
### 🛠️ Tech Stack

    Python (Pandas, Numpy, Scikit-Learn, Seaborn, Matplotlib)
    Machine Learning Models: Random Forest, Logistic Regression
    Visualization: Heatmaps, Distribution Plots, Feature Importances

### 📄 Requirements

To run this project, you’ll need to install the following libraries:

pip install pandas numpy scikit-learn matplotlib seaborn

### 🔗 License

This project is licensed under the MIT License.
### 📫 Contact

For any questions, reach out to Riccardo Scaringi.

Enjoy exploring the Employee Retention Analysis! Let's predict and prevent attrition before it happens! 💼

