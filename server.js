// Require Dependencies
const express = require('express');

//Setting up basic express server properties

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Point our server to routing files
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

//Listening for request
app.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`);
});
