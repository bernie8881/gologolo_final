var mongoose = require("mongoose");

var LogoSchema = new mongoose.Schema({
    id: String,
    text: String,
    texts: [String],
    color: String,
    fontSize: { type: Number, min: 2, max: 144 },
    image: String,
    backgroundColor: String,
    borderColor: String,
    borderRadius: { type: Number, min: 0, max: 200 },
    borderWidth: { type: Number, min: 0, max: 200 },
    padding: { type: Number, min: 0, max: 200 },
    margin: { type: Number, min: 0, max: 200 },
    width: { type: Number, min: 1, max: 1000 },
    height: { type: Number, min: 1, max: 1000 },
    lastUpdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Logo", LogoSchema);
// update the way the logos are defined in our database (Logo.js) such that each logo contains all the same information we had in HW 2.
//This means along with the text, color, and font size, each logo should also store the background color, border color, border radius, border width, padding, and margins.
