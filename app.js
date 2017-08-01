module.exports = aritGeo;

function aritGeo(seq){

	let ariCheck = [];
	let geoCheck = [];

	if (Array.isArray(seq) && seq[0] == undefined){
		return 0;
	}

	if (!Array.isArray(seq) || seq.length < 2 || seq == undefined){
		return -1
	}

	for (let i=1; i < seq.length; i++){

		if (seq[i] - seq[i-1] == 0) {
			return -1;
		}

		ariCheck.push(seq[i] - seq[i-1]);
		geoCheck.push(seq[i] / seq[i-1]);

	}

	if (sameValues(ariCheck)){
		return "Arithmetic";	
	} else if (sameValues(geoCheck)){
		return "Geometric";
	}

	return -1;
	
}

function sameValues(arr) {
  	return arr.every( (v,i,a) => v===a[0] );
}

