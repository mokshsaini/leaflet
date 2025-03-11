import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    username : {
        type : String,
        required : true,
        unique : true,
        maxLength : 20
    },

    password : {
        type : String,
        required : true,
        maxLength : 20,
        minLength : 8
    },

    email : {
        type : String,
        required : true,
        unique : true
    }
},


{timestamps : true});


const noteSchema = new mongoose.Schema({
  title : String,
  note : String,
  user : {
      type : mongoose.Schema.Types.ObjectId,
      ref : "user",
      required : true
   }
},

{timestamp : true});


const checkListSchema = new mongoose.Schema({

    title : String,

    itemlist : [{

        data : {
            type : String
        },

        done : {
            type : Boolean,
            default : false
        }
     }],

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
     }
},

{timestamp : true})


export const userModel = mongoose.model("user", userSchema);
export const noteModel = mongoose.model("note", noteSchema);
export const clistModel = mongoose.model("checklist", checkListSchema);
