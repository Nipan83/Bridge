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

router.get('/poverty/', function(req, res, next) {
	fs.createReadStream('PovertyEstimates.csv')
	.pipe(csv())
	.on('data', function(data){
		try {
			if(regions.includes(data.Area_name.split(' ')[0])){
			let row = {'area':data.Area_name, 'total_poverty_count':data.POVALL_2018,'poverty_prec':data.PCTPOVALL_2018}
			proverty_data.push(row)}
    }
    catch(err) {
    }
})
	.on('end',function(){
    res.send(proverty_data)
});
}) 

	router.get('/education/', function(req, res, next) {
		fs.createReadStream('Unemployment.csv')
	.pipe(csv())
	.on('data', function(data){
		try {
			if(regions.includes(data.area_name.split(' ')[0])){
			console.log(data[' Employed_2019 '])
			let row = {'area':data.area_name, 'employed':data[' Employed_2019 '],'unemployed':data[' Unemployed_2019 ']}
			proverty_data.push(row)}
    }
    catch(err) {
    }
})
	.on('end',function(){
    res.send(proverty_data)
});

	});

	router.get('/population/:region', function(req, res, next) {

	});




	module.exports = router;
