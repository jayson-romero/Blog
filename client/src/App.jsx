import Layout from "./pages/Layout"

// PAGES
import Blog from "./pages/Blog/Blog"
import Projects from "./pages/Projects/Projects"
import About from "./pages/About/About"
import Newsletter from "./pages/Newsletter/Newsletter"
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	createRoutesFromElements,
} from "react-router-dom"

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<Layout />}>
					<Route index element={<Blog />} />
					<Route path="projects" element={<Projects />} />
					<Route path="about" element={<About />} />
					<Route path="newsletter" element={<Newsletter />} />
				</Route>
			</>
		)
	)

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
