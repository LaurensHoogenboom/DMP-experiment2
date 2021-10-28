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
            showFormError("Selecteer op zijn maximaal twee soorten gevolgen van de situatie.");
        } else {
            showFormError("Selecteer op zijn minst één soort gevolg van de situatie.");
        }

        return false;
    }
}

//needs

const loadNeedsList = (list) => {
    const moment = getMoment();
    const needs = getRelevantNeeds();
    const selectedNeeds = moment.needList;

    needs.forEach(need => {
        let selected = false;

        if (selectedNeeds.length > 0) {
            selectedNeeds.forEach(selectedN => {
                if (selectedN.name == need.name) {
                    selected = true;
                }
            });
        }

        displayName = capitalizeFirstLetter(need.displayName);
        addItemToSelectList(list, displayName, selected, need.name, null, null, need.description);
    });
}

const saveNeedSelection = (list) => {
    hideFormError();
    const moment = getMoment();
    let selectedNeeds = [];

    $(list).find('.item').each(function() {
        const needType = $(this).attr("id");
        const selected = $(this).find(("input[type='checkbox']")).is(":checked");
        const relevantNeeds = getRelevantNeeds();
        const needIndex = relevantNeeds.findIndex(need => need.name == needType);
        const need = relevantNeeds[needIndex];

        if (selected) {
            selectedNeeds.push(need);
        }
    });

    if (selectedNeeds.length > 0 && selectedNeeds.length < 3) {
        moment.needList = selectedNeeds;
        setMoment(moment);
        return true;
    } else {
        if (selectedNeeds.length > 2) {
            showFormError("Selecteer op zijn maximaal twee behoeften.");
        } else {
            showFormError("Selecteer op zijn minst één behoefte");
        }
        
        return false;
    }
}

//values

const checkIfAnyValuesOtherwiseRedirect = (valueType, url) => {
    const relevantValues = getRelevantValues(valueType);

    if (relevantValues.length < 1) {
        window.location.replace(url);
    }
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
    const selectedValues = moment.valueList;
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

const saveValuesSelection = (list) => {
    hideFormError()
    const moment = getMoment();
    let selectedValues = [];

    $(list).find(".item").each(function () {
        const valueType = $(this).attr("id");
        const selected = $(this).find("input[type='checkbox']").is(":checked");
        const relevantValues = getRelevantValues("instrumental");
        const valueIndex = relevantValues.findIndex(value => value.name == valueType);
        const value = relevantValues[valueIndex];

        console.log(relevantValues);

        if (selected) {
            selectedValues.push(value);
        }
    });

    if (selectedValues.length > 0 && selectedValues.length < 3) {
        moment.valueList = selectedValues;
        setMoment(moment);
        return false;
    } else {
        if (selectedValues.length > 2) {
            showFormError("Selecteer op zijn maximaal twee waarden.");
        } else {
            showFormError("Selecteer op zijn minst één waarde");
        }
        
        return false;
    }
}
