// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error'); //adds extra to the classlist of p
// content.classList.remove('error'); //removes extra to the classlist of p
// content.classList.add('sucesss'); //removes extra to the classlist of p


const paras = document.querySelectorAll('p')

paras.forEach(p =>
    {
      // console.log(p.innerText)  //gets all visible text
      // console.log(p.textContent)  //gets both hidden and visible
       if(p.textContent.includes('error')){
       p.classList.add('error')
       }
       if(p.innerText.includes('sucess')){
        p.classList.add('success' )
       }
    });

    const title = document.querySelector('title');
    title.classList.toggle('test');
    //title.classList.toggle('test');