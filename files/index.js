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
    
    noItems(btn,countDisplay,num,tot,prices,stock){
        if (parseInt(document.getElementById(stock).innerText) <= 0){
            // alert("stop");
            for(let i=0;i<countno.length;i++){
                fix[i] = 0;
                bal[i] = 0;
                document.getElementById(stock).innerText = 0;
                countDisplay.innerHTML = 0;
                this.counting = 0;
            }
        
        }
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
        
        document.getElementById(stock).innerText = parseInt(--document.getElementById(stock).innerText);
        // creating stock assigning a new fix variable through array
        for(let i=0;i<stockCount.length;i++){
            fix[i] = bal[i];
        }
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
var fix=[];
// confirm button event listner
confirmBtn.addEventListener("click",()=>{
var tamp = 0;
for (let i = 0; i<hel.length;i++){
    tamp+=parseInt(hel[i].innerHTML);
}
temp+=tamp;
total.innerHTML = tamp;
var billCount = document.getElementsByClassName("countNo");
for (let i = 0;i<=billCount.length; i++){
    bal[i] = bal[i] - parseInt(billCount[i].innerText);
}
});
// clearing function
var stockCount = document.getElementsByClassName("stock");
var cancel = document.getElementById("cancelBtn");
cancel.addEventListener("click",()=>{
    for (let i = 0; i<countno.length;i++){
        countno[i].innerHTML = 0;
        hel[i].innerHTML = 0;
        fruitcount[i].innerHTML = 0;
}
for (let i = 0; i<stockCount.length;i++){
    stockCount[i].innerHTML=fix[i];
    bal[i]=fix[i];
}
    for(let i=1;i<10;i++){
    item[i].counting = 0;
}
    tdaySales.innerText = temp;
    total.innerText = 0;
});

// add Functions
let buttoncount = 6;  
function adding(fruit,newprice,table,billarea,costTable,costValue,fruitNos){
    let fruits = document.getElementById(fruit).value;
    let newprices =parseInt(document.getElementById(newprice).value);
    let mytable = document.getElementById(table);
    let addbill = document.getElementById(billarea);
    let costing = document.getElementById(costTable);
    let costvalue = document.getElementById(costValue).value;
    let fruitnos = document.getElementById(fruitNos).value;
    if(fruits === ""){
        alert("please enter new Juice!");
    }else{
        let p = document.createElement("p");
        p.setAttribute("id",`j${buttoncount}`);
        p.innerHTML=`${fruits}<span class="fruitCount" id="n${buttoncount}">0</span> <span class="fruitTotal" id="t${buttoncount}">0</span>`
        addbill.appendChild(p);
// costing table
        var cost = costing.insertRow(-1);
        var col0 = cost.insertCell(0)
        var col1 = cost.insertCell(1);
        var col2 = cost.insertCell(2);
        var col3 = cost.insertCell(3);
        var col4 = cost.insertCell(4);
        col0.setAttribute("id",`rem${buttoncount}`);
        col0.innerHTML = `<button onclick="deleteRow(this,this,'j${buttoncount}')">-</button>`;
        col1.setAttribute("id",`name${buttoncount}`);
        col1.innerHTML = fruits;
        col2.setAttribute("id",`co${buttoncount}`);
        col2.innerHTML = `<input type="text" value="0" class="inPrice" id="cost${buttoncount}">`;
        col3.className = "pnum";
        col3.innerHTML = `<input type="text" value="${fruitnos}" class="inPrice" id="no${buttoncount}">`;
        col4.setAttribute("id",`ctotal${buttoncount}`);
        col4.className = "ctotal";
        col4.innerHTML = `0`;

// before billing section
        
        var sample = mytable.insertRow(-1);
        sample.setAttribute("id",`r${buttoncount}`);
        var cell0 = sample.insertCell(0)
        var cell1 = sample.insertCell(1);
        var cell2 = sample.insertCell(2);
        var cell3 = sample.insertCell(3);
        var cell4 = sample.insertCell(4);
        cell0.setAttribute("id",`pr1`);
        cell0.setAttribute("class",`pr1`);
        cell0.innerHTML = fruits;
        cell1.setAttribute("id",`p${buttoncount}`);
        cell1.innerHTML =`<input type="text" class="inPrice" value="${newprices}" id="v${buttoncount}">`;
        cell2.setAttribute("id",`c${buttoncount}`);
        cell2.className = `countNo`;
        cell2.innerHTML = '0';
        cell3.setAttribute("id",`stock${buttoncount}`);
        cell3.className = "stock";
        cell3.innerHTML = '0';
        cell4.innerHTML = `<button onclick="item[${buttoncount}].noItems('btn${buttoncount}','c${buttoncount}','n${buttoncount}','t${buttoncount}','v${buttoncount}','stock${buttoncount}')" id="btn${buttoncount}">+</button>`;
        ++buttoncount;
        
    }
}
// Delete row
function deleteRow(c,r,bill) {
  var i = r.parentNode.parentNode.rowIndex;
  var v = c.parentNode.parentNode.rowIndex;
  document.getElementById("CostTable").deleteRow(v);
  document.getElementById("mytable").deleteRow(i);
  document.getElementById(bill).remove();
  buttoncount = 6;
}
//  printing function

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
    document.getElementById("ts").innerHTML = tdaySales.innerText;
    document.getElementById("profit").innerText = parseInt(document.getElementById("ts").innerText)-parseInt(document.getElementById("tp").innerText);
    if(parseInt(document.getElementById("profit").innerText)<0){
        document.getElementById("loss").innerHTML = "Loss";
    }
}


// submit button
var bal = [];

var todayPurchase = document.getElementsByClassName("ctotal");
var stock = document.getElementsByClassName("stock");
var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click",()=>{
    var tp = 0;
    for (let i = 0;i<stock.length;i++){
        var ctotal = document.getElementById(`cost${i+1}`).value * document.getElementById(`no${i+1}`).value;
        document.getElementById(`ctotal${i+1}`).innerHTML = ctotal;
        bal[i]= document.getElementById(`no${i+1}`).value;
        tp+=parseInt(todayPurchase[i].innerHTML);
    }
    for(let i = 0;i<stock.length;i++){
        stock[i].innerHTML = document.getElementById(`no${i+1}`).value; 
    }
    for(let i=0;i<stockCount.length;i++){
        fix[i] = bal[i];
    }
    document.getElementById("tp").innerHTML = tp;
    
});