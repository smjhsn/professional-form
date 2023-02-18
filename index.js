
var myArray = [];

var userDetailsString = window.localStorage.getItem("userDetails");
if (userDetailsString == undefined || userDetailsString == null || userDetailsString == "") {
    myArray = [];
}
else {
    myArray = JSON.parse(userDetailsString);
}

loadTable()
function loadTable() {
    myArray.forEach(e => {
        var tbody = document.getElementById("tbody");

        tbody.insertAdjacentHTML('beforeEnd',
        '<tr><td>'+e.userId+'</td><td>'+e.firstName+'</td><td>'+e.lastName+'</td><td>'+e.email+'</td>'+
        '<td>'+e.country+'</td><td>'+e.mobile+'</td><td>'+e.gender+'</td><td>'+e.address+'</td><td>'+e.college+'</td>'+
        '<td>'+e.degree+'</td><td>'+e.percentage+'</td><td>'+e.jobArea+'</td><td>'+e.position+'</td>'+
        '<td>'+e.skills+'</td><td><button class="editbtn" onclick="editData('+e.userId+')">Edit</button></td>'+
        '<td><button class="dltbtn" onclick="delData()">Del</button></td></tr>');
        });

}


//---------------------------------------------------------------------------------
//------------------------------------------select the input tag and store it to variable
//----------------------------------------------------------------------------------
var userId = document.getElementById("userId");
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

   

    var myObject = {
        userId : userId.value,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        mobile: mobile.value,
        gender: gender(),
        address: city.value+','+state.value+','+pincode.value,
        country: country.value,
        college : college.value,
        degree: degree.value,
        percentage: percentage.value,
        jobArea: jobArea.value,
        position: position.value,
        skills: skills.value,
    };
   
    //---------------------------------------------------------------------------------
    //--------------------------------------push object to array and store data in local variable
    //----------------------------------------------------------------------------------
    myArray.push(myObject);

    var cis = JSON.stringify(myArray);

    window.localStorage.setItem("userDetails", cis);



    userId.value = "";
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
}

function gender() {
    if (male.checked) {
        return male.value;
    } else if (female.checked) {
        return female.value;
    } else if (others.checked) {
        return others.value
    }
}

//---------------------------------------------------------------------------------
//------------------------------------------------assign operation to the edit buttons
//----------------------------------------------------------------------------------

function editData(e) {
    var editObj = myArray.find(a=>a.userId == e);

    document.getElementById("userId").value = editObj.userId;
    document.getElementById("firstName").value = editObj.firstName;
    document.getElementById("lastName").value = editObj.lastName;
    document.getElementById("email").value = editObj.email;
    document.getElementById("mobile").value = editObj.mobile;
    document.getElementById("male").value = editObj.male;
    document.getElementById("female").value = editObj.female;
    document.getElementById("others").value = editObj.others;
    
    document.getElementById("city").value = editObj.city;
    document.getElementById("state").value = editObj.state;
    document.getElementById("pincode").value = editObj.pincode;
    document.getElementById("country").value = editObj.country;
    document.getElementById("degree").value = editObj.degree;
    document.getElementById("percentage").value = editObj.percentage;
    document.getElementById("jobArea").value = editObj.jobArea;
    document.getElementById("position").value = editObj.position;
    document.getElementById("skills").value = editObj.skills;

}

//---------------------------------------------------------------------------------
//------------------------------------------------assign operation to the delete buttons
//----------------------------------------------------------------------------------

