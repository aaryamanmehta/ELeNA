[LINK TO DEMO VIDEO!]([url](https://drive.google.com/file/d/1HEzZmIsxfYGaeUJoD1btf7zecHahQOEq/view?usp=sharing))
https://drive.google.com/file/d/1HEzZmIsxfYGaeUJoD1btf7zecHahQOEq/view?usp=sharing

# ELeNA (Elevation-based Navigation)

## Introduction
EleNa is a map-based web application that enables users to decide routes between geographical locations with the inclusion of elevation as a factor. The application will have a 2D visualization of the map, in addition to labels to indicate the names of landmarks, areas, states, etc. The user may maximize and minimize elevation for the route chosen based on their preferences. 

The primary focus for this project is to implement an interactable, accessible UI for a valuable application, so as to provide the user with a pleasant, confusion-free experience when navigating the interface. In this case, the stakeholders in this project will be purely the clients using the web application as well as the software developers creating it. Examples of such clients include anyone who needs to plan a route based on elevation preferences, such as hikers, bikers, runners, or any outdoor enthusiasts. It could also be useful for urban planners or architects who need to consider elevation when designing routes or structures. Additionally, this software could be used by transportation companies or logistics companies who need to optimize their routes based on elevation preferences to save time and reduce costs.

**TO RUN THE APPLICATION (!! after installing dependencies -- see below !!)**

In the frontend folder: run **npm start** 

In the backend folder: run **uvicorn server:app --reload** 

## List of features

Using OpenStreetMap’s API for autocomplete functionality, the user would input the origin and destination addresses.

The user has several options to choose from when calculating the route from the origin and the destination. They may select the shortest path with no elevation. The user may also input a percentage value of the shortest path, essentially an “offset” value, that they are willing to travel extra, and can select whether to maximize or minimize elevation. The route will be displayed depending on the user’s preferences.

Using OpenStreetMap’s API, the user will be able to interact with the map, such as viewing the area surrounding the route, zooming in/out, panning, etc. 


## Installation
**ATTENTION** Before running the app install the neccesary dependencies

In the frontend folder: run **npm install** to install the neccesary dependencies

In the backend folder: use pip or another app to install the following packages
  uvicorn 
  fastapi 
  pydantic
  scikit-learn
  osmnx 

Thank you to the developers of all of our inculded libraries and packages

## Evaluation 
**Our main source of feedback was through modified-Likert-scale-style surveys using Google Surveys.**

**Alpha/Beta Testing: **
We collected back/bug reports on our product with friends/family in the alpha phase, and throughout campus in the beta phase. This allowed functional issues and bugs to be identified. 

Given our priority on UI and accessibility, Alpha/Beta testing was also used to test the usability of the system. This allowed to provide feedback on the system's ease of use, intuitive interface, and clear labels and icons. 

**A/B (Split) Testing: **
During our beta phase, we collected feedback on various versions of our UI using A/B testing. Some cases we used A/B test for were:

Sliding scale input vs Multiple choice
Our test users decided that having a sliding scale bar to input shortest path %  was the most intuitive

Display layout changes (i.e. full screen vs multiple displays) 
Our test users were conflicted on which they preferred, and many suggested we have a collapsable 
sidebar, which we implemented in our latest version	

## Contributors

According to the CS520 project requirements, our usernames as they pertain to our real names are:

@AvadRaul20 - Rahul A

@Aryan-Dang - Aryan D

@vivjamba - Vivien J

@aaryamanmehta - Aaryaman M

## Bug Reports/Notes

- We aim to optimize our autocomplete feature (the current library we use is slower than optimal) and implement use of a different autocomplete library
- We aim to maximize-elevation make our functionality completely functional
- We aim to make the map auto-center upon clicking a button
