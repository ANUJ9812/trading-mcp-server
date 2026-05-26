import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Trading MCP Server Running");
});

app.post("/analyze", (req, res) => {
  const data = req.body;

  console.log("Received:", data);

  res.json({
    status: "success",
    message: "Chart data received",
    analysis: "Bearish structure detected"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
