import './index.css'

import * as THREE from 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import Threeasy from 'threeasy'

const app = new Threeasy(THREE, {alpha: true})

var loader = new GLTFLoader()
let modelUrl = './src/model/scene.gltf'

loader.load(
  modelUrl,
  function (gltf) {
    console.log(gltf.scene)
    gltf.scene.scale.x = 0.15
    gltf.scene.scale.y = 0.15
    gltf.scene.scale.z = 0.15

    gltf.scene.rotation.x = 1
    gltf.scene.rotation.y = 0.4
    gltf.scene.rotation.z = 0

    app.scene.add(gltf.scene)

    window.addEventListener('scroll', onScroll)

    function onScroll() {
      const scrollY = window.scrollY
      const rotationSpeed = 0.002
      gltf.scene.rotation.x = scrollY * rotationSpeed
      gltf.scene.rotation.y = scrollY * rotationSpeed
    }
  },
  undefined,
  function (e) {
    console.error(e)
  },
)

const light = new THREE.AmbientLight(0xffffff)
light.intensity = 3

app.scene.add(light)
