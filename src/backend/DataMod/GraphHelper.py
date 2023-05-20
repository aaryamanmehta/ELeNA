import osmnx as ox
import json

def save_graph(place, filename):
    G = ox.graph_from_place(place, network_type="walk")
    ox.save_graphml(G, filename)

def load_graph(filename):
    '''
    Returns the saved graph for the given filename

    input : name of the file where the graph is saved
    return : OSMnx Graph Object
    '''
    # it's guarenteed this file exists
    return ox.load_graphml(filename)

def get_location(location_request : str):
    '''
    Returns the City/Town, County, State and Country from the "label" in the location request
    '''
    location_info = json.loads(location_request)
    label = location_info["label"]
    label_list = label.split(", ")
    country = label_list[-1]
    state = label_list[-3]
    county = label_list[-4]
    city = label_list[-5]

    return city, county, state, country

def generate_graph(source_info : tuple[str], destination_info : tuple[str]):
    if source_info[-1] != destination_info[-1]:
        #not the same country
        pass
    elif source_info[-2] != destination_info[-2]:
        #not the same state
        pass
    elif source_info[-3] != destination_info[-3]:
        #not the same county
        pass
    elif source_info[-4] != destination_info[-4]:
        #not the same city/town
        pass
    else:
        #the source and destination are located in the same city/town
        #generate the city/town graph and save it
        pass