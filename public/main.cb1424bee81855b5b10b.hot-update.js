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
  alpha: false,
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

//Light
const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff);
const directionalLight = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight({
  intensity: 0.5,
  position: [-2, 2, 3.5]
});

//Mesh
const mesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, new CustomShaderMaterial({
  baseMaterial: three__WEBPACK_IMPORTED_MODULE_3__.MeshPhysicalMaterial,
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
/******/ 	__webpack_require__.h = () => ("408e6baa3d2d611cffd6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jYjE0MjRiZWU4MTg1NWI1YjEwYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRXlCO0FBQ0k7QUFFdkM7QUFFYixNQUFNRyxLQUFLLENBQUM7RUFDZkMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDQyxTQUFTLEdBQUdDLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7RUFDdEM7RUFFQUMsY0FBY0EsQ0FBQSxFQUFHO0lBQ2IsT0FBT0YsV0FBVyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ0YsU0FBUztFQUM3QztFQUVBSSxTQUFTQSxDQUFBLEVBQUc7SUFDUixJQUFJLENBQUNKLFNBQVMsR0FBR0MsV0FBVyxDQUFDQyxHQUFHLENBQUMsQ0FBQztFQUN0QztBQUNKOztBQUVBO0FBQ0EsTUFBTUcsS0FBSyxHQUFHLElBQUlQLEtBQUssQ0FBQyxDQUFDOztBQUV6QjtBQUNBLE1BQU1RLFFBQVEsR0FBRyxJQUFJWCxnREFBbUIsQ0FBQztFQUNyQ2EsS0FBSyxFQUFFLEtBQUs7RUFDWkMsU0FBUyxFQUFFO0FBQ2YsQ0FBQyxDQUFDO0FBRUZILFFBQVEsQ0FBQ0ksVUFBVSxDQUFDQyxTQUFTLEdBQUcsUUFBUTtBQUN4Q0MsUUFBUSxDQUFDQyxJQUFJLENBQUNDLFdBQVcsQ0FBQ1IsUUFBUSxDQUFDSSxVQUFVLENBQUM7O0FBRTlDO0FBQ0EsTUFBTUssS0FBSyxHQUFHLElBQUlwQix3Q0FBVyxDQUFDLENBQUM7O0FBRS9CO0FBQ0EsTUFBTXNCLE1BQU0sR0FBRyxJQUFJdEIsb0RBQXVCLENBQUMsRUFBRSxFQUFFd0IsTUFBTSxDQUFDQyxVQUFVLEdBQUdELE1BQU0sQ0FBQ0UsV0FBVyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7QUFDakdKLE1BQU0sQ0FBQ0ssUUFBUSxDQUFDQyxDQUFDLEdBQUcsQ0FBQztBQUNyQjtBQUNBOztBQUVBO0FBQ0EsU0FBU0MsTUFBTUEsQ0FBQSxFQUFHO0VBQ2RsQixRQUFRLENBQUNtQixPQUFPLENBQUNOLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFRCxNQUFNLENBQUNFLFdBQVcsQ0FBQztFQUN2RDtBQUNKO0FBQ0FGLE1BQU0sQ0FBQ08sZ0JBQWdCLENBQUMsUUFBUSxFQUFFRixNQUFNLEVBQUUsS0FBSyxDQUFDO0FBQ2hEQSxNQUFNLENBQUMsQ0FBQzs7QUFFUjtBQUNBLE1BQU1HLFFBQVEsR0FBRyxJQUFJaEMsc0RBQXlCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU1rQyxZQUFZLEdBQUcsSUFBSWxDLCtDQUFrQixDQUFDLFFBQVEsQ0FBQztBQUNyRCxNQUFNb0MsZ0JBQWdCLEdBQUcsSUFBSXBDLG1EQUFzQixDQUFDO0VBQ2hEc0MsU0FBUyxFQUFFLEdBQUc7RUFDZFgsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUc7QUFDekIsQ0FBQyxDQUFDOztBQUVGO0FBQ0EsTUFBTVksSUFBSSxHQUFHLElBQUl2Qyx1Q0FBVSxDQUN2QmdDLFFBQVEsRUFDUixJQUFJUyxvQkFBb0IsQ0FBQztFQUNyQkMsWUFBWSxFQUFFMUMsdURBQTBCO0VBQ3hDNEMsU0FBUyxFQUFFLElBQUk7RUFDZkMsU0FBUyxFQUFFLElBQUk7RUFDZkMsU0FBUyxFQUFFLENBQUM7RUFDWkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsQ0FDTCxDQUFDO0FBRUQ1QixLQUFLLENBQUM2QixHQUFHLENBQUNmLFlBQVksQ0FBQztBQUN2QmQsS0FBSyxDQUFDNkIsR0FBRyxDQUFDYixnQkFBZ0IsQ0FBQztBQUMzQmhCLEtBQUssQ0FBQzZCLEdBQUcsQ0FBQ1YsSUFBSSxDQUFDOztBQUVmO0FBQ0FXLHFCQUFxQixDQUFDQyxNQUFNLENBQUM7QUFDN0IsU0FBU0EsTUFBTUEsQ0FBQSxFQUFHO0VBQ2RELHFCQUFxQixDQUFDQyxNQUFNLENBQUM7O0VBRWpDO0VBQ0E7RUFDQTs7RUFFSXhDLFFBQVEsQ0FBQ3lDLE1BQU0sQ0FBRWhDLEtBQUssRUFBRUUsTUFBTyxDQUFDO0FBQ3BDOzs7Ozs7OztVQ25HQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1leHBlcmltZW50LTEvLi9zcmMvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYi1leHBlcmltZW50LTEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xyXG5cclxuaW1wb3J0IHZlcnRleCBmcm9tICcuLi9zaGFyZWQvc2hhZGVycy9ibG9iLXZlcnRleC5nbHNsJ1xyXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnLi4vc2hhcmVkL3NoYWRlcnMvYmxvYi1mcmFnbWVudC5nbHNsJ1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9jayB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxhcHNlZFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWVcclxuICAgIH1cclxuXHJcbiAgICByZXNldFRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKVxyXG4gICAgfVxyXG59XHJcblxyXG4vL0Nsb2NrXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKClcclxuXHJcbi8vQ2FudmFzIENyZWF0aW9uXHJcbmNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgYWxwaGE6IGZhbHNlLFxyXG4gICAgYW50aWFsaWFzOiB0cnVlXHJcbn0pXHJcblxyXG5yZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICdjYW52YXMnXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcclxuXHJcbi8vU2NlbmVcclxuY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKVxyXG5cclxuLy9DYW1lcmFcclxuY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKVxyXG5jYW1lcmEucG9zaXRpb24ueiA9IDVcclxuLy8gY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAxLCA3KVxyXG4vLyBjYW1lcmEubG9va0F0KFswLCAwLCAwXSlcclxuXHJcbi8vQ2FudmFzIFJlc2l6ZVxyXG5mdW5jdGlvbiByZXNpemUoKSB7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICAvLyBjYW1lcmEucGVyc3BlY3RpdmUoeyBhc3BlY3Q6IGdsLmNhbnZhcy53aWR0aCAvIGdsLmNhbnZhcy5oZWlnaHQgfSlcclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplLCBmYWxzZSlcclxucmVzaXplKClcclxuXHJcbi8vR2VvbWV0cnlcclxuY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuSWNvc2FoZWRyb25HZW9tZXRyeSgxLjMsIDIwMClcclxuXHJcbi8vUHJvZ3JhbVxyXG4vLyBjb25zdCBwcm9ncmFtID0gbmV3IFByb2dyYW0oZ2wsIHtcclxuLy8gICAgIHZlcnRleCxcclxuLy8gICAgIGZyYWdtZW50LFxyXG4vLyAgICAgdW5pZm9ybXM6IHtcclxuLy8gICAgICAgICB1VGltZTogeyB2YWx1ZTogMCB9LFxyXG4vLyAgICAgICAgIHVMaWdodERpcmVjdGlvbjogeyB2YWx1ZTogWzEuMCwgMS4wLCAxLjBdIH0sXHJcbi8vICAgICAgICAgdUFtYmllbnRMaWdodDogeyB2YWx1ZTogWzAuMSwgMC4xLCAwLjFdIH0sXHJcbi8vICAgICAgICAgdUFscGhhOiB7IHZhbHVlOiAxLjAgfVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxuLy9MaWdodFxyXG5jb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmKVxyXG5jb25zdCBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoe1xyXG4gICAgaW50ZW5zaXR5OiAwLjUsXHJcbiAgICBwb3NpdGlvbjogWy0yLCAyLCAzLjVdXHJcbn0pXHJcblxyXG4vL01lc2hcclxuY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKFxyXG4gICAgZ2VvbWV0cnksIFxyXG4gICAgbmV3IEN1c3RvbVNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICBiYXNlTWF0ZXJpYWw6IFRIUkVFLk1lc2hQaHlzaWNhbE1hdGVyaWFsLFxyXG4gICAgICAgIHJvdWdobmVzczogMC41NixcclxuICAgICAgICBtZXRhbG5lc3M6IDAuNzYsXHJcbiAgICAgICAgY2xlYXJjb2F0OiAwLFxyXG4gICAgICAgIGlvcjogMi44MSxcclxuICAgICAgICBpcmlkZXNjZW5jZTogMC45NixcclxuICAgIH0pXHJcbilcclxuXHJcbnNjZW5lLmFkZChhbWJpZW50TGlnaHQpXHJcbnNjZW5lLmFkZChkaXJlY3Rpb25hbExpZ2h0KVxyXG5zY2VuZS5hZGQobWVzaClcclxuXHJcbi8vUmVuZGVyXHJcbnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXHJcbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXHJcblxyXG4vLyAgICAgc2NlbmUuY2hpbGRyZW4uZm9yRWFjaChtZXNoID0+IHtcclxuLy8gICAgICAgICBtZXNoLnByb2dyYW0udW5pZm9ybXMudVRpbWUudmFsdWUgPSBjbG9jay5nZXRFbGFwc2VkVGltZSgpIC8gMTAwMDBcclxuLy8gICAgIH0pXHJcblxyXG4gICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhIClcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQwOGU2YmFhM2QyZDYxMWNmZmQ2XCIpIl0sIm5hbWVzIjpbIlRIUkVFIiwidmVydGV4IiwiZnJhZ21lbnQiLCJDbG9jayIsImNvbnN0cnVjdG9yIiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJnZXRFbGFwc2VkVGltZSIsInJlc2V0VGltZSIsImNsb2NrIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJkb21FbGVtZW50IiwiY2xhc3NOYW1lIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInoiLCJyZXNpemUiLCJzZXRTaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdlb21ldHJ5IiwiSWNvc2FoZWRyb25HZW9tZXRyeSIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImRpcmVjdGlvbmFsTGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0IiwiaW50ZW5zaXR5IiwibWVzaCIsIk1lc2giLCJDdXN0b21TaGFkZXJNYXRlcmlhbCIsImJhc2VNYXRlcmlhbCIsIk1lc2hQaHlzaWNhbE1hdGVyaWFsIiwicm91Z2huZXNzIiwibWV0YWxuZXNzIiwiY2xlYXJjb2F0IiwiaW9yIiwiaXJpZGVzY2VuY2UiLCJhZGQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9