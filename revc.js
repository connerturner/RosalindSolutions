function reversePair(d){
	return d.split("").reverse().join("");
}

function complementPairs(dnaString) {
    var complement = "";
    dnaString.split('').map(function(char){
        if(char == "A" || char == "t"){
            complement = complement + "T";
        }
		        if(char == "T" || char == "t"){
            complement = complement + "A";
        }
		        if(char == "C" || char == "t"){
            complement = complement + "G";
        }
		        if(char == "G" || char == "t"){
            complement = complement + "C";
        }
    });
    console.log(complement.split("").reverse().join(""));
}