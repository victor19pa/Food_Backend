import bcrypt from "bcrypt";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { AuthPayload, VendorPayload } from "../dto";
import { APP_SECRET } from "../config";
import { Request, Response, NextFunction } from "express";

export const GenerateSalt = async () => {
  const bcryptjs = require("bcryptjs");
  const salt = bcryptjs.genSaltSync(10);
  // return await bcrypt.genSalt();
  return salt;
};

export const GeneratePassword = async (password: string, salt: string) => {
  const bcryptjs = require("bcryptjs");
  return bcryptjs.hashSync(password, salt);
  // return await bcrypt.hash(password, salt);
};

export const ValidatePassword = async (
  enteredPassword: string,
  savedPassword: string,
  salt: string
) => {
  return (await GeneratePassword(enteredPassword, salt)) === savedPassword;
};

export const GenerateSignature = (payload: AuthPayload) => {
  return jwt.sign(payload, APP_SECRET, { expiresIn: "1d" });
};

export const ValidateSignature = async (req: Request) => {
  const signature = req.get("Authorization");

  if (signature) {
    const payload = (await jwt.verify(
      signature.split(" ")[1],
      APP_SECRET
    )) as AuthPayload;

    (req as any).user = payload;
    return true;
  }

  return false;
};
