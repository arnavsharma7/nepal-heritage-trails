import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "../utils/AsyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import prisma from "../utils/PrismaProvider.js";

const ACCESS_TOKEN_SECRET =
  process.env.ACCESS_TOKEN_SECRET ||
  process.env.JWT_SECRET ||
  "nepal-heritage-trails-secret-key-2024";

const ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN || "7d";

const createAccessToken = (user) =>
  jwt.sign(
    {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
    },
    ACCESS_TOKEN_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRES_IN }
  );

const LoginUser = asyncHandler(async (req, res) => {
  const email = req.body?.email?.toLowerCase();
  const password = req.body?.password;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    throw new ApiError(401, "Invalid credentials");
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    existingUser.passwordHash
  );

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid credentials");
  }

  delete existingUser.passwordHash;

  const accessToken = createAccessToken(existingUser);

  return res.status(200).json(
    new ApiResponse(200, "User logged in successfully", {
      token: accessToken,
      accessToken,
      tokenType: "Bearer",
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
      user: existingUser,
    })
  );
});

const RegisterUser = asyncHandler(async (req, res) => {
  const email = req.body?.email?.toLowerCase();
  const password = req.body?.password;
  const fullName = req.body?.fullName;
  const role = req.body?.role || "tourist";

  if (!email || !password || !fullName) {
    throw new ApiError(400, "Email, password and full name are required");
  }

  const userExists = await prisma.user.findUnique({
    where: { email },
  });

  if (userExists) {
    throw new ApiError(409, "User with this email already exists");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      email,
      passwordHash,
      fullName,
      role,
    },
  });

  delete newUser.passwordHash;

  const accessToken = createAccessToken(newUser);

  return res.status(201).json(
    new ApiResponse(201, "User registered successfully", {
      token: accessToken,
      accessToken,
      tokenType: "Bearer",
      expiresIn: ACCESS_TOKEN_EXPIRES_IN,
      user: newUser,
    })
  );
});

export { LoginUser, RegisterUser };
