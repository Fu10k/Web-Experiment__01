"use strict";
self["webpackHotUpdateweb_experiment_1"]("main",{

/***/ "./shared/shaders/blob-fragment.glsl":
/*!*******************************************!*\
  !*** ./shared/shaders/blob-fragment.glsl ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("precision highp float;\n#define GLSLIFY 1\n\nuniform float uTime;\nuniform vec3 uLightDirection;\nuniform vec3 uAmbientLight;\nuniform float uAlpha;\n\nvarying vec3 vPosition;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying float vDisplacement;\n\nconst vec3 color1 = vec3(0.427, 0.596, 0.525); // #6D9886\nconst vec3 color2 = vec3(0.851, 0.792, 0.702); // #D9CAB3\n\nvoid main() {\n    vec3 baseColor = mix(color1, color2, vUv.y);\n\n    vec3 normal = normalize(vNormal);\n\n    float diff = max(dot(normal, uLightDirection), 0.0);\n    vec3 diffuse = diff * baseColor;\n\n    vec3 ambient = uAmbientLight * baseColor;\n\n    vec3 color = (ambient + diffuse) * 0.5; // Darken the result\n\n    color *= 1.0 + 0.1 * vDisplacement;\n\n    gl_FragColor = vec4(color, uAlpha);\n}\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e4401b66cc2ac993173e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wOTdmZGQyMWExMzlkNDk4YjIxYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSx1QkFBdUIsMkNBQTJDLCtCQUErQiw2QkFBNkIsdUJBQXVCLDJCQUEyQix1QkFBdUIsbUJBQW1CLDhCQUE4QixtREFBbUQsMkRBQTJELDJCQUEyQixrREFBa0QseUNBQXlDLDREQUE0RCxzQ0FBc0MsaURBQWlELGdEQUFnRCwrREFBK0QsMkNBQTJDLEdBQUcsR0FBRzs7Ozs7Ozs7VUNBOXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWV4cGVyaW1lbnQtMS8uL3NoYXJlZC9zaGFkZXJzL2Jsb2ItZnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly93ZWItZXhwZXJpbWVudC0xL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcInByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnVuaWZvcm0gZmxvYXQgdVRpbWU7XFxudW5pZm9ybSB2ZWMzIHVMaWdodERpcmVjdGlvbjtcXG51bmlmb3JtIHZlYzMgdUFtYmllbnRMaWdodDtcXG51bmlmb3JtIGZsb2F0IHVBbHBoYTtcXG5cXG52YXJ5aW5nIHZlYzMgdlBvc2l0aW9uO1xcbnZhcnlpbmcgdmVjMyB2Tm9ybWFsO1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxudmFyeWluZyBmbG9hdCB2RGlzcGxhY2VtZW50O1xcblxcbmNvbnN0IHZlYzMgY29sb3IxID0gdmVjMygwLjQyNywgMC41OTYsIDAuNTI1KTsgLy8gIzZEOTg4NlxcbmNvbnN0IHZlYzMgY29sb3IyID0gdmVjMygwLjg1MSwgMC43OTIsIDAuNzAyKTsgLy8gI0Q5Q0FCM1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgdmVjMyBiYXNlQ29sb3IgPSBtaXgoY29sb3IxLCBjb2xvcjIsIHZVdi55KTtcXG5cXG4gICAgdmVjMyBub3JtYWwgPSBub3JtYWxpemUodk5vcm1hbCk7XFxuXFxuICAgIGZsb2F0IGRpZmYgPSBtYXgoZG90KG5vcm1hbCwgdUxpZ2h0RGlyZWN0aW9uKSwgMC4wKTtcXG4gICAgdmVjMyBkaWZmdXNlID0gZGlmZiAqIGJhc2VDb2xvcjtcXG5cXG4gICAgdmVjMyBhbWJpZW50ID0gdUFtYmllbnRMaWdodCAqIGJhc2VDb2xvcjtcXG5cXG4gICAgdmVjMyBjb2xvciA9IChhbWJpZW50ICsgZGlmZnVzZSkgKiAwLjU7IC8vIERhcmtlbiB0aGUgcmVzdWx0XFxuXFxuICAgIGNvbG9yICo9IDEuMCArIDAuMSAqIHZEaXNwbGFjZW1lbnQ7XFxuXFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsIHVBbHBoYSk7XFxufVxcblwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU0NDAxYjY2Y2MyYWM5OTMxNzNlXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9