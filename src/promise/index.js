const promise = new Promise (function (resolve, reject){
    resolve ('hey todo correcto');
});

// cantidad de vacas para ordenar segun la cantidad de leche que se necesita

const cow = 9;

const countCows = new Promise (function(resolve, reject){
    if (cow > 10){
        resolve (`We have ${cow} cows on the farm`);
    } else {
        reject (`There is not enough cows on farm`); 
    }
});

countCows.then ((result) => {
    console.log(result);
}).catch ((error) => {
    console.log(error);
}).finally (() => console.log('Finally') );