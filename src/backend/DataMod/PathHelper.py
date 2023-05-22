import osmnx as ox
import networkx as nx
from DataMod.GraphHelper import *
def get_shortest_length(G, source, dest):
    '''
    This method returns the length of the path in meters

    input : 
    path is the list of nodes in the path
    graph is the loaded graph containing both source and destination

    return:
    the length of the path in meters
    '''
    path = ox.distance.shortest_path(G, source, dest, weight='length')
    length = 0
    for i in range(len(path)-1):
        length += G[path[i]][path[i+1]][0]['length']
    return length

def get_edge_length(G, currNode, destNode):
    return G.edges[currNode, destNode, 0]['length']

def get_node_ele(G, node):
    return G.nodes[node]['elevation']

def create_path(nodes, source, dest):
    path = []
    n = dest
    path.append(n)
    while n != source:
        n = nodes[n]
        path.append(n)
    return path[::-1]

def get_edge_ele(G, currNode, destNode):
    return G.nodes[currNode]['elevation'] - G.nodes[destNode]['elevation']

def get_path_ele(G, path):
    elevation = 0
    for i in range(len(path)-1):
        if(path[i+1] == None):
            print(i)
            print(len(path))
        elevation += max(0, get_edge_ele(G, path[i], path[i+1]))
    return elevation

        
