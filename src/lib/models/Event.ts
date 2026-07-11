import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true, index: true },
    location: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: false },
    image: { type: String, required: false }, // Cloudinary or other URL
    videoUrl: { type: String, required: false }, // Optional Cloudinary video URL
    category: { 
        type: String, 
        required: true,
        enum: ['News', 'Institutional Events', 'Community Events', 'Upcoming Events', 'Gallery'],
        default: 'News'
    },
}, {
    timestamps: true
});

export default mongoose.models.Event || mongoose.model("Event", EventSchema);
