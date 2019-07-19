//window.localStorage;
let country,name;

function getData () {
	name=document.getElementById('text').value;
	console.log(name);
	if(name=="")
		{alert("Please enter the name");
		return;}
	
	fetch('https://restcountries.eu/rest/v2/all')//For fetching api
	.then(res=>res.json())
	.then(data=>initialize(data))//calling initialize function with data fetched
	.catch(err=>console.log("Error",err));
	function initialize(country){
		for(i=0;i<country.length;i++){
			if(name.toUpperCase()===country[i].name.toUpperCase()){
				let  options=`
				<div id="ans"><img id="img" src="${country[i].flag}">
	<p id="ig">Name of the country:<span id ="name">${country[i].name}</span></p>
	<p id="link"><a href="secondpage.html">Click to know more</a></div></p>`
	document.getElementById("four").innerHTML=options;
				break;
			}
		}
		if(i===country.length)
			alert("Please enter a valid country name");
		localStorage.setItem('myname',name);

}
}



