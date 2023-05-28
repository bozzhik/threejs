import './index.css'
import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import Threeasy from 'threeasy'

const app = new Threeasy(THREE, {alpha: true})
const loader = new GLTFLoader()
const modelUrl = './model/scene.gltf'
let gltf
const scale = 0.15
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
}

window.addEventListener('scroll', onScroll)

const light = new THREE.AmbientLight(0xffffff)
light.intensity = 3

app.scene.add(light)
