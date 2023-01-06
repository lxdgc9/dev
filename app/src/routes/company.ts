import { Router } from "express";
import {
  getCompanyList,
  getCompanyById,
  createCompany,
} from "../handlers/company_handlers";

const router = Router();

router.get("/", getCompanyList);
router.get("/:id", getCompanyById);
router.post("/", createCompany);

export { router as companyRouter };
