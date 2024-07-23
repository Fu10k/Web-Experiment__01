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
const mesh = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(geometry, new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhysicalMaterial({
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
/******/ 	__webpack_require__.h = () => ("cb1424bee81855b5b10b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akM7RUFDQTtFQUNBOztFQUVJdEMsUUFBUSxDQUFDdUMsTUFBTSxDQUFFOUIsS0FBSyxFQUFFRSxNQUFPLENBQUM7QUFDcEM7Ozs7Ozs7O1VDbEdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWV4cGVyaW1lbnQtMS8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vd2ViLWV4cGVyaW1lbnQtMS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcblxyXG5pbXBvcnQgdmVydGV4IGZyb20gJy4uL3NoYXJlZC9zaGFkZXJzL2Jsb2ItdmVydGV4Lmdsc2wnXHJcbmltcG9ydCBmcmFnbWVudCBmcm9tICcuLi9zaGFyZWQvc2hhZGVycy9ibG9iLWZyYWdtZW50Lmdsc2wnXHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIENsb2NrIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KClcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGFwc2VkVGltZSgpIHtcclxuICAgICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnN0YXJ0VGltZVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VGltZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vQ2xvY2tcclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKVxyXG5cclxuLy9DYW52YXMgQ3JlYXRpb25cclxuY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICBhbHBoYTogZmFsc2UsXHJcbiAgICBhbnRpYWxpYXM6IHRydWVcclxufSlcclxuXHJcbnJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJ2NhbnZhcydcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxyXG5cclxuLy9TY2VuZVxyXG5jb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpXHJcblxyXG4vL0NhbWVyYVxyXG5jb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApXHJcbmNhbWVyYS5wb3NpdGlvbi56ID0gNVxyXG4vLyBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDEsIDcpXHJcbi8vIGNhbWVyYS5sb29rQXQoWzAsIDAsIDBdKVxyXG5cclxuLy9DYW52YXMgUmVzaXplXHJcbmZ1bmN0aW9uIHJlc2l6ZSgpIHtcclxuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcclxuICAgIC8vIGNhbWVyYS5wZXJzcGVjdGl2ZSh7IGFzcGVjdDogZ2wuY2FudmFzLndpZHRoIC8gZ2wuY2FudmFzLmhlaWdodCB9KVxyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUsIGZhbHNlKVxyXG5yZXNpemUoKVxyXG5cclxuLy9HZW9tZXRyeVxyXG5jb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5JY29zYWhlZHJvbkdlb21ldHJ5KDEuMywgMjAwKVxyXG5cclxuLy9Qcm9ncmFtXHJcbi8vIGNvbnN0IHByb2dyYW0gPSBuZXcgUHJvZ3JhbShnbCwge1xyXG4vLyAgICAgdmVydGV4LFxyXG4vLyAgICAgZnJhZ21lbnQsXHJcbi8vICAgICB1bmlmb3Jtczoge1xyXG4vLyAgICAgICAgIHVUaW1lOiB7IHZhbHVlOiAwIH0sXHJcbi8vICAgICAgICAgdUxpZ2h0RGlyZWN0aW9uOiB7IHZhbHVlOiBbMS4wLCAxLjAsIDEuMF0gfSxcclxuLy8gICAgICAgICB1QW1iaWVudExpZ2h0OiB7IHZhbHVlOiBbMC4xLCAwLjEsIDAuMV0gfSxcclxuLy8gICAgICAgICB1QWxwaGE6IHsgdmFsdWU6IDEuMCB9XHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vL0xpZ2h0XHJcbmNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYpXHJcbmNvbnN0IGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCh7XHJcbiAgICBpbnRlbnNpdHk6IDAuNSxcclxuICAgIHBvc2l0aW9uOiBbLTIsIDIsIDMuNV1cclxufSlcclxuXHJcbi8vTWVzaFxyXG5jb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goXHJcbiAgICBnZW9tZXRyeSwgXHJcbiAgICBuZXcgVEhSRUUuTWVzaFBoeXNpY2FsTWF0ZXJpYWwoe1xyXG4gICAgICAgIHJvdWdobmVzczogMC41NixcclxuICAgICAgICBtZXRhbG5lc3M6IDAuNzYsXHJcbiAgICAgICAgY2xlYXJjb2F0OiAwLFxyXG4gICAgICAgIGlvcjogMi44MSxcclxuICAgICAgICBpcmlkZXNjZW5jZTogMC45NixcclxuICAgIH0pXHJcbilcclxuXHJcbnNjZW5lLmFkZChhbWJpZW50TGlnaHQpXHJcbnNjZW5lLmFkZChkaXJlY3Rpb25hbExpZ2h0KVxyXG5zY2VuZS5hZGQobWVzaClcclxuXHJcbi8vUmVuZGVyXHJcbnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXHJcbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXHJcblxyXG4vLyAgICAgc2NlbmUuY2hpbGRyZW4uZm9yRWFjaChtZXNoID0+IHtcclxuLy8gICAgICAgICBtZXNoLnByb2dyYW0udW5pZm9ybXMudVRpbWUudmFsdWUgPSBjbG9jay5nZXRFbGFwc2VkVGltZSgpIC8gMTAwMDBcclxuLy8gICAgIH0pXHJcblxyXG4gICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhIClcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNiMTQyNGJlZTgxODU1YjViMTBiXCIpIl0sIm5hbWVzIjpbIlRIUkVFIiwidmVydGV4IiwiZnJhZ21lbnQiLCJDbG9jayIsImNvbnN0cnVjdG9yIiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJnZXRFbGFwc2VkVGltZSIsInJlc2V0VGltZSIsImNsb2NrIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJkb21FbGVtZW50IiwiY2xhc3NOYW1lIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInoiLCJyZXNpemUiLCJzZXRTaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdlb21ldHJ5IiwiSWNvc2FoZWRyb25HZW9tZXRyeSIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImRpcmVjdGlvbmFsTGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0IiwiaW50ZW5zaXR5IiwibWVzaCIsIk1lc2giLCJNZXNoUGh5c2ljYWxNYXRlcmlhbCIsInJvdWdobmVzcyIsIm1ldGFsbmVzcyIsImNsZWFyY29hdCIsImlvciIsImlyaWRlc2NlbmNlIiwiYWRkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==