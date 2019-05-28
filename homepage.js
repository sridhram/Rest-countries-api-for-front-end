//window.localStorage;
let country,name;

function getData () {
	name=document.getElementById('text').value;
	console.log(name);
	if(name=="")
		{alert("Please enter the name");
		return;}
	
	fetch('https://restcountries.eu/rest/v2/all')
	.then(res=>res.json())
	.then(data=>initialize(data))
	.catch(err=>console.log("Error",err));
	function initialize(country){
		console.log(123);
		for(i=0;i<country.length;i++){
			if(name.toUpperCase()===country[i].name.toUpperCase()){
				document.getElementById('name').innerHTML=country[i].name;
				document.querySelector("#cimg img").src=country[i].flag;
				break;
			}
		}
		localStorage.setItem('myname',name);

}
}



