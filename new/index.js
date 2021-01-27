// const heading = document.createElement("h1");
// heading.textContent = "Kovan interns";
// document.body.appendChild(heading);

const interns = ["Mahadev","Vinith","Rahul","Sandhya"];
// map Method
const assignIdForNames = interns.map((intern,index)=>{
    const internId = {
        [intern] :{id:index+1,
            rollNo: index+1,
            fees:"paid"
        }
    }
    return internId;
});
console.log(assignIdForNames);

const modifiedInternsData = interns.map((intern, index) =>{
    const tempObj = {
        name:intern,
        id:index+1
    };
    return tempObj;
});
// filter method
const findName = modifiedInternsData.filter((internName)=>{
    return internName.name ===  "Vinith";
});

console.log(modifiedInternsData);

const welcomeText = [];
numCallBack = 0;
// for each method
const internPeople = interns.forEach((intern,index,array)=>{

    welcomeText.push({text:"hello "+intern+" welocme to Kovan Interns"});
    numCallBack++;
    return welcomeText
    
});
console.log(welcomeText);
console.log(numCallBack);

const copyOfInterns = [];
interns.forEach((intern)=>{
    copyOfInterns.push(intern);
})
console.log(copyOfInterns);
const car = interns.unshift();
console.log(car)

let sortingArray = interns.sort();
console.log(sortingArray);

const localData = modifiedInternsData.some((array)=>array.name === "Vinith");
if (localData == true){
    // const element = document.createElement("h1");
    // element.textContent = localData
    // document.body.appendChild(element);

}
console.log(localData);
const personHeight = [{name:"vinith", height:5.5},{name:"mahadev", height:5.5},{name:"ragul", height:6},{name:"sandhya", height:5}];

const assignSizeOfTshirts = personHeight.map((person,index)=>{
    if (person.height < 5.5){
        person.tshirtSize = "Small";
    }else if(person.height === 5.5){
        person.tshirtSize = "Medium";
    }else person.tshirtSize = "Large";
});
console.log(personHeight);
const totalSizeCalculation = personHeight.filter((size)=>{
    let samllSize = size.tshirtSize === "Small";
    let mediumSize = size.tshirtSize === "Medium";
    let largeSize = size.tshirtSize === "Large";
    const tshirtSize = [samllSize.length,mediumSize.length,largeSize.length];
    return tshirtSize;
    
})
console.log(totalSizeCalculation);
let y = 0;
for (x in interns){
    console.log(interns[x]);
    y += x.length;
    
}
console.log(y)


const studentInfo = [];
function savingStudentInfo(){
if (document.getElementById("studentName").value === ""||document.getElementById("studentAge").value === ""||document.getElementById("studentSslcMark").value === ""||document.getElementById("studentHscMark").value === ""){
    return false;
}
studentInfo.push({
    name:document.getElementById("studentName").value,
    age:document.getElementById("studentAge").value,
    sslc:document.getElementById("studentSslcMark").value,
    hsc:document.getElementById("studentHscMark").value
})
document.getElementById("studentName").value = null;
document.getElementById("studentAge").value = null;
document.getElementById("studentSslcMark").value = null;
document.getElementById("studentHscMark").value = null;
console.log(studentInfo);
};

document.getElementById("submitButton").addEventListener("click",savingStudentInfo);


function findStudentDetail(){
    const studentNameInput = document.getElementById("studentDetail").value;
    if (studentNameInput === "") return false;
    studentInfo.find((info)=>{
        if (info.name === studentNameInput){
            const table = document.getElementById("informationTable").insertRow(-1);
            const cell0 = table.insertCell(0);
            const cell1 = table.insertCell(1);
            const cell2 = table.insertCell(2);
            const cell3 = table.insertCell(3);
            cell0.innerText = info.name;
            cell1.innerText = info.age;
            cell2.innerText = info.sslc;
            cell3.innerText = info.hsc;
        }
        document.getElementById("studentDetail").value = null;
    })
}
document.getElementById("findButton").addEventListener("click",findStudentDetail);



// reduce method
const data = [0, 1, 2, 3, 4];

const reduceMethod = (accumulator,currentValue)=> accumulator + currentValue;
console.log(data.reduce(reduceMethod));