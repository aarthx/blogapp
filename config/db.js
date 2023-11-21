if(process.env.NODE_ENV == "production" || process.env.VERCEL_ENV == "production") {
  module.exports = {mongoURI: "mongodb+srv://usuarioReadOnly:2IpzMzKYNH0lDTgN@blogapp-prod.mpk225h.mongodb.net/?retryWrites=true&w=majority"}
} else {
  module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}
