import express from "express";
import { getAlbumById, getAlbums } from "../controllers/album.controller.js";

const router = express.Router();

router.get("/",getAlbums);
router.get("/:albumId",getAlbumById);

export default router;