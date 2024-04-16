const mongoose = require("mongoose");

// Defining Schema
const movieSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    ratings: { type: Number, required: true, min: 1, max: 5 },
    money: {
        type: mongoose.Decimal128,
        required: true,
        validate: (v) => v >= 10,
    },
    genre: { type: Array },
    isActive: { type: Boolean },
    comments: [
        { value: { type: String }, publish: { type: Date, default: Date.now } },
    ],
});

// Creating Model
const MovieModel = mongoose.model("Movie", movieSchema);

const createDoc = async () => {
    try {
        // Creating new document
        const m1 = new MovieModel({
            name: "Extraction 2",
            ratings: 4,
            money: 60000,
            genre: ["action", "adventure"],
            isActive: true,
            comments: [{ value: "That was an amazing movie" }],
        });

        const m2 = new MovieModel({
            name: "Inception",
            ratings: 4.5,
            money: 80000,
            genre: ["action", "adventure", "sci-fi"],
            isActive: true,
            comments: [{ value: "Mind-bending movie!" }],
        });
        
        const m3 = new MovieModel({
            name: "The Matrix",
            ratings: 4.7,
            money: 75000,
            genre: ["action", "sci-fi"],
            isActive: true,
            comments: [{ value: "Revolutionary movie!" }],
        });
        
        const m4 = new MovieModel({
            name: "Jurassic Park",
            ratings: 4.3,
            money: 70000,
            genre: ["action", "adventure", "sci-fi"],
            isActive: true,
            comments: [{ value: "Dinosaurs are awesome!" }],
        });
        
        const m5 = new MovieModel({
            name: "Interstellar",
            ratings: 4.6,
            money: 85000,
            genre: ["sci-fi", "adventure", "drama"],
            isActive: true,
            comments: [{ value: "Epic journey through space!" }],
        });
        
        const m6 = new MovieModel({
            name: "Avatar",
            ratings: 4.8,
            money: 90000,
            genre: ["action", "adventure", "sci-fi"],
            isActive: true,
            comments: [{ value: "Visually stunning!" }],
        });
        
        const m7 = new MovieModel({
            name: "The Shawshank Redemption",
            ratings: 4.9,
            money: 95000,
            genre: ["drama"],
            isActive: true,
            comments: [{ value: "The best movie ever made!" }],
        });        

        // Saving Document
        const result = await MovieModel.insertMany([m1, m2, m3, m4, m5, m6, m7]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { createDoc };