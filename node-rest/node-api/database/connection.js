const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Database Connected');
    } catch(error){
        console.log('Datbase not connected', error);
        throw new Error(error);
    }
}