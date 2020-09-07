import React from 'react'

// export function rankingBeer(rating){
//   console.log(rating);
//   const rat = parseFloat(rating)
//   const entries = Math.floor(rat)
//   const decimals =  rat - entries
//   const circles = document.querySelectorAll('.rankingBeer .circleRank')
//   for(let i = 0; i < entries; i++){
//     const childCircle= circles[i].childNodes[0];
//     childCircle.setAttribute('style','background-color:yellow;width:100%;')
//     if(i == entries-1 && decimals > 0){
//       const nextCircle= circles[i+1].childNodes[0];
//       nextCircle.setAttribute('style',`background-color:yellow;width:${decimals*100}%;`)
//     }
//   }
//
//     // console.log('complete: ', rat)
//     // console.log('entri: ', entries)
//     // console.log('decimal: ', decimals)
// }

export function moveGlass(lerma=false){
  const maderal = lerma? document.querySelector('.imgMaderal.activeLerma') : document.querySelector('.imgMaderal.active');
  console.log(maderal)
  const distance = maderal.getBoundingClientRect().x
  console.log('distance: ', distance);
  const glass = document.querySelector('.glassServed');
  const glassLerma = document.querySelector('.glassServedLerma');
  console.log(glass)
  console.log(glassLerma);
  if (lerma) {
    glassLerma.classList.add('animated');
    glassLerma.setAttribute('style',`left:${distance}px`);
  } else {
    glass.classList.add('animated');
    glass.setAttribute('style',`left:${distance}px`);
  }
}
