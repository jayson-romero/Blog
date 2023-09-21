import React from "react"

const Cat = ({ cat }) => {
	return (
		<>
			<div
				className={`${
					cat === "design"
						? "bg-[#F9F5FF] text-[#6941C6] border-[#6941C6] "
						: ""
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
			</div>
		</>
	)
}

export default Cat
