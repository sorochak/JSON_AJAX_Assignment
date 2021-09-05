// Use switch to call functions that display Superheroes table based on user selection
function runJSON() {
    var x = document.getElementById("mySelect").value;
    switch(x) {
        case "ShowAll":
            showAll();
            break;
        case "Marvel":
            showMarvel();
            break;
        case "DC":
            showDC();
            break;
        default:
            alert("Not a valid choice.");
    }
}

// function displays all Superheroes in HTML table when showAll option selected
function showAll() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var table="<tr><th>Superhero</th><th>Publisher</th><th>Alter Ego</th><th>First Appearance</th><th>Characters</th></tr>";
            for (x in myObj) {
                table += "<tr><td>" +
                    myObj[x].superhero +
                    "</td><td>" +
                    myObj[x].publisher +
                    "</td><td>" +
                    myObj[x].alter_ego +
                    "</td><td>" +
                    myObj[x].first_appearance +
                    "</td><td>" +
                    myObj[x].characters +
                    "</td></tr>";
            }
        }
        //display the result in html
        document.getElementById('demo').innerHTML = table;
    };
    xhttp.open("GET", "lab9_superheroes.json", true);
    xhttp.send();
} // end showAll()

// function displays only Marvel Superheroes in HTML table when Marvel option selected
function showMarvel() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var table="<tr><th>Superhero</th><th>Publisher</th><th>Alter Ego</th><th>First Appearance</th><th>Characters</th></tr>";
            for (x in myObj) {
                if (myObj[x].publisher == "Marvel Comics") {
                    table += "<tr><td>" +
                        myObj[x].superhero +
                        "</td><td>" +
                        myObj[x].publisher +
                        "</td><td>" +
                        myObj[x].alter_ego +
                        "</td><td>" +
                        myObj[x].first_appearance +
                        "</td><td>" +
                        myObj[x].characters +
                        "</td></tr>";
                }
            }
        }
        //display the result in html
        document.getElementById('demo').innerHTML = table;
    };
    xhttp.open("GET", "lab9_superheroes.json", true);
    xhttp.send();
} // end showMarvel()


// function displays only DC Superheroes in HTML table when DC option selected
function showDC() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var table="<tr><th>Superhero</th><th>Publisher</th><th>Alter Ego</th><th>First Appearance</th><th>Characters</th></tr>";
            for (x in myObj) {
                if (myObj[x].publisher == "DC Comics") {
                    table += "<tr><td>" +
                        myObj[x].superhero +
                        "</td><td>" +
                        myObj[x].publisher +
                        "</td><td>" +
                        myObj[x].alter_ego +
                        "</td><td>" +
                        myObj[x].first_appearance +
                        "</td><td>" +
                        myObj[x].characters +
                        "</td></tr>";
                }
            }
        }
        //display the result in html
        document.getElementById('demo').innerHTML = table;
    };
    xhttp.open("GET", "lab9_superheroes.json", true);
    xhttp.send();
} // end showDC()
