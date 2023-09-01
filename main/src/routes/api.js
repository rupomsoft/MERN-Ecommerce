const express=require('express');
const BrandController = require("../controllers/BrandController");
const CategoryController = require("../controllers/CategoryController");
const ProductController = require("../controllers/ProductController");
const UserController = require("../controllers/UserController");
const ProfileController = require("../controllers/ProfileController");
const InvoiceController = require("../controllers/InvoiceController");
const AuthVerification = require("../middlewares/AuthVerification");

const router=express.Router();

// Brand Category
router.get('/BrandList',BrandController.BrandList)
router.get('/CategoryList',CategoryController.CategoryList)

// Product
router.get('/SliderList',ProductController.SliderList)
router.get('/ListByCategory',ProductController.ListByCategory)
router.get('/ListBySmilier',ProductController.ListBySmilier)
router.get('/ListByBrand',ProductController.ListByBrand)
router.get('/ListByKeyword',ProductController.ListByKeyword)
router.get('/ListReview',ProductController.ListReview)
router.get('/ProductDetails',ProductController.ProductDetails)
router.get('/ListByRemark',ProductController.ListByRemark)
router.get('/WishList',ProductController.WishList)
router.get('/CreateWishList',ProductController.CreateWishList)
router.get('/RemoveWishList',ProductController.RemoveWishList)
router.get('/CartList',ProductController.CartList)
router.get('/CreateCartList',ProductController.CreateCartList)
router.get('/RemoveCartList',ProductController.RemoveCartList)


// User
router.get('/UserLogin/:email',UserController.UserLogin)
router.get('/UserLogout',UserController.UserLogout)
router.get('/VerifyLogin/:email/:otp',UserController.VerifyLogin);


// Profile
router.get('/CreateProfile',AuthVerification,ProfileController.CreateProfile)
router.get('/ReadProfile',AuthVerification,ProfileController.ReadProfile)
router.get('/UpdateProfile',AuthVerification,ProfileController.UpdateProfile)


// Invoice
router.get('/InvoiceCreate',AuthVerification,InvoiceController.InvoiceCreate)
router.get('/InvoiceList',AuthVerification,InvoiceController.InvoiceList)
router.get('/InvoiceProductList',AuthVerification,InvoiceController.InvoiceProductList)
router.get('/PaymentSuccess',InvoiceController.PaymentSuccess)
router.get('/PaymentCancel',InvoiceController.PaymentCancel)
router.get('/PaymentFail',InvoiceController.PaymentFail)
router.get('/PaymentIPN',InvoiceController.PaymentIPN)

module.exports=router;