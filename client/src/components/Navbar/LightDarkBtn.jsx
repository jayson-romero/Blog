import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"

const LightDarkBtn = ({ isDarkMode, toggleDarkMode }) => {
	return (
		<>
			{/* BUTTONS */}
			<div className="bg-blue-950 dark:bg-white flex items-center gap-2 p-1.5 rounded-full">
				{/* DARK BTN  */}
				<BsFillMoonFill
					className={`text-white dark:text-blue-950 ${
						isDarkMode ? "bg-white dark:bg-blue-950 rounded-full" : ""
					}`}
					onClick={toggleDarkMode}
				/>
				{/* LIGHT BTN  */}
				<BsFillSunFill
					className={`text-white dark:text-blue-950 ${
						!isDarkMode ? "bg-white dark:bg-blue-950 rounded-full" : ""
					}`}
					onClick={toggleDarkMode}
				/>
			</div>
		</>
	)
}

export default LightDarkBtn
