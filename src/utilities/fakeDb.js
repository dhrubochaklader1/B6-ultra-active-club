const addToDb = (name, breakTime) => {
    let stored = {};
    const storedItem = localStorage.getItem("storeTime")
    if (storedItem) {
        stored[name] = breakTime;
    }
    else {
        stored[name] = breakTime;
    }
    localStorage.setItem("storeTime", JSON.stringify(stored));
}

const getTime = () => {
    let store = {};
    let storedCart = localStorage.getItem("storeTime");
    if (storedCart) {
        store = JSON.parse(storedCart);
    }
    return store;
}


export { addToDb, getTime };