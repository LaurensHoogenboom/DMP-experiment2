//initialize

const initialize = () => {
    let pressureList = [];

    pressureTypes.forEach(pType => {
        const descriptionIndex = pressureDescriptions.findIndex(description => description.type == pType);
        const description = pressureDescriptions[descriptionIndex].description;

        pressureList.push({ type: pType, intensity: 1, selected: false, description: description });
    });

    setPressureList(pressureList);

    localStorage.setItem(valueRelevanceClickCountStorageName, 0);
    localStorage.setItem(valueRelevanceCountStorageName, 1);
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
    const oldText = $(this).text();
    const newText = oldText == "?" ? "x" : "?";

    $(this).text(newText);
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

//intensity list

const addItemToIntensityList = (list, label, id, minValue, maxValue, defaultValue, description) => {
    const itemId = id ? id : makeid(6);
    const labelId = `${itemId}-label`;

    $(list).append(
        $("<label>").text(label).attr("id", labelId)
    )

    $(list).append(
        $("<div>").addClass("range-wrapper").attr("id", itemId)
            .append(
                $("<label>").text(minValue)
            )
            .append(
                $("<input>").attr("type", "range").attr("min", minValue).attr("max", maxValue).attr("value", defaultValue)
            )
            .append(
                $("<label>").text(maxValue)
            )
    )
    if (description) {
        const descriptionId = makeid(6);

        $(`#${labelId}`).addClass("has-description");

        $(`#${labelId}`)
            .append(
                $("<label>").addClass("description-button").text("?").attr("for", descriptionId)
            )
            .append(
                $("<label>").addClass("description-content").text(description).addClass('hidden').attr("id", descriptionId)
            )
    }
}

//opsomming

const getEnumerationSentence = (list) => {
    let sentence = "";

    if (list.length > 1) {
        list.forEach((item, index) => {
            let description = item.toLowerCase();

            if (index == 0) {
                sentence = description;
            } else if (index == list.length - 1) {
                sentence = sentence + " en " + description;
            } else {
                sentence = sentence + ", " + description;
            }
        });
    } else {
        sentence = list[0].toLowerCase();
    }

    return sentence;
}

//block-list

const addItemToBlockList = (list, value) => {
    $(list).append(
        $("<label>").addClass("block").text(capitalizeFirstLetter(value))
    );
}

//clean

const cleanData = () => {
    localStorage.clear();
}

//load more

$(document).on("click", ".load-more .button", function () {
    $(this).addClass('hidden');
});
