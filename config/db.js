if(process.env.NODE_ENV == "production" || process.env.VERCEL_ENV == "production") {
  module.exports = {mongoURI: "mongodb+srv://<username>:<password>@blogapp-prod.mpk225h.mongodb.net/"}
} else {
  module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}
