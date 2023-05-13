import osmnx as ox

def save_graph(place, filename):
    G = ox.graph_from_place(place, network_type="walk")
    ox.save_graphml(G, filename)
