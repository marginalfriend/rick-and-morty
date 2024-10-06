import axios from "axios";

const api = axios.create({
	baseURL: "https://rickandmortyapi.com/api/",
})

export async function getCharacters() {
	const response = await api.get("/character")
	return response.data
}

export async function getLocations() {
	const response = await api.get("/location")
	return response.data
}

export async function getEpisodes() {
	const response = await api.get("/episode")
	return response.data
}