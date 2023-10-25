import 'restyle.css/dist/restyle.css'
import 'restyle.css/dist/checkboxes.css'
import 'src/styles/main.scss'
import 'src/components'
import { Masks } from 'src/modules/masks'

document.addEventListener('DOMContentLoaded', () => {
  new Masks().init()
})
