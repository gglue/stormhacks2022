import React, {useEffect } from "react";
import axios from "axios";
import {useNavigate, Navigate} from "react-router-dom";

function Logout() {

    const navigate = useNavigate();

    useEffect(() => {
        function getData() {
            // Get user stats
            axios("http://localhost:5000/api/logout", {
                method: "post",
                withCredentials: true
            }).catch(error => {
                console.log(error)
            })
        }
        getData();
    },[])

    return <Navigate replace to="/" />;
}

export default Logout