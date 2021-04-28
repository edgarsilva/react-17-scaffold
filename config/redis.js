// keys.js figures out what set of keys to use
if (process.env.NODE_ENV === "production") {
  // We are in prod
  module.exports = {
    url: process.env.REDISTOGO_URL
  };
} else {
  // We are in dev
  module.exports = {
    host: "127.0.0.1",
    port: "6379"
  };
}
