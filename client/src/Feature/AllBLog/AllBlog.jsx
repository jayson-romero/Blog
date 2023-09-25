import { useState } from "react"
import Card from "../../components/Card"
import Pagination from "../../Layout/Pagination"
import useFetch from "../../utils/useFetch"

const AllBlog = ({ data, loading }) => {
	// const { data, loading } = useFetch("http://localhost:3000/posts")

	const postPerPage = 6
	const [currentPage, setCurrentPage] = useState(1)
	const totalPosts = data.length
	const totalPages = Math.ceil(totalPosts / postPerPage)

	const handlePageChange = (page) => {
		setCurrentPage(page)
	}

	const indexOfLastPost = currentPage * postPerPage
	const indexOfFirstPost = indexOfLastPost - postPerPage
	const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

	if (loading) {
		return (
			<div className="flex items-center justify-center z-50 dark:text-white dark:bg-blue-950">
				<div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
				<p className="mt-4 text-blue-500 text-xl">loading</p>
			</div>
		)
	}

	return (
		<>
			<div className="border-b-2 border-blue-950 dark:border-white py-10">
				<h2 className="text-[24px] font-semibold leading-[32px] mb-[32px]">
					All blog posts
				</h2>
				<div className="wrapper md:flex md:flex-row md:jusity-between  md:flex-wrap  gap-2">
					{data &&
						currentPosts.map((blog, index) => (
							<Card
								blog={blog}
								key={blog.id}
								index={index}
								recentBlog={false}
							/>
						))}
				</div>
			</div>
			<div className=" max-w-[1216px] m-auto bg-white dark:text-white dark:bg-blue-950 px-[20px] pb-10 ">
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			</div>
		</>
	)
}

export default AllBlog
