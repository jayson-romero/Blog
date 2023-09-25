import BlogDetails from "../Feature/BlogDetails/BlogDetails"
import RecentBlogs from "../Feature/RecentBlog/RecentBlogs"
import PerCategory from "../Feature/PerCategory/PerCategory"

import { useParams } from "react-router-dom"
import useFetch from "../utils/useFetch"

const SingleBlog = () => {
	const { blogId } = useParams()
	const { data, loading } = useFetch(`http://localhost:3000/posts/${blogId}`)

	return (
		<>
			<BlogDetails data={data} loading={loading} />
			<PerCategory category={data.category} tittle={"You May Also Like"} />
			<RecentBlogs />
		</>
	)
}

export default SingleBlog
