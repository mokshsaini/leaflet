import { Router } from "express";
import { todo, note, clist } from "../controller/todoHandlers.js";
import { signUp, logIn, verifyToken } from "../controller/authHandlers.js";
import {
  emailAuth,
  passwordAuth,
  tokenAuth,
  usernameAuth,
} from "../middleware/userAuth.js";

const router = Router();

router.post("/signup", [usernameAuth, emailAuth, passwordAuth], signUp);
router.post("/login", logIn);
router.get("/verify", tokenAuth, verifyToken);
router.get("/", todo);
router.post("/note", note);
router.patch("/note/:objid", note);
router.delete("/note/:objid", note);
router.post("/clist", clist);
router.patch("/clist/:objid", clist);
router.delete("/clist/:objid", clist);

export default router;
