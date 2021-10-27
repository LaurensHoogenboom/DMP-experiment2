//convert moments to experiences

const createExperienceList = () => {
    let selectedMoments = JSON.parse(localStorage.getItem('selectedMoments'));
    let experiences = [];

    selectedMoments.forEach(moment => {
        experiences.push({
            id: makeid(6),
            description: moment,
            action: "",
            feeling: "",
            thougt: "",
            ending: ""
        });
    });

    localStorage.setItem('experienceList', JSON.stringify(experiences));
}

//start experience completion

const startExperienceCompletion = () => {
    let experiences = JSON.parse(localStorage.getItem('experienceList'));

    if (!experiences) {
        createExperienceList();
        experiences = JSON.parse(localStorage.getItem('experienceList'));
    }

    localStorage.setItem('currentExperienceIndex', 0);
    localStorage.setItem('experienceCount', experiences.length);
}

const getCurrentExperience = () => {
    let experiences = JSON.parse(localStorage.getItem('experienceList'));
    let currentExperienceIndex = localStorage.getItem('currentExperienceIndex');
    let currentExperience = experiences[currentExperienceIndex];

    $('#experience-description').text(currentExperience.description);
    $('#experience-action').val(currentExperience.action);
    $('#experience-thought').val(currentExperience.thougt);
    $('#experience-feeling').val(currentExperience.feeling);
    $('#experience-ending').val(currentExperience.ending);

    $("#experience-index").text(parseInt(currentExperienceIndex) + 1);
    $("#experience-count").text(experiences.length);
}

//save experience

const saveExperience = () => {
    const experienceList = JSON.parse(localStorage.getItem('experienceList'));
    const currentExperienceIndex = parseInt(localStorage.getItem('currentExperienceIndex'));
    const currentExperience = experienceList[currentExperienceIndex];

    const action = $('#experience-action').val();
    const thougt = $('#experience-thought').val();
    const feeling = $('#experience-feeling').val();
    const ending = $('#experience-ending').val();

    if (action, thougt, feeling) {
        currentExperience.action = action;
        currentExperience.thougt = thougt;
        currentExperience.feeling = feeling;
        currentExperience.ending = ending;

        experienceList[currentExperienceIndex] = currentExperience;
        localStorage.setItem('experienceList', JSON.stringify(experienceList));
        return true;
    } else return false;
}

//get previous experience

const previousExperience = () => {
    const currentExperienceIndex = parseInt(localStorage.getItem('currentExperienceIndex'));
    saveExperience();

    //if not first item
    if (currentExperienceIndex !== 0) {
        let previousExperienceIndex = currentExperienceIndex - 1;
        localStorage.setItem('currentExperienceIndex', previousExperienceIndex);
        getCurrentExperience();

        hideFormError();
        scrollToFormTop();

        return false;
    } else return true;
}

//get next experience

const nextExperience = () => {
    //check and save
    if (saveExperience()) {
        let currentExperienceIndex = parseInt(localStorage.getItem('currentExperienceIndex'));
        let experienceCount = parseInt(localStorage.getItem('experienceCount'));

        //if last not item
        if (currentExperienceIndex < experienceCount) {
            let nextExperienceIndex = currentExperienceIndex + 1;
            localStorage.setItem('currentExperienceIndex', nextExperienceIndex);
            getCurrentExperience();

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

//get first experience

const firstExperience = () => {
    localStorage.setItem('currentExperienceIndex', 0);
}