import RootLayout from "./Layout/RootLayout"

// PAGES

import Home from "./pages/Home"
import SingleBlog from "./pages/SingleBlog"
import PerCategory from "./pages/Category"

import Projects from "./pages/Projects"
import About from "./pages/About"
import Newsletter from "./pages/Newsletter"

import ErrorPage from "./pages/ErrorPage"
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	createRoutesFromElements,
} from "react-router-dom"

import { BlogContextProvider } from "./Feature/Blogs/context/BlogContext"

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
					<Route index element={<Home />} />
					<Route path=":blogId" element={<SingleBlog />} />
					<Route path="/category/:categoryName" element={<PerCategory />} />
					<Route path="projects" element={<Projects />} />
					<Route path="about" element={<About />} />
					<Route path="newsletter" element={<Newsletter />} />
				</Route>
			</>
		)
	)

	return (
		<>
			<BlogContextProvider>
				<RouterProvider router={router} />
			</BlogContextProvider>
		</>
	)
}

export default App
