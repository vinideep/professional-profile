const heading = document.createElement("h1");
heading.style.color = "#fff";
heading.style.border = "2px solid black"
heading.style.padding= "20px";
heading.textContent = "Welcome to Kovan Interns";
heading.style.textAlign = 'center';


document.body.style.background = "url(bg.jpg)";
document.body.style.backgroundSize = "auto";
document.body.style.backgroundRepeat = "no-repeat";


const para = document.createElement("p");
para.textContent = "In 2015, we positioned ourselves in the market as Enterprise Application Development experts. By applying Lean and Agile principles to building customer projects we are continuing to grow our client base in the International markets.";
para.style.textAlign = "justify";
para.style.marginLeft = "40%";
para.style.width = "400px";
para.style.color = "#fff";




const button = document.createElement("button");
button.textContent = "click";
button.style.textAlign = "center";
button
document.body.appendChild(heading);
document.body.appendChild(para);
document.body.appendChild(button);