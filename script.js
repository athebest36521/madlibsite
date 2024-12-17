alert('Please fill the form to continue')

function displayNameR() {

    //get the inputted name

    var nm1 = document.getElementById("name1").value;

    var e1 = document.getElementById("enemy1").value;

    var adj = document.getElementById("adj").value;

    var pronoun = document.getElementById("pronoun").value;

    var verb = document.getElementById("verb").value;

    

    /*document.getElementById("resultName").innerHTML += "";

     document.getElementById("story1").innerHTML = "";

     document.getElementById("adj").innerHTML = "";*/

if(nm1!=""&&e1!=""&&verb!=""&&adj!=""&&pronoun!=""&&e1!="")

    document.getElementById("resultName").innerHTML =

    `${nm1} is ${verb} to the park. On the way to the ${adj} park, ${pronoun} has to defeat a ${e1}. `;

  }
