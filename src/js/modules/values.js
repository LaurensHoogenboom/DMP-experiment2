//concequences

const loadConcequenceSelectList = (list) => {
    const moment = getMoment();
    const totalConcequenceList = concequenceTypes;
    const selectedConcequences = moment.concequenceList;

    totalConcequenceList.forEach(concequence => {
        let selected = false;

        if (selectedConcequences.length > 0) {
            selectedConcequences.forEach(selectedC => {
                if (selectedC.name == concequence.name) {
                    selected = true;
                }
            });
        }

        description = capitalizeFirstLetter(concequence.displayName);
        addItemToSelectList(list, description, selected, concequence.name, null, null, concequence.description);
    });
}

const saveConcequenceSelection = (list) => {
    hideFormError();

    const moment = getMoment();
    let selectedConcequences = [];

    $(list).find('.item').each(function() {
        const concequenceType = $(this).attr("id");
        const selected = $(this).find("input[type='checkbox']").is(":checked");
        const concequenceIndex = concequenceTypes.findIndex(type => type.name == concequenceType);
        const concequence = concequenceTypes[concequenceIndex];

        if (selected) {
            selectedConcequences.push(concequence);
        }
    });

    if (selectedConcequences.length > 0 && selectedConcequences.length < 3) {
        moment.concequenceList = selectedConcequences;
        setMoment(moment);
        return true;
    } else {
        if (selectedConcequences.length > 2) {
            showFormError("Selecteer maximaal twee soorten gevolgen van de situatie.");
        } else {
            showFormError("Selecteer op zijn minst één soort gevolg van de situatie.");
        }

        return false;
    }
}

//needs

const loadNeedRangeList = (list) => {
    const moment = getMoment();
    const relevantNeeds = getRelevantNeeds();
    const momentNeeds = moment.needList;

    relevantNeeds.forEach(need => {
        let intensity = 1;

        if (momentNeeds.length > 0) {
            momentNeeds.forEach(momentNeed => {
                if (momentNeed.name == need.name && momentNeed.intensity) {
                    intensity = momentNeed.intensity;
                }
            });
        }

        displayName = capitalizeFirstLetter(need.displayName);
        addItemToIntensityList(list, displayName, need.name, 1, 10, intensity, need.description);
    });
}

const saveNeedSelection = (list) => {
    hideFormError();
    const moment = getMoment();
    let selectedNeeds = [];
    let hasNeed = false;

    $(list).find('.range-wrapper').each(function() {
        const needType = $(this).attr("id");
        const needIntensity = $(this).find("input[type='range']").val();
        const relevantNeeds = getRelevantNeeds();
        const needIndex = relevantNeeds.findIndex(need => need.name == needType);
        const need = relevantNeeds[needIndex];

        need.intensity = needIntensity;

        if (need.intensity > 1) {
            hasNeed = true;
        } 

        selectedNeeds.push(need);
    });

    if (hasNeed) {
        moment.needList = selectedNeeds;
        setMoment(moment);
        return true;
    } else {
        showFormError("Geef op z'n minst een van de behoefte een cijfer, of ga terug en selecteer een ander type gevolg.");
        return false;
    }
}

//values

const checkIfAnyValuesOtherwiseRedirect = (valueType, url) => {
    const relevantValues = getRelevantValues(valueType);

    localStorage.setItem(valueRelevanceCountStorageName, 1);

    if (relevantValues.length < 1) {
        window.location.replace(url);
        return false;
    }
}

const resetRelevanceCount = () => {
    localStorage.setItem(valueRelevanceCountStorageName, 1);
}

const loadNeedsSentence = (span) => {
    const moment = getMoment();
    const needs = moment.needList;
    const needWordList = [];

    needs.forEach(need => {
        needWordList.push(need.displayName);
    });

    const sentence = getEnumerationSentence(needWordList);

    $(span).text(sentence);
}

const loadValueSelectList = (valueType, list) => {
    const moment = getMoment();
    const selectedValues = valueType == 'terminal' ? moment.terminalValueList : moment.instrumentalValueList;
    const relevantValues = getRelevantValues(valueType);
    const relevantSelectedValues = [];

    if (selectedValues.length > 0) {
        selectedValues.forEach(value => {
            if (value.type == valueType) {
                relevantSelectedValues.push(value);
            }
        });
    }

    relevantValues.forEach(rValue => {
        let selected = false;

        if (relevantSelectedValues.length > 0) {
            relevantSelectedValues.forEach(sValue => {
                if (rValue.name == sValue.name) {
                    selected = true;
                }
            });
        }

        description = capitalizeFirstLetter(rValue.displayName);
        addItemToSelectList(list, description, selected, rValue.name, null, null);
    });
}

const saveValuesSelection = (list, valueType) => {
    hideFormError()
    const moment = getMoment();
    let selectedValues = [];

    $(list).find(".item").each(function () {
        const valueName = $(this).attr("id");
        const selected = $(this).find("input[type='checkbox']").is(":checked");
        const relevantValues = getRelevantValues(valueType);
        const valueIndex = relevantValues.findIndex(value => value.name == valueName);
        const value = relevantValues[valueIndex];

        if (selected) {
            selectedValues.push(value);
        }
    });

    if (selectedValues.length > 0 && selectedValues.length < 3) {
        if (valueType == "instrumental") {
            moment.instrumentalValueList = selectedValues;
        }
        if (valueType == "terminal") {
            moment.terminalValueList = selectedValues;
        }

        setMoment(moment);
        return true;
    } else {
        if (selectedValues.length > 2) {
            showFormError("Selecteer maximaal twee waarden.");
        } else {
            showFormError("Selecteer op zijn minst één waarde");
        }
        
        return false;
    }
}

const loadMoreValues = (valueType, list) => {
    $(list).empty();

    console.log(list);
    console.log(valueType);

    const relevanceClickCount = parseInt(localStorage.getItem(valueRelevanceClickCountStorageName)) + 1;
    localStorage.setItem(valueRelevanceClickCountStorageName, relevanceClickCount);

    localStorage.setItem(valueRelevanceCountStorageName, 2);

    loadValueSelectList(valueType, list);
}
