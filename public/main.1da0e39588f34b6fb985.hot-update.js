"use strict";
self["webpackHotUpdateweb_experiment_1"]("main",{

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Clock: () => (/* binding */ Clock)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _shared_shaders_blob_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shaders/blob-vertex.glsl */ "./shared/shaders/blob-vertex.glsl");
/* harmony import */ var _shared_shaders_blob_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shaders/blob-fragment.glsl */ "./shared/shaders/blob-fragment.glsl");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// import { Camera, Mesh, Program, Renderer, Sphere, Transform } from 'ogl'




class Clock {
  constructor() {
    this.startTime = performance.now();
  }
  getElapsedTime() {
    return performance.now() - this.startTime;
  }
  resetTime() {
    this.startTime = performance.now();
  }
}

//Clock
const clock = new Clock();

//Canvas Creation
const renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({
  alpha: true,
  antialias: true
});
renderer.domElement.className = 'canvas';
document.body.appendChild(renderer.domElement);

//Camera
// const camera = new Camera(gl)
// camera.position.z = 3
// camera.position.set(0, 1, 7)
// camera.lookAt([0, 0, 0])

//Canvas Resize
function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  // camera.perspective({ aspect: gl.canvas.width / gl.canvas.height })
}
window.addEventListener('resize', resize, false);
resize();

//Scene
const scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();

//Geometry
// const geometry = new Sphere(gl, {
//     widthSegments: 1000
// })

//Program
// const program = new Program(gl, {
//     vertex,
//     fragment,
//     uniforms: {
//         uTime: { value: 0 },
//         uLightDirection: { value: [1.0, 1.0, 1.0] },
//         uAmbientLight: { value: [0.1, 0.1, 0.1] },
//         uAlpha: { value: 1.0 }
//     }
// })

//Mesh
// const mesh = new Mesh(gl, {
//     geometry,
//     program
// })

// mesh.setParent(scene)

//Render
// requestAnimationFrame(update)
// function update() {
//     requestAnimationFrame(update)

//     scene.children.forEach(mesh => {
//         mesh.program.uniforms.uTime.value = clock.getElapsedTime() / 10000
//     })

