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
mesh.setParent(scene);

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
/******/ 	__webpack_require__.h = () => ("6a400fafc96e38dd210b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lOTkzZWJhMTFiM2I1NjVmNjAxYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDOEI7QUFHeUI7QUFDSTtBQUV2QztBQUViLE1BQU1HLEtBQUssQ0FBQztFQUNmQyxXQUFXQSxDQUFBLEVBQUc7SUFDVixJQUFJLENBQUNDLFNBQVMsR0FBR0MsV0FBVyxDQUFDQyxHQUFHLENBQUMsQ0FBQztFQUN0QztFQUVBQyxjQUFjQSxDQUFBLEVBQUc7SUFDYixPQUFPRixXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDRixTQUFTO0VBQzdDO0VBRUFJLFNBQVNBLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ0osU0FBUyxHQUFHQyxXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0VBQ3RDO0FBQ0o7O0FBRUE7QUFDQSxNQUFNRyxLQUFLLEdBQUcsSUFBSVAsS0FBSyxDQUFDLENBQUM7O0FBRXpCO0FBQ0EsTUFBTVEsUUFBUSxHQUFHLElBQUlYLGdEQUFtQixDQUFDO0VBQ3JDYSxLQUFLLEVBQUUsSUFBSTtFQUNYQyxTQUFTLEVBQUU7QUFDZixDQUFDLENBQUM7QUFFRkgsUUFBUSxDQUFDSSxVQUFVLENBQUNDLFNBQVMsR0FBRyxRQUFRO0FBQ3hDQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxDQUFDUixRQUFRLENBQUNJLFVBQVUsQ0FBQzs7QUFFOUM7QUFDQSxNQUFNSyxLQUFLLEdBQUcsSUFBSXBCLHdDQUFXLENBQUMsQ0FBQzs7QUFFL0I7QUFDQSxNQUFNc0IsTUFBTSxHQUFHLElBQUl0QixvREFBdUIsQ0FBQyxFQUFFLEVBQUV3QixNQUFNLENBQUNDLFVBQVUsR0FBR0QsTUFBTSxDQUFDRSxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztBQUNqR0osTUFBTSxDQUFDSyxRQUFRLENBQUNDLENBQUMsR0FBRyxDQUFDO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQSxTQUFTQyxNQUFNQSxDQUFBLEVBQUc7RUFDZGxCLFFBQVEsQ0FBQ21CLE9BQU8sQ0FBQ04sTUFBTSxDQUFDQyxVQUFVLEVBQUVELE1BQU0sQ0FBQ0UsV0FBVyxDQUFDO0VBQ3ZEO0FBQ0o7QUFDQUYsTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVGLE1BQU0sRUFBRSxLQUFLLENBQUM7QUFDaERBLE1BQU0sQ0FBQyxDQUFDOztBQUVSO0FBQ0EsTUFBTUcsUUFBUSxHQUFHLElBQUloQyxzREFBeUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTWtDLElBQUksR0FBRyxJQUFJbEMsdURBQTBCLENBQUM7RUFDeENvQyxTQUFTLEVBQUUsSUFBSTtFQUNmQyxTQUFTLEVBQUUsSUFBSTtFQUNmQyxTQUFTLEVBQUUsQ0FBQztFQUNaQyxHQUFHLEVBQUUsSUFBSTtFQUNUQyxXQUFXLEVBQUU7QUFDakIsQ0FBQyxDQUFDO0FBRUZOLElBQUksQ0FBQ08sU0FBUyxDQUFDckIsS0FBSyxDQUFDOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUMzRkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItZXhwZXJpbWVudC0xLy4vc3JjL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly93ZWItZXhwZXJpbWVudC0xL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBDYW1lcmEsIE1lc2gsIFByb2dyYW0sIFJlbmRlcmVyLCBTcGhlcmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcblxyXG5cclxuaW1wb3J0IHZlcnRleCBmcm9tICcuLi9zaGFyZWQvc2hhZGVycy9ibG9iLXZlcnRleC5nbHNsJ1xyXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnLi4vc2hhcmVkL3NoYWRlcnMvYmxvYi1mcmFnbWVudC5nbHNsJ1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9jayB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxhcHNlZFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWVcclxuICAgIH1cclxuXHJcbiAgICByZXNldFRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKVxyXG4gICAgfVxyXG59XHJcblxyXG4vL0Nsb2NrXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKClcclxuXHJcbi8vQ2FudmFzIENyZWF0aW9uXHJcbmNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgYWxwaGE6IHRydWUsXHJcbiAgICBhbnRpYWxpYXM6IHRydWVcclxufSlcclxuXHJcbnJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJ2NhbnZhcydcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxyXG5cclxuLy9TY2VuZVxyXG5jb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpXHJcblxyXG4vL0NhbWVyYVxyXG5jb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApXHJcbmNhbWVyYS5wb3NpdGlvbi56ID0gNVxyXG4vLyBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDEsIDcpXHJcbi8vIGNhbWVyYS5sb29rQXQoWzAsIDAsIDBdKVxyXG5cclxuLy9DYW52YXMgUmVzaXplXHJcbmZ1bmN0aW9uIHJlc2l6ZSgpIHtcclxuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcclxuICAgIC8vIGNhbWVyYS5wZXJzcGVjdGl2ZSh7IGFzcGVjdDogZ2wuY2FudmFzLndpZHRoIC8gZ2wuY2FudmFzLmhlaWdodCB9KVxyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUsIGZhbHNlKVxyXG5yZXNpemUoKVxyXG5cclxuLy9HZW9tZXRyeVxyXG5jb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5JY29zYWhlZHJvbkdlb21ldHJ5KDEuMywgMjAwKVxyXG5cclxuLy9Qcm9ncmFtXHJcbi8vIGNvbnN0IHByb2dyYW0gPSBuZXcgUHJvZ3JhbShnbCwge1xyXG4vLyAgICAgdmVydGV4LFxyXG4vLyAgICAgZnJhZ21lbnQsXHJcbi8vICAgICB1bmlmb3Jtczoge1xyXG4vLyAgICAgICAgIHVUaW1lOiB7IHZhbHVlOiAwIH0sXHJcbi8vICAgICAgICAgdUxpZ2h0RGlyZWN0aW9uOiB7IHZhbHVlOiBbMS4wLCAxLjAsIDEuMF0gfSxcclxuLy8gICAgICAgICB1QW1iaWVudExpZ2h0OiB7IHZhbHVlOiBbMC4xLCAwLjEsIDAuMV0gfSxcclxuLy8gICAgICAgICB1QWxwaGE6IHsgdmFsdWU6IDEuMCB9XHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vL01lc2hcclxuY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoUGh5c2ljYWxNYXRlcmlhbCh7XHJcbiAgICByb3VnaG5lc3M6IDAuNTYsXHJcbiAgICBtZXRhbG5lc3M6IDAuNzYsXHJcbiAgICBjbGVhcmNvYXQ6IDAsXHJcbiAgICBpb3I6IDIuODEsXHJcbiAgICBpcmlkZXNjZW5jZTogMC45NixcclxufSlcclxuXHJcbm1lc2guc2V0UGFyZW50KHNjZW5lKVxyXG5cclxuLy9SZW5kZXJcclxuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSlcclxuLy8gZnVuY3Rpb24gdXBkYXRlKCkge1xyXG4vLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSlcclxuXHJcbi8vICAgICBzY2VuZS5jaGlsZHJlbi5mb3JFYWNoKG1lc2ggPT4ge1xyXG4vLyAgICAgICAgIG1lc2gucHJvZ3JhbS51bmlmb3Jtcy51VGltZS52YWx1ZSA9IGNsb2NrLmdldEVsYXBzZWRUaW1lKCkgLyAxMDAwMFxyXG4vLyAgICAgfSlcclxuXHJcbi8vICAgICByZW5kZXJlci5yZW5kZXIoe1xyXG4vLyAgICAgICAgIHNjZW5lLFxyXG4vLyAgICAgICAgIGNhbWVyYVxyXG4vLyAgICAgfSlcclxuLy8gfSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZhNDAwZmFmYzk2ZTM4ZGQyMTBiXCIpIl0sIm5hbWVzIjpbIlRIUkVFIiwidmVydGV4IiwiZnJhZ21lbnQiLCJDbG9jayIsImNvbnN0cnVjdG9yIiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJnZXRFbGFwc2VkVGltZSIsInJlc2V0VGltZSIsImNsb2NrIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJkb21FbGVtZW50IiwiY2xhc3NOYW1lIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInoiLCJyZXNpemUiLCJzZXRTaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdlb21ldHJ5IiwiSWNvc2FoZWRyb25HZW9tZXRyeSIsIm1lc2giLCJNZXNoUGh5c2ljYWxNYXRlcmlhbCIsInJvdWdobmVzcyIsIm1ldGFsbmVzcyIsImNsZWFyY29hdCIsImlvciIsImlyaWRlc2NlbmNlIiwic2V0UGFyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==