import Hero from "./Hero"
import RecentBlogs from "./RecentBlogs"
import AllBlog from "./AllBlog"

import { useState, useEffect } from "react"
import axios from "axios"

const BlogLayout = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setData] = useState([])
	const [error, setError] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			const fetchingData = async () => {
				setIsLoading(true)
				try {
					const response = await axios.get("http://localhost:3000/posts")
					setData(response.data)
					setIsLoading(false)
				} catch (error) {
					setError(error)
					setIsLoading(false)
				}
			}
			fetchingData()
		}, 1000)
	}, [])

	const filteredData = data.filter((item) => item.recent === true)

	return (
		<>
			<Hero />
			<RecentBlogs data={filteredData} isLoading={isLoading} />
			<AllBlog data={data} isLoading={isLoading} />
		</>
	)
}

export default BlogLayout
