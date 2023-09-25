import { createContext, useState, useEffect } from "react"
import axios from "axios"

const BlogContext = createContext()
const BASE_URL = "http://localhost:3000/posts"

const BlogContextProvider = ({ children }) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	const fetchData = async () => {
		setLoading(true)
		try {
			const res = await axios.get(BASE_URL)
			setData(res.data)
		} catch (error) {
			setError(error)
		}
		setLoading(false)
	}

	return (
		<BlogContext.Provider value={{ fetchData, data, loading, error }}>
			{children}
		</BlogContext.Provider>
	)
}

export { BlogContext, BlogContextProvider }
