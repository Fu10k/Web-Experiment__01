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

//Scene
const scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();

//Camera
const camera = new three__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
// camera.position.set(0, 1, 7)
// camera.lookAt([0, 0, 0])

//Canvas Resize
function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  // camera.perspective({ aspect: gl.canvas.width / gl.canvas.height })
}
window.addEventListener('resize', resize, false);
resize();

//Geometry
const geometry = new three__WEBPACK_IMPORTED_MODULE_3__.IcosahedronGeometry(1.3, 200);

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
const mesh = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhysicalMaterial({
  roughness: 0.56,
  metalness: 0.76,
  clearcoat: 0,
  ior: 2.81,
  iridescence: 0.96
});

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
/******/ 	__webpack_require__.h = () => ("e993eba11b3b565f601a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xN2IyZjEyYjQ0YmM0MzM0MzczNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDOEI7QUFHeUI7QUFDSTtBQUV2QztBQUViLE1BQU1HLEtBQUssQ0FBQztFQUNmQyxXQUFXQSxDQUFBLEVBQUc7SUFDVixJQUFJLENBQUNDLFNBQVMsR0FBR0MsV0FBVyxDQUFDQyxHQUFHLENBQUMsQ0FBQztFQUN0QztFQUVBQyxjQUFjQSxDQUFBLEVBQUc7SUFDYixPQUFPRixXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDRixTQUFTO0VBQzdDO0VBRUFJLFNBQVNBLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ0osU0FBUyxHQUFHQyxXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0VBQ3RDO0FBQ0o7O0FBRUE7QUFDQSxNQUFNRyxLQUFLLEdBQUcsSUFBSVAsS0FBSyxDQUFDLENBQUM7O0FBRXpCO0FBQ0EsTUFBTVEsUUFBUSxHQUFHLElBQUlYLGdEQUFtQixDQUFDO0VBQ3JDYSxLQUFLLEVBQUUsSUFBSTtFQUNYQyxTQUFTLEVBQUU7QUFDZixDQUFDLENBQUM7QUFFRkgsUUFBUSxDQUFDSSxVQUFVLENBQUNDLFNBQVMsR0FBRyxRQUFRO0FBQ3hDQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxDQUFDUixRQUFRLENBQUNJLFVBQVUsQ0FBQzs7QUFFOUM7QUFDQSxNQUFNSyxLQUFLLEdBQUcsSUFBSXBCLHdDQUFXLENBQUMsQ0FBQzs7QUFFL0I7QUFDQSxNQUFNc0IsTUFBTSxHQUFHLElBQUl0QixvREFBdUIsQ0FBQyxFQUFFLEVBQUV3QixNQUFNLENBQUNDLFVBQVUsR0FBR0QsTUFBTSxDQUFDRSxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztBQUNqR0osTUFBTSxDQUFDSyxRQUFRLENBQUNDLENBQUMsR0FBRyxDQUFDO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQSxTQUFTQyxNQUFNQSxDQUFBLEVBQUc7RUFDZGxCLFFBQVEsQ0FBQ21CLE9BQU8sQ0FBQ04sTUFBTSxDQUFDQyxVQUFVLEVBQUVELE1BQU0sQ0FBQ0UsV0FBVyxDQUFDO0VBQ3ZEO0FBQ0o7QUFDQUYsTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVGLE1BQU0sRUFBRSxLQUFLLENBQUM7QUFDaERBLE1BQU0sQ0FBQyxDQUFDOztBQUVSO0FBQ0EsTUFBTUcsUUFBUSxHQUFHLElBQUloQyxzREFBeUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTWtDLElBQUksR0FBRyxJQUFJbEMsdURBQTBCLENBQUM7RUFDeENvQyxTQUFTLEVBQUUsSUFBSTtFQUNmQyxTQUFTLEVBQUUsSUFBSTtFQUNmQyxTQUFTLEVBQUUsQ0FBQztFQUNaQyxHQUFHLEVBQUUsSUFBSTtFQUNUQyxXQUFXLEVBQUU7QUFDakIsQ0FBQyxDQUFDOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQzNGQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1leHBlcmltZW50LTEvLi9zcmMvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYi1leHBlcmltZW50LTEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IENhbWVyYSwgTWVzaCwgUHJvZ3JhbSwgUmVuZGVyZXIsIFNwaGVyZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xyXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcclxuXHJcblxyXG5pbXBvcnQgdmVydGV4IGZyb20gJy4uL3NoYXJlZC9zaGFkZXJzL2Jsb2ItdmVydGV4Lmdsc2wnXHJcbmltcG9ydCBmcmFnbWVudCBmcm9tICcuLi9zaGFyZWQvc2hhZGVycy9ibG9iLWZyYWdtZW50Lmdsc2wnXHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIENsb2NrIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KClcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGFwc2VkVGltZSgpIHtcclxuICAgICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnN0YXJ0VGltZVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VGltZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vQ2xvY2tcclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKVxyXG5cclxuLy9DYW52YXMgQ3JlYXRpb25cclxuY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICBhbHBoYTogdHJ1ZSxcclxuICAgIGFudGlhbGlhczogdHJ1ZVxyXG59KVxyXG5cclxucmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnY2FudmFzJ1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcblxyXG4vL1NjZW5lXHJcbmNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKClcclxuXHJcbi8vQ2FtZXJhXHJcbmNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMClcclxuY2FtZXJhLnBvc2l0aW9uLnogPSA1XHJcbi8vIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMSwgNylcclxuLy8gY2FtZXJhLmxvb2tBdChbMCwgMCwgMF0pXHJcblxyXG4vL0NhbnZhcyBSZXNpemVcclxuZnVuY3Rpb24gcmVzaXplKCkge1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgLy8gY2FtZXJhLnBlcnNwZWN0aXZlKHsgYXNwZWN0OiBnbC5jYW52YXMud2lkdGggLyBnbC5jYW52YXMuaGVpZ2h0IH0pXHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZSwgZmFsc2UpXHJcbnJlc2l6ZSgpXHJcblxyXG4vL0dlb21ldHJ5XHJcbmNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkljb3NhaGVkcm9uR2VvbWV0cnkoMS4zLCAyMDApXHJcblxyXG4vL1Byb2dyYW1cclxuLy8gY29uc3QgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtKGdsLCB7XHJcbi8vICAgICB2ZXJ0ZXgsXHJcbi8vICAgICBmcmFnbWVudCxcclxuLy8gICAgIHVuaWZvcm1zOiB7XHJcbi8vICAgICAgICAgdVRpbWU6IHsgdmFsdWU6IDAgfSxcclxuLy8gICAgICAgICB1TGlnaHREaXJlY3Rpb246IHsgdmFsdWU6IFsxLjAsIDEuMCwgMS4wXSB9LFxyXG4vLyAgICAgICAgIHVBbWJpZW50TGlnaHQ6IHsgdmFsdWU6IFswLjEsIDAuMSwgMC4xXSB9LFxyXG4vLyAgICAgICAgIHVBbHBoYTogeyB2YWx1ZTogMS4wIH1cclxuLy8gICAgIH1cclxuLy8gfSlcclxuXHJcbi8vTWVzaFxyXG5jb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2hQaHlzaWNhbE1hdGVyaWFsKHtcclxuICAgIHJvdWdobmVzczogMC41NixcclxuICAgIG1ldGFsbmVzczogMC43NixcclxuICAgIGNsZWFyY29hdDogMCxcclxuICAgIGlvcjogMi44MSxcclxuICAgIGlyaWRlc2NlbmNlOiAwLjk2LFxyXG59KVxyXG5cclxuLy8gbWVzaC5zZXRQYXJlbnQoc2NlbmUpXHJcblxyXG4vL1JlbmRlclxyXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKVxyXG4vLyBmdW5jdGlvbiB1cGRhdGUoKSB7XHJcbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKVxyXG5cclxuLy8gICAgIHNjZW5lLmNoaWxkcmVuLmZvckVhY2gobWVzaCA9PiB7XHJcbi8vICAgICAgICAgbWVzaC5wcm9ncmFtLnVuaWZvcm1zLnVUaW1lLnZhbHVlID0gY2xvY2suZ2V0RWxhcHNlZFRpbWUoKSAvIDEwMDAwXHJcbi8vICAgICB9KVxyXG5cclxuLy8gICAgIHJlbmRlcmVyLnJlbmRlcih7XHJcbi8vICAgICAgICAgc2NlbmUsXHJcbi8vICAgICAgICAgY2FtZXJhXHJcbi8vICAgICB9KVxyXG4vLyB9IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTk5M2ViYTExYjNiNTY1ZjYwMWFcIikiXSwibmFtZXMiOlsiVEhSRUUiLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsIkNsb2NrIiwiY29uc3RydWN0b3IiLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdldEVsYXBzZWRUaW1lIiwicmVzZXRUaW1lIiwiY2xvY2siLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImRvbUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsInJlc2l6ZSIsInNldFNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2VvbWV0cnkiLCJJY29zYWhlZHJvbkdlb21ldHJ5IiwibWVzaCIsIk1lc2hQaHlzaWNhbE1hdGVyaWFsIiwicm91Z2huZXNzIiwibWV0YWxuZXNzIiwiY2xlYXJjb2F0IiwiaW9yIiwiaXJpZGVzY2VuY2UiXSwic291cmNlUm9vdCI6IiJ9