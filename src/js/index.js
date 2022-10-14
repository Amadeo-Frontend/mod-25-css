import '../scss/styles.scss'
import imageBuilding from '../assets/building.jpg'
import imageNotebook from '../assets/notebook.jpg'

const elemRoot = document.getElementById('root')
elemRoot.classList.add('container')

const elemImageBuilding = new Image()
elemImageBuilding.src = imageBuilding

const elemImageNotebook = new Image()
elemImageNotebook.src = imageNotebook

document.querySelector('#building')
    .appendChild(elemImageBuilding)

document.querySelector('#notebook')
    .appendChild(elemImageNotebook)