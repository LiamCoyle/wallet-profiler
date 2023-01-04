import app from "./app";
// Start the server
const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
