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
				let  options=`
				<p id="cimg"> <img id="img" src="${country[i].flag}" width="50%" height="100%"></p>
	<p id="ig">Name of the country:<span id ="name">${country[i].name}</span></p>
	<a id="link" href="secondpage.html">Click to know more</a>`
	document.getElementById("four").innerHTML=options;
				break;
			}
		}
		if(i===country.length)
			alert("Please enter a valid city name");
		localStorage.setItem('myname',name);

}
}



