if(process.env.NODE_ENV == "production") {
  module.exports = {mongoURI: "mongodb+srv://arthuraugustoexe:rLH4KcZjBYCxOaGV@blogapp-prod.mpk225h.mongodb.net/?retryWrites=true&w=majority"}
} else {
  module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}
