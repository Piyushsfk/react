import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github(){
    const data=useLoaderData()
    // const [data,setdata]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Piyushsfk')
    //     .then(response => response.json())
    //     .then(data=> {
    //         console.log(data);
    //         setdata(data)
    //     })

    // },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Repos:{data.public_repos}
        <img src={data.avatar_url} alt="Github Picture" width={200}/>
        </div>
    )
}
export default Github

export const githubInfoloader=async()=>{
    const response=await fetch ('https://api.github.com/users/Piyushsfk')
    return response.json()
}