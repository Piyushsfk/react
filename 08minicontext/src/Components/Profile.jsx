import UserContext from "../context/UserContext";
import React,{useContext} from "react";

function Profile(){
    const {User}=useContext(UserContext)
    if(!User)return <div>Please Login</div>
    return <div>Welcome {User.username}</div>
}
export default Profile