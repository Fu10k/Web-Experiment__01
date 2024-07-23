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
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_custom_shader_material_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three-custom-shader-material/vanilla */ "./node_modules/three-custom-shader-material/vanilla/dist/three-custom-shader-material-vanilla.esm.js");
/* harmony import */ var _shared_shaders_blob_vertex_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shaders/blob-vertex.glsl */ "./shared/shaders/blob-vertex.glsl");
/* harmony import */ var _shared_shaders_blob_fragment_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shaders/blob-fragment.glsl */ "./shared/shaders/blob-fragment.glsl");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





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
const renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({
  alpha: false,
  antialias: true
});
renderer.domElement.className = 'canvas';
document.body.appendChild(renderer.domElement);

//Scene
const scene = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();

//Camera
const camera = new three__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
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
const geometry = new three__WEBPACK_IMPORTED_MODULE_4__.IcosahedronGeometry(1.3, 200);

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

//Light
const ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xffffff);
const directionalLight = new three__WEBPACK_IMPORTED_MODULE_4__.DirectionalLight({
  intensity: 0.5,
  position: [-2, 2, 3.5]
});

//Mesh
const mesh = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(geometry, new three_custom_shader_material_vanilla__WEBPACK_IMPORTED_MODULE_0__["default"]({
  silent: true,
  baseMaterial: three__WEBPACK_IMPORTED_MODULE_4__.MeshPhysicalMaterial,
  roughness: 0.56,
  metalness: 0.76,
  clearcoat: 0,
  ior: 2.81,
  iridescence: 0.96
}));
scene.add(ambientLight);
scene.add(directionalLight);
scene.add(mesh);

