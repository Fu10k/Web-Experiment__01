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
/* harmony import */ var three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/utils/BufferGeometryUtils */ "./node_modules/three/examples/jsm/utils/BufferGeometryUtils.js");
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

//Canvas Resize
function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', resize, false);
resize();

//Geometry
const geometry = (0,three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_5__.mergeVertices)(new three__WEBPACK_IMPORTED_MODULE_4__.IcosahedronGeometry(1.3, 200));
geometry.computeTangents();

//Light
const ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xffffff, 1);
const directionalLight = new three__WEBPACK_IMPORTED_MODULE_4__.DirectionalLight(0xffffff, 5);
directionalLight.position.set(-2, 2, 3.5);

//Uniforms
const uniforms = {
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
};

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
  uniforms: uniforms
}), new three_custom_shader_material_vanilla__WEBPACK_IMPORTED_MODULE_0__["default"]({
  baseMaterial: three__WEBPACK_IMPORTED_MODULE_4__.MeshDepthMaterial,
  vertexShader: _shared_shaders_blob_vertex_glsl__WEBPACK_IMPORTED_MODULE_1__["default"],
  uniforms: uniforms,
  silent: true,
  depthPacking: three__WEBPACK_IMPORTED_MODULE_4__.RGBADepthPacking
}));
scene.add(mesh);
scene.add(directionalLight);
scene.add(ambientLight);

//Render
// requestAnimationFrame(update)
// function update() {
// requestAnimationFrame(update)

//     scene.children.forEach(mesh => {
//         mesh.program.uniforms.uTime.value = clock.getElapsedTime() / 10000
//     })

// }
renderer.render(scene, camera);

/***/ }),

/***/ "./node_modules/three/examples/jsm/utils/BufferGeometryUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/three/examples/jsm/utils/BufferGeometryUtils.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeMikkTSpaceTangents: () => (/* binding */ computeMikkTSpaceTangents),
/* harmony export */   computeMorphedAttributes: () => (/* binding */ computeMorphedAttributes),
/* harmony export */   deepCloneAttribute: () => (/* binding */ deepCloneAttribute),
/* harmony export */   deinterleaveAttribute: () => (/* binding */ deinterleaveAttribute),
/* harmony export */   deinterleaveGeometry: () => (/* binding */ deinterleaveGeometry),
/* harmony export */   estimateBytesUsed: () => (/* binding */ estimateBytesUsed),
/* harmony export */   interleaveAttributes: () => (/* binding */ interleaveAttributes),
/* harmony export */   mergeAttributes: () => (/* binding */ mergeAttributes),
/* harmony export */   mergeGeometries: () => (/* binding */ mergeGeometries),
/* harmony export */   mergeGroups: () => (/* binding */ mergeGroups),
/* harmony export */   mergeVertices: () => (/* binding */ mergeVertices),
/* harmony export */   toCreasedNormals: () => (/* binding */ toCreasedNormals),
/* harmony export */   toTrianglesDrawMode: () => (/* binding */ toTrianglesDrawMode)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


function computeMikkTSpaceTangents( geometry, MikkTSpace, negateSign = true ) {

	if ( ! MikkTSpace || ! MikkTSpace.isReady ) {

		throw new Error( 'BufferGeometryUtils: Initialized MikkTSpace library required.' );

	}

	if ( ! geometry.hasAttribute( 'position' ) || ! geometry.hasAttribute( 'normal' ) || ! geometry.hasAttribute( 'uv' ) ) {

		throw new Error( 'BufferGeometryUtils: Tangents require "position", "normal", and "uv" attributes.' );

	}

	function getAttributeArray( attribute ) {

		if ( attribute.normalized || attribute.isInterleavedBufferAttribute ) {

			const dstArray = new Float32Array( attribute.count * attribute.itemSize );

			for ( let i = 0, j = 0; i < attribute.count; i ++ ) {

				dstArray[ j ++ ] = attribute.getX( i );
				dstArray[ j ++ ] = attribute.getY( i );

				if ( attribute.itemSize > 2 ) {

					dstArray[ j ++ ] = attribute.getZ( i );

				}

			}

			return dstArray;

		}

		if ( attribute.array instanceof Float32Array ) {

			return attribute.array;

		}

		return new Float32Array( attribute.array );

	}

	// MikkTSpace algorithm requires non-indexed input.

	const _geometry = geometry.index ? geometry.toNonIndexed() : geometry;

	// Compute vertex tangents.

	const tangents = MikkTSpace.generateTangents(

		getAttributeArray( _geometry.attributes.position ),
		getAttributeArray( _geometry.attributes.normal ),
		getAttributeArray( _geometry.attributes.uv )

	);

	// Texture coordinate convention of glTF differs from the apparent
	// default of the MikkTSpace library; .w component must be flipped.

	if ( negateSign ) {

		for ( let i = 3; i < tangents.length; i += 4 ) {

			tangents[ i ] *= - 1;

		}

	}

	//

	_geometry.setAttribute( 'tangent', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute( tangents, 4 ) );

	if ( geometry !== _geometry ) {

		geometry.copy( _geometry );

	}

	return geometry;

}

/**
 * @param  {Array<BufferGeometry>} geometries
 * @param  {Boolean} useGroups
 * @return {BufferGeometry}
 */
function mergeGeometries( geometries, useGroups = false ) {

	const isIndexed = geometries[ 0 ].index !== null;

	const attributesUsed = new Set( Object.keys( geometries[ 0 ].attributes ) );
	const morphAttributesUsed = new Set( Object.keys( geometries[ 0 ].morphAttributes ) );

	const attributes = {};
	const morphAttributes = {};

	const morphTargetsRelative = geometries[ 0 ].morphTargetsRelative;

	const mergedGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();

	let offset = 0;

	for ( let i = 0; i < geometries.length; ++ i ) {

		const geometry = geometries[ i ];
		let attributesCount = 0;

		// ensure that all geometries are indexed, or none

		if ( isIndexed !== ( geometry.index !== null ) ) {

			console.error( 'THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' + i + '. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.' );
			return null;

		}

		// gather attributes, exit early if they're different

		for ( const name in geometry.attributes ) {

			if ( ! attributesUsed.has( name ) ) {

				console.error( 'THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' + i + '. All geometries must have compatible attributes; make sure "' + name + '" attribute exists among all geometries, or in none of them.' );
				return null;

			}

			if ( attributes[ name ] === undefined ) attributes[ name ] = [];

			attributes[ name ].push( geometry.attributes[ name ] );

			attributesCount ++;

		}

		// ensure geometries have the same number of attributes

		if ( attributesCount !== attributesUsed.size ) {

			console.error( 'THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' + i + '. Make sure all geometries have the same number of attributes.' );
			return null;

		}

		// gather morph attributes, exit early if they're different

		if ( morphTargetsRelative !== geometry.morphTargetsRelative ) {

			console.error( 'THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' + i + '. .morphTargetsRelative must be consistent throughout all geometries.' );
			return null;

		}

		for ( const name in geometry.morphAttributes ) {

			if ( ! morphAttributesUsed.has( name ) ) {

				console.error( 'THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' + i + '.  .morphAttributes must be consistent throughout all geometries.' );
				return null;

			}

			if ( morphAttributes[ name ] === undefined ) morphAttributes[ name ] = [];

			morphAttributes[ name ].push( geometry.morphAttributes[ name ] );

		}

		if ( useGroups ) {

			let count;

			if ( isIndexed ) {

				count = geometry.index.count;

			} else if ( geometry.attributes.position !== undefined ) {

				count = geometry.attributes.position.count;

			} else {

				console.error( 'THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index ' + i + '. The geometry must have either an index or a position attribute' );
				return null;

			}

			mergedGeometry.addGroup( offset, count, i );

			offset += count;

		}

	}

	// merge indices

	if ( isIndexed ) {

		let indexOffset = 0;
		const mergedIndex = [];

		for ( let i = 0; i < geometries.length; ++ i ) {

			const index = geometries[ i ].index;

			for ( let j = 0; j < index.count; ++ j ) {

				mergedIndex.push( index.getX( j ) + indexOffset );

			}

			indexOffset += geometries[ i ].attributes.position.count;

		}

		mergedGeometry.setIndex( mergedIndex );

	}

	// merge attributes

	for ( const name in attributes ) {

		const mergedAttribute = mergeAttributes( attributes[ name ] );

		if ( ! mergedAttribute ) {

			console.error( 'THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ' + name + ' attribute.' );
			return null;

		}

		mergedGeometry.setAttribute( name, mergedAttribute );

	}

	// merge morph attributes

	for ( const name in morphAttributes ) {

		const numMorphTargets = morphAttributes[ name ][ 0 ].length;

		if ( numMorphTargets === 0 ) break;

		mergedGeometry.morphAttributes = mergedGeometry.morphAttributes || {};
		mergedGeometry.morphAttributes[ name ] = [];

		for ( let i = 0; i < numMorphTargets; ++ i ) {

			const morphAttributesToMerge = [];

			for ( let j = 0; j < morphAttributes[ name ].length; ++ j ) {

				morphAttributesToMerge.push( morphAttributes[ name ][ j ][ i ] );

			}

			const mergedMorphAttribute = mergeAttributes( morphAttributesToMerge );

			if ( ! mergedMorphAttribute ) {

				console.error( 'THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the ' + name + ' morphAttribute.' );
				return null;

			}

			mergedGeometry.morphAttributes[ name ].push( mergedMorphAttribute );

		}

	}

	return mergedGeometry;

}

/**
 * @param {Array<BufferAttribute>} attributes
 * @return {BufferAttribute}
 */
function mergeAttributes( attributes ) {

	let TypedArray;
	let itemSize;
	let normalized;
	let gpuType = - 1;
	let arrayLength = 0;

	for ( let i = 0; i < attributes.length; ++ i ) {

		const attribute = attributes[ i ];

		if ( TypedArray === undefined ) TypedArray = attribute.array.constructor;
		if ( TypedArray !== attribute.array.constructor ) {

			console.error( 'THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.' );
			return null;

		}

		if ( itemSize === undefined ) itemSize = attribute.itemSize;
		if ( itemSize !== attribute.itemSize ) {

			console.error( 'THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.' );
			return null;

		}

		if ( normalized === undefined ) normalized = attribute.normalized;
		if ( normalized !== attribute.normalized ) {

			console.error( 'THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.' );
			return null;

		}

		if ( gpuType === - 1 ) gpuType = attribute.gpuType;
		if ( gpuType !== attribute.gpuType ) {

			console.error( 'THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.' );
			return null;

		}

		arrayLength += attribute.count * itemSize;

	}

	const array = new TypedArray( arrayLength );
	const result = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute( array, itemSize, normalized );
	let offset = 0;

	for ( let i = 0; i < attributes.length; ++ i ) {

		const attribute = attributes[ i ];
		if ( attribute.isInterleavedBufferAttribute ) {

			const tupleOffset = offset / itemSize;
			for ( let j = 0, l = attribute.count; j < l; j ++ ) {

				for ( let c = 0; c < itemSize; c ++ ) {

					const value = attribute.getComponent( j, c );
					result.setComponent( j + tupleOffset, c, value );

				}

			}

		} else {

			array.set( attribute.array, offset );

		}

		offset += attribute.count * itemSize;

	}

	if ( gpuType !== undefined ) {

		result.gpuType = gpuType;

	}

	return result;

}

/**
 * @param {BufferAttribute}
 * @return {BufferAttribute}
 */
function deepCloneAttribute( attribute ) {

	if ( attribute.isInstancedInterleavedBufferAttribute || attribute.isInterleavedBufferAttribute ) {

		return deinterleaveAttribute( attribute );

	}

	if ( attribute.isInstancedBufferAttribute ) {

		return new three__WEBPACK_IMPORTED_MODULE_0__.InstancedBufferAttribute().copy( attribute );

	}

	return new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute().copy( attribute );

}

/**
 * @param {Array<BufferAttribute>} attributes
 * @return {Array<InterleavedBufferAttribute>}
 */
function interleaveAttributes( attributes ) {

	// Interleaves the provided attributes into an InterleavedBuffer and returns
	// a set of InterleavedBufferAttributes for each attribute
	let TypedArray;
	let arrayLength = 0;
	let stride = 0;

	// calculate the length and type of the interleavedBuffer
	for ( let i = 0, l = attributes.length; i < l; ++ i ) {

		const attribute = attributes[ i ];

		if ( TypedArray === undefined ) TypedArray = attribute.array.constructor;
		if ( TypedArray !== attribute.array.constructor ) {

			console.error( 'AttributeBuffers of different types cannot be interleaved' );
			return null;

		}

		arrayLength += attribute.array.length;
		stride += attribute.itemSize;

	}

	// Create the set of buffer attributes
	const interleavedBuffer = new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBuffer( new TypedArray( arrayLength ), stride );
	let offset = 0;
	const res = [];
	const getters = [ 'getX', 'getY', 'getZ', 'getW' ];
	const setters = [ 'setX', 'setY', 'setZ', 'setW' ];

	for ( let j = 0, l = attributes.length; j < l; j ++ ) {

		const attribute = attributes[ j ];
		const itemSize = attribute.itemSize;
		const count = attribute.count;
		const iba = new three__WEBPACK_IMPORTED_MODULE_0__.InterleavedBufferAttribute( interleavedBuffer, itemSize, offset, attribute.normalized );
		res.push( iba );

		offset += itemSize;

		// Move the data for each attribute into the new interleavedBuffer
		// at the appropriate offset
		for ( let c = 0; c < count; c ++ ) {

			for ( let k = 0; k < itemSize; k ++ ) {

				iba[ setters[ k ] ]( c, attribute[ getters[ k ] ]( c ) );

			}

		}

	}

	return res;

}

// returns a new, non-interleaved version of the provided attribute
function deinterleaveAttribute( attribute ) {

	const cons = attribute.data.array.constructor;
	const count = attribute.count;
	const itemSize = attribute.itemSize;
	const normalized = attribute.normalized;

	const array = new cons( count * itemSize );
	let newAttribute;
	if ( attribute.isInstancedInterleavedBufferAttribute ) {

		newAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.InstancedBufferAttribute( array, itemSize, normalized, attribute.meshPerAttribute );

	} else {

		newAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute( array, itemSize, normalized );

	}

	for ( let i = 0; i < count; i ++ ) {

		newAttribute.setX( i, attribute.getX( i ) );

		if ( itemSize >= 2 ) {

			newAttribute.setY( i, attribute.getY( i ) );

		}

		if ( itemSize >= 3 ) {

			newAttribute.setZ( i, attribute.getZ( i ) );

		}

		if ( itemSize >= 4 ) {

			newAttribute.setW( i, attribute.getW( i ) );

		}

	}

	return newAttribute;

}

// deinterleaves all attributes on the geometry
function deinterleaveGeometry( geometry ) {

	const attributes = geometry.attributes;
	const morphTargets = geometry.morphTargets;
	const attrMap = new Map();

	for ( const key in attributes ) {

		const attr = attributes[ key ];
		if ( attr.isInterleavedBufferAttribute ) {

			if ( ! attrMap.has( attr ) ) {

				attrMap.set( attr, deinterleaveAttribute( attr ) );

			}

			attributes[ key ] = attrMap.get( attr );

		}

	}

	for ( const key in morphTargets ) {

		const attr = morphTargets[ key ];
		if ( attr.isInterleavedBufferAttribute ) {

			if ( ! attrMap.has( attr ) ) {

				attrMap.set( attr, deinterleaveAttribute( attr ) );

			}

			morphTargets[ key ] = attrMap.get( attr );

		}

	}

}

/**
 * @param {BufferGeometry} geometry
 * @return {number}
 */
function estimateBytesUsed( geometry ) {

	// Return the estimated memory used by this geometry in bytes
	// Calculate using itemSize, count, and BYTES_PER_ELEMENT to account
	// for InterleavedBufferAttributes.
	let mem = 0;
	for ( const name in geometry.attributes ) {

		const attr = geometry.getAttribute( name );
		mem += attr.count * attr.itemSize * attr.array.BYTES_PER_ELEMENT;

	}

	const indices = geometry.getIndex();
	mem += indices ? indices.count * indices.itemSize * indices.array.BYTES_PER_ELEMENT : 0;
	return mem;

}

/**
 * @param {BufferGeometry} geometry
 * @param {number} tolerance
 * @return {BufferGeometry}
 */
