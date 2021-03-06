// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.
var crypto = require("crypto");
var rb = crypto.randomBytes;
function rng() {
    return rb(16);
}
module.exports = rng;
