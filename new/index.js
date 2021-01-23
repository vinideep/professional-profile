const heading = document.createElement("h1");
heading.textContent = "Kovan interns";
document.body.appendChild(heading);

const interns = ["Mahadev","Vinith","Rahul","Sandhya"];

const modifiedInternsData = interns.map((intern, index) =>{
    const tempObj = {
        name:intern,
        id:index+1
    };
    return tempObj;
});

const findName = modifiedInternsData.filter((internName)=>{
    return internName.name ===  "Vinith";
});

console.log(modifiedInternsData);
console.log(findName[0].name);

const welcomeText = [];
const internPeople = interns.forEach((intern,index,array)=>{

    welcomeText.push({text:"hello "+intern+" welocme to Kovan Interns"});
    return welcomeText
    
});
console.log(welcomeText);

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
