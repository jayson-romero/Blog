import { Link } from "react-router-dom"
import Cat from "./Cat"

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
			<Link to={`../${blog.id}`}>
				<img
					src={blog.img}
					alt=""
					className={`mb-[24px] object-cover ${
						(index === 2 || index === 1) && recentBlog === true
							? "md:max-h-[200px] md:max-w-[320px] h-full  "
							: "h-[228px] w-full  "
					}`}
				/>
			</Link>

			{/* DESC */}
			<div className="desc">
				<span className="date dark:text-violet-800 text-[14px] font-semibold leading-[20px]">
					{blog.date}
				</span>
				<div className="title my-[12px] text-[24px] font-semibold leading-[32px] text-[24px]">
					{blog.title}
				</div>
				<div
					className={`desc dark:text-gray-300 indent-8 	${
						index === 3 && recentBlog === true
							? "line-clamp-4"
							: "line-clamp-2 "
					} `}
				>
					{blog.desc}
				</div>
				<div className="category mt-[24px] flex gap-2">
					{blog.category.map((cat) => (
						<Cat key={cat} cat={cat}>
							{cat}
						</Cat>
					))}
				</div>
			</div>
		</div>
	)
}

export default Card
