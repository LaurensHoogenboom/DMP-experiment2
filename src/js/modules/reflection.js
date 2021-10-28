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

    if (selectedFactors.length < 3 && selectedFactors.length > 0) {
        moment.factorList = selectedFactors;
        setMoment(moment);
        return true;
    } else {
        if (selectedFactors.length > 2) {
            showFormError("Selecteer maximaal twee redenen.");
        } else {
            showFormError("Selecteer minstens één reden.");
        }

        return false;
    }
}