import mongoose from "mongoose";
import { ICompany } from "./interfaces/company";

const companySchema = new mongoose.Schema<ICompany>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
});

const CompanyModel = mongoose.model<ICompany & mongoose.Document>(
  "Company",
  companySchema
);

export { CompanyModel };
