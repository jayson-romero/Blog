const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const pageNumbers = []

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i)
	}

	return (
		<nav className="bg-white dark:text-white dark:bg-blue-950 px-4 py-3 flex items-center justify-between sm:px-6">
			<div className="hidden sm:block">
				<p className="text-sm dark:text-white">
					Showing {currentPage} - {totalPages} of {totalPages} pages
				</p>
			</div>
			<div className="flex-1 flex justify-between sm:justify-end">
				<button
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md dark:text-white hover:bg-gray-50 border hover:dark:text-black hover:border focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
				>
					Previous
				</button>
				<div className="">
					{pageNumbers.map((page) => (
						<button
							key={page}
							onClick={() => onPageChange(page)}
							className={`${
								currentPage === page
									? "bg-indigo-50 dark:bg-white dark:text-black border"
									: "hover:bg-indigo-50 hover:text-indigo-900"
							} relative inline-flex items-center px-4 py-2  text-sm font-medium rounded-md`}
						>
							{page}
						</button>
					))}
				</div>
				<button
					onClick={() => onPageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md dark:text-white hover:bg-gray-50 border hover:dark:text-black hover:border focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
				>
					Next
				</button>
			</div>
		</nav>
	)
}

export default Pagination