function mergeVertices( geometry, tolerance = 1e-4 ) {

	tolerance = Math.max( tolerance, Number.EPSILON );

	// Generate an index buffer if the geometry doesn't have one, or optimize it
	// if it's already available.
	const hashToIndex = {};
	const indices = geometry.getIndex();
	const positions = geometry.getAttribute( 'position' );
	const vertexCount = indices ? indices.count : positions.count;

	// next value for triangle indices
	let nextIndex = 0;

	// attributes and new attribute arrays
	const attributeNames = Object.keys( geometry.attributes );
	const tmpAttributes = {};
	const tmpMorphAttributes = {};
	const newIndices = [];
	const getters = [ 'getX', 'getY', 'getZ', 'getW' ];
	const setters = [ 'setX', 'setY', 'setZ', 'setW' ];

	// Initialize the arrays, allocating space conservatively. Extra
	// space will be trimmed in the last step.
	for ( let i = 0, l = attributeNames.length; i < l; i ++ ) {

		const name = attributeNames[ i ];
		const attr = geometry.attributes[ name ];

		tmpAttributes[ name ] = new attr.constructor(
			new attr.array.constructor( attr.count * attr.itemSize ),
			attr.itemSize,
			attr.normalized
		);

		const morphAttributes = geometry.morphAttributes[ name ];
		if ( morphAttributes ) {

			if ( ! tmpMorphAttributes[ name ] ) tmpMorphAttributes[ name ] = [];
			morphAttributes.forEach( ( morphAttr, i ) => {

				const array = new morphAttr.array.constructor( morphAttr.count * morphAttr.itemSize );
				tmpMorphAttributes[ name ][ i ] = new morphAttr.constructor( array, morphAttr.itemSize, morphAttr.normalized );

			} );

		}

	}

	// convert the error tolerance to an amount of decimal places to truncate to
	const halfTolerance = tolerance * 0.5;
	const exponent = Math.log10( 1 / tolerance );
	const hashMultiplier = Math.pow( 10, exponent );
	const hashAdditive = halfTolerance * hashMultiplier;
	for ( let i = 0; i < vertexCount; i ++ ) {

		const index = indices ? indices.getX( i ) : i;

		// Generate a hash for the vertex attributes at the current index 'i'
		let hash = '';
		for ( let j = 0, l = attributeNames.length; j < l; j ++ ) {

			const name = attributeNames[ j ];
			const attribute = geometry.getAttribute( name );
			const itemSize = attribute.itemSize;

			for ( let k = 0; k < itemSize; k ++ ) {

				// double tilde truncates the decimal value
				hash += `${ ~ ~ ( attribute[ getters[ k ] ]( index ) * hashMultiplier + hashAdditive ) },`;

			}

		}

		// Add another reference to the vertex if it's already
		// used by another index
		if ( hash in hashToIndex ) {

			newIndices.push( hashToIndex[ hash ] );

		} else {

			// copy data to the new index in the temporary attributes
			for ( let j = 0, l = attributeNames.length; j < l; j ++ ) {

				const name = attributeNames[ j ];
				const attribute = geometry.getAttribute( name );
				const morphAttributes = geometry.morphAttributes[ name ];
				const itemSize = attribute.itemSize;
				const newArray = tmpAttributes[ name ];
				const newMorphArrays = tmpMorphAttributes[ name ];

				for ( let k = 0; k < itemSize; k ++ ) {

					const getterFunc = getters[ k ];
					const setterFunc = setters[ k ];
					newArray[ setterFunc ]( nextIndex, attribute[ getterFunc ]( index ) );

					if ( morphAttributes ) {

						for ( let m = 0, ml = morphAttributes.length; m < ml; m ++ ) {

							newMorphArrays[ m ][ setterFunc ]( nextIndex, morphAttributes[ m ][ getterFunc ]( index ) );

						}

					}

				}

			}

			hashToIndex[ hash ] = nextIndex;
			newIndices.push( nextIndex );
			nextIndex ++;

		}

	}

	// generate result BufferGeometry
	const result = geometry.clone();
	for ( const name in geometry.attributes ) {

		const tmpAttribute = tmpAttributes[ name ];

		result.setAttribute( name, new tmpAttribute.constructor(
			tmpAttribute.array.slice( 0, nextIndex * tmpAttribute.itemSize ),
			tmpAttribute.itemSize,
			tmpAttribute.normalized,
		) );

		if ( ! ( name in tmpMorphAttributes ) ) continue;

		for ( let j = 0; j < tmpMorphAttributes[ name ].length; j ++ ) {

			const tmpMorphAttribute = tmpMorphAttributes[ name ][ j ];

			result.morphAttributes[ name ][ j ] = new tmpMorphAttribute.constructor(
				tmpMorphAttribute.array.slice( 0, nextIndex * tmpMorphAttribute.itemSize ),
				tmpMorphAttribute.itemSize,
				tmpMorphAttribute.normalized,
			);

		}

	}

	// indices

	result.setIndex( newIndices );

	return result;

}

/**
 * @param {BufferGeometry} geometry
 * @param {number} drawMode
 * @return {BufferGeometry}
 */
function toTrianglesDrawMode( geometry, drawMode ) {

	if ( drawMode === three__WEBPACK_IMPORTED_MODULE_0__.TrianglesDrawMode ) {

		console.warn( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.' );
		return geometry;

	}

	if ( drawMode === three__WEBPACK_IMPORTED_MODULE_0__.TriangleFanDrawMode || drawMode === three__WEBPACK_IMPORTED_MODULE_0__.TriangleStripDrawMode ) {

		let index = geometry.getIndex();

		// generate index if not present

		if ( index === null ) {

			const indices = [];

			const position = geometry.getAttribute( 'position' );

			if ( position !== undefined ) {

				for ( let i = 0; i < position.count; i ++ ) {

					indices.push( i );

				}

				geometry.setIndex( indices );
				index = geometry.getIndex();

			} else {

				console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.' );
				return geometry;

			}

		}

		//

		const numberOfTriangles = index.count - 2;
		const newIndices = [];

		if ( drawMode === three__WEBPACK_IMPORTED_MODULE_0__.TriangleFanDrawMode ) {

			// gl.TRIANGLE_FAN

			for ( let i = 1; i <= numberOfTriangles; i ++ ) {

				newIndices.push( index.getX( 0 ) );
				newIndices.push( index.getX( i ) );
				newIndices.push( index.getX( i + 1 ) );

			}

		} else {

			// gl.TRIANGLE_STRIP

			for ( let i = 0; i < numberOfTriangles; i ++ ) {

				if ( i % 2 === 0 ) {

					newIndices.push( index.getX( i ) );
					newIndices.push( index.getX( i + 1 ) );
					newIndices.push( index.getX( i + 2 ) );

				} else {

					newIndices.push( index.getX( i + 2 ) );
					newIndices.push( index.getX( i + 1 ) );
					newIndices.push( index.getX( i ) );

				}

			}

		}

		if ( ( newIndices.length / 3 ) !== numberOfTriangles ) {

			console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.' );

		}

		// build final geometry

		const newGeometry = geometry.clone();
		newGeometry.setIndex( newIndices );
		newGeometry.clearGroups();

		return newGeometry;

	} else {

		console.error( 'THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:', drawMode );
		return geometry;

	}

}

/**
 * Calculates the morphed attributes of a morphed/skinned BufferGeometry.
 * Helpful for Raytracing or Decals.
 * @param {Mesh | Line | Points} object An instance of Mesh, Line or Points.
 * @return {Object} An Object with original position/normal attributes and morphed ones.
 */
function computeMorphedAttributes( object ) {

	const _vA = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const _vB = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const _vC = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

	const _tempA = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const _tempB = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const _tempC = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

	const _morphA = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const _morphB = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const _morphC = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

	function _calculateMorphedAttributeData(
		object,
		attribute,
		morphAttribute,
		morphTargetsRelative,
		a,
		b,
		c,
		modifiedAttributeArray
	) {

		_vA.fromBufferAttribute( attribute, a );
		_vB.fromBufferAttribute( attribute, b );
		_vC.fromBufferAttribute( attribute, c );

		const morphInfluences = object.morphTargetInfluences;

		if ( morphAttribute && morphInfluences ) {

			_morphA.set( 0, 0, 0 );
			_morphB.set( 0, 0, 0 );
			_morphC.set( 0, 0, 0 );

			for ( let i = 0, il = morphAttribute.length; i < il; i ++ ) {

				const influence = morphInfluences[ i ];
				const morph = morphAttribute[ i ];

				if ( influence === 0 ) continue;

				_tempA.fromBufferAttribute( morph, a );
				_tempB.fromBufferAttribute( morph, b );
				_tempC.fromBufferAttribute( morph, c );

				if ( morphTargetsRelative ) {

					_morphA.addScaledVector( _tempA, influence );
					_morphB.addScaledVector( _tempB, influence );
					_morphC.addScaledVector( _tempC, influence );

				} else {

					_morphA.addScaledVector( _tempA.sub( _vA ), influence );
					_morphB.addScaledVector( _tempB.sub( _vB ), influence );
					_morphC.addScaledVector( _tempC.sub( _vC ), influence );

				}

			}

			_vA.add( _morphA );
			_vB.add( _morphB );
			_vC.add( _morphC );

		}

		if ( object.isSkinnedMesh ) {

			object.applyBoneTransform( a, _vA );
			object.applyBoneTransform( b, _vB );
			object.applyBoneTransform( c, _vC );

		}

		modifiedAttributeArray[ a * 3 + 0 ] = _vA.x;
		modifiedAttributeArray[ a * 3 + 1 ] = _vA.y;
		modifiedAttributeArray[ a * 3 + 2 ] = _vA.z;
		modifiedAttributeArray[ b * 3 + 0 ] = _vB.x;
		modifiedAttributeArray[ b * 3 + 1 ] = _vB.y;
		modifiedAttributeArray[ b * 3 + 2 ] = _vB.z;
		modifiedAttributeArray[ c * 3 + 0 ] = _vC.x;
		modifiedAttributeArray[ c * 3 + 1 ] = _vC.y;
		modifiedAttributeArray[ c * 3 + 2 ] = _vC.z;

	}

	const geometry = object.geometry;
	const material = object.material;

	let a, b, c;
	const index = geometry.index;
	const positionAttribute = geometry.attributes.position;
	const morphPosition = geometry.morphAttributes.position;
	const morphTargetsRelative = geometry.morphTargetsRelative;
	const normalAttribute = geometry.attributes.normal;
	const morphNormal = geometry.morphAttributes.position;

	const groups = geometry.groups;
	const drawRange = geometry.drawRange;
	let i, j, il, jl;
	let group;
	let start, end;

	const modifiedPosition = new Float32Array( positionAttribute.count * positionAttribute.itemSize );
	const modifiedNormal = new Float32Array( normalAttribute.count * normalAttribute.itemSize );

	if ( index !== null ) {

		// indexed buffer geometry

		if ( Array.isArray( material ) ) {

			for ( i = 0, il = groups.length; i < il; i ++ ) {

				group = groups[ i ];

				start = Math.max( group.start, drawRange.start );
				end = Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) );

				for ( j = start, jl = end; j < jl; j += 3 ) {

					a = index.getX( j );
					b = index.getX( j + 1 );
					c = index.getX( j + 2 );

					_calculateMorphedAttributeData(
						object,
						positionAttribute,
						morphPosition,
						morphTargetsRelative,
						a, b, c,
						modifiedPosition
					);

					_calculateMorphedAttributeData(
						object,
						normalAttribute,
						morphNormal,
						morphTargetsRelative,
						a, b, c,
						modifiedNormal
					);

				}

			}

		} else {

			start = Math.max( 0, drawRange.start );
			end = Math.min( index.count, ( drawRange.start + drawRange.count ) );

			for ( i = start, il = end; i < il; i += 3 ) {

				a = index.getX( i );
				b = index.getX( i + 1 );
				c = index.getX( i + 2 );

				_calculateMorphedAttributeData(
					object,
					positionAttribute,
					morphPosition,
					morphTargetsRelative,
					a, b, c,
					modifiedPosition
				);

				_calculateMorphedAttributeData(
					object,
					normalAttribute,
					morphNormal,
					morphTargetsRelative,
					a, b, c,
					modifiedNormal
				);

			}

		}

	} else {

		// non-indexed buffer geometry

		if ( Array.isArray( material ) ) {

			for ( i = 0, il = groups.length; i < il; i ++ ) {

				group = groups[ i ];

				start = Math.max( group.start, drawRange.start );
				end = Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) );

				for ( j = start, jl = end; j < jl; j += 3 ) {

					a = j;
					b = j + 1;
					c = j + 2;

					_calculateMorphedAttributeData(
						object,
						positionAttribute,
						morphPosition,
						morphTargetsRelative,
						a, b, c,
						modifiedPosition
					);

					_calculateMorphedAttributeData(
						object,
						normalAttribute,
						morphNormal,
						morphTargetsRelative,
						a, b, c,
						modifiedNormal
					);

				}

			}

		} else {

			start = Math.max( 0, drawRange.start );
			end = Math.min( positionAttribute.count, ( drawRange.start + drawRange.count ) );

			for ( i = start, il = end; i < il; i += 3 ) {

				a = i;
				b = i + 1;
				c = i + 2;

				_calculateMorphedAttributeData(
					object,
					positionAttribute,
					morphPosition,
					morphTargetsRelative,
					a, b, c,
					modifiedPosition
				);

				_calculateMorphedAttributeData(
					object,
					normalAttribute,
					morphNormal,
					morphTargetsRelative,
					a, b, c,
					modifiedNormal
				);

			}

		}

	}

	const morphedPositionAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( modifiedPosition, 3 );
	const morphedNormalAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( modifiedNormal, 3 );

	return {

		positionAttribute: positionAttribute,
		normalAttribute: normalAttribute,
		morphedPositionAttribute: morphedPositionAttribute,
		morphedNormalAttribute: morphedNormalAttribute

	};

}

function mergeGroups( geometry ) {

	if ( geometry.groups.length === 0 ) {

		console.warn( 'THREE.BufferGeometryUtils.mergeGroups(): No groups are defined. Nothing to merge.' );
		return geometry;

	}

	let groups = geometry.groups;

	// sort groups by material index

	groups = groups.sort( ( a, b ) => {

		if ( a.materialIndex !== b.materialIndex ) return a.materialIndex - b.materialIndex;

		return a.start - b.start;

	} );

	// create index for non-indexed geometries

	if ( geometry.getIndex() === null ) {

		const positionAttribute = geometry.getAttribute( 'position' );
		const indices = [];

		for ( let i = 0; i < positionAttribute.count; i += 3 ) {

			indices.push( i, i + 1, i + 2 );

		}

		geometry.setIndex( indices );

	}

	// sort index

	const index = geometry.getIndex();

	const newIndices = [];

	for ( let i = 0; i < groups.length; i ++ ) {

		const group = groups[ i ];

		const groupStart = group.start;
		const groupLength = groupStart + group.count;

		for ( let j = groupStart; j < groupLength; j ++ ) {

			newIndices.push( index.getX( j ) );

		}

	}

	geometry.dispose(); // Required to force buffer recreation
	geometry.setIndex( newIndices );

	// update groups indices

	let start = 0;

	for ( let i = 0; i < groups.length; i ++ ) {

		const group = groups[ i ];

		group.start = start;
		start += group.count;

	}

	// merge groups

	let currentGroup = groups[ 0 ];

	geometry.groups = [ currentGroup ];

	for ( let i = 1; i < groups.length; i ++ ) {

		const group = groups[ i ];

		if ( currentGroup.materialIndex === group.materialIndex ) {

			currentGroup.count += group.count;

		} else {

			currentGroup = group;
			geometry.groups.push( currentGroup );

		}

	}

	return geometry;

}


/**
 * Modifies the supplied geometry if it is non-indexed, otherwise creates a new,
 * non-indexed geometry. Returns the geometry with smooth normals everywhere except
 * faces that meet at an angle greater than the crease angle.
 *
 * @param {BufferGeometry} geometry
 * @param {number} [creaseAngle]
 * @return {BufferGeometry}
 */
