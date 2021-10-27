const getPressureList = () => {
    const list = JSON.parse(localStorage.getItem(pressureListStorageName));
    return list;
}

const setPressureList = (pressureList) => {
    localStorage.setItem(pressureListStorageName, JSON.stringify(pressureList))
}