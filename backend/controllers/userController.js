// @desc    Get user profile
// @route   GET /api/user/profile
// @access  Private
export const getProfile = async (req, res) => {
  try {
    // User is already attached to req by the protect middleware
    res.json({
      user: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        createdAt: req.user.createdAt
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
