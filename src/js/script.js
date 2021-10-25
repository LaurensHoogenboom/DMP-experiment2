//types
const momentTypes = ["joy", "energy", "lost_time", "bending", "looking_forward", "selected"];

/*
experience = {
    id: makeid(6),
    description: moment,
    action: "",
    feeling: "",
    thougt: "",
    ending: ""
}
*/

//initialize

const initialize = () => {
    momentTypes.forEach(type => {
        list = [];
        listName = `${type}Moments`;
        localStorage.setItem(listName, JSON.stringify(list));
    });
}

//form

const showFormError = (message) => {
    $("#form-wrapper").animate({ scrollTop: 0 }, "slow");

    $(".form-status").removeClass('hidden');
    $(".form-status").text(message);
}

const hideFormError = () => {
    $(".form-status").addClass('hidden');
}

const scrollToFormTop = () => {
    $("#form-wrapper").animate({ scrollTop: 0 }, "slow");
}

$(document).on('click', '.description-button', function() {
    const content = $(this).parent().find('.description-content');
    $(content).toggleClass('hidden');
});

const showFormInputDescription = () => {

}

//helpers
const makeid = (length) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const getBool = (string) => {
    return string == 'true' ? true : false;
}

//clean

const cleanData = () => {
    localStorage.clear();
}

//save result

const saveResult = () => {
    const personalStrengthList = JSON.parse(localStorage.getItem('personalStrengthList'));
    const experiences = JSON.parse(localStorage.getItem('experienceList'));
    const saveExtensiveData = $('#shareData').is(':checked');

    const valutionList = [];

    personalStrengthList.forEach(personalStrength => {
        valutionList.push({
            wantedToBeUsed: personalStrength.wantedToBeUsed,
            usedRegularly: personalStrength.usedRegularly,
            grade: personalStrength.grade,
            remarks: personalStrength.remarks
        });
    });

    const result = {
        valuationList: valutionList,
        experienceList: saveExtensiveData ? experiences : null,
        personalStrengthList: saveExtensiveData ? personalStrengthList : null,
        feedback: $("#feedback").val() 
    }

    $.ajax({
        url: '/src/php/save.php',
        method: 'POST',
        data: {data: JSON.stringify(result)}
    }).done(function(response) {
        console.log(response);
    });

    cleanData();
}

//set dynamic viewheight

$(document).ready(function () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});











