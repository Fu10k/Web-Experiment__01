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
/******/ 	__webpack_require__.h = () => ("3bb2c6e2e99e8c0df55b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iN2ExMzE4NjI0OGU3N2Y2ZTIzMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDOEI7QUFHeUI7QUFDSTtBQUV2QztBQUViLE1BQU1HLEtBQUssQ0FBQztFQUNmQyxXQUFXQSxDQUFBLEVBQUc7SUFDVixJQUFJLENBQUNDLFNBQVMsR0FBR0MsV0FBVyxDQUFDQyxHQUFHLENBQUMsQ0FBQztFQUN0QztFQUVBQyxjQUFjQSxDQUFBLEVBQUc7SUFDYixPQUFPRixXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDRixTQUFTO0VBQzdDO0VBRUFJLFNBQVNBLENBQUEsRUFBRztJQUNSLElBQUksQ0FBQ0osU0FBUyxHQUFHQyxXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0VBQ3RDO0FBQ0o7O0FBRUE7QUFDQSxNQUFNRyxLQUFLLEdBQUcsSUFBSVAsS0FBSyxDQUFDLENBQUM7O0FBRXpCO0FBQ0EsTUFBTVEsUUFBUSxHQUFHLElBQUlYLGdEQUFtQixDQUFDO0VBQ3JDYSxLQUFLLEVBQUUsSUFBSTtFQUNYQyxTQUFTLEVBQUU7QUFDZixDQUFDLENBQUM7QUFFRkgsUUFBUSxDQUFDSSxVQUFVLENBQUNDLFNBQVMsR0FBRyxRQUFRO0FBQ3hDQyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxFQUFFLENBQUNDLE1BQU0sQ0FBQzs7QUFFcEM7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsTUFBTSxDQUFDSCxFQUFFLENBQUM7QUFDN0JFLE1BQU0sQ0FBQ0UsUUFBUSxDQUFDQyxDQUFDLEdBQUcsQ0FBQztBQUNyQjtBQUNBOztBQUVBO0FBQ0EsU0FBU0MsTUFBTUEsQ0FBQSxFQUFHO0VBQ2RmLFFBQVEsQ0FBQ2dCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxVQUFVLEVBQUVELE1BQU0sQ0FBQ0UsV0FBVyxDQUFDO0VBQ3ZEUixNQUFNLENBQUNTLFdBQVcsQ0FBQztJQUFFQyxNQUFNLEVBQUVaLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDWSxLQUFLLEdBQUdiLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDYTtFQUFPLENBQUMsQ0FBQztBQUN0RTtBQUNBTixNQUFNLENBQUNPLGdCQUFnQixDQUFDLFFBQVEsRUFBRVQsTUFBTSxFQUFFLEtBQUssQ0FBQztBQUNoREEsTUFBTSxDQUFDLENBQUM7O0FBRVI7QUFDQSxNQUFNVSxLQUFLLEdBQUcsSUFBSUMsU0FBUyxDQUFDLENBQUM7O0FBRTdCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQUlDLE1BQU0sQ0FBQ25CLEVBQUUsRUFBRTtFQUM1Qm9CLGFBQWEsRUFBRTtBQUNuQixDQUFDLENBQUM7O0FBRUY7QUFDQSxNQUFNQyxPQUFPLEdBQUcsSUFBSUMsT0FBTyxDQUFDdEIsRUFBRSxFQUFFO0VBQzVCbkIsTUFBTTtFQUNOQyxRQUFRO0VBQ1J5QyxRQUFRLEVBQUU7SUFDTkMsS0FBSyxFQUFFO01BQUVDLEtBQUssRUFBRTtJQUFFLENBQUM7SUFDbkJDLGVBQWUsRUFBRTtNQUFFRCxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFBRSxDQUFDO0lBQzNDRSxhQUFhLEVBQUU7TUFBRUYsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0lBQUUsQ0FBQztJQUN6Q0csTUFBTSxFQUFFO01BQUVILEtBQUssRUFBRTtJQUFJO0VBQ3pCO0FBQ0osQ0FBQyxDQUFDOztBQUVGO0FBQ0EsTUFBTUksSUFBSSxHQUFHLElBQUlDLElBQUksQ0FBQzlCLEVBQUUsRUFBRTtFQUN0QmtCLFFBQVE7RUFDUkc7QUFDSixDQUFDLENBQUM7QUFFRlEsSUFBSSxDQUFDRSxTQUFTLENBQUNmLEtBQUssQ0FBQzs7QUFFckI7QUFDQWdCLHFCQUFxQixDQUFDQyxNQUFNLENBQUM7QUFDN0IsU0FBU0EsTUFBTUEsQ0FBQSxFQUFHO0VBQ2RELHFCQUFxQixDQUFDQyxNQUFNLENBQUM7RUFFN0JqQixLQUFLLENBQUNrQixRQUFRLENBQUNDLE9BQU8sQ0FBQ04sSUFBSSxJQUFJO0lBQzNCQSxJQUFJLENBQUNSLE9BQU8sQ0FBQ0UsUUFBUSxDQUFDQyxLQUFLLENBQUNDLEtBQUssR0FBR25DLEtBQUssQ0FBQ0YsY0FBYyxDQUFDLENBQUMsR0FBRyxLQUFLO0VBQ3RFLENBQUMsQ0FBQztFQUVGRyxRQUFRLENBQUM2QyxNQUFNLENBQUM7SUFDWnBCLEtBQUs7SUFDTGQ7RUFDSixDQUFDLENBQUM7QUFDTjs7Ozs7Ozs7VUMxRkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItZXhwZXJpbWVudC0xLy4vc3JjL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly93ZWItZXhwZXJpbWVudC0xL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBDYW1lcmEsIE1lc2gsIFByb2dyYW0sIFJlbmRlcmVyLCBTcGhlcmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcblxyXG5cclxuaW1wb3J0IHZlcnRleCBmcm9tICcuLi9zaGFyZWQvc2hhZGVycy9ibG9iLXZlcnRleC5nbHNsJ1xyXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnLi4vc2hhcmVkL3NoYWRlcnMvYmxvYi1mcmFnbWVudC5nbHNsJ1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9jayB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxhcHNlZFRpbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWVcclxuICAgIH1cclxuXHJcbiAgICByZXNldFRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKVxyXG4gICAgfVxyXG59XHJcblxyXG4vL0Nsb2NrXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKClcclxuXHJcbi8vQ2FudmFzIENyZWF0aW9uXHJcbmNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgYWxwaGE6IHRydWUsXHJcbiAgICBhbnRpYWxpYXM6IHRydWVcclxufSlcclxuXHJcbnJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJ2NhbnZhcydcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnbC5jYW52YXMpXHJcblxyXG4vL0NhbWVyYVxyXG5jb25zdCBjYW1lcmEgPSBuZXcgQ2FtZXJhKGdsKVxyXG5jYW1lcmEucG9zaXRpb24ueiA9IDNcclxuLy8gY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAxLCA3KVxyXG4vLyBjYW1lcmEubG9va0F0KFswLCAwLCAwXSlcclxuXHJcbi8vQ2FudmFzIFJlc2l6ZVxyXG5mdW5jdGlvbiByZXNpemUoKSB7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICBjYW1lcmEucGVyc3BlY3RpdmUoeyBhc3BlY3Q6IGdsLmNhbnZhcy53aWR0aCAvIGdsLmNhbnZhcy5oZWlnaHQgfSlcclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplLCBmYWxzZSlcclxucmVzaXplKClcclxuXHJcbi8vU2NlbmVcclxuY29uc3Qgc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcclxuXHJcbi8vR2VvbWV0cnlcclxuY29uc3QgZ2VvbWV0cnkgPSBuZXcgU3BoZXJlKGdsLCB7XHJcbiAgICB3aWR0aFNlZ21lbnRzOiAxMDAwXHJcbn0pXHJcblxyXG4vL1Byb2dyYW1cclxuY29uc3QgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtKGdsLCB7XHJcbiAgICB2ZXJ0ZXgsXHJcbiAgICBmcmFnbWVudCxcclxuICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdVRpbWU6IHsgdmFsdWU6IDAgfSxcclxuICAgICAgICB1TGlnaHREaXJlY3Rpb246IHsgdmFsdWU6IFsxLjAsIDEuMCwgMS4wXSB9LFxyXG4gICAgICAgIHVBbWJpZW50TGlnaHQ6IHsgdmFsdWU6IFswLjEsIDAuMSwgMC4xXSB9LFxyXG4gICAgICAgIHVBbHBoYTogeyB2YWx1ZTogMS4wIH1cclxuICAgIH1cclxufSlcclxuXHJcbi8vTWVzaFxyXG5jb25zdCBtZXNoID0gbmV3IE1lc2goZ2wsIHtcclxuICAgIGdlb21ldHJ5LFxyXG4gICAgcHJvZ3JhbVxyXG59KVxyXG5cclxubWVzaC5zZXRQYXJlbnQoc2NlbmUpXHJcblxyXG4vL1JlbmRlclxyXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKVxyXG5mdW5jdGlvbiB1cGRhdGUoKSB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKVxyXG5cclxuICAgIHNjZW5lLmNoaWxkcmVuLmZvckVhY2gobWVzaCA9PiB7XHJcbiAgICAgICAgbWVzaC5wcm9ncmFtLnVuaWZvcm1zLnVUaW1lLnZhbHVlID0gY2xvY2suZ2V0RWxhcHNlZFRpbWUoKSAvIDEwMDAwXHJcbiAgICB9KVxyXG5cclxuICAgIHJlbmRlcmVyLnJlbmRlcih7XHJcbiAgICAgICAgc2NlbmUsXHJcbiAgICAgICAgY2FtZXJhXHJcbiAgICB9KVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2JiMmM2ZTJlOTllOGMwZGY1NWJcIikiXSwibmFtZXMiOlsiVEhSRUUiLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsIkNsb2NrIiwiY29uc3RydWN0b3IiLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdldEVsYXBzZWRUaW1lIiwicmVzZXRUaW1lIiwiY2xvY2siLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImRvbUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImdsIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6IiwicmVzaXplIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJnZW9tZXRyeSIsIlNwaGVyZSIsIndpZHRoU2VnbWVudHMiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsInVuaWZvcm1zIiwidVRpbWUiLCJ2YWx1ZSIsInVMaWdodERpcmVjdGlvbiIsInVBbWJpZW50TGlnaHQiLCJ1QWxwaGEiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsImNoaWxkcmVuIiwiZm9yRWFjaCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=