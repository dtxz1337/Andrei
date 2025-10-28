const observerOptions={threshold:0.1,rootMargin:'0px 0px -100px 0px'};const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('active')}})},observerOptions);document.querySelectorAll('.animate-on-scroll').forEach(el=>observer.observe(el));window.addEventListener('scroll',()=>{const scrolled=window.pageYOffset;const parallaxElements=document.querySelectorAll('.parallax-element');parallaxElements.forEach(el=>{const speed=el.dataset.speed||0.5;el.style.transform='translateY('+scrolled*speed+'px)'})});const progressBar=document.createElement('div');progressBar.className='progress-bar';document.body.appendChild(progressBar);window.addEventListener('scroll',()=>{const winScroll=document.body.scrollTop||document.documentElement.scrollTop;const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;const scrolled=winScroll/height;progressBar.style.transform='scaleX('+scrolled+')'});document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn=>{btn.addEventListener('click',function(e){const ripple=document.createElement('span');const rect=this.getBoundingClientRect();const x=e.clientX-rect.left;const y=e.clientY-rect.top;ripple.style.left=x+'px';ripple.style.top=y+'px';ripple.className='ripple';this.appendChild(ripple);setTimeout(()=>ripple.remove(),600)})});const cards=document.querySelectorAll('.card');cards.forEach(card=>{card.addEventListener('mousemove',e=>{const rect=card.getBoundingClientRect();const x=e.clientX-rect.left;const y=e.clientY-rect.top;const centerX=rect.width/2;const centerY=rect.height/2;const rotateX=(y-centerY)/10;const rotateY=(centerX-x)/10;card.style.transform='perspective(1000px) rotateX('+rotateX+'deg) rotateY('+rotateY+'deg) translateY(-10px)'});card.addEventListener('mouseleave',()=>{card.style.transform='perspective(1000px) rotateX(0) rotateY(0) translateY(0)'})});
document.addEventListener('DOMContentLoaded',()=>{const currentPage=window.location.pathname.split('/').pop()||'index.html';document.querySelectorAll('.nav-menu a').forEach(link=>{if(link.getAttribute('href')===currentPage){link.classList.add('active')}});document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();const target=document.querySelector(this.getAttribute('href'));if(target){target.scrollIntoView({behavior:'smooth',block:'start'})}})})});document.addEventListener('visibilitychange',()=>{if(document.hidden){document.title='👋 Tule tagasi! - Andrei Petrovichev'}else{const originalTitle=document.querySelector('title').textContent;if(!originalTitle.includes('👋')){document.title=originalTitle}}});
const backToTop=document.createElement('div');backToTop.className='back-to-top';backToTop.innerHTML='↑';backToTop.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});document.body.appendChild(backToTop);window.addEventListener('scroll',()=>{if(window.pageYOffset>300){backToTop.classList.add('show')}else{backToTop.classList.remove('show')}});document.querySelectorAll('.nav-logo').forEach(logo=>{logo.addEventListener('click',()=>{window.location.href='index.html'})});const cards=document.querySelectorAll('.card, .goal-card, .info-card');cards.forEach(card=>{card.addEventListener('mouseenter',function(){this.style.zIndex='10'});card.addEventListener('mouseleave',function(){this.style.zIndex='1'})});document.querySelectorAll('.skill-item').forEach((item,index)=>{item.style.animationDelay=index*0.1+'s';item.addEventListener('click',function(){this.style.background='#fff';this.style.color='#000';setTimeout(()=>{this.style.background='';this.style.color=''},300)})});
const loader=document.createElement('div');loader.className='loader';loader.innerHTML='<div class="loader-spin"></div>';document.body.prepend(loader);window.addEventListener('load',()=>{setTimeout(()=>{loader.classList.add('hidden');setTimeout(()=>loader.remove(),500)},500)});const emailLinks=document.querySelectorAll('a[href^="mailto:"]');emailLinks.forEach(link=>{link.addEventListener('click',function(e){const confirmation=confirm('Открыть email клиент для отправки письма?');if(!confirmation){e.preventDefault()}})});document.querySelectorAll('.card-number').forEach(num=>{const finalNumber=parseInt(num.textContent);let current=0;const duration=1000;const increment=finalNumber/duration*10;const timer=setInterval(()=>{current+=increment;if(current>=finalNumber){num.textContent=finalNumber.toString().padStart(2,'0');clearInterval(timer)}else{num.textContent=Math.floor(current).toString().padStart(2,'0')}},10)});
let konamiCode=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];let konamiIndex=0;document.addEventListener('keydown',e=>{if(e.key===konamiCode[konamiIndex]){konamiIndex++;if(konamiIndex===konamiCode.length){document.body.style.animation='rainbow 2s infinite';setTimeout(()=>document.body.style.animation='',5000);alert('🎉 Секретный код активирован! 🎉');konamiIndex=0}}else{konamiIndex=0}});let clickCount=0;document.querySelectorAll('.nav-logo').forEach(logo=>{logo.addEventListener('dblclick',()=>{clickCount++;if(clickCount>=3){document.querySelectorAll('.section-title').forEach(title=>{title.style.fontSize='3rem';title.style.transform='rotate(360deg)'});setTimeout(()=>{document.querySelectorAll('.section-title').forEach(title=>{title.style.fontSize='';title.style.transform=''})},2000);clickCount=0}})});
// Animate hero stat numbers
function animateStatNumbers() {
    const statNumbers = document.querySelectorAll('.hero-stats .stat-number[data-target]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = 2000;
                const start = 0;
                const increment = target / (duration / 16);
                let current = start;
                
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        entry.target.textContent = target;
                        clearInterval(counter);
                    } else {
                        entry.target.textContent = Math.floor(current);
                    }
                }, 16);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(num => observer.observe(num));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateStatNumbers);
} else {
    animateStatNumbers();
}
