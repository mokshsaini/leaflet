import { Router } from "express";
import {signUp, logIn, todo, note, clist} from "../controller/handlers.js";
import { emailAuth, passwordAuth, usernameAuth } from "../middleware/userAuth.js";

const router = Router();

router.post("/signup", [usernameAuth, emailAuth, passwordAuth], signUp);
router.post("/login",  logIn); 
router.get("/", todo);
router.post("/note", note);
router.patch("/note/:objid", note);
router.delete("/note/:objid", note);
router.post("/clist", clist);
router.patch("/clist/:objid", clist);
router.delete("/clist/:objid", clist);

export default router;