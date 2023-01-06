import { Schema, model } from "mongoose";
import { ICompany } from "./interfaces/company";

// Define schema
const schema = new Schema<ICompany>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
  },
  { collection: "Company", timestamps: true }
);

// Create model
const CompanyModel = model("company", schema);

export { CompanyModel };
