import LightDarkBtn from "./LightDarkBtn"

import { NavLink } from "react-router-dom"

const Modal = ({ isDarkMode, toggleDarkMode, setToggleMenu }) => {
	return (
		<>
			{/* MODAL  */}
			<div className="Modal-menu md:hidden bg-white dark:bg-blue-950 h-screen flex transition duration-150 ease-in-out delay-100 z-40 fixed w-full h-full">
				<div className="wrapper text-black dark:text-white m-auto flex flex-col items-center justify-center gap-14 text-[24px] font-semibold">
					{/* MENU ITEMS  */}
					<NavLink to="/" onClick={() => setToggleMenu(false)}>
						Blog
					</NavLink>
					<NavLink to="/projects" onClick={() => setToggleMenu(false)}>
						Projects
					</NavLink>
					<NavLink to="/about" onClick={() => setToggleMenu(false)}>
						About
					</NavLink>
					<NavLink to="/newsletter" onClick={() => setToggleMenu(false)}>
						NewsLetter
					</NavLink>
					<div className="ligth-dark-toggle ">
						{/* LIGHT/DARK BTN component */}
						<LightDarkBtn
							isDarkMode={isDarkMode}
							toggleDarkMode={toggleDarkMode}
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal
