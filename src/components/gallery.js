import React from 'react';

import TitleAnimate from './titleAnimate'

let gallery;
export default gallery = (props) => {

    const redirect = (url) => {
        window.open(url);
    }

    return (
        <div className='contentGallery'>
            {/* <TitleAnimate text={<h1 className='titleSection'>Galería</h1>} />
            <div className='containerImages'>
                {props.gallery &&
                    props.gallery.map((img,i) => {
                        return (
                            <div className='imageInst'
                                style={{backgroundImage: `url(${img.images.standard_resolution.url})`}}
                                onClick={()=>redirect(img.link)}
                            >
                                <div className='maskImg'></div>
                            </div>
                        )
                    })
                }
            </div> */}
        </div>
    );
};
