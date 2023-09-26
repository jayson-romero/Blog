import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
	return (
		<>
			<Navbar />
			<div className="pt-[72px] md:pt-[68px] lg:pt-[92px] bg-white dark:text-white dark:bg-blue-950 px-[20px] ">
				<div className="wrapper max-w-[1216px] m-auto h-full min-h-screen pb-10">
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default RootLayout
