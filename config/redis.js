const URL = require("url").URL;

// keys.js figures out what set of keys to use
if (process.env.NODE_ENV === "production") {
    // We are in prod
    const rtgConfig = new URL(process.env.REDISTOGO_URL);
    module.exports = {
      ...rtgConfig
    };
} else {
  // We are in dev
  module.exports = {
    host: "127.0.0.1",
    port: "6379"
  };
}
