//moment-list

const addMomentToList = (list, value) => {
    $(list).find('.list').append(
        $('<div>').addClass('moment')
            .append(
                $("<textarea>").val(value).attr('placeholder', 'Beschrijf het moment')
            )
            .append(
                $("<button>").addClass('remove').addClass('button').text("X")
            )
    );
}

$(document).on('click', '.moment-list .moment .remove', function () {
    $(this).parent().remove();
});

$(document).on('click', '.moment-list #add-moment', function () {
    addMomentToList($(this).parent());
});

//set moments

const saveMoments = (type, list) => {
    let moments = [];
    let momentsType = `${type}Moments`;
    let htmlMoments = $(list).find('.list .moment')

    if (htmlMoments.length > 0) {
        $(htmlMoments).each(function () {
            const momentDescription = $(this).find('textarea').val();

            if (momentDescription !== "") {
                moments.push(momentDescription);
            }
        });
    }

    localStorage.setItem(momentsType, JSON.stringify(moments));
}

const saveMomentsSelection = (list) => {
    let moments = [];
    let htmlMoments = $(list).find('.moment');

    if (htmlMoments.length > 0) {
        $(htmlMoments).each(function () {
            let selected = $(this).find('input[type="checkbox"]').is(':checked');

            if (selected) {
                const momentDescription = $(this).find('p').text();
                moments.push(momentDescription);
            }
        });
    }

    localStorage.setItem('selectedMoments', JSON.stringify(moments));

    if (moments.length > 3) {
        alert('Je hebt meer dan 3 momenten gekozen.')
        return false;
    }

    return true;
}

//get moments

const getMomentsInList = (type, list) => {
    let moments = [];
    let momentsType = `${type}Moments`;

    moments = JSON.parse(localStorage.getItem(momentsType));

    if (moments.length > 0) {
        $(list).find('.list').empty();

        moments.forEach(moment => {
            addMomentToList(list, moment);
        });
    }
}

const getMomentsInSelectList = (list) => {
    let moments = [];
    let backlink = "/experience/moments/joy.php";
    let selectedMoments = [];

    //get selected moments and complete moment list

    momentTypes.forEach(type => {
        const typeName = `${type}Moments`;
        const momentOfTypeList = JSON.parse(localStorage.getItem(typeName));

        if (type == "selected") {
            if (momentOfTypeList.length > 0) {
                momentOfTypeList.forEach(moment => {
                    selectedMoments.push({ description: moment, selected: false });
                });
            }
        } else {
            if (momentOfTypeList.length > 0) {
                momentOfTypeList.forEach(moment => {
                    moments.push({ description: moment, selected: false });
                });
            }
        }
    });

    //mark items in complete list as selected

    if (selectedMoments.length > 0) {
        selectedMoments.forEach(sMoment => {
            moments.forEach((moment, index) => {
                console.log(moment.description);
                console.log(sMoment.description)

                if (moment.description === sMoment.description) {


                    moments[index].selected = true;
                }
            });
        });
    }

    //render html for each item

    if (moments.length > 0) {
        moments.forEach(moment => {
            addMomentToSelectList(list, moment.description, moment.selected);
        });

        $("#next-selection").removeClass("hidden");
        $(".selection-description").removeClass("hidden");
    } else {
        $(list).append(
            $("<p>")
                .append(
                    $("<i>").html(`Het lijkt er op dat je nog geen momenten hebt opgegeven. Ga <a href="${backlink}">terug</a>.`)
                )
        )
        $("#next-selection").addClass("hidden");
        $(".selection-description").addClass("hidden");
    }
}