
var myArray = [];

// var userDetailsString = window.localStoarge.getItem("userDetails");
// if(userDetailsString==undefined || userDetailsString==null || userDetailsString==""){
//     myArray=[];
// }
// else{
//     myArray = JSON.parse(userDetailsString);
// }

//---------------------------------------------------------------------------------
//------------------------------------------select the input tag and store it to variable
//----------------------------------------------------------------------------------

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");


var email = document.getElementById("email");
var mobile = document.getElementById("mobile");

var gender;
var male = document.getElementById("male");
var female = document.getElementById("female");
var others = document.getElementById("others");


var city = document.getElementById("city");
var state = document.getElementById("state");
var pincode = document.getElementById("pincode");



var country = document.getElementById("country");

var collge = document.getElementById("college");
var degree = document.getElementById("degree");
var percentage = document.getElementById("percentage");

var jobArea = document.getElementById("area-select");

var position = document.getElementById("position");
var skills = document.getElementById("skills");

//---------------------------------------------------------------------------------
//------------------------------------------Enable button if checkbox is selected
//----------------------------------------------------------------------------------

function accepted(clicked) {
    if (clicked.checked) {
        document.getElementById("submitBtn").disabled = false;
    } else {
        document.getElementById("submitBtn").disabled = true;
    }
}

//---------------------------------------------------------------------------------
//----------------------------------------------------------onclick submit function starts
//----------------------------------------------------------------------------------

function userFormDetails() {
    var userName = firstName.value + " " + lastName.value;
    var address = city.value + ", " + state.value + ", " + pincode.value;

    var tbody = document.getElementById("tbody");

    var tr = document.createElement("tr")

//---------------------------------------------------------------------------------
//----------------------------------------------------------create table data tag and append it to table row
//----------------------------------------------------------------------------------

    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    var td4 = document.createElement("td")
    var td5 = document.createElement("td")
    var td6 = document.createElement("td")
    var td7 = document.createElement("td")
    var td8 = document.createElement("td")
    var td9 = document.createElement("td")
    var td10 = document.createElement("td")
    var td11 = document.createElement("td")
    var td12 = document.createElement("td")
    var td13 = document.createElement("td")
    var td14 = document.createElement("td")

    var d1 = tr.appendChild(td1);
    var d2 = tr.appendChild(td2);
    var d3 = tr.appendChild(td3);
    var d4 = tr.appendChild(td4);
    var d5 = tr.appendChild(td5);
    var d6 = tr.appendChild(td6);
    var d7 = tr.appendChild(td7);
    var d8 = tr.appendChild(td8);
    var d9 = tr.appendChild(td9);
    var d10 = tr.appendChild(td10);
    var d11 = tr.appendChild(td11);
    var d12 = tr.appendChild(td12);
    var d13 = tr.appendChild(td13);
    var d14 = tr.appendChild(td14);
    tbody.appendChild(tr);

    //---------------------------------------------------------------------------------
//----------------------------------------------------------create edit and delete buttons
//----------------------------------------------------------------------------------

    var editBtn = document.createElement("button")
    editBtn.id = "editbtn";

    editBtn.innerText = "Edit";

    d13.appendChild(editBtn);

    var dltBtn = document.createElement("button")
    dltBtn.id = "dltbtn";

    dltBtn.innerText = "Del";

    d14.appendChild(dltBtn);
   

//---------------------------------------------------------------------------------
//----------------------------------------------------------create object and store value
//----------------------------------------------------------------------------------

    var myObject = {
        name: userName,
        email: email.value,
        mobile: mobile.value,
        gender: gender(),
        addres: address,
        country: country.value,
        degree: degree.value,
        percentage: percentage.value,
        jobArea: jobArea.value,
        position: position.value,
        skills: skills.value
    };
//---------------------------------------------------------------------------------
//--------------------------------------push object to array and store data in local variable
//----------------------------------------------------------------------------------
    myArray.push(myObject);

    var cis = JSON.stringify(myArray);

    window.localStorage.setItem("userDetails", cis);

//---------------------------------------------------------------------------------
//-------------------------------------------assign values to table data and display as table
//----------------------------------------------------------------------------------

    d1.innerText = userName;
    d2.innerText = email.value;
    d3.innerText = mobile.value;

    function gender() {
        if (male.checked) {
            d4.innerText = male.value;
        } else if (female.checked) {
            d4.innerText = female.value;
        } else if (others.checked) {
            d4.innerText = others.value
        }
    }

    gender();

    d5.innerText = address;
    d6.innerText = country.value;
    d7.innerText = college.value;
    d8.innerText = degree.value;
    d9.innerText = percentage.value;
    d10.innerText = jobArea.value;
    d11.innerText = position.value;
    d12.innerText = skills.value;

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    mobile.value = "";
    male.value = "";
    female.value = "";
    others.value = "";
    city.value = "";
    state.value = "";
    pincode.value = "";
    country.value = "";
    college.value = "";
    degree.value = "";
    percentage.value = "";
    jobArea.value = "";
    position.value = "";
    skills.value = "";

//---------------------------------------------------------------------------------
//------------------------------------------------assign operation to the edit buttons
//----------------------------------------------------------------------------------

editBtn.onclick = editData()

function editData(){
    
} 

//---------------------------------------------------------------------------------
//------------------------------------------------assign operation to the delete buttons
//----------------------------------------------------------------------------------

dltBtn.onclick = delData();

function delData(){

}


}





    // var retriveData = window.localStorage.getItem("userDetails");
    // var a = JSON.parse(retriveData);

    // a[0].name = "jameel";

    // var a1 = JSON.stringify(a)

    // window.localStorage.setItem("userDetails",a1)

