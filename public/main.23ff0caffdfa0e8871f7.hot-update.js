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
  color: 0xffffff
});
directionalLight.position.set(-2, 2, 3.5);

//Mesh
const mesh = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(geometry, new three_custom_shader_material_vanilla__WEBPACK_IMPORTED_MODULE_0__["default"]({
  silent: true,
  baseMaterial: three__WEBPACK_IMPORTED_MODULE_4__.MeshPhysicalMaterial,
  vertexShader: _shared_shaders_blob_vertex_glsl__WEBPACK_IMPORTED_MODULE_1__["default"],
  fragmentShader: _shared_shaders_blob_fragment_glsl__WEBPACK_IMPORTED_MODULE_2__["default"],
  roughness: 0.56,
  metalness: 0.76,
  clearcoat: 0,
  ior: 2.81,
  iridescence: 0.96,
  uniforms: {
    uTime: {
      value: 0
    },
    uColor: {
      value: new three__WEBPACK_IMPORTED_MODULE_4__.Color('#6D9886')
    },
    uGradientStrength: {
      value: 1
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
/******/ 	__webpack_require__.h = () => ("d7c0169074a1a52fb386")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yM2ZmMGNhZmZkZmEwZTg4NzFmNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUN5QztBQUVoQjtBQUNJO0FBRXZDO0FBRWIsTUFBTUksS0FBSyxDQUFDO0VBQ2ZDLFdBQVdBLENBQUEsRUFBRztJQUNWLElBQUksQ0FBQ0MsU0FBUyxHQUFHQyxXQUFXLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0VBQ3RDO0VBRUFDLGNBQWNBLENBQUEsRUFBRztJQUNiLE9BQU9GLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNGLFNBQVM7RUFDN0M7RUFFQUksU0FBU0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDSixTQUFTLEdBQUdDLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7RUFDdEM7QUFDSjs7QUFFQTtBQUNBLE1BQU1HLEtBQUssR0FBRyxJQUFJUCxLQUFLLENBQUMsQ0FBQzs7QUFFekI7QUFDQSxNQUFNUSxRQUFRLEdBQUcsSUFBSVosZ0RBQW1CLENBQUM7RUFDckNjLEtBQUssRUFBRSxLQUFLO0VBQ1pDLFNBQVMsRUFBRTtBQUNmLENBQUMsQ0FBQztBQUVGSCxRQUFRLENBQUNJLFVBQVUsQ0FBQ0MsU0FBUyxHQUFHLFFBQVE7QUFDeENDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXLENBQUNSLFFBQVEsQ0FBQ0ksVUFBVSxDQUFDOztBQUU5QztBQUNBLE1BQU1LLEtBQUssR0FBRyxJQUFJckIsd0NBQVcsQ0FBQyxDQUFDOztBQUUvQjtBQUNBLE1BQU11QixNQUFNLEdBQUcsSUFBSXZCLG9EQUF1QixDQUFDLEVBQUUsRUFBRXlCLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHRCxNQUFNLENBQUNFLFdBQVcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO0FBQ2pHSixNQUFNLENBQUNLLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHLENBQUM7QUFDckI7QUFDQTs7QUFFQTtBQUNBLFNBQVNDLE1BQU1BLENBQUEsRUFBRztFQUNkbEIsUUFBUSxDQUFDbUIsT0FBTyxDQUFDTixNQUFNLENBQUNDLFVBQVUsRUFBRUQsTUFBTSxDQUFDRSxXQUFXLENBQUM7RUFDdkQ7QUFDSjtBQUNBRixNQUFNLENBQUNPLGdCQUFnQixDQUFDLFFBQVEsRUFBRUYsTUFBTSxFQUFFLEtBQUssQ0FBQztBQUNoREEsTUFBTSxDQUFDLENBQUM7O0FBRVI7QUFDQSxNQUFNRyxRQUFRLEdBQUcsSUFBSWpDLHNEQUF5QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNbUMsWUFBWSxHQUFHLElBQUluQywrQ0FBa0IsQ0FBQyxRQUFRLENBQUM7QUFDckQsTUFBTXFDLGdCQUFnQixHQUFHLElBQUlyQyxtREFBc0IsQ0FBQztFQUNoRHVDLFNBQVMsRUFBRSxHQUFHO0VBQ2RDLEtBQUssRUFBRTtBQUNYLENBQUMsQ0FBQztBQUVGSCxnQkFBZ0IsQ0FBQ1QsUUFBUSxDQUFDYSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQzs7QUFFekM7QUFDQSxNQUFNQyxJQUFJLEdBQUcsSUFBSTFDLHVDQUFVLENBQ3ZCaUMsUUFBUSxFQUNSLElBQUloQyw0RUFBb0IsQ0FBQztFQUNyQjJDLE1BQU0sRUFBRSxJQUFJO0VBQ1pDLFlBQVksRUFBRTdDLHVEQUEwQjtFQUN4QytDLFlBQVksRUFBRTdDLHdFQUFNO0VBQ3BCOEMsY0FBYyxFQUFFN0MsMEVBQVE7RUFDeEI4QyxTQUFTLEVBQUUsSUFBSTtFQUNmQyxTQUFTLEVBQUUsSUFBSTtFQUNmQyxTQUFTLEVBQUUsQ0FBQztFQUNaQyxHQUFHLEVBQUUsSUFBSTtFQUNUQyxXQUFXLEVBQUUsSUFBSTtFQUNqQkMsUUFBUSxFQUFFO0lBQ05DLEtBQUssRUFBRTtNQUFFQyxLQUFLLEVBQUU7SUFBRSxDQUFDO0lBQ25CQyxNQUFNLEVBQUU7TUFBRUQsS0FBSyxFQUFFLElBQUl4RCx3Q0FBVyxDQUFDLFNBQVM7SUFBRSxDQUFDO0lBQzdDMkQsaUJBQWlCLEVBQUU7TUFBRUgsS0FBSyxFQUFFO0lBQUUsQ0FBQztJQUMvQkksTUFBTSxFQUFFO01BQUVKLEtBQUssRUFBRTtJQUFJLENBQUM7SUFDdEJLLGNBQWMsRUFBRTtNQUFFTCxLQUFLLEVBQUU7SUFBSSxDQUFDO0lBQzlCTSxxQkFBcUIsRUFBRTtNQUFFTixLQUFLLEVBQUU7SUFBSyxDQUFDO0lBQ3RDTyxZQUFZLEVBQUU7TUFBRVAsS0FBSyxFQUFFO0lBQUU7RUFDN0I7QUFDSixDQUFDLENBQ0wsQ0FBQztBQUVEbkMsS0FBSyxDQUFDMkMsR0FBRyxDQUFDN0IsWUFBWSxDQUFDO0FBQ3ZCZCxLQUFLLENBQUMyQyxHQUFHLENBQUMzQixnQkFBZ0IsQ0FBQztBQUMzQmhCLEtBQUssQ0FBQzJDLEdBQUcsQ0FBQ3RCLElBQUksQ0FBQzs7QUFFZjtBQUNBdUIscUJBQXFCLENBQUNDLE1BQU0sQ0FBQztBQUM3QixTQUFTQSxNQUFNQSxDQUFBLEVBQUc7RUFDZEQscUJBQXFCLENBQUNDLE1BQU0sQ0FBQzs7RUFFakM7RUFDQTtFQUNBOztFQUVJdEQsUUFBUSxDQUFDdUQsTUFBTSxDQUFFOUMsS0FBSyxFQUFFRSxNQUFPLENBQUM7QUFDcEM7Ozs7Ozs7O1VDbEhBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWV4cGVyaW1lbnQtMS8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vd2ViLWV4cGVyaW1lbnQtMS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcbmltcG9ydCBDdXN0b21TaGFkZXJNYXRlcmlhbCBmcm9tICd0aHJlZS1jdXN0b20tc2hhZGVyLW1hdGVyaWFsL3ZhbmlsbGEnXHJcblxyXG5pbXBvcnQgdmVydGV4IGZyb20gJy4uL3NoYXJlZC9zaGFkZXJzL2Jsb2ItdmVydGV4Lmdsc2wnXHJcbmltcG9ydCBmcmFnbWVudCBmcm9tICcuLi9zaGFyZWQvc2hhZGVycy9ibG9iLWZyYWdtZW50Lmdsc2wnXHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIENsb2NrIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KClcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGFwc2VkVGltZSgpIHtcclxuICAgICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnN0YXJ0VGltZVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VGltZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vQ2xvY2tcclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKVxyXG5cclxuLy9DYW52YXMgQ3JlYXRpb25cclxuY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICBhbHBoYTogZmFsc2UsXHJcbiAgICBhbnRpYWxpYXM6IHRydWVcclxufSlcclxuXHJcbnJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJ2NhbnZhcydcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxyXG5cclxuLy9TY2VuZVxyXG5jb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpXHJcblxyXG4vL0NhbWVyYVxyXG5jb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApXHJcbmNhbWVyYS5wb3NpdGlvbi56ID0gNVxyXG4vLyBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDEsIDcpXHJcbi8vIGNhbWVyYS5sb29rQXQoWzAsIDAsIDBdKVxyXG5cclxuLy9DYW52YXMgUmVzaXplXHJcbmZ1bmN0aW9uIHJlc2l6ZSgpIHtcclxuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcclxuICAgIC8vIGNhbWVyYS5wZXJzcGVjdGl2ZSh7IGFzcGVjdDogZ2wuY2FudmFzLndpZHRoIC8gZ2wuY2FudmFzLmhlaWdodCB9KVxyXG59XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUsIGZhbHNlKVxyXG5yZXNpemUoKVxyXG5cclxuLy9HZW9tZXRyeVxyXG5jb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5JY29zYWhlZHJvbkdlb21ldHJ5KDEuMywgMjAwKVxyXG5cclxuLy9Qcm9ncmFtXHJcbi8vIGNvbnN0IHByb2dyYW0gPSBuZXcgUHJvZ3JhbShnbCwge1xyXG4vLyAgICAgdmVydGV4LFxyXG4vLyAgICAgZnJhZ21lbnQsXHJcbi8vICAgICB1bmlmb3Jtczoge1xyXG4vLyAgICAgICAgIHVUaW1lOiB7IHZhbHVlOiAwIH0sXHJcbi8vICAgICAgICAgdUxpZ2h0RGlyZWN0aW9uOiB7IHZhbHVlOiBbMS4wLCAxLjAsIDEuMF0gfSxcclxuLy8gICAgICAgICB1QW1iaWVudExpZ2h0OiB7IHZhbHVlOiBbMC4xLCAwLjEsIDAuMV0gfSxcclxuLy8gICAgICAgICB1QWxwaGE6IHsgdmFsdWU6IDEuMCB9XHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG4vL0xpZ2h0XHJcbmNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYpXHJcbmNvbnN0IGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCh7XHJcbiAgICBpbnRlbnNpdHk6IDAuNSxcclxuICAgIGNvbG9yOiAweGZmZmZmZlxyXG59KVxyXG5cclxuZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoLTIsIDIsIDMuNSlcclxuXHJcbi8vTWVzaFxyXG5jb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goXHJcbiAgICBnZW9tZXRyeSwgXHJcbiAgICBuZXcgQ3VzdG9tU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICAgIHNpbGVudDogdHJ1ZSxcclxuICAgICAgICBiYXNlTWF0ZXJpYWw6IFRIUkVFLk1lc2hQaHlzaWNhbE1hdGVyaWFsLFxyXG4gICAgICAgIHZlcnRleFNoYWRlcjogdmVydGV4LFxyXG4gICAgICAgIGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudCxcclxuICAgICAgICByb3VnaG5lc3M6IDAuNTYsXHJcbiAgICAgICAgbWV0YWxuZXNzOiAwLjc2LFxyXG4gICAgICAgIGNsZWFyY29hdDogMCxcclxuICAgICAgICBpb3I6IDIuODEsXHJcbiAgICAgICAgaXJpZGVzY2VuY2U6IDAuOTYsXHJcbiAgICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICAgICAgdVRpbWU6IHsgdmFsdWU6IDAgfSxcclxuICAgICAgICAgICAgdUNvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoJyM2RDk4ODYnKSB9LFxyXG4gICAgICAgICAgICB1R3JhZGllbnRTdHJlbmd0aDogeyB2YWx1ZTogMSB9LFxyXG4gICAgICAgICAgICB1U3BlZWQ6IHsgdmFsdWU6IDEuMSB9LFxyXG4gICAgICAgICAgICB1Tm9pc2VTdHJlbmd0aDogeyB2YWx1ZTogMC4zIH0sXHJcbiAgICAgICAgICAgIHVEaXNwbGFjZW1lbnRTdHJlbmd0aDogeyB2YWx1ZTogMC41NyB9LFxyXG4gICAgICAgICAgICB1RnJhY3RBbW91bnQ6IHsgdmFsdWU6IDQgfSxcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4pXHJcblxyXG5zY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxyXG5zY2VuZS5hZGQoZGlyZWN0aW9uYWxMaWdodClcclxuc2NlbmUuYWRkKG1lc2gpXHJcblxyXG4vL1JlbmRlclxyXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKVxyXG5mdW5jdGlvbiB1cGRhdGUoKSB7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKVxyXG5cclxuLy8gICAgIHNjZW5lLmNoaWxkcmVuLmZvckVhY2gobWVzaCA9PiB7XHJcbi8vICAgICAgICAgbWVzaC5wcm9ncmFtLnVuaWZvcm1zLnVUaW1lLnZhbHVlID0gY2xvY2suZ2V0RWxhcHNlZFRpbWUoKSAvIDEwMDAwXHJcbi8vICAgICB9KVxyXG5cclxuICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApXHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkN2MwMTY5MDc0YTFhNTJmYjM4NlwiKSJdLCJuYW1lcyI6WyJUSFJFRSIsIkN1c3RvbVNoYWRlck1hdGVyaWFsIiwidmVydGV4IiwiZnJhZ21lbnQiLCJDbG9jayIsImNvbnN0cnVjdG9yIiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJnZXRFbGFwc2VkVGltZSIsInJlc2V0VGltZSIsImNsb2NrIiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJkb21FbGVtZW50IiwiY2xhc3NOYW1lIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInoiLCJyZXNpemUiLCJzZXRTaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdlb21ldHJ5IiwiSWNvc2FoZWRyb25HZW9tZXRyeSIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImRpcmVjdGlvbmFsTGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0IiwiaW50ZW5zaXR5IiwiY29sb3IiLCJzZXQiLCJtZXNoIiwiTWVzaCIsInNpbGVudCIsImJhc2VNYXRlcmlhbCIsIk1lc2hQaHlzaWNhbE1hdGVyaWFsIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJyb3VnaG5lc3MiLCJtZXRhbG5lc3MiLCJjbGVhcmNvYXQiLCJpb3IiLCJpcmlkZXNjZW5jZSIsInVuaWZvcm1zIiwidVRpbWUiLCJ2YWx1ZSIsInVDb2xvciIsIkNvbG9yIiwidUdyYWRpZW50U3RyZW5ndGgiLCJ1U3BlZWQiLCJ1Tm9pc2VTdHJlbmd0aCIsInVEaXNwbGFjZW1lbnRTdHJlbmd0aCIsInVGcmFjdEFtb3VudCIsImFkZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=