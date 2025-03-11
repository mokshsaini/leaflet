import jwt from "jsonwebtoken";
const secret = "My_secret_key";

export function setUser(user){
    return jwt.sign({_id: user._id, username: user.username}, secret);
}

export function getUser(token){
    return jwt.verify(token, secret);
}