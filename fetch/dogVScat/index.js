const dogBtn = document.getElementById("dogBtn");
dogBtn.addEventListener("click",()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data =>{
            const image = document.getElementById("image");
            image.setAttribute("src", data.message);
        });    
});


const catBtn = document.getElementById("catBtn");
catBtn.addEventListener("click",()=>{
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data =>{
            const image = document.getElementById("image");
            image.setAttribute("src", data[0].url);
        });
});