function toCreasedNormals( geometry, creaseAngle = Math.PI / 3 /* 60 degrees */ ) {

	const creaseDot = Math.cos( creaseAngle );
	const hashMultiplier = ( 1 + 1e-10 ) * 1e2;

	// reusable vectors
	const verts = [ new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(), new three__WEBPACK_IMPORTED_MODULE_0__.Vector3() ];
	const tempVec1 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const tempVec2 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const tempNorm = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
	const tempNorm2 = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();

	// hashes a vector
	function hashVertex( v ) {

		const x = ~ ~ ( v.x * hashMultiplier );
		const y = ~ ~ ( v.y * hashMultiplier );
		const z = ~ ~ ( v.z * hashMultiplier );
		return `${x},${y},${z}`;

	}

	// BufferGeometry.toNonIndexed() warns if the geometry is non-indexed
	// and returns the original geometry
	const resultGeometry = geometry.index ? geometry.toNonIndexed() : geometry;
	const posAttr = resultGeometry.attributes.position;
	const vertexMap = {};

	// find all the normals shared by commonly located vertices
	for ( let i = 0, l = posAttr.count / 3; i < l; i ++ ) {

		const i3 = 3 * i;
		const a = verts[ 0 ].fromBufferAttribute( posAttr, i3 + 0 );
		const b = verts[ 1 ].fromBufferAttribute( posAttr, i3 + 1 );
		const c = verts[ 2 ].fromBufferAttribute( posAttr, i3 + 2 );

		tempVec1.subVectors( c, b );
		tempVec2.subVectors( a, b );

		// add the normal to the map for all vertices
		const normal = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3().crossVectors( tempVec1, tempVec2 ).normalize();
		for ( let n = 0; n < 3; n ++ ) {

			const vert = verts[ n ];
			const hash = hashVertex( vert );
			if ( ! ( hash in vertexMap ) ) {

				vertexMap[ hash ] = [];

			}

			vertexMap[ hash ].push( normal );

		}

	}

	// average normals from all vertices that share a common location if they are within the
	// provided crease threshold
	const normalArray = new Float32Array( posAttr.count * 3 );
	const normAttr = new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute( normalArray, 3, false );
	for ( let i = 0, l = posAttr.count / 3; i < l; i ++ ) {

		// get the face normal for this vertex
		const i3 = 3 * i;
		const a = verts[ 0 ].fromBufferAttribute( posAttr, i3 + 0 );
		const b = verts[ 1 ].fromBufferAttribute( posAttr, i3 + 1 );
		const c = verts[ 2 ].fromBufferAttribute( posAttr, i3 + 2 );

		tempVec1.subVectors( c, b );
		tempVec2.subVectors( a, b );

		tempNorm.crossVectors( tempVec1, tempVec2 ).normalize();

		// average all normals that meet the threshold and set the normal value
		for ( let n = 0; n < 3; n ++ ) {

			const vert = verts[ n ];
			const hash = hashVertex( vert );
			const otherNormals = vertexMap[ hash ];
			tempNorm2.set( 0, 0, 0 );

			for ( let k = 0, lk = otherNormals.length; k < lk; k ++ ) {

				const otherNorm = otherNormals[ k ];
				if ( tempNorm.dot( otherNorm ) > creaseDot ) {

					tempNorm2.add( otherNorm );

				}

			}

			tempNorm2.normalize();
			normAttr.setXYZ( i3 + n, tempNorm2.x, tempNorm2.y, tempNorm2.z );

		}

	}

	resultGeometry.setAttribute( 'normal', normAttr );
	return resultGeometry;

}




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4187736b955380e1405d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLFFBQVEsMENBQU8sUUFBUSwwQ0FBTztBQUMxRCxzQkFBc0IsMENBQU87QUFDN0Isc0JBQXNCLDBDQUFPO0FBQzdCLHNCQUFzQiwwQ0FBTztBQUM3Qix1QkFBdUIsMENBQU87O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7O0FBRXhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsT0FBTzs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwwQ0FBTztBQUM1QixtQkFBbUIsT0FBTzs7QUFFMUI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrREFBZTtBQUNyQyx5Q0FBeUMsT0FBTzs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUJBQW1CLE9BQU87O0FBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFROztBQUV0RDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFhRTs7Ozs7Ozs7O1VDNTFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi1leHBlcmltZW50LTEvLi9zcmMvc2NyaXB0LmpzIiwid2VicGFjazovL3dlYi1leHBlcmltZW50LTEvLi9ub2RlX21vZHVsZXMvdGhyZWUvZXhhbXBsZXMvanNtL3V0aWxzL0J1ZmZlckdlb21ldHJ5VXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2ViLWV4cGVyaW1lbnQtMS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcbmltcG9ydCBDdXN0b21TaGFkZXJNYXRlcmlhbCBmcm9tICd0aHJlZS1jdXN0b20tc2hhZGVyLW1hdGVyaWFsL3ZhbmlsbGEnXHJcblxyXG5pbXBvcnQgeyBtZXJnZVZlcnRpY2VzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL3V0aWxzL0J1ZmZlckdlb21ldHJ5VXRpbHMnXHJcblxyXG5pbXBvcnQgdmVydGV4IGZyb20gJy4uL3NoYXJlZC9zaGFkZXJzL2Jsb2ItdmVydGV4Lmdsc2wnXHJcbmltcG9ydCBmcmFnbWVudCBmcm9tICcuLi9zaGFyZWQvc2hhZGVycy9ibG9iLWZyYWdtZW50Lmdsc2wnXHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIENsb2NrIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KClcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGFwc2VkVGltZSgpIHtcclxuICAgICAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCkgLSB0aGlzLnN0YXJ0VGltZVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VGltZSgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vQ2xvY2tcclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKVxyXG5cclxuLy9DYW52YXMgQ3JlYXRpb25cclxuY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICBhbHBoYTogZmFsc2UsXHJcbiAgICBhbnRpYWxpYXM6IHRydWVcclxufSlcclxuXHJcbnJlbmRlcmVyLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJ2NhbnZhcydcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxyXG5cclxuLy9TY2VuZVxyXG5jb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpXHJcblxyXG4vL0NhbWVyYVxyXG5jb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApXHJcbmNhbWVyYS5wb3NpdGlvbi56ID0gNVxyXG5cclxuLy9DYW52YXMgUmVzaXplXHJcbmZ1bmN0aW9uIHJlc2l6ZSgpIHtcclxuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplLCBmYWxzZSlcclxucmVzaXplKClcclxuXHJcbi8vR2VvbWV0cnlcclxuY29uc3QgZ2VvbWV0cnkgPSBtZXJnZVZlcnRpY2VzKG5ldyBUSFJFRS5JY29zYWhlZHJvbkdlb21ldHJ5KDEuMywgMjAwKSlcclxuZ2VvbWV0cnkuY29tcHV0ZVRhbmdlbnRzKClcclxuXHJcbi8vTGlnaHRcclxuY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZiwgMSlcclxuY29uc3QgZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmLCA1KVxyXG5cclxuZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoLTIsIDIsIDMuNSlcclxuXHJcbi8vVW5pZm9ybXNcclxuY29uc3QgdW5pZm9ybXMgPSB7XHJcbiAgICB1VGltZTogeyB2YWx1ZTogMCB9LFxyXG4gICAgdUNvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoJyM2RDk4ODYnKSB9LFxyXG4gICAgdUdyYWRpZW50U3RyZW5ndGg6IHsgdmFsdWU6IDEgfSxcclxuICAgIHVTcGVlZDogeyB2YWx1ZTogMS4xIH0sXHJcbiAgICB1Tm9pc2VTdHJlbmd0aDogeyB2YWx1ZTogMC4zIH0sXHJcbiAgICB1RGlzcGxhY2VtZW50U3RyZW5ndGg6IHsgdmFsdWU6IDAuNTcgfSxcclxuICAgIHVGcmFjdEFtb3VudDogeyB2YWx1ZTogNCB9LFxyXG59XHJcblxyXG4vL01lc2hcclxuY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKFxyXG4gICAgZ2VvbWV0cnksIFxyXG4gICAgbmV3IEN1c3RvbVNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICBzaWxlbnQ6IHRydWUsXHJcbiAgICAgICAgYmFzZU1hdGVyaWFsOiBUSFJFRS5NZXNoUGh5c2ljYWxNYXRlcmlhbCxcclxuICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHZlcnRleCxcclxuICAgICAgICBmcmFnbWVudFNoYWRlcjogZnJhZ21lbnQsXHJcbiAgICAgICAgcm91Z2huZXNzOiAwLjU2LFxyXG4gICAgICAgIG1ldGFsbmVzczogMC43NixcclxuICAgICAgICBjbGVhcmNvYXQ6IDAsXHJcbiAgICAgICAgaW9yOiAyLjgxLFxyXG4gICAgICAgIGlyaWRlc2NlbmNlOiAwLjk2LFxyXG4gICAgICAgIHVuaWZvcm1zOiB1bmlmb3Jtc1xyXG4gICAgfSksXHJcblxyXG4gICAgbmV3IEN1c3RvbVNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICBiYXNlTWF0ZXJpYWw6IFRIUkVFLk1lc2hEZXB0aE1hdGVyaWFsLFxyXG4gICAgICAgIHZlcnRleFNoYWRlcjogdmVydGV4LFxyXG4gICAgICAgIHVuaWZvcm1zOiB1bmlmb3JtcyxcclxuICAgICAgICBzaWxlbnQ6IHRydWUsXHJcbiAgICAgICAgZGVwdGhQYWNraW5nOiBUSFJFRS5SR0JBRGVwdGhQYWNraW5nLFxyXG4gICAgfSlcclxuKVxyXG5cclxuc2NlbmUuYWRkKG1lc2gpXHJcbnNjZW5lLmFkZChkaXJlY3Rpb25hbExpZ2h0KVxyXG5zY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxyXG5cclxuLy9SZW5kZXJcclxuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSlcclxuLy8gZnVuY3Rpb24gdXBkYXRlKCkge1xyXG4gICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSlcclxuXHJcbi8vICAgICBzY2VuZS5jaGlsZHJlbi5mb3JFYWNoKG1lc2ggPT4ge1xyXG4vLyAgICAgICAgIG1lc2gucHJvZ3JhbS51bmlmb3Jtcy51VGltZS52YWx1ZSA9IGNsb2NrLmdldEVsYXBzZWRUaW1lKCkgLyAxMDAwMFxyXG4vLyAgICAgfSlcclxuXHJcbi8vIH1cclxucmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhICkiLCJpbXBvcnQge1xuXHRCdWZmZXJBdHRyaWJ1dGUsXG5cdEJ1ZmZlckdlb21ldHJ5LFxuXHRGbG9hdDMyQnVmZmVyQXR0cmlidXRlLFxuXHRJbnN0YW5jZWRCdWZmZXJBdHRyaWJ1dGUsXG5cdEludGVybGVhdmVkQnVmZmVyLFxuXHRJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSxcblx0VHJpYW5nbGVGYW5EcmF3TW9kZSxcblx0VHJpYW5nbGVTdHJpcERyYXdNb2RlLFxuXHRUcmlhbmdsZXNEcmF3TW9kZSxcblx0VmVjdG9yMyxcbn0gZnJvbSAndGhyZWUnO1xuXG5mdW5jdGlvbiBjb21wdXRlTWlra1RTcGFjZVRhbmdlbnRzKCBnZW9tZXRyeSwgTWlra1RTcGFjZSwgbmVnYXRlU2lnbiA9IHRydWUgKSB7XG5cblx0aWYgKCAhIE1pa2tUU3BhY2UgfHwgISBNaWtrVFNwYWNlLmlzUmVhZHkgKSB7XG5cblx0XHR0aHJvdyBuZXcgRXJyb3IoICdCdWZmZXJHZW9tZXRyeVV0aWxzOiBJbml0aWFsaXplZCBNaWtrVFNwYWNlIGxpYnJhcnkgcmVxdWlyZWQuJyApO1xuXG5cdH1cblxuXHRpZiAoICEgZ2VvbWV0cnkuaGFzQXR0cmlidXRlKCAncG9zaXRpb24nICkgfHwgISBnZW9tZXRyeS5oYXNBdHRyaWJ1dGUoICdub3JtYWwnICkgfHwgISBnZW9tZXRyeS5oYXNBdHRyaWJ1dGUoICd1dicgKSApIHtcblxuXHRcdHRocm93IG5ldyBFcnJvciggJ0J1ZmZlckdlb21ldHJ5VXRpbHM6IFRhbmdlbnRzIHJlcXVpcmUgXCJwb3NpdGlvblwiLCBcIm5vcm1hbFwiLCBhbmQgXCJ1dlwiIGF0dHJpYnV0ZXMuJyApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBnZXRBdHRyaWJ1dGVBcnJheSggYXR0cmlidXRlICkge1xuXG5cdFx0aWYgKCBhdHRyaWJ1dGUubm9ybWFsaXplZCB8fCBhdHRyaWJ1dGUuaXNJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSApIHtcblxuXHRcdFx0Y29uc3QgZHN0QXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KCBhdHRyaWJ1dGUuY291bnQgKiBhdHRyaWJ1dGUuaXRlbVNpemUgKTtcblxuXHRcdFx0Zm9yICggbGV0IGkgPSAwLCBqID0gMDsgaSA8IGF0dHJpYnV0ZS5jb3VudDsgaSArKyApIHtcblxuXHRcdFx0XHRkc3RBcnJheVsgaiArKyBdID0gYXR0cmlidXRlLmdldFgoIGkgKTtcblx0XHRcdFx0ZHN0QXJyYXlbIGogKysgXSA9IGF0dHJpYnV0ZS5nZXRZKCBpICk7XG5cblx0XHRcdFx0aWYgKCBhdHRyaWJ1dGUuaXRlbVNpemUgPiAyICkge1xuXG5cdFx0XHRcdFx0ZHN0QXJyYXlbIGogKysgXSA9IGF0dHJpYnV0ZS5nZXRaKCBpICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkc3RBcnJheTtcblxuXHRcdH1cblxuXHRcdGlmICggYXR0cmlidXRlLmFycmF5IGluc3RhbmNlb2YgRmxvYXQzMkFycmF5ICkge1xuXG5cdFx0XHRyZXR1cm4gYXR0cmlidXRlLmFycmF5O1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoIGF0dHJpYnV0ZS5hcnJheSApO1xuXG5cdH1cblxuXHQvLyBNaWtrVFNwYWNlIGFsZ29yaXRobSByZXF1aXJlcyBub24taW5kZXhlZCBpbnB1dC5cblxuXHRjb25zdCBfZ2VvbWV0cnkgPSBnZW9tZXRyeS5pbmRleCA/IGdlb21ldHJ5LnRvTm9uSW5kZXhlZCgpIDogZ2VvbWV0cnk7XG5cblx0Ly8gQ29tcHV0ZSB2ZXJ0ZXggdGFuZ2VudHMuXG5cblx0Y29uc3QgdGFuZ2VudHMgPSBNaWtrVFNwYWNlLmdlbmVyYXRlVGFuZ2VudHMoXG5cblx0XHRnZXRBdHRyaWJ1dGVBcnJheSggX2dlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24gKSxcblx0XHRnZXRBdHRyaWJ1dGVBcnJheSggX2dlb21ldHJ5LmF0dHJpYnV0ZXMubm9ybWFsICksXG5cdFx0Z2V0QXR0cmlidXRlQXJyYXkoIF9nZW9tZXRyeS5hdHRyaWJ1dGVzLnV2IClcblxuXHQpO1xuXG5cdC8vIFRleHR1cmUgY29vcmRpbmF0ZSBjb252ZW50aW9uIG9mIGdsVEYgZGlmZmVycyBmcm9tIHRoZSBhcHBhcmVudFxuXHQvLyBkZWZhdWx0IG9mIHRoZSBNaWtrVFNwYWNlIGxpYnJhcnk7IC53IGNvbXBvbmVudCBtdXN0IGJlIGZsaXBwZWQuXG5cblx0aWYgKCBuZWdhdGVTaWduICkge1xuXG5cdFx0Zm9yICggbGV0IGkgPSAzOyBpIDwgdGFuZ2VudHMubGVuZ3RoOyBpICs9IDQgKSB7XG5cblx0XHRcdHRhbmdlbnRzWyBpIF0gKj0gLSAxO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvL1xuXG5cdF9nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoICd0YW5nZW50JywgbmV3IEJ1ZmZlckF0dHJpYnV0ZSggdGFuZ2VudHMsIDQgKSApO1xuXG5cdGlmICggZ2VvbWV0cnkgIT09IF9nZW9tZXRyeSApIHtcblxuXHRcdGdlb21ldHJ5LmNvcHkoIF9nZW9tZXRyeSApO1xuXG5cdH1cblxuXHRyZXR1cm4gZ2VvbWV0cnk7XG5cbn1cblxuLyoqXG4gKiBAcGFyYW0gIHtBcnJheTxCdWZmZXJHZW9tZXRyeT59IGdlb21ldHJpZXNcbiAqIEBwYXJhbSAge0Jvb2xlYW59IHVzZUdyb3Vwc1xuICogQHJldHVybiB7QnVmZmVyR2VvbWV0cnl9XG4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvbWV0cmllcyggZ2VvbWV0cmllcywgdXNlR3JvdXBzID0gZmFsc2UgKSB7XG5cblx0Y29uc3QgaXNJbmRleGVkID0gZ2VvbWV0cmllc1sgMCBdLmluZGV4ICE9PSBudWxsO1xuXG5cdGNvbnN0IGF0dHJpYnV0ZXNVc2VkID0gbmV3IFNldCggT2JqZWN0LmtleXMoIGdlb21ldHJpZXNbIDAgXS5hdHRyaWJ1dGVzICkgKTtcblx0Y29uc3QgbW9ycGhBdHRyaWJ1dGVzVXNlZCA9IG5ldyBTZXQoIE9iamVjdC5rZXlzKCBnZW9tZXRyaWVzWyAwIF0ubW9ycGhBdHRyaWJ1dGVzICkgKTtcblxuXHRjb25zdCBhdHRyaWJ1dGVzID0ge307XG5cdGNvbnN0IG1vcnBoQXR0cmlidXRlcyA9IHt9O1xuXG5cdGNvbnN0IG1vcnBoVGFyZ2V0c1JlbGF0aXZlID0gZ2VvbWV0cmllc1sgMCBdLm1vcnBoVGFyZ2V0c1JlbGF0aXZlO1xuXG5cdGNvbnN0IG1lcmdlZEdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XG5cblx0bGV0IG9mZnNldCA9IDA7XG5cblx0Zm9yICggbGV0IGkgPSAwOyBpIDwgZ2VvbWV0cmllcy5sZW5ndGg7ICsrIGkgKSB7XG5cblx0XHRjb25zdCBnZW9tZXRyeSA9IGdlb21ldHJpZXNbIGkgXTtcblx0XHRsZXQgYXR0cmlidXRlc0NvdW50ID0gMDtcblxuXHRcdC8vIGVuc3VyZSB0aGF0IGFsbCBnZW9tZXRyaWVzIGFyZSBpbmRleGVkLCBvciBub25lXG5cblx0XHRpZiAoIGlzSW5kZXhlZCAhPT0gKCBnZW9tZXRyeS5pbmRleCAhPT0gbnVsbCApICkge1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlR2VvbWV0cmllcygpIGZhaWxlZCB3aXRoIGdlb21ldHJ5IGF0IGluZGV4ICcgKyBpICsgJy4gQWxsIGdlb21ldHJpZXMgbXVzdCBoYXZlIGNvbXBhdGlibGUgYXR0cmlidXRlczsgbWFrZSBzdXJlIGluZGV4IGF0dHJpYnV0ZSBleGlzdHMgYW1vbmcgYWxsIGdlb21ldHJpZXMsIG9yIGluIG5vbmUgb2YgdGhlbS4nICk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHRcdC8vIGdhdGhlciBhdHRyaWJ1dGVzLCBleGl0IGVhcmx5IGlmIHRoZXkncmUgZGlmZmVyZW50XG5cblx0XHRmb3IgKCBjb25zdCBuYW1lIGluIGdlb21ldHJ5LmF0dHJpYnV0ZXMgKSB7XG5cblx0XHRcdGlmICggISBhdHRyaWJ1dGVzVXNlZC5oYXMoIG5hbWUgKSApIHtcblxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlR2VvbWV0cmllcygpIGZhaWxlZCB3aXRoIGdlb21ldHJ5IGF0IGluZGV4ICcgKyBpICsgJy4gQWxsIGdlb21ldHJpZXMgbXVzdCBoYXZlIGNvbXBhdGlibGUgYXR0cmlidXRlczsgbWFrZSBzdXJlIFwiJyArIG5hbWUgKyAnXCIgYXR0cmlidXRlIGV4aXN0cyBhbW9uZyBhbGwgZ2VvbWV0cmllcywgb3IgaW4gbm9uZSBvZiB0aGVtLicgKTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBhdHRyaWJ1dGVzWyBuYW1lIF0gPT09IHVuZGVmaW5lZCApIGF0dHJpYnV0ZXNbIG5hbWUgXSA9IFtdO1xuXG5cdFx0XHRhdHRyaWJ1dGVzWyBuYW1lIF0ucHVzaCggZ2VvbWV0cnkuYXR0cmlidXRlc1sgbmFtZSBdICk7XG5cblx0XHRcdGF0dHJpYnV0ZXNDb3VudCArKztcblxuXHRcdH1cblxuXHRcdC8vIGVuc3VyZSBnZW9tZXRyaWVzIGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIGF0dHJpYnV0ZXNcblxuXHRcdGlmICggYXR0cmlidXRlc0NvdW50ICE9PSBhdHRyaWJ1dGVzVXNlZC5zaXplICkge1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlR2VvbWV0cmllcygpIGZhaWxlZCB3aXRoIGdlb21ldHJ5IGF0IGluZGV4ICcgKyBpICsgJy4gTWFrZSBzdXJlIGFsbCBnZW9tZXRyaWVzIGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIGF0dHJpYnV0ZXMuJyApO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cblx0XHQvLyBnYXRoZXIgbW9ycGggYXR0cmlidXRlcywgZXhpdCBlYXJseSBpZiB0aGV5J3JlIGRpZmZlcmVudFxuXG5cdFx0aWYgKCBtb3JwaFRhcmdldHNSZWxhdGl2ZSAhPT0gZ2VvbWV0cnkubW9ycGhUYXJnZXRzUmVsYXRpdmUgKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VHZW9tZXRyaWVzKCkgZmFpbGVkIHdpdGggZ2VvbWV0cnkgYXQgaW5kZXggJyArIGkgKyAnLiAubW9ycGhUYXJnZXRzUmVsYXRpdmUgbXVzdCBiZSBjb25zaXN0ZW50IHRocm91Z2hvdXQgYWxsIGdlb21ldHJpZXMuJyApO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCBuYW1lIGluIGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcyApIHtcblxuXHRcdFx0aWYgKCAhIG1vcnBoQXR0cmlidXRlc1VzZWQuaGFzKCBuYW1lICkgKSB7XG5cblx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUdlb21ldHJpZXMoKSBmYWlsZWQgd2l0aCBnZW9tZXRyeSBhdCBpbmRleCAnICsgaSArICcuICAubW9ycGhBdHRyaWJ1dGVzIG11c3QgYmUgY29uc2lzdGVudCB0aHJvdWdob3V0IGFsbCBnZW9tZXRyaWVzLicgKTtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBtb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXSA9PT0gdW5kZWZpbmVkICkgbW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF0gPSBbXTtcblxuXHRcdFx0bW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF0ucHVzaCggZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF0gKTtcblxuXHRcdH1cblxuXHRcdGlmICggdXNlR3JvdXBzICkge1xuXG5cdFx0XHRsZXQgY291bnQ7XG5cblx0XHRcdGlmICggaXNJbmRleGVkICkge1xuXG5cdFx0XHRcdGNvdW50ID0gZ2VvbWV0cnkuaW5kZXguY291bnQ7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRjb3VudCA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uY291bnQ7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUdlb21ldHJpZXMoKSBmYWlsZWQgd2l0aCBnZW9tZXRyeSBhdCBpbmRleCAnICsgaSArICcuIFRoZSBnZW9tZXRyeSBtdXN0IGhhdmUgZWl0aGVyIGFuIGluZGV4IG9yIGEgcG9zaXRpb24gYXR0cmlidXRlJyApO1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdFx0fVxuXG5cdFx0XHRtZXJnZWRHZW9tZXRyeS5hZGRHcm91cCggb2Zmc2V0LCBjb3VudCwgaSApO1xuXG5cdFx0XHRvZmZzZXQgKz0gY291bnQ7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vIG1lcmdlIGluZGljZXNcblxuXHRpZiAoIGlzSW5kZXhlZCApIHtcblxuXHRcdGxldCBpbmRleE9mZnNldCA9IDA7XG5cdFx0Y29uc3QgbWVyZ2VkSW5kZXggPSBbXTtcblxuXHRcdGZvciAoIGxldCBpID0gMDsgaSA8IGdlb21ldHJpZXMubGVuZ3RoOyArKyBpICkge1xuXG5cdFx0XHRjb25zdCBpbmRleCA9IGdlb21ldHJpZXNbIGkgXS5pbmRleDtcblxuXHRcdFx0Zm9yICggbGV0IGogPSAwOyBqIDwgaW5kZXguY291bnQ7ICsrIGogKSB7XG5cblx0XHRcdFx0bWVyZ2VkSW5kZXgucHVzaCggaW5kZXguZ2V0WCggaiApICsgaW5kZXhPZmZzZXQgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpbmRleE9mZnNldCArPSBnZW9tZXRyaWVzWyBpIF0uYXR0cmlidXRlcy5wb3NpdGlvbi5jb3VudDtcblxuXHRcdH1cblxuXHRcdG1lcmdlZEdlb21ldHJ5LnNldEluZGV4KCBtZXJnZWRJbmRleCApO1xuXG5cdH1cblxuXHQvLyBtZXJnZSBhdHRyaWJ1dGVzXG5cblx0Zm9yICggY29uc3QgbmFtZSBpbiBhdHRyaWJ1dGVzICkge1xuXG5cdFx0Y29uc3QgbWVyZ2VkQXR0cmlidXRlID0gbWVyZ2VBdHRyaWJ1dGVzKCBhdHRyaWJ1dGVzWyBuYW1lIF0gKTtcblxuXHRcdGlmICggISBtZXJnZWRBdHRyaWJ1dGUgKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VHZW9tZXRyaWVzKCkgZmFpbGVkIHdoaWxlIHRyeWluZyB0byBtZXJnZSB0aGUgJyArIG5hbWUgKyAnIGF0dHJpYnV0ZS4nICk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHRcdG1lcmdlZEdlb21ldHJ5LnNldEF0dHJpYnV0ZSggbmFtZSwgbWVyZ2VkQXR0cmlidXRlICk7XG5cblx0fVxuXG5cdC8vIG1lcmdlIG1vcnBoIGF0dHJpYnV0ZXNcblxuXHRmb3IgKCBjb25zdCBuYW1lIGluIG1vcnBoQXR0cmlidXRlcyApIHtcblxuXHRcdGNvbnN0IG51bU1vcnBoVGFyZ2V0cyA9IG1vcnBoQXR0cmlidXRlc1sgbmFtZSBdWyAwIF0ubGVuZ3RoO1xuXG5cdFx0aWYgKCBudW1Nb3JwaFRhcmdldHMgPT09IDAgKSBicmVhaztcblxuXHRcdG1lcmdlZEdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcyA9IG1lcmdlZEdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcyB8fCB7fTtcblx0XHRtZXJnZWRHZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXSA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgbnVtTW9ycGhUYXJnZXRzOyArKyBpICkge1xuXG5cdFx0XHRjb25zdCBtb3JwaEF0dHJpYnV0ZXNUb01lcmdlID0gW107XG5cblx0XHRcdGZvciAoIGxldCBqID0gMDsgaiA8IG1vcnBoQXR0cmlidXRlc1sgbmFtZSBdLmxlbmd0aDsgKysgaiApIHtcblxuXHRcdFx0XHRtb3JwaEF0dHJpYnV0ZXNUb01lcmdlLnB1c2goIG1vcnBoQXR0cmlidXRlc1sgbmFtZSBdWyBqIF1bIGkgXSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IG1lcmdlZE1vcnBoQXR0cmlidXRlID0gbWVyZ2VBdHRyaWJ1dGVzKCBtb3JwaEF0dHJpYnV0ZXNUb01lcmdlICk7XG5cblx0XHRcdGlmICggISBtZXJnZWRNb3JwaEF0dHJpYnV0ZSApIHtcblxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlR2VvbWV0cmllcygpIGZhaWxlZCB3aGlsZSB0cnlpbmcgdG8gbWVyZ2UgdGhlICcgKyBuYW1lICsgJyBtb3JwaEF0dHJpYnV0ZS4nICk7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0XHR9XG5cblx0XHRcdG1lcmdlZEdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlc1sgbmFtZSBdLnB1c2goIG1lcmdlZE1vcnBoQXR0cmlidXRlICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdHJldHVybiBtZXJnZWRHZW9tZXRyeTtcblxufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8QnVmZmVyQXR0cmlidXRlPn0gYXR0cmlidXRlc1xuICogQHJldHVybiB7QnVmZmVyQXR0cmlidXRlfVxuICovXG5mdW5jdGlvbiBtZXJnZUF0dHJpYnV0ZXMoIGF0dHJpYnV0ZXMgKSB7XG5cblx0bGV0IFR5cGVkQXJyYXk7XG5cdGxldCBpdGVtU2l6ZTtcblx0bGV0IG5vcm1hbGl6ZWQ7XG5cdGxldCBncHVUeXBlID0gLSAxO1xuXHRsZXQgYXJyYXlMZW5ndGggPSAwO1xuXG5cdGZvciAoIGxldCBpID0gMDsgaSA8IGF0dHJpYnV0ZXMubGVuZ3RoOyArKyBpICkge1xuXG5cdFx0Y29uc3QgYXR0cmlidXRlID0gYXR0cmlidXRlc1sgaSBdO1xuXG5cdFx0aWYgKCBUeXBlZEFycmF5ID09PSB1bmRlZmluZWQgKSBUeXBlZEFycmF5ID0gYXR0cmlidXRlLmFycmF5LmNvbnN0cnVjdG9yO1xuXHRcdGlmICggVHlwZWRBcnJheSAhPT0gYXR0cmlidXRlLmFycmF5LmNvbnN0cnVjdG9yICkge1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQXR0cmlidXRlcygpIGZhaWxlZC4gQnVmZmVyQXR0cmlidXRlLmFycmF5IG11c3QgYmUgb2YgY29uc2lzdGVudCBhcnJheSB0eXBlcyBhY3Jvc3MgbWF0Y2hpbmcgYXR0cmlidXRlcy4nICk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHRcdGlmICggaXRlbVNpemUgPT09IHVuZGVmaW5lZCApIGl0ZW1TaXplID0gYXR0cmlidXRlLml0ZW1TaXplO1xuXHRcdGlmICggaXRlbVNpemUgIT09IGF0dHJpYnV0ZS5pdGVtU2l6ZSApIHtcblxuXHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUF0dHJpYnV0ZXMoKSBmYWlsZWQuIEJ1ZmZlckF0dHJpYnV0ZS5pdGVtU2l6ZSBtdXN0IGJlIGNvbnNpc3RlbnQgYWNyb3NzIG1hdGNoaW5nIGF0dHJpYnV0ZXMuJyApO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cblx0XHR9XG5cblx0XHRpZiAoIG5vcm1hbGl6ZWQgPT09IHVuZGVmaW5lZCApIG5vcm1hbGl6ZWQgPSBhdHRyaWJ1dGUubm9ybWFsaXplZDtcblx0XHRpZiAoIG5vcm1hbGl6ZWQgIT09IGF0dHJpYnV0ZS5ub3JtYWxpemVkICkge1xuXG5cdFx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQXR0cmlidXRlcygpIGZhaWxlZC4gQnVmZmVyQXR0cmlidXRlLm5vcm1hbGl6ZWQgbXVzdCBiZSBjb25zaXN0ZW50IGFjcm9zcyBtYXRjaGluZyBhdHRyaWJ1dGVzLicgKTtcblx0XHRcdHJldHVybiBudWxsO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBncHVUeXBlID09PSAtIDEgKSBncHVUeXBlID0gYXR0cmlidXRlLmdwdVR5cGU7XG5cdFx0aWYgKCBncHVUeXBlICE9PSBhdHRyaWJ1dGUuZ3B1VHlwZSApIHtcblxuXHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUF0dHJpYnV0ZXMoKSBmYWlsZWQuIEJ1ZmZlckF0dHJpYnV0ZS5ncHVUeXBlIG11c3QgYmUgY29uc2lzdGVudCBhY3Jvc3MgbWF0Y2hpbmcgYXR0cmlidXRlcy4nICk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHRcdGFycmF5TGVuZ3RoICs9IGF0dHJpYnV0ZS5jb3VudCAqIGl0ZW1TaXplO1xuXG5cdH1cblxuXHRjb25zdCBhcnJheSA9IG5ldyBUeXBlZEFycmF5KCBhcnJheUxlbmd0aCApO1xuXHRjb25zdCByZXN1bHQgPSBuZXcgQnVmZmVyQXR0cmlidXRlKCBhcnJheSwgaXRlbVNpemUsIG5vcm1hbGl6ZWQgKTtcblx0bGV0IG9mZnNldCA9IDA7XG5cblx0Zm9yICggbGV0IGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7ICsrIGkgKSB7XG5cblx0XHRjb25zdCBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzWyBpIF07XG5cdFx0aWYgKCBhdHRyaWJ1dGUuaXNJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSApIHtcblxuXHRcdFx0Y29uc3QgdHVwbGVPZmZzZXQgPSBvZmZzZXQgLyBpdGVtU2l6ZTtcblx0XHRcdGZvciAoIGxldCBqID0gMCwgbCA9IGF0dHJpYnV0ZS5jb3VudDsgaiA8IGw7IGogKysgKSB7XG5cblx0XHRcdFx0Zm9yICggbGV0IGMgPSAwOyBjIDwgaXRlbVNpemU7IGMgKysgKSB7XG5cblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZS5nZXRDb21wb25lbnQoIGosIGMgKTtcblx0XHRcdFx0XHRyZXN1bHQuc2V0Q29tcG9uZW50KCBqICsgdHVwbGVPZmZzZXQsIGMsIHZhbHVlICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRhcnJheS5zZXQoIGF0dHJpYnV0ZS5hcnJheSwgb2Zmc2V0ICk7XG5cblx0XHR9XG5cblx0XHRvZmZzZXQgKz0gYXR0cmlidXRlLmNvdW50ICogaXRlbVNpemU7XG5cblx0fVxuXG5cdGlmICggZ3B1VHlwZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0cmVzdWx0LmdwdVR5cGUgPSBncHVUeXBlO1xuXG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtCdWZmZXJBdHRyaWJ1dGV9XG4gKiBAcmV0dXJuIHtCdWZmZXJBdHRyaWJ1dGV9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmVBdHRyaWJ1dGUoIGF0dHJpYnV0ZSApIHtcblxuXHRpZiAoIGF0dHJpYnV0ZS5pc0luc3RhbmNlZEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlIHx8IGF0dHJpYnV0ZS5pc0ludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlICkge1xuXG5cdFx0cmV0dXJuIGRlaW50ZXJsZWF2ZUF0dHJpYnV0ZSggYXR0cmlidXRlICk7XG5cblx0fVxuXG5cdGlmICggYXR0cmlidXRlLmlzSW5zdGFuY2VkQnVmZmVyQXR0cmlidXRlICkge1xuXG5cdFx0cmV0dXJuIG5ldyBJbnN0YW5jZWRCdWZmZXJBdHRyaWJ1dGUoKS5jb3B5KCBhdHRyaWJ1dGUgKTtcblxuXHR9XG5cblx0cmV0dXJuIG5ldyBCdWZmZXJBdHRyaWJ1dGUoKS5jb3B5KCBhdHRyaWJ1dGUgKTtcblxufVxuXG4vKipcbiAqIEBwYXJhbSB7QXJyYXk8QnVmZmVyQXR0cmlidXRlPn0gYXR0cmlidXRlc1xuICogQHJldHVybiB7QXJyYXk8SW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGU+fVxuICovXG5mdW5jdGlvbiBpbnRlcmxlYXZlQXR0cmlidXRlcyggYXR0cmlidXRlcyApIHtcblxuXHQvLyBJbnRlcmxlYXZlcyB0aGUgcHJvdmlkZWQgYXR0cmlidXRlcyBpbnRvIGFuIEludGVybGVhdmVkQnVmZmVyIGFuZCByZXR1cm5zXG5cdC8vIGEgc2V0IG9mIEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlcyBmb3IgZWFjaCBhdHRyaWJ1dGVcblx0bGV0IFR5cGVkQXJyYXk7XG5cdGxldCBhcnJheUxlbmd0aCA9IDA7XG5cdGxldCBzdHJpZGUgPSAwO1xuXG5cdC8vIGNhbGN1bGF0ZSB0aGUgbGVuZ3RoIGFuZCB0eXBlIG9mIHRoZSBpbnRlcmxlYXZlZEJ1ZmZlclxuXHRmb3IgKCBsZXQgaSA9IDAsIGwgPSBhdHRyaWJ1dGVzLmxlbmd0aDsgaSA8IGw7ICsrIGkgKSB7XG5cblx0XHRjb25zdCBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzWyBpIF07XG5cblx0XHRpZiAoIFR5cGVkQXJyYXkgPT09IHVuZGVmaW5lZCApIFR5cGVkQXJyYXkgPSBhdHRyaWJ1dGUuYXJyYXkuY29uc3RydWN0b3I7XG5cdFx0aWYgKCBUeXBlZEFycmF5ICE9PSBhdHRyaWJ1dGUuYXJyYXkuY29uc3RydWN0b3IgKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdBdHRyaWJ1dGVCdWZmZXJzIG9mIGRpZmZlcmVudCB0eXBlcyBjYW5ub3QgYmUgaW50ZXJsZWF2ZWQnICk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblxuXHRcdH1cblxuXHRcdGFycmF5TGVuZ3RoICs9IGF0dHJpYnV0ZS5hcnJheS5sZW5ndGg7XG5cdFx0c3RyaWRlICs9IGF0dHJpYnV0ZS5pdGVtU2l6ZTtcblxuXHR9XG5cblx0Ly8gQ3JlYXRlIHRoZSBzZXQgb2YgYnVmZmVyIGF0dHJpYnV0ZXNcblx0Y29uc3QgaW50ZXJsZWF2ZWRCdWZmZXIgPSBuZXcgSW50ZXJsZWF2ZWRCdWZmZXIoIG5ldyBUeXBlZEFycmF5KCBhcnJheUxlbmd0aCApLCBzdHJpZGUgKTtcblx0bGV0IG9mZnNldCA9IDA7XG5cdGNvbnN0IHJlcyA9IFtdO1xuXHRjb25zdCBnZXR0ZXJzID0gWyAnZ2V0WCcsICdnZXRZJywgJ2dldFonLCAnZ2V0VycgXTtcblx0Y29uc3Qgc2V0dGVycyA9IFsgJ3NldFgnLCAnc2V0WScsICdzZXRaJywgJ3NldFcnIF07XG5cblx0Zm9yICggbGV0IGogPSAwLCBsID0gYXR0cmlidXRlcy5sZW5ndGg7IGogPCBsOyBqICsrICkge1xuXG5cdFx0Y29uc3QgYXR0cmlidXRlID0gYXR0cmlidXRlc1sgaiBdO1xuXHRcdGNvbnN0IGl0ZW1TaXplID0gYXR0cmlidXRlLml0ZW1TaXplO1xuXHRcdGNvbnN0IGNvdW50ID0gYXR0cmlidXRlLmNvdW50O1xuXHRcdGNvbnN0IGliYSA9IG5ldyBJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSggaW50ZXJsZWF2ZWRCdWZmZXIsIGl0ZW1TaXplLCBvZmZzZXQsIGF0dHJpYnV0ZS5ub3JtYWxpemVkICk7XG5cdFx0cmVzLnB1c2goIGliYSApO1xuXG5cdFx0b2Zmc2V0ICs9IGl0ZW1TaXplO1xuXG5cdFx0Ly8gTW92ZSB0aGUgZGF0YSBmb3IgZWFjaCBhdHRyaWJ1dGUgaW50byB0aGUgbmV3IGludGVybGVhdmVkQnVmZmVyXG5cdFx0Ly8gYXQgdGhlIGFwcHJvcHJpYXRlIG9mZnNldFxuXHRcdGZvciAoIGxldCBjID0gMDsgYyA8IGNvdW50OyBjICsrICkge1xuXG5cdFx0XHRmb3IgKCBsZXQgayA9IDA7IGsgPCBpdGVtU2l6ZTsgayArKyApIHtcblxuXHRcdFx0XHRpYmFbIHNldHRlcnNbIGsgXSBdKCBjLCBhdHRyaWJ1dGVbIGdldHRlcnNbIGsgXSBdKCBjICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4gcmVzO1xuXG59XG5cbi8vIHJldHVybnMgYSBuZXcsIG5vbi1pbnRlcmxlYXZlZCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCBhdHRyaWJ1dGVcbmV4cG9ydCBmdW5jdGlvbiBkZWludGVybGVhdmVBdHRyaWJ1dGUoIGF0dHJpYnV0ZSApIHtcblxuXHRjb25zdCBjb25zID0gYXR0cmlidXRlLmRhdGEuYXJyYXkuY29uc3RydWN0b3I7XG5cdGNvbnN0IGNvdW50ID0gYXR0cmlidXRlLmNvdW50O1xuXHRjb25zdCBpdGVtU2l6ZSA9IGF0dHJpYnV0ZS5pdGVtU2l6ZTtcblx0Y29uc3Qgbm9ybWFsaXplZCA9IGF0dHJpYnV0ZS5ub3JtYWxpemVkO1xuXG5cdGNvbnN0IGFycmF5ID0gbmV3IGNvbnMoIGNvdW50ICogaXRlbVNpemUgKTtcblx0bGV0IG5ld0F0dHJpYnV0ZTtcblx0aWYgKCBhdHRyaWJ1dGUuaXNJbnN0YW5jZWRJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSApIHtcblxuXHRcdG5ld0F0dHJpYnV0ZSA9IG5ldyBJbnN0YW5jZWRCdWZmZXJBdHRyaWJ1dGUoIGFycmF5LCBpdGVtU2l6ZSwgbm9ybWFsaXplZCwgYXR0cmlidXRlLm1lc2hQZXJBdHRyaWJ1dGUgKTtcblxuXHR9IGVsc2Uge1xuXG5cdFx0bmV3QXR0cmlidXRlID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZSggYXJyYXksIGl0ZW1TaXplLCBub3JtYWxpemVkICk7XG5cblx0fVxuXG5cdGZvciAoIGxldCBpID0gMDsgaSA8IGNvdW50OyBpICsrICkge1xuXG5cdFx0bmV3QXR0cmlidXRlLnNldFgoIGksIGF0dHJpYnV0ZS5nZXRYKCBpICkgKTtcblxuXHRcdGlmICggaXRlbVNpemUgPj0gMiApIHtcblxuXHRcdFx0bmV3QXR0cmlidXRlLnNldFkoIGksIGF0dHJpYnV0ZS5nZXRZKCBpICkgKTtcblxuXHRcdH1cblxuXHRcdGlmICggaXRlbVNpemUgPj0gMyApIHtcblxuXHRcdFx0bmV3QXR0cmlidXRlLnNldFooIGksIGF0dHJpYnV0ZS5nZXRaKCBpICkgKTtcblxuXHRcdH1cblxuXHRcdGlmICggaXRlbVNpemUgPj0gNCApIHtcblxuXHRcdFx0bmV3QXR0cmlidXRlLnNldFcoIGksIGF0dHJpYnV0ZS5nZXRXKCBpICkgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIG5ld0F0dHJpYnV0ZTtcblxufVxuXG4vLyBkZWludGVybGVhdmVzIGFsbCBhdHRyaWJ1dGVzIG9uIHRoZSBnZW9tZXRyeVxuZXhwb3J0IGZ1bmN0aW9uIGRlaW50ZXJsZWF2ZUdlb21ldHJ5KCBnZW9tZXRyeSApIHtcblxuXHRjb25zdCBhdHRyaWJ1dGVzID0gZ2VvbWV0cnkuYXR0cmlidXRlcztcblx0Y29uc3QgbW9ycGhUYXJnZXRzID0gZ2VvbWV0cnkubW9ycGhUYXJnZXRzO1xuXHRjb25zdCBhdHRyTWFwID0gbmV3IE1hcCgpO1xuXG5cdGZvciAoIGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzICkge1xuXG5cdFx0Y29uc3QgYXR0ciA9IGF0dHJpYnV0ZXNbIGtleSBdO1xuXHRcdGlmICggYXR0ci5pc0ludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlICkge1xuXG5cdFx0XHRpZiAoICEgYXR0ck1hcC5oYXMoIGF0dHIgKSApIHtcblxuXHRcdFx0XHRhdHRyTWFwLnNldCggYXR0ciwgZGVpbnRlcmxlYXZlQXR0cmlidXRlKCBhdHRyICkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRhdHRyaWJ1dGVzWyBrZXkgXSA9IGF0dHJNYXAuZ2V0KCBhdHRyICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZvciAoIGNvbnN0IGtleSBpbiBtb3JwaFRhcmdldHMgKSB7XG5cblx0XHRjb25zdCBhdHRyID0gbW9ycGhUYXJnZXRzWyBrZXkgXTtcblx0XHRpZiAoIGF0dHIuaXNJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSApIHtcblxuXHRcdFx0aWYgKCAhIGF0dHJNYXAuaGFzKCBhdHRyICkgKSB7XG5cblx0XHRcdFx0YXR0ck1hcC5zZXQoIGF0dHIsIGRlaW50ZXJsZWF2ZUF0dHJpYnV0ZSggYXR0ciApICk7XG5cblx0XHRcdH1cblxuXHRcdFx0bW9ycGhUYXJnZXRzWyBrZXkgXSA9IGF0dHJNYXAuZ2V0KCBhdHRyICk7XG5cblx0XHR9XG5cblx0fVxuXG59XG5cbi8qKlxuICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZXN0aW1hdGVCeXRlc1VzZWQoIGdlb21ldHJ5ICkge1xuXG5cdC8vIFJldHVybiB0aGUgZXN0aW1hdGVkIG1lbW9yeSB1c2VkIGJ5IHRoaXMgZ2VvbWV0cnkgaW4gYnl0ZXNcblx0Ly8gQ2FsY3VsYXRlIHVzaW5nIGl0ZW1TaXplLCBjb3VudCwgYW5kIEJZVEVTX1BFUl9FTEVNRU5UIHRvIGFjY291bnRcblx0Ly8gZm9yIEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlcy5cblx0bGV0IG1lbSA9IDA7XG5cdGZvciAoIGNvbnN0IG5hbWUgaW4gZ2VvbWV0cnkuYXR0cmlidXRlcyApIHtcblxuXHRcdGNvbnN0IGF0dHIgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoIG5hbWUgKTtcblx0XHRtZW0gKz0gYXR0ci5jb3VudCAqIGF0dHIuaXRlbVNpemUgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5UO1xuXG5cdH1cblxuXHRjb25zdCBpbmRpY2VzID0gZ2VvbWV0cnkuZ2V0SW5kZXgoKTtcblx0bWVtICs9IGluZGljZXMgPyBpbmRpY2VzLmNvdW50ICogaW5kaWNlcy5pdGVtU2l6ZSAqIGluZGljZXMuYXJyYXkuQllURVNfUEVSX0VMRU1FTlQgOiAwO1xuXHRyZXR1cm4gbWVtO1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7bnVtYmVyfSB0b2xlcmFuY2VcbiAqIEByZXR1cm4ge0J1ZmZlckdlb21ldHJ5fVxuICovXG5mdW5jdGlvbiBtZXJnZVZlcnRpY2VzKCBnZW9tZXRyeSwgdG9sZXJhbmNlID0gMWUtNCApIHtcblxuXHR0b2xlcmFuY2UgPSBNYXRoLm1heCggdG9sZXJhbmNlLCBOdW1iZXIuRVBTSUxPTiApO1xuXG5cdC8vIEdlbmVyYXRlIGFuIGluZGV4IGJ1ZmZlciBpZiB0aGUgZ2VvbWV0cnkgZG9lc24ndCBoYXZlIG9uZSwgb3Igb3B0aW1pemUgaXRcblx0Ly8gaWYgaXQncyBhbHJlYWR5IGF2YWlsYWJsZS5cblx0Y29uc3QgaGFzaFRvSW5kZXggPSB7fTtcblx0Y29uc3QgaW5kaWNlcyA9IGdlb21ldHJ5LmdldEluZGV4KCk7XG5cdGNvbnN0IHBvc2l0aW9ucyA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSggJ3Bvc2l0aW9uJyApO1xuXHRjb25zdCB2ZXJ0ZXhDb3VudCA9IGluZGljZXMgPyBpbmRpY2VzLmNvdW50IDogcG9zaXRpb25zLmNvdW50O1xuXG5cdC8vIG5leHQgdmFsdWUgZm9yIHRyaWFuZ2xlIGluZGljZXNcblx0bGV0IG5leHRJbmRleCA9IDA7XG5cblx0Ly8gYXR0cmlidXRlcyBhbmQgbmV3IGF0dHJpYnV0ZSBhcnJheXNcblx0Y29uc3QgYXR0cmlidXRlTmFtZXMgPSBPYmplY3Qua2V5cyggZ2VvbWV0cnkuYXR0cmlidXRlcyApO1xuXHRjb25zdCB0bXBBdHRyaWJ1dGVzID0ge307XG5cdGNvbnN0IHRtcE1vcnBoQXR0cmlidXRlcyA9IHt9O1xuXHRjb25zdCBuZXdJbmRpY2VzID0gW107XG5cdGNvbnN0IGdldHRlcnMgPSBbICdnZXRYJywgJ2dldFknLCAnZ2V0WicsICdnZXRXJyBdO1xuXHRjb25zdCBzZXR0ZXJzID0gWyAnc2V0WCcsICdzZXRZJywgJ3NldFonLCAnc2V0VycgXTtcblxuXHQvLyBJbml0aWFsaXplIHRoZSBhcnJheXMsIGFsbG9jYXRpbmcgc3BhY2UgY29uc2VydmF0aXZlbHkuIEV4dHJhXG5cdC8vIHNwYWNlIHdpbGwgYmUgdHJpbW1lZCBpbiB0aGUgbGFzdCBzdGVwLlxuXHRmb3IgKCBsZXQgaSA9IDAsIGwgPSBhdHRyaWJ1dGVOYW1lcy5sZW5ndGg7IGkgPCBsOyBpICsrICkge1xuXG5cdFx0Y29uc3QgbmFtZSA9IGF0dHJpYnV0ZU5hbWVzWyBpIF07XG5cdFx0Y29uc3QgYXR0ciA9IGdlb21ldHJ5LmF0dHJpYnV0ZXNbIG5hbWUgXTtcblxuXHRcdHRtcEF0dHJpYnV0ZXNbIG5hbWUgXSA9IG5ldyBhdHRyLmNvbnN0cnVjdG9yKFxuXHRcdFx0bmV3IGF0dHIuYXJyYXkuY29uc3RydWN0b3IoIGF0dHIuY291bnQgKiBhdHRyLml0ZW1TaXplICksXG5cdFx0XHRhdHRyLml0ZW1TaXplLFxuXHRcdFx0YXR0ci5ub3JtYWxpemVkXG5cdFx0KTtcblxuXHRcdGNvbnN0IG1vcnBoQXR0cmlidXRlcyA9IGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlc1sgbmFtZSBdO1xuXHRcdGlmICggbW9ycGhBdHRyaWJ1dGVzICkge1xuXG5cdFx0XHRpZiAoICEgdG1wTW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF0gKSB0bXBNb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXSA9IFtdO1xuXHRcdFx0bW9ycGhBdHRyaWJ1dGVzLmZvckVhY2goICggbW9ycGhBdHRyLCBpICkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGFycmF5ID0gbmV3IG1vcnBoQXR0ci5hcnJheS5jb25zdHJ1Y3RvciggbW9ycGhBdHRyLmNvdW50ICogbW9ycGhBdHRyLml0ZW1TaXplICk7XG5cdFx0XHRcdHRtcE1vcnBoQXR0cmlidXRlc1sgbmFtZSBdWyBpIF0gPSBuZXcgbW9ycGhBdHRyLmNvbnN0cnVjdG9yKCBhcnJheSwgbW9ycGhBdHRyLml0ZW1TaXplLCBtb3JwaEF0dHIubm9ybWFsaXplZCApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vIGNvbnZlcnQgdGhlIGVycm9yIHRvbGVyYW5jZSB0byBhbiBhbW91bnQgb2YgZGVjaW1hbCBwbGFjZXMgdG8gdHJ1bmNhdGUgdG9cblx0Y29uc3QgaGFsZlRvbGVyYW5jZSA9IHRvbGVyYW5jZSAqIDAuNTtcblx0Y29uc3QgZXhwb25lbnQgPSBNYXRoLmxvZzEwKCAxIC8gdG9sZXJhbmNlICk7XG5cdGNvbnN0IGhhc2hNdWx0aXBsaWVyID0gTWF0aC5wb3coIDEwLCBleHBvbmVudCApO1xuXHRjb25zdCBoYXNoQWRkaXRpdmUgPSBoYWxmVG9sZXJhbmNlICogaGFzaE11bHRpcGxpZXI7XG5cdGZvciAoIGxldCBpID0gMDsgaSA8IHZlcnRleENvdW50OyBpICsrICkge1xuXG5cdFx0Y29uc3QgaW5kZXggPSBpbmRpY2VzID8gaW5kaWNlcy5nZXRYKCBpICkgOiBpO1xuXG5cdFx0Ly8gR2VuZXJhdGUgYSBoYXNoIGZvciB0aGUgdmVydGV4IGF0dHJpYnV0ZXMgYXQgdGhlIGN1cnJlbnQgaW5kZXggJ2knXG5cdFx0bGV0IGhhc2ggPSAnJztcblx0XHRmb3IgKCBsZXQgaiA9IDAsIGwgPSBhdHRyaWJ1dGVOYW1lcy5sZW5ndGg7IGogPCBsOyBqICsrICkge1xuXG5cdFx0XHRjb25zdCBuYW1lID0gYXR0cmlidXRlTmFtZXNbIGogXTtcblx0XHRcdGNvbnN0IGF0dHJpYnV0ZSA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSggbmFtZSApO1xuXHRcdFx0Y29uc3QgaXRlbVNpemUgPSBhdHRyaWJ1dGUuaXRlbVNpemU7XG5cblx0XHRcdGZvciAoIGxldCBrID0gMDsgayA8IGl0ZW1TaXplOyBrICsrICkge1xuXG5cdFx0XHRcdC8vIGRvdWJsZSB0aWxkZSB0cnVuY2F0ZXMgdGhlIGRlY2ltYWwgdmFsdWVcblx0XHRcdFx0aGFzaCArPSBgJHsgfiB+ICggYXR0cmlidXRlWyBnZXR0ZXJzWyBrIF0gXSggaW5kZXggKSAqIGhhc2hNdWx0aXBsaWVyICsgaGFzaEFkZGl0aXZlICkgfSxgO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHQvLyBBZGQgYW5vdGhlciByZWZlcmVuY2UgdG8gdGhlIHZlcnRleCBpZiBpdCdzIGFscmVhZHlcblx0XHQvLyB1c2VkIGJ5IGFub3RoZXIgaW5kZXhcblx0XHRpZiAoIGhhc2ggaW4gaGFzaFRvSW5kZXggKSB7XG5cblx0XHRcdG5ld0luZGljZXMucHVzaCggaGFzaFRvSW5kZXhbIGhhc2ggXSApO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gY29weSBkYXRhIHRvIHRoZSBuZXcgaW5kZXggaW4gdGhlIHRlbXBvcmFyeSBhdHRyaWJ1dGVzXG5cdFx0XHRmb3IgKCBsZXQgaiA9IDAsIGwgPSBhdHRyaWJ1dGVOYW1lcy5sZW5ndGg7IGogPCBsOyBqICsrICkge1xuXG5cdFx0XHRcdGNvbnN0IG5hbWUgPSBhdHRyaWJ1dGVOYW1lc1sgaiBdO1xuXHRcdFx0XHRjb25zdCBhdHRyaWJ1dGUgPSBnZW9tZXRyeS5nZXRBdHRyaWJ1dGUoIG5hbWUgKTtcblx0XHRcdFx0Y29uc3QgbW9ycGhBdHRyaWJ1dGVzID0gZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF07XG5cdFx0XHRcdGNvbnN0IGl0ZW1TaXplID0gYXR0cmlidXRlLml0ZW1TaXplO1xuXHRcdFx0XHRjb25zdCBuZXdBcnJheSA9IHRtcEF0dHJpYnV0ZXNbIG5hbWUgXTtcblx0XHRcdFx0Y29uc3QgbmV3TW9ycGhBcnJheXMgPSB0bXBNb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXTtcblxuXHRcdFx0XHRmb3IgKCBsZXQgayA9IDA7IGsgPCBpdGVtU2l6ZTsgayArKyApIHtcblxuXHRcdFx0XHRcdGNvbnN0IGdldHRlckZ1bmMgPSBnZXR0ZXJzWyBrIF07XG5cdFx0XHRcdFx0Y29uc3Qgc2V0dGVyRnVuYyA9IHNldHRlcnNbIGsgXTtcblx0XHRcdFx0XHRuZXdBcnJheVsgc2V0dGVyRnVuYyBdKCBuZXh0SW5kZXgsIGF0dHJpYnV0ZVsgZ2V0dGVyRnVuYyBdKCBpbmRleCApICk7XG5cblx0XHRcdFx0XHRpZiAoIG1vcnBoQXR0cmlidXRlcyApIHtcblxuXHRcdFx0XHRcdFx0Zm9yICggbGV0IG0gPSAwLCBtbCA9IG1vcnBoQXR0cmlidXRlcy5sZW5ndGg7IG0gPCBtbDsgbSArKyApIHtcblxuXHRcdFx0XHRcdFx0XHRuZXdNb3JwaEFycmF5c1sgbSBdWyBzZXR0ZXJGdW5jIF0oIG5leHRJbmRleCwgbW9ycGhBdHRyaWJ1dGVzWyBtIF1bIGdldHRlckZ1bmMgXSggaW5kZXggKSApO1xuXG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdGhhc2hUb0luZGV4WyBoYXNoIF0gPSBuZXh0SW5kZXg7XG5cdFx0XHRuZXdJbmRpY2VzLnB1c2goIG5leHRJbmRleCApO1xuXHRcdFx0bmV4dEluZGV4ICsrO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvLyBnZW5lcmF0ZSByZXN1bHQgQnVmZmVyR2VvbWV0cnlcblx0Y29uc3QgcmVzdWx0ID0gZ2VvbWV0cnkuY2xvbmUoKTtcblx0Zm9yICggY29uc3QgbmFtZSBpbiBnZW9tZXRyeS5hdHRyaWJ1dGVzICkge1xuXG5cdFx0Y29uc3QgdG1wQXR0cmlidXRlID0gdG1wQXR0cmlidXRlc1sgbmFtZSBdO1xuXG5cdFx0cmVzdWx0LnNldEF0dHJpYnV0ZSggbmFtZSwgbmV3IHRtcEF0dHJpYnV0ZS5jb25zdHJ1Y3Rvcihcblx0XHRcdHRtcEF0dHJpYnV0ZS5hcnJheS5zbGljZSggMCwgbmV4dEluZGV4ICogdG1wQXR0cmlidXRlLml0ZW1TaXplICksXG5cdFx0XHR0bXBBdHRyaWJ1dGUuaXRlbVNpemUsXG5cdFx0XHR0bXBBdHRyaWJ1dGUubm9ybWFsaXplZCxcblx0XHQpICk7XG5cblx0XHRpZiAoICEgKCBuYW1lIGluIHRtcE1vcnBoQXR0cmlidXRlcyApICkgY29udGludWU7XG5cblx0XHRmb3IgKCBsZXQgaiA9IDA7IGogPCB0bXBNb3JwaEF0dHJpYnV0ZXNbIG5hbWUgXS5sZW5ndGg7IGogKysgKSB7XG5cblx0XHRcdGNvbnN0IHRtcE1vcnBoQXR0cmlidXRlID0gdG1wTW9ycGhBdHRyaWJ1dGVzWyBuYW1lIF1bIGogXTtcblxuXHRcdFx0cmVzdWx0Lm1vcnBoQXR0cmlidXRlc1sgbmFtZSBdWyBqIF0gPSBuZXcgdG1wTW9ycGhBdHRyaWJ1dGUuY29uc3RydWN0b3IoXG5cdFx0XHRcdHRtcE1vcnBoQXR0cmlidXRlLmFycmF5LnNsaWNlKCAwLCBuZXh0SW5kZXggKiB0bXBNb3JwaEF0dHJpYnV0ZS5pdGVtU2l6ZSApLFxuXHRcdFx0XHR0bXBNb3JwaEF0dHJpYnV0ZS5pdGVtU2l6ZSxcblx0XHRcdFx0dG1wTW9ycGhBdHRyaWJ1dGUubm9ybWFsaXplZCxcblx0XHRcdCk7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vIGluZGljZXNcblxuXHRyZXN1bHQuc2V0SW5kZXgoIG5ld0luZGljZXMgKTtcblxuXHRyZXR1cm4gcmVzdWx0O1xuXG59XG5cbi8qKlxuICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcbiAqIEBwYXJhbSB7bnVtYmVyfSBkcmF3TW9kZVxuICogQHJldHVybiB7QnVmZmVyR2VvbWV0cnl9XG4gKi9cbmZ1bmN0aW9uIHRvVHJpYW5nbGVzRHJhd01vZGUoIGdlb21ldHJ5LCBkcmF3TW9kZSApIHtcblxuXHRpZiAoIGRyYXdNb2RlID09PSBUcmlhbmdsZXNEcmF3TW9kZSApIHtcblxuXHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHMudG9UcmlhbmdsZXNEcmF3TW9kZSgpOiBHZW9tZXRyeSBhbHJlYWR5IGRlZmluZWQgYXMgdHJpYW5nbGVzLicgKTtcblx0XHRyZXR1cm4gZ2VvbWV0cnk7XG5cblx0fVxuXG5cdGlmICggZHJhd01vZGUgPT09IFRyaWFuZ2xlRmFuRHJhd01vZGUgfHwgZHJhd01vZGUgPT09IFRyaWFuZ2xlU3RyaXBEcmF3TW9kZSApIHtcblxuXHRcdGxldCBpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XG5cblx0XHQvLyBnZW5lcmF0ZSBpbmRleCBpZiBub3QgcHJlc2VudFxuXG5cdFx0aWYgKCBpbmRleCA9PT0gbnVsbCApIHtcblxuXHRcdFx0Y29uc3QgaW5kaWNlcyA9IFtdO1xuXG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSggJ3Bvc2l0aW9uJyApO1xuXG5cdFx0XHRpZiAoIHBvc2l0aW9uICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgcG9zaXRpb24uY291bnQ7IGkgKysgKSB7XG5cblx0XHRcdFx0XHRpbmRpY2VzLnB1c2goIGkgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Z2VvbWV0cnkuc2V0SW5kZXgoIGluZGljZXMgKTtcblx0XHRcdFx0aW5kZXggPSBnZW9tZXRyeS5nZXRJbmRleCgpO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5kZWZpbmVkIHBvc2l0aW9uIGF0dHJpYnV0ZS4gUHJvY2Vzc2luZyBub3QgcG9zc2libGUuJyApO1xuXHRcdFx0XHRyZXR1cm4gZ2VvbWV0cnk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vXG5cblx0XHRjb25zdCBudW1iZXJPZlRyaWFuZ2xlcyA9IGluZGV4LmNvdW50IC0gMjtcblx0XHRjb25zdCBuZXdJbmRpY2VzID0gW107XG5cblx0XHRpZiAoIGRyYXdNb2RlID09PSBUcmlhbmdsZUZhbkRyYXdNb2RlICkge1xuXG5cdFx0XHQvLyBnbC5UUklBTkdMRV9GQU5cblxuXHRcdFx0Zm9yICggbGV0IGkgPSAxOyBpIDw9IG51bWJlck9mVHJpYW5nbGVzOyBpICsrICkge1xuXG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggMCApICk7XG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSApICk7XG5cdFx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaSArIDEgKSApO1xuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBnbC5UUklBTkdMRV9TVFJJUFxuXG5cdFx0XHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBudW1iZXJPZlRyaWFuZ2xlczsgaSArKyApIHtcblxuXHRcdFx0XHRpZiAoIGkgJSAyID09PSAwICkge1xuXG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcblx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAxICkgKTtcblx0XHRcdFx0XHRuZXdJbmRpY2VzLnB1c2goIGluZGV4LmdldFgoIGkgKyAyICkgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMiApICk7XG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICsgMSApICk7XG5cdFx0XHRcdFx0bmV3SW5kaWNlcy5wdXNoKCBpbmRleC5nZXRYKCBpICkgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdGlmICggKCBuZXdJbmRpY2VzLmxlbmd0aCAvIDMgKSAhPT0gbnVtYmVyT2ZUcmlhbmdsZXMgKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5hYmxlIHRvIGdlbmVyYXRlIGNvcnJlY3QgYW1vdW50IG9mIHRyaWFuZ2xlcy4nICk7XG5cblx0XHR9XG5cblx0XHQvLyBidWlsZCBmaW5hbCBnZW9tZXRyeVxuXG5cdFx0Y29uc3QgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeS5jbG9uZSgpO1xuXHRcdG5ld0dlb21ldHJ5LnNldEluZGV4KCBuZXdJbmRpY2VzICk7XG5cdFx0bmV3R2VvbWV0cnkuY2xlYXJHcm91cHMoKTtcblxuXHRcdHJldHVybiBuZXdHZW9tZXRyeTtcblxuXHR9IGVsc2Uge1xuXG5cdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHMudG9UcmlhbmdsZXNEcmF3TW9kZSgpOiBVbmtub3duIGRyYXcgbW9kZTonLCBkcmF3TW9kZSApO1xuXHRcdHJldHVybiBnZW9tZXRyeTtcblxuXHR9XG5cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBtb3JwaGVkIGF0dHJpYnV0ZXMgb2YgYSBtb3JwaGVkL3NraW5uZWQgQnVmZmVyR2VvbWV0cnkuXG4gKiBIZWxwZnVsIGZvciBSYXl0cmFjaW5nIG9yIERlY2Fscy5cbiAqIEBwYXJhbSB7TWVzaCB8IExpbmUgfCBQb2ludHN9IG9iamVjdCBBbiBpbnN0YW5jZSBvZiBNZXNoLCBMaW5lIG9yIFBvaW50cy5cbiAqIEByZXR1cm4ge09iamVjdH0gQW4gT2JqZWN0IHdpdGggb3JpZ2luYWwgcG9zaXRpb24vbm9ybWFsIGF0dHJpYnV0ZXMgYW5kIG1vcnBoZWQgb25lcy5cbiAqL1xuZnVuY3Rpb24gY29tcHV0ZU1vcnBoZWRBdHRyaWJ1dGVzKCBvYmplY3QgKSB7XG5cblx0Y29uc3QgX3ZBID0gbmV3IFZlY3RvcjMoKTtcblx0Y29uc3QgX3ZCID0gbmV3IFZlY3RvcjMoKTtcblx0Y29uc3QgX3ZDID0gbmV3IFZlY3RvcjMoKTtcblxuXHRjb25zdCBfdGVtcEEgPSBuZXcgVmVjdG9yMygpO1xuXHRjb25zdCBfdGVtcEIgPSBuZXcgVmVjdG9yMygpO1xuXHRjb25zdCBfdGVtcEMgPSBuZXcgVmVjdG9yMygpO1xuXG5cdGNvbnN0IF9tb3JwaEEgPSBuZXcgVmVjdG9yMygpO1xuXHRjb25zdCBfbW9ycGhCID0gbmV3IFZlY3RvcjMoKTtcblx0Y29uc3QgX21vcnBoQyA9IG5ldyBWZWN0b3IzKCk7XG5cblx0ZnVuY3Rpb24gX2NhbGN1bGF0ZU1vcnBoZWRBdHRyaWJ1dGVEYXRhKFxuXHRcdG9iamVjdCxcblx0XHRhdHRyaWJ1dGUsXG5cdFx0bW9ycGhBdHRyaWJ1dGUsXG5cdFx0bW9ycGhUYXJnZXRzUmVsYXRpdmUsXG5cdFx0YSxcblx0XHRiLFxuXHRcdGMsXG5cdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVxuXHQpIHtcblxuXHRcdF92QS5mcm9tQnVmZmVyQXR0cmlidXRlKCBhdHRyaWJ1dGUsIGEgKTtcblx0XHRfdkIuZnJvbUJ1ZmZlckF0dHJpYnV0ZSggYXR0cmlidXRlLCBiICk7XG5cdFx0X3ZDLmZyb21CdWZmZXJBdHRyaWJ1dGUoIGF0dHJpYnV0ZSwgYyApO1xuXG5cdFx0Y29uc3QgbW9ycGhJbmZsdWVuY2VzID0gb2JqZWN0Lm1vcnBoVGFyZ2V0SW5mbHVlbmNlcztcblxuXHRcdGlmICggbW9ycGhBdHRyaWJ1dGUgJiYgbW9ycGhJbmZsdWVuY2VzICkge1xuXG5cdFx0XHRfbW9ycGhBLnNldCggMCwgMCwgMCApO1xuXHRcdFx0X21vcnBoQi5zZXQoIDAsIDAsIDAgKTtcblx0XHRcdF9tb3JwaEMuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdGZvciAoIGxldCBpID0gMCwgaWwgPSBtb3JwaEF0dHJpYnV0ZS5sZW5ndGg7IGkgPCBpbDsgaSArKyApIHtcblxuXHRcdFx0XHRjb25zdCBpbmZsdWVuY2UgPSBtb3JwaEluZmx1ZW5jZXNbIGkgXTtcblx0XHRcdFx0Y29uc3QgbW9ycGggPSBtb3JwaEF0dHJpYnV0ZVsgaSBdO1xuXG5cdFx0XHRcdGlmICggaW5mbHVlbmNlID09PSAwICkgY29udGludWU7XG5cblx0XHRcdFx0X3RlbXBBLmZyb21CdWZmZXJBdHRyaWJ1dGUoIG1vcnBoLCBhICk7XG5cdFx0XHRcdF90ZW1wQi5mcm9tQnVmZmVyQXR0cmlidXRlKCBtb3JwaCwgYiApO1xuXHRcdFx0XHRfdGVtcEMuZnJvbUJ1ZmZlckF0dHJpYnV0ZSggbW9ycGgsIGMgKTtcblxuXHRcdFx0XHRpZiAoIG1vcnBoVGFyZ2V0c1JlbGF0aXZlICkge1xuXG5cdFx0XHRcdFx0X21vcnBoQS5hZGRTY2FsZWRWZWN0b3IoIF90ZW1wQSwgaW5mbHVlbmNlICk7XG5cdFx0XHRcdFx0X21vcnBoQi5hZGRTY2FsZWRWZWN0b3IoIF90ZW1wQiwgaW5mbHVlbmNlICk7XG5cdFx0XHRcdFx0X21vcnBoQy5hZGRTY2FsZWRWZWN0b3IoIF90ZW1wQywgaW5mbHVlbmNlICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdF9tb3JwaEEuYWRkU2NhbGVkVmVjdG9yKCBfdGVtcEEuc3ViKCBfdkEgKSwgaW5mbHVlbmNlICk7XG5cdFx0XHRcdFx0X21vcnBoQi5hZGRTY2FsZWRWZWN0b3IoIF90ZW1wQi5zdWIoIF92QiApLCBpbmZsdWVuY2UgKTtcblx0XHRcdFx0XHRfbW9ycGhDLmFkZFNjYWxlZFZlY3RvciggX3RlbXBDLnN1YiggX3ZDICksIGluZmx1ZW5jZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0XHRfdkEuYWRkKCBfbW9ycGhBICk7XG5cdFx0XHRfdkIuYWRkKCBfbW9ycGhCICk7XG5cdFx0XHRfdkMuYWRkKCBfbW9ycGhDICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIG9iamVjdC5pc1NraW5uZWRNZXNoICkge1xuXG5cdFx0XHRvYmplY3QuYXBwbHlCb25lVHJhbnNmb3JtKCBhLCBfdkEgKTtcblx0XHRcdG9iamVjdC5hcHBseUJvbmVUcmFuc2Zvcm0oIGIsIF92QiApO1xuXHRcdFx0b2JqZWN0LmFwcGx5Qm9uZVRyYW5zZm9ybSggYywgX3ZDICk7XG5cblx0XHR9XG5cblx0XHRtb2RpZmllZEF0dHJpYnV0ZUFycmF5WyBhICogMyArIDAgXSA9IF92QS54O1xuXHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlbIGEgKiAzICsgMSBdID0gX3ZBLnk7XG5cdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVsgYSAqIDMgKyAyIF0gPSBfdkEuejtcblx0XHRtb2RpZmllZEF0dHJpYnV0ZUFycmF5WyBiICogMyArIDAgXSA9IF92Qi54O1xuXHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlbIGIgKiAzICsgMSBdID0gX3ZCLnk7XG5cdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVsgYiAqIDMgKyAyIF0gPSBfdkIuejtcblx0XHRtb2RpZmllZEF0dHJpYnV0ZUFycmF5WyBjICogMyArIDAgXSA9IF92Qy54O1xuXHRcdG1vZGlmaWVkQXR0cmlidXRlQXJyYXlbIGMgKiAzICsgMSBdID0gX3ZDLnk7XG5cdFx0bW9kaWZpZWRBdHRyaWJ1dGVBcnJheVsgYyAqIDMgKyAyIF0gPSBfdkMuejtcblxuXHR9XG5cblx0Y29uc3QgZ2VvbWV0cnkgPSBvYmplY3QuZ2VvbWV0cnk7XG5cdGNvbnN0IG1hdGVyaWFsID0gb2JqZWN0Lm1hdGVyaWFsO1xuXG5cdGxldCBhLCBiLCBjO1xuXHRjb25zdCBpbmRleCA9IGdlb21ldHJ5LmluZGV4O1xuXHRjb25zdCBwb3NpdGlvbkF0dHJpYnV0ZSA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb247XG5cdGNvbnN0IG1vcnBoUG9zaXRpb24gPSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMucG9zaXRpb247XG5cdGNvbnN0IG1vcnBoVGFyZ2V0c1JlbGF0aXZlID0gZ2VvbWV0cnkubW9ycGhUYXJnZXRzUmVsYXRpdmU7XG5cdGNvbnN0IG5vcm1hbEF0dHJpYnV0ZSA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMubm9ybWFsO1xuXHRjb25zdCBtb3JwaE5vcm1hbCA9IGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcy5wb3NpdGlvbjtcblxuXHRjb25zdCBncm91cHMgPSBnZW9tZXRyeS5ncm91cHM7XG5cdGNvbnN0IGRyYXdSYW5nZSA9IGdlb21ldHJ5LmRyYXdSYW5nZTtcblx0bGV0IGksIGosIGlsLCBqbDtcblx0bGV0IGdyb3VwO1xuXHRsZXQgc3RhcnQsIGVuZDtcblxuXHRjb25zdCBtb2RpZmllZFBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSggcG9zaXRpb25BdHRyaWJ1dGUuY291bnQgKiBwb3NpdGlvbkF0dHJpYnV0ZS5pdGVtU2l6ZSApO1xuXHRjb25zdCBtb2RpZmllZE5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkoIG5vcm1hbEF0dHJpYnV0ZS5jb3VudCAqIG5vcm1hbEF0dHJpYnV0ZS5pdGVtU2l6ZSApO1xuXG5cdGlmICggaW5kZXggIT09IG51bGwgKSB7XG5cblx0XHQvLyBpbmRleGVkIGJ1ZmZlciBnZW9tZXRyeVxuXG5cdFx0aWYgKCBBcnJheS5pc0FycmF5KCBtYXRlcmlhbCApICkge1xuXG5cdFx0XHRmb3IgKCBpID0gMCwgaWwgPSBncm91cHMubGVuZ3RoOyBpIDwgaWw7IGkgKysgKSB7XG5cblx0XHRcdFx0Z3JvdXAgPSBncm91cHNbIGkgXTtcblxuXHRcdFx0XHRzdGFydCA9IE1hdGgubWF4KCBncm91cC5zdGFydCwgZHJhd1JhbmdlLnN0YXJ0ICk7XG5cdFx0XHRcdGVuZCA9IE1hdGgubWluKCAoIGdyb3VwLnN0YXJ0ICsgZ3JvdXAuY291bnQgKSwgKCBkcmF3UmFuZ2Uuc3RhcnQgKyBkcmF3UmFuZ2UuY291bnQgKSApO1xuXG5cdFx0XHRcdGZvciAoIGogPSBzdGFydCwgamwgPSBlbmQ7IGogPCBqbDsgaiArPSAzICkge1xuXG5cdFx0XHRcdFx0YSA9IGluZGV4LmdldFgoIGogKTtcblx0XHRcdFx0XHRiID0gaW5kZXguZ2V0WCggaiArIDEgKTtcblx0XHRcdFx0XHRjID0gaW5kZXguZ2V0WCggaiArIDIgKTtcblxuXHRcdFx0XHRcdF9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YShcblx0XHRcdFx0XHRcdG9iamVjdCxcblx0XHRcdFx0XHRcdHBvc2l0aW9uQXR0cmlidXRlLFxuXHRcdFx0XHRcdFx0bW9ycGhQb3NpdGlvbixcblx0XHRcdFx0XHRcdG1vcnBoVGFyZ2V0c1JlbGF0aXZlLFxuXHRcdFx0XHRcdFx0YSwgYiwgYyxcblx0XHRcdFx0XHRcdG1vZGlmaWVkUG9zaXRpb25cblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0X2NhbGN1bGF0ZU1vcnBoZWRBdHRyaWJ1dGVEYXRhKFxuXHRcdFx0XHRcdFx0b2JqZWN0LFxuXHRcdFx0XHRcdFx0bm9ybWFsQXR0cmlidXRlLFxuXHRcdFx0XHRcdFx0bW9ycGhOb3JtYWwsXG5cdFx0XHRcdFx0XHRtb3JwaFRhcmdldHNSZWxhdGl2ZSxcblx0XHRcdFx0XHRcdGEsIGIsIGMsXG5cdFx0XHRcdFx0XHRtb2RpZmllZE5vcm1hbFxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRzdGFydCA9IE1hdGgubWF4KCAwLCBkcmF3UmFuZ2Uuc3RhcnQgKTtcblx0XHRcdGVuZCA9IE1hdGgubWluKCBpbmRleC5jb3VudCwgKCBkcmF3UmFuZ2Uuc3RhcnQgKyBkcmF3UmFuZ2UuY291bnQgKSApO1xuXG5cdFx0XHRmb3IgKCBpID0gc3RhcnQsIGlsID0gZW5kOyBpIDwgaWw7IGkgKz0gMyApIHtcblxuXHRcdFx0XHRhID0gaW5kZXguZ2V0WCggaSApO1xuXHRcdFx0XHRiID0gaW5kZXguZ2V0WCggaSArIDEgKTtcblx0XHRcdFx0YyA9IGluZGV4LmdldFgoIGkgKyAyICk7XG5cblx0XHRcdFx0X2NhbGN1bGF0ZU1vcnBoZWRBdHRyaWJ1dGVEYXRhKFxuXHRcdFx0XHRcdG9iamVjdCxcblx0XHRcdFx0XHRwb3NpdGlvbkF0dHJpYnV0ZSxcblx0XHRcdFx0XHRtb3JwaFBvc2l0aW9uLFxuXHRcdFx0XHRcdG1vcnBoVGFyZ2V0c1JlbGF0aXZlLFxuXHRcdFx0XHRcdGEsIGIsIGMsXG5cdFx0XHRcdFx0bW9kaWZpZWRQb3NpdGlvblxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdF9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YShcblx0XHRcdFx0XHRvYmplY3QsXG5cdFx0XHRcdFx0bm9ybWFsQXR0cmlidXRlLFxuXHRcdFx0XHRcdG1vcnBoTm9ybWFsLFxuXHRcdFx0XHRcdG1vcnBoVGFyZ2V0c1JlbGF0aXZlLFxuXHRcdFx0XHRcdGEsIGIsIGMsXG5cdFx0XHRcdFx0bW9kaWZpZWROb3JtYWxcblx0XHRcdFx0KTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH0gZWxzZSB7XG5cblx0XHQvLyBub24taW5kZXhlZCBidWZmZXIgZ2VvbWV0cnlcblxuXHRcdGlmICggQXJyYXkuaXNBcnJheSggbWF0ZXJpYWwgKSApIHtcblxuXHRcdFx0Zm9yICggaSA9IDAsIGlsID0gZ3JvdXBzLmxlbmd0aDsgaSA8IGlsOyBpICsrICkge1xuXG5cdFx0XHRcdGdyb3VwID0gZ3JvdXBzWyBpIF07XG5cblx0XHRcdFx0c3RhcnQgPSBNYXRoLm1heCggZ3JvdXAuc3RhcnQsIGRyYXdSYW5nZS5zdGFydCApO1xuXHRcdFx0XHRlbmQgPSBNYXRoLm1pbiggKCBncm91cC5zdGFydCArIGdyb3VwLmNvdW50ICksICggZHJhd1JhbmdlLnN0YXJ0ICsgZHJhd1JhbmdlLmNvdW50ICkgKTtcblxuXHRcdFx0XHRmb3IgKCBqID0gc3RhcnQsIGpsID0gZW5kOyBqIDwgamw7IGogKz0gMyApIHtcblxuXHRcdFx0XHRcdGEgPSBqO1xuXHRcdFx0XHRcdGIgPSBqICsgMTtcblx0XHRcdFx0XHRjID0gaiArIDI7XG5cblx0XHRcdFx0XHRfY2FsY3VsYXRlTW9ycGhlZEF0dHJpYnV0ZURhdGEoXG5cdFx0XHRcdFx0XHRvYmplY3QsXG5cdFx0XHRcdFx0XHRwb3NpdGlvbkF0dHJpYnV0ZSxcblx0XHRcdFx0XHRcdG1vcnBoUG9zaXRpb24sXG5cdFx0XHRcdFx0XHRtb3JwaFRhcmdldHNSZWxhdGl2ZSxcblx0XHRcdFx0XHRcdGEsIGIsIGMsXG5cdFx0XHRcdFx0XHRtb2RpZmllZFBvc2l0aW9uXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdF9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YShcblx0XHRcdFx0XHRcdG9iamVjdCxcblx0XHRcdFx0XHRcdG5vcm1hbEF0dHJpYnV0ZSxcblx0XHRcdFx0XHRcdG1vcnBoTm9ybWFsLFxuXHRcdFx0XHRcdFx0bW9ycGhUYXJnZXRzUmVsYXRpdmUsXG5cdFx0XHRcdFx0XHRhLCBiLCBjLFxuXHRcdFx0XHRcdFx0bW9kaWZpZWROb3JtYWxcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0c3RhcnQgPSBNYXRoLm1heCggMCwgZHJhd1JhbmdlLnN0YXJ0ICk7XG5cdFx0XHRlbmQgPSBNYXRoLm1pbiggcG9zaXRpb25BdHRyaWJ1dGUuY291bnQsICggZHJhd1JhbmdlLnN0YXJ0ICsgZHJhd1JhbmdlLmNvdW50ICkgKTtcblxuXHRcdFx0Zm9yICggaSA9IHN0YXJ0LCBpbCA9IGVuZDsgaSA8IGlsOyBpICs9IDMgKSB7XG5cblx0XHRcdFx0YSA9IGk7XG5cdFx0XHRcdGIgPSBpICsgMTtcblx0XHRcdFx0YyA9IGkgKyAyO1xuXG5cdFx0XHRcdF9jYWxjdWxhdGVNb3JwaGVkQXR0cmlidXRlRGF0YShcblx0XHRcdFx0XHRvYmplY3QsXG5cdFx0XHRcdFx0cG9zaXRpb25BdHRyaWJ1dGUsXG5cdFx0XHRcdFx0bW9ycGhQb3NpdGlvbixcblx0XHRcdFx0XHRtb3JwaFRhcmdldHNSZWxhdGl2ZSxcblx0XHRcdFx0XHRhLCBiLCBjLFxuXHRcdFx0XHRcdG1vZGlmaWVkUG9zaXRpb25cblx0XHRcdFx0KTtcblxuXHRcdFx0XHRfY2FsY3VsYXRlTW9ycGhlZEF0dHJpYnV0ZURhdGEoXG5cdFx0XHRcdFx0b2JqZWN0LFxuXHRcdFx0XHRcdG5vcm1hbEF0dHJpYnV0ZSxcblx0XHRcdFx0XHRtb3JwaE5vcm1hbCxcblx0XHRcdFx0XHRtb3JwaFRhcmdldHNSZWxhdGl2ZSxcblx0XHRcdFx0XHRhLCBiLCBjLFxuXHRcdFx0XHRcdG1vZGlmaWVkTm9ybWFsXG5cdFx0XHRcdCk7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0Y29uc3QgbW9ycGhlZFBvc2l0aW9uQXR0cmlidXRlID0gbmV3IEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoIG1vZGlmaWVkUG9zaXRpb24sIDMgKTtcblx0Y29uc3QgbW9ycGhlZE5vcm1hbEF0dHJpYnV0ZSA9IG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKCBtb2RpZmllZE5vcm1hbCwgMyApO1xuXG5cdHJldHVybiB7XG5cblx0XHRwb3NpdGlvbkF0dHJpYnV0ZTogcG9zaXRpb25BdHRyaWJ1dGUsXG5cdFx0bm9ybWFsQXR0cmlidXRlOiBub3JtYWxBdHRyaWJ1dGUsXG5cdFx0bW9ycGhlZFBvc2l0aW9uQXR0cmlidXRlOiBtb3JwaGVkUG9zaXRpb25BdHRyaWJ1dGUsXG5cdFx0bW9ycGhlZE5vcm1hbEF0dHJpYnV0ZTogbW9ycGhlZE5vcm1hbEF0dHJpYnV0ZVxuXG5cdH07XG5cbn1cblxuZnVuY3Rpb24gbWVyZ2VHcm91cHMoIGdlb21ldHJ5ICkge1xuXG5cdGlmICggZ2VvbWV0cnkuZ3JvdXBzLmxlbmd0aCA9PT0gMCApIHtcblxuXHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHcm91cHMoKTogTm8gZ3JvdXBzIGFyZSBkZWZpbmVkLiBOb3RoaW5nIHRvIG1lcmdlLicgKTtcblx0XHRyZXR1cm4gZ2VvbWV0cnk7XG5cblx0fVxuXG5cdGxldCBncm91cHMgPSBnZW9tZXRyeS5ncm91cHM7XG5cblx0Ly8gc29ydCBncm91cHMgYnkgbWF0ZXJpYWwgaW5kZXhcblxuXHRncm91cHMgPSBncm91cHMuc29ydCggKCBhLCBiICkgPT4ge1xuXG5cdFx0aWYgKCBhLm1hdGVyaWFsSW5kZXggIT09IGIubWF0ZXJpYWxJbmRleCApIHJldHVybiBhLm1hdGVyaWFsSW5kZXggLSBiLm1hdGVyaWFsSW5kZXg7XG5cblx0XHRyZXR1cm4gYS5zdGFydCAtIGIuc3RhcnQ7XG5cblx0fSApO1xuXG5cdC8vIGNyZWF0ZSBpbmRleCBmb3Igbm9uLWluZGV4ZWQgZ2VvbWV0cmllc1xuXG5cdGlmICggZ2VvbWV0cnkuZ2V0SW5kZXgoKSA9PT0gbnVsbCApIHtcblxuXHRcdGNvbnN0IHBvc2l0aW9uQXR0cmlidXRlID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCAncG9zaXRpb24nICk7XG5cdFx0Y29uc3QgaW5kaWNlcyA9IFtdO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgcG9zaXRpb25BdHRyaWJ1dGUuY291bnQ7IGkgKz0gMyApIHtcblxuXHRcdFx0aW5kaWNlcy5wdXNoKCBpLCBpICsgMSwgaSArIDIgKTtcblxuXHRcdH1cblxuXHRcdGdlb21ldHJ5LnNldEluZGV4KCBpbmRpY2VzICk7XG5cblx0fVxuXG5cdC8vIHNvcnQgaW5kZXhcblxuXHRjb25zdCBpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XG5cblx0Y29uc3QgbmV3SW5kaWNlcyA9IFtdO1xuXG5cdGZvciAoIGxldCBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRjb25zdCBncm91cCA9IGdyb3Vwc1sgaSBdO1xuXG5cdFx0Y29uc3QgZ3JvdXBTdGFydCA9IGdyb3VwLnN0YXJ0O1xuXHRcdGNvbnN0IGdyb3VwTGVuZ3RoID0gZ3JvdXBTdGFydCArIGdyb3VwLmNvdW50O1xuXG5cdFx0Zm9yICggbGV0IGogPSBncm91cFN0YXJ0OyBqIDwgZ3JvdXBMZW5ndGg7IGogKysgKSB7XG5cblx0XHRcdG5ld0luZGljZXMucHVzaCggaW5kZXguZ2V0WCggaiApICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGdlb21ldHJ5LmRpc3Bvc2UoKTsgLy8gUmVxdWlyZWQgdG8gZm9yY2UgYnVmZmVyIHJlY3JlYXRpb25cblx0Z2VvbWV0cnkuc2V0SW5kZXgoIG5ld0luZGljZXMgKTtcblxuXHQvLyB1cGRhdGUgZ3JvdXBzIGluZGljZXNcblxuXHRsZXQgc3RhcnQgPSAwO1xuXG5cdGZvciAoIGxldCBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkgKysgKSB7XG5cblx0XHRjb25zdCBncm91cCA9IGdyb3Vwc1sgaSBdO1xuXG5cdFx0Z3JvdXAuc3RhcnQgPSBzdGFydDtcblx0XHRzdGFydCArPSBncm91cC5jb3VudDtcblxuXHR9XG5cblx0Ly8gbWVyZ2UgZ3JvdXBzXG5cblx0bGV0IGN1cnJlbnRHcm91cCA9IGdyb3Vwc1sgMCBdO1xuXG5cdGdlb21ldHJ5Lmdyb3VwcyA9IFsgY3VycmVudEdyb3VwIF07XG5cblx0Zm9yICggbGV0IGkgPSAxOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSArKyApIHtcblxuXHRcdGNvbnN0IGdyb3VwID0gZ3JvdXBzWyBpIF07XG5cblx0XHRpZiAoIGN1cnJlbnRHcm91cC5tYXRlcmlhbEluZGV4ID09PSBncm91cC5tYXRlcmlhbEluZGV4ICkge1xuXG5cdFx0XHRjdXJyZW50R3JvdXAuY291bnQgKz0gZ3JvdXAuY291bnQ7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjdXJyZW50R3JvdXAgPSBncm91cDtcblx0XHRcdGdlb21ldHJ5Lmdyb3Vwcy5wdXNoKCBjdXJyZW50R3JvdXAgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIGdlb21ldHJ5O1xuXG59XG5cblxuLyoqXG4gKiBNb2RpZmllcyB0aGUgc3VwcGxpZWQgZ2VvbWV0cnkgaWYgaXQgaXMgbm9uLWluZGV4ZWQsIG90aGVyd2lzZSBjcmVhdGVzIGEgbmV3LFxuICogbm9uLWluZGV4ZWQgZ2VvbWV0cnkuIFJldHVybnMgdGhlIGdlb21ldHJ5IHdpdGggc21vb3RoIG5vcm1hbHMgZXZlcnl3aGVyZSBleGNlcHRcbiAqIGZhY2VzIHRoYXQgbWVldCBhdCBhbiBhbmdsZSBncmVhdGVyIHRoYW4gdGhlIGNyZWFzZSBhbmdsZS5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlckdlb21ldHJ5fSBnZW9tZXRyeVxuICogQHBhcmFtIHtudW1iZXJ9IFtjcmVhc2VBbmdsZV1cbiAqIEByZXR1cm4ge0J1ZmZlckdlb21ldHJ5fVxuICovXG5mdW5jdGlvbiB0b0NyZWFzZWROb3JtYWxzKCBnZW9tZXRyeSwgY3JlYXNlQW5nbGUgPSBNYXRoLlBJIC8gMyAvKiA2MCBkZWdyZWVzICovICkge1xuXG5cdGNvbnN0IGNyZWFzZURvdCA9IE1hdGguY29zKCBjcmVhc2VBbmdsZSApO1xuXHRjb25zdCBoYXNoTXVsdGlwbGllciA9ICggMSArIDFlLTEwICkgKiAxZTI7XG5cblx0Ly8gcmV1c2FibGUgdmVjdG9yc1xuXHRjb25zdCB2ZXJ0cyA9IFsgbmV3IFZlY3RvcjMoKSwgbmV3IFZlY3RvcjMoKSwgbmV3IFZlY3RvcjMoKSBdO1xuXHRjb25zdCB0ZW1wVmVjMSA9IG5ldyBWZWN0b3IzKCk7XG5cdGNvbnN0IHRlbXBWZWMyID0gbmV3IFZlY3RvcjMoKTtcblx0Y29uc3QgdGVtcE5vcm0gPSBuZXcgVmVjdG9yMygpO1xuXHRjb25zdCB0ZW1wTm9ybTIgPSBuZXcgVmVjdG9yMygpO1xuXG5cdC8vIGhhc2hlcyBhIHZlY3RvclxuXHRmdW5jdGlvbiBoYXNoVmVydGV4KCB2ICkge1xuXG5cdFx0Y29uc3QgeCA9IH4gfiAoIHYueCAqIGhhc2hNdWx0aXBsaWVyICk7XG5cdFx0Y29uc3QgeSA9IH4gfiAoIHYueSAqIGhhc2hNdWx0aXBsaWVyICk7XG5cdFx0Y29uc3QgeiA9IH4gfiAoIHYueiAqIGhhc2hNdWx0aXBsaWVyICk7XG5cdFx0cmV0dXJuIGAke3h9LCR7eX0sJHt6fWA7XG5cblx0fVxuXG5cdC8vIEJ1ZmZlckdlb21ldHJ5LnRvTm9uSW5kZXhlZCgpIHdhcm5zIGlmIHRoZSBnZW9tZXRyeSBpcyBub24taW5kZXhlZFxuXHQvLyBhbmQgcmV0dXJucyB0aGUgb3JpZ2luYWwgZ2VvbWV0cnlcblx0Y29uc3QgcmVzdWx0R2VvbWV0cnkgPSBnZW9tZXRyeS5pbmRleCA/IGdlb21ldHJ5LnRvTm9uSW5kZXhlZCgpIDogZ2VvbWV0cnk7XG5cdGNvbnN0IHBvc0F0dHIgPSByZXN1bHRHZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uO1xuXHRjb25zdCB2ZXJ0ZXhNYXAgPSB7fTtcblxuXHQvLyBmaW5kIGFsbCB0aGUgbm9ybWFscyBzaGFyZWQgYnkgY29tbW9ubHkgbG9jYXRlZCB2ZXJ0aWNlc1xuXHRmb3IgKCBsZXQgaSA9IDAsIGwgPSBwb3NBdHRyLmNvdW50IC8gMzsgaSA8IGw7IGkgKysgKSB7XG5cblx0XHRjb25zdCBpMyA9IDMgKiBpO1xuXHRcdGNvbnN0IGEgPSB2ZXJ0c1sgMCBdLmZyb21CdWZmZXJBdHRyaWJ1dGUoIHBvc0F0dHIsIGkzICsgMCApO1xuXHRcdGNvbnN0IGIgPSB2ZXJ0c1sgMSBdLmZyb21CdWZmZXJBdHRyaWJ1dGUoIHBvc0F0dHIsIGkzICsgMSApO1xuXHRcdGNvbnN0IGMgPSB2ZXJ0c1sgMiBdLmZyb21CdWZmZXJBdHRyaWJ1dGUoIHBvc0F0dHIsIGkzICsgMiApO1xuXG5cdFx0dGVtcFZlYzEuc3ViVmVjdG9ycyggYywgYiApO1xuXHRcdHRlbXBWZWMyLnN1YlZlY3RvcnMoIGEsIGIgKTtcblxuXHRcdC8vIGFkZCB0aGUgbm9ybWFsIHRvIHRoZSBtYXAgZm9yIGFsbCB2ZXJ0aWNlc1xuXHRcdGNvbnN0IG5vcm1hbCA9IG5ldyBWZWN0b3IzKCkuY3Jvc3NWZWN0b3JzKCB0ZW1wVmVjMSwgdGVtcFZlYzIgKS5ub3JtYWxpemUoKTtcblx0XHRmb3IgKCBsZXQgbiA9IDA7IG4gPCAzOyBuICsrICkge1xuXG5cdFx0XHRjb25zdCB2ZXJ0ID0gdmVydHNbIG4gXTtcblx0XHRcdGNvbnN0IGhhc2ggPSBoYXNoVmVydGV4KCB2ZXJ0ICk7XG5cdFx0XHRpZiAoICEgKCBoYXNoIGluIHZlcnRleE1hcCApICkge1xuXG5cdFx0XHRcdHZlcnRleE1hcFsgaGFzaCBdID0gW107XG5cblx0XHRcdH1cblxuXHRcdFx0dmVydGV4TWFwWyBoYXNoIF0ucHVzaCggbm9ybWFsICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vIGF2ZXJhZ2Ugbm9ybWFscyBmcm9tIGFsbCB2ZXJ0aWNlcyB0aGF0IHNoYXJlIGEgY29tbW9uIGxvY2F0aW9uIGlmIHRoZXkgYXJlIHdpdGhpbiB0aGVcblx0Ly8gcHJvdmlkZWQgY3JlYXNlIHRocmVzaG9sZFxuXHRjb25zdCBub3JtYWxBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkoIHBvc0F0dHIuY291bnQgKiAzICk7XG5cdGNvbnN0IG5vcm1BdHRyID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZSggbm9ybWFsQXJyYXksIDMsIGZhbHNlICk7XG5cdGZvciAoIGxldCBpID0gMCwgbCA9IHBvc0F0dHIuY291bnQgLyAzOyBpIDwgbDsgaSArKyApIHtcblxuXHRcdC8vIGdldCB0aGUgZmFjZSBub3JtYWwgZm9yIHRoaXMgdmVydGV4XG5cdFx0Y29uc3QgaTMgPSAzICogaTtcblx0XHRjb25zdCBhID0gdmVydHNbIDAgXS5mcm9tQnVmZmVyQXR0cmlidXRlKCBwb3NBdHRyLCBpMyArIDAgKTtcblx0XHRjb25zdCBiID0gdmVydHNbIDEgXS5mcm9tQnVmZmVyQXR0cmlidXRlKCBwb3NBdHRyLCBpMyArIDEgKTtcblx0XHRjb25zdCBjID0gdmVydHNbIDIgXS5mcm9tQnVmZmVyQXR0cmlidXRlKCBwb3NBdHRyLCBpMyArIDIgKTtcblxuXHRcdHRlbXBWZWMxLnN1YlZlY3RvcnMoIGMsIGIgKTtcblx0XHR0ZW1wVmVjMi5zdWJWZWN0b3JzKCBhLCBiICk7XG5cblx0XHR0ZW1wTm9ybS5jcm9zc1ZlY3RvcnMoIHRlbXBWZWMxLCB0ZW1wVmVjMiApLm5vcm1hbGl6ZSgpO1xuXG5cdFx0Ly8gYXZlcmFnZSBhbGwgbm9ybWFscyB0aGF0IG1lZXQgdGhlIHRocmVzaG9sZCBhbmQgc2V0IHRoZSBub3JtYWwgdmFsdWVcblx0XHRmb3IgKCBsZXQgbiA9IDA7IG4gPCAzOyBuICsrICkge1xuXG5cdFx0XHRjb25zdCB2ZXJ0ID0gdmVydHNbIG4gXTtcblx0XHRcdGNvbnN0IGhhc2ggPSBoYXNoVmVydGV4KCB2ZXJ0ICk7XG5cdFx0XHRjb25zdCBvdGhlck5vcm1hbHMgPSB2ZXJ0ZXhNYXBbIGhhc2ggXTtcblx0XHRcdHRlbXBOb3JtMi5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0Zm9yICggbGV0IGsgPSAwLCBsayA9IG90aGVyTm9ybWFscy5sZW5ndGg7IGsgPCBsazsgayArKyApIHtcblxuXHRcdFx0XHRjb25zdCBvdGhlck5vcm0gPSBvdGhlck5vcm1hbHNbIGsgXTtcblx0XHRcdFx0aWYgKCB0ZW1wTm9ybS5kb3QoIG90aGVyTm9ybSApID4gY3JlYXNlRG90ICkge1xuXG5cdFx0XHRcdFx0dGVtcE5vcm0yLmFkZCggb3RoZXJOb3JtICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHRlbXBOb3JtMi5ub3JtYWxpemUoKTtcblx0XHRcdG5vcm1BdHRyLnNldFhZWiggaTMgKyBuLCB0ZW1wTm9ybTIueCwgdGVtcE5vcm0yLnksIHRlbXBOb3JtMi56ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdHJlc3VsdEdlb21ldHJ5LnNldEF0dHJpYnV0ZSggJ25vcm1hbCcsIG5vcm1BdHRyICk7XG5cdHJldHVybiByZXN1bHRHZW9tZXRyeTtcblxufVxuXG5leHBvcnQge1xuXHRjb21wdXRlTWlra1RTcGFjZVRhbmdlbnRzLFxuXHRtZXJnZUdlb21ldHJpZXMsXG5cdG1lcmdlQXR0cmlidXRlcyxcblx0aW50ZXJsZWF2ZUF0dHJpYnV0ZXMsXG5cdGVzdGltYXRlQnl0ZXNVc2VkLFxuXHRtZXJnZVZlcnRpY2VzLFxuXHR0b1RyaWFuZ2xlc0RyYXdNb2RlLFxuXHRjb21wdXRlTW9ycGhlZEF0dHJpYnV0ZXMsXG5cdG1lcmdlR3JvdXBzLFxuXHR0b0NyZWFzZWROb3JtYWxzXG59O1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDE4NzczNmI5NTUzODBlMTQwNWRcIikiXSwibmFtZXMiOlsiVEhSRUUiLCJDdXN0b21TaGFkZXJNYXRlcmlhbCIsIm1lcmdlVmVydGljZXMiLCJ2ZXJ0ZXgiLCJmcmFnbWVudCIsIkNsb2NrIiwiY29uc3RydWN0b3IiLCJzdGFydFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImdldEVsYXBzZWRUaW1lIiwicmVzZXRUaW1lIiwiY2xvY2siLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImRvbUVsZW1lbnQiLCJjbGFzc05hbWUiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsInJlc2l6ZSIsInNldFNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2VvbWV0cnkiLCJJY29zYWhlZHJvbkdlb21ldHJ5IiwiY29tcHV0ZVRhbmdlbnRzIiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiZGlyZWN0aW9uYWxMaWdodCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJzZXQiLCJ1bmlmb3JtcyIsInVUaW1lIiwidmFsdWUiLCJ1Q29sb3IiLCJDb2xvciIsInVHcmFkaWVudFN0cmVuZ3RoIiwidVNwZWVkIiwidU5vaXNlU3RyZW5ndGgiLCJ1RGlzcGxhY2VtZW50U3RyZW5ndGgiLCJ1RnJhY3RBbW91bnQiLCJtZXNoIiwiTWVzaCIsInNpbGVudCIsImJhc2VNYXRlcmlhbCIsIk1lc2hQaHlzaWNhbE1hdGVyaWFsIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJyb3VnaG5lc3MiLCJtZXRhbG5lc3MiLCJjbGVhcmNvYXQiLCJpb3IiLCJpcmlkZXNjZW5jZSIsIk1lc2hEZXB0aE1hdGVyaWFsIiwiZGVwdGhQYWNraW5nIiwiUkdCQURlcHRoUGFja2luZyIsImFkZCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=