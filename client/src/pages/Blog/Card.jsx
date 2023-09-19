const Card = ({ blog, index, recentBlog }) => {
	return (
		<div
			className={`pb-[24px]  ${
				recentBlog === false ? "md:w-[49%] lg:basis-[32.333333%]" : ""
			}
			${
				(index === 1 || index === 2) && recentBlog === true
					? "md:flex gap-5 lg:mb-[0px]"
					: ""
			}`}
		>
			{/* IMG */}

			<img
				src={blog.img}
				alt=""
				className={`mb-[24px] object-cover ${
					(index === 2 || index === 1) && recentBlog === true
						? "md:max-h-[200px] md:max-w-[320px] h-full  "
						: "h-[228px] w-full  "
				}`}
			/>

			{/* DESC */}
			<div className="desc">
				<span className="date dark:text-violet-800 text-[14px] font-semibold leading-[20px]">
					{blog.date}
				</span>
				<div className="title my-[12px] text-[24px] font-semibold leading-[32px] text-[24px]">
					{blog.title}
				</div>
				<div
					className={`desc dark:text-gray-300 	${
						index === 3 && recentBlog === true
							? "line-clamp-4"
							: "line-clamp-2 "
					} `}
				>
					{blog.desc}
				</div>
				<div className="category mt-[24px] flex gap-2">
					{blog.category.map((cat) => (
						<div
							key={cat}
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
					))}
				</div>
			</div>
		</div>
	)
}

export default Card
