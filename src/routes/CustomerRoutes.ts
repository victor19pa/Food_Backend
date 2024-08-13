import express, { Request, Response, NextFunction } from "express";
import {
  CustomerLogin,
  CustomerSignUp,
  CustomerVerify,
  EditCustomerProfile,
  GetCustomerProfile,
  RequestOtp,
} from "../controllers";
import { Authenticate } from "../middlewares";

const router = express.Router();

router.post("/signup", CustomerSignUp);

router.post("/login", CustomerLogin);

//!--auth
router.use(Authenticate);
//USAN OTP DEL LOGIN

router.patch("/verify", CustomerVerify);

router.get("/otp", RequestOtp);

router.get("/profile", GetCustomerProfile);

router.patch("/profile", EditCustomerProfile);

export { router as CustomerRoute };
