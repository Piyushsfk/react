import React from "react";
import { useParams } from "react-router-dom";
function user(){
    const {userid}=useParams()
    return(
        <div className="bg-pink-500 text-center text-white-2xl p-4">User:{userid}</div>
    )
}
export default user