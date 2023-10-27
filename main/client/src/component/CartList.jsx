import React, {useEffect, useState} from 'react';
import {CartListRequest, InvoiceRequest, RemoveCartListRequest} from "../apiRequest/ApiRequest.js";
import CartListSkeleton from "./loader/CartListSkeleton.jsx";
import toast, {Toaster} from "react-hot-toast";
import SubmitButton from "./SubmitButton.jsx";
import {Modal} from "react-bootstrap";

const CartList = () => {
    const [data_new,setData_new]=useState([])
    const [refresh,setRefresh]=useState(0)
    const [BtnLoader, SetBtnLoader] = useState(false);
    const [Payable, SetPayable] = useState(0);

    const [data_payment,setData_payment]=useState([])


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(()=>{
        (async () => {
           let CartList= await CartListRequest();
           await CalculatePayable()
           setData_new(CartList);
        })()
    },[refresh])

    const Remove = async (productID) => {
        setData_new([]);
        let data= await RemoveCartListRequest(productID);
        if(data['status']==="success"){
            toast.success(data['message'])
        }else {
            toast.error(data['message'])
        }
        setRefresh(1);
    }



    const CheckOut = async () => {
        SetBtnLoader(true);
        let payment=await InvoiceRequest();
        setShow(true)
        setData_payment(payment);

        SetBtnLoader(false);
    }



    const CalculatePayable = async () => {
        if(data_new.length!==0){
            let sum=0
            data_new.map((item,i)=>{
                sum=sum+parseInt(item['price'])
            })
            SetPayable(sum);
        }
    }

    return (
        <div>
            {
                data_new.length===0?(<CartListSkeleton/>):(
                    <div className="container mt-5">
                        <div className="row">
                           <div className="col-12">
                               <table className="table">
                                   <thead>
                                   <tr>
                                       <th>Product</th>
                                       <th>Qty</th>
                                       <th>color</th>
                                       <th>Size</th>
                                       <th>Total</th>
                                       <th>Remove</th>
                                   </tr>
                                   </thead>
                                   <tbody>
                                   {
                                       data_new.map((item,i)=>{
                                           return(
                                               <tr key={i}>
                                                   <td>
                                                       <div className="d-flex">
                                                       <img className="product-img-sm" src={item['product']['image']}/>
                                                       <div className="mx-2">
                                                          <span>{item['product']['title']}</span><br/>
                                                          <span><b>$ {item['product']['price']}</b></span>
                                                       </div>
                                                       </div>
                                                   </td>
                                                   <td>{item['qty']}</td>
                                                   <td>{item['color']}</td>
                                                   <td>{item['size']}</td>
                                                   <td>$ {item['price']}</td>
                                                   <td>
                                                       <button onClick={()=>{Remove(item['productID'])}} className="btn btn-danger btn-sm">Remove</button>
                                                   </td>
                                               </tr>
                                           )
                                       })
                                   }
                                   </tbody>
                               </table>
                           </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h6>Payable: ${Payable}</h6>
                                <SubmitButton submit={BtnLoader} text="Check Out" onClick={CheckOut} className="btn my-2 btn-success"/>
                            </div>
                        </div>
                    </div>
                )
            }



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h6>Pay Now</h6>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            {
                                data_payment.map((item,i)=>{
                                    return (
                                        <div  key={i} className="col-md-2 col-lg-2 p-1 col-sm-6 col-6">
                                            <a target="_blank" href={item['redirectGatewayURL']}><img className="pay-img w-100" src={item['logo']}/></a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-danger" onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>





            <Toaster position={"bottom-center"} />




        </div>
    );
};

export default CartList;