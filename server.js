const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'));

app.listen(8000, () => {
    console.log('Server is running @ port 8000');
})