import React from 'react'
import { api, urls } from '../config'

require('es6-promise').polyfill()
require('isomorphic-fetch')

const headerAuth = {'Authorization': `Basic ${window.btoa(api.user+ ':' +api.token)}`}
const url = urls.items

export async function getBeers(){
  const res = await fetch(url,{
      method: 'GET',
      headers: headerAuth,
    })
  const data = await res.text()
  const beers = JSON.parse(data)
  return beers
} 