import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    image: { type: String, required: true }, // Cloudinary or other URL
}, {
    timestamps: true
});

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
