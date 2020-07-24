require.context('./books', true).keys().forEach(item => {
    console.log(item);
    // const temp = require(`./storeHook/reducer/${item.replace('./', '')}`).default;
    // if (temp && typeof temp === 'function') {
    //     temp.call(null, useReducer);
    // }
});