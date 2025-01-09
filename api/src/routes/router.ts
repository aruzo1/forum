import { Router } from "express";
import { BadRequestException } from "../exceptions/bad-request-exception";

export const router = Router();

router.get("/threads", (req, res) => {
  res.send("GET /threads endpoint");
});

router.post("/threads", (req, res) => {
  res.send("POST /threads endpoint");
});

router.get("/threads/:id", (req, res) => {
  const { id } = req.params;
  const threadId = parseInt(id, 10);

  if (isNaN(threadId)) {
    throw new BadRequestException("Invalid thread ID");
  }

  res.send(`GET /threads/${threadId} endpoint`);
});
