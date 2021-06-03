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

    var filteredLst = []

    function filtered(element) {
        for (var i = 0; i < allPlateIn.length; i++) {
            if (allPlateIn[i].startsWith(element)) {
                filteredLst.push(allPlateIn[i])
            }
        }
        return filteredLst
    }


    function getStorePlates() {
        return allPlateIn
    }

    return {
        storePlates,
        getStorePlates,
        filtered,
    }

}
