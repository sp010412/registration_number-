var textBox = document.querySelector(".plates")
var addBtn = document.querySelector(".add")
var showBtn = document.querySelector(".show")
var resetBtn = document.querySelector(".reset")
var showAllBtn = document.querySelector(".showAll")
var errorElem = document.getElementById('error')
/*  
*CA 123 456
*CA 123-456
*CA 12345
*/

var list;

if (localStorage['plates']) {
    list = JSON.parse(localStorage.getItem('plates'))
} else {
    list = []
}

var registrationInsta = registrationNumbers(list);

//var regEx = /^((CA|PA|WC)\s\d{3}\-\d{3})$|^((CA|PA|WC)\s\d{3}\d{3})$|^((CA|PA|WC)\s\d{3}\s\d{3})$/;
function displayed(plateIn) {
    while (document.getElementById("displayedPlate").hasChildNodes()) {
        document.getElementById("displayedPlate").removeChild(document.getElementById("displayedPlate").firstChild)
    }
    for (var i = 0; i < plateIn.length; i++) {
        var holder = document.createElement("li");
        var addedOn = document.createTextNode(plateIn[i]);
        holder.appendChild(addedOn);
        document.getElementById("displayedPlate").appendChild(holder);
    }
}

function added() {
    if (registrationInsta.storePlates(textBox.value)) {
        let key = registrationInsta.getStorePlates();
        localStorage.setItem('plates', JSON.stringify(key));
        displayed(key)
    } else {
        errorElem.innerHTML = "Regisration plate has been added!"
    }
}
addBtn.addEventListener('click', added);

var valid = /[A-Z]{2} [0-9]{5}/
function conditions() {
    let key = registrationInsta.getStorePlates();
    if (textBox.value == "") {
        errorElem.innerHTML = "Enter a registration plate!";

        setTimeout(function () {
            errorElem.innerHTML = ""
        }, 3000);
        return;
    }

    else if (valid.test(textBox.value) != true) {
        errorElem.innerHTML = "Input is not a registration plate: eg: CA 1234 OR PA 99965"
        setTimeout(function () {
            errorElem.innerHTML = ""
        }, 3000);
        return;
    }

    else if (key === textBox.value) {
        errorElem.innerHTML = "Regisration plate has been added!";

        setTimeout(function () {
            errorElem.innerHTML = ""
        }, 3000);
        return;
    }
    // console.log(list)
}
addBtn.addEventListener('click', conditions);

function remove() {
    if (addBtn) {
        textBox.value = ""
    }
}
addBtn.addEventListener('click', remove);


var cp = []
var pa = []
var wc = []

function showed() {
    let filteredList1 = list.filter(function (currentElement) {
        return currentElement.startsWith('ca');
    });
    let filteredList2 = list.filter(function (currentElement) {
        return currentElement.startsWith('pa');
    });
    let filteredList3 = list.filter(function (currentElement) {
        return currentElement.startsWith('wc');
    });

    var towns = document.querySelector(".slct1");
    if (towns.value === "CA") {
        cp.push(filteredList1)
        displayed(cp)
    }
    else if (towns.value === "PA") {
        pa.push(filteredList2)
        displayed(pa)
    }
    else if (towns.value === "WC") {
        wc.push(filteredList3)
        displayed(wc)
    }
}
showBtn.addEventListener('click', showed);

function clear() {
    localStorage.clear()
    location.reload()
}
resetBtn.addEventListener('click', clear);


function allPlatesList() {
    registrationInsta.getStorePlates()
    displayed(list)
}
showAllBtn.addEventListener('click', allPlatesList);