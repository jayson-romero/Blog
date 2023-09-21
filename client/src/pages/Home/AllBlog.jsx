import { useState } from "react"
import Card from "../../components/Card"
import Pagination from "./Pagination"
import useFetch from "../../utils/useFetch"

const AllBlog = () => {
	const { data } = useFetch("http://localhost:3000/posts")

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

	return (
		<>
			<div className="All-BLog bg-white dark:text-white dark:bg-blue-950 px-[20px] ">
				<div className="test wrapper max-w-[1216px] m-auto border-b-2 border-white pb-10">
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
			</div>
		</>
	)
}

export default AllBlog
