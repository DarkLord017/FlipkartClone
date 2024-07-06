import mongoose from 'mongoose';

export const Connection = async () => {
    try {
        await mongoose.connect('mongodb+srv://sambhavjain170944:KySb07wvkvdhcztP@cluster0.ankzucc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Connected Succesfully')
    } catch (error) {
        console.log("Error in DB connection", error);
    }
}

export default Connection;