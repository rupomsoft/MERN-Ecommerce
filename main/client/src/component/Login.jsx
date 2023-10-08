import React, {useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {UserLoginRequest} from "../apiRequest/ApiRequest.js";
import {useNavigate} from "react-router-dom"
const Login = () => {

    const [email,setEmail]=useState("");
    const navigate = useNavigate();

    const LoginEmail = async (e) => {
        e.preventDefault();
        if (email.length === 0) {
            toast.error("Email Required !");
        } else {
           let res= await UserLoginRequest(email);
           if(res['status']==="success"){
               toast.success(res['message']);
               navigate("/verify/"+email)
           }
           else{
               toast.error(res['message']);
           }
        }
    }

    return (
        <div className="container section">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <div className="card bg-light">
                        <div className="card-body">
                            <form>
                                 <label className="form-label my-2">Your Email Address</label>
                                 <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control"/>
                                 <button onClick={LoginEmail} className="btn my-3 btn-success w-100">Next</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position={"bottom-center"} />
        </div>
    );
};

export default Login;