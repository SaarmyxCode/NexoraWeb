import theme from './products/theme.json'
import rename from './products/rename.json'
import songs from './products/songs.json'
import finance from './products/finance.json'
import code from './products/code.json'
import browser from './products/browser.json'
import mail from './products/mail.json'
import cloud from './products/cloud.json'
import photos from './products/photos.json'
import calendar from './products/calendar.json'
import share from './products/share.json'
import closet from './products/closet.json'
import bank from './products/bank.json'
import os from './products/os.json'
import soporteData from './soporte.json'

const allProducts = [
  theme,
  rename,
  songs,
  finance,
  code,
  browser,
  mail,
  cloud,
  photos,
  calendar,
  share,
  closet,
  bank,
  os,
]

// Filtra automáticamente y exporta solo aquellos que tengan "enabled": true
export const activeProducts = allProducts.filter((product) => product.enabled)

export const productsMap = activeProducts.reduce((acc, product) => {
  acc[product.id] = product
  return acc
}, {})

export const getProduct = (id) => productsMap[id] || null
export const soporte = soporteData
