import React from "react"

const Button =({ className, text })=>{
    return(
        <>
        <input type="button" className={className} value={text} />
        </>
    )
}

export default Button;