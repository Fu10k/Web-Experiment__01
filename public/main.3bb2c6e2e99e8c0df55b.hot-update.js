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
document.body.appendChild(gl.canvas);

//Camera
// const camera = new Camera(gl)
// camera.position.z = 3
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
// const scene = new Transform()

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
/******/ 	__webpack_require__.h = () => ("5d9339396c86b66966ba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zYmIyYzZlMmU5OWU4YzBkZjU1Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDOEI7QUFHeUI7QUFDSTtBQUV2QztBQUViLE1BQU1HLEtBQUssQ0FBQztFQUNmQyxXQUFXQSxDQUFBLEVBQUc7SUFDVixJQUFJLENBQUNDLFNBQVMsR0FBR0MsV0FBVyxDQUFDQyxHQUFHLENBQUMsQ0FBQztFQUN0QztFQUVBQyxjQUFjQSxDQUFBLEVBQUc7SUFDYixPQUFPRixXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDRixTQUFTO0VBQzdDO0VBRUFJLFNBQVNBLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ0osU0FBUyxHQUFHQyxXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0VBQ3RDO0FBQ0o7O0FBRUE7QUFDQSxNQUFNRyxLQUFLLEdBQUcsSUFBSVAsS0FBSyxDQUFDLENBQUM7O0FBRXpCO0FBQ0EsTUFBTVEsUUFBUSxHQUFHLElBQUlYLGdEQUFtQixDQUFDO0VBQ3JDYSxLQUFLLEVBQUUsSUFBSTtFQUNYQyxTQUFTLEVBQUU7QUFDZixDQUFDLENBQUM7QUFFRkgsUUFBUSxDQUFDSSxVQUFVLENBQUNDLFNBQVMsR0FBRyxRQUFRO0FBQ3hDQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxFQUFFLENBQUNDLE1BQU0sQ0FBQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVNDLE1BQU1BLENBQUEsRUFBRztFQUNkWCxRQUFRLENBQUNZLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVLEVBQUVELE1BQU0sQ0FBQ0UsV0FBVyxDQUFDO0VBQ3ZEQyxNQUFNLENBQUNDLFdBQVcsQ0FBQztJQUFFQyxNQUFNLEVBQUVULEVBQUUsQ0FBQ0MsTUFBTSxDQUFDUyxLQUFLLEdBQUdWLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDVTtFQUFPLENBQUMsQ0FBQztBQUN0RTtBQUNBUCxNQUFNLENBQUNRLGdCQUFnQixDQUFDLFFBQVEsRUFBRVYsTUFBTSxFQUFFLEtBQUssQ0FBQztBQUNoREEsTUFBTSxDQUFDLENBQUM7O0FBRVI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDMUZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWV4cGVyaW1lbnQtMS8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vd2ViLWV4cGVyaW1lbnQtMS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQ2FtZXJhLCBNZXNoLCBQcm9ncmFtLCBSZW5kZXJlciwgU3BoZXJlLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xyXG5cclxuXHJcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnLi4vc2hhcmVkL3NoYWRlcnMvYmxvYi12ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGZyYWdtZW50IGZyb20gJy4uL3NoYXJlZC9zaGFkZXJzL2Jsb2ItZnJhZ21lbnQuZ2xzbCdcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvY2sge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEVsYXBzZWRUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRUaW1lKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KClcclxuICAgIH1cclxufVxyXG5cclxuLy9DbG9ja1xyXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jaygpXHJcblxyXG4vL0NhbnZhcyBDcmVhdGlvblxyXG5jb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuICAgIGFscGhhOiB0cnVlLFxyXG4gICAgYW50aWFsaWFzOiB0cnVlXHJcbn0pXHJcblxyXG5yZW5kZXJlci5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICdjYW52YXMnXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2wuY2FudmFzKVxyXG5cclxuLy9DYW1lcmFcclxuLy8gY29uc3QgY2FtZXJhID0gbmV3IENhbWVyYShnbClcclxuLy8gY2FtZXJhLnBvc2l0aW9uLnogPSAzXHJcbi8vIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMSwgNylcclxuLy8gY2FtZXJhLmxvb2tBdChbMCwgMCwgMF0pXHJcblxyXG4vL0NhbnZhcyBSZXNpemVcclxuZnVuY3Rpb24gcmVzaXplKCkge1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgY2FtZXJhLnBlcnNwZWN0aXZlKHsgYXNwZWN0OiBnbC5jYW52YXMud2lkdGggLyBnbC5jYW52YXMuaGVpZ2h0IH0pXHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZSwgZmFsc2UpXHJcbnJlc2l6ZSgpXHJcblxyXG4vL1NjZW5lXHJcbi8vIGNvbnN0IHNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXHJcblxyXG4vL0dlb21ldHJ5XHJcbi8vIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFNwaGVyZShnbCwge1xyXG4vLyAgICAgd2lkdGhTZWdtZW50czogMTAwMFxyXG4vLyB9KVxyXG5cclxuLy9Qcm9ncmFtXHJcbi8vIGNvbnN0IHByb2dyYW0gPSBuZXcgUHJvZ3JhbShnbCwge1xyXG4vLyAgICAgdmVydGV4LFxyXG4vLyAgICAgZnJhZ21lbnQsXHJcbi8vICAgICB1bmlmb3Jtczoge1xyXG4vLyAgICAgICAgIHVUaW1lOiB7IHZhbHVlOiAwIH0sXHJcbi8vICAgICAgICAgdUxpZ2h0RGlyZWN0aW9uOiB7IHZhbHVlOiBbMS4wLCAxLjAsIDEuMF0gfSxcclxuLy8gICAgICAgICB1QW1iaWVudExpZ2h0OiB7IHZhbHVlOiBbMC4xLCAwLjEsIDAuMV0gfSxcclxuLy8gICAgICAgICB1QWxwaGE6IHsgdmFsdWU6IDEuMCB9XHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vL01lc2hcclxuLy8gY29uc3QgbWVzaCA9IG5ldyBNZXNoKGdsLCB7XHJcbi8vICAgICBnZW9tZXRyeSxcclxuLy8gICAgIHByb2dyYW1cclxuLy8gfSlcclxuXHJcbi8vIG1lc2guc2V0UGFyZW50KHNjZW5lKVxyXG5cclxuLy9SZW5kZXJcclxuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSlcclxuLy8gZnVuY3Rpb24gdXBkYXRlKCkge1xyXG4vLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSlcclxuXHJcbi8vICAgICBzY2VuZS5jaGlsZHJlbi5mb3JFYWNoKG1lc2ggPT4ge1xyXG4vLyAgICAgICAgIG1lc2gucHJvZ3JhbS51bmlmb3Jtcy51VGltZS52YWx1ZSA9IGNsb2NrLmdldEVsYXBzZWRUaW1lKCkgLyAxMDAwMFxyXG4vLyAgICAgfSlcclxuXHJcbi8vICAgICByZW5kZXJlci5yZW5kZXIoe1xyXG4vLyAgICAgICAgIHNjZW5lLFxyXG4vLyAgICAgICAgIGNhbWVyYVxyXG4vLyAgICAgfSlcclxuLy8gfSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVkOTMzOTM5NmM4NmI2Njk2NmJhXCIpIl0sIm5hbWVzIjpbIlRIUkVFIiwidmVydGV4IiwiZnJhZ21lbnQiLCJDbG9jayIsImNvbnN0cnVjdG9yIiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJnZXRFbGFwc2VkVGltZSIsInJlc2V0VGltZSIsImNsb2NrIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJkb21FbGVtZW50IiwiY2xhc3NOYW1lIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJnbCIsImNhbnZhcyIsInJlc2l6ZSIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJjYW1lcmEiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=