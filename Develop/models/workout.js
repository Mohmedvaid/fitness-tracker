const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: ()=> new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter the type of exercise"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of the exercise"
      },
      duration: {
        type: Number,
        required: "Enter the duration"
      },
      weight: {
        type: Number,
        required: "Enter the weight",
      },
      reps: {
        type: Number,
        required: "Enter the reps"
      },
      sets: {
        type: Number,
        required: "Enter the reps"
      }
    }
  ]
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;