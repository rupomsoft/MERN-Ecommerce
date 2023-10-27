const {CalculateInvoice, PaymentSuccessService, PaymentFailService, PaymentCancelService, PaymentIPNService} = require("../services/InvoiceService");

exports.InvoiceCreate= async (req, res) => {
    let result=await CalculateInvoice(req);
    return res.status(200).json(result)
}

exports.InvoiceList=async (req, res) => {

}

exports.InvoiceProductList=async (req, res) => {

}

exports.PaymentSuccess=async (req, res) => {
    let result=await PaymentSuccessService(req);
    return res.redirect('localhost:5173/profile');
}

exports.PaymentFail=async (req, res) => {
    let result=await PaymentFailService(req);
    return res.redirect('localhost:5173/profile');
}


exports.PaymentCancel=async (req, res) => {
    let result=await PaymentCancelService(req);
    return res.redirect('localhost:5173/profile');
}


exports.PaymentIPN=async (req, res) => {
    let result=await PaymentIPNService(req);
    return res.status(200).json(result)
}
