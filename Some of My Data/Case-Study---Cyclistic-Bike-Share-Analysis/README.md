# 🚲 Cyclistic Bike-Share Analysis Case Study

![Cyclistic Logo](assets/cyclistic_logo.png)

Welcome to the **Cyclistic Bike-Share Analysis**! This case study dives into the behaviors of **casual riders** and **annual members** of Cyclistic, a leading bike-share company in Chicago. Through data analysis, we uncover key differences in usage patterns to inform marketing strategies aimed at converting casual riders into annual members.

---

## 📋 Project Overview

This project uses a structured data analysis process:
1. **Ask**: Define key questions and project goals.
2. **Prepare**: Load and clean the dataset.
3. **Process**: Enrich data with calculated columns.
4. **Analyze**: Identify and interpret key trends.
5. **Share**: Communicate findings effectively.
6. **Act**: Offer actionable recommendations based on insights.

---

## 🔍 Scenario

As a junior data analyst on Cyclistic's marketing team, my objective was to analyze **casual riders** vs **annual members** to inform a targeted marketing campaign. By understanding distinct behaviors, we aim to encourage casual riders to convert to annual memberships, supporting Cyclistic’s growth and revenue goals.

**Key Questions:**
1. How do annual members and casual riders use Cyclistic bikes differently?
2. Why would casual riders consider an annual membership?
3. How can Cyclistic’s digital marketing strategies convert casual riders to members?

---

## 🔧 Data Preparation and Enrichment

- **Data Cleaning**: Dropped null values and filtered out zero/negative duration rides.
- **Feature Engineering**: Calculated `ride_length`, `day_of_week`, and added placeholders for environmental factors like `weather_type`.
- **Grouping and Aggregation**: Summarized data by relevant fields to reveal deeper patterns.

```python
# Sample Python Code for Aggregation
user_stats = all_data.groupby(['member_casual', 'day_of_week']).agg({
    'ride_length': ['mean', 'count']
}).reset_index()
