var express = require('express');
var router = express.Router();
const googleTrends = require('google-trends-api');
const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const proverty_data = [];
const regions = ["McKinley", "Luna", "Cibola", "Apache", "Maricopa", "Pima", "East Carroll", "Madison", "Tensas", "East Baton", "Adams", "Dunn", "Mckenzie", "Wells", "Williams", "Barnstable", "Dukes", "Essex", "Middlesex", "Hampshire", "Kent", "New Castle", "Sussex", "Seattle", "Yalima", "Okanogan", "Clark", "Chester", "Brandford", "Somerest"]


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});


router.get('/trends', function(req, res, next) {
	console.log("trends")
	googleTrends.interestOverTime({keyword: 'Women\'s march'})
	.then(function(results){

		res.json(JSON.parse(results));
		console.log(results);
	})
	.catch(function(err){
		console.error('Oh no there was an error', err);
	});
});

router.get('/poverty/:region', function(req, res, next) {
	fs.createReadStream('PovertyEstimates.csv')
	.pipe(csv())
	.on('data', function(data){
		try {
			
			if(data.Area_name.split(' ')[0].indexOf(req.params.region)>=0){
			console.log(data.Area_name)
			proverty_data.push(data);
			res.send(data)
		}
    }
    catch(err) {
    }
})
	.on('end',function(){
    
});
}) 

	router.get('/education/:region', function(req, res, next) {

	});

	router.get('/population/:region', function(req, res, next) {

	});




	module.exports = router;
