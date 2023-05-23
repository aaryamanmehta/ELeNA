import networkx as nx
import osmnx as ox
import math
import heapq
from DataMod.PathHelper import *
import sys

# def max_elevation_weight(G, source, dest, weight):
#     elevation_diff = max(0, G.nodes[source]['elevation'] - G.nodes[dest]['elevation'])
#     return weight['length'] + elevation_diff

# def min_elevation_weight(G, source, dest, weight):
#     elevation_diff = min(0, G.nodes[dest]['elevation'] - G.nodes[source]['elevation'])
#     return weight['length'] + elevation_diff

def findshortestPathElevation(G, source, dest, elevation, length_constraint = 0):
    path = []
    percent = 34
    percent += 100
    possible_paths = {}
    floored_percent = (percent / 10.0) * 10.0
    constraints = []
    Snode = ox.nearest_nodes(G, source[0], source[1])
    Dnode = ox.nearest_nodes(G, dest[0], dest[1])
    i = 100
    while i <= floored_percent:
        constraints.append(i)
        i += 10
    
    for constraint in constraints:
        pathLen = float(length_constraint) * (float(constraint) / 100)
        queue = []
        heapq.heappush(queue, (0, Snode))
        revPath = {}
        cost = {}
        cost_ele = {}
        revPath[Snode] = None
        cost[Snode] = 0
        cost_ele[Snode] = 0
        while len(queue) != 0:
            (val, cur) = heapq.heappop(queue)
            if cur == Dnode:
                if cost[cur] <= pathLen:
                    break
            for curr, nxt, data in G.edges(cur, data = True):     
                currCost = cost[curr] + get_edge_length(G, curr, nxt)
                currCost_ele = cost_ele[curr]
                ele_cost = get_node_ele(G, nxt) - get_node_ele(G, curr)
                if ele_cost > 0:
                    currCost_ele += ele_cost
                if nxt not in cost or currCost < cost[nxt]:
                    cost[nxt] = currCost
                    cost_ele[nxt] = currCost_ele
                    priority = currCost_ele
                    #elevation consideration not working properly (maxElevation runs for an infinite loop)
                    # if elevation:
                    #     priority = -currCost_ele
                    # else:
                    #     priority = currCost_ele
                    heapq.heappush(queue, (priority, nxt))
                    revPath[nxt] = curr
            
        path = create_path(revPath, Snode, Dnode)

        possible_paths[get_path_ele(G, path)] = path
    
    min_path = []
    max_path = []
    for key in possible_paths.keys():
        if key <= length_constraint:
            min_path = possible_paths[key]
        if key  >= length_constraint:
            max_path = possible_paths[key]

    #elevation not working properly
    # if elevation:
    #     path = max_path
    # else:
    path = min_path
    
    return path
    
