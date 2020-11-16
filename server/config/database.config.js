const mongoose = require('mongoose'),
    uri = 'pets';

mongoose.connect(`mongodb://localhost/${uri}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log("You're now in the mac frame . . ."))
    .catch(err => console.log("Meltdown! Meltdown! Meltdown!",err))