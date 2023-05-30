import './index.css'
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import Threeasy from 'threeasy'

import {pageHydration} from './hydration'

const app = new Threeasy(THREE, {alpha: true})
const loader = new GLTFLoader()
const modelUrl = './model/scene.gltf'
let gltf
const scale = window.innerWidth <= 768 ? 0.08 : 0.15

// const rotation = {x: 1, y: 0.4, z: 0}

const loaderElement = document.getElementById('LOADER')

loader.load(
  modelUrl,
  function (loadedGltf) {
    gltf = loadedGltf
    gltf.scene.scale.set(scale, scale, scale)
    // gltf.scene.rotation.set(rotation.x, rotation.y, rotation.z)
    app.scene.add(gltf.scene)

    loaderElement.style.display = 'none'

    pageHydration()
  },
  undefined,
  function (e) {
    console.error(e)
    loaderElement.style.display = 'none'
  },
)

function onScroll() {
  const scrollY = window.scrollY
  const rotationSpeed = 0.002
  gltf.scene.rotation.x = scrollY * rotationSpeed
  gltf.scene.rotation.y = scrollY * rotationSpeed

  // //? hide on scroll
  // const titleElement = document.querySelector('.text-6xl')
  // const titleHeight = titleElement.offsetHeight + 150

  // if (scrollY >= titleHeight) {
  //   app.renderer.domElement.style.zIndex = '-50'
  //   app.renderer.domElement.style.opacity = '0.5'
  //   app.renderer.domElement.style.filter = 'blur(4px)'
  // } else {
  //   app.renderer.domElement.style.zIndex = '1'
  //   app.renderer.domElement.style.opacity = '1'
  //   app.renderer.domElement.style.filter = 'blur(0px)'
  // }
}

window.addEventListener('scroll', onScroll)

const light = new THREE.AmbientLight(0xffffff)
light.intensity = 3

app.scene.add(light)
