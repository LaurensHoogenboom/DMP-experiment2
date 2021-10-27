const loadPressureSentence = (span) => {
    const moment = getMoment();
    const pressureList = moment.pressureList;
    let sentence = "";

    if (pressureList.length > 1) {
        pressureList.forEach((p, index) => {
            let description = p.description.toLowerCase();

            if (index == 0) {
                sentence = description;
            } else if (index == pressureList.length - 1) {
                sentence = sentence + " en " + description;
            } else {
                sentence = sentence + ", " + description;
            }
        });
    } else {
        sentence = pressureList[0].description;
    }

    $(span).text(sentence);
}

const getMomentDescription = (type, area) => {
    const moment = getMoment();

    if (type == "input") {
        $(area).val(moment.description);
    } else {
        $(area).text(moment.description);
    }
}

const saveMomentDescription = (textarea) => {
    const moment = getMoment();
    hideFormError();
    description = $(textarea).val();

    if (description.length > 0) {
        moment.description = description;
        setMoment(moment);
        return true;
    } else {
        showFormError("We hebben een beschrijving van het moment nodig, om door te gaan.");
        return false;
    }
}

const getMomentEmotion = (emotionInput, intensityInput) => {
    const moment = getMoment();

    $(emotionInput).val(moment.emotion.type);
    $(intensityInput).val(moment.emotion.intensity);
}

const saveMomentEmotion = (emotionInput, intensityInput) => {
    hideFormError();
    const emotion = $(emotionInput).val();
    const intensity = $(intensityInput).val();

    if (emotion) {
        let moment = getMoment();

        moment.emotion.type = emotion;
        moment.emotion.intensity = intensity;

        setMoment(moment);

        return true;
    } else {
        showFormError("Geef een emotie op, om door te gaan.");
        return false;
    }
}