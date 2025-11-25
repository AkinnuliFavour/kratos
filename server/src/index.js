/* Express server entry point */
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Basic middleware
app.use(express.json());

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Example root route
app.get("/", (req, res) => {
  res.send("Express server running");
});

// Listings API endpoint
app.post("/api/listings", async (req, res) => {
  try {
    const {
      propertyTitle,
      propertyType,
      price,
      location,
      mainPhoto,
      otherPhotos,
      videos,
      description,
      features,
      contactInfo,
    } = req.body;

    // Validate required fields
    if (
      !propertyTitle ||
      !propertyType ||
      !price ||
      !location ||
      !mainPhoto ||
      !description
    ) {
      return res.status(400).json({
        error: "Missing required fields",
        required: [
          "propertyTitle",
          "propertyType",
          "price",
          "location",
          "mainPhoto",
          "description",
        ],
      });
    }

    // TODO: Save listing to database
    // For now, just return success with the listing data
    const listing = {
      id: Date.now().toString(),
      propertyTitle,
      propertyType,
      price,
      location,
      mainPhoto: mainPhoto ? "Photo uploaded" : null, // Don't send back large base64
      otherPhotos: otherPhotos?.length || 0,
      videos: videos?.length || 0,
      description,
      features,
      contactInfo,
      createdAt: new Date().toISOString(),
      status: "published",
    };

    console.log("New listing created:", {
      id: listing.id,
      title: propertyTitle,
    });

    res.status(201).json({
      success: true,
      message: "Listing created successfully",
      listing,
    });
  } catch (error) {
    console.error("Error creating listing:", error);
    res.status(500).json({ error: "Failed to create listing" });
  }
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
