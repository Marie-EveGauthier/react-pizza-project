var data = {};

{
    mazarele: 
}

function getData(key) {
    return data[key];
}

function setData(key, value) {
    data[key] = value;
    //window.localStorage.clear();
    window.localStorage.setItem(key, JSON.stringify(value));
}

function removeData(key) {
    window.localStorage.removeItem(key);
    
}

module.exports = {
    getData: getData,
    setData: setData
};