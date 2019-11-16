const mongoose = require('mongoose')

var myDB = 'mongodb://localhost/porfolio'

mongoose.connect(myDB, function() {
  if(mongoose.connection.readyState == 1) {
    console.log('connect to mongoDB')
    console.log('on ' + myDB)
  } else {
    console.log('problems connecting to mongoDB mongoose connection state is: ' + mongoose.connection.readyState)
  }
})

const carSchema = new mongoose.Schema({
  title: String,
  doors: Number,
  company: String
})

const Car = mongoose.model("Car", carSchema)

// // Create new one
// Car.create({title: 'camry', company: 'toyota', doors: 4}, function(err, data) {
//   console.log(data)
// })
//
// // Show All
Car.find({}, function(err, data) {
  console.log(data)
})
//
// // find one or many that have
// Car.find({title: 'Civic'}, function(err, data) {
//   console.log(data)
// })

// // Create new one
// Car.update({title: 'Civic'}, {$set: {title: 'Civic Type R', doors: 2}}, function(err, data) {
//   console.log(data)
// })

Car.findById('5dce64bf440711007a55fb25', function(err, car) {
  car.set({company: 'BMW'})
  car.save(function(err, updatedCar) {
    if(err) return handleError(err)
    console.log(updatedCar)
  })
})
