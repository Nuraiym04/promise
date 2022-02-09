const myPromis = new Promise((resolve, reject) => {

    const codeIsFine = true;
    
    if(codeIsFine){
        resolve('fine');
    }else{
        reject('error');
    }
});
console.log(myPromis);