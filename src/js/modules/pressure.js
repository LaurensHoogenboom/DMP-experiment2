const getPressureDescription = (pressureType) => {
    const index = pressureDescriptions.findIndex(description => description.type == pressureType);
    return pressureDescriptions[index].description;
}

//get pressure

const getPressure = () => {
    hideFormError();
    let pressureList = JSON.parse(localStorage.getItem(pressureListStorageName));

    if (pressureList.length > 0) {
        pressureList.forEach(pressure => {
            $(`#${pressure.type}Pressure`).val(pressure.intensity);
        });
    }
}

//save pressure

const savePressure = () => {
    let pressureList = JSON.parse(localStorage.getItem(pressureListStorageName));
    let hasPressure = false;

    pressureTypes.forEach(pType => {
        const intensity = $(`#${pType}Pressure`).val();
        
        if (intensity > 1) {
            hasPressure = true;
        }

        const index = pressureList.findIndex(pressure => pressure.type == pType);
        pressureList[index].intensity = intensity;
    });

    localStorage.setItem(pressureListStorageName, JSON.stringify(pressureList));

    if (hasPressure) {
        return true;
    } else {
        showFormError("Geef minstens één stress type op om door te gaan.");
        return false;
    }
}

// populate pressure select list

const loadPressureSelectList = (list) => {
    const pressureList = JSON.parse(localStorage.getItem(pressureListStorageName));

    pressureList.forEach(pressure => {
        description = getPressureDescription(pressure.type);

        if (pressure.intensity > 1) {
            addItemToSelectList(list, `${description}`, pressure.selected, pressure.type, pressure.intensity, 10);
        }
    });
}

const savePressureSelection = (list) => {
    const pressureList = JSON.parse(localStorage.getItem(pressureListStorageName));

    pressureList.forEach((p, index) => {
        pressureList[index].selected = false;
    });

    $(list).find('.item').each(function() {
        const pType = $(this).attr("id");
        const selected = $(this).find("input[type='checkbox']").is(":checked");
        const itemIndex = pressureList.findIndex(pressure => pressure.type == pType);
        pressureList[itemIndex].selected = selected;
    });

    localStorage.setItem(pressureListStorageName, JSON.stringify(pressureList));
}


 


