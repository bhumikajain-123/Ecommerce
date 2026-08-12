
const User = require("../../models/User");

// ---------------- ADD USER ----------------

const addUser = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role: "user"
        });

        await user.save();

        res.status(201).json({
            success: true,
            message: "User added successfully",
            user
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


// ---------------- GET ALL USERS ----------------

const getUser = async (req, res) => {
    try {
        const users = await User.find({ role: "user" });

        res.status(200).json({
            success: true,
            users
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


// ---------------- GET USER BY ID ----------------

const getIdUser = async (req, res) => {
    try {
        const id = req.params.id;

        const user = await User.findOne({
            _id: id,
            role: "user"
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            user
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


// ---------------- UPDATE USER ----------------

const updateUser = async (req, res) => {
    try {

        const id = req.params.id;

        const { name, email, role } = req.body;

        const user = await User.findOneAndUpdate(
            {
                _id: id,
                role: "user"
            },
            {
                name: name,
                email: email,
                role: role
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            user: user
        });

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }
};


// ---------------- DELETE USER ----------------

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        const user = await User.findOneAndDelete({
            _id: id,
            role: "user"
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


module.exports = {
    addUser,
    getUser,
    getIdUser,
    updateUser,
    deleteUser
};

