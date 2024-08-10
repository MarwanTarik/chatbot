import { Router } from "express";
import { Request, Response } from "express";
import { recognize } from "../services/recognition.service.js";

const router = Router();

router.post('/recognize', async (req: Request, res: Response) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json('Message is required');
  }

  try {
    const recognition = await recognize(message);
    return res.status(200).json({recognition});
  } catch (error) {
    return res.status(500).json(error);
  }
});

export default router;