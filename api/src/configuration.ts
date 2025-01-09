import dotenv from "dotenv";

dotenv.config({ path: ".env.development" });

export const config = {
  port: process.env.PORT,
};
