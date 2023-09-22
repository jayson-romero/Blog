import React from "react"
import { Link } from "react-router-dom"

const Cat = ({ cat }) => {
	return (
		<>
			<Link
				to={`../category/${cat}`}
				className={`${
					cat === "design"
						? "bg-[#F9F5FF] text-[#6941C6] border-[#6941C6] "
						: "bg-[#FDF2FA] text-[#C11574] border-[#C11574]"
				}${
					cat === "Research"
						? "bg-[#EEF4FF] text-[#3538CD] border-[#3538CD] "
						: ""
				}${
					cat === "Presentation"
						? "bg-[#FDF2FA] text-[#C11574] border-[#C11574] "
						: ""
				} 
                        font-medium px-[10px] rounded-full`}
			>
				{cat}
			</Link>
		</>
	)
}

export default Cat
