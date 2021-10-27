//create personal strength list

const createPersonalStrengthList = () => {
    let experiences = JSON.parse(localStorage.getItem('experienceList'));
    let personalStrengthList = [];

    experiences.forEach(xp => {
        personalStrengthList.push({
            id: makeid(6),
            experienceID: xp.id,
            action: xp.action,
            moment: xp.description,
            thougt: xp.thougt,
            feeling: xp.feeling,
            ending: xp.ending,
            usedRegularly: false,
            grade: 1,
            wantedToBeUsed: false,
            remarks: ""
        });
    });

    localStorage.setItem('personalStrengthList', JSON.stringify(personalStrengthList));
}

//start personal strength creation

const startPersonalStrengthCreation = () => {
    let personalStrengthList = JSON.parse(localStorage.getItem("personalStrengthList"));

    if (!personalStrengthList) {
        createPersonalStrengthList();
        personalStrengthList = JSON.parse(localStorage.getItem("personalStrengthList"));
    }

    localStorage.setItem('currentPersonalStrengthIndex', 0);
    localStorage.setItem('personalStrengthCount', personalStrengthList.length);
}

//ending

const showEnding = () => {
    $("#label_feeling").text("voel,");
    $("#personal-strength-ending_label").removeClass('hidden');
    $("#personal-strength-ending").removeClass('hidden');
}

const hideEnding = () => {
    $("#label_feeling").text("voel.");
    $("#personal-strength-ending_label").addClass('hidden');
    $("#personal-strength-ending").addClass('hidden');
}

//get current personal strength

const getCurrentPersonalStrength = () => {
    let personalStrengthList = JSON.parse(localStorage.getItem("personalStrengthList"));
    let currentPersonalStrengthIndex = localStorage.getItem('currentPersonalStrengthIndex');
    let currentPersonalStrength = personalStrengthList[currentPersonalStrengthIndex];

    $("#personal-strength-action").val(currentPersonalStrength.action);
    $("#personal-strength-moment").val(currentPersonalStrength.moment);
    $("#personal-strength-thought").val(currentPersonalStrength.thougt);
    $("#personal-strength-feeling").val(currentPersonalStrength.feeling);

    if (currentPersonalStrength.ending !== "") {
        $("#personal-strength-ending").val(currentPersonalStrength.ending);
        showEnding();
    } else {
        hideEnding();
    }

    $("#personal-strength-index").text(parseInt(currentPersonalStrengthIndex) + 1);
    $("#personal-strength-count").text(personalStrengthList.length);
}

//save personal strength

const savePersonalStrength = () => {
    const personalStrengthList = JSON.parse(localStorage.getItem("personalStrengthList"));
    const currentPersonalStrengthIndex = parseInt(localStorage.getItem("currentPersonalStrengthIndex"));
    const currentPersonalStrength = personalStrengthList[currentPersonalStrengthIndex];

    const action = $("#personal-strength-action").val();
    const moment = $("#personal-strength-moment").val();
    const thougt =  $("#personal-strength-thought").val();
    const feeling = $("#personal-strength-feeling").val();
    const ending = $("#personal-strength-ending").val();

    if (action, moment, thougt, feeling) {
        currentPersonalStrength.moment = moment;
        currentPersonalStrength.action = action;
        currentPersonalStrength.thougt = thougt;
        currentPersonalStrength.feeling = feeling;
        currentPersonalStrength.ending = ending;
        
        personalStrengthList[currentPersonalStrengthIndex] = currentPersonalStrength;
        localStorage.setItem('personalStrengthList', JSON.stringify(personalStrengthList));
        return true;
    } else return false;
}

//get previous personal strength

const previousPersonalStrength = () => {
    const currentPersonalStrengthIndex = parseInt(localStorage.getItem("currentPersonalStrengthIndex"));
    savePersonalStrength();

    //if not first item
    if (currentPersonalStrengthIndex !== 0) {
        let previousPersonalStrengthIndex = currentPersonalStrengthIndex - 1;
        localStorage.setItem('currentPersonalStrengthIndex', previousPersonalStrengthIndex);
        getCurrentPersonalStrength();

        hideFormError();
        scrollToFormTop();

        return false;
    } else return true;
}

//get next experience

const nextPersonalStrength = () => {
    //check and save
    if (savePersonalStrength()) {
        let currentPersonalStrengthIndex = parseInt(localStorage.getItem("currentPersonalStrengthIndex"));
        let personalStrengthCount = parseInt(localStorage.getItem("personalStrengthCount"));

        //not last item
        if (currentPersonalStrengthIndex < personalStrengthCount) {
            let nextPersonalStrengthIndex = currentPersonalStrengthIndex + 1;
            localStorage.setItem('currentPersonalStrengthIndex', nextPersonalStrengthIndex);
            getCurrentPersonalStrength();

            hideFormError();
            scrollToFormTop();

            return false;
        } else return true;
    } else {
        //not valid
        showFormError("Vul alsjeblieft alle vereiste velden in.");
        return false;
    }
}

//get first perosnal strength

const firstPersonalStrength = () => {
    localStorage.setItem('currentPersonalStrengthIndex', 0);
}

