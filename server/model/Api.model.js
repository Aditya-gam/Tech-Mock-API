import mongoose from "mongoose";

const requestTypes = ["GET", "POST", "PUT", "PATCH", "DELETE"];

export const ApiSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: false,
    // auto: true,
  },
  request: {
    type: String,
    enum: requestTypes,
    required: [true, "Please provide request"],
  },
  requestBody: {
    type: String,
  },
  endpoint: {
    type: String,
    required: [true, "Please provide endpoint"],
  },
  responseCode: {
    type: Number,
    required: [true, "Please provide response code"],
  },
  responseBody: {
    type: String,
    required: [true, "Please provide response body"],
  },
});

export default mongoose.model.Apis || mongoose.model("Api", ApiSchema);
