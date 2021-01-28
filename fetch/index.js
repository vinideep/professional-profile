

fetch("https://randomuser.me/api/?gender=female&results=10")
.then(response => response.json())
.then(data => data.results.map(runner=>{
    const list = document.createElement("li");
    const img = document.createElement("img");
    img.setAttribute("src",runner.picture.medium);
    const span = document.createElement("span");
    span.textContent = runner.name.first+" "+runner.name.last;
    list.appendChild(img);
    list.appendChild(span);
    document.getElementById("runners").appendChild(list);
}));

