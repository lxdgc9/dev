import express from "express";

const companyRouter = express.Router();

companyRouter.get("/");
companyRouter.get("/:id");
companyRouter.post("/");
companyRouter.put("/:id");
companyRouter.delete("/:id");

export { companyRouter };
