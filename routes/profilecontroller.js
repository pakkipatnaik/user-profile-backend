const updateProfile = (req, res) => {
    const { firstName, lastName,email, password, contactNumber  } = req.body;
    const profilePicture = req.file ? req.file.filename : null;

    console.log('User Data:', {firstName, lastName,email, password, contactNumber, profilePicture });

    res.status(200).json({ message: 'Profile updated successfully!', data: { firstName, lastName,email, password, contactNumber, profilePicture } });
};

module.exports = { updateProfile };
