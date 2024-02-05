import express from "express";
import {create,deleteuser,getAll,getone, update} from "../controller/userController.js";
const route = express.Router();

route.post("/create",create);
route.get("/getAll",getAll);
route.get("/getone/:id",getone);
route.put("/update/:id",update);
route.delete("/delete/:id",deleteuser)

export default route;