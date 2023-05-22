from DataMod.GraphHelper import *
from DataMod.ElevationDijkstra import *
from Controller.shortestPathNoElevation import get_shortest_path
import osmnx as ox

def getElevationPath(source : str, dest : str, elevation : str):
    source_info = get_location(source)
    destination_info = get_location(dest)
    G = generate_graph(source_info, destination_info)
    api_key = "AIzaSyDgaNg9PFBfxYMGrgtSvH3jEnfaNmnG594"
    G = ox.elevation.add_node_elevations_google(G, api_key, precision=3)

    source_coords = get_coordinates(source)
    destination_coords = get_coordinates(dest)
 
    path = findshortestPathElevation(G, source_coords, destination_coords, elevation)
    path = [[G.nodes[node_id]["y"], G.nodes[node_id]["x"]] for node_id in path] #get long and lat from node ids


    return path
    
    