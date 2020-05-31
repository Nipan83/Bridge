# BarelyAvailable Resources InterRegion Distribuition GuidE (BRIDGE)

### Bridge is an application built as a part of the [Covid'19 Spaceapps Challenge](https://covid19.spaceappschallenge.org/challenges/covid-challenges). With this application, we're trying to mitigate the impact of Covid'19 on UN Sustainable Development Goals(SDGs).

## Objective

To build a web application which can eradicate the food security problem in hard times like Covid'19 by using a ML Recommendation Engine. 

## Current Scenario

According to [USDA](https://www.ers.usda.gov), 11.1% of households were food insecure at least some time during the year 2018 which is roughly **36.4 million Americans**. On the contray, US has **897,400 (100 acres) of farmlands** and **2,023,400 number of farms as of 2019**, stated in a report by [NASS](https://www.nass.usda.gov). And according to another report, In 2018, Americans wasted around **30%-40% of the entire US food supply**. 

> To understand the scenario, let's google something - 

<img src="https://github.com/Nipan83/Bridge/blob/master/resources/collage-news.jpg" alt="Images of News Article" width="1000" height="600">

### So what could be the issue?

**Connecting the dots based on the above statistics, one of the reason could be absence of a bridge to link the supplier and buyer in an optimized way leading to wastage of food at one region and food insecurity in another region.** 

And if this continues, by 2050 when the demand will be 60% higher than today, not to mention the scenario will get worse.

## What are we proposing to tackle this problem?

Barely-available Resources' Inter-region Distribution GuidE (BRIDGE) is a smart web application which leverages the power of machine learning to identify potential hotspots around the world where there is a rise in demand for resources(food/medical/human) but are not met. Simillarly hotspots are identified where excess production is made without a potential consumer. Our brief project motto is to bridge this divide and aid the government in empowering every single individual to achieve more.

**BRIDGE follows the following steps to mitigate the issue-**

- NASA Satellite Images are processed using Image Processing tools to determine county-wise cropland data and crops production. 
- Two indexes are then calculated for every resource for a particular region, DemandIndexForResourceA and SupplyIndexForResourceA where an internal algorithm that takes in a ton of parameters like
`Agricultural harvest of the region, GDP of the region, Population to Harvest ratio, Resource Cost at the region etc....` 
- After training the model, we prepare one recommendation engine which gives us the Top 5 potential supplier for a buyer region.
- These data and statistics are then showed in an Angular based Dashboard. 

<img src="https://github.com/Nipan83/Bridge/blob/master/resources/Bridge%20Diagram.jpeg" alt="Flow Chart" width="1000" height="600">
