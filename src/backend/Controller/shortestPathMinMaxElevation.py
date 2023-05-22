from DataMod.GraphHelper import *
from DataMod.PathHelper import *
from DataMod.ElevationDijkstra import *
import osmnx as ox

def getElevationPath(source : str, dest : str, elevation : str):
    source_info = get_location(source)
    destination_info = get_location(dest)
    G = generate_graph(source_info, destination_info)
    api_key = "AIzaSyDgaNg9PFBfxYMGrgtSvH3jEnfaNmnG594"
    G = ox.elevation.add_node_elevations_google(G, api_key, precision=3)

    source_coords = get_coordinates(source)
    destination_coords = get_coordinates(dest)
    source_node = ox.distance.nearest_nodes(G, source_coords[0], source_coords[1])
    destination_node = ox.distance.nearest_nodes(G, destination_coords[0], destination_coords[1])
 
    path = findshortestPathElevation(G, source_coords, destination_coords, elevation)
    path = [[G.nodes[node_id]["y"], G.nodes[node_id]["x"]] for node_id in path] #get long and lat from node ids


    pathLen = get_shortest_length(G, source_node, destination_node)
    elev = True
    if elevation == "max":
        elev = True
    elif elevation == "min":
        elev = False
    path = findshortestPathElevation(G, source_coords, destination_coords, elev, pathLen)
    return path
    
    