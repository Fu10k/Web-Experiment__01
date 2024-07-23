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
const renderer = new Renderer({
  alpha: true,
  antialias: true
});
const gl = renderer.gl;
gl.canvas.classList.add('webgl');
document.body.appendChild(gl.canvas);

//Camera
const camera = new Camera(gl);
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
const scene = new Transform();

//Geometry
const geometry = new Sphere(gl, {
  widthSegments: 1000
});

//Program
const program = new Program(gl, {
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
const mesh = new Mesh(gl, {
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
/******/ 	__webpack_require__.h = () => ("245784d39ea50cfa6220")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUIsQ0FBQ0MsTUFBTSxDQUFDO0VBRTdCakIsS0FBSyxDQUFDa0IsUUFBUSxDQUFDQyxPQUFPLENBQUNOLElBQUksSUFBSTtJQUMzQkEsSUFBSSxDQUFDUixPQUFPLENBQUNFLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxLQUFLLEdBQUduQyxLQUFLLENBQUNGLGNBQWMsQ0FBQyxDQUFDLEdBQUcsS0FBSztFQUN0RSxDQUFDLENBQUM7RUFFRkcsUUFBUSxDQUFDNkMsTUFBTSxDQUFDO0lBQ1pwQixLQUFLO0lBQ0xkO0VBQ0osQ0FBQyxDQUFDO0FBQ047Ozs7Ozs7O1VDM0ZBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWV4cGVyaW1lbnQtMS8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vd2ViLWV4cGVyaW1lbnQtMS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgQ2FtZXJhLCBNZXNoLCBQcm9ncmFtLCBSZW5kZXJlciwgU3BoZXJlLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xyXG5cclxuXHJcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnLi4vc2hhcmVkL3NoYWRlcnMvYmxvYi12ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGZyYWdtZW50IGZyb20gJy4uL3NoYXJlZC9zaGFkZXJzL2Jsb2ItZnJhZ21lbnQuZ2xzbCdcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvY2sge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEVsYXBzZWRUaW1lKCkge1xyXG4gICAgICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRUaW1lKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KClcclxuICAgIH1cclxufVxyXG5cclxuLy9DbG9ja1xyXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jaygpXHJcblxyXG4vL0NhbnZhcyBDcmVhdGlvblxyXG5jb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XHJcbiAgICBhbHBoYTogdHJ1ZSxcclxuICAgIGFudGlhbGlhczogdHJ1ZVxyXG59KVxyXG5cclxuY29uc3QgZ2wgPSByZW5kZXJlci5nbFxyXG5nbC5jYW52YXMuY2xhc3NMaXN0LmFkZCgnd2ViZ2wnKVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdsLmNhbnZhcylcclxuXHJcbi8vQ2FtZXJhXHJcbmNvbnN0IGNhbWVyYSA9IG5ldyBDYW1lcmEoZ2wpXHJcbmNhbWVyYS5wb3NpdGlvbi56ID0gM1xyXG4vLyBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDEsIDcpXHJcbi8vIGNhbWVyYS5sb29rQXQoWzAsIDAsIDBdKVxyXG5cclxuLy9DYW52YXMgUmVzaXplXHJcbmZ1bmN0aW9uIHJlc2l6ZSgpIHtcclxuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcclxuICAgIGNhbWVyYS5wZXJzcGVjdGl2ZSh7IGFzcGVjdDogZ2wuY2FudmFzLndpZHRoIC8gZ2wuY2FudmFzLmhlaWdodCB9KVxyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUsIGZhbHNlKVxyXG5yZXNpemUoKVxyXG5cclxuLy9TY2VuZVxyXG5jb25zdCBzY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxyXG5cclxuLy9HZW9tZXRyeVxyXG5jb25zdCBnZW9tZXRyeSA9IG5ldyBTcGhlcmUoZ2wsIHtcclxuICAgIHdpZHRoU2VnbWVudHM6IDEwMDBcclxufSlcclxuXHJcbi8vUHJvZ3JhbVxyXG5jb25zdCBwcm9ncmFtID0gbmV3IFByb2dyYW0oZ2wsIHtcclxuICAgIHZlcnRleCxcclxuICAgIGZyYWdtZW50LFxyXG4gICAgdW5pZm9ybXM6IHtcclxuICAgICAgICB1VGltZTogeyB2YWx1ZTogMCB9LFxyXG4gICAgICAgIHVMaWdodERpcmVjdGlvbjogeyB2YWx1ZTogWzEuMCwgMS4wLCAxLjBdIH0sXHJcbiAgICAgICAgdUFtYmllbnRMaWdodDogeyB2YWx1ZTogWzAuMSwgMC4xLCAwLjFdIH0sXHJcbiAgICAgICAgdUFscGhhOiB7IHZhbHVlOiAxLjAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy9NZXNoXHJcbmNvbnN0IG1lc2ggPSBuZXcgTWVzaChnbCwge1xyXG4gICAgZ2VvbWV0cnksXHJcbiAgICBwcm9ncmFtXHJcbn0pXHJcblxyXG5tZXNoLnNldFBhcmVudChzY2VuZSlcclxuXHJcbi8vUmVuZGVyXHJcbnJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXHJcbmZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpXHJcblxyXG4gICAgc2NlbmUuY2hpbGRyZW4uZm9yRWFjaChtZXNoID0+IHtcclxuICAgICAgICBtZXNoLnByb2dyYW0udW5pZm9ybXMudVRpbWUudmFsdWUgPSBjbG9jay5nZXRFbGFwc2VkVGltZSgpIC8gMTAwMDBcclxuICAgIH0pXHJcblxyXG4gICAgcmVuZGVyZXIucmVuZGVyKHtcclxuICAgICAgICBzY2VuZSxcclxuICAgICAgICBjYW1lcmFcclxuICAgIH0pXHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyNDU3ODRkMzllYTUwY2ZhNjIyMFwiKSJdLCJuYW1lcyI6WyJUSFJFRSIsInZlcnRleCIsImZyYWdtZW50IiwiQ2xvY2siLCJjb25zdHJ1Y3RvciIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiZ2V0RWxhcHNlZFRpbWUiLCJyZXNldFRpbWUiLCJjbG9jayIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImdsIiwiY2FudmFzIiwiY2xhc3NMaXN0IiwiYWRkIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJyZXNpemUiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJ3aWR0aCIsImhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY2VuZSIsIlRyYW5zZm9ybSIsImdlb21ldHJ5IiwiU3BoZXJlIiwid2lkdGhTZWdtZW50cyIsInByb2dyYW0iLCJQcm9ncmFtIiwidW5pZm9ybXMiLCJ1VGltZSIsInZhbHVlIiwidUxpZ2h0RGlyZWN0aW9uIiwidUFtYmllbnRMaWdodCIsInVBbHBoYSIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==