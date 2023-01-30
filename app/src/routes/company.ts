import { Router } from "express";
import {
  createCompany,
  deleteCompanyById,
  getCompanyById,
  getCompanyList,
  updateCompanyById,
} from "../handlers/company_handlers";
import { uploader } from "../utils/uploader";

const router = Router();

router.get("/", getCompanyList);
router.get("/:id", getCompanyById);
router.post("/", uploader.single("logo"), createCompany);
router.put("/:id", uploader.single("logo"), updateCompanyById);
router.delete("/:id", deleteCompanyById);

export { router as companyRouter };
