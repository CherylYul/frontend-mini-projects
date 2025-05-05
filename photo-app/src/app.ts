import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import mongoose from "mongoose";
import { Unsplash } from "./types/unsplash.type";

const PHOTOS_URL = "https://api.unsplash.com/photos";

const app = express();

dotenv.config({ path: ".env" });
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DB_URI || "mongodb://localhost:27017", {
    dbName: process.env.DB_NAME,
  })
  .then((con) =>
    console.log(
      "Connected to MongoDB with host: ",
      con.connection.host,
      " and dbName: ",
      con.connection.name
    )
  )
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.get("/", (req, res) => {
  res.status(200).send("Photo App API");
});

app.get("/api/photos", async (req, res) => {
  const { page, per_page } = req.query;
  try {
    const { data } = await axios.get(PHOTOS_URL, {
      params: {
        page: page || 1,
        per_page: per_page || 10,
        client_id: process.env.UNSPLASH_ACCESS_KEY,
      },
    });

    const photos = data.map((photo: Unsplash) => ({
      _id: photo.id,
      photoId: photo.id,
      slug: photo.slug,
      width: photo.width,
      height: photo.height,
      description: photo.description || null,
      image: {
        full: photo.urls.raw,
        regular: photo.urls.regular,
        thumb: photo.urls.small,
      },
    }));

    res.status(200).json(photos);
  } catch (error) {
    console.error("Error fetching photos:", error);
    res.status(500).json({ error: "Failed to fetch photos" });
  }
});
