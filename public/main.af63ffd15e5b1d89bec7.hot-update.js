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

//Material
const material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhysicalMaterial({
  roughness: 0.56,
  metalness: 0.76,
  clearcoat: 0,
  ior: 2.81,
  iridescence: 0.96
});

//Light
const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff);
const directionalLight = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight({
  intensity: 0.5,
  position: [-2, 2, 3.5]
});

//Mesh
const mesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, material);
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
/******/ 	__webpack_require__.h = () => ("a07d29d611ae79837885")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztFQUNkRCxxQkFBcUIsQ0FBQ0MsTUFBTSxDQUFDOztFQUVqQztFQUNBO0VBQ0E7O0VBRUl2QyxRQUFRLENBQUN3QyxNQUFNLENBQUUvQixLQUFLLEVBQUVFLE1BQU8sQ0FBQztBQUNwQzs7Ozs7Ozs7VUNsR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItZXhwZXJpbWVudC0xLy4vc3JjL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly93ZWItZXhwZXJpbWVudC0xL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcclxuXHJcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnLi4vc2hhcmVkL3NoYWRlcnMvYmxvYi12ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGZyYWdtZW50IGZyb20gJy4uL3NoYXJlZC9zaGFkZXJzL2Jsb2ItZnJhZ21lbnQuZ2xzbCdcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvY2sge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEVsYXBzZWRUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRUaW1lKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KClcclxuICAgIH1cclxufVxyXG5cclxuLy9DbG9ja1xyXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jaygpXHJcblxyXG4vL0NhbnZhcyBDcmVhdGlvblxyXG5jb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgIGFscGhhOiBmYWxzZSxcclxuICAgIGFudGlhbGlhczogdHJ1ZVxyXG59KVxyXG5cclxucmVuZGVyZXIuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnY2FudmFzJ1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcblxyXG4vL1NjZW5lXHJcbmNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKClcclxuXHJcbi8vQ2FtZXJhXHJcbmNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMClcclxuY2FtZXJhLnBvc2l0aW9uLnogPSA1XHJcbi8vIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMSwgNylcclxuLy8gY2FtZXJhLmxvb2tBdChbMCwgMCwgMF0pXHJcblxyXG4vL0NhbnZhcyBSZXNpemVcclxuZnVuY3Rpb24gcmVzaXplKCkge1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgLy8gY2FtZXJhLnBlcnNwZWN0aXZlKHsgYXNwZWN0OiBnbC5jYW52YXMud2lkdGggLyBnbC5jYW52YXMuaGVpZ2h0IH0pXHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZSwgZmFsc2UpXHJcbnJlc2l6ZSgpXHJcblxyXG4vL0dlb21ldHJ5XHJcbmNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkljb3NhaGVkcm9uR2VvbWV0cnkoMS4zLCAyMDApXHJcblxyXG4vL1Byb2dyYW1cclxuLy8gY29uc3QgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtKGdsLCB7XHJcbi8vICAgICB2ZXJ0ZXgsXHJcbi8vICAgICBmcmFnbWVudCxcclxuLy8gICAgIHVuaWZvcm1zOiB7XHJcbi8vICAgICAgICAgdVRpbWU6IHsgdmFsdWU6IDAgfSxcclxuLy8gICAgICAgICB1TGlnaHREaXJlY3Rpb246IHsgdmFsdWU6IFsxLjAsIDEuMCwgMS4wXSB9LFxyXG4vLyAgICAgICAgIHVBbWJpZW50TGlnaHQ6IHsgdmFsdWU6IFswLjEsIDAuMSwgMC4xXSB9LFxyXG4vLyAgICAgICAgIHVBbHBoYTogeyB2YWx1ZTogMS4wIH1cclxuLy8gICAgIH1cclxuLy8gfSlcclxuXHJcbi8vTWF0ZXJpYWxcclxuY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBoeXNpY2FsTWF0ZXJpYWwoe1xyXG4gICAgcm91Z2huZXNzOiAwLjU2LFxyXG4gICAgbWV0YWxuZXNzOiAwLjc2LFxyXG4gICAgY2xlYXJjb2F0OiAwLFxyXG4gICAgaW9yOiAyLjgxLFxyXG4gICAgaXJpZGVzY2VuY2U6IDAuOTYsXHJcbn0pXHJcblxyXG4vL0xpZ2h0XHJcbmNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYpXHJcbmNvbnN0IGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCh7XHJcbiAgICBpbnRlbnNpdHk6IDAuNSxcclxuICAgIHBvc2l0aW9uOiBbLTIsIDIsIDMuNV1cclxufSlcclxuXHJcbi8vTWVzaFxyXG5jb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKVxyXG5cclxuc2NlbmUuYWRkKGFtYmllbnRMaWdodClcclxuc2NlbmUuYWRkKGRpcmVjdGlvbmFsTGlnaHQpXHJcbnNjZW5lLmFkZChtZXNoKVxyXG5cclxuLy9SZW5kZXJcclxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSlcclxuZnVuY3Rpb24gdXBkYXRlKCkge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSlcclxuXHJcbi8vICAgICBzY2VuZS5jaGlsZHJlbi5mb3JFYWNoKG1lc2ggPT4ge1xyXG4vLyAgICAgICAgIG1lc2gucHJvZ3JhbS51bmlmb3Jtcy51VGltZS52YWx1ZSA9IGNsb2NrLmdldEVsYXBzZWRUaW1lKCkgLyAxMDAwMFxyXG4vLyAgICAgfSlcclxuXHJcbiAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEgKVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTA3ZDI5ZDYxMWFlNzk4Mzc4ODVcIikiXSwibmFtZXMiOlsiVEhSRUUiLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsIkNsb2NrIiwiY29uc3RydWN0b3IiLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdldEVsYXBzZWRUaW1lIiwicmVzZXRUaW1lIiwiY2xvY2siLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImRvbUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsInJlc2l6ZSIsInNldFNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2VvbWV0cnkiLCJJY29zYWhlZHJvbkdlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoUGh5c2ljYWxNYXRlcmlhbCIsInJvdWdobmVzcyIsIm1ldGFsbmVzcyIsImNsZWFyY29hdCIsImlvciIsImlyaWRlc2NlbmNlIiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiZGlyZWN0aW9uYWxMaWdodCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJpbnRlbnNpdHkiLCJtZXNoIiwiTWVzaCIsImFkZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=