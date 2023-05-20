import osmnx as ox

def save_graph(place, filename):
    G = ox.graph_from_place(place, network_type="walk")
    ox.save_graphml(G, filename)

def load_graph(filename):
    '''
    Returns the saved graph for the given filename

    input : name of the file where the graph is saved
    return : OSMnx Graph Object
    '''
    # it's guarenteed this file exists
    return ox.load_graphml(filename)