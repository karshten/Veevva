const sliderLeft = document.querySelector('.slider-left')
const sliderRight = document.querySelector('.slider-right')
const headerBackground = document.querySelector('.section-header')
const slideRightFunc = (btn, content)=>{
    btn.addEventListener('click',(e)=>{
    if (content.classList.contains('animation-slide-back')){
        content.classList.remove('animation-slide-back')
    }else content.classList.add('animation-slide-back')

    if (content.classList.contains('header-back-first')){
        content.classList.toggle('header-back-first')
        content.classList.add('header-back-second')
    }else if (content.classList.contains('header-back-second')){
        content.classList.toggle('header-back-second')
        content.classList.add('header-back-third')
    }
    else if (content.classList.contains('header-back-third')){
        content.classList.toggle('header-back-third')
        content.classList.add('header-back-first')
    }
})
}
slideRightFunc(sliderRight, headerBackground)
const sliderLeftFunc = (btn, content)=>{
    btn.addEventListener('click',(e)=>{
    if (content.classList.contains('animation-slide-back')){
        content.classList.remove('animation-slide-back')
    }else content.classList.add('animation-slide-back')


    if (content.classList.contains('header-back-first')){
        content.classList.toggle('header-back-first')
        content.classList.add('header-back-third')
    }else if (content.classList.contains('header-back-second')){
        content.classList.toggle('header-back-second')
        content.classList.add('header-back-first')
    }
    else if (content.classList.contains('header-back-third')){
        content.classList.toggle('header-back-third')
        content.classList.add('header-back-second')
    }
})}
sliderLeftFunc(sliderLeft, headerBackground)

