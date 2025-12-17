import { useEffect, useState } from "react"

function Filters() {
   const [filters, setFilters] = useState(()=>{
    const saved= sessionStorage.getItem("filters");
    return saved? JSON.parse(saved) : {status: "all",sort: "asc"}
   })

   useEffect(()=>{
   sessionStorage.setItem("filters", JSON.stringify(filters))
   },[filters])
  return (
    <div style={{padding:20}}>
       <h3>Filters (session-based)</h3>
       <label>
        Status:
        <select
       value= {filters.status}
      onChange={(e)=> setFilters({...filters, status: e.target.value})}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
       </label>

       <br></br>
         <label>
          Sort:
          <select
          value={filters.sort}
          onChange={(e)=>setFilters({...filters, sort:e.target.value})}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
         </label>
        <br></br>
       <button
       onClick={()=>{
        sessionStorage.removeItem("filters")
        setFilters({status:"all",sort:"asc"})
       }}>
        Reset Filters
       </button>
    </div>
  )
}

export default Filters