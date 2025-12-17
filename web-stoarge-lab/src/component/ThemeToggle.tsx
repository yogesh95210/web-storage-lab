import { useEffect, useState } from 'react'
function ThemeToggle() {
    const [theme,setTheme]= useState(()=>{
        return localStorage.getItem("theme") || "light";
    })
    useEffect(()=>{
     localStorage.setItem("theme",theme)
    },[theme])
  return (
    <div
     style={{
        padding: "20px",
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
      }}>
        <h2>Theme :{theme}</h2> 
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  )
}
export default ThemeToggle