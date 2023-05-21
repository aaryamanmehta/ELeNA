import networkx as nx
import osmnx as ox
import sys

def max_elevation_weight(G, source, dest, weight):
    elevation_diff = max(0, G.nodes[source]['elevation'] - G.nodes[dest]['elevation'])
    return weight['length'] + elevation_diff

def min_elevation_weight(G, source, dest, weight):
    elevation_diff = min(0, G.nodes[dest]['elevation'] - G.nodes[source]['elevation'])
    return weight['length'] + elevation_diff

def findshortestPathElevation(G, source, dest, elevation):
    # path = []
    # source_node = ox.distance.nearest_nodes(G, source[0], source[1])
    # dest_node = ox.distance.nearest_nodes(G, dest[0], dest[1])
    # for u, v, edge_data in G.edges(data=True):
    #     edge_data['custom_weight_max'] = max_elevation_weight(G, u, v, edge_data)
    #     edge_data['custom_weight_min'] = min_elevation_weight(G, u, v, edge_data)
    # if elevation == "max":
    #     path = nx.shortest_path(G, source=source_node, target=dest_node, weight='custom_weight_max')
    # elif elevation == "min":
    #     path = nx.shortest_path(G, source=source_node, target=dest_node, weight='custom_weight_min')
    # return path
    source_node = ox.distance.nearest_nodes(G, source[0], source[1])
    dest_node = ox.distance.nearest_nodes(G, dest[0], dest[1])
    for u, v, edge_data in G.edges(data=True):
        edge_data['custom_weight_max'] = max_elevation_weight(G, u, v, edge_data)
        edge_data['custom_weight_min'] = min_elevation_weight(G, u, v, edge_data)

    if elevation == "max":
        weight_attr = 'custom_weight_max'
    elif elevation == "min":
        weight_attr = 'custom_weight_min'
    else:
        print("Invalid elevation type")
        sys.exit(1)

    path = nx.shortest_path(G, source=source_node, target=dest_node, weight=weight_attr)
    return path
    
        