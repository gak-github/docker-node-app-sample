let express = require('express');
let app = express();

app.get('/', (req, res) => {
	res.send('It is a node app running from docker container');
});

app.listen(3000, () => {
	console.log('app is listening on port 3000');
});
