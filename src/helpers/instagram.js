import React from 'react'
import { api, urls } from '../config'

const  url = urls.getPhotos;

export async function getToken(){
    return  true;
    // const res = await fetch(url,{
    //     method: 'GET',
    //  })
    // const data = await res.json();
    // const arrayData = data.data;
    // let imagesShow = [];
    // for(let i = 0; imagesShow.length < 10; i++ ){
    //     if(arrayData[i].type !== 'video'){
    //         imagesShow.push(arrayData[i]);
    //     }
    // }
    // return imagesShow;
}
