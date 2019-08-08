
export function rankingBeer(rating){
  console.log(rating);
  const rat = parseFloat(rating)
  const entries = Math.floor(rat)
  const decimals =  rat - entries
  const circles = document.querySelectorAll('.rankingBeer .circleRank') 
  for(let i = 0; i < entries; i++){
    const childCircle= circles[i].childNodes[0];
    childCircle.setAttribute('style','background-color:yellow;width:100%;')
    if(i == entries-1 && decimals > 0){
      const nextCircle= circles[i+1].childNodes[0];
      nextCircle.setAttribute('style',`background-color:yellow;width:${decimals*100}%;`)
    }
  }

    // console.log('complete: ', rat)
    // console.log('entri: ', entries)
    // console.log('decimal: ', decimals)
}

export function moveGlass(){
  const maderal = document.querySelector('.imgMaderal.active')
  const distance = maderal.getBoundingClientRect().x
  const glass = document.querySelector('.glassServed')
  console.log(maderal.getBoundingClientRect().x)
  glass.setAttribute('style',`left:${distance}px`)
}