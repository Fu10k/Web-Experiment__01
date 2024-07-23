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
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Renderer.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Camera.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Transform.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/extras/Sphere.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Program.js");
/* harmony import */ var ogl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ogl */ "./node_modules/ogl/src/core/Mesh.js");
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
const renderer = new ogl__WEBPACK_IMPORTED_MODULE_3__.Renderer({
  alpha: true,
  antialias: true
});
const gl = renderer.gl;
gl.canvas.classList.add('webgl');
document.body.appendChild(gl.canvas);

//Camera
const camera = new ogl__WEBPACK_IMPORTED_MODULE_4__.Camera(gl);
camera.position.z = 3;
// camera.position.set(0, 1, 7)
// camera.lookAt([0, 0, 0])

//Canvas Resize
function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.perspective({
    aspect: gl.canvas.width / gl.canvas.height
  });
}
window.addEventListener('resize', resize, false);
resize();

//Scene
const scene = new ogl__WEBPACK_IMPORTED_MODULE_5__.Transform();

//Geometry
const geometry = new ogl__WEBPACK_IMPORTED_MODULE_6__.Sphere(gl, {
  widthSegments: 1000
});

//Program
const program = new ogl__WEBPACK_IMPORTED_MODULE_7__.Program(gl, {
  vertex: _shared_shaders_blob_vertex_glsl__WEBPACK_IMPORTED_MODULE_0__["default"],
  fragment: _shared_shaders_blob_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__["default"]
  // uniforms: {
  //     uTime: { value: 0 },
  //     uColor: { value: '#6D9886' },
  //     uGradientStrength: { value: 3 },
  //     uSpeed: { value: 1.1 },
  //     uNoiseStrength: { value: 0.3 },
  //     uDisplacementStrength: { value: 0.57 },
  //     uFractAmount: { value: 4 },
  // }
});

//Mesh
const mesh = new ogl__WEBPACK_IMPORTED_MODULE_8__.Mesh(gl, {
  geometry,
  program
});
mesh.setParent(scene);

