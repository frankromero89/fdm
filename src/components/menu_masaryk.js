import React from 'react'
import FeatherIcon from 'feather-icons-react';

export default function MenuMasaryk(props) {
  return(
    <div className={`containerMenu ${props.active&& 'active'}`}>
      <div className={`imgMenu ${props.active&& 'active'}`}></div>
      <div className={`menu ${props.active&& 'active'}`}>
        <FeatherIcon
          icon="x-circle"
          size='30'
          onClick={props.hiddenMenu}
        />
      </div>
    </div>
  )
}
