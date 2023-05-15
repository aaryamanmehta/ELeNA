from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.post("/no-elevation/")
async def shortest_route_no_elevation(data):
    print(data)
    return 1 