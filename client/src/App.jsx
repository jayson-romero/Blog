import RootLayout from "./Layout/RootLayout"

// PAGES
import HomeLayout from "./Layout/HomeLayout"
import SingleBlogLayout from "./Layout/SingleBlogLayout"
import PerCatLayout from "./Layout/PerCatLayout"

import Projects from "./pages/Projects/Projects"
import About from "./pages/About/About"
import Newsletter from "./pages/Newsletter/Newsletter"

import ErrorPage from "./pages/ErrorPage"
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
				<Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
					<Route index element={<HomeLayout />} />
					<Route path=":blogId" element={<SingleBlogLayout />} />
					<Route path="/category/:categoryName" element={<PerCatLayout />} />
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
