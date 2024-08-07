import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
      const name = faker.commerce.productName();
      products += `<div>${name}</div>`;
    }   

    el.innerHTML = products;
    
}

// Situation 1
// Running this file in development in isolation using local index.html which has id dev-products
// We want to immediately render our app for development purposes
if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    // Assuming container does not have an element with id 'dev-products'
    if(el) {
        mount(el);
    }
}


// Situation 2
// Running this file in production in container app where dev-products id does not exist
// We do not want to immediately render our app because an error might occur
export { mount };