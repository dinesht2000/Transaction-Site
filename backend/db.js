const mongoose = require("mongoose");
mongoose.connect(
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

const AccountSchema=new mongoose.Schema({
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
    },
    balance:{
      type:Number,
      required:true
    }
});



const User = mongoose.model("User", UserSchema);
const Account = mongoose.model("Account", AccountSchema);



module.exports = { User ,Account};
