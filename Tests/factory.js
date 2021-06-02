function registrationNumbers(other) {

    var allPlateIn = other || [];
    var valid = /[A-Z]{2} [0-9]{5}/i

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

    return {
        storePlates,
        getStorePlates,
    }

}
