const getMoment = () => {
    const moment = JSON.parse(localStorage.getItem(momentStorageName));
    return moment;
}

const setMoment = (moment) => {
    localStorage.setItem(momentStorageName, JSON.stringify(moment));
}

const initializeMoment = () => {
    let pressureList = getPressureList();
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
        pressureList: selectedPressure,
        concequenceList: [],
        needList: [],
        instrumentalValueList: [],
        terminalValueList: [],
        factorList: []
    };

    setMoment(moment);
}