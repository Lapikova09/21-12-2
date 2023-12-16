function clickBtn(){
    const a = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque commodi similique tempore tempora ex. Qui odio rerum est, minus voluptas eveniet libero facere nostrum suscipit labore maiores aliquam. Sed, nam.'
    if(document.querySelector('.text').innerText === a){
        document.querySelector('.text').innerText = ' '
        
    }else{
    document.querySelector('.text').innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque commodi similique tempore tempora ex. Qui odio rerum est, minus voluptas eveniet libero facere nostrum suscipit labore maiores aliquam. Sed, nam.'
    }

}