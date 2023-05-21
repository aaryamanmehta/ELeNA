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
    # for node in G.nodes:
    #     print(G.nodes[node])
    #     if source_coords[0] == G.nodes[node]['x'] and source_coords[1] == G.nodes[node]['y']:
    #         print(node)
    path = findshortestPathElevation(G, source_coords, destination_coords, elevation)
 

    return path
    
    