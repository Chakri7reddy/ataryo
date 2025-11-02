import express from "express";
import multer from "multer";
import path from "path";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// Helper: get consistent BASE_URL
const getBaseUrl = (req) => {
  // Prefer environment BASE_URL (for deployed environments)
  if (process.env.BASE_URL) return process.env.BASE_URL;
  // Fallback to dynamic host detection (local dev)
  return `${req.protocol}://${req.get("host")}`;
};

// Upload route (protected)
const handler = (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });

  const baseUrl = getBaseUrl(req);
  const imageUrl = `${baseUrl}/uploads/${req.file.filename}`;

  res.json({ url: imageUrl });
};

// Routes
router.post("/", verifyToken, upload.single("file"), handler);
router.post("/image", verifyToken, upload.single("file"), handler);

export default router;
