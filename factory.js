function registrationNumbers(other) {

    var allPlateIn = other || [];
   // var valid = /[A-Z]{2} [0-9]{5}/
    //var regEx = /^((CA|PA|WC)\s\d{3}\-\d{3})$|^((CA|PA|WC)\s\d{3}\d{3})$|^((CA|PA|WC)\s\d{3}\s\d{3})$/;
    var valid = /^((CA|PA|WC)\s\d{3}\-\d{3})$|^((CA|PA|WC)\s\d{3}\s\d{3})$|^((CA|PA|WC)\s\d{4})$/;

    function storePlates(plateIn) {


        if (plateIn.match(valid)) {

            if (!allPlateIn.includes(plateIn)) {
                allPlateIn.push(plateIn)
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
