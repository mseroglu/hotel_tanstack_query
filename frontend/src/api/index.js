import axios from "axios"


const api = axios.create({
    baseURL: "http://localhost:4000"
})

export const getPlaces = (params) => api.get("/api/places", {params}).then(res => res.data)

export const getDetail = (id) => api.get("api/place/"+id).then(res => res.data.place)

export const addPlace = (newData) => api.post("/api/places", newData)

export const delPlace = (id) => api.delete("/api/place/"+id)


