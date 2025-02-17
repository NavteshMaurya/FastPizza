import { useState } from "react"
import { useNavigate } from "react-router-dom";






function SearchOrder() {
    const navigate = useNavigate("");
    const [query,setQuery] = useState("")



    
    function handleSubmit(e){
        e.preventDefault();
        if(!query) return
    navigate(`/order/${query}`)
    setQuery("")
    }
    return (
        <form onSubmit={handleSubmit}>
       <input placeholder="Search order" value={query}
       className="rounded-full bg-yellow-100 
       px-4 py-2 text-sm placeholder:text-stone-400
        sm:w-64 focus:w-72 transition-all duration-300
        focus:outline-none focus:ring focus:ring-yellow-500 focus: ring-opacity-50
        "
       onChange={e => setQuery(e.target.value)}></input>
       </form>
       
    )
}

export default SearchOrder
