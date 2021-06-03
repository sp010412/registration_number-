function registrationNumbers(other) {

    var allPlateIn = other || [];
    //var valid = /[A-Z]{2} [0-9]{5}/i
    var valid = /^((CA|PA|WC)\s\d{3}\-\d{3})$|^((CA|PA|WC)\s\d{3}\s\d{3})$|^((CA|PA|WC)\s\d{4})$/i;

    function storePlates(plateIn) {
        if (plateIn.match(valid)) {
            if (!allPlateIn.includes(plateIn)) {
                allPlateIn.push(plateIn.toUpperCase())
                return true
            } else {
                return false
            }
        }
    }

    function getStorePlates() {
        return allPlateIn
    }

    let filteredList1 = allPlateIn.filter(function (currentElement) {
        return currentElement.startsWith('CA');
    });
    let filteredList2 = allPlateIn.filter(function (currentElement) {
        return currentElement.startsWith('PA');
    });
    let filteredList3 = allPlateIn.filter(function (currentElement) {
        return currentElement.startsWith('WC');
    });

    function getfilteredList1() {
        return filteredList1
    }
    function getfilteredList2() {
        return filteredList2
    }
    function getfilteredList3() {
        return filteredList3
    }

    function getStorePlates() {
        return allPlateIn
    }

    return {
        storePlates,
        getStorePlates,
        getfilteredList1,
        getfilteredList2,
        getfilteredList3,
    }

}
