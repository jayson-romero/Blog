import RecentBlogs from "../Feature/RecentBlog/RecentBlogs"
import AllBlog from "../Feature/AllBLog/AllBlog"
import Hero from "../Layout/Hero"

import useFetch from "../utils/useFetch"

const Home = () => {
	const { data, loading } = useFetch("http://localhost:3000/posts")

	return (
		<>
			<Hero />
			<RecentBlogs />
			<AllBlog data={data} loading={loading} />
		</>
	)
}

export default Home
