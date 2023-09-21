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
				<div className="wrapper max-w-[1216px] m-auto">
					<img src={data.img} alt="" />

					<div className="desc">
						<span className="date dark:text-violet-800 text-[14px] font-semibold leading-[20px]">
							{data.date}
						</span>
						<div className="title my-[12px] text-[24px] font-semibold leading-[32px] text-[24px]">
							{data.title}
						</div>
						<div
							className={`desc dark:text-gray-300  indent-8 whitespace-pre-line leading-loose `}
						>
							{data.desc}
						</div>
						<div className="category mt-[24px] flex gap-2">
							{data.category.map((cat) => (
								<Cat key={cat} cat={cat} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BlogDetails
