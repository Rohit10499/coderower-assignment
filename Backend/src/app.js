import express from "express";
import cors from "cors";
import { Configuration } from "./model/configuration.model.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/configurations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let data = await Configuration.find({ id: id });
    console.log("query id", id);
    console.log("response", data);
    res.status(200).send(data[0].data);
  } catch (error) {
    res.send(error);
  }
});

app.put("/api/configurations/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { remark } = req.body;
    if (!remark) {
      res.status(400).send("remark is required");
    }
    const updateRemark = await Configuration.findOneAndUpdate(
      { id: id },
      { remark: remark },
      { new: true }
    );

    res.status(202).json({ message: "success" });
  } catch (error) {
    res.send(error);
  }
});

export { app };
