import User from "../model/user-schema.js";


export const userSignup = async (req, res) => {
    try {

        const user = req.body;

        // await User.findOne({ username: user.username }, (err, user) => {
        //     if (user) {
        //         return res.status(401).json({ message: "Username already exists" });
        //     }
        // });

        const newUser = new User(user);
        await newUser.save();

        res.status(200).json({ message: user });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}

export const UserLogin = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await User.findOne({
            username:
                username, password: password
        });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }
        return res.status(200).json({ message: user });
    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}

export const UserCart = async (req, res) => {
    try {
        console.log("Hello guys chai pilo")
        const username = req.body.username;
        const user = await User.findOne({
            username: username
        });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }
        user.products = [...user.products, req.body.products]
        await user.save();

        res.status(200).json({ message: user });

    } catch (error) {
        console.log(error)
    }
}