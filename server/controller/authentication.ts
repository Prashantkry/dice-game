import express from "express";
import { createUser, getUserByEmail } from "../model/userSchema";
import { authentication, random } from "../helpers";
import jwt from "jsonwebtoken"

// ! login user 
export const logIn = async (req: express.Request, res: express.Response) => {
  // console.log('login')
  try {
    const { email, password } = req.body;
    // console.log("email -> ", email, "password -> ", password)
    if (!email || !password) {
      return res.sendStatus(500);
    }

    const user = await getUserByEmail(email).select("+authentication.salt + authentication.password");
    // console.log("user after log in -> ", user)

    if (!user) {
      return res.status(400).json("User not found");
    }

    const expectedHash = authentication(user.authentication.salt, password);

    if (user.authentication.password !== expectedHash) {
      return res.sendStatus(403);
    }

    // * creating jwt token
    const jwtToken = jwt.sign({
      email: email,
    },
      process.env.JWT_SECRET,
      { expiresIn: "20m" }
    );
    // console.log(jwtToken);

    await user.save();

    const userOtherData = await getUserByEmail(email)
    // console.log("userOtherData -> ", userOtherData)

    return res.status(200).json({ userOtherData, jwtToken, message: "Sign In Successful" }).end();
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}


// ! sign up user
export const register = async (req: express.Request, res: express.Response) => {
  try {
    // console.log('registerData -> ', req.body)
    const { name, email, password, userName } = req.body;

    console.log("name -> ", name, "email -> ", email, "password -> ", password, "userName -> ", userName)

    // if missing any of above data
    if (!email || !password || !userName) {
      return res.status(500).json({ message: "Missing data" }).end()
    }

    // if user data exist
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      // console.log("existingUser -> ", existingUser);
      return res.status(500).json({ message: "UserAlready" }).end();
    }

    // if user doesn't exist then create new user
    const salt = random();
    const user = createUser({
      name,
      email,
      userName,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
      TotalPoints: 5000
    });
    console.log("user -> ", await user)
    return res.status(200).json({ user, message: "User created successfully" }).end();
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
};
