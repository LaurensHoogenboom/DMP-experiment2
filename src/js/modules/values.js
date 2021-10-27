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

const getRelevantNeeds = () => {
    const moment = getMoment();
    const totalNeedsList = needTypes;
    const selectedConcequences = moment.concequenceList;
    const needsInContext = [];

    totalNeedsList.forEach(need => {
        let relevant = false;

        need.concequenceTypes.forEach(type => {
            selectedConcequences.forEach(concequence => {
                if (type == concequence.name) {
                    relevant = true;
                }
            });
        });

        if (relevant) {
            needsInContext.push(need);
        }   
    });

    return needsInContext;
}

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
        addItemToSelectList(list, displayName, selected, need.name, null, null, "hoi");
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
        return false;
    } else {
        if (selectedNeeds.length > 2) {
            showFormError("Selecteer op zijn maximaal twee behoeften.");
        } else {
            showFormError("Selecteer op zijn minst één behoefte");
        }
        
        return false;
    }
}
