import { AiOutlineCopyright } from "react-icons/ai"

const Footer = () => {
	return (
		<>
			<div className="dark:text-white dark:bg-blue-950 px-[20px]">
				<div className="max-w-[1216px] m-auto flex items-center justify-center gap-2 pb-5">
					<AiOutlineCopyright />
					<p>Copyright 2023. Made by Jayson Romero</p>
				</div>
			</div>
		</>
	)
}

export default Footer
