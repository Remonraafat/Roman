// to top btn
let arrowTop = document.getElementById('to-top');
window.onscroll =  ()=> {
    if (window.pageYOffset > 400)
    {
        arrowTop.classList.add('show')
    }else
    {
        arrowTop.classList.remove('show')
    }
}
arrowTop.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth"
        
    })
})

// image galary
let filterItem = document.querySelector('.items')
let filterImg = document.querySelectorAll('.image')

window.onload = ()=> {
    filterItem.onclick = (selectItem) => {
        if(selectItem.target.classList.contains("item")){
            filterItem.querySelector('.active').classList.remove('active')
            selectItem.target.classList.add('active')
            let filterName = selectItem.target.getAttribute('data-name')
            filterImg.forEach((images)=> {
                let filterImages = images.getAttribute('data-name')
                
                if(filterImages == filterName)
                {
                    images.classList.add('show')
                    images.classList.remove('hide')
                }else if(filterName === 'all')
                {
                    images.classList.add('show')
                }
                else
                {
                    images.classList.add('hide')
                    images.classList.remove('show')
                }
            })
        }else
         {
            console.log('false')
         }
        
    }
    for (let i = 0; i <  filterImg.length; i++) {
        filterImg[i].setAttribute("onclick","preview(this)")
    }
}
// preview image 
const previewBox =  document.querySelector('.preview-img')
const previewimg = previewBox.querySelector('img')
const close = previewBox.querySelector('.icon')

function preview(element){
    let imgSelect = element.querySelector('img').src;
    previewimg.src = imgSelect
    previewBox.classList.add('show')
    close.onclick = ()=> {
        previewBox.classList.remove('show')
    }
}


const themes = {
    dark: {
        '--mainColer': '#000',
        '--secondColor' : '#fff',
    },
    default: {
        '--primary-color': 'tomato',
        '--secondary-color': '#000',
    },
    red: {

    },
    orange:{
        
    }
  };
  [...document.querySelectorAll('.color-button')].forEach(el => {
      el.addEventListener('click', () => {
          const theme = themes[el.dataset.theme];
          for (var variable in theme) {
              document.documentElement.style.setProperty(variable, theme[variable]);
          };
      });
  });
  