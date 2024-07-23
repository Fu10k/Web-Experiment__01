import * as THREE from 'three'
import CustomShaderMaterial from 'three-custom-shader-material/vanilla'

import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils'

import vertex from '../shared/shaders/blob-vertex.glsl'
import fragment from '../shared/shaders/blob-fragment.glsl'

import './style.css'

export class Clock {
    constructor() {
        this.startTime = performance.now()
    }

    getElapsedTime() {
        return performance.now() - this.startTime
    }

    resetTime() {
        this.startTime = performance.now()
    }
}

//Clock
const clock = new Clock()

//Canvas Creation
const renderer = new THREE.WebGLRenderer({
    alpha: false,
    antialias: true
})

renderer.domElement.className = 'canvas'
document.body.appendChild(renderer.domElement)

//Scene
const scene = new THREE.Scene()

//Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 6

//Canvas Resize
function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight)
}
window.addEventListener('resize', resize, false)
resize()

//Geometry
const geometry = mergeVertices(new THREE.IcosahedronGeometry(1.3, 200))
geometry.computeTangents()

//Light
const ambientLight = new THREE.AmbientLight(0xffffff, 1)
const directionalLight = new THREE.DirectionalLight(0xffffff, 5)

directionalLight.position.set(-2, 2, 3.5)

//Uniforms
const uniforms = {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#6D9886') },
    uGradientStrength: { value: 1 },
    uSpeed: { value: 0.71 },
    uNoiseStrength: { value: 3 },
    uDisplacementStrength: { value: 1 },
    uFractAmount: { value: 1 },
}

//Mesh
const mesh = new THREE.Mesh(
    geometry, 
    new CustomShaderMaterial({
        silent: true,
        baseMaterial: THREE.MeshPhysicalMaterial,
        vertexShader: vertex,
        fragmentShader: fragment,
        roughness: 0.53,
        metalness: 0.76,
        clearcoat: 0,
        reflectivity: 1,
        ior: 1.56,
        iridescence: 1,
        uniforms: uniforms
    }),

    new CustomShaderMaterial({
        baseMaterial: THREE.MeshDepthMaterial,
        vertexShader: vertex,
        uniforms: uniforms,
        silent: true,
        depthPacking: THREE.RGBADepthPacking,
    })
)

scene.add(mesh)
scene.add(directionalLight)
scene.add(ambientLight)

//Render
requestAnimationFrame(update)
function update() {
    requestAnimationFrame(update)

    // scene.children.forEach(mesh => {
        uniforms.uTime.value = clock.getElapsedTime() / 1000
    // })

    renderer.render( scene, camera )
}