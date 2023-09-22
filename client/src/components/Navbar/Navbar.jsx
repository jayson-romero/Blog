// ICON
import { GiHamburgerMenu } from "react-icons/gi"
// REACT STATE
import { useState, useEffect } from "react"
//REACT ROUTER STATE
import { NavLink } from "react-router-dom"
// COMPONENT
import Modal from "./Modal"
import LightDarkBtn from "./LightDarkBtn"

const Navbar = () => {
	// initial state for menu btn
	const [toggleMenu, setToggleMenu] = useState(false)
	// initial state for dark theme btn
	const [isDarkMode, setIsDarkMode] = useState(false)

	// Initalize the Theme in LocalStorage
	useEffect(() => {
		const currentTheme = localStorage.getItem("theme")
		if (currentTheme === "dark") {
			document.body.classList.add("dark")
			setIsDarkMode(true)
		} else {
			localStorage.setItem("theme", currentTheme)
			document.body.classList.add(currentTheme)
		}
	}, [])

	// FUNCTION FOR TOGGLE DARK/LIGHT BTN
	const toggleDarkMode = () => {
		if (isDarkMode) {
			document.body.classList.remove("dark")
			localStorage.setItem("theme", "light")
		} else {
			document.body.classList.add("dark")
			localStorage.setItem("theme", "dark")
		}
		setIsDarkMode(!isDarkMode)
	}

	return (
		<>
			<div className="navbar bg-white dark:bg-blue-950">
				<div className="wrapper p-[20px]  flex justify-between max-w-[1216px] m-auto lg:py-[30px] lg:px-0">
					{/* LOGO */}
					<div className="logo text-black dark:text-white text-[20px] leading-[24px] font-semibold">
						Jayson Romero
					</div>

					{/* MENU ICON */}
					<div className="menuIcon text-black dark:text-white text-[32px] md:hidden">
						<GiHamburgerMenu onClick={() => setToggleMenu(!toggleMenu)} />
					</div>

					{/* MENU ITEMS for Medium/Large SCREEN */}
					<div className="menu-item text-black dark:text-white hidden md:flex gap-[30px] lg:text-[20px] items-center">
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
							{/* DARK/LIGHT TOGGLE BTN component */}
							<LightDarkBtn
								isDarkMode={isDarkMode}
								toggleDarkMode={toggleDarkMode}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* MODAL of MENU ITEMS for Small Screen */}
			{toggleMenu && (
				<Modal
					isDarkMode={isDarkMode}
					toggleDarkMode={toggleDarkMode}
					setToggleMenu={setToggleMenu}
				/>
			)}
		</>
	)
}

export default Navbar