//Render
requestAnimationFrame(update);
function update() {
  requestAnimationFrame(update);

  // scene.children.forEach(mesh => {
  //     mesh.program.uniforms.uTime.value = clock.getElapsedTime() / 10000
  // })

  renderer.render({
    scene,
    camera
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("139ed5ddaa2f7b446553")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2ViLWV4cGVyaW1lbnQtMS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBNZXNoLCBQcm9ncmFtLCBSZW5kZXJlciwgU3BoZXJlLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXHJcblxyXG5pbXBvcnQgdmVydGV4IGZyb20gJy4uL3NoYXJlZC9zaGFkZXJzL2Jsb2ItdmVydGV4Lmdsc2wnXHJcbmltcG9ydCBmcmFnbWVudCBmcm9tICcuLi9zaGFyZWQvc2hhZGVycy9ibG9iLWZyYWdtZW50Lmdsc2wnXHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIENsb2NrIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KClcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGFwc2VkVGltZSgpIHtcclxuICAgICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnN0YXJ0VGltZVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VGltZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vQ2xvY2tcclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKVxyXG5cclxuLy9DYW52YXMgQ3JlYXRpb25cclxuY29uc3QgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xyXG4gICAgYWxwaGE6IHRydWUsXHJcbiAgICBhbnRpYWxpYXM6IHRydWVcclxufSlcclxuXHJcbmNvbnN0IGdsID0gcmVuZGVyZXIuZ2xcclxuZ2wuY2FudmFzLmNsYXNzTGlzdC5hZGQoJ3dlYmdsJylcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnbC5jYW52YXMpXHJcblxyXG4vL0NhbWVyYVxyXG5jb25zdCBjYW1lcmEgPSBuZXcgQ2FtZXJhKGdsKVxyXG5jYW1lcmEucG9zaXRpb24ueiA9IDNcclxuLy8gY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAxLCA3KVxyXG4vLyBjYW1lcmEubG9va0F0KFswLCAwLCAwXSlcclxuXHJcbi8vQ2FudmFzIFJlc2l6ZVxyXG5mdW5jdGlvbiByZXNpemUoKSB7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICBjYW1lcmEucGVyc3BlY3RpdmUoeyBhc3BlY3Q6IGdsLmNhbnZhcy53aWR0aCAvIGdsLmNhbnZhcy5oZWlnaHQgfSlcclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplLCBmYWxzZSlcclxucmVzaXplKClcclxuXHJcbi8vU2NlbmVcclxuY29uc3Qgc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcclxuXHJcbi8vR2VvbWV0cnlcclxuY29uc3QgZ2VvbWV0cnkgPSBuZXcgU3BoZXJlKGdsLCB7XHJcbiAgICB3aWR0aFNlZ21lbnRzOiAxMDAwXHJcbn0pXHJcblxyXG4vL1Byb2dyYW1cclxuY29uc3QgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtKGdsLCB7XHJcbiAgICB2ZXJ0ZXgsXHJcbiAgICBmcmFnbWVudCxcclxuICAgIC8vIHVuaWZvcm1zOiB7XHJcbiAgICAvLyAgICAgdVRpbWU6IHsgdmFsdWU6IDAgfSxcclxuICAgIC8vICAgICB1Q29sb3I6IHsgdmFsdWU6ICcjNkQ5ODg2JyB9LFxyXG4gICAgLy8gICAgIHVHcmFkaWVudFN0cmVuZ3RoOiB7IHZhbHVlOiAzIH0sXHJcbiAgICAvLyAgICAgdVNwZWVkOiB7IHZhbHVlOiAxLjEgfSxcclxuICAgIC8vICAgICB1Tm9pc2VTdHJlbmd0aDogeyB2YWx1ZTogMC4zIH0sXHJcbiAgICAvLyAgICAgdURpc3BsYWNlbWVudFN0cmVuZ3RoOiB7IHZhbHVlOiAwLjU3IH0sXHJcbiAgICAvLyAgICAgdUZyYWN0QW1vdW50OiB7IHZhbHVlOiA0IH0sXHJcbiAgICAvLyB9XHJcbn0pXHJcblxyXG4vL01lc2hcclxuY29uc3QgbWVzaCA9IG5ldyBNZXNoKGdsLCB7XHJcbiAgICBnZW9tZXRyeSxcclxuICAgIHByb2dyYW1cclxufSlcclxuXHJcbm1lc2guc2V0UGFyZW50KHNjZW5lKVxyXG5cclxuLy9SZW5kZXJcclxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSlcclxuZnVuY3Rpb24gdXBkYXRlKCkge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSlcclxuXHJcbiAgICAvLyBzY2VuZS5jaGlsZHJlbi5mb3JFYWNoKG1lc2ggPT4ge1xyXG4gICAgLy8gICAgIG1lc2gucHJvZ3JhbS51bmlmb3Jtcy51VGltZS52YWx1ZSA9IGNsb2NrLmdldEVsYXBzZWRUaW1lKCkgLyAxMDAwMFxyXG4gICAgLy8gfSlcclxuXHJcbiAgICByZW5kZXJlci5yZW5kZXIoe1xyXG4gICAgICAgIHNjZW5lLFxyXG4gICAgICAgIGNhbWVyYVxyXG4gICAgfSlcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEzOWVkNWRkYWEyZjdiNDQ2NTUzXCIpIl0sIm5hbWVzIjpbIkNhbWVyYSIsIk1lc2giLCJQcm9ncmFtIiwiUmVuZGVyZXIiLCJTcGhlcmUiLCJUcmFuc2Zvcm0iLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsIkNsb2NrIiwiY29uc3RydWN0b3IiLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdldEVsYXBzZWRUaW1lIiwicmVzZXRUaW1lIiwiY2xvY2siLCJyZW5kZXJlciIsImFscGhhIiwiYW50aWFsaWFzIiwiZ2wiLCJjYW52YXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbWVyYSIsInBvc2l0aW9uIiwieiIsInJlc2l6ZSIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjZW5lIiwiZ2VvbWV0cnkiLCJ3aWR0aFNlZ21lbnRzIiwicHJvZ3JhbSIsIm1lc2giLCJzZXRQYXJlbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9