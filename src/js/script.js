//initialize

const initialize = () => {
    let pressureList = [];

    pressureTypes.forEach(pType => {
        const descriptionIndex = pressureDescriptions.findIndex(description => description.type == pType);
        const description = pressureDescriptions[descriptionIndex].description;

        pressureList.push({ type: pType, intensity: 1, selected: false, description: description });
    });

    setPressureList(pressureList);
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

//form input description

$(document).on('click', '.description-button', function () {
    const content = $(this).parent().find('.description-content');
    $(content).toggleClass('hidden');
});

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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
        data: { data: JSON.stringify(result) }
    }).done(function (response) {
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

//select list

const addItemToSelectList = (list, value, selected, id, progress, maxValue, description) => {
    const itemId = id ? id : makeid(6);

    $(list).append(
        $('<label>').addClass('item').attr("id", itemId).attr("for", `${itemId}Checkbox`)
            .append(
                $("<p>").text(value)
            )
            .append(
                $("<input>").attr('type', 'checkbox').prop('checked', selected).attr("id", `${itemId}Checkbox`)
            )
    )

    if (progress) {
        $(`#${itemId}`).addClass('with-progress')

        $(`#${itemId}`).find("input").before(
            $("<progress>").attr("value", progress).attr("max", maxValue)
        );
    }

    if (description) {
        const descriptionId = makeid(6);

        $(`#${itemId}`).wrap(`<div class='has-description' id='${descriptionId}''></div>`)

        $(`#${descriptionId}`).append(
            $("<label>").addClass("description-button").text("?").attr("for", descriptionId)
        )

        $(`#${itemId}`).append(
            $("<label>").addClass("description-content").text(description).addClass('hidden').attr("id", descriptionId)
        )
    }
}











