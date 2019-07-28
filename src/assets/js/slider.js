export async function moveSlider(direction){
    const sliders = document.getElementsByClassName('slideBeer')
    if(direction=='left'){
        for(let i = 0; i < sliders.length; i++){
            const dataCurrent = await parseInt(sliders[i].getAttribute('dataB'));
            let newData = dataCurrent!=0? dataCurrent - 1 : 3;
            sliders[i].setAttribute('dataB',newData);
        }
    }
    if(direction=='right'){
        for(let i = 0; i < sliders.length; i++){
            const dataCurrent = await parseInt(sliders[i].getAttribute('dataB'));
            let newData = dataCurrent!=3? dataCurrent + 1 : 0;
            sliders[i].setAttribute('dataB',newData);
        }
    }
}