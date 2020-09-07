export async function moveSlider(direction){
    const sliders = document.getElementsByClassName('slideBeer')
    if(direction=='left'){
        for(let i = 0; i < sliders.length; i++){
            const dataCurrent = await parseInt(sliders[i].getAttribute('dataB'));
            const imgItem = await sliders[i].querySelector('.beer')
            let newData = dataCurrent!=0? dataCurrent - 1 : 3;
            sliders[i].setAttribute('dataB',newData);
            if((newData == 3 && imgItem.getAttribute('dataImg') == 'tarro') || (newData == 0 && imgItem.getAttribute('dataImg') == 'tarro')){
              sliders[1].classList.add('tarro')
            }else if((newData != 3 && imgItem.getAttribute('dataImg') == 'tarro') || newData != 0 && imgItem.getAttribute('dataImg') == 'tarro'){
              sliders[1].classList.remove('tarro')
            }
            if(newData == 0 && imgItem.getAttribute('dataImg') == 'pinta'){
              sliders[0].classList.add('pinta')
            }else if(newData != 0 && imgItem.getAttribute('dataImg') == 'pinta'){
              sliders[0].classList.remove('pinta')
            }
            if(newData == 0 && imgItem.getAttribute('dataImg') == 'stout'){
              sliders[3].classList.add('stout')
            }else if(newData != 0 && imgItem.getAttribute('dataImg') == 'stout'){
              sliders[3].classList.remove('stout')
            }
            if(newData == 2 && imgItem.getAttribute('dataImg') == 'copa'){
              sliders[2].classList.add('copa')
            }else if(newData != 2 && imgItem.getAttribute('dataImg') == 'copa'){
              sliders[2].classList.remove('copa')
            }
            if(newData == 0){
              imgItem.classList.add('active')
            }else{
              imgItem.classList.remove('active')
            }
        }
    }
    if(direction=='right'){
        for(let i = 0; i < sliders.length; i++){
            const dataCurrent = await parseInt(sliders[i].getAttribute('dataB'));
            const imgItem = await sliders[i].querySelector('.beer')
            let newData = dataCurrent!=3? dataCurrent + 1 : 0;
            sliders[i].setAttribute('dataB',newData);
            if(newData == 3 && imgItem.getAttribute('dataImg') == 'tarro'){
              sliders[1].classList.add('tarro')
            }else if(newData != 3 && imgItem.getAttribute('dataImg') == 'tarro'){
              sliders[1].classList.remove('tarro')
            }
            if(newData == 0 && imgItem.getAttribute('dataImg') == 'pinta'){
                console.log('is pinta');
              sliders[0].classList.add('pinta')
            }else if(newData != 0 && imgItem.getAttribute('dataImg') == 'pinta'){
              sliders[0].classList.remove('pinta')
            }
            if(newData == 0 && imgItem.getAttribute('dataImg') == 'stout'){
              sliders[3].classList.add('stout')
            }else if(newData != 0 && imgItem.getAttribute('dataImg') == 'stout'){
              sliders[3].classList.remove('stout')
            }
            if(newData == 2 && imgItem.getAttribute('dataImg') == 'copa'){
              sliders[2].classList.add('copa')
            }else if(newData != 2 && imgItem.getAttribute('dataImg') == 'copa'){
              sliders[2].classList.remove('copa')
            }
            if(newData == 0){
              imgItem.classList.add('active')
            }else{
              imgItem.classList.remove('active')
            }
        }
    }
}
