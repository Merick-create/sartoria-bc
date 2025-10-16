import { Request, Response } from "express";
import { RequestService } from "./service-request";

const service = new RequestService();
export const createRequest = (req: Request, res: Response) => {
  try {
    const { nome, email, telefono, messaggio } = req.body;

    if (!nome || !email || !messaggio) {
      return res.status(400).json({ error: "Campi obbligatori mancanti." });
    }

    const newRequest = service.create({ nome, email, telefono, messaggio });
    return res.status(201).json(newRequest);
  } catch (error) {
    return res.status(500).json({ error: "Errore nella creazione della richiesta." });
  }
};
export const getAllRequests = (req: Request, res: Response) => {
  try {
    const order = (req.query.order as "asc" | "desc") || "desc";
    const requests = service.getAll(order);
    return res.status(200).json(requests);
  } catch (error) {
    return res.status(500).json({ error: "Errore nel recupero delle richieste." });
  }
};
export const getRequestById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const request = service.getById(id);

    if (!request) {
      return res.status(404).json({ error: "Richiesta non trovata." });
    }

    return res.status(200).json(request);
  } catch (error) {
    return res.status(500).json({ error: "Errore nel recupero della richiesta." });
  }
};
export const deleteRequest = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = service.delete(id);

    if (!deleted) {
      return res.status(404).json({ error: "Richiesta non trovata." });
    }

    return res.status(200).json({ message: "Richiesta eliminata con successo." });
  } catch (error) {
    return res.status(500).json({ error: "Errore nell'eliminazione della richiesta." });
  }
};
