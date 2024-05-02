import express from 'express';
import mongoose from 'mongoose';

const app = express();

// Connect to MongoDB using Mongoose
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/your_database_name', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.error(error.message);
        setTimeout(connectDB, 5000);
    }
};

connectDB();

// Define Mongoose schema and model for users if not already defined

// Define routes
app.get('/monthlyMetrics/:month', async (req, res) => {
    const targetMonth = parseInt(req.params.month);

    try {
        // asume there is a model for user which contail all theese feild and user is unique
        // Retrieve user data for the specified month
        const users = await UserModel.find({
            logged_in: { $lte: new Date(2024, targetMonth, 1) },
            logged_out: { $gte: new Date(2024, targetMonth - 1, 1) },
            lastSeenAt: { $gte: new Date(2024, targetMonth - 1, 1), $lte: new Date(2024, targetMonth, 1) }
        });

        // Calculate monthly logged in users
        const monthlyLoggedInUsers = users.length;

        // Calculate active users
        const activeUsers = users.filter(user => user.lastSeenAt >= user.logged_in);


        //SENDING THE RESPONSE TO FRONT_END
        res.json({
            monthlyLoggedInUsers,
            activeUsersCount: activeUsers.length,
            activeUsers
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
