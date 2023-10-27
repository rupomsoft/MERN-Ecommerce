import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import { VerifyLoginRequest} from "../apiRequest/ApiRequest.js";
import SubmitButton from "./SubmitButton.jsx";

const Verify = () => {

    let {email}=useParams();
    const [BtnLoader, SetBtnLoader] = useState(false);
    const [pin,setPIN]=useState("");

    const LoginVerify = async (e) => {
        e.preventDefault();
        if (pin.length === 0) {
            toast.error("Verification Code Required !");
        } else {
            SetBtnLoader(true)
            let res= await VerifyLoginRequest(email,pin);
            SetBtnLoader(false)
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
                    <div className="card">
                        <div className="card-body">
                            <form>
                                <label className="form-label my-2">Your Verification Code</label>
                                <input value={pin} onChange={(e)=>{setPIN(e.target.value)}} type="text" className="form-control"/>
                                <SubmitButton text="Verify" submit={BtnLoader} onClick={LoginVerify} className="btn my-3 btn-success w-100"/>
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