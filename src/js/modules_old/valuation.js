//start valuation

const startValuation = () => {
    const personalStrengthList = JSON.parse(localStorage.getItem("personalStrengthList"));

    localStorage.setItem('currentValuationIndex', 0);
    localStorage.setItem('valuationCount', personalStrengthList.length);
}

//get personal strength string 

const getPersonalStrengthString = (personalStrength) => {
    if (personalStrength.ending == "") {
        return `Ik voel me goed of sterk als ik ${personalStrength.action}, tijdens ${personalStrength.moment}, en ik dit denk ${personalStrength.thougt}, me ${personalStrength.feeling} voel.`
    } else {
        return `Ik voel me goed of sterk als ik ${personalStrength.action}, tijdens ${personalStrength.moment}, en ik dit denk ${personalStrength.thougt}, me ${personalStrength.feeling} voel, met als resultaat dat: ${personalStrength.ending}.`
    }
}

//get current valuation item

const getCurrentValuation = () => {
    const personalStrengthList = JSON.parse(localStorage.getItem("personalStrengthList"));
    const currentValuationIndex = parseInt(localStorage.getItem('currentValuationIndex'));
    const currentPersonalStrength = personalStrengthList[currentValuationIndex];

    const personalStrengthString = getPersonalStrengthString(currentPersonalStrength);

    $("#personal-strength-description").text(personalStrengthString);
    $("#grade").val(currentPersonalStrength.grade);
    $("#remarks").val(currentPersonalStrength.remarks);

    if (currentPersonalStrength.usedRegularly) {
        $("#used_yes").prop('checked', true);
    } else {
        $("#used_no").prop('checked', true);
    }

    if (currentPersonalStrength.wantedToBeUsed) {
        $("#wanted_yes").prop('checked', true);
    } else {
        $("#wanted_no").prop('checked', true);
    }

    $("#valuation-index").text(currentValuationIndex + 1);
    $("#valuation-count").text(localStorage.getItem("valuationCount"));
}

const saveValuation = () => {
    const personalStrengthList = JSON.parse(localStorage.getItem('personalStrengthList'));
    const currentValuationIndex = parseInt(localStorage.getItem('currentValuationIndex'));
    const currentPersonalStrength = personalStrengthList[currentValuationIndex];

    const used = $("input[name='used']:checked").val();
    const wantedToBeUsed = $("input[name='wantedToBeUsed']:checked").val();
    const grade = $("#grade").val();
    const remarks = $("#remarks").val();

    currentPersonalStrength.usedRegularly = used == "yes" ? true : false;
    currentPersonalStrength.wantedToBeUsed = wantedToBeUsed == "yes" ? true : false;
    currentPersonalStrength.grade = grade;
    currentPersonalStrength.remarks = remarks;

    personalStrengthList[currentValuationIndex] = currentPersonalStrength;
    localStorage.setItem('personalStrengthList', JSON.stringify(personalStrengthList));
}

//get previous valuation

const previousValuation = () => {
    const currentValuationIndex = parseInt(localStorage.getItem('currentValuationIndex'));
    saveValuation();

    //if not first item 
    if (currentValuationIndex !== 0) {
        let previousValuationIndex = currentValuationIndex - 1;
        localStorage.setItem('currentValuationIndex', previousValuationIndex);
        getCurrentValuation();

        hideFormError();
        scrollToFormTop();

        return false;
    } else return true;
}

//get next valuation

const nextValuation = () => {
    saveValuation();
    const currentValuationIndex = parseInt(localStorage.getItem('currentValuationIndex'));
    const valuationCount = parseInt(localStorage.getItem('valuationCount'));

    //not last item
    if (currentValuationIndex < valuationCount) {
        let nextValuationIndex = currentValuationIndex + 1;
        localStorage.setItem('currentValuationIndex', nextValuationIndex);
        getCurrentValuation();

        hideFormError();
        scrollToFormTop();
        return false;
    } else return true;
}

//get first valuation

const firsValuation = () => {
    localStorage.setItem('currentValuationIndex', 0);
}
