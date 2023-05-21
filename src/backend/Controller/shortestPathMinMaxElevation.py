from DataMod.GraphHelper import *
from DataMod.dijkstra import *
from Controller.shortestPathNoElevation import get_shortest_path
import osmnx as ox

def getElevationPath(source : str, dest : str, elevation : str):
    source_info = get_location(source)
    destination_info = get_location(dest)
    G = generate_graph(source_info, destination_info)
    api_key = "AIzaSyDgaNg9PFBfxYMGrgtSvH3jEnfaNmnG594"
    G = ox.elevation.add_node_elevations_google(G, api_key, precision=3)
    G = ox.elevation.add_edge_grades(G, add_absolute=True, precision=3)
    
    if elevation != "max":
        for node in G:
            #convert all the elevations to negative
            G.nodes[node]["elevation"] *= -1
    else:
        for node in G:
            continue
    source_coords = get_coordinates(source)
    for node in G:
        print(G.nodes[node]["x"])
    destination_coords = get_coordinates(dest)
    path = dijkstra(source_coords, destination_coords, G)
    path = [[G.nodes[node_id]["y"], G.nodes[node_id]["x"]] for node_id in path]
    return path
    
    