//Render
requestAnimationFrame(update);
function update() {
  requestAnimationFrame(update);

  //     scene.children.forEach(mesh => {
  //         mesh.program.uniforms.uTime.value = clock.getElapsedTime() / 10000
  //     })

  renderer.render(scene, camera);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ddb38c70243d2fe15a11")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xNzZkODUzMzBiNzY4NDg0ZjQ3Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUN5QztBQUVoQjtBQUNJO0FBRXZDO0FBRWIsTUFBTUksS0FBSyxDQUFDO0VBQ2ZDLFdBQVdBLENBQUEsRUFBRztJQUNWLElBQUksQ0FBQ0MsU0FBUyxHQUFHQyxXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0VBQ3RDO0VBRUFDLGNBQWNBLENBQUEsRUFBRztJQUNiLE9BQU9GLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNGLFNBQVM7RUFDN0M7RUFFQUksU0FBU0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDSixTQUFTLEdBQUdDLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7RUFDdEM7QUFDSjs7QUFFQTtBQUNBLE1BQU1HLEtBQUssR0FBRyxJQUFJUCxLQUFLLENBQUMsQ0FBQzs7QUFFekI7QUFDQSxNQUFNUSxRQUFRLEdBQUcsSUFBSVosZ0RBQW1CLENBQUM7RUFDckNjLEtBQUssRUFBRSxLQUFLO0VBQ1pDLFNBQVMsRUFBRTtBQUNmLENBQUMsQ0FBQztBQUVGSCxRQUFRLENBQUNJLFVBQVUsQ0FBQ0MsU0FBUyxHQUFHLFFBQVE7QUFDeENDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXLENBQUNSLFFBQVEsQ0FBQ0ksVUFBVSxDQUFDOztBQUU5QztBQUNBLE1BQU1LLEtBQUssR0FBRyxJQUFJckIsd0NBQVcsQ0FBQyxDQUFDOztBQUUvQjtBQUNBLE1BQU11QixNQUFNLEdBQUcsSUFBSXZCLG9EQUF1QixDQUFDLEVBQUUsRUFBRXlCLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHRCxNQUFNLENBQUNFLFdBQVcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO0FBQ2pHSixNQUFNLENBQUNLLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHLENBQUM7QUFDckI7QUFDQTs7QUFFQTtBQUNBLFNBQVNDLE1BQU1BLENBQUEsRUFBRztFQUNkbEIsUUFBUSxDQUFDbUIsT0FBTyxDQUFDTixNQUFNLENBQUNDLFVBQVUsRUFBRUQsTUFBTSxDQUFDRSxXQUFXLENBQUM7RUFDdkQ7QUFDSjtBQUNBRixNQUFNLENBQUNPLGdCQUFnQixDQUFDLFFBQVEsRUFBRUYsTUFBTSxFQUFFLEtBQUssQ0FBQztBQUNoREEsTUFBTSxDQUFDLENBQUM7O0FBRVI7QUFDQSxNQUFNRyxRQUFRLEdBQUcsSUFBSWpDLHNEQUF5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNbUMsWUFBWSxHQUFHLElBQUluQywrQ0FBa0IsQ0FBQyxRQUFRLENBQUM7QUFDckQsTUFBTXFDLGdCQUFnQixHQUFHLElBQUlyQyxtREFBc0IsQ0FBQztFQUNoRHVDLFNBQVMsRUFBRSxHQUFHO0VBQ2RYLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0FBQ3pCLENBQUMsQ0FBQzs7QUFFRjtBQUNBLE1BQU1ZLElBQUksR0FBRyxJQUFJeEMsdUNBQVUsQ0FDdkJpQyxRQUFRLEVBQ1IsSUFBSWhDLDRFQUFvQixDQUFDO0VBQ3JCeUMsTUFBTSxFQUFFLElBQUk7RUFDWkMsWUFBWSxFQUFFM0MsdURBQTBCO0VBQ3hDNkMsU0FBUyxFQUFFLElBQUk7RUFDZkMsU0FBUyxFQUFFLElBQUk7RUFDZkMsU0FBUyxFQUFFLENBQUM7RUFDWkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsQ0FDTCxDQUFDO0FBRUQ1QixLQUFLLENBQUM2QixHQUFHLENBQUNmLFlBQVksQ0FBQztBQUN2QmQsS0FBSyxDQUFDNkIsR0FBRyxDQUFDYixnQkFBZ0IsQ0FBQztBQUMzQmhCLEtBQUssQ0FBQzZCLEdBQUcsQ0FBQ1YsSUFBSSxDQUFDOztBQUVmO0FBQ0FXLHFCQUFxQixDQUFDQyxNQUFNLENBQUM7QUFDN0IsU0FBU0EsTUFBTUEsQ0FBQSxFQUFHO0VBQ2RELHFCQUFxQixDQUFDQyxNQUFNLENBQUM7O0VBRWpDO0VBQ0E7RUFDQTs7RUFFSXhDLFFBQVEsQ0FBQ3lDLE1BQU0sQ0FBRWhDLEtBQUssRUFBRUUsTUFBTyxDQUFDO0FBQ3BDOzs7Ozs7OztVQ3JHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1leHBlcmltZW50LTEvLi9zcmMvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYi1leHBlcmltZW50LTEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xyXG5pbXBvcnQgQ3VzdG9tU2hhZGVyTWF0ZXJpYWwgZnJvbSAndGhyZWUtY3VzdG9tLXNoYWRlci1tYXRlcmlhbC92YW5pbGxhJ1xyXG5cclxuaW1wb3J0IHZlcnRleCBmcm9tICcuLi9zaGFyZWQvc2hhZGVycy9ibG9iLXZlcnRleC5nbHNsJ1xyXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnLi4vc2hhcmVkL3NoYWRlcnMvYmxvYi1mcmFnbWVudC5nbHNsJ1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9jayB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxhcHNlZFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWVcclxuICAgIH1cclxuXHJcbiAgICByZXNldFRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKVxyXG4gICAgfVxyXG59XHJcblxyXG4vL0Nsb2NrXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKClcclxuXHJcbi8vQ2FudmFzIENyZWF0aW9uXHJcbmNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgYWxwaGE6IGZhbHNlLFxyXG4gICAgYW50aWFsaWFzOiB0cnVlXHJcbn0pXHJcblxyXG5yZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICdjYW52YXMnXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcclxuXHJcbi8vU2NlbmVcclxuY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKVxyXG5cclxuLy9DYW1lcmFcclxuY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKVxyXG5jYW1lcmEucG9zaXRpb24ueiA9IDVcclxuLy8gY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAxLCA3KVxyXG4vLyBjYW1lcmEubG9va0F0KFswLCAwLCAwXSlcclxuXHJcbi8vQ2FudmFzIFJlc2l6ZVxyXG5mdW5jdGlvbiByZXNpemUoKSB7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICAvLyBjYW1lcmEucGVyc3BlY3RpdmUoeyBhc3BlY3Q6IGdsLmNhbnZhcy53aWR0aCAvIGdsLmNhbnZhcy5oZWlnaHQgfSlcclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplLCBmYWxzZSlcclxucmVzaXplKClcclxuXHJcbi8vR2VvbWV0cnlcclxuY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuSWNvc2FoZWRyb25HZW9tZXRyeSgxLjMsIDIwMClcclxuXHJcbi8vUHJvZ3JhbVxyXG4vLyBjb25zdCBwcm9ncmFtID0gbmV3IFByb2dyYW0oZ2wsIHtcclxuLy8gICAgIHZlcnRleCxcclxuLy8gICAgIGZyYWdtZW50LFxyXG4vLyAgICAgdW5pZm9ybXM6IHtcclxuLy8gICAgICAgICB1VGltZTogeyB2YWx1ZTogMCB9LFxyXG4vLyAgICAgICAgIHVMaWdodERpcmVjdGlvbjogeyB2YWx1ZTogWzEuMCwgMS4wLCAxLjBdIH0sXHJcbi8vICAgICAgICAgdUFtYmllbnRMaWdodDogeyB2YWx1ZTogWzAuMSwgMC4xLCAwLjFdIH0sXHJcbi8vICAgICAgICAgdUFscGhhOiB7IHZhbHVlOiAxLjAgfVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxuLy9MaWdodFxyXG5jb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmKVxyXG5jb25zdCBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoe1xyXG4gICAgaW50ZW5zaXR5OiAwLjUsXHJcbiAgICBwb3NpdGlvbjogWy0yLCAyLCAzLjVdXHJcbn0pXHJcblxyXG4vL01lc2hcclxuY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKFxyXG4gICAgZ2VvbWV0cnksIFxyXG4gICAgbmV3IEN1c3RvbVNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICBzaWxlbnQ6IHRydWUsXHJcbiAgICAgICAgYmFzZU1hdGVyaWFsOiBUSFJFRS5NZXNoUGh5c2ljYWxNYXRlcmlhbCxcclxuICAgICAgICByb3VnaG5lc3M6IDAuNTYsXHJcbiAgICAgICAgbWV0YWxuZXNzOiAwLjc2LFxyXG4gICAgICAgIGNsZWFyY29hdDogMCxcclxuICAgICAgICBpb3I6IDIuODEsXHJcbiAgICAgICAgaXJpZGVzY2VuY2U6IDAuOTYsXHJcbiAgICB9KVxyXG4pXHJcblxyXG5zY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxyXG5zY2VuZS5hZGQoZGlyZWN0aW9uYWxMaWdodClcclxuc2NlbmUuYWRkKG1lc2gpXHJcblxyXG4vL1JlbmRlclxyXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKVxyXG5mdW5jdGlvbiB1cGRhdGUoKSB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKVxyXG5cclxuLy8gICAgIHNjZW5lLmNoaWxkcmVuLmZvckVhY2gobWVzaCA9PiB7XHJcbi8vICAgICAgICAgbWVzaC5wcm9ncmFtLnVuaWZvcm1zLnVUaW1lLnZhbHVlID0gY2xvY2suZ2V0RWxhcHNlZFRpbWUoKSAvIDEwMDAwXHJcbi8vICAgICB9KVxyXG5cclxuICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApXHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkZGIzOGM3MDI0M2QyZmUxNWExMVwiKSJdLCJuYW1lcyI6WyJUSFJFRSIsIkN1c3RvbVNoYWRlck1hdGVyaWFsIiwidmVydGV4IiwiZnJhZ21lbnQiLCJDbG9jayIsImNvbnN0cnVjdG9yIiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJnZXRFbGFwc2VkVGltZSIsInJlc2V0VGltZSIsImNsb2NrIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJkb21FbGVtZW50IiwiY2xhc3NOYW1lIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInoiLCJyZXNpemUiLCJzZXRTaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdlb21ldHJ5IiwiSWNvc2FoZWRyb25HZW9tZXRyeSIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImRpcmVjdGlvbmFsTGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0IiwiaW50ZW5zaXR5IiwibWVzaCIsIk1lc2giLCJzaWxlbnQiLCJiYXNlTWF0ZXJpYWwiLCJNZXNoUGh5c2ljYWxNYXRlcmlhbCIsInJvdWdobmVzcyIsIm1ldGFsbmVzcyIsImNsZWFyY29hdCIsImlvciIsImlyaWRlc2NlbmNlIiwiYWRkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==