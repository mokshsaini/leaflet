import {body, validationResult} from "express-validator";
import { userModel } from "../model/model.js";

export const emailAuth = [
    body("email")
    .isEmail()
    .withMessage("Invalid Email")
    .custom(async (email) => {
        if(await userModel.findOne({email})){
            let error = new Error("user with this email is already registered.");
            throw(error);
        }
    }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

export const usernameAuth = [
    body("username")
    .isLength({min: 3})
    .withMessage("username should contain at least three characters")
    .custom(async (username) =>{
        if(await userModel.findOne({username})){
            let error = new Error("user with this username already exists.");
            throw(error);
        }
    }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]
export const passwordAuth = [
    body("password")
    .isLength({min: 8})
    .withMessage("password should contain at least eight characters")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one capital letter")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one small letter")
    .matches(/[@$!%*?&]/)
    .withMessage("Password must contain at least one special character"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
]