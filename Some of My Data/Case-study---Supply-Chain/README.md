# Supply Chain Data Analysis Project

## Introduction

This project dives deep into analyzing the supply chain of a company to optimize logistics, reduce operational costs, and improve overall supply chain efficiency. By examining data such as lead times, transportation costs, production volumes, and supplier performance, this analysis aims to uncover strategic insights to support effective supply chain management.

## Objectives

The primary objective of this project is to identify optimization opportunities within the supply chain. Specifically, we aim to:
- Analyze the distribution of lead times and assess differences among suppliers.
- Use clustering methods to group products and deliveries into meaningful categories.
- Provide visual insights to better understand the dynamics of lead times, costs, and sales volumes.

## Methodology

To achieve these objectives, the following steps were undertaken:

### 1. Data Loading and Cleaning

Data was loaded using `pandas`, and numeric and categorical columns were identified. Missing values were filled with the median for numeric columns and the mode for categorical ones, ensuring a complete dataset for analysis.

### 2. Data Standardization

Before clustering, numeric data was standardized to eliminate any scaling effects, using `StandardScaler` from `sklearn`.

### 3. K-Means Clustering

We applied the `KMeans` clustering algorithm with 4 clusters to segment the data into meaningful groups. This allowed us to identify clusters of products and deliveries with similar characteristics, such as costs, lead times, and sales volumes.

### 4. Visualization of Results

Visualizations were crucial for interpreting the results and included:
- **Lead Time Distribution:** A histogram showing lead time distribution.
- **Supplier Cost Distribution:** A boxplot comparing costs across suppliers.
- **3D Cluster Visualization:** A 3D plot to analyze clusters by lead times, costs, and sales volumes.
- **Total Products Sold per Cluster:** A bar chart displaying the total products sold for each cluster.
- **Lead Times vs. Costs Distribution:** A scatter plot illustrating the correlation between lead times and costs within different clusters.

## Results and Conclusions

This analysis provided significant insights for optimizing the supply chain:
- **Lead Time Variability:** There is considerable variability in lead times, suggesting a need to review certain logistical processes.
- **Supplier Cost Variations:** Supplier costs vary greatly, indicating that some suppliers may require price negotiations to reduce overall costs.
- **Cluster-Based Insights:** Clustering identified groups of products with similar characteristics, allowing tailored management strategies for each cluster.
- **3D Cluster Visualizations:** These provided a clear view of the relationships between lead times, costs, and sales volumes, highlighting potential bottlenecks in the supply chain.

In conclusion, this analysis supports decision-making in supply chain management and suggests strategies to improve logistical efficiency and reduce operational costs.

## Possible Project Extensions

To further enhance the analysis, the following methods could be implemented:
- **Predictive Analysis:** Use machine learning models to predict lead times based on historical factors.
- **Route Optimization:** Implement optimization algorithms to improve transportation route efficiency.
- **Variable Cost Analysis:** Monitor variable costs to identify potential areas for reducing operational expenses.
