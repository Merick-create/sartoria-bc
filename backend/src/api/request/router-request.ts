import { Router } from "express";
import { createRequest, getAllRequests, getRequestById, deleteRequest } from "./request-controller";

const router = Router();

router.post("/", createRequest);
router.get("/", getAllRequests);
router.get("/:id", getRequestById);
router.delete("/:id", deleteRequest);
export default router;