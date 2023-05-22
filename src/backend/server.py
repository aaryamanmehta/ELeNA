from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from Controller.shortestPathMinMaxElevation import getElevationPath
from Controller.shortestPathNoElevation import get_shortest_path

app = FastAPI()

class LocationData(BaseModel):
    source: str
    destination: str

class elevationLocationData(BaseModel):
    source: str
    destination: str
    elevation: str

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.post("/no-elevation")
async def shortest_route_no_elevation(data : LocationData):
    path = get_shortest_path(data.source, data.destination)
    print(path)
    return path 

@app.post("/with-elevation")
async def shortest_route_with_elevation(data : elevationLocationData):
    path = getElevationPath(data.source, data.destination, data.elevation )
    print(path)
    return path 

