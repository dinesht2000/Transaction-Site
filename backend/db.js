const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://dineshtchoudhary:XIWAeyvLDlZdWDHw@mac-personal.kfk9pe2.mongodb.net/paytm_clone"
);

const UserSchema = new mongoose.Schema({
  username: {
    type :String,
    required:true,
    minlength:4,
    maxlength:30
},
  firstName: {
    type:String,
    required:true,
    trim:true,
    maxlength:50
},
  lastName: {
    type:String,
    required:true,
    trim:true,
    maxlength:50
},

  password: {
    type:String,
    required:true,
    minlength:6
},

});



const User = mongoose.model("signup", UserSchema);


module.exports = { UserSchema };
