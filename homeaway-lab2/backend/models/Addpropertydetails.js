const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PropertySchema = new Schema({
  
    bedroom: {
        type: String
      },
      accomodates: {
        type: String
      },
      stay: {
        type: String
      },
      price: {
        type: String
      },
      night: {
        type: String
      },
      bathrooms: {
        type: String
      },
      type: {
        type: String
      },
      country: {
        type: String
      },
      address: {
        type: String
      },
      unit: {
        type: String
      },
      city: {
        type: String
      },
      state: {
        type: String
      },
      code: {
        type: String
      },
      address: {
        type: String
      }
    
});
module.exports = Prop = mongoose.model('property', PropertySchema);

