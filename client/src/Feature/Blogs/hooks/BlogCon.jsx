import { useReducer } from "react"
import { INITIAL_STATE, blogReducer } from "./blogReducer"
import axios from "axios"

const BlogCon = () => {
	const [state, dispatch] = useReducer(blogReducer, INITIAL_STATE)

	const handleFetch = async () => {
		dispatch({ type: "FETCH_START" })
		try {
			const data = await axios.get("")
			dispatch({ type: "FETCH_SUCCESS", payload: data })
		} catch (error) {
			dispatch({ type: "FETCH_ERROR" })
		}
	}

	return <div></div>
}

export default BlogCon
