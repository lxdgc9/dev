import express from "express";
import * as companyHandler from "../handlers/company_handlers";

const companyRouter = express.Router();

companyRouter.get("/", companyHandler.getCompanyList);
companyRouter.get("/:id", companyHandler.getCompanyById);
companyRouter.post("/", companyHandler.createCompany);

export { companyRouter };
