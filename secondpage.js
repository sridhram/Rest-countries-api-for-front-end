
var name=localStorage.getItem('myname');
console.log(name);
fetch('https://restcountries.eu/rest/v2/all')
	.then(res=>res.json())
	.then(data=>initialize(data))
	.catch(err=>console.log("Error",err));
	function initialize(country){
		
		for(i=0;i<country.length;i++){
			console.log(name);
			if(name.toUpperCase()===country[i].name.toUpperCase()){
				let countries=country[i];
				document.getElementById('first').innerHTML=name;
				document.getElementById('second').innerHTML=country[i].capital;
				document.getElementById('third').innerHTML=country[i].topLevelDomain;
				document.getElementById('fourth').innerHTML=country[i].callingCodes;
				document.getElementById('fifth').innerHTML=country[i].population;
				document.getElementById('sixth').innerHTML=country[i].region;
				document.getElementById('seventh').innerHTML=country[i].currencies.map(a=>`${a.name}(${a.code})`).join(", ");
				document.getElementById('eigth').innerHTML=country[i].languages.map(a=>`${a.nativeName}(${a.name})`).join(", ");
				break;
			}
		}
	}
		