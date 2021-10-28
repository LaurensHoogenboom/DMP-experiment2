//factors

const loadFactorSelectList = (list) => {
    const moment = getMoment();
    const momentFactors = moment.factorList;
    const allFactors = factors;

    allFactors.forEach(factor => {
        let selected = false;

        momentFactors.forEach(mFactor => {
            if (mFactor.name == factor.name) {
                selected = true;
            }
        });

        let displayText = capitalizeFirstLetter(factor.displayName);

        addItemToSelectList(list, displayText, selected, factor.name, null, null, factor.description);
    });
}

const saveFactorSelectList = (list) => {
    hideFormError();
    const moment = getMoment();
    const allFactors = factors;
    const selectedFactors = [];
    
    $(list).find('.item').each(function() {
        const type = $(this).attr("id");
        const selected = $(this).find("input[type='checkbox']").is(":checked");
        const index = allFactors.findIndex(factor => factor.name == type);
        const factor = allFactors[index];

        if (selected) {
            selectedFactors.push(factor);
        }
    });

    if (selectedFactors.length < 4 && selectedFactors.length > 0) {
        moment.factorList = selectedFactors;
        setMoment(moment);
        return true;
    } else {
        if (selectedFactors.length > 3) {
            showFormError("Selecteer maximaal twee redenen.");
        } else {
            showFormError("Selecteer minstens één reden.");
        }

        return false;
    }
}

//valuation

const loadEndSentence = (situationSpan, pressureWrapper, factorWrapper, instrumentalWrapper, terminalWrapper) => {
    const moment = getMoment();
    const situation = moment.description;
    const pressureList = moment.pressureList;
    const factorList = moment.factorList;
    const needList = moment.needList;
    const instrumentalValueList = moment.instrumentalValueList;
    const terminalValueList = moment.terminalValueList;

    $(situationSpan).text(situation);

    pressureList.forEach(pressure => {
        addItemToBlockList(pressureWrapper, pressure.description);
    });

    factorList.forEach(factor => {
        addItemToBlockList(factorWrapper, factor.displayName);
    });

    if (instrumentalValueList.length > 0) {
        instrumentalValueList.forEach(value => {
            addItemToBlockList(instrumentalWrapper, value.displayName);
        });
    } else {
        $(instrumentalWrapper).addClass("hidden");
    }

    if (terminalValueList.length > 0) {
        terminalValueList.forEach(value => {
            addItemToBlockList(terminalWrapper, value.displayName);
        });
    } else {
        $(terminalWrapper).addClass("hidden");
    }
}

const loadValuation = (coverageInput, coverageTextfield, usabilityInput, usabilityTextField) => {
    const moment = getMoment();
    const valuation = moment.valuation;

    if (valuation) {
        $(coverageInput).val(valuation.coverageGrade);
        $(coverageTextfield).val(valuation.coverageRemarks);
        $(usabilityInput).val(valuation.usabilityGrade)
        $(usabilityTextField).val(valuation.usabilityRemarks);
    }
}

const saveValuation = (coverageInput, coverageTextfield, usabilityInput, usabilityTextField) => {
    const moment = getMoment();

    const coverageGrade = $(coverageInput).val();
    const coverageRemarks = $(coverageTextfield).val();
    const usabilityGrade = $(usabilityInput).val()
    const usabilityRemarks = $(usabilityTextField).val();

    const valuation = {
        coverageGrade: coverageGrade,
        coverageRemarks: coverageRemarks,
        usabilityGrade: usabilityGrade,
        usabilityRemarks: usabilityRemarks
    };

    moment.valuation = valuation;
    setMoment(moment);
}

//submission

const saveSubmission = (saveDataInput, feedbackTextfield) => {
    const moment = getMoment();
    const saveMomentDescription = $(saveDataInput).is(':checked');
    const clickCount = parseInt(localStorage.getItem(valueRelevanceClickCountStorageName));
    const feedback = $(feedbackTextfield).val();
    
    if (!saveMomentDescription) {
        moment.description = "";
    }

    const result = {
        moment: moment.description,
        emotion: moment.emotion,
        pressureList: moment.pressureList,
        concequenceList: moment.concequenceList,
        needList: moment.needList,
        instrumentalValueList: moment.instrumentalValueList,
        terminalValueList: moment.terminalValueList,
        factorList: moment.factorList,
        coverageGrade: moment.valuation.coverageGrade,
        coverageRemarks: moment.valuation.coverageRemarks,
        usabilityGrade: moment.valuation.usabilityGrade,
        usabilityRemarks: moment.valuation.usabilityRemarks,
        feedback: feedback,
        moreValuesClickCount: clickCount
    }

    console.log(result);

    $.ajax({
        url: '/src/php/save.php',
        method: 'POST',
        data: { data: JSON.stringify(result) }
    }).done(function (response) {
        console.log(response);
    });

    cleanData();
}