function delData() {

}





    // var retriveData = window.localStorage.getItem("userDetails");
    // var a = JSON.parse(retriveData);

    // a[0].name = "jameel";

    // var a1 = JSON.stringify(a)

    // window.localStorage.setItem("userDetails",a1)

     // var tbody = document.getElementById("tbody");

    // var tr = document.createElement("tr")

    //---------------------------------------------------------------------------------
    //----------------------------------------------------------create edit and delete buttons for table
    //----------------------------------------------------------------------------------

    // var editBtn = document.createElement("button")
    // editBtn.id = "editbtn";
    // editBtn.setAttribute('onclick', 'editData("'+userId+'")');
    // editBtn.innerText = "Edit";


    // var dltBtn = document.createElement("button")
    // dltBtn.id = "dltbtn";
    // dltBtn.setAttribute('onclick', "delData()")
    // dltBtn.innerText = "Del";

    //---------------------------------------------------------------------------------
    //----------------------------------------------------------create table data tag and append it to table row
    //----------------------------------------------------------------------------------

    // var td1 = document.createElement("td")
    // var td2 = document.createElement("td")
    // var td3 = document.createElement("td")
    // var td4 = document.createElement("td")
    // var td5 = document.createElement("td")
    // var td6 = document.createElement("td")
    // var td7 = document.createElement("td")
    // var td8 = document.createElement("td")
    // var td9 = document.createElement("td")
    // var td10 = document.createElement("td")
    // var td11 = document.createElement("td")
    // var td12 = document.createElement("td")
    // var td13 = document.createElement("td")
    // var td14 = document.createElement("td")

    // var d1 = tr.appendChild(td1);
    // var d2 = tr.appendChild(td2);
    // var d3 = tr.appendChild(td3);
    // var d4 = tr.appendChild(td4);
    // var d5 = tr.appendChild(td5);
    // var d6 = tr.appendChild(td6);
    // var d7 = tr.appendChild(td7);
    // var d8 = tr.appendChild(td8);
    // var d9 = tr.appendChild(td9);
    // var d10 = tr.appendChild(td10);
    // var d11 = tr.appendChild(td11);
    // var d12 = tr.appendChild(td12);
    // var d13 = tr.appendChild(td13);
    // var d14 = tr.appendChild(td14);
    // tbody.appendChild(tr);

    //---------------------------------------------------------------------------------
    //----------------------------------------------------------create object and store value
    //----------------------------------------------------------------------------------

    // td1.id = "userName";
    // td2.id = "email";
    // td3.id = "mobile";
    // td4.id = "gender";
    // td5.id = "address";
    // td6.id = "country";
    // td7.id = "college";
    // td8.id = "degree";
    // td9.id = "percentage";
    // td10.id = "jobArea";
    // td11.id = "position";
    // td11.id = "skills";

    //---------------------------------------------------------------------------------
    //----------------------------------------------------------create object and store value
    //----------------------------------------------------------------------------------

        //---------------------------------------------------------------------------------
    //-------------------------------------------assign values to table data and display as table
    //----------------------------------------------------------------------------------



    // d1.innerText = userName;
    // d2.innerText = email.value;
    // d3.innerText = mobile.value;

    

    // gender();

    // d5.innerText = address;
    // d6.innerText = country.value;
    // d7.innerText = college.value;
    // d8.innerText = degree.value;
    // d9.innerText = percentage.value;
    // d10.innerText = jobArea.value;
    // d11.innerText = position.value;
    // d12.innerText = skills.value;

     // var tr = document.createElement("tr")

        //---------------------------------------------------------------------------------
        //----------------------------------------------------------create table data tag and append it to table row
        //----------------------------------------------------------------------------------

        // var td1 = document.createElement("td")
        // var td2 = document.createElement("td")
        // var td3 = document.createElement("td")
        // var td4 = document.createElement("td")
        // var td5 = document.createElement("td")
        // var td6 = document.createElement("td")
        // var td7 = document.createElement("td")
        // var td8 = document.createElement("td")
        // var td9 = document.createElement("td")
        // var td10 = document.createElement("td")
        // var td11 = document.createElement("td")
        // var td12 = document.createElement("td")
        // var td13 = document.createElement("td")
        // var td14 = document.createElement("td")

        // var d1 = tr.appendChild(td1);
        // var d2 = tr.appendChild(td2);
        // var d3 = tr.appendChild(td3);
        // var d4 = tr.appendChild(td4);
        // var d5 = tr.appendChild(td5);
        // var d6 = tr.appendChild(td6);
        // var d7 = tr.appendChild(td7);
        // var d8 = tr.appendChild(td8);
        // var d9 = tr.appendChild(td9);
        // var d10 = tr.appendChild(td10);
        // var d11 = tr.appendChild(td11);
        // var d12 = tr.appendChild(td12);
        // var d13 = tr.appendChild(td13);
        // var d14 = tr.appendChild(td14);
        // tbody.appendChild(tr);

        // //---------------------------------------------------------------------------------
        // //----------------------------------------------------------create object and store value
        // //----------------------------------------------------------------------------------

        // td1.id = "userName";
        // td2.id = "email";
        // td3.id = "mobile";
        // td4.id = "gender";
        // td5.id = "address";
        // td6.id = "country";
        // td7.id = "college";
        // td8.id = "degree";
        // td9.id = "percentage";
        // td10.id = "jobArea";
        // td11.id = "position";
        // td11.id = "skills";


        // //---------------------------------------------------------------------------------
        // //-------------------------------------------assign values to table data and display as table
        // //----------------------------------------------------------------------------------


        // d1.innerText = e.name;
        // d2.innerText = e.email;
        // d3.innerText = e.mobile;
        // d5.innerText = e.addres;
        // d6.innerText = "";
        // d7.innerText = "";
        // d8.innerText = e.degree;
        // d9.innerText = e.percentage;
        // d10.innerText = e.jobArea;
        // d11.innerText = e.position;
        // d12.innerText = e.skills;


        // var editBtn = document.createElement("button")
        // editBtn.id = "editbtn";
        // editBtn.setAttribute('onclick', 'editData("'+e.name+'")');
        // editBtn.innerText = "Edit";

   

        // var dltBtn = document.createElement("button")
        // dltBtn.id = "dltbtn";
        // dltBtn.setAttribute('onclick', "delData()")
        // dltBtn.innerText = "Del";

        // d13.appendChild(editBtn);

        // d14.appendChild(dltBtn);
   