//     renderer.render({
//         scene,
//         camera
//     })
// }

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7c59b44414b4d1fe5eff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xZGEwZTM5NTg4ZjM0YjZmYjk4NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDOEI7QUFHeUI7QUFDSTtBQUV2QztBQUViLE1BQU1HLEtBQUssQ0FBQztFQUNmQyxXQUFXQSxDQUFBLEVBQUc7SUFDVixJQUFJLENBQUNDLFNBQVMsR0FBR0MsV0FBVyxDQUFDQyxHQUFHLENBQUMsQ0FBQztFQUN0QztFQUVBQyxjQUFjQSxDQUFBLEVBQUc7SUFDYixPQUFPRixXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDRixTQUFTO0VBQzdDO0VBRUFJLFNBQVNBLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ0osU0FBUyxHQUFHQyxXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0VBQ3RDO0FBQ0o7O0FBRUE7QUFDQSxNQUFNRyxLQUFLLEdBQUcsSUFBSVAsS0FBSyxDQUFDLENBQUM7O0FBRXpCO0FBQ0EsTUFBTVEsUUFBUSxHQUFHLElBQUlYLGdEQUFtQixDQUFDO0VBQ3JDYSxLQUFLLEVBQUUsSUFBSTtFQUNYQyxTQUFTLEVBQUU7QUFDZixDQUFDLENBQUM7QUFFRkgsUUFBUSxDQUFDSSxVQUFVLENBQUNDLFNBQVMsR0FBRyxRQUFRO0FBQ3hDQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxDQUFDUixRQUFRLENBQUNJLFVBQVUsQ0FBQzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVNLLE1BQU1BLENBQUEsRUFBRztFQUNkVCxRQUFRLENBQUNVLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVLEVBQUVELE1BQU0sQ0FBQ0UsV0FBVyxDQUFDO0VBQ3ZEO0FBQ0o7QUFDQUYsTUFBTSxDQUFDRyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVMLE1BQU0sRUFBRSxLQUFLLENBQUM7QUFDaERBLE1BQU0sQ0FBQyxDQUFDOztBQUVSO0FBQ0EsTUFBTU0sS0FBSyxHQUFHLElBQUkxQix3Q0FBVyxDQUFDLENBQUM7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUMxRkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItZXhwZXJpbWVudC0xLy4vc3JjL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly93ZWItZXhwZXJpbWVudC0xL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBDYW1lcmEsIE1lc2gsIFByb2dyYW0sIFJlbmRlcmVyLCBTcGhlcmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcblxyXG5cclxuaW1wb3J0IHZlcnRleCBmcm9tICcuLi9zaGFyZWQvc2hhZGVycy9ibG9iLXZlcnRleC5nbHNsJ1xyXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnLi4vc2hhcmVkL3NoYWRlcnMvYmxvYi1mcmFnbWVudC5nbHNsJ1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9jayB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxhcHNlZFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWVcclxuICAgIH1cclxuXHJcbiAgICByZXNldFRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKVxyXG4gICAgfVxyXG59XHJcblxyXG4vL0Nsb2NrXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKClcclxuXHJcbi8vQ2FudmFzIENyZWF0aW9uXHJcbmNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgYWxwaGE6IHRydWUsXHJcbiAgICBhbnRpYWxpYXM6IHRydWVcclxufSlcclxuXHJcbnJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJ2NhbnZhcydcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxyXG5cclxuLy9DYW1lcmFcclxuLy8gY29uc3QgY2FtZXJhID0gbmV3IENhbWVyYShnbClcclxuLy8gY2FtZXJhLnBvc2l0aW9uLnogPSAzXHJcbi8vIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMSwgNylcclxuLy8gY2FtZXJhLmxvb2tBdChbMCwgMCwgMF0pXHJcblxyXG4vL0NhbnZhcyBSZXNpemVcclxuZnVuY3Rpb24gcmVzaXplKCkge1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgLy8gY2FtZXJhLnBlcnNwZWN0aXZlKHsgYXNwZWN0OiBnbC5jYW52YXMud2lkdGggLyBnbC5jYW52YXMuaGVpZ2h0IH0pXHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZSwgZmFsc2UpXHJcbnJlc2l6ZSgpXHJcblxyXG4vL1NjZW5lXHJcbmNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKClcclxuXHJcbi8vR2VvbWV0cnlcclxuLy8gY29uc3QgZ2VvbWV0cnkgPSBuZXcgU3BoZXJlKGdsLCB7XHJcbi8vICAgICB3aWR0aFNlZ21lbnRzOiAxMDAwXHJcbi8vIH0pXHJcblxyXG4vL1Byb2dyYW1cclxuLy8gY29uc3QgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtKGdsLCB7XHJcbi8vICAgICB2ZXJ0ZXgsXHJcbi8vICAgICBmcmFnbWVudCxcclxuLy8gICAgIHVuaWZvcm1zOiB7XHJcbi8vICAgICAgICAgdVRpbWU6IHsgdmFsdWU6IDAgfSxcclxuLy8gICAgICAgICB1TGlnaHREaXJlY3Rpb246IHsgdmFsdWU6IFsxLjAsIDEuMCwgMS4wXSB9LFxyXG4vLyAgICAgICAgIHVBbWJpZW50TGlnaHQ6IHsgdmFsdWU6IFswLjEsIDAuMSwgMC4xXSB9LFxyXG4vLyAgICAgICAgIHVBbHBoYTogeyB2YWx1ZTogMS4wIH1cclxuLy8gICAgIH1cclxuLy8gfSlcclxuXHJcbi8vTWVzaFxyXG4vLyBjb25zdCBtZXNoID0gbmV3IE1lc2goZ2wsIHtcclxuLy8gICAgIGdlb21ldHJ5LFxyXG4vLyAgICAgcHJvZ3JhbVxyXG4vLyB9KVxyXG5cclxuLy8gbWVzaC5zZXRQYXJlbnQoc2NlbmUpXHJcblxyXG4vL1JlbmRlclxyXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKVxyXG4vLyBmdW5jdGlvbiB1cGRhdGUoKSB7XHJcbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKVxyXG5cclxuLy8gICAgIHNjZW5lLmNoaWxkcmVuLmZvckVhY2gobWVzaCA9PiB7XHJcbi8vICAgICAgICAgbWVzaC5wcm9ncmFtLnVuaWZvcm1zLnVUaW1lLnZhbHVlID0gY2xvY2suZ2V0RWxhcHNlZFRpbWUoKSAvIDEwMDAwXHJcbi8vICAgICB9KVxyXG5cclxuLy8gICAgIHJlbmRlcmVyLnJlbmRlcih7XHJcbi8vICAgICAgICAgc2NlbmUsXHJcbi8vICAgICAgICAgY2FtZXJhXHJcbi8vICAgICB9KVxyXG4vLyB9IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2M1OWI0NDQxNGI0ZDFmZTVlZmZcIikiXSwibmFtZXMiOlsiVEhSRUUiLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsIkNsb2NrIiwiY29uc3RydWN0b3IiLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdldEVsYXBzZWRUaW1lIiwicmVzZXRUaW1lIiwiY2xvY2siLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImRvbUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlc2l6ZSIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwic2NlbmUiLCJTY2VuZSJdLCJzb3VyY2VSb290IjoiIn0=