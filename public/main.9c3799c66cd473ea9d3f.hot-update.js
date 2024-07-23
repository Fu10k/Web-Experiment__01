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
  fragment: _shared_shaders_blob_fragment_glsl__WEBPACK_IMPORTED_MODULE_1__["default"],
  uniforms: {
    uTime: {
      value: 0
    },
    uLightDirection: {
      value: [1.0, 1.0, 1.0]
    },
    uAmbientLight: {
      value: [0.1, 0.1, 0.1]
    },
    uAlpha: {
      value: 1.0
    }
  }
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
  scene.children.forEach(mesh => {
    mesh.program.uniforms.uTime.value = clock.getElapsedTime() / 10000;
  });
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
/******/ 	__webpack_require__.h = () => ("4be587c7bcd98b4c0401")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQ2RELHFCQUFxQixDQUFDQyxNQUFNLENBQUM7RUFFN0JiLEtBQUssQ0FBQ2MsUUFBUSxDQUFDQyxPQUFPLENBQUNMLElBQUksSUFBSTtJQUMzQkEsSUFBSSxDQUFDUCxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLEdBQUc5QixLQUFLLENBQUNGLGNBQWMsQ0FBQyxDQUFDLEdBQUcsS0FBSztFQUN0RSxDQUFDLENBQUM7RUFFRkcsUUFBUSxDQUFDdUMsTUFBTSxDQUFDO0lBQ1poQixLQUFLO0lBQ0xiO0VBQ0osQ0FBQyxDQUFDO0FBQ047Ozs7Ozs7O1VDMUZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWV4cGVyaW1lbnQtMS8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vd2ViLWV4cGVyaW1lbnQtMS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBNZXNoLCBQcm9ncmFtLCBSZW5kZXJlciwgU3BoZXJlLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXHJcblxyXG5cclxuaW1wb3J0IHZlcnRleCBmcm9tICcuLi9zaGFyZWQvc2hhZGVycy9ibG9iLXZlcnRleC5nbHNsJ1xyXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnLi4vc2hhcmVkL3NoYWRlcnMvYmxvYi1mcmFnbWVudC5nbHNsJ1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9jayB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxhcHNlZFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWVcclxuICAgIH1cclxuXHJcbiAgICByZXNldFRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKVxyXG4gICAgfVxyXG59XHJcblxyXG4vL0Nsb2NrXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKClcclxuXHJcbi8vQ2FudmFzIENyZWF0aW9uXHJcbmNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcclxuICAgIGFscGhhOiB0cnVlLFxyXG4gICAgYW50aWFsaWFzOiB0cnVlXHJcbn0pXHJcblxyXG5jb25zdCBnbCA9IHJlbmRlcmVyLmdsXHJcbmdsLmNhbnZhcy5jbGFzc0xpc3QuYWRkKCd3ZWJnbCcpXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2wuY2FudmFzKVxyXG5cclxuLy9DYW1lcmFcclxuY29uc3QgY2FtZXJhID0gbmV3IENhbWVyYShnbClcclxuY2FtZXJhLnBvc2l0aW9uLnogPSAzXHJcbi8vIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMSwgNylcclxuLy8gY2FtZXJhLmxvb2tBdChbMCwgMCwgMF0pXHJcblxyXG4vL0NhbnZhcyBSZXNpemVcclxuZnVuY3Rpb24gcmVzaXplKCkge1xyXG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgY2FtZXJhLnBlcnNwZWN0aXZlKHsgYXNwZWN0OiBnbC5jYW52YXMud2lkdGggLyBnbC5jYW52YXMuaGVpZ2h0IH0pXHJcbn1cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZSwgZmFsc2UpXHJcbnJlc2l6ZSgpXHJcblxyXG4vL1NjZW5lXHJcbmNvbnN0IHNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXHJcblxyXG4vL0dlb21ldHJ5XHJcbmNvbnN0IGdlb21ldHJ5ID0gbmV3IFNwaGVyZShnbCwge1xyXG4gICAgd2lkdGhTZWdtZW50czogMTAwMFxyXG59KVxyXG5cclxuLy9Qcm9ncmFtXHJcbmNvbnN0IHByb2dyYW0gPSBuZXcgUHJvZ3JhbShnbCwge1xyXG4gICAgdmVydGV4LFxyXG4gICAgZnJhZ21lbnQsXHJcbiAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgIHVUaW1lOiB7IHZhbHVlOiAwIH0sXHJcbiAgICAgICAgdUxpZ2h0RGlyZWN0aW9uOiB7IHZhbHVlOiBbMS4wLCAxLjAsIDEuMF0gfSxcclxuICAgICAgICB1QW1iaWVudExpZ2h0OiB7IHZhbHVlOiBbMC4xLCAwLjEsIDAuMV0gfSxcclxuICAgICAgICB1QWxwaGE6IHsgdmFsdWU6IDEuMCB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL01lc2hcclxuY29uc3QgbWVzaCA9IG5ldyBNZXNoKGdsLCB7XHJcbiAgICBnZW9tZXRyeSxcclxuICAgIHByb2dyYW1cclxufSlcclxuXHJcbm1lc2guc2V0UGFyZW50KHNjZW5lKVxyXG5cclxuLy9SZW5kZXJcclxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSlcclxuZnVuY3Rpb24gdXBkYXRlKCkge1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSlcclxuXHJcbiAgICBzY2VuZS5jaGlsZHJlbi5mb3JFYWNoKG1lc2ggPT4ge1xyXG4gICAgICAgIG1lc2gucHJvZ3JhbS51bmlmb3Jtcy51VGltZS52YWx1ZSA9IGNsb2NrLmdldEVsYXBzZWRUaW1lKCkgLyAxMDAwMFxyXG4gICAgfSlcclxuXHJcbiAgICByZW5kZXJlci5yZW5kZXIoe1xyXG4gICAgICAgIHNjZW5lLFxyXG4gICAgICAgIGNhbWVyYVxyXG4gICAgfSlcclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRiZTU4N2M3YmNkOThiNGMwNDAxXCIpIl0sIm5hbWVzIjpbIkNhbWVyYSIsIk1lc2giLCJQcm9ncmFtIiwiUmVuZGVyZXIiLCJTcGhlcmUiLCJUcmFuc2Zvcm0iLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsIkNsb2NrIiwiY29uc3RydWN0b3IiLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdldEVsYXBzZWRUaW1lIiwicmVzZXRUaW1lIiwiY2xvY2siLCJyZW5kZXJlciIsImFscGhhIiwiYW50aWFsaWFzIiwiZ2wiLCJjYW52YXMiLCJjbGFzc0xpc3QiLCJhZGQiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbWVyYSIsInBvc2l0aW9uIiwieiIsInJlc2l6ZSIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjZW5lIiwiZ2VvbWV0cnkiLCJ3aWR0aFNlZ21lbnRzIiwicHJvZ3JhbSIsInVuaWZvcm1zIiwidVRpbWUiLCJ2YWx1ZSIsInVMaWdodERpcmVjdGlvbiIsInVBbWJpZW50TGlnaHQiLCJ1QWxwaGEiLCJtZXNoIiwic2V0UGFyZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==