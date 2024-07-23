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
    uColor: {
      value: '#6D9886'
    },
    uGradientStrength: {
      value: 3
    },
    uSpeed: {
      value: 1.1
    },
    uNoiseStrength: {
      value: 0.3
    },
    uDisplacementStrength: {
      value: 0.57
    },
    uFractAmount: {
      value: 4
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
/******/ 	__webpack_require__.h = () => ("9d2afa3c646c36412f61")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDOztBQUVyQjtBQUNBZSxxQkFBcUIsQ0FBQ0MsTUFBTSxDQUFDO0FBQzdCLFNBQVNBLE1BQU1BLENBQUEsRUFBRztFQUNkRCxxQkFBcUIsQ0FBQ0MsTUFBTSxDQUFDOztFQUU3QjtFQUNBO0VBQ0E7O0VBRUF2QyxRQUFRLENBQUN3QyxNQUFNLENBQUM7SUFDWmpCLEtBQUs7SUFDTGI7RUFDSixDQUFDLENBQUM7QUFDTjs7Ozs7Ozs7VUM1RkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItZXhwZXJpbWVudC0xLy4vc3JjL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly93ZWItZXhwZXJpbWVudC0xL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIE1lc2gsIFByb2dyYW0sIFJlbmRlcmVyLCBTcGhlcmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcclxuXHJcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnLi4vc2hhcmVkL3NoYWRlcnMvYmxvYi12ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGZyYWdtZW50IGZyb20gJy4uL3NoYXJlZC9zaGFkZXJzL2Jsb2ItZnJhZ21lbnQuZ2xzbCdcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvY2sge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEVsYXBzZWRUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRUaW1lKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KClcclxuICAgIH1cclxufVxyXG5cclxuLy9DbG9ja1xyXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jaygpXHJcblxyXG4vL0NhbnZhcyBDcmVhdGlvblxyXG5jb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XHJcbiAgICBhbHBoYTogdHJ1ZSxcclxuICAgIGFudGlhbGlhczogdHJ1ZVxyXG59KVxyXG5cclxuY29uc3QgZ2wgPSByZW5kZXJlci5nbFxyXG5nbC5jYW52YXMuY2xhc3NMaXN0LmFkZCgnd2ViZ2wnKVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdsLmNhbnZhcylcclxuXHJcbi8vQ2FtZXJhXHJcbmNvbnN0IGNhbWVyYSA9IG5ldyBDYW1lcmEoZ2wpXHJcbmNhbWVyYS5wb3NpdGlvbi56ID0gM1xyXG4vLyBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDEsIDcpXHJcbi8vIGNhbWVyYS5sb29rQXQoWzAsIDAsIDBdKVxyXG5cclxuLy9DYW52YXMgUmVzaXplXHJcbmZ1bmN0aW9uIHJlc2l6ZSgpIHtcclxuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcclxuICAgIGNhbWVyYS5wZXJzcGVjdGl2ZSh7IGFzcGVjdDogZ2wuY2FudmFzLndpZHRoIC8gZ2wuY2FudmFzLmhlaWdodCB9KVxyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUsIGZhbHNlKVxyXG5yZXNpemUoKVxyXG5cclxuLy9TY2VuZVxyXG5jb25zdCBzY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxyXG5cclxuLy9HZW9tZXRyeVxyXG5jb25zdCBnZW9tZXRyeSA9IG5ldyBTcGhlcmUoZ2wsIHtcclxuICAgIHdpZHRoU2VnbWVudHM6IDEwMDBcclxufSlcclxuXHJcbi8vUHJvZ3JhbVxyXG5jb25zdCBwcm9ncmFtID0gbmV3IFByb2dyYW0oZ2wsIHtcclxuICAgIHZlcnRleCxcclxuICAgIGZyYWdtZW50LFxyXG4gICAgdW5pZm9ybXM6IHtcclxuICAgICAgICB1VGltZTogeyB2YWx1ZTogMCB9LFxyXG4gICAgICAgIHVDb2xvcjogeyB2YWx1ZTogJyM2RDk4ODYnIH0sXHJcbiAgICAgICAgdUdyYWRpZW50U3RyZW5ndGg6IHsgdmFsdWU6IDMgfSxcclxuICAgICAgICB1U3BlZWQ6IHsgdmFsdWU6IDEuMSB9LFxyXG4gICAgICAgIHVOb2lzZVN0cmVuZ3RoOiB7IHZhbHVlOiAwLjMgfSxcclxuICAgICAgICB1RGlzcGxhY2VtZW50U3RyZW5ndGg6IHsgdmFsdWU6IDAuNTcgfSxcclxuICAgICAgICB1RnJhY3RBbW91bnQ6IHsgdmFsdWU6IDQgfSxcclxuICAgIH1cclxufSlcclxuXHJcbi8vTWVzaFxyXG5jb25zdCBtZXNoID0gbmV3IE1lc2goZ2wsIHtcclxuICAgIGdlb21ldHJ5LFxyXG4gICAgcHJvZ3JhbVxyXG59KVxyXG5cclxubWVzaC5zZXRQYXJlbnQoc2NlbmUpXHJcblxyXG4vL1JlbmRlclxyXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKVxyXG5mdW5jdGlvbiB1cGRhdGUoKSB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKVxyXG5cclxuICAgIC8vIHNjZW5lLmNoaWxkcmVuLmZvckVhY2gobWVzaCA9PiB7XHJcbiAgICAvLyAgICAgbWVzaC5wcm9ncmFtLnVuaWZvcm1zLnVUaW1lLnZhbHVlID0gY2xvY2suZ2V0RWxhcHNlZFRpbWUoKSAvIDEwMDAwXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIHJlbmRlcmVyLnJlbmRlcih7XHJcbiAgICAgICAgc2NlbmUsXHJcbiAgICAgICAgY2FtZXJhXHJcbiAgICB9KVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWQyYWZhM2M2NDZjMzY0MTJmNjFcIikiXSwibmFtZXMiOlsiQ2FtZXJhIiwiTWVzaCIsIlByb2dyYW0iLCJSZW5kZXJlciIsIlNwaGVyZSIsIlRyYW5zZm9ybSIsInZlcnRleCIsImZyYWdtZW50IiwiQ2xvY2siLCJjb25zdHJ1Y3RvciIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiZ2V0RWxhcHNlZFRpbWUiLCJyZXNldFRpbWUiLCJjbG9jayIsInJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJnbCIsImNhbnZhcyIsImNsYXNzTGlzdCIsImFkZCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FtZXJhIiwicG9zaXRpb24iLCJ6IiwicmVzaXplIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwic2NlbmUiLCJnZW9tZXRyeSIsIndpZHRoU2VnbWVudHMiLCJwcm9ncmFtIiwidW5pZm9ybXMiLCJ1VGltZSIsInZhbHVlIiwidUNvbG9yIiwidUdyYWRpZW50U3RyZW5ndGgiLCJ1U3BlZWQiLCJ1Tm9pc2VTdHJlbmd0aCIsInVEaXNwbGFjZW1lbnRTdHJlbmd0aCIsInVGcmFjdEFtb3VudCIsIm1lc2giLCJzZXRQYXJlbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9