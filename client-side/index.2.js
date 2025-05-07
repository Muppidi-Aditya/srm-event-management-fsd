console.log("I am Running")

const navElements = document.querySelectorAll('.nav-element');
    navElements.forEach((element) => {
        element.addEventListener('mouseover', () => {
                element.style.backgroundColor = '#e0e0e0';  
        });
        element.addEventListener('mouseout', () => {
                element.style.backgroundColor = '';  
        });
    });

        
const mainImage = document.querySelector('.main-page-image');
    mainImage.addEventListener('click', () => {
        if (mainImage.style.width === '100%') {
                mainImage.style.width = '50%';  
            } else {
                mainImage.style.width = '100%';  
            }
    });

        
const video = document.querySelector('video');
    video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

        
window.addEventListener('load', () => {
        const mainText = document.querySelector('.main-page-text h1');
        mainText.style.transition = 'transform 1s';
        mainText.style.transform = 'scale(1.2)';
        setTimeout(() => {
                mainText.style.transform = 'scale(1)';
            }, 1000);
        });