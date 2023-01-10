import { Router } from "express";
import {
  getCompanyList,
  getCompanyById,
  createCompany,
} from "../handlers/company_handlers";
import { uploader } from "../utils/uploader";

const router = Router();

router.get("/", getCompanyList);
router.get("/:id", getCompanyById);
router.post("/", uploader.single("logo"), createCompany);

export { router as companyRouter };
