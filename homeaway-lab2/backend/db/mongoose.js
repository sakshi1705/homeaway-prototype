var mongoose = require('mongoose');
const db = 'mongodb://sakshityagi:Stevejobs1!@ds045618.mlab.com:45618/homeawaydb1';
//mongodb://<dbuser>:<dbpassword>@ds045618.mlab.com:45618/homeawaydb1
//connect to mongo
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv
};
mongoose.connect(db, options)
    .then(() => console.log('mongo connected'))
    .catch(() => console.log("error"));
mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://localhost:27017/homeaway');

module.exports = {mongoose};