import osmnx as ox
import networkx as nx

'''
This method returns the shortest path from source to destination

input : 
source and destination represent the locations as `tuples of coordinates` (lattitude, longtitude)
graph is the loaded graph containing both source and destination

return:
the shortest path from source to destination
'''
def dijkstra(source : tuple, destination : tuple, graph):
    # find the nearest node in the street network to the source and destination points
    source_node = ox.distance.nearest_nodes(graph, source[0], source[1])
    destination_node = ox.distance.nearest_nodes(graph, destination[0], destination[1])

    # apply Dijkstra's algorithm to find the shortest path between the source and destination nodes
    path = nx.shortest_path(graph, source_node, destination_node, weight='length')
