
const router = require("express").Router();

const db = require("../models/workout");



router.post("/api/workouts", ({body}, res) => {
    db.create({body})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
      });
  });

router.get("/api/workouts", (req, res)=>{
    db.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
})

router.put("/api/workouts/:id", (req, res) => {
  let id = req.params.id
  db.findOneAndUpdate({_id:id}, {$push: {exercises:req.body}}, {new: true})
  .then(dbWorkout=>{
    console.log(dbWorkout);
    res.json(dbWorkout);
  })
  .catch(err=>{
    res.json(err)
  })
});

router.get("/api/workouts/range", (req, res)=>{
  db.find({})
  .then(dbWorkout=>{
    console.log(dbWorkout);
  })

})

  
module.exports = router



// app.post("/api/workout/:id", ({body}, res) => {
//   db.exercise.create(body)
//     .then(({_id}) => db.exercise.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/api/exercise", (req, res) => {
//   db.exercise.find({})
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/api/workout", (req, res) => {
//   db.workout.find({})
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/api/populated", (req, res) => {
//   db.workout.find({})
//     .populate("exercises")
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });