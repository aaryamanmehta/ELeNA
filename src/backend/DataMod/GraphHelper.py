import osmnx as ox

def save_graph(place, filename):
    G = ox.graph_from_place(place, network_type="walk")
    ox.save_graphml(G, filename)

'''
Returns the saved graph for the given filename
'''
def load_graph(filename):
    # it's guarenteed this file exists
    return ox.load_graphml(filename)