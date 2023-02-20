var myArray = []; //declaring array
var getUserDetailsString = window.localStorage.getItem("userDetails");// getting the local storage details
window.onload = function(){
    if(getUserDetailsString == null || getUserDetailsString == undefined || getUserDetailsString == ""){
        myArray = []; //setting array empty if no user detailos found in local storage
    }else{
        myArray = JSON.parse(getUserDetailsString) // setting array to countinue with existing local stoarge datas
    }
    loadTable() // calling the loadTable function to load the table 
}
//function to load the table
function loadTable(){
    var tbody = document.getElementById("tbody")
    tbody.innerHTML = "";
    myArray.forEach(object =>{
        tbody.insertAdjacentHTML("beforeend",
        '<tr><td>'+object.userId+'</td><td>'+object.name+'</td><td>'+object.mobile+'</td><td>'+object.email+'</td><td>'+object.country+'</td><td>'+object.gender+'</td><td>'+object.address+'</td><td>'+object.pincode+'</td><td>'+object.college+'</td><td>'+object.degree+'</td><td>'+object.score+'</td><td>'+object.position+'</td><td>'+object.skills+'</td><td><button class="edit" onclick="edit('+object.userId+')">Edit</button></td><td><button class="delete" onclick="del('+object.userId+')">Del</button></td></tr>')
    })
}
//declaring the variables for selected fields
var userId = document.getElementById("userId");
var userName = document.getElementById("userName");
var mobile = document.getElementById("mobile");
var email = document.getElementById("email");
var country = document.getElementById("country");
var gender = document.getElementById("gender");
var address = document.getElementById("address");
var pincode = document.getElementById("pincode");
var college = document.getElementById("college");
var degree = document.getElementById("degree");
var score = document.getElementById("score");
var position;
var development = document.getElementById("development");
var testing = document.getElementById("testing");
var skills = document.getElementById("skills");
var checkbox = document.getElementById("checkbox");
//--------------------------------------------------------------------------------
//create function for submit button to load register details in stoarge and table
//--------------------------------------------------------------------------------
function registerdetails(){
    var checkdeatils = myArray.find(a=>a.userId == userId.value);
    if(checkdeatils == null || checkdeatils == undefined){
        //creatig the object and store the values
    var myObject = {
        userId : userId.value,
        name : userName.value,
        mobile : mobile.value,
        email : email.value,
        country : country.value,
        gender : gender.value,
        address : address.value,
        pincode : pincode.value,
        college : college.value,
        degree : degree.value,
        score : score.value,
        position : position(), //position function assigned
        skills : skills.value
    }
    myArray.push(myObject); //push the obj into array
    }else{
        myArray.forEach(obj =>{
            if(obj.userId == userId.value){
                obj.userName = userName.value;
                obj.mobile = mobile.value;
                obj.email = email.value;
                obj.country = country.value;
                obj.gender = gender.value;
                obj.address = address.value;
                obj.pincode = pincode.value;
                obj.college = college.value;
                obj.degree = degree.value;
                obj.score = score.value;
                obj.position = position();
                obj.skills = skills.value;
            }
        });
    }
    
//store the details in loaclstorage
var arrayToString = JSON.stringify(myArray);
window.localStorage.setItem("userDetails",arrayToString);
//get the localstorage details and assing that to myArray and load the table
var getString = window.localStorage.getItem("userDetails");
var stringToArray = JSON.parse(getString);
myArray = stringToArray;
loadTable() // calling the loadTable function to load the table
//remove the values from input field after storedd in the table
    userId.value = "";
    userName.value = "";
    mobile.value = "";
    email.value = "";
    country.value = "";
    gender.value = "";
    address.value = "";
    pincode.value = "";
    college.value = "";
    degree.value = "";
    score.value = "";
    position.value ="";
    development.checked = "";
    testing.checked = "";
    skills.value = "";
    checkbox.checked = "";
}
//-------------------------------------------------------------
//To submit the selected radio value 
//-------------------------------------------------------------
function position(){
    if(development.checked){
        return development.value;
    }else if(testing.checked){
        return testing.value;
    }
}
//---------------------------------------------------
//checkbox to enable button
//-------------------------------------------------
function submit(click){
    if(click.checked){
        document.getElementById("submit-btn").disabled = false; 
    }else{
        document.getElementById("submit-btn").disabled = true; 
    }
}
//-----------------------------------------------------
//function to edit the table
//---------------------------------------------------
function edit(datas){
    var editObject = myArray.find(a=>a.userId == datas)
    document.getElementById("userId").value = editObject.userId;
    document.getElementById("userName").value  = editObject.name ;
    document.getElementById("mobile").value = editObject.mobile ; 
    document.getElementById("email").value = editObject.email ;
    document.getElementById("country").value = editObject.country; 
    document.getElementById("gender").value = editObject.gender;
    document.getElementById("address").value = editObject.address;
    document.getElementById("pincode").value = editObject.pincode;
    document.getElementById("college").value = editObject.college;
    document.getElementById("degree").value = editObject.degree;
    document.getElementById("score").value = editObject.score;
    if(editObject.position == "Development"){
        document.getElementById("development").checked = true;
    }else if(editObject.position == "Testing"){
        document.getElementById("testing").checked = true;
    }
    document.getElementById("skills").value = editObject.skills;
}
//-----------------------------------------------------
//function to delete the table
//---------------------------------------------------
function del(deleteData){
// to delete the row instantly without refresh
    var td = event.target.parentNode; 
      var tr = td.parentNode; // the row to be removed
      tr.parentNode.removeChild(tr);
//to delete the local storage data 
    var getLocalstorage = window.localStorage.getItem("userDetails");
    var inToArray = JSON.parse(getLocalstorage);
    var findvalue = inToArray.find(a=>a.userId == deleteData);
    inToArray.splice(findvalue,1);
    var inToString = JSON.stringify(inToArray);
    window.localStorage.setItem("userDetails",inToString);
}