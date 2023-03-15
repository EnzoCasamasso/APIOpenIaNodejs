import { Request, Response } from "express";
import { criarPrompt } from "../../services/openia.js";

class FirstController {

  public async home(req: Request, res: Response) {
    try {
      const resposta = await criarPrompt('Voce é humano?');
      return res.status(200).send({ response: resposta });
    } catch(error) {
      return res.status(500).send({ error: error.message });
    }
  }
}

export const firstController = new FirstController();