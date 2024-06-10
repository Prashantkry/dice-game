import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  userName: String,
  authentication: {
    password: {
      type: String,
      required: true,
      select: false,
    },
    salt: { // for password hashing
      type: String,
      select: false,
    },
    sessionToken: { // for session management
      type: String,
      select: false,
    },
  },
  TotalPoints: String
}, {
  collection: 'UserSchema'
});

export const UserModel = mongoose.model("UserSchema", UserSchema);

// ! find user by email
export const getUserByEmail = (email: string) => UserModel.findOne({ email });

// ! create user
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => {
    console.log("create user trig")
    user.toObject()
  });
