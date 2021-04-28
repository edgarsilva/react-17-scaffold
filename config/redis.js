const url = require("url");

// keys.js figures out what set of keys to use
if (process.env.NODE_ENV === "production") {
    // We are in prod
    const rtgConfig = url(process.env.REDISTOGO_URL);
    module.exports = {
      url: rtgConfig.href,
      user: rtgConfig.auth.split(":")[0],
      password: rtgConfig.auth.split(":")[1]
    };
} else {
  // We are in dev
  module.exports = {
    host: "127.0.0.1",
    port: "6379"
  };
}
