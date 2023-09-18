import { useEffect, useState } from "react"
import RecentItem from "./RecentItem"
import axios from "axios"

const RecentBlogs = () => {
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
			<div className="recent-blog-post dark:text-white dark:bg-blue-950 px-[20px]">
				<div className="wrapper max-w-[1216px] m-auto  ">
					<h2 className="text-[24px] font-semibold leading-[32px] mb-[32px]">
						Recent blog posts
					</h2>
					<div className="lg:grid grid-cols-2 grid-flow-row gap-4">
						{/* IFLOADING  */}
						{isLoading && (
							<div className="flex items-center justify-center z-50 dark:text-white dark:bg-blue-950">
								<div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
								<p className="mt-4 text-blue-500 text-xl">loading</p>
							</div>
						)}

						{data &&
							filteredData.map((blog, index) => (
								<div
									className={`${index === 0 ? "row-span-2" : ""}  ${
										index === 3 ? "col-span-2" : ""
									} `}
									key={blog.id}
								>
									<RecentItem blog={blog} index={index} recentBlog={true} />
								</div>
							))}
					</div>
				</div>
			</div>
		</>
	)
}

export default RecentBlogs
