async function fetchData(url){
    const response = await fetch(url);
    const jsonData = await response.json()
    return jsonData    
}


let displayCosmic = document.querySelector(".displayCosmic");


async function searchMovie (){    
    let search = document.querySelector(".search").value;

    let response =  await fetchData(` https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&apikey=3ad548118680d3dad3f194ff9e289c93&hash=2bf68c80955bd4f084b8fe653c6683a0&ts=1685222640625`);
    console.log(response);

    let data = response["data"];
    let result = data["results"];

    for(let i=0; i<result.length; i++){
        let div = document.createElement("div");
        
        let name = document.createElement("h1");
        name.innerHTML=result[i].name;
        name.style.marginLeft="500px";
        div.append(name);
        displayCosmic.append(div);
        
    }
}