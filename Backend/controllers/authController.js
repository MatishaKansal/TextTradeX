const User = require('../models/User');
const Book = require('../models/Book');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ email, password });

    if (user) {
      res.status(201).json({
        _id: user._id,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (err) {
    console.error('REGISTER ERROR:', err);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.status(200).json({
      message: 'Logged in Successfully',
      token: generateToken(user._id),
      user: {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        mobileNo: user.mobileNo,
        city: user.city,
        state: user.state
      }
    });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    console.error('LOGIN ERROR:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    // Only update if data is sent
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.age = req.body.age || user.age;
    user.mobileNo = req.body.mobileNo || user.mobileNo;
    user.city = req.body.city || user.city;
    user.state = req.body.state || user.state;

    const updatedUser = await user.save();

    res.status(200).json({
      message: 'Profile updated successfully',
      user: {
        _id: updatedUser._id,
        email: updatedUser.email,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        age: updatedUser.age,
        mobileNo: updatedUser.mobileNo,
        city: updatedUser.city,
        state: updatedUser.state
      }
    });
  } catch (err) {
    console.error('PROFILE UPDATE ERROR:', err);
    res.status(500).json({ message: 'Server error during profile update' });
  }
}

exports.addBookInfo = async (req, res) => {
  const { bookName, board, bClass, subject, price, medium, author, description } = req.body;

  if(!bookName || !board || !bClass || !subject || !price || !medium) {
    return res.status(400).json({message: 'Mandatory fields not provided!'})
  }

  const fileData = req.file ? {
    filename: req.file.filename,
    originalname: req.file.originalname,
    path: req.file.path,
    mimetype: req.file.mimetype,
    size: req.file.size
  } : null;

  try {
    const newBook = new Book({ bookName, board, bClass, subject, price, medium, description, file: fileData });
    await newBook.save();
    res.status(201).json({message: 'Book added successfully', book: newBook});
  } catch (err) {
    console.error('ADD BOOK ERROR:', err);
    res.status(500).json({message: 'Server error during book addition'});
  }
};