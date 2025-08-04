

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            
        }
    })
});

const hiddenElements = document.querySelectorAll('.animation-scroll');
hiddenElements.forEach((el)=> observer.observe(el))


const clickToActive =  document.querySelectorAll('.options ul li');

clickToActive.forEach((list)=>{
    list.addEventListener("click",(event)=>{
        const target = event.target.textContent;

        if(target === 'WELCOME'){
            window.location.href ='index.html'
        }else if (target === 'OFFERS'){
            window.location.href ='offers.html'
        }else if (target === 'ABOUT'){
            window.location.href = 'about.html'
        }
}) 
    
})

const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.options');

hamMenu.addEventListener('click',()=>{
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})