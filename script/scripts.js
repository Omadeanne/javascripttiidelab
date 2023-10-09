//const para = document.querySelector('p');

//console.log (para.innerText);

//para.innerText = 'ninjas are awesome'
//para.innerText += 'ninjas are awesome' //apending


//this graps all the p tags and appends new text to it
// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ('new text '                                                                                                                                                                                                                                                                                                                                                                                .innerText)
// });

//const content = document.querySelector('.content');
//console.log(content.innerHTML) 
//content.innerHTML = '<h2>THIS is a new content</h2>';

// const people = ['mark', 'angelo', 'hope'];
// people.forEach(person => {
// content.innerHTML += `<p> ${person}</p>`;
// }); 

const link = document.querySelector('a')
console.log(link.getAttribute('href'));
link.setAttribute('href','bbc.com')
link.innerText = 'BBC world news'


const msgs = document.querySelector('p');
console.log(msgs.getAttribute('class')); 
msgs.setAttribute('class','success'); 
msgs.setAttribute('style','color:green')


 const title = document.querySelector('h1');
 //title.setAttribute('style', 'margin: 50px;'); 
 console.log(title.style.color); 
  
 title.style.margin = '50px';
 title.style.color = 'crimson';
 title.style.fontSize = '80px'
 
 //title.style.fontSize = ''; removes the property