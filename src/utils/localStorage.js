let store = {};
const setItem = (key, value) => (store[key] = value);
const getItem = key => store[key];
const removeItem = key => { delete store[key] };
const clear = () => (store = {});