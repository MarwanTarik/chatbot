import { Router } from "express";
import { Request, Response } from "express";
import { analyze } from "../services/sentiment-analysis.service";

const router = Router();

router.post('/analyze', async (req: Request, res: Response) => {
  const message = req.body.message;

  if (!message) {
    return res.status(400).json('Message is required');
  }

  try {
    const analysis = await analyze(message);
    return res.status(200).json({sentiment: analysis});
  } catch (error) {
    return res.status(500).json(error);
  }
});

export default router;