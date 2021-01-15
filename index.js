// Total
let total = document.getElementById("total");
var totalAmt=0;
let sum = 0;
// count intializing
var count=[]
for (let i = 0;i<10;i++){
    count[i]=0;
}
class items{
    constructor(counting){
        this.counting = counting;
    }
    
    noItems(btn,countDisplay,num,tot,prices){
        // add button
        btn = document.getElementById(`${btn}`);
        // no of juices
        countDisplay = document.getElementById(`${countDisplay}`);
        // no of count in billing area
        num = document.getElementById(`${num}`);
        // get the id of multiply of no of juices 
        tot = document.getElementById(`${tot}`);
        // price of the juice
        prices =parseInt(document.getElementById(`${prices}`).value);
        // on click increase the count
        countDisplay.innerHTML = ++this.counting;
        // multiply of no of juices
        tot.innerHTML = parseInt(countDisplay.innerText)*prices;
        num.innerHTML = countDisplay.innerHTML;
        
    }
}
var item=[];
for(let i=1;i<10;i++){
    item[i]= new items(count[i]);
}
// class completed

var countno = document.getElementsByClassName("countNo");
var fruitcount = document.getElementsByClassName("fruitCount");
var hel = document.getElementsByClassName("fruitTotal");
var tSales = document.getElementById("tSales");
var tdaySales =document.getElementById("tdaySales");
var confirmBtn = document.getElementById("confirmBtn");
var temp = 0;
// confirm button event listner
confirmBtn.addEventListener("click",()=>{
var tamp = 0;
for (let i = 0; i<hel.length;i++){
    tamp+=parseInt(hel[i].innerHTML);
}
temp+=tamp;
total.innerHTML = tamp;

});
// clearing function
var cancel = document.getElementById("cancelBtn");
cancel.addEventListener("click",()=>{
    for (let i = 0; i<countno.length;i++){
        countno[i].innerHTML = 0;
        hel[i].innerHTML = 0;
        fruitcount[i].innerHTML = 0;
}
    for(let i=1;i<10;i++){
    item[i].counting = 0;
}
    tdaySales.innerText = temp;
    total.innerText = 0;
});

// add Functions
let buttoncount = 6;  
function adding(fruit,newprice,table,billarea){
    let fruits = document.getElementById(fruit).value;
    let newprices =parseInt(document.getElementById(newprice).value);
    let mytable = document.getElementById(table);
    let addbill = document.getElementById(billarea);



    if(fruits === ""){
        alert("please enter new Juice!");
    }else{
        let p = document.createElement("p");
        p.setAttribute("id",`j${buttoncount}`);
        p.innerHTML=`${fruits}<span class="fruitCount" id="n${buttoncount}">0</span> <span class="fruitTotal" id="t${buttoncount}">0</span>`
        addbill.appendChild(p);

        var sample = mytable.insertRow(-1);
        sample.setAttribute("id",`r${buttoncount}`);
        var cell0 = sample.insertCell(0)
        var cell1 = sample.insertCell(1);
        var cell2 = sample.insertCell(2);
        var cell3 = sample.insertCell(3);
        var cell4 = sample.insertCell(4);
        cell0.innerHTML = `<button onclick ="deleteRow(this,'j${buttoncount}')">-</button>`;     
        cell1.setAttribute("id",`pr1`);
        cell1.setAttribute("class",`pr1`);
        cell1.innerHTML = fruits;
        cell2.setAttribute("id",`p${buttoncount}`);
        cell2.innerHTML =`<input type="text" class="inPrice" value="${newprices}" id="v${buttoncount}">`;
        cell3.setAttribute("id",`c${buttoncount}`);
        cell3.className = `countNo`;
        cell3.innerHTML = '0';
        cell4.innerHTML = `<button onclick="item[${buttoncount}].noItems('btn${buttoncount}','c${buttoncount}','n${buttoncount}','t${buttoncount}','v${buttoncount}')" id="btn${buttoncount}">+</button>`;
        // item[buttoncount] = new items[buttoncount];
        ++buttoncount;
        console.log(cell4); 
        
        
    }
}
// Delete row
function deleteRow(r,bill) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("mytable").deleteRow(i);
  document.getElementById(bill).remove();
  buttoncount = 6;
}
    
function print(){
for (let i = 0; i<hel.length;i++){
    countno[i].innerHTML = 0;
    hel[i].innerHTML = 0;
    fruitcount[i].innerHTML = 0;
}
    for(let i=1;i<10;i++){
    item[i].counting = 0;
}
    tdaySales.innerText = temp;
    total.innerText = 0;
}