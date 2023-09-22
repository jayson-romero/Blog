import Card from "../../components/Card"
import useFetch from "../../utils/useFetch"

const RecentBlogs = () => {
	const { data, loading } = useFetch("http://localhost:3000/posts")

	const filteredData = data.filter((item) => item.recent === true)

	return (
		<>
			<div className="recent-blog-post dark:text-white dark:bg-blue-950 px-[20px]">
				<div className="wrapper max-w-[1216px] m-auto  border-b-2 border-blue-950 dark:border-white py-10 ">
					<h2 className="text-[24px] font-semibold leading-[32px] mb-[32px]">
						Recent blog posts
					</h2>
					<div className="lg:grid grid-cols-2 grid-flow-row gap-4">
						{/* IFLOADING  */}
						{loading && (
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
									<Card blog={blog} index={index} recentBlog={true} />
								</div>
							))}
					</div>
				</div>
			</div>
		</>
	)
}

export default RecentBlogs
