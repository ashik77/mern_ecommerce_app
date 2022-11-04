import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { User } from "../models/user.model.js";

const secret = "testing";

// export const signIn = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (!existingUser)
//       return res.status(404).json({ message: "User doesn't exist" });

//     const isPasswordCorrect = await bcrypt.compare(
//       password,
//       existingUser.password
//     );

//     if (!isPasswordCorrect)
//       return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign(
//       { email: existingUser.email, id: existingUser._id },
//       secret,
//       {
//         expiresIn: "15h",
//       }
//     );

//     res.status(200).json({ result: existingUser, token });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong" });
//     console.log(error);
//   }
// };

export const register = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const googleLogin = async (req, res) => {
  const { name, email, token, googleId } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const result = { _id: existingUser._id.toString(), email, name };
      return res.status(200).json({ result, token });
    }

    const result = await User.create({
      email,
      name,
      googleId,
    });

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
