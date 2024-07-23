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

/***/ }),

/***/ "./node_modules/three-custom-shader-material/vanilla/dist/three-custom-shader-material-vanilla.esm.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/three-custom-shader-material/vanilla/dist/three-custom-shader-material-vanilla.esm.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _dist_vanilla_307d3a93_esm_js__WEBPACK_IMPORTED_MODULE_0__.C)
/* harmony export */ });
/* harmony import */ var _dist_vanilla_307d3a93_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/vanilla-307d3a93.esm.js */ "./node_modules/three-custom-shader-material/dist/vanilla-307d3a93.esm.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-hash */ "./node_modules/object-hash/dist/object_hash.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var glsl_tokenizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! glsl-tokenizer */ "./node_modules/glsl-tokenizer/string.js");
/* harmony import */ var glsl_tokenizer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(glsl_tokenizer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var glsl_token_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! glsl-token-string */ "./node_modules/glsl-token-string/index.js");
/* harmony import */ var glsl_token_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(glsl_token_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var glsl_token_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! glsl-token-functions */ "./node_modules/glsl-token-functions/index.js");
/* harmony import */ var glsl_token_functions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(glsl_token_functions__WEBPACK_IMPORTED_MODULE_4__);








/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9224fea3dab10d3c58ca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iMzkzNDNkZjQxMmJjMGJkZjI0YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUN5QztBQUVoQjtBQUNJO0FBRXZDO0FBRWIsTUFBTUksS0FBSyxDQUFDO0VBQ2ZDLFdBQVdBLENBQUEsRUFBRztJQUNWLElBQUksQ0FBQ0MsU0FBUyxHQUFHQyxXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0VBQ3RDO0VBRUFDLGNBQWNBLENBQUEsRUFBRztJQUNiLE9BQU9GLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNGLFNBQVM7RUFDN0M7RUFFQUksU0FBU0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDSixTQUFTLEdBQUdDLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7RUFDdEM7QUFDSjs7QUFFQTtBQUNBLE1BQU1HLEtBQUssR0FBRyxJQUFJUCxLQUFLLENBQUMsQ0FBQzs7QUFFekI7QUFDQSxNQUFNUSxRQUFRLEdBQUcsSUFBSVosZ0RBQW1CLENBQUM7RUFDckNjLEtBQUssRUFBRSxLQUFLO0VBQ1pDLFNBQVMsRUFBRTtBQUNmLENBQUMsQ0FBQztBQUVGSCxRQUFRLENBQUNJLFVBQVUsQ0FBQ0MsU0FBUyxHQUFHLFFBQVE7QUFDeENDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXLENBQUNSLFFBQVEsQ0FBQ0ksVUFBVSxDQUFDOztBQUU5QztBQUNBLE1BQU1LLEtBQUssR0FBRyxJQUFJckIsd0NBQVcsQ0FBQyxDQUFDOztBQUUvQjtBQUNBLE1BQU11QixNQUFNLEdBQUcsSUFBSXZCLG9EQUF1QixDQUFDLEVBQUUsRUFBRXlCLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHRCxNQUFNLENBQUNFLFdBQVcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO0FBQ2pHSixNQUFNLENBQUNLLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHLENBQUM7QUFDckI7QUFDQTs7QUFFQTtBQUNBLFNBQVNDLE1BQU1BLENBQUEsRUFBRztFQUNkbEIsUUFBUSxDQUFDbUIsT0FBTyxDQUFDTixNQUFNLENBQUNDLFVBQVUsRUFBRUQsTUFBTSxDQUFDRSxXQUFXLENBQUM7RUFDdkQ7QUFDSjtBQUNBRixNQUFNLENBQUNPLGdCQUFnQixDQUFDLFFBQVEsRUFBRUYsTUFBTSxFQUFFLEtBQUssQ0FBQztBQUNoREEsTUFBTSxDQUFDLENBQUM7O0FBRVI7QUFDQSxNQUFNRyxRQUFRLEdBQUcsSUFBSWpDLHNEQUF5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNbUMsWUFBWSxHQUFHLElBQUluQywrQ0FBa0IsQ0FBQyxRQUFRLENBQUM7QUFDckQsTUFBTXFDLGdCQUFnQixHQUFHLElBQUlyQyxtREFBc0IsQ0FBQztFQUNoRHVDLFNBQVMsRUFBRSxHQUFHO0VBQ2RYLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHO0FBQ3pCLENBQUMsQ0FBQzs7QUFFRjtBQUNBLE1BQU1ZLElBQUksR0FBRyxJQUFJeEMsdUNBQVUsQ0FDdkJpQyxRQUFRLEVBQ1IsSUFBSWhDLDRFQUFvQixDQUFDO0VBQ3JCeUMsWUFBWSxFQUFFMUMsdURBQTBCO0VBQ3hDNEMsU0FBUyxFQUFFLElBQUk7RUFDZkMsU0FBUyxFQUFFLElBQUk7RUFDZkMsU0FBUyxFQUFFLENBQUM7RUFDWkMsR0FBRyxFQUFFLElBQUk7RUFDVEMsV0FBVyxFQUFFO0FBQ2pCLENBQUMsQ0FDTCxDQUFDO0FBRUQzQixLQUFLLENBQUM0QixHQUFHLENBQUNkLFlBQVksQ0FBQztBQUN2QmQsS0FBSyxDQUFDNEIsR0FBRyxDQUFDWixnQkFBZ0IsQ0FBQztBQUMzQmhCLEtBQUssQ0FBQzRCLEdBQUcsQ0FBQ1QsSUFBSSxDQUFDOztBQUVmO0FBQ0FVLHFCQUFxQixDQUFDQyxNQUFNLENBQUM7QUFDN0IsU0FBU0EsTUFBTUEsQ0FBQSxFQUFHO0VBQ2RELHFCQUFxQixDQUFDQyxNQUFNLENBQUM7O0VBRWpDO0VBQ0E7RUFDQTs7RUFFSXZDLFFBQVEsQ0FBQ3dDLE1BQU0sQ0FBRS9CLEtBQUssRUFBRUUsTUFBTyxDQUFDO0FBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHa0U7QUFDN0M7QUFDTjtBQUNTO0FBQ0c7QUFDRzs7Ozs7Ozs7O1VDTDlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWV4cGVyaW1lbnQtMS8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vd2ViLWV4cGVyaW1lbnQtMS8uL25vZGVfbW9kdWxlcy90aHJlZS1jdXN0b20tc2hhZGVyLW1hdGVyaWFsL3ZhbmlsbGEvZGlzdC90aHJlZS1jdXN0b20tc2hhZGVyLW1hdGVyaWFsLXZhbmlsbGEuZXNtLmpzIiwid2VicGFjazovL3dlYi1leHBlcmltZW50LTEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xyXG5pbXBvcnQgQ3VzdG9tU2hhZGVyTWF0ZXJpYWwgZnJvbSAndGhyZWUtY3VzdG9tLXNoYWRlci1tYXRlcmlhbC92YW5pbGxhJ1xyXG5cclxuaW1wb3J0IHZlcnRleCBmcm9tICcuLi9zaGFyZWQvc2hhZGVycy9ibG9iLXZlcnRleC5nbHNsJ1xyXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnLi4vc2hhcmVkL3NoYWRlcnMvYmxvYi1mcmFnbWVudC5nbHNsJ1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9jayB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxhcHNlZFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWVcclxuICAgIH1cclxuXHJcbiAgICByZXNldFRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKVxyXG4gICAgfVxyXG59XHJcblxyXG4vL0Nsb2NrXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKClcclxuXHJcbi8vQ2FudmFzIENyZWF0aW9uXHJcbmNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgYWxwaGE6IGZhbHNlLFxyXG4gICAgYW50aWFsaWFzOiB0cnVlXHJcbn0pXHJcblxyXG5yZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICdjYW52YXMnXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudClcclxuXHJcbi8vU2NlbmVcclxuY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKVxyXG5cclxuLy9DYW1lcmFcclxuY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKVxyXG5jYW1lcmEucG9zaXRpb24ueiA9IDVcclxuLy8gY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAxLCA3KVxyXG4vLyBjYW1lcmEubG9va0F0KFswLCAwLCAwXSlcclxuXHJcbi8vQ2FudmFzIFJlc2l6ZVxyXG5mdW5jdGlvbiByZXNpemUoKSB7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICAvLyBjYW1lcmEucGVyc3BlY3RpdmUoeyBhc3BlY3Q6IGdsLmNhbnZhcy53aWR0aCAvIGdsLmNhbnZhcy5oZWlnaHQgfSlcclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplLCBmYWxzZSlcclxucmVzaXplKClcclxuXHJcbi8vR2VvbWV0cnlcclxuY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuSWNvc2FoZWRyb25HZW9tZXRyeSgxLjMsIDIwMClcclxuXHJcbi8vUHJvZ3JhbVxyXG4vLyBjb25zdCBwcm9ncmFtID0gbmV3IFByb2dyYW0oZ2wsIHtcclxuLy8gICAgIHZlcnRleCxcclxuLy8gICAgIGZyYWdtZW50LFxyXG4vLyAgICAgdW5pZm9ybXM6IHtcclxuLy8gICAgICAgICB1VGltZTogeyB2YWx1ZTogMCB9LFxyXG4vLyAgICAgICAgIHVMaWdodERpcmVjdGlvbjogeyB2YWx1ZTogWzEuMCwgMS4wLCAxLjBdIH0sXHJcbi8vICAgICAgICAgdUFtYmllbnRMaWdodDogeyB2YWx1ZTogWzAuMSwgMC4xLCAwLjFdIH0sXHJcbi8vICAgICAgICAgdUFscGhhOiB7IHZhbHVlOiAxLjAgfVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxuLy9MaWdodFxyXG5jb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmKVxyXG5jb25zdCBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoe1xyXG4gICAgaW50ZW5zaXR5OiAwLjUsXHJcbiAgICBwb3NpdGlvbjogWy0yLCAyLCAzLjVdXHJcbn0pXHJcblxyXG4vL01lc2hcclxuY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKFxyXG4gICAgZ2VvbWV0cnksIFxyXG4gICAgbmV3IEN1c3RvbVNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICBiYXNlTWF0ZXJpYWw6IFRIUkVFLk1lc2hQaHlzaWNhbE1hdGVyaWFsLFxyXG4gICAgICAgIHJvdWdobmVzczogMC41NixcclxuICAgICAgICBtZXRhbG5lc3M6IDAuNzYsXHJcbiAgICAgICAgY2xlYXJjb2F0OiAwLFxyXG4gICAgICAgIGlvcjogMi44MSxcclxuICAgICAgICBpcmlkZXNjZW5jZTogMC45NixcclxuICAgIH0pXHJcbilcclxuXHJcbnNjZW5lLmFkZChhbWJpZW50TGlnaHQpXHJcbnNjZW5lLmFkZChkaXJlY3Rpb25hbExpZ2h0KVxyXG5zY2VuZS5hZGQobWVzaClcclxuXHJcbi8vUmVuZGVyXHJcbnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXHJcbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXHJcblxyXG4vLyAgICAgc2NlbmUuY2hpbGRyZW4uZm9yRWFjaChtZXNoID0+IHtcclxuLy8gICAgICAgICBtZXNoLnByb2dyYW0udW5pZm9ybXMudVRpbWUudmFsdWUgPSBjbG9jay5nZXRFbGFwc2VkVGltZSgpIC8gMTAwMDBcclxuLy8gICAgIH0pXHJcblxyXG4gICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhIClcclxufSIsImV4cG9ydCB7IEMgYXMgZGVmYXVsdCB9IGZyb20gJy4uLy4uL2Rpc3QvdmFuaWxsYS0zMDdkM2E5My5lc20uanMnO1xuaW1wb3J0ICdvYmplY3QtaGFzaCc7XG5pbXBvcnQgJ3RocmVlJztcbmltcG9ydCAnZ2xzbC10b2tlbml6ZXInO1xuaW1wb3J0ICdnbHNsLXRva2VuLXN0cmluZyc7XG5pbXBvcnQgJ2dsc2wtdG9rZW4tZnVuY3Rpb25zJztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjkyMjRmZWEzZGFiMTBkM2M1OGNhXCIpIl0sIm5hbWVzIjpbIlRIUkVFIiwiQ3VzdG9tU2hhZGVyTWF0ZXJpYWwiLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsIkNsb2NrIiwiY29uc3RydWN0b3IiLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdldEVsYXBzZWRUaW1lIiwicmVzZXRUaW1lIiwiY2xvY2siLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImRvbUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsInJlc2l6ZSIsInNldFNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2VvbWV0cnkiLCJJY29zYWhlZHJvbkdlb21ldHJ5IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiZGlyZWN0aW9uYWxMaWdodCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJpbnRlbnNpdHkiLCJtZXNoIiwiTWVzaCIsImJhc2VNYXRlcmlhbCIsIk1lc2hQaHlzaWNhbE1hdGVyaWFsIiwicm91Z2huZXNzIiwibWV0YWxuZXNzIiwiY2xlYXJjb2F0IiwiaW9yIiwiaXJpZGVzY2VuY2UiLCJhZGQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9