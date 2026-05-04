import Crypto from '../models/Crypto.js';

// @desc    Get all cryptocurrencies
// @route   GET /api/crypto
// @access  Public
export const getAllCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find({});
    res.json(cryptos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get top gainers
// @route   GET /api/crypto/gainers
// @access  Public
export const getTopGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find({})
      .sort({ change24h: -1 })
      .limit(10);
    res.json(gainers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get new listings
// @route   GET /api/crypto/new
// @access  Public
export const getNewListings = async (req, res) => {
  try {
    const newListings = await Crypto.find({})
      .sort({ listedAt: -1 })
      .limit(10);
    res.json(newListings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Add new cryptocurrency
// @route   POST /api/crypto
// @access  Public
export const addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    // Check if crypto already exists
    const cryptoExists = await Crypto.findOne({ symbol: symbol.toUpperCase() });
    if (cryptoExists) {
      return res.status(400).json({ message: 'Cryptocurrency with this symbol already exists' });
    }

    // Create crypto
    const crypto = await Crypto.create({
      name,
      symbol: symbol.toUpperCase(),
      price,
      image,
      change24h: change24h || 0
    });

    res.status(201).json({
      message: 'Cryptocurrency added successfully',
      crypto
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
