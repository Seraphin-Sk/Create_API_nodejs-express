const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

//connect to database mongoose
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('✅ Connexion successful'))
    .catch((err) => console.log('❌ Connexion failed' + " " + err.message))

