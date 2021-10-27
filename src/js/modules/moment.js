const initializeMoment = () => {
    let pressureList = JSON.parse(localStorage.getItem(pressureListStorageName));
    let selectedPressure = [];
    let selectionCount = 0;

    pressureList.forEach(p => {
        if (p.selected) {
            selectionCount++;
        }
    });

    if (selectionCount > 0) {
        pressureList.forEach(p => {
            if (p.selected) {
                selectedPressure.push(p);
            }
        });
    } else {
        pressureList.sort((a, b) => {
            return b.intensity - a.intensity;
        });

        selectedPressure.push(pressureList[0]);
    }

    moment = {
        id: makeid(5),
        description: "",
        emotion: {
            type: "",
            intensity: ""
        },
        pressureList: selectedPressure
    };

    localStorage.setItem(momentStorageName, JSON.stringify(moment));
}

const loadPressureSentence = (span) => {
    const moment = JSON.parse(localStorage.getItem(momentStorageName));
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

const saveMomentDescription = (textarea) => {
    const moment = JSON.parse(localStorage.getItem(momentStorageName));
    hideFormError();
    description = $(textarea).val();

    if (description.length > 0) {
        moment.description = description;
        localStorage.setItem(momentStorageName, JSON.stringify(moment));
        return true;
    } else {
        showFormError("We hebben een beschrijving van het moment nodig, om door te gaan.");
        return false;
    }
}