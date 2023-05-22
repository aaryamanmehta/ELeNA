from DataMod.GraphHelper import *
from DataMod.dijkstra import *

def get_shortest_path(source_request : str, destination_request : str):
    source_info = get_location(source_request)
    destination_info = get_location(destination_request)
    graph = generate_graph(source_info, destination_info)
    # graph = load_graph("DataMod/GeneratedMaps/Amherst.graphml")
    source_coords = get_coordinates(source_request)
    destination_coords = get_coordinates(destination_request)
    path = dijkstra(source_coords, destination_coords, graph)
    # path = [[graph.nodes[node_id]["y"], graph.nodes[node_id]["x"]] for node_id in path]
    return path
