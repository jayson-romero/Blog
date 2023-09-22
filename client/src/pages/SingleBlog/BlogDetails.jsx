import Cat from "../../components/Cat"
import { useParams } from "react-router-dom"
import useFetch from "../../utils/useFetch"

const BlogDetails = () => {
	const { blogId } = useParams()
	const { data, loading } = useFetch(`http://localhost:3000/posts/${blogId}`)

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
			<div className="dark:text-white dark:bg-blue-950 px-[20px]">
				<div className="wrapper max-w-[1216px] m-auto border-b-2 border-blue-950 dark:border-white pb-10">
					<div className="text-[24px] font-semibold leading-[32px] mb-[32px] ">
						{data.title}
					</div>

					<img src={data.img} alt="" />
					<span className="date dark:text-violet-800 text-[14px] font-semibold leading-[20px] ">
						{data.date}
					</span>
					<div className="category my-[24px] flex gap-2">
						<p className="dark:text-gray-300 text-[14px]">Category:</p>
						{data.category.map((cat) => (
							<Cat key={cat} cat={cat} />
						))}
					</div>
					<div className="desc">
						<div
							className={`first-letter:text-4xl first-letter:font-bold first-letter:text-white
							  dark:text-gray-300  indent-8 whitespace-pre-line leading-loose mt-[20px] `}
						>
							{data.desc}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BlogDetails
