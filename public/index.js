

// ---------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) { 
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenBlur = document.querySelectorAll('.hiddenb');
hiddenBlur.forEach((el) => observer.observe(el));

const slideRight = document.querySelectorAll('.slide-right');
slideRight.forEach((el) => observer.observe(el));

const slideLeft = document.querySelectorAll('.slide-left');
slideLeft.forEach((el) => observer.observe(el)); 


const explore = document.querySelector('.explore');
console.log(explore); 


// ----------------------------------------------------------------

function show(){
    setTimeout(()=>{
        explore.style.display = 'flex';
    },5500)
}
show();

const animation = document.querySelector('.animation');
console.log(animation);


function animate(){
    setTimeout(() => {
        animation.style.display = 'none';
    }, 8500);
}
animate();

// ----------------------------------------------------------------
const signin = document.querySelector('#signin-btn');
signin.addEventListener('click',()=>{
    const fullName = document.querySelector('#full-name').value;
    console.log(fullName);

    const emailId = document.querySelector('#email1').value;
    console.log(emailId);

    const password = document.querySelector('#password').value;
    console.log(password);

    window.localStorage.setItem('fullName',fullName);
    window.localStorage.setItem('emailId',emailId);
    window.localStorage.setItem('password',password);

})

const login = document.querySelector('#login-btn');
login.addEventListener('click',()=>{
    const loginName = document.querySelector('.emaillogin').value;
    console.log(loginName);

    const loginPassword = document.querySelector('.passwordlogin').value;
    console.log(loginPassword);

    if(( (loginName == window.localStorage.getItem('fullName') ) || (loginName == window.localStorage.getItem('emailId')) ) && (loginPassword == window.localStorage.getItem('password')) ){
        console.log("login successfull");

        const profile = document.querySelector('#profile');
       
        let span = loginName.slice(0,2);
   
        console.log(span);
     
        profile.innerHTML = '';
        profile.innerHTML += span;

        const warning = document.querySelector('#warning');
        warning.style.display = 'none';
    }
    else{
        const warning = document.querySelector('#warning');
        warning.style.display = 'block';
        const profile = document.querySelector('#profile');
        profile.innerHTML = 'hii';
        
    }
});

// ----------------------------------------------------------------



const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click',()=>{
    const search = document.querySelector('.search-box').value;
    console.log(search);

    if((search == 'london')){
        window.open(URL = 'http://127.0.0.1:5500/london.html');
    }
});


