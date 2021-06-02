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

    return {
        storePlates,
        getStorePlates,
    }

}
