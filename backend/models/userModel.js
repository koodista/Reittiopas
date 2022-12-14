const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please add a password']
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)


// const mongoose = require("mongoose");

// const userSchema = mongoose.Schema({
// //scheman tyyli muutettu
//   name: {
//     type: String,
//     required: [true, 'Anna nimi']
//   },
//   email: {
//     type: String,
//     required: [true, 'Anna sähköposti'],
//     unique: true
//   },

//   password: {
//     type: String,
//     required: [true, 'Anna salasana']
//   },
// },
//   {
//       timestamps: true,
//     });




//   //   nimi: String,
//   //   email: String // lisätään myöhemmin "unique:" jolloin eri tileihin tarvitaan eri email
//   //   //password: String -- lisätään myöhemmin
//   // }, {
//   //   timestamps: true,
//   // });

// module.exports = mongoose.model("User",userSchema);