// const para = document.querySelector('div.error');
// console.log(para);

// const paras = document.querySelectorAll('p');
// console.log(paras[0]); 


// const errors = document.querySelectorAll('.error')
// console.log(errors); 


//square brackets notation [] can be used to call a HTML collection
// but not forEach

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);   


const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);

//on group of nodes you can use forEach 
// paras.forEach(para => {
//     console.log(para);
// });