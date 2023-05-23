# ELeNA (Elevation-based Navigation)

## Introduction
EleNa is a map-based web application that enables users to decide routes between geographical locations with the inclusion of elevation as a factor. The application will have a 2D visualization of the map, in addition to labels to indicate the names of landmarks, areas, states, etc. The user may maximize and minimize elevation for the route chosen based on their preferences. 

The primary focus for this project is to implement an interactable, accessible UI for a valuable application, so as to provide the user with a pleasant, confusion-free experience when navigating the interface. In this case, the stakeholders in this project will be purely the clients using the web application as well as the software developers creating it. Examples of such clients include anyone who needs to plan a route based on elevation preferences, such as hikers, bikers, runners, or any outdoor enthusiasts. It could also be useful for urban planners or architects who need to consider elevation when designing routes or structures. Additionally, this software could be used by transportation companies or logistics companies who need to optimize their routes based on elevation preferences to save time and reduce costs.

TO RUN THE APPLICATION (!! after installing dependencies -- see below !!)
In the frontend folder: run **npm start** 
In the backeend folder: run **uvicorn server:app --reload** 

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


## Evaluation 

Alpha/Beta Testing: We collected back/bug reports on our product with friends/family in the alpha phase, and throughout campus in the beta phase. This will allow any issues or bugs to be identified and resolved before the final release. Given our priority on accessibility, Alpha/Beta testing can also be used to test the usability of the system. This will allow users to provide feedback on the system's ease of use, intuitive interface, and clear labels and icons. 
A/B (Split) Testing: During our beta phase, we will be collecting feedback on various versions of our UI using A/B testing. Some cases we used A/B test for were:
sliding scale elevation input vs multiple choice
display layout changes (i.e. full screen vs multiple displays) - decided on having a collapsable sidebar
