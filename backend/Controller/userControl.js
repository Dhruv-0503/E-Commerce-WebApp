const Users = require('../Models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userControl = {

    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const user = await Users.findOne({ email });
            // Condition for new User
            if (user) return res.status(400).json({ msg: 'Email Already Registered !!' });
            // Condition for password length
            if (password.length < 6) return res.status(400).json({ msg: 'Password Is Too Short !!' });

            const passwordHash = await bcrypt.hash(password, 10);

            const newUser = new Users({
                name, email, password: passwordHash
            });

            await newUser.save();

            // User Authentication
            const accessToken = createAccessToken({ id: newUser._id });
            const refreshToken = createRefreshToken({ id: newUser._id });

            res.cookie('refreshtoken', refreshToken, {
                httpOnly: true,
                path: '/user/refresh_token'
            })

            res.json({ accessToken });
        }
        catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    refreshtoken: async (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken;

            if (!rf_token) res.status(400).json({ msg: 'Please Login / Register...!!' });

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) res.status(400).json({ msg: 'Please Login / Register...!' })

                const accessToken = createAccessToken({ id: user.id });
                res.json({ user, accessToken });
            });
            res.json({ rf_token });
        }
        catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await Users.findOne({ email });
            if (!user) return res.status(400).json({ Msg: 'Make Sure User Is Already Registered...!' });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ Msg: 'Invalid Password...!' });
            }

            const accessToken = createAccessToken({ id: user._id });
            const refreshToken = createRefreshToken({ id: user._id });

            res.cookie('refreshtoken', refreshToken, {
                httpOnly: true,
                path: '/user/refresh_token'
            })

            res.json({ accessToken });

        }
        catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },

    logout: async (req, res) => {
        try {
            res.clearCookie('refreshtoken', { path: '/user/refresh_token' });
            return res.json({ msg: 'Log Out' })
        }
        catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },

    getUser : async (req,res) =>{
        try{
            const user = await Users.findById(req.user.id).select('-password');
            if(!user) return res.status(400).json({msg : 'User Not Found...!'});
            res.json(user);
        }
        catch(err){
            res.status(500).json({msg : err.message});
        }
    }

}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}


module.exports = userControl;