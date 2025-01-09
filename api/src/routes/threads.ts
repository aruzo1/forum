import { Router } from "express";
import { BadRequestException } from "../exceptions/bad-request-exception";

const router = Router();

router.get("/", (req, res) => {
  res.send("GET /threads endpoint");
});

router.post("/", (req, res) => {
  res.send("POST /threads endpoint");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const threadId = parseInt(id, 10);

  if (isNaN(threadId)) {
    throw new BadRequestException("Invalid thread ID");
  }

  res.send(`GET /threads/${threadId} endpoint`);
});

export { router };
