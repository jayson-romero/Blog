import { useEffect, useState } from "react"
import RecentItem from "../Recent Blog/RecentItem"
import axios from "axios"

const AllBlog = () => {
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

	return (
		<>
			<div className="All-BLog bg-white dark:text-white dark:bg-blue-950 px-[20px] ">
				<div className="test wrapper max-w-[1216px] m-auto">
					<h2 className="text-[24px] font-semibold leading-[32px] mb-[32px]">
						Recent blog posts
					</h2>
					<div className="wrapper md:flex md:flex-row md:jusity-between  md:flex-wrap  gap-2">
						{data.map((blog, index) => (
							<RecentItem
								blog={blog}
								key={blog.id}
								index={index}
								recentBlog={false}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default AllBlog
