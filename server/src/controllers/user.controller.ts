import { Request, Response } from "express";
import User from "../models/user.model";


export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email || age === undefined) {
      return res.status(400).json({
        message: "Name, email and age are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User with this email already exists",
      });
    }

    const user = await User.create({ name, email, age });

    return res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create user",
    });
  }
};


export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    return res.status(200).json({
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch users",
    });
  }
};


export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Invalid user id",
    });
  }
};


export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to update user",
    });
  }
};


export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to delete user",
    });
  }
};
