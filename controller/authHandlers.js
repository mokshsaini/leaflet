import { userModel } from "../model/model.js";
import { getUser, setUser } from "../services/auth.js";

export async function signUp(req, res) {
  const user = req.body;
  if (
    await userModel.findOne({
      $or: [{ username: user.username }, { email: user.email }],
    })
  ) {
    return res.status(409).json({ error: "Username or email already exists" });
  }
  const userdata = await userModel.create(user);
  const token = setUser(userdata);
  res.cookie("uid", token);
  return res.status(201).json({ success: true, userdata });
}

export async function logIn(req, res) {
  const userdata = req.body;
  const foundUser = await userModel.findOne({
    $or: [{ username: userdata.identifier }, { email: userdata.identifier }],
    password: userdata.password,
  });
  if (foundUser) {
    const token = setUser(foundUser);
    res.cookie("uid", token);
    return res.status(200).json({ success: "successfully logged in" });
  }
  return res.status(400).json({ error: "wrong credentials" });
}

export async function verifyToken(req, res) {
  return res.status(200).json({ message: "Token is valid", user: req.user });
}
