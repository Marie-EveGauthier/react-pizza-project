var data = {};

function getData(key) {
    return data[key];
}

function setData(key, value) {
    data[key] = value;
    
    localStorage.setItem(key, JSON.stringify(value));
}

module.exports = {
    getData: getData,
    setData: setData
};