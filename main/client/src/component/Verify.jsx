import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import {UserLoginRequest, VerifyLoginRequest} from "../apiRequest/ApiRequest.js";

const Verify = () => {
    let {email}=useParams();
    const [pin,setPIN]=useState("");


    const LoginVerify = async (e) => {
        e.preventDefault();
        if (pin.length === 0) {
            toast.error("Verification Code Required !");
        } else {
            let res= await VerifyLoginRequest(email,pin);
            if(res['status']==="success"){
                toast.success(res['message']);
                window.location.href=sessionStorage.getItem('lastLocation')
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
                                <label className="form-label my-2">Your Verification Code</label>
                                <input value={pin} onChange={(e)=>{setPIN(e.target.value)}} type="text" className="form-control"/>
                                <button onClick={LoginVerify} className="btn my-3 btn-success w-100">Verify</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position={"bottom-center"} />
        </div>
    );
};

export default Verify;