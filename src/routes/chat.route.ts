import { response, Router } from "express";
import { Request, Response } from "express";
import { chat } from "../services/chatbot.service";

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json('Message is required');
  }

  try {
    const chatResponse = await chat(message);
    return res.status(200).json({response: chatResponse});
  } catch (error) {
    return res.status(500).json(error);
  }
});

export default router;