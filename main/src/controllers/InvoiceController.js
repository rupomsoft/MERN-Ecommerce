
const {CalculateInvoice} = require("../services/InvoiceService");
exports.InvoiceCreate= async (req, res) => {
    let result=await CalculateInvoice(req);
    return res.status(200).json(result)
}

exports.InvoiceList=async (req, res) => {

}

exports.InvoiceProductList=async (req, res) => {

}

exports.PaymentSuccess=async (req, res) => {

}

exports.PaymentFail=async (req, res) => {

}


exports.PaymentCancel=async (req, res) => {

}


exports.PaymentIPN=async (req, res) => {

}
