from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/no-elevation/{route_info}")
async def shortest_route_no_elevation():
    return 1 