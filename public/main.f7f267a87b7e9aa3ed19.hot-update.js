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
sc;

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
const material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhysicalMaterial({
  roughness: 0.56,
  metalness: 0.76,
  clearcoat: 0,
  ior: 2.81,
  iridescence: 0.96
});
const mesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, material);
mesh.setParent(scene);

//Render
// requestAnimationFrame(update)
// function update() {
//     requestAnimationFrame(update)

//     scene.children.forEach(mesh => {
//         mesh.program.uniforms.uTime.value = clock.getElapsedTime() / 10000
//     })

renderer.render({
  scene,
  camera
});
// }

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0b9e5cf09557f860877a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mN2YyNjdhODdiN2U5YWEzZWQxOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDOEI7QUFHeUI7QUFDSTtBQUV2QztBQUViLE1BQU1HLEtBQUssQ0FBQztFQUNmQyxXQUFXQSxDQUFBLEVBQUc7SUFDVixJQUFJLENBQUNDLFNBQVMsR0FBR0MsV0FBVyxDQUFDQyxHQUFHLENBQUMsQ0FBQztFQUN0QztFQUVBQyxjQUFjQSxDQUFBLEVBQUc7SUFDYixPQUFPRixXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDRixTQUFTO0VBQzdDO0VBRUFJLFNBQVNBLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ0osU0FBUyxHQUFHQyxXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0VBQ3RDO0FBQ0o7O0FBRUE7QUFDQSxNQUFNRyxLQUFLLEdBQUcsSUFBSVAsS0FBSyxDQUFDLENBQUM7O0FBRXpCO0FBQ0EsTUFBTVEsUUFBUSxHQUFHLElBQUlYLGdEQUFtQixDQUFDO0VBQ3JDYSxLQUFLLEVBQUUsSUFBSTtFQUNYQyxTQUFTLEVBQUU7QUFDZixDQUFDLENBQUM7QUFFRkgsUUFBUSxDQUFDSSxVQUFVLENBQUNDLFNBQVMsR0FBRyxRQUFRO0FBQ3hDQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxDQUFDUixRQUFRLENBQUNJLFVBQVUsQ0FBQzs7QUFFOUM7QUFDQSxNQUFNSyxLQUFLLEdBQUcsSUFBSXBCLHdDQUFXLENBQUMsQ0FBQzs7QUFFL0I7QUFDQSxNQUFNc0IsTUFBTSxHQUFHLElBQUl0QixvREFBdUIsQ0FBQyxFQUFFLEVBQUV3QixNQUFNLENBQUNDLFVBQVUsR0FBR0QsTUFBTSxDQUFDRSxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztBQUNqR0osTUFBTSxDQUFDSyxRQUFRLENBQUNDLENBQUMsR0FBRyxDQUFDO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQSxTQUFTQyxNQUFNQSxDQUFBLEVBQUc7RUFDZGxCLFFBQVEsQ0FBQ21CLE9BQU8sQ0FBQ04sTUFBTSxDQUFDQyxVQUFVLEVBQUVELE1BQU0sQ0FBQ0UsV0FBVyxDQUFDO0VBQ3ZEO0FBQ0o7QUFDQUYsTUFBTSxDQUFDTyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVGLE1BQU0sRUFBRSxLQUFLLENBQUM7QUFDaERBLE1BQU0sQ0FBQyxDQUFDOztBQUVSO0FBQ0EsTUFBTUcsUUFBUSxHQUFHLElBQUloQyxzREFBeUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBRXhEa0MsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQUluQyx1REFBMEIsQ0FBQztFQUM1Q3FDLFNBQVMsRUFBRSxJQUFJO0VBQ2ZDLFNBQVMsRUFBRSxJQUFJO0VBQ2ZDLFNBQVMsRUFBRSxDQUFDO0VBQ1pDLEdBQUcsRUFBRSxJQUFJO0VBQ1RDLFdBQVcsRUFBRTtBQUNqQixDQUFDLENBQUM7QUFFRixNQUFNQyxJQUFJLEdBQUcsSUFBSTFDLHVDQUFVLENBQUNnQyxRQUFRLEVBQUVHLFFBQVEsQ0FBQztBQUUvQ08sSUFBSSxDQUFDRSxTQUFTLENBQUN4QixLQUFLLENBQUM7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFSVQsUUFBUSxDQUFDa0MsTUFBTSxDQUFDO0VBQ1p6QixLQUFLO0VBQ0xFO0FBQ0osQ0FBQyxDQUFDO0FBQ047Ozs7Ozs7O1VDL0ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWV4cGVyaW1lbnQtMS8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vd2ViLWV4cGVyaW1lbnQtMS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQ2FtZXJhLCBNZXNoLCBQcm9ncmFtLCBSZW5kZXJlciwgU3BoZXJlLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xyXG5cclxuXHJcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnLi4vc2hhcmVkL3NoYWRlcnMvYmxvYi12ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGZyYWdtZW50IGZyb20gJy4uL3NoYXJlZC9zaGFkZXJzL2Jsb2ItZnJhZ21lbnQuZ2xzbCdcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvY2sge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEVsYXBzZWRUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRUaW1lKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KClcclxuICAgIH1cclxufVxyXG5cclxuLy9DbG9ja1xyXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jaygpXHJcblxyXG4vL0NhbnZhcyBDcmVhdGlvblxyXG5jb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgIGFscGhhOiB0cnVlLFxyXG4gICAgYW50aWFsaWFzOiB0cnVlXHJcbn0pXHJcblxyXG5yZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICdjYW52YXMnXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcclxuXHJcbi8vU2NlbmVcclxuY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKVxyXG5cclxuLy9DYW1lcmFcclxuY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKVxyXG5jYW1lcmEucG9zaXRpb24ueiA9IDVcclxuLy8gY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAxLCA3KVxyXG4vLyBjYW1lcmEubG9va0F0KFswLCAwLCAwXSlcclxuXHJcbi8vQ2FudmFzIFJlc2l6ZVxyXG5mdW5jdGlvbiByZXNpemUoKSB7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICAvLyBjYW1lcmEucGVyc3BlY3RpdmUoeyBhc3BlY3Q6IGdsLmNhbnZhcy53aWR0aCAvIGdsLmNhbnZhcy5oZWlnaHQgfSlcclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplLCBmYWxzZSlcclxucmVzaXplKClcclxuXHJcbi8vR2VvbWV0cnlcclxuY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuSWNvc2FoZWRyb25HZW9tZXRyeSgxLjMsIDIwMClcclxuXHJcbnNjXHJcblxyXG4vL1Byb2dyYW1cclxuLy8gY29uc3QgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtKGdsLCB7XHJcbi8vICAgICB2ZXJ0ZXgsXHJcbi8vICAgICBmcmFnbWVudCxcclxuLy8gICAgIHVuaWZvcm1zOiB7XHJcbi8vICAgICAgICAgdVRpbWU6IHsgdmFsdWU6IDAgfSxcclxuLy8gICAgICAgICB1TGlnaHREaXJlY3Rpb246IHsgdmFsdWU6IFsxLjAsIDEuMCwgMS4wXSB9LFxyXG4vLyAgICAgICAgIHVBbWJpZW50TGlnaHQ6IHsgdmFsdWU6IFswLjEsIDAuMSwgMC4xXSB9LFxyXG4vLyAgICAgICAgIHVBbHBoYTogeyB2YWx1ZTogMS4wIH1cclxuLy8gICAgIH1cclxuLy8gfSlcclxuXHJcbi8vTWVzaFxyXG5jb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGh5c2ljYWxNYXRlcmlhbCh7XHJcbiAgICByb3VnaG5lc3M6IDAuNTYsXHJcbiAgICBtZXRhbG5lc3M6IDAuNzYsXHJcbiAgICBjbGVhcmNvYXQ6IDAsXHJcbiAgICBpb3I6IDIuODEsXHJcbiAgICBpcmlkZXNjZW5jZTogMC45NixcclxufSlcclxuXHJcbmNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpXHJcblxyXG5tZXNoLnNldFBhcmVudChzY2VuZSlcclxuXHJcbi8vUmVuZGVyXHJcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXHJcbi8vIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXHJcblxyXG4vLyAgICAgc2NlbmUuY2hpbGRyZW4uZm9yRWFjaChtZXNoID0+IHtcclxuLy8gICAgICAgICBtZXNoLnByb2dyYW0udW5pZm9ybXMudVRpbWUudmFsdWUgPSBjbG9jay5nZXRFbGFwc2VkVGltZSgpIC8gMTAwMDBcclxuLy8gICAgIH0pXHJcblxyXG4gICAgcmVuZGVyZXIucmVuZGVyKHtcclxuICAgICAgICBzY2VuZSxcclxuICAgICAgICBjYW1lcmFcclxuICAgIH0pXHJcbi8vIH0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwYjllNWNmMDk1NTdmODYwODc3YVwiKSJdLCJuYW1lcyI6WyJUSFJFRSIsInZlcnRleCIsImZyYWdtZW50IiwiQ2xvY2siLCJjb25zdHJ1Y3RvciIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiZ2V0RWxhcHNlZFRpbWUiLCJyZXNldFRpbWUiLCJjbG9jayIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwiYW50aWFsaWFzIiwiZG9tRWxlbWVudCIsImNsYXNzTmFtZSIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwicmVzaXplIiwic2V0U2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZW9tZXRyeSIsIkljb3NhaGVkcm9uR2VvbWV0cnkiLCJzYyIsIm1hdGVyaWFsIiwiTWVzaFBoeXNpY2FsTWF0ZXJpYWwiLCJyb3VnaG5lc3MiLCJtZXRhbG5lc3MiLCJjbGVhcmNvYXQiLCJpb3IiLCJpcmlkZXNjZW5jZSIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==