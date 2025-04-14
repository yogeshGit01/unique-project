webpackJsonp([2],{

/***/ "./node_modules/image-compressor.js/dist/image-compressor.esm.js":
/* exports provided: default */
/* all exports used */
/*!************************************************************!*\
  !*** ./~/image-compressor.js/dist/image-compressor.esm.js ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
 * Image Compressor v1.1.4
 * https://xkeshi.github.io/image-compressor
 *
 * Copyright 2017-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2018-06-20T07:28:41.051Z
 */

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var canvasToBlob = createCommonjsModule(function (module) {
(function (window) {

  var CanvasPrototype =
    window.HTMLCanvasElement && window.HTMLCanvasElement.prototype;
  var hasBlobConstructor =
    window.Blob &&
    (function () {
      try {
        return Boolean(new Blob())
      } catch (e) {
        return false
      }
    })();
  var hasArrayBufferViewSupport =
    hasBlobConstructor &&
    window.Uint8Array &&
    (function () {
      try {
        return new Blob([new Uint8Array(100)]).size === 100
      } catch (e) {
        return false
      }
    })();
  var BlobBuilder =
    window.BlobBuilder ||
    window.WebKitBlobBuilder ||
    window.MozBlobBuilder ||
    window.MSBlobBuilder;
  var dataURIPattern = /^data:((.*?)(;charset=.*?)?)(;base64)?,/;
  var dataURLtoBlob =
    (hasBlobConstructor || BlobBuilder) &&
    window.atob &&
    window.ArrayBuffer &&
    window.Uint8Array &&
    function (dataURI) {
      var matches,
        mediaType,
        isBase64,
        dataString,
        byteString,
        arrayBuffer,
        intArray,
        i,
        bb;
      // Parse the dataURI components as per RFC 2397
      matches = dataURI.match(dataURIPattern);
      if (!matches) {
        throw new Error('invalid data URI')
      }
      // Default to text/plain;charset=US-ASCII
      mediaType = matches[2]
        ? matches[1]
        : 'text/plain' + (matches[3] || ';charset=US-ASCII');
      isBase64 = !!matches[4];
      dataString = dataURI.slice(matches[0].length);
      if (isBase64) {
        // Convert base64 to raw binary data held in a string:
        byteString = atob(dataString);
      } else {
        // Convert base64/URLEncoded data component to raw binary:
        byteString = decodeURIComponent(dataString);
      }
      // Write the bytes of the string to an ArrayBuffer:
      arrayBuffer = new ArrayBuffer(byteString.length);
      intArray = new Uint8Array(arrayBuffer);
      for (i = 0; i < byteString.length; i += 1) {
        intArray[i] = byteString.charCodeAt(i);
      }
      // Write the ArrayBuffer (or ArrayBufferView) to a blob:
      if (hasBlobConstructor) {
        return new Blob([hasArrayBufferViewSupport ? intArray : arrayBuffer], {
          type: mediaType
        })
      }
      bb = new BlobBuilder();
      bb.append(arrayBuffer);
      return bb.getBlob(mediaType)
    };
  if (window.HTMLCanvasElement && !CanvasPrototype.toBlob) {
    if (CanvasPrototype.mozGetAsFile) {
      CanvasPrototype.toBlob = function (callback, type, quality) {
        var self = this;
        setTimeout(function () {
          if (quality && CanvasPrototype.toDataURL && dataURLtoBlob) {
            callback(dataURLtoBlob(self.toDataURL(type, quality)));
          } else {
            callback(self.mozGetAsFile('blob', type));
          }
        });
      };
    } else if (CanvasPrototype.toDataURL && dataURLtoBlob) {
      CanvasPrototype.toBlob = function (callback, type, quality) {
        var self = this;
        setTimeout(function () {
          callback(dataURLtoBlob(self.toDataURL(type, quality)));
        });
      };
    }
  }
  if (false) {
    undefined(function () {
      return dataURLtoBlob
    });
  } else if (module.exports) {
    module.exports = dataURLtoBlob;
  } else {
    window.dataURLtoBlob = dataURLtoBlob;
  }
})(window);
});

/* globals Blob */
var toString = Object.prototype.toString;

var isBlob = function (x) {
	return x instanceof Blob || toString.call(x) === '[object Blob]';
};

var DEFAULTS = {
  /**
   * Indicates if read the image's Exif Orientation information,
   * and then rotate or flip the image automatically.
   * @type {boolean}
   */
  checkOrientation: true,

  /**
   * The max width of the output image.
   * @type {number}
   */
  maxWidth: Infinity,

  /**
   * The max height of the output image.
   * @type {number}
   */
  maxHeight: Infinity,

  /**
   * The min width of the output image.
   * @type {number}
   */
  minWidth: 0,

  /**
   * The min height of the output image.
   * @type {number}
   */
  minHeight: 0,

  /**
   * The width of the output image.
   * If not specified, the natural width of the source image will be used.
   * @type {number}
   */
  width: undefined,

  /**
   * The height of the output image.
   * If not specified, the natural height of the source image will be used.
   * @type {number}
   */
  height: undefined,

  /**
   * The quality of the output image.
   * It must be a number between `0` and `1`,
   * and only available for `image/jpeg` and `image/webp` images.
   * Check out {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob canvas.toBlob}.
   * @type {number}
   */
  quality: 0.8,

  /**
   * The mime type of the output image.
   * By default, the original mime type of the source image file will be used.
   * @type {string}
   */
  mimeType: 'auto',

  /**
   * PNG files over this value (5M by default) will be converted to JPEGs.
   * To disable this, just set the value to `Infinity`.
   * Check out {@link https://github.com/xkeshi/image-compressor/issues/2 #2}.
   * @type {number}
   */
  convertSize: 5000000,

  /**
   * The hook function to execute before draw the image into the canvas for compression.
   * @type {Function}
   * @param {CanvasRenderingContext2D} context - The 2d rendering context of the canvas.
   * @param {HTMLCanvasElement} canvas - The canvas for compression.
   * @example
   * function (context, canvas) { context.fillStyle = '#fff' }
   */
  beforeDraw: null,

  /**
   * The hook function to execute after drew the image into the canvas for compression.
   * @type {Function}
   * @param {CanvasRenderingContext2D} context - The 2d rendering context of the canvas.
   * @param {HTMLCanvasElement} canvas - The canvas for compression.
   * @example
   * function (context, canvas) { context.filter = grayscale(100%) }
   */
  drew: null,

  /**
   * The hook function to execute when success to compress the image.
   * @type {Function}
   * @param {File} file - The compressed image File object.
   * @example
   * function (file) { console.log(file) }
   */
  success: null,

  /**
   * The hook function to execute when fail to compress the image.
   * @type {Function}
   * @param {Error} err - An Error object.
   * @example
   * function (err) { console.log(err.message) }
   */
  error: null
};

var REGEXP_IMAGE_TYPE = /^image\/.+$/;

/**
 * Check if the given value is a mime type of image.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given is a mime type of image, else `false`.
 */
function isImageType(value) {
  return REGEXP_IMAGE_TYPE.test(value);
}

/**
 * Convert image type to extension.
 * @param {string} value - The image type to convert.
 * @param {boolean} [includeDot=true] - Include a leading dot or not.
 * @returns {boolean} Returns the image extension.
 */
function imageTypeToExtension(value) {
  var includeDot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var extension = isImageType(value) ? value.substr(6) : '';

  if (extension === 'jpeg') {
    extension = 'jpg';
  }

  if (extension && includeDot) {
    extension = '.' + extension;
  }

  return extension;
}

var fromCharCode = String.fromCharCode;

/**
 * Get string from char code in data view.
 * @param {DataView} dataView - The data view for read.
 * @param {number} start - The start index.
 * @param {number} length - The read length.
 * @returns {string} The read result.
 */

function getStringFromCharCode(dataView, start, length) {
  var str = '';
  var i = void 0;

  length += start;

  for (i = start; i < length; i += 1) {
    str += fromCharCode(dataView.getUint8(i));
  }

  return str;
}

var _window = window,
    btoa = _window.btoa;

/**
 * Transform array buffer to Data URL.
 * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
 * @param {string} mimeType - The mime type of the Data URL.
 * @returns {string} The result Data URL.
 */

function arrayBufferToDataURL(arrayBuffer, mimeType) {
  var uint8 = new Uint8Array(arrayBuffer);
  var data = '';

  // TypedArray.prototype.forEach is not supported in some browsers as IE.
  if (typeof uint8.forEach === 'function') {
    uint8.forEach(function (value) {
      data += fromCharCode(value);
    });
  } else {
    var length = uint8.length;


    for (var i = 0; i < length; i += 1) {
      data += fromCharCode(uint8[i]);
    }
  }

  return 'data:' + mimeType + ';base64,' + btoa(data);
}

/**
 * Get orientation value from given array buffer.
 * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
 * @returns {number} The read orientation value.
 */
function getOrientation(arrayBuffer) {
  var dataView = new DataView(arrayBuffer);
  var orientation = void 0;
  var littleEndian = void 0;
  var app1Start = void 0;
  var ifdStart = void 0;

  // Only handle JPEG image (start by 0xFFD8)
  if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
    var length = dataView.byteLength;
    var offset = 2;

    while (offset < length) {
      if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
        app1Start = offset;
        break;
      }

      offset += 1;
    }
  }

  if (app1Start) {
    var exifIDCode = app1Start + 4;
    var tiffOffset = app1Start + 10;

    if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
      var endianness = dataView.getUint16(tiffOffset);

      littleEndian = endianness === 0x4949;

      if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
          if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
            var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

            if (firstIFDOffset >= 0x00000008) {
              ifdStart = tiffOffset + firstIFDOffset;
            }
          }
        }
    }
  }

  if (ifdStart) {
    var _length = dataView.getUint16(ifdStart, littleEndian);
    var _offset = void 0;
    var i = void 0;

    for (i = 0; i < _length; i += 1) {
      _offset = ifdStart + i * 12 + 2;

      if (dataView.getUint16(_offset, littleEndian) === 0x0112 /* Orientation */) {
          // 8 is the offset of the current tag's value
          _offset += 8;

          // Get the original orientation value
          orientation = dataView.getUint16(_offset, littleEndian);

          // Override the orientation with its default value
          dataView.setUint16(_offset, 1, littleEndian);
          break;
        }
    }
  }

  return orientation;
}

/**
 * Parse Exif Orientation value.
 * @param {number} orientation - The orientation to parse.
 * @returns {Object} The parsed result.
 */
function parseOrientation(orientation) {
  var rotate = 0;
  var scaleX = 1;
  var scaleY = 1;

  switch (orientation) {
    // Flip horizontal
    case 2:
      scaleX = -1;
      break;

    // Rotate left 180°
    case 3:
      rotate = -180;
      break;

    // Flip vertical
    case 4:
      scaleY = -1;
      break;

    // Flip vertical and rotate right 90°
    case 5:
      rotate = 90;
      scaleY = -1;
      break;

    // Rotate right 90°
    case 6:
      rotate = 90;
      break;

    // Flip horizontal and rotate right 90°
    case 7:
      rotate = 90;
      scaleX = -1;
      break;

    // Rotate left 90°
    case 8:
      rotate = -90;
      break;

    default:
  }

  return {
    rotate: rotate,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/i;

/**
 * Normalize decimal number.
 * Check out {@link http://0.30000000000000004.com/}
 * @param {number} value - The value to normalize.
 * @param {number} [times=100000000000] - The times for normalizing.
 * @returns {number} Returns the normalized number.
 */
function normalizeDecimalNumber(value) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;

  return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _window$1 = window,
    ArrayBuffer$1 = _window$1.ArrayBuffer,
    FileReader = _window$1.FileReader;

var URL = window.URL || window.webkitURL;
var REGEXP_EXTENSION = /\.\w+$/;

/**
 * Creates a new image compressor.
 * @class
 */

var ImageCompressor = function () {
  /**
   * The constructor of ImageCompressor.
   * @param {File|Blob} file - The target image file for compressing.
   * @param {Object} [options] - The options for compressing.
   */
  function ImageCompressor(file, options) {
    classCallCheck(this, ImageCompressor);

    this.result = null;

    if (file) {
      this.compress(file, options);
    }
  }

  /**
   * The main compress method.
   * @param {File|Blob} file - The target image file for compressing.
   * @param {Object} [options] - The options for compressing.
   * @returns {Promise} - A Promise instance.
   */


  createClass(ImageCompressor, [{
    key: 'compress',
    value: function compress(file, options) {
      var _this = this;

      var image = new Image();

      options = _extends({}, DEFAULTS, options);

      if (!ArrayBuffer$1) {
        options.checkOrientation = false;
      }

      return new Promise(function (resolve, reject) {
        if (!isBlob(file)) {
          reject(new Error('The first argument must be a File or Blob object.'));
          return;
        }

        var mimeType = file.type;

        if (!isImageType(mimeType)) {
          reject(new Error('The first argument must be an image File or Blob object.'));
          return;
        }

        if (!URL && !FileReader) {
          reject(new Error('The current browser does not support image compression.'));
          return;
        }

        if (URL && !options.checkOrientation) {
          resolve({
            url: URL.createObjectURL(file)
          });
        } else if (FileReader) {
          var reader = new FileReader();
          var checkOrientation = options.checkOrientation && mimeType === 'image/jpeg';

          reader.onload = function (_ref) {
            var target = _ref.target;
            var result = target.result;


            resolve(checkOrientation ? _extends({
              url: arrayBufferToDataURL(result, mimeType)
            }, parseOrientation(getOrientation(result))) : {
              url: result
            });
          };
          reader.onabort = function () {
            reject(new Error('Aborted to load the image with FileReader.'));
          };
          reader.onerror = function () {
            reject(new Error('Failed to load the image with FileReader.'));
          };

          if (checkOrientation) {
            reader.readAsArrayBuffer(file);
          } else {
            reader.readAsDataURL(file);
          }
        }
      }).then(function (data) {
        return new Promise(function (resolve, reject) {
          image.onload = function () {
            return resolve(_extends({}, data, {
              naturalWidth: image.naturalWidth,
              naturalHeight: image.naturalHeight
            }));
          };
          image.onabort = function () {
            reject(new Error('Aborted to load the image.'));
          };
          image.onerror = function () {
            reject(new Error('Failed to load the image.'));
          };
          image.alt = file.name;
          image.src = data.url;
        });
      }).then(function (_ref2) {
        var naturalWidth = _ref2.naturalWidth,
            naturalHeight = _ref2.naturalHeight,
            _ref2$rotate = _ref2.rotate,
            rotate = _ref2$rotate === undefined ? 0 : _ref2$rotate,
            _ref2$scaleX = _ref2.scaleX,
            scaleX = _ref2$scaleX === undefined ? 1 : _ref2$scaleX,
            _ref2$scaleY = _ref2.scaleY,
            scaleY = _ref2$scaleY === undefined ? 1 : _ref2$scaleY;
        return new Promise(function (resolve) {
          var canvas = document.createElement('canvas');
          var context = canvas.getContext('2d');
          var aspectRatio = naturalWidth / naturalHeight;
          var maxWidth = Math.max(options.maxWidth, 0) || Infinity;
          var maxHeight = Math.max(options.maxHeight, 0) || Infinity;
          var minWidth = Math.max(options.minWidth, 0) || 0;
          var minHeight = Math.max(options.minHeight, 0) || 0;
          var width = naturalWidth;
          var height = naturalHeight;

          if (maxWidth < Infinity && maxHeight < Infinity) {
            if (maxHeight * aspectRatio > maxWidth) {
              maxHeight = maxWidth / aspectRatio;
            } else {
              maxWidth = maxHeight * aspectRatio;
            }
          } else if (maxWidth < Infinity) {
            maxHeight = maxWidth / aspectRatio;
          } else if (maxHeight < Infinity) {
            maxWidth = maxHeight * aspectRatio;
          }

          if (minWidth > 0 && minHeight > 0) {
            if (minHeight * aspectRatio > minWidth) {
              minHeight = minWidth / aspectRatio;
            } else {
              minWidth = minHeight * aspectRatio;
            }
          } else if (minWidth > 0) {
            minHeight = minWidth / aspectRatio;
          } else if (minHeight > 0) {
            minWidth = minHeight * aspectRatio;
          }

          if (options.width > 0) {
            var _options = options;
            width = _options.width;

            height = width / aspectRatio;
          } else if (options.height > 0) {
            var _options2 = options;
            height = _options2.height;

            width = height * aspectRatio;
          }

          width = Math.min(Math.max(width, minWidth), maxWidth);
          height = Math.min(Math.max(height, minHeight), maxHeight);

          var destX = -width / 2;
          var destY = -height / 2;
          var destWidth = width;
          var destHeight = height;

          if (Math.abs(rotate) % 180 === 90) {
            var _width$height = {
              width: height,
              height: width
            };
            width = _width$height.width;
            height = _width$height.height;
          }

          canvas.width = normalizeDecimalNumber(width);
          canvas.height = normalizeDecimalNumber(height);

          if (!isImageType(options.mimeType)) {
            options.mimeType = file.type;
          }

          var defaultFillStyle = 'transparent';

          // Converts PNG files over the `convertSize` to JPEGs.
          if (file.size > options.convertSize && options.mimeType === 'image/png') {
            defaultFillStyle = '#fff';
            options.mimeType = 'image/jpeg';
          }

          // Override the default fill color (#000, black)
          context.fillStyle = defaultFillStyle;
          context.fillRect(0, 0, width, height);
          context.save();
          context.translate(width / 2, height / 2);
          context.rotate(rotate * Math.PI / 180);
          context.scale(scaleX, scaleY);

          if (options.beforeDraw) {
            options.beforeDraw.call(_this, context, canvas);
          }

          context.drawImage(image, Math.floor(normalizeDecimalNumber(destX)), Math.floor(normalizeDecimalNumber(destY)), Math.floor(normalizeDecimalNumber(destWidth)), Math.floor(normalizeDecimalNumber(destHeight)));

          if (options.drew) {
            options.drew.call(_this, context, canvas);
          }

          context.restore();

          var done = function done(result) {
            resolve({
              naturalWidth: naturalWidth,
              naturalHeight: naturalHeight,
              result: result
            });
          };

          if (canvas.toBlob) {
            canvas.toBlob(done, options.mimeType, options.quality);
          } else {
            done(canvasToBlob(canvas.toDataURL(options.mimeType, options.quality)));
          }
        });
      }).then(function (_ref3) {
        var naturalWidth = _ref3.naturalWidth,
            naturalHeight = _ref3.naturalHeight,
            result = _ref3.result;

        if (URL && !options.checkOrientation) {
          URL.revokeObjectURL(image.src);
        }

        if (result) {
          // Returns original file if the result is greater than it and without size related options
          if (result.size > file.size && options.mimeType === file.type && !(options.width > naturalWidth || options.height > naturalHeight || options.minWidth > naturalWidth || options.minHeight > naturalHeight)) {
            result = file;
          } else {
            var date = new Date();

            result.lastModified = date.getTime();
            result.lastModifiedDate = date;
            result.name = file.name;

            // Convert the extension to match its type
            if (result.name && result.type !== file.type) {
              result.name = result.name.replace(REGEXP_EXTENSION, imageTypeToExtension(result.type));
            }
          }
        } else {
          // Returns original file if the result is null in some cases.
          result = file;
        }

        _this.result = result;

        if (options.success) {
          options.success.call(_this, result);
        }

        return Promise.resolve(result);
      }).catch(function (err) {
        if (!options.error) {
          throw err;
        }

        options.error.call(_this, err);
      });
    }
  }]);
  return ImageCompressor;
}();

/* harmony default export */ __webpack_exports__["default"] = (ImageCompressor);


/***/ }),

/***/ "./src/app/components/journey/step11/file-upload/file-upload.component.html":
/* unknown exports provided */
/* all exports used */
/*!**********************************************************************************!*\
  !*** ./src/app/components/journey/step11/file-upload/file-upload.component.html ***!
  \**********************************************************************************/
/***/ (function(module, exports) {

module.exports = "<div ng-show=$ctrl.compressing class=file-wait> <div class=loader></div> <div>Please wait...</div> </div> <label for=docGroup class=screen-reader-only>Document group</label> <div style=margin-bottom:10px ng-class=\"{'has-error': $ctrl.submitted && $ctrl.file.validationError.noGroup}\"> <custom-select> <select id=docGroup name=docGroup class=form-control ng-model=$ctrl.file.documentGroup ng-disabled=$ctrl.file.documentGroup ng-options=\"group for group in $ctrl.documentGroups\" ng-change=$ctrl.documentGroupChange() required> <option value=\"\" disabled=disabled>Please select</option> </select> </custom-select> </div> <div class=upload-container style=margin-bottom:10px> <button class=button-outline ng-if=!$ctrl.file.document ng-click=$ctrl.triggerUpload() ng-disabled=!$ctrl.file.documentGroup> Upload a document </button> <div class=bottom-div ng-class=\"{'hidden-field': $ctrl.selectedImages[0].document}\"> <div ng-if=$ctrl.isStaffJourney> <input type=file id={{$ctrl.fileId}} class=hidden-field accept=image/* capture=camera onchange=angular.element(this).scope().$ctrl.previewImage(this,angular.element(this).scope().$ctrl.index)> </div> <div ng-if=!$ctrl.isStaffJourney> <input type=file id={{$ctrl.fileId}} class=hidden-field accept=\"image/*, application/pdf\" onchange=angular.element(this).scope().$ctrl.previewImage(this,angular.element(this).scope().$ctrl.index)> </div> <input type=text id=file1Name class=hidden-field name=file1Name ng-model=$ctrl.selectedImages[0].documentName required> </div> <img ng-src={{$ctrl.file.document}} aria-label=\"reupload this document\" ng-click=$ctrl.triggerUpload() class=img-responsive ng-if=\"$ctrl.file.document && $ctrl.file.documentType!=='application/pdf'\"> <span class=\"icon icon-pdf\" ng-click=$ctrl.triggerUpload() ng-if=\"$ctrl.file.documentType==='application/pdf'\"></span> </div> <div> <div ng-if=\"$ctrl.file.documentGroup === 'Bank Statement' || $ctrl.file.documentGroup === 'Salary Slip'\"> <label class=textbox-label> (If document is password protected) </label> <input type=password id=docPassword name=docPassword class=form-control ng-class=\"{'has-error': $ctrl.submitted && $ctrl.file.validationError.noGroup}\" placeholder=\"Enter the document Password\" ng-model=$ctrl.file.docPassword /> </div> </div> <div ng-if=$ctrl.file.document class=remove-btn-container> <button class=button-outline ng-click=$ctrl.removeFile()> <span class=\"icon icon-bin\"></span> Remove </button> </div>";

/***/ }),

/***/ "./src/app/components/journey/step11/file-upload/file-upload.component.js":
/* unknown exports provided */
/* all exports used */
/*!********************************************************************************!*\
  !*** ./src/app/components/journey/step11/file-upload/file-upload.component.js ***!
  \********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    "use strict";
    __webpack_require__(/*! ./file-upload.component.scss */ "./src/app/components/journey/step11/file-upload/file-upload.component.scss");
    var ImageCompressor = __webpack_require__(/*! image-compressor.js */ "./node_modules/image-compressor.js/dist/image-compressor.esm.js");
    var uploadCtrl = function ($scope, $rootScope, $timeout, journeyService, step11Service, appState) {
        var vm = this, fileTypes;

        vm.$onInit = function () {
            // vm.fileId = "file" + vm.index;
            vm.isStaffJourney = journeyService.isStaffJourney();
            vm.hubSalaryFlag = appState.getHubSalaryFlag() === 'success';
            // vm.hubSalaryFlag=true;
            console.log("hubSalaryFlag",vm.hubSalaryFlag);
            vm.documentGroups = step11Service.getDocumentGroups();
            fileTypes = ['image/jpg', 'image/jpeg', 'image/png','application/pdf'];
            if (!vm.isStaffJourney) {
                // Remove BoilerPlate option
                vm.documentGroups.splice(0, 3);
               // vm.documentGroups.splice(1, 1);
                //fileTypes.push("application/pdf");
            }
            if (vm.hubSalaryFlag) {
                var valuesToRemove = ['Bank Statement', 'Salary Slip'];
                var newDocumentGroups = [];
                for (var i = 0; i < vm.documentGroups.length; i++) {
                     valuesToRemove.indexOf(vm.documentGroups[i]) === -1 ? newDocumentGroups.push(vm.documentGroups[i]):'';
                }
                vm.documentGroups = newDocumentGroups;
            }
            console.log("documentGroupsAfterCalculatedSalaryFlagCheck ",vm.documentGroups);
        };

        vm.triggerUpload = function () {
            var fileElem = angular.element(document.querySelector("#" + vm.fileId))[0];
            fileElem.click();
            vm.file.resetValidationError();
        };

        var validateFile = function (filetype, filesize) {
            var maxfilesize = 3145728; //3MB in bytes
            vm.file.validationError.maxSize = false;
            vm.file.validationError.minSize = false;
            vm.file.validationError.format = false;
            if (fileTypes.indexOf(filetype) === -1) {
                vm.file.validationError.format = true;
                // vm.onValidationError();
                var fileElem = angular.element(document.querySelector("#" + vm.fileId))[0];
                fileElem.value = '';
                return false;
            }
            if (filesize > maxfilesize) {
                vm.file.validationError.maxSize = true;
                // vm.onValidationError();
                var fileElem = angular.element(document.querySelector("#" + vm.fileId))[0];
                fileElem.value = '';
                return false;
            } else if (filesize === 0) {
                vm.file.validationError.minSize = true;
                // vm.onValidationError();
                return false;
            } else {
                return true;
            }
        };

        vm.previewImage = function (element, imageindex) {
            $timeout(function () {
                var selectedfile = element.files[0];
                var filename = selectedfile.name;
                alert(""+filename+"  uploaded succesfully \n \n Please click OK to continue");
                if (fileTypes.indexOf(selectedfile.type) > -1 && selectedfile.type.indexOf('pdf') === -1) {
                    // Show Please wait...
                    vm.compressing = true;
                    var selectedfile = element.files[0];
                    var quality = 0, sizeMB = selectedfile.size / (1024 * 1024), sizeKB = selectedfile.size / 1024;
                    if (sizeMB > 1.5) {
                        quality = 0.1;
                    } else if (sizeMB <= 1.5 && sizeKB > 750) {
                        quality = 0.2;
                    } else if (sizeKB <= 750 && sizeKB > 500) {
                        quality = 0.3;
                    } else {
                        quality = 1;
                    }
                    // alert((selectedfile.size / (1024 * 1024)) + 'MB');
                    new ImageCompressor.default(selectedfile, {
                        quality: quality,
                        success: function (resultFile) {
                            $scope.$apply(function (scope) {
                                readFile(resultFile);
                            });
                        },
                        error: function (err) {
                            // Hide Please wait...
                            vm.compressing = false;
                        }
                    });
                } else {
                    readFile(selectedfile);
                }
            });
        };

        vm.compress = function (element, imageindex) {
            $timeout(function () {
                // Show Please wait...
                vm.compressing = true;
                var selectedfile = element.files[0];
                var quality = 0, sizeMB = selectedfile.size / (1024 * 1024), sizeKB = selectedfile.size / 1024;
                if (sizeMB > 1.5) {
                    quality = 0.1;
                } else if (sizeMB <= 1.5 && sizeKB > 750) {
                    quality = 0.2;
                } else if (sizeKB <= 750 && sizeKB > 500) {
                    quality = 0.3;
                } else {
                    quality = 1;
                }
                // alert((selectedfile.size / (1024 * 1024)) + 'MB');
                new ImageCompressor.default(selectedfile, {
                    quality: quality,
                    success: function (resultFile) {
                        $scope.$apply(function (scope) {
                            // alert((resultFile.size / (1024 * 1024)) + 'MB');
                            if (validateFile(resultFile.type, resultFile.size)) {
                                var fileReader = new FileReader();
                                fileReader.onload = function (e) {
                                    $scope.$apply(function (scope) {
                                        vm.file.validationError.format = false;
                                        vm.file.validationError.maxSize = false;
                                        vm.file.validationError.minSize = false;
                                        vm.file.document = e.target.result;
                                        vm.file.documentName = selectedfile.name;
                                        vm.file.documentType = resultFile.type;
                                        // $rootScope.$broadcast("on-document-selected");
                                        // Hide Please wait...
                                        vm.compressing = false;
                                    });
                                };
                                fileReader.readAsDataURL(resultFile);
                            } else {
                                vm.onValidationError({ index: vm.index });
                                // Hide Please wait...
                                vm.compressing = false;
                            }
                        });
                    },
                    error: function (err) {
                        // Hide Please wait...
                        vm.compressing = false;
                    }
                });
            });
        };

        var readFile = function (resultFile) {
            if (validateFile(resultFile.type, resultFile.size)) {
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    $scope.$apply(function (scope) {
                        vm.file.validationError.format = false;
                        vm.file.validationError.maxSize = false;
                        vm.file.validationError.minSize = false;
                        vm.file.document = e.target.result;
                        vm.file.documentName = resultFile.name;
                        vm.file.documentType = resultFile.type;
                        // $rootScope.$broadcast("on-document-selected");
                        // Hide Please wait...
                        vm.compressing = false;
                    });
                };
                fileReader.readAsDataURL(resultFile);
            } else {
                vm.onValidationError({ index: vm.index });
                // Hide Please wait...
                vm.compressing = false;
            }
        };

        vm.removeFile = function () {
            vm.onRemove({ index: vm.index });
        };

        vm.documentGroupChange = function () {
            if (vm.file.documentGroup) {
                vm.file.validationError.noGroup = false;
            } else {
                vm.file.validationError.noGroup = true;
            }
            vm.onValidationError({ index: vm.index });
        };
    };

    var fileUploadComp = angular.module("journey.module").component("fileUpload", {
        template: __webpack_require__(/*! ./file-upload.component.html */ "./src/app/components/journey/step11/file-upload/file-upload.component.html"),
        controller: ["$scope", "$rootScope", "$timeout", "journeyService", "step11Service","appState", uploadCtrl],
        bindings: {
            index: "<",
            submitted: '<',
            fileId: "@",
            file: "=",
            onRemove: "&",
            onValidationError: "&"
        }
    });

    module.exports = fileUploadComp.name;
})();

/***/ }),

/***/ "./src/app/components/journey/step11/file-upload/file-upload.component.scss":
/* unknown exports provided */
/* all exports used */
/*!**********************************************************************************!*\
  !*** ./src/app/components/journey/step11/file-upload/file-upload.component.scss ***!
  \**********************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/journey/step11/openBankingModal/openBankingModal.modal.component.html":
/* unknown exports provided */
/* all exports used */
/*!**************************************************************************************************!*\
  !*** ./src/app/components/journey/step11/openBankingModal/openBankingModal.modal.component.html ***!
  \**************************************************************************************************/
/***/ (function(module, exports) {

module.exports = "<div class=modal-header> <div class=heading-container> <h4 class=brand-bar></h4> </div> <div class=close-button-container> <span aria-label=Close title=Close class=\"icon icon-2x icon-delete-small\" ng-click=$ctrl.cancel()></span> </div> </div> <div class=modal-body> <p> You will be redirected to Account Aggregator page. Please click OK to proceed and do not close current tab. </p> <p style=color:red;font-weight:700> Please close the Account Aggregator browser once consent has been given. </p> </div> <div class=modal-footer> <div class=buttons-container> <button class=button-succes ng-click=$ctrl.cancel()>Close</button> <button class=button-primary ng-click=$ctrl.Close(true)>OK</button> </div> </div>";

/***/ }),

/***/ "./src/app/components/journey/step11/openBankingModal/openBankingModal.modal.component.js":
/* unknown exports provided */
/* all exports used */
/*!************************************************************************************************!*\
  !*** ./src/app/components/journey/step11/openBankingModal/openBankingModal.modal.component.js ***!
  \************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
// this file added for open Banking popup confirmation message by @akshaypise
    var modalController = function (analyticService) {
        var vm = this;

        vm.$onInit = function () {
            console.log("analyticService",analyticService);
          //  analyticService.buttonList.popup.event_content = "Assignment of Esignzy adhar e signing";
            //analyticService.trackUserAction(analyticService.buttonList.popup);
        };

        vm.Close = function (isSelected) {
            vm.close({
                $value: isSelected
            });
        };

        vm.cancel = function () {
            vm.dismiss({
                $value: 'cancel'
            });
        };
    };

    var modalComp = angular.module('journey.module').component('openBankingModal', {
        template: __webpack_require__(/*! ./openBankingModal.modal.component.html */ "./src/app/components/journey/step11/openBankingModal/openBankingModal.modal.component.html"),
        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: ['analyticService', modalController]
    });
    module.exports = modalComp.name;
})();


/***/ }),

/***/ "./src/app/components/journey/step11/step11.component.html":
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************!*\
  !*** ./src/app/components/journey/step11/step11.component.html ***!
  \*****************************************************************/
/***/ (function(module, exports) {

module.exports = "<div class=row ng-hide=$ctrl.showLoader> <div class=\"col-md-12 col-sm-12 col-xs-12\" ui-view=step11View> <form name=step11Form focus-on-error novalidate ng-hide=$ctrl.showLoader> <input type=text class=hidden-field ng-model=$ctrl.robocheck tabindex=-1> <alert-msg ng-if=$ctrl.model.errorMsg type=ERROR> {{$ctrl.model.errorMsg}} </alert-msg> <alert-msg ng-if=$ctrl.model.successMsg type=SUCCESS close=$ctrl.closeSuccessMsg()> {{$ctrl.model.successMsg}} </alert-msg> <div class=row> <div class=\"col-md-12 col-sm-12\"> <h1 class=\"brand-bar no-margin-top\">Document Information</h1> </div> </div> <div id=poi ng-if=$ctrl.isStaffJourney> <div class=row> <div class=\"col-md-6 col-sm-6 col-xs-12\" ng-if=\"$ctrl.ekyc!='Yes'\"> <div class=\"form-group line-spacer\"> <label for=poiType>Select POI Type</label> <div ng-class=\"{'has-error': step11Form.poiType.$invalid && (step11Form.poiType.$touched || $ctrl.model.submitted)}\"> <custom-select> <select id=poiType name=poiType class=form-control ng-model=$ctrl.model.poiType ng-options=\"item for item in $ctrl.poiType\" aria-describedby=poiTypeErrMsg aria-invalid=\"{{step11Form.poiType.$invalid && (step11Form.poiType.$touched || $ctrl.model.submitted)}}\" required> <option value=\"\">Please select</option> </select> </custom-select> </div> <div id=poiTypeErrMsg ng-class=\"{'has-error': step11Form.poiType.$invalid}\"> <validation-msg ng-if=\"step11Form.poiType.$error.required && (step11Form.poiType.$touched || $ctrl.model.submitted)\"> Please select your POI Type. </validation-msg> </div> </div> </div> <div class=\"col-md-6 col-sm-6 col-xs-12\" ng-if=\"$ctrl.ekyc=='Yes'\"> <div class=\"form-group line-spacer\"> <label for=poiType>Select POI Type</label> <div ng-class=\"{'has-error': step11Form.poiType.$invalid && (step11Form.poiType.$touched || $ctrl.model.submitted)}\"> <custom-select> <select id=poiType name=poiType class=form-control ng-model=$ctrl.model.poiType ng-options=\"item for item in $ctrl.poiType\" aria-describedby=poiTypeErrMsg aria-invalid=\"{{step11Form.poiType.$invalid && (step11Form.poiType.$touched || $ctrl.model.submitted)}}\" disabled=disabled> <option value=\"\">{{$ctrl.poiType[3]}}</option> </select> </custom-select> </div> </div> </div> <div id=passport ng-if=\"$ctrl.model.poiType == 'Passport'\"> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=poiNumber>POI Number</label> <div ng-class=\"{'has-error': step11Form.poiNumber.$invalid && ($ctrl.model.submitted || step11Form.poiNumber.$touched)}\"> <input trim type=text id=poiNumber name=poiNumber trim auto-caps class=form-control ng-model=$ctrl.model.poiNumber alpha-num=8 ng-pattern=/^[A-Z][0-9]{7}$/ ng-maxlength=8 placeholder=\"Enter Passport Number\" aria-describedby=poiNumberErrMsg aria-invalid=\"{{step11Form.poiNumber.$invalid && ($ctrl.model.submitted || step11Form.poiNumber.$touched)}}\" required> </div> <div id=poiNumberErrMsg ng-class=\"{'has-error': step11Form.poiNumber.$invalid}\"> <validation-msg ng-if=\"step11Form.poiNumber.$error.required && (step11Form.poiNumber.$touched || $ctrl.model.submitted)\"> Please enter your Passport Number. </validation-msg> <validation-msg ng-if=\"step11Form.poiNumber.$error.pattern && step11Form.poiNumber.$touched\"> Please enter valid Passport Number. </validation-msg> </div> </div> </div> </div> <div id=voterId ng-if=\"$ctrl.model.poiType == 'Voter Id'\"> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=poiNumber>POI Number</label> <div ng-class=\"{'has-error': step11Form.poiNumber.$invalid && ($ctrl.model.submitted || step11Form.poiNumber.$touched)}\"> <input trim type=text id=poiNumber name=poiNumber trim auto-caps class=form-control ng-model=$ctrl.model.poiNumber alpha-num=10 ng-pattern=/^([a-zA-Z]){3}([0-9]){7}$/ ng-maxlength=10 placeholder=\"Enter Voter Id\" aria-describedby=poiNumberErrMsg aria-invalid=\"{{step11Form.poiNumber.$invalid && ($ctrl.model.submitted || step11Form.poiNumber.$touched)}}\" required> </div> <div id=poiNumberErrMsg ng-class=\"{'has-error': step11Form.poiNumber.$invalid}\"> <validation-msg ng-if=\"step11Form.poiNumber.$error.required && (step11Form.poiNumber.$touched || $ctrl.model.submitted)\"> Please enter your Voter Id. </validation-msg> <validation-msg ng-if=\"step11Form.poiNumber.$error.pattern && step11Form.poiNumber.$touched\"> Please enter valid Voter Id. </validation-msg> </div> </div> </div> </div> <div id=DrivingLicense ng-if=\"$ctrl.model.poiType == 'Driving License'\"> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=poiNumber>POI Number</label> <div ng-class=\"{'has-error': step11Form.poiNumber.$invalid && ($ctrl.model.submitted || step11Form.poiNumber.$touched)}\"> <input trim type=text id=poiNumber name=poiNumber trim auto-caps class=form-control ng-model=$ctrl.model.poiNumber ng-pattern=\"/^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/\" ng-maxlength=16 placeholder=\"Enter Driving License Number\" aria-describedby=poiNumberErrMsg aria-invalid=\"{{step11Form.poiNumber.$invalid && ($ctrl.model.submitted || step11Form.poiNumber.$touched)}}\" required> </div> <div id=poiNumberErrMsg ng-class=\"{'has-error': step11Form.poiNumber.$invalid}\"> <validation-msg ng-if=\"step11Form.poiNumber.$error.required && (step11Form.poiNumber.$touched || $ctrl.model.submitted)\"> Please enter your Driving License Number. </validation-msg> <validation-msg ng-if=\"step11Form.poiNumber.$error.pattern && step11Form.poiNumber.$touched\"> Please enter valid Driving License Number. </validation-msg> </div> </div> </div> </div> <div id=AadharCard ng-if=\"$ctrl.model.poiType == 'Aadhar Card' && $ctrl.ekyc !='Yes'\"> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=poiNumber>POI Number</label> <div ng-class=\"{'has-error': step11Form.poiNumber.$invalid && ($ctrl.model.submitted || step11Form.poiNumber.$touched)}\"> <input trim type=text id=poiNumber name=poiNumber trim auto-caps class=form-control ng-model=$ctrl.model.poiNumber only-number=4 ng-pattern=/^[0-9]{4}$/ ng-maxlength=16 placeholder=\"Enter Last 4 Digit of Aadhar\" aria-describedby=poiNumberErrMsg aria-invalid=\"{{step11Form.poiNumber.$invalid && ($ctrl.model.submitted || step11Form.poiNumber.$touched)}}\" required> </div> <div id=poiNumberErrMsg ng-class=\"{'has-error': step11Form.poiNumber.$invalid}\"> <validation-msg ng-if=\"step11Form.poiNumber.$error.required && (step11Form.poiNumber.$touched || $ctrl.model.submitted)\"> Please enter your Last 4 Digit of Aadhar. </validation-msg> <validation-msg ng-if=\"step11Form.poiNumber.$error.pattern && step11Form.poiNumber.$touched\"> Please enter valid Last 4 Digit of Aadhar. </validation-msg> </div> </div> </div> </div> <div id=AadharCard ng-if=\"$ctrl.ekyc=='Yes'\"> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=poiNumber>POI Number</label> <div ng-class=\"{'has-error': step11Form.poiNumber.$invalid && ($ctrl.model.submitted || step11Form.poiNumber.$touched)}\"> <input trim type=text id=poiNumber name=poiNumber trim auto-caps class=form-control ng-model=$ctrl.model.poiNumber only-number=4 ng-pattern=/^[0-9]{4}$/ ng-maxlength=16 placeholder=\"Enter Last 4 Digit of Aadhar\" aria-describedby=poiNumberErrMsg aria-invalid=\"{{step11Form.poiNumber.$invalid && ($ctrl.model.submitted || step11Form.poiNumber.$touched)}}\" ng-value=$ctrl.redactedAadhaar required disabled=disabled> </div> </div> </div> </div> <div id=NREGAJobCard ng-if=\"$ctrl.model.poiType == 'NREGA Job Card'\"> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=poiNumber>POI Number</label> <div ng-class=\"{'has-error': step11Form.poiNumber.$invalid && ($ctrl.model.submitted || step11Form.poiNumber.$touched)}\"> <input trim type=text id=poiNumber name=poiNumber trim auto-caps class=form-control ng-model=$ctrl.model.poiNumber placeholder=\"Enter NREGA Job Card Number\" aria-describedby=poiNumberErrMsg aria-invalid=\"{{step11Form.poiNumber.$invalid && ($ctrl.model.submitted || step11Form.poiNumber.$touched)}}\" required> </div> <div id=poiNumberErrMsg ng-class=\"{'has-error': step11Form.poiNumber.$invalid}\"> <validation-msg ng-if=\"step11Form.poiNumber.$error.required && (step11Form.poiNumber.$touched || $ctrl.model.submitted)\"> Please enter your NREGA Job Card Number. </validation-msg> <validation-msg ng-if=\"step11Form.poiNumber.$error.pattern && step11Form.poiNumber.$touched\"> Please enter valid NREGA Job Card Number. </validation-msg> </div> </div> </div> </div> </div> <div class=row> <div class=\"col-md-6 col-sm-6 col-xs-12\" ng-if=\"$ctrl.ekyc=='Yes'\"> <div class=\"form-group line-spacer\"> <label for=poaType>Select POA Type</label> <div ng-class=\"{'has-error': step11Form.poaType.$invalid && (step11Form.poaType.$touched || $ctrl.model.submitted)}\"> <custom-select> <select id=poaType name=poaType class=form-control ng-model=$ctrl.model.poaType ng-options=\"item for item in $ctrl.poaType\" aria-describedby=poaTypeErrMsg aria-invalid=\"{{step11Form.poaType.$invalid && (step11Form.poaType.$touched || $ctrl.model.submitted)}}\" disabled=disabled> <option value=\"\">{{$ctrl.poiType[3]}}</option> </select> </custom-select> </div> </div> </div> <div class=\"col-md-6 col-sm-6 col-xs-12\" ng-if=\"$ctrl.ekyc!='Yes'\"> <div class=\"form-group line-spacer\"> <label for=poaType>Select POA Type</label> <div ng-class=\"{'has-error': step11Form.poaType.$invalid && (step11Form.poaType.$touched || $ctrl.model.submitted)}\"> <custom-select> <select id=poaType name=poaType class=form-control ng-model=$ctrl.model.poaType ng-options=\"item for item in $ctrl.poaType\" aria-describedby=poaTypeErrMsg aria-invalid=\"{{step11Form.poaType.$invalid && (step11Form.poaType.$touched || $ctrl.model.submitted)}}\" required> <option value=\"\">Please select</option> </select> </custom-select> </div> <div id=poaTypeErrMsg ng-class=\"{'has-error': step11Form.poaType.$invalid}\"> <validation-msg ng-if=\"step11Form.poaType.$error.required && (step11Form.poaType.$touched || $ctrl.model.submitted)\"> Please select your POA Type. </validation-msg> </div> </div> </div> <div id=passport ng-if=\"$ctrl.model.poaType == 'Passport'\"> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=poaNumber>POA Number</label> <div ng-class=\"{'has-error': step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}\"> <div ng-if=\"$ctrl.model.poiType == 'Passport'\"> <input trim type=text id=poaNumber name=poaNumber ng-init=\"$ctrl.model.poaNumber=$ctrl.model.poiNumber\" trim auto-caps class=form-control ng-model=$ctrl.model.poaNumber alpha-num=8 ng-pattern=/^[A-Z][0-9]{7}$/ ng-maxlength=8 placeholder=\"Enter Passport Number\" aria-describedby=poaNumberErrMsg aria-invalid=\"{{step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}}\" required> </div> <div ng-if=\"$ctrl.model.poiType != 'Passport'\"> <input trim type=text id=poaNumber name=poaNumber trim auto-caps class=form-control ng-model=$ctrl.model.poaNumber alpha-num=8 ng-pattern=/^[A-Z][0-9]{7}$/ ng-maxlength=8 placeholder=\"Enter Passport Number\" aria-describedby=poaNumberErrMsg aria-invalid=\"{{step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}}\" required> </div> </div> <div id=poaNumberErrMsg ng-class=\"{'has-error': step11Form.poaNumber.$invalid}\"> <validation-msg ng-if=\"step11Form.poaNumber.$error.required && (step11Form.poaNumber.$touched || $ctrl.model.submitted)\"> Please enter your Passport Number. </validation-msg> <validation-msg ng-if=\"step11Form.poaNumber.$error.pattern && step11Form.poaNumber.$touched\"> Please enter valid Passport Number. </validation-msg> </div> </div> </div> </div> <div id=voterId ng-if=\"$ctrl.model.poaType == 'Voter Id'\"> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=poaNumber>POA Number</label> <div ng-class=\"{'has-error': step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}\"> <div ng-if=\"$ctrl.model.poiType == 'Voter Id'\"> <input trim type=text id=poaNumber name=poaNumber ng-init=\"$ctrl.model.poaNumber=$ctrl.model.poiNumber\" trim auto-caps class=form-control ng-model=$ctrl.model.poaNumber alpha-num=10 ng-pattern=/^([a-zA-Z]){3}([0-9]){7}$/ ng-maxlength=10 placeholder=\"Enter Voter Id\" aria-describedby=poaNumberErrMsg aria-invalid=\"{{step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}}\" required> </div> <div ng-if=\"$ctrl.model.poiType != 'Voter Id'\"> <input trim type=text id=poaNumber name=poaNumber trim auto-caps class=form-control ng-model=$ctrl.model.poaNumber alpha-num=10 ng-pattern=/^([a-zA-Z]){3}([0-9]){7}$/ ng-maxlength=10 placeholder=\"Enter Voter Id\" aria-describedby=poaNumberErrMsg aria-invalid=\"{{step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}}\" required> </div> </div> <div id=poaNumberErrMsg ng-class=\"{'has-error': step11Form.poaNumber.$invalid}\"> <validation-msg ng-if=\"step11Form.poaNumber.$error.required && (step11Form.poaNumber.$touched || $ctrl.model.submitted)\"> Please enter your Voter Id. </validation-msg> <validation-msg ng-if=\"step11Form.poaNumber.$error.pattern && step11Form.poaNumber.$touched\"> Please enter valid Voter Id. </validation-msg> </div> </div> </div> </div> <div id=DrivingLicense ng-if=\"$ctrl.model.poaType == 'Driving License'\"> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=poaNumber>POA Number</label> <div ng-class=\"{'has-error': step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}\"> <div ng-if=\"$ctrl.model.poiType == 'Driving License'\"> <input trim type=text id=poaNumber name=poaNumber ng-init=\"$ctrl.model.poaNumber=$ctrl.model.poiNumber\" trim auto-caps class=form-control ng-model=$ctrl.model.poaNumber ng-pattern=\"/^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/\" ng-maxlength=16 placeholder=\"Enter Driving License Number\" aria-describedby=poaNumberErrMsg aria-invalid=\"{{step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}}\" required> </div> <div ng-if=\"$ctrl.model.poiType != 'Driving License'\"> <input trim type=text id=poaNumber name=poaNumber trim auto-caps class=form-control ng-model=$ctrl.model.poaNumber ng-pattern=\"/^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/\" ng-maxlength=16 placeholder=\"Enter Driving License Number\" aria-describedby=poaNumberErrMsg aria-invalid=\"{{step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}}\" required> </div> </div> <div id=poaNumberErrMsg ng-class=\"{'has-error': step11Form.poaNumber.$invalid}\"> <validation-msg ng-if=\"step11Form.poaNumber.$error.required && (step11Form.poaNumber.$touched || $ctrl.model.submitted)\"> Please enter your Driving License Number. </validation-msg> <validation-msg ng-if=\"step11Form.poaNumber.$error.pattern && step11Form.poaNumber.$touched\"> Please enter valid Driving License Number. </validation-msg> </div> </div> </div> </div> <div id=AadharCard ng-if=\"$ctrl.model.poaType == 'Aadhar Card' && $ctrl.ekyc !='Yes'\"> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=poaNumber>POA Number</label> <div ng-class=\"{'has-error': step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}\"> <div ng-if=\"$ctrl.model.poiType == 'Aadhar Card'\"> <input trim type=text id=poaNumber name=poaNumber ng-init=\"$ctrl.model.poaNumber=$ctrl.model.poiNumber\" trim auto-caps class=form-control ng-model=$ctrl.model.poaNumber only-number=4 ng-pattern=/^[0-9]{4}$/ ng-maxlength=16 placeholder=\"Enter Last 4 Digit of Aadhar\" aria-describedby=poaNumberErrMsg aria-invalid=\"{{step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}}\" required> </div> <div ng-if=\"$ctrl.model.poiType != 'Aadhar Card'\"> <input trim type=text id=poaNumber name=poaNumber trim auto-caps class=form-control ng-model=$ctrl.model.poaNumber only-number=4 ng-pattern=/^[0-9]{4}$/ ng-maxlength=16 placeholder=\"Enter Last 4 Digit of Aadhar\" aria-describedby=poaNumberErrMsg aria-invalid=\"{{step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}}\" required> </div> </div> <div id=poaNumberErrMsg ng-class=\"{'has-error': step11Form.poaNumber.$invalid}\"> <validation-msg ng-if=\"step11Form.poaNumber.$error.required && (step11Form.poaNumber.$touched || $ctrl.model.submitted)\"> Please enter your Last 4 Digit of Aadhar. </validation-msg> <validation-msg ng-if=\"step11Form.poaNumber.$error.pattern && step11Form.poaNumber.$touched\"> Please enter valid Last 4 Digit of Aadhar. </validation-msg> </div> </div> </div> </div> <div id=AadharCard ng-if=\"$ctrl.ekyc=='Yes'\"> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=poaNumber>POA Number</label> <div ng-class=\"{'has-error': step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}\"> <div ng-if=\"$ctrl.ekyc=='Yes'\"> <input trim type=text id=poaNumber name=poaNumber ng-init=\"$ctrl.model.poaNumber=$ctrl.model.poiNumber\" trim auto-caps class=form-control ng-model=$ctrl.model.poaNumber only-number=4 ng-pattern=/^[0-9]{4}$/ ng-maxlength=16 placeholder=\"Enter Last 4 Digit of Aadhar\" aria-describedby=poaNumberErrMsg aria-invalid=\"{{step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}}\" ng-value=$ctrl.redactedAadhaar required disabled=disabled> </div> <div ng-if=\"$ctrl.ekyc!='Yes'\"> <input trim type=text id=poaNumber name=poaNumber trim auto-caps class=form-control ng-model=$ctrl.model.poaNumber only-number=4 ng-pattern=/^[0-9]{4}$/ ng-maxlength=16 placeholder=\"Enter Last 4 Digit of Aadhar\" aria-describedby=poaNumberErrMsg aria-invalid=\"{{step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}}\" required> </div> </div> </div> </div> </div> <div id=NREGAJobCard ng-if=\"$ctrl.model.poaType == 'NREGA Job Card'\"> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=poaNumber>POA Number</label> <div ng-class=\"{'has-error': step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}\"> <div ng-if=\"$ctrl.model.poiType == 'NREGA Job Card'\"> <input trim type=text id=poaNumber name=poaNumber ng-init=\"$ctrl.model.poaNumber=$ctrl.model.poiNumber\" trim auto-caps class=form-control ng-model=$ctrl.model.poaNumber placeholder=\"Enter NREGA Job Card Number\" aria-describedby=poaNumberErrMsg aria-invalid=\"{{step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}}\" required> </div> <div ng-if=\"$ctrl.model.poiType != 'NREGA Job Card'\"> <input trim type=text id=poaNumber name=poaNumber trim auto-caps class=form-control ng-model=$ctrl.model.poaNumber placeholder=\"Enter NREGA Job Card Number\" aria-describedby=poaNumberErrMsg aria-invalid=\"{{step11Form.poaNumber.$invalid && ($ctrl.model.submitted || step11Form.poaNumber.$touched)}}\" required> </div> </div> <div id=poaNumberErrMsg ng-class=\"{'has-error': step11Form.poaNumber.$invalid}\"> <validation-msg ng-if=\"step11Form.poaNumber.$error.required && (step11Form.poaNumber.$touched || $ctrl.model.submitted)\"> Please enter your NREGA Job Card Number. </validation-msg> <validation-msg ng-if=\"step11Form.poaNumber.$error.pattern && step11Form.poaNumber.$touched\"> Please enter valid NREGA Job Card Number. </validation-msg> </div> </div> </div> </div> </div> <hr class=line-spacer> </div> <div> <div ng-if=!$ctrl.hubSalaryFlag> <div class=row> <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-12\"> <label> <input type=radio ng-model=$ctrl.selectedOption ng-value=\"'SAA'\" ng-change=$ctrl.checkStuff($ctrl.selectedOption) ng-disabled=$ctrl.hidesecondoption> Share using Account Aggregator <br> <font size=1> (By choosing this option you do not need to upload any income document)</font> </label> </div> <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-12\"> <label> <input type=radio ng-model=$ctrl.selectedOption ng-value=\"'MDU'\" ng-change=$ctrl.checkStuff($ctrl.selectedOption) ng-disabled=$ctrl.hidesecondoption> Manual Document Upload </label> </div> </div> </div> <div class=row ng-if=$ctrl.reloadFileUpload style=margin-top:20px> <div class=\"col-md-3 col-lg-3 col-sm-6 col-xs-12\" ng-class=\"{'line-spacer-xs': !$first}\" ng-repeat=\"file in $ctrl.model.incomeDocs\"> <file-upload index=$index submitted=$ctrl.model.submitted file-id=\"{{'file'+$index}}\" file=file on-remove=$ctrl.removeDoc(index) ng-class=\"{ 'disabled': $ctrl.hidesecondoption }\" on-validation-error=$ctrl.handleValidationError(index)></file-upload> </div> <div ng-if=\"$ctrl.model.incomeDocs[$ctrl.model.incomeDocs.length-1].document && $ctrl.model.incomeDocs.length < $ctrl.maxDocs\" class=\"col-md-3 col-lg-3 col-sm-6 col-xs-12\"> <div class=upload-add-container> <div class=inner-add-section> <div class=button-label ng-click=$ctrl.addIncomeDoc()> <span class=\"icon icon-add add-remove-toogle__icon\"></span> <span class=add-remove-toogle__linkText>Add another document</span> </div> </div> </div> </div> </div> </div> <br> <div ng-if=!$ctrl.isStaffJourney> <h2 class=\"h5 no-margin-t\"> <ul class=note> <li> Please upload latest salary slip </li> <li> If you are employed in a private company, please also upload bank statement having latest salary credit </li> </ul> </h2> <h2 class=h5> <b>Note:</b> </h2> <ul class=note> <li> The supported document formats are .png, .jpg, .jpeg, .pdf and each document should not be more than 3MB in size. </li> <li> Do remember to upload both front and back of documents. </li> </ul> </div> <div class=row ng-if=$ctrl.isStaffJourney> <div class=\"col-md-9 col-sm-12 col-xs-12\"> <h2 class=\"h5 no-margin-t\">For income documents, you can upload any of the following</h2> <ul> <li> Salaried: <br> <br> <ul> <li> Form 16 </li> <li>Salary Slip / Salary certificate / Bank statement showing salary credit</li> <li>Appointment letter</li> <li>Latest Personal ITR</li> </ul> </li> <li> Self Employed - Latest personal income tax returns </li> </ul> </div> <div class=\"col-md-9 col-sm-12 col-xs-12\"> <h2 class=h5> <b>Note:</b> </h2> <ul class=note> <li> The supported document formats are .png, .jpg, .jpeg, .pdf and each document should not be more than 3MB in size </li> <li> A maximum of 10 documents can be uploaded. </li> <li> Do remember to upload both front and back of documents </li> <li>Please keep all the documents ready at the time of meeting bank representative</li> </ul> </div> </div> <div ng-if=false> <div class=\"col-md-12 col-sm-12 col-xs-12\"> <div class=table-container> <table> <thead> <tr> <th>Month</th> <th ng-repeat=\"data in $ctrl.salary\">{{ data.month }}</th> <th>Average</th> <th>Annual</th> <th>Final</th> <th>Variance</th> </tr> </thead> <tbody> <tr> <td>Salary</td> <td ng-repeat=\"data in $ctrl.salary\">{{ data.salary }}</td> <td>{{$ctrl.averageSalary}}</td> <td>{{$ctrl.annualSalary | number : 2}}</td> <td><input type=number ng-model=$ctrl.finalAnnualIncome ng-keyup=$ctrl.update($ctrl.finalAnnualIncome,$ctrl.annualSalary) placeholder={{$ctrl.annualSalary|number:2}}> <div ng-class=\"'has-error'\"> <validation-msg ng-if=$ctrl.varianceValidation> Please Enter Final in between 0 to 10 Variance. </validation-msg> </div> </td> <td ng-disabled=true>{{$ctrl.variance?$ctrl.variance:00 | number : 2}}%</td> </tr> </tbody> </table> </div> </div> </div> <div class=row> <div class=\"col-md-12 col-sm-12 col-xs-12\" ng-class=\"{'has-error': (($ctrl.incomeDocReq || $ctrl.validationError.noGroup ) && $ctrl.model.submitted) \r\n                    || $ctrl.validationError.minSize || $ctrl.validationError.maxSize || $ctrl.validationError.format  \r\n                    || $ctrl.nameMissmatch || !$ctrl.isSalrayAndBank}\"> <validation-msg ng-if=\"($ctrl.incomeDocReq && $ctrl.model.submitted && !$ctrl.hubSalaryFlag && !$ctrl.noDoccumentUploadHPR)\"> <span class=font-14> Please upload your documents to continue with your application. </span> </validation-msg> <validation-msg ng-if=\"$ctrl.validationError.maxSize && !$ctrl.incomeDocReq\"> <span class=font-14> Please upload maximum 3 MB of document to continue with your application.</span> </validation-msg> <validation-msg ng-if=\"$ctrl.validationError.format && !$ctrl.incomeDocReq\"> <span class=font-14> Please upload jpg/jpeg/png/pdf type of document to continue with your application.</span> </validation-msg> <validation-msg ng-if=\"($ctrl.validationError.noGroup && $ctrl.model.submitted) && !$ctrl.incomeDocReq\"> <span class=font-14> Please select document group to continue with your application.</span> </validation-msg> <validation-msg ng-if=\"(!$ctrl.isSalrayAndBank ) && $ctrl.model.submitted && !$ctrl.incomeDocReq && !$ctrl.noDoccumentUploadHPR\"> <span class=font-14> Please upload Bank Statement/Salary Slip.</span> </validation-msg> </div> </div> <step-footer show-verify=$ctrl.verifyAAFlag verify-callback=$ctrl.verifyAA() show-continue=$ctrl.showContinue continue-disabled=!$ctrl.disabledContinue continue-callback=$ctrl.next() show-back=true back-callback=$ctrl.goback() show-save=true save-callback=$ctrl.save()> </step-footer> </form> </div> </div> <loading ng-show=$ctrl.showLoader></loading> ";

/***/ }),

/***/ "./src/app/components/journey/step11/step11.component.js":
/* unknown exports provided */
/* all exports used */
/*!***************************************************************!*\
  !*** ./src/app/components/journey/step11/step11.component.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    __webpack_require__(/*! ./step11.component.scss */ "./src/app/components/journey/step11/step11.component.scss");
    __webpack_require__(/*! ./step11.component.service */ "./src/app/components/journey/step11/step11.component.service.js");
    __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/components/journey/step11/file-upload/file-upload.component.js");
    __webpack_require__(/*! ./openBankingModal/openBankingModal.modal.component */ "./src/app/components/journey/step11/openBankingModal/openBankingModal.modal.component.js");// line added for OB @akshaypise march24

    var step11Comp = angular.module('journey.module').component('step11', {
        template: __webpack_require__(/*! ./step11.component.html */ "./src/app/components/journey/step11/step11.component.html"),
        controller: ['$rootScope', '$scope', '$uibModal', '$anchorScroll', '$state', '$filter', '$q', 'step11Service', 'appState', 'journeyService', 'analyticService', '$timeout', function ($rootScope, $scope, $uibModal, $anchorScroll, $state, $filter, $q, step11Service, appState, journeyService, analyticService, $timeout) {
            var vm = this;
            vm.securityParams = {   //add this varible as global @akshaypise OpenBanking
                robocheck: vm.robocheck ? vm.robocheck : ''
            };
            vm.$onInit = function () {
                $rootScope.$broadcast('hide-step-header', {
                    hideHeader: false
                });
                $rootScope.showSelectedCard = true;
                $rootScope.showARN = true;
                $anchorScroll();
                $rootScope.stepsHeader.currentStep = 4;
                vm.incomeDocReq = false;
                vm.incomeDocOBReq = true;
                vm.virusCheck = false;
                vm.isStaffJourney = journeyService.isStaffJourney();
                //console.log("isStaffJourney from contact details =======", vm.isStaffJourney);
                vm.selectedCard = journeyService.getSelectedCard();
                vm.ekycFlag = journeyService.getDataFromStorage().primaryApplicant.ekycFlag;
                vm.disabledContinue = false;
                vm.noDoccumentUpload = false;
                vm.noDoccumentUploadHPR = false;
                vm.reloadFileUpload = false;
                vm.hubSalaryFlag = appState.getHubSalaryFlag() === 'success'; //added @akshaypise sep2024 CSS-1
                // vm.hubSalaryFlag = true;
                console.log( "hubSalaryFlag11",vm.hubSalaryFlag);

                if (vm.hubSalaryFlag) {
                    vm.reloadFileUpload = true;
                    // vm.checkStuff('MDU');
                    // vm.selectedOption = 'MDU';
                    // vm.hidesecondoption = true;
                    vm.disabledContinue = true;
                    vm.noDoccumentUpload = true;
                }
                // console.log("vm.ekycFlag =======", vm.ekycFlag);
                // vm.maxDocs = vm.isStaffJourney ? 6 : 2;
                vm.maxDocs = 10;
                vm.validationError = {};
                vm.model = {};
                //start added for OB @akshaypise march24.
                vm.verifyAAFlag = false;
                vm.showLoader = false;
                vm.showContinue = true;

                // vm.validation_BankSte_SalarySlip = false;
                vm.nameMissmatch = false;
                vm.hidesecondoption;    //hide the second radio button @akshaypise OpenBanking
                // vm.averageSalary = 0;
                vm.annualSalary;
                // vm.variance;
                vm.salary = [];
                vm.tableshow = false;
                vm.hideOBCheckbox = false;
                vm.incomeDocOBReq = true;
                vm.selectedFileforMDU = null;
                vm.model.successMsg = null;
                vm.OBCheckbox = false;
                //end added for OB @akshaypise march24.
                step11Service.getUserDetails().then(function (result) {
                    vm.model = result;
                    vm.model.incomeDoc = vm.model.incomeDoc ? vm.model.incomeDoc : false;
                });
                vm.model.errorMsg = null;
                //arun
                vm.PerfiosSkip = journeyService.getPerfiosSkip();
                var contactData = appState.getContactDetails();
                vm.ekyc = contactData.ekyc;
                // vm.ekyc = "test";
                // console.log("Ekyc from contact details =======", vm.ekyc);
                vm.redactedAadhaar = journeyService.getDataFromStorage().primaryApplicant.redactedAadhaar;//can be put in if condition of ekyc yes/no
                // console.log("Redacted aadhaar =======", vm.redactedAadhaar);
                vm.poiType = ['Passport', 'Voter Id', 'Driving License', 'Aadhar Card', 'NREGA Job Card'];
                vm.poaType = ['Passport', 'Voter Id', 'Driving License', 'Aadhar Card', 'NREGA Job Card'];
                // alert('vm.PerfiosSkip==='+vm.PerfiosSkip);
                //alert('skipPerfios======='+vm.model.skipPerfios);
                $rootScope.dipARN = journeyService.getDataFromStorage().primaryApplicant.dipDetails.dipArn;
                analyticService.pageList.documentUpload.internal_reference_id = journeyService.getDataFromStorageContact().adobeId;
                analyticService.trackPageLoad(analyticService.pageList.documentUpload);
            };

            // $rootScope.$on("on-document-selected", function () {
            //     if (vm.model.incomeDocs[0].isEmpty()) {
            //         vm.incomeDocReq = true;
            //     } else {
            //         vm.incomeDocReq = false;
            //     }
            // });

            vm.goback = function () {
                // saveFormDetailsInStorage();
                if (step11Service.supplementaryCardApplied) {
                    $state.go('app.journey.supplementary', { 'cardKey': vm.selectedCard.key });
                } else if (step11Service.balanceTransferTaken) {
                    $state.go('app.journey.balance-transfer', { 'cardKey': vm.selectedCard.key });
                } else {
                    $state.go('app.journey.card-DIP', { 'cardKey': vm.selectedCard.key });
                }
                analyticService.buttonList.buttonClick.event_content = "back";
                analyticService.trackUserAction(analyticService.buttonList.buttonClick);
            };

            var saveFormDetailsInStorage = function () {
                var formDetails = {
                    "primaryApplicant": {
                        "documents": prepareData()
                    }
                };
                step11Service.setDataInStorage(formDetails);
            };

            vm.addIncomeDoc = function () {
                // vm.incomeDoc++;
                if (vm.model.incomeDocs.length < vm.maxDocs) {
                    vm.model.incomeDocs.push(new step11Service.IncomeDoc());
                }
            };

            vm.removeDoc = function (index) {
                vm.model.incomeDocs.splice(index, 1);
                if (vm.model.incomeDocs.length === 0) {
                    vm.addIncomeDoc();
                }
                // angular.forEach(vm.model.incomeDocs, function (doc, index) {
                //     if (!doc.isEmpty()) {
                //         doc.documentName = "IncomeDocument" + (index + 1);
                //     }
                // });
            };

            vm.handleValidationError = function (index) {
                var errIndex = 0;
                for (var i = 0; i < vm.model.incomeDocs.length; i++) {
                    if (i !== index || index === undefined) {
                        vm.model.incomeDocs[i].resetValidationError();
                    }
                    if (vm.model.incomeDocs[i].hasValidationError()) {
                        // vm.validationError = vm.model.incomeDocs[i].validationError;
                        errIndex = i;
                        break;
                    }
                }
                vm.validationError = vm.model.incomeDocs[errIndex].validationError;
            };

            var prepareData = function () {
                var incomeDocs = angular.copy(vm.model.incomeDocs);
                incomeDocs = $filter('filter')(incomeDocs, function (doc) {
                    return !doc.isEmpty();
                });
                var documents = null;
                if (incomeDocs.length > 0) {
                    documents = incomeDocs.map(function (doc) {
                        if (doc.document != "") {
                            var arr = doc.document.split(',');
                            if (arr.length > 1) {
                                doc.document = arr[1];
                            }
                        }
                        return {
                            document: doc.document, documentName: doc.documentName, documentGroup: doc.documentGroup, documentType: doc.documentType,
                            documentPassword: (doc.docPassword) ? doc.docPassword : null
                        };
                    });
                    renameDocuments(documents);
                }
                return documents;
            };

            var renameDocuments = function (documentArray) {
                var docIndexArr = documentArray.map(function (doc, index) {
                    return angular.merge({}, doc, { index: index })
                });

                step11Service.getDocumentGroups().forEach(function (group) {
                    var tempArr = docIndexArr.filter(function (x) { return x.documentGroup === group });
                    if (tempArr.length > 0) {
                        tempArr.forEach(function (z, i) {
                            z.documentName = step11Service.documentName[z.documentGroup] + '-' + (i + 1);
                            var originalIndex = z.index;
                            delete z.index;
                            documentArray[originalIndex] = z;
                        })
                    }
                });
            };

            // vm.update = function (finalChangeSalary, AnnualSalary) { //funtion added for OB akshaypise April2024
            //     vm.variance = ((finalChangeSalary - AnnualSalary) / AnnualSalary) * 100;
            //     vm.varianceValidation = (vm.variance >= 11 || vm.variance <= 0);

            //     if (vm.variance === 0 || vm.variance === -100) {
            //         vm.showContinue = true;
            //         vm.varianceValidation = false;
            //         vm.variance = 0;
            //     }
            //     return true;
            // }

            vm.checkStuff = function (value) {  //funtion added for OB akshaypise April2024 
                //console.log("valueOBBBB--->", value)
                vm.radiBouttonValue = value;
                value === "MDU" ? ( vm.reloadFileUpload = true, appState.setHubSalaryFlag('fail')) : ''
                console.log("value-->",value);
                vm.uploadBankStatementFlag = value === "SAA" ? false : true;

                vm.disabledContinue = value === "SAA" ? false : true;

                value === "SAA" ? vm.openBankingModal() : console.log("vm.selectedFileforMDU", vm.selectedFileforMDU);

                //console.log("vm.disabledContinue", vm.disabledContinue);
                //console.log("vm.uploadBankStatementFlag", vm.uploadBankStatementFlag);
                console.log(value);
            };
            vm.openBankingModal = function () {//funtion added for OB akshaypise April2024

                vm.reloadFileUpload = false;

                //console.log("vm.OBCheckbox", vm.OBCheckbox);
                var modalConsentInstance = $uibModal.open({
                    backdrop: 'static',
                    keyboard: false,
                    modalFade: true,
                    component: "openBankingModal",
                    windowClass: 'card-detail-modal'
                });

                modalConsentInstance.result.then(function (isSelected) {
                    if (isSelected) {
                        //console.log("vm.OBCheckbox", vm.OBCheckbox);
                        vm.getOpenBankingURLlink();
                        // step11Service.getOpenBankingURLlink(vm.securityParams).then(function (result) {
                        //     console.log("result from getOpenBankingURLlink back==", JSON.stringify(result));
                        //     if (result.responseCode == 200) {
                        //         console.log("result.redirectUrl responseCode 200", result.redirectUrl);
                        //         var url = result.redirectUrl;
                        //         vm.disabledContinue = false;
                        //         vm.verifyAAFlag = true;
                        //         vm.showContinue = false;
                        //         function openCenteredWindow(url, width, height) {
                        //             const screenWidth = window.screen.width;
                        //             const screenHeight = window.screen.height;
                        //             const left = (screenWidth - width) / 2;
                        //             const top = (screenHeight - height) / 2;
                        //             window.open(url, "_blank", `width=${width},height=${height},left=${left},top=${top}`);
                        //         }
                        //         openCenteredWindow(url, 1024, 786);
                        //         vm.hidesecondoption = true;
                        //     }
                        //     else {
                        //         vm.checkStuff('MDU');
                        //         vm.selectedOption = 'MDU';
                        //         vm.hidesecondoption = false;
                        //         // vm.model.errorMsg="Sorry! Some internal error has occured";
                        //         vm.model.errorMsg = result.responseMessage;
                        //         vm.model.errorMsg = (result.success == false) ? result.message : result.responseMessage;
                        //         $timeout(function () {
                        //             vm.model.errorMsg = false;
                        //         }, 10000);
                        //     }
                        // })

                        //new
                        // step11Service.getOpenBankingURLlink(vm.securityParams).then(function (result) {
                        //     console.log("result from getOpenBankingURLlink back==", JSON.stringify(result));
                        //     if (result.responseCode == 200) {
                        //         console.log("result.redirectUrl responseCode 200", result.redirectUrl);
                        //         var url = result.redirectUrl;
                        //         vm.disabledContinue = false;
                        //         vm.verifyAAFlag = true;
                        //         vm.showContinue = false;
                        //         function openCenteredWindow(url, width, height) {
                        //             const screenWidth = window.screen.width;
                        //             const screenHeight = window.screen.height;
                        //             const left = (screenWidth - width) / 2;
                        //             const top = (screenHeight - height) / 2;
                        //             window.open(url, "_blank", `width=${width},height=${height},left=${left},top=${top}`);
                        //         }
                        //         openCenteredWindow(url, 1024, 786);
                        //         vm.hidesecondoption = true;
                        //     }
                        //     else {
                        //         console.log("result.other responseCode found");
                        //         // vm.checkStuff('MDU'); // remove for new changes
                        //         // vm.selectedOption = 'MDU'; // remove for new changes
                        //         vm.OBCheckbox = false;
                        //         vm.hidesecondoption = false;
                        //         // vm.model.errorMsg="Sorry! Some internal error has occured";
                        //         // vm.model.errorMsg=result.responseMessage;
                        //         vm.model.errorMsg = (result.success == false) ? result.message : "Sorry! Seems Account Aggregator Service is Unavailable. Please try after sometime.";
                        //         $timeout(function () {
                        //             vm.model.errorMsg = false;
                        //         }, 10000);
                        //     }
                        // });

                    }
                }, function (isDeSelected) {
                    // vm.hideDocUpload = false;
                    vm.OBCheckbox = false;
                    vm.selectedOption = '';
                    vm.disabledContinue = false;
                    //console.log("vm.OBCheckbox", vm.OBCheckbox);
                });
            };

            vm.getOpenBankingURLlink = function () {
                step11Service.getOpenBankingURLlink(vm.securityParams).then(function (result) {
                    console.log("result from getOpenBankingURLlink back==", (result));

                    if (result.responseCode == 200) {
                        // vm.hideDocUpload = true;

                        //console.log("result.redirectUrl responseCode 200", result.redirectUrl);
                        var url = result.redirectUrl;
                        vm.disabledContinue = false;
                        vm.verifyAAFlag = true;
                        vm.showContinue = false;

                        //console.log(vm.model.incomeDocs);

                        function removeDocuments(incomeDocs) {
                            var result = []; // Array to hold the remaining documents
                            for (var i = 0; i < incomeDocs.length; i++) {
                                // Check if the documentGroup is neither "Bank Statement" nor "Salary Slip"
                                if (incomeDocs[i].documentGroup !== "Bank Statement" && incomeDocs[i].documentGroup !== "Salary Slip") {
                                    result.push(incomeDocs[i]); // Add to result if it should not be removed
                                }
                            }

                            return result; // Return the new array
                        }
                        vm.model.incomeDocs = removeDocuments(vm.model.incomeDocs);

                        //console.log(vm.model.incomeDocs);

                        function openCenteredWindow(url, width, height) {
                            const screenWidth = window.screen.width;
                            const screenHeight = window.screen.height;
                            const left = (screenWidth - width) / 2;
                            const top = (screenHeight - height) / 2;
                            window.open(url, "_blank", `width=${width},height=${height},left=${left},top=${top}`);
                        }
                        openCenteredWindow(url, 1024, 786);
                        vm.hidesecondoption = true;
                    }
                    else {

                        vm.checkStuff('MDU');
                        vm.selectedOption = 'MDU';
                        vm.hidesecondoption = false;
                        // vm.model.errorMsg="Sorry! Some internal error has occured";
                        vm.model.errorMsg = result.responseMessage;
                        vm.model.errorMsg = (result.success == false) ? result.message : result.responseMessage;
                        $timeout(function () {
                            vm.model.errorMsg = false;
                        }, 10000);
                    }
                })
            }
            vm.verifyAA = function () { //funtion added for OB akshaypise April2024
                vm.showLoader = true;
                $rootScope.$broadcast("trigger-verification-loader", {
                    showLoader: true,
                    showCard: false,
                    loaderType: "ANUMATI",
                });

                $timeout(function () {

                    var reqData = {
                        "reqCounter": 1
                    }
                    // step11Service.sendConsentData(reqData, vm.securityParams).then(function (result) {
                    
                    //     console.log('Response code ===', result);
                    //     console.log("stop3")
                    //     // if(!result.success){
                    //     // 200- consent Ready ,and salary details ready   
                    //     // 201- consent is rejected
                    //     // 202- consent not received
                    //     // 203- report is not ready    --Retry
                    //     // 204- report status : error i.e datafetch ,data processing error....stop timer
                    //     // 205- TXNID is not present in db
                    //     // }
                    //     vm.showLoader = false;
                    //     vm.showContinue = true;
                    //     vm.verifyAAFlag = false;
                    //     vm.disabledContinue = true;
                    //     if (result.responseCode == 200) {
                    //         vm.model.successMsg = result.fetchReportDetailsResponse.responseMessage;
                    //         vm.salary = result.fetchReportDetailsResponse.salaryDetails;
                    //         vm.averageSalary = result.fetchReportDetailsResponse.averageSalary;
                    //         vm.annualSalary = result.fetchReportDetailsResponse.annualSalary;
                    //         vm.tableshow = true;
                    //         $timeout(function () {
                    //             vm.model.successMsg = false;
                    //         }, 7000);
                    //     } else {
                    //         vm.checkStuff('MDU');
                    //         vm.selectedOption = 'MDU';
                    //         vm.hidesecondoption = false;

                    //         if (result.responseCode == 204) {
                    //             // Specific actions for responseCode 204
                    //             vm.model.errorMsg = result.fetchReportDetailsResponse.responseMessage;
                    //         } else {
                    //             // Actions for other responseCodes
                    //             vm.model.errorMsg = (result.responseCode === 201 || result.responseCode === 202) ?
                    //                 "It seems you have not Approved the consent on Anumati page. Please proceed with Manual Document Upload." :
                    //                 (result.responseCode === 203) ? result.fetchReportDetailsResponse.responseMessage : result.message;
                    //         }
                    //         $timeout(function () {
                    //             vm.model.errorMsg = false;
                    //         }, 10000);
                    //     }
                    // });


                    //new
                    step11Service.sendConsentData(reqData, vm.securityParams).then(function (result) {
                       
                        console.log('Response code ===', result);
                        vm.showLoader = false;
                        vm.showContinue = true;
                        vm.verifyAAFlag = false;
                        vm.disabledContinue = true;
                        if (result.responseCode == 200) {
                            //console.log("result", result);
                            if (result.aaRejectReason || result.fetchReportDetailsResponse.annualSalary == 0) {
                                // vm.model.successMsg = "not fetach deatils, please upload salary slip/bank statement"
                                vm.model.successMsg = "It seems your Salary Details could not be fetched. Please upload Salary Slip or Bank Statement."
                                vm.nameMissmatch = true;
                                vm.checkStuff('MDU');
                                vm.selectedOption = 'MDU';
                                // vm.hideDocUpload = false; 
                            } else {
                                // vm.model.successMsg = result.fetchReportDetailsResponse.responseMessage;
                                vm.model.successMsg = "Report is COMPLETED. please click on continue button for next process.";
                                appState.setHubSalaryFlag('success');
                                // vm.checkStuff('SAA');
                                vm.selectedOption = 'SAA';
                                vm.hideDocUpload = true;
                                vm.reloadFileUpload = true;
                                vm.noDoccumentUpload = true;
                            }
                            // vm.hideOBCheckbox = true;
                            $timeout(function () {
                                vm.model.successMsg = false;
                            }, 15000);
                            vm.annualSalary = result.fetchReportDetailsResponse.annualSalary;

                        } else if (result.responseCode == 205 || result.responseCode == 206) {
                            $state.go('app.card-declined', { 'cardKey': vm.selectedCard.key });
                            //console.log("result.responseCode---->", result.responseCode);
                            // result.responseCode == 205 ? appState.setOBPanNameFlag(true) : appState.setOBPanNameFlag(false);
                           
                            // (result.responseCode == 205) ? appState.setPanMissMatchFlag(true) : appState.setPanMissMatchFlag(false);
                            // (result.responseCode == 206) ? appState.setPanNameMissMatchFlag(true) : appState.setPanNameMissMatchFlag(false);
                            // $state.go('app.card-declinedOB', { 'cardKey': vm.selectedCard.key });
                            // } else if(result.responseCode == 207){
                        }else if (result.responseCode == 204) {
                            vm.checkStuff('MDU');
                            vm.selectedOption = 'MDU';
                            vm.model.errorMsg = result.fetchReportDetailsResponse.responseMessage;
                            //console.log("result.responseCode 204---->", result.responseCode);
                        } else {
                            // Actions for other responseCodes
                            vm.OBCheckbox = false;
                            // vm.checkStuff('MDU');
                            // vm.selectedOption = 'MDU';
                            // vm.hidesecondoption = false;
                            if (result.responseCode === 201 || result.responseCode === 202 || result.responseCode === 203) {
                                vm.selectedOption = ' ';
                                vm.hidesecondoption = false;
                                vm.disabledContinue = false;
                            }
                            vm.model.errorMsg = (result.responseCode === 201 || result.responseCode === 202)
                                    ? "It seems you have not Approved the consent on Anumati page."
                                    : result.responseCode === 203 ? result.fetchReportDetailsResponse.responseMessage : result.message;
                            $timeout(function () {
                                vm.model.errorMsg = false;
                            }, 10000);
                        }
                    });
                    analyticService.buttonList.buttonClick.event_content = "continue";
                    analyticService.trackUserAction(analyticService.buttonList.buttonClick);
                }, 5000);
            }


            vm.next = function (result) {

                // 
                // 
                // 
                // 
                // vm.boilerflag = false;
                // var documents = null;
                // if (vm.isStaffJourney) {

                    //console.log(vm.selectedCard.key);
                //     var incomeDocs = angular.copy(vm.model.incomeDocs);

                //     if (incomeDocs.length > 0) {
                //         documents = incomeDocs.map(function (doc, index) {

                //         });
                //     }
                // }

                // if (vm.model.incomeDocs[0].isEmpty()) {
                //     vm.incomeDocReq = true;
                // } else {
                //     vm.incomeDocReq = false;
                // }

                // vm.model.incomeDocs.some(function (doc) {
                //     if(doc.documentGroup === "Others (Optional)"){
                //         var incomeDocs = angular.copy(vm.model.incomeDocs);
                //         console.log(incomeDocs);

                //         if(incomeDocs.length > 1){

                //             vm.incomeDocReq = false;
                //         }else{
                //             vm.incomeDocReq = true;
                //         }
                //     } 
                // });

                // vm.validation_BankSte_SalarySlip = vm.model.incomeDocs.some(function (doc) { // validation check for bankStatement/salarySlip as PDF @akshaybspise 15 jun
                //     //    pDF validation
                //     if (doc.documentGroup === "Bank Statement (pdf)" || doc.documentGroup === "Salary Slip") {
                //         return doc.documentType !== "application/pdf";
                //     }
                //     return false;
                // });

                // if (vm.nameMissmatch) {
                //     vm.incomeDocReq = vm.model.incomeDocs.some(function (doc) {
                //         return doc.documentGroup != "Salary Slip";
                //     });
                //      vm.model.errorMsg = "Please upload Salary Slip as PDF format."
                //     console.log("vm.nameMissmatch", vm.nameMissmatch);
                //     $timeout(function () {
                //         vm.model.errorMsg = false;
                //     }, 10000);
                // }
                // vm.handleValidationError();
                // var isValidationError = vm.validationError.maxSize || vm.validationError.minSize || vm.validationError.format || vm.validationError.noGroup;
                //     if ((!vm.validation_BankSte_SalarySlip && !vm.incomeDocReq && !isValidationError) || (vm.calculatedSalaryFlag && vm.ekyc == "Yes")) {//funtion Or condition for CCS akshaypise April2024




                var incomeDocs = angular.copy(vm.model.incomeDocs);

                if (incomeDocs.length > 0) {
                    function validateIncomeDocs(incomeDocs) {
                        // Check if at least one document is either "Bank Statement (pdf)" or "Salary Slip"
                        return incomeDocs.some(function (doc) {
                            return doc.documentGroup === "Bank Statement" || doc.documentGroup === "Salary Slip";
                        });
                    }
                    if (!validateIncomeDocs(incomeDocs)) {
                        // console.error('At least one document must be either a Bank Statement (pdf) or a Salary Slip.');
                        vm.isSalrayAndBank = false;
                    } else {
                        vm.isSalrayAndBank = true;
                    }

                }
                if (vm.model.incomeDocs[0].isEmpty()) {
                    vm.incomeDocReq = true;
                } else {
                    vm.incomeDocReq = false;
                }
                vm.noDoccumentUploadHPR = (vm.isStaffJourney && vm.selectedCard.key == "HPR") ;

                // vm.validation_BankSte_SalarySlip = vm.model.incomeDocs.some(function (doc) { // validation check for bankStatement/salarySlip as PDF @akshaybspise 15 jun
                //     //    pdf validation for OB
                //     if (doc.documentGroup === "Bank Statement (pdf)" || doc.documentGroup === "Salary Slip") {
                //         return doc.documentType !== "application/pdf";
                //     }
                //     return false;
                // });

                // if (vm.nameMissmatch) { //added for OB_v3 @akshaypise 24/07/2024
                //   //  console.log("vm.model.incomeDocs name missmatch",vm.model.incomeDocs);
                //     vm.incomeDocOBReq = vm.model.incomeDocs.some(function (doc) {
                //         return doc.documentGroup === "Salary Slip";
                //     });

                //     !vm.incomeDocOBReq ? vm.model.errorMsg = "Please upload Salary Slip as PDF format." : '';
                //     $timeout(function () {
                //         vm.model.errorMsg = false;
                //     }, 10000);
                // }
                console.log("noDoccumentUploadHPR-->"+vm.noDoccumentUploadHPR);
                vm.handleValidationError();
                var isValidationError = vm.validationError.maxSize || vm.validationError.minSize || vm.validationError.format || vm.validationError.noGroup;
                if ((!vm.incomeDocReq && !isValidationError && vm.incomeDocOBReq && vm.isSalrayAndBank) || vm.noDoccumentUpload || vm.noDoccumentUploadHPR) {//funtion Or condition for CCS akshaypise April2024

                    var documentData = prepareData();
                    uploadDocument(documentData, 0);

                } else {
                    vm.virusCheck = false;
                    vm.model.submitted = true;
                    $anchorScroll();
                }
                analyticService.buttonList.buttonClick.event_content = "continue";
                analyticService.trackUserAction(analyticService.buttonList.buttonClick);
            };

            var uploadDocument = function (documents, index) {
                if (vm.ekyc == 'Yes' && vm.isStaffJourney) {
                    // console.log("Ekyc from contact details =======", vm.ekyc);
                    vm.model.poiType = vm.poiType[3];
                    vm.model.poiNumber = vm.redactedAadhaar
                    vm.model.poaType = vm.poaType[3];
                    vm.model.poaNumber = vm.redactedAadhaar;
                    // console.log("poiType and redact =======", vm.model.poiType + "==" + vm.redactedAadhaar);
                }

                var data = {
                    incomeProof: null,
                    isFirstDocument: index === 0,
                    isLastDocument: documents === null ? true : index === documents.length - 1,
                    poiType: vm.model.poiType,
                    poiNumber: vm.model.poiNumber,
                    poaType: vm.model.poaType,
                    poaNumber: vm.model.poaNumber
                };
                if (documents && documents.length > 0) {
                    data.incomeProof = [documents[index]];
                }
                // vm.OBCheckbox ?
                //     (data.isOpenBanking = "Yes", data.finalAnnualIncome = vm.annualSalary) : ''; //commented by akshaypise for OB Checkbox sep2024

                vm.radiBouttonValue == "SAA" ? (
                    data.isOpenBanking = "Yes",
                    data.finalAnnualIncome = vm.annualSalary
                ) : ''; //added for OB Checkbox akshaypise sep2024


                //console.log("sendDocumentData req data", data);
                step11Service.sendDocumentData(data, vm.securityParams, false).then(function (result) {
                    console.log("result from back==", (result));
                    if (result.success) {
                        // if (documents == null || (index === (documents.length - 1))) {
                        //     vm.virusCheck = false;
                        //     $state.go('app.journey.signature', { 'cardKey': vm.selectedCard.key });
                        // } else {
                        //     uploadDocument(documents, ++index);
                        // }

                        // }//adding to hadle docu,ment error
                        // else if (!result.success && result.errorCode == '100010') {
                        //     $state.go('app.journey.signature', { 'cardKey': vm.selectedCard.key });
                        // } else if (result.errorCode === 12000) {
                        //     vm.model.errorMsg = "Please select POA Type to proceed";
                        //     //evtContent = "Invalid OTP error";
                        // } else if (result.errorCode === 12001) {
                        //     vm.model.errorMsg = "Please select POA Number to proceed";
                        //     //evtContent = "Invalid OTP error";
                        // } else if (result.errorCode === 12002) {
                        //     vm.model.errorMsg = "Please select POI Type to proceed";
                        //     //evtContent = "Invalid OTP error";
                        // } else if (result.errorCode === 12003) {
                        //     vm.model.errorMsg = "Please select POI Number to proceed";
                        //     //evtContent = "Invalid OTP error";
                        // }
                        // else if(result.errorCode === 300){
                        //     vm.model.errorMsg = "Please Enter Correct Password";
                        //     //Password protected error;
                        // }

                        // else {
                        //     vm.virusCheck = true;
                        //     vm.model.errorMsg = result.message;
                        //     vm.model.submitted = true;
                        //     $anchorScroll();
                        // }
                        // $timeout(function () {
                        //     vm.model.errorMsg = false;
                        // }, 10000);


                        // code changed for bank statement 

                        (!documents || index === (documents.length - 1)) ? (
                            vm.virusCheck = false,
                            $state.go('app.journey.signature', { 'cardKey': vm.selectedCard.key })
                        ) : (
                            uploadDocument(documents, ++index)
                        );
                    } else {
                        vm.model.errorMsg =
                            result.errorCode == '100010' ? (
                                $state.go('app.journey.signature', { 'cardKey': vm.selectedCard.key }), ""
                            ) :
                                // result.errorCode === 12000 ? "Please select POA Type to proceed" :
                                // result.errorCode === 12001 ? "Please select POA Number to proceed" :
                                // result.errorCode === 12002 ? "Please select POI Type to proceed" :
                                // result.errorCode === 12003 ? "Please select POI Number to proceed" :
                                // result.errorCode === 12004 ?  vm.model.errorMsg =  result.message:
                                vm.model.errorMsg = result.message;

                        (vm.virusCheck = true, result.message);

                        // if (!result.success && result.errorCode !== '100010') {
                        //     vm.model.submitted = true;
                        //     $anchorScroll();
                        // }
                        vm.model.submitted = true;
                        $anchorScroll();

                    }

                    $timeout(function () {
                        vm.model.errorMsg = false;
                    }, 10000);
                });
            };

            vm.save = function () {
                var modalInstance = $uibModal.open({
                    backdrop: 'static',
                    keyboard: false,
                    modalFade: true,
                    component: "overlaySaveConfirmation",
                    windowClass: 'card-detail-modal'
                });
                modalInstance.result.then(function (isSelected) {
                    if (isSelected) {
                        var securityParams = {
                            robocheck: vm.robocheck ? vm.robocheck : ''
                        };
                        var documentData = prepareData();
                        var data = { incomeProof: documentData ? [documentData[0]] : [], isFirstDocument: true };
                        step11Service.sendDocumentData(data, securityParams, true).then(function (result) {
                            if (result.success) {
                                var promises = [];
                                if (documentData) {
                                    documentData.splice(0, 1);
                                }
                                if (documentData && documentData.length > 0) {

                                    angular.forEach(documentData, function (doc, index) {
                                        var data = { incomeProof: [doc], isFirstDocument: false };
                                        promises.push(step11Service.sendDocumentData(data, securityParams, true));
                                    });
                                    $q.all(promises).then(function (responses) {
                                        var isSuccess = true;
                                        for (var i = 0; i < responses.length; i++) {
                                            if (responses[i].success === false) {
                                                // result.errorCode == 6000 || result.errorCode == 6001 || result.errorCode == 6002 || result.errorCode == 6003 || result.errorCode == 6004 || result.errorCode == 2
                                                isSuccess = false;
                                                vm.virusCheck = true;
                                                vm.model.errorMsg = responses[i].message;
                                                vm.model.submitted = true;
                                                $anchorScroll();
                                                break;
                                            }
                                        }
                                        if (isSuccess) {
                                            $state.go('app.save-exit', {
                                                saveData: {
                                                    name: step11Service.fullName
                                                }, cardKey: vm.selectedCard.key
                                            });
                                        }
                                    });
                                } else {
                                    $state.go('app.save-exit', {
                                        saveData: {
                                            name: step11Service.fullName
                                        }, cardKey: vm.selectedCard.key
                                    });
                                }
                            }//added to handle customer journey document saving 
                            else if (!result.success && result.errorCode == '100010') {
                                $state.go('app.save-exit', {
                                    saveData: {
                                        name: step11Service.fullName
                                    }, cardKey: vm.selectedCard.key
                                });
                            }
                            else {
                                vm.virusCheck = true;
                                vm.model.errorMsg = result.message;
                                vm.model.submitted = true;
                                $anchorScroll();
                            }
                        });
                    }
                }, function () { });
                analyticService.buttonList.buttonClick.event_content = "save for later";
                analyticService.trackUserAction(analyticService.buttonList.buttonClick);
            };

            /*vm.closeError = function () {
                vm.model.errorMsg = false;
            };*/
        }]
    });

    module.exports = step11Comp.name;
})();

/***/ }),

/***/ "./src/app/components/journey/step11/step11.component.scss":
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************!*\
  !*** ./src/app/components/journey/step11/step11.component.scss ***!
  \*****************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/journey/step11/step11.component.service.js":
/* unknown exports provided */
/* all exports used */
/*!***********************************************************************!*\
  !*** ./src/app/components/journey/step11/step11.component.service.js ***!
  \***********************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';

    var step11Service = angular.module('journey.module').service('step11Service', ['$rootScope', '$http', '$q', '$timeout', 'appState', 'CONFIG', 'UtilService','$interval', function ($rootScope, $http, $q, $timeout, appState, CONFIG, UtilService, $interval) {
        var self = this;
        self.arn = null;
        self.fullName = null;

        self.documentName = {
            "KYC - AddressProof": "kyc-address-proof",
            // "BoilerPlate": "boiler-plate",
            "Primary Applicant Photo": "primary-applicant-photo",
            "KYC-ID Proof": "kyc-id-proof",
            // "Income Documents": "income-document",// commented added by akshay april24 OB changes
            "Others": "others",
             "Salary Slip": "salary-slip",//added by akshay april24 OB changes
            "Bank Statement": "bank-statement",//added by akshay april24 OB changes
        }

        self.getDocumentGroups = function () {
            return [
                "KYC - AddressProof",
                // "BoilerPlate",
                "Primary Applicant Photo",
                "KYC-ID Proof",
                   // "PVC-Declaration",
                    "Salary Slip",//added by akshay april24 OB changes
                    "Bank Statement",//added by akshay april24 OB changes
                    // "Income Documents", // commented added by akshay april24 OB changes
                    "Others"     
            ];
        };

        self.setDataInStorage = function (formDetails) {
            var arnData = angular.merge({}, appState.getApplicationData(), formDetails);
            appState.setApplicationData(arnData);
            // callback(null, formDetails);
        };

        self.getDataFromStorage = function () {
            return appState.getApplicationData();
        };


        self.sendConsentData = function (reqData, securityParams) { // function added  for OB akshaypise April2024
            var retryDip = {
                active: true,
                pollTimeout: 2500,
                pollInterval: 40000,
                pollCount: 5
            };
            var defer = $q.defer();
        
            sendConsentDataToBack(securityParams, defer, retryDip, reqData);
        
            var countOfPoll = 0;
            $timeout(function () {
                //console.log("I am running after " + retryDip.pollTimeout + " Milliseconds delay");
                var intervalPromise = $interval(function () {
                    countOfPoll++;
                    //console.log("inside intervalPromise", countOfPoll);
                    //console.log("counter value at start of interval is =", reqData.reqCounter);
        
                    if (retryDip.active && countOfPoll <= 6) {
                        //console.log("retryDip.active  true===", retryDip.active + " And value of counter =", reqData.reqCounter);
                        sendConsentDataToBack(securityParams, defer, retryDip, reqData);
                    } else {
                        //console.log("retryDip.active  false===", retryDip.active + " And value of counter =", reqData.reqCounter);
                        $interval.cancel(intervalPromise);
                    }
                    //console.log("counter value here is =", reqData.reqCounter);
        
                    if (retryDip.active && reqData.reqCounter > 6) {
                        //console.log("Specific condition met, resolving defer and cancelling interval");
                        var resolvedObject = {
                            responseCode: 404,
                            success: false,
                            message: "Sorry! Some internal processing error has occurred"
                        };
                        defer.resolve(resolvedObject);
                        $interval.cancel(intervalPromise);
                    } else {
                        //console.log("this run after wrong error code", countOfPoll);
                        // var resolvedObject = {
                        //     responseCode: 404,
                        //     success: false,
                        //     message: "Sorry! Some internal processing error has occurred"
                        // };
                        // defer.resolve(resolvedObject);
                        // $interval.cancel(intervalPromise);
                    }
                }, retryDip.pollInterval, retryDip.pollCount);
            }, retryDip.pollTimeout);
        
            //console.log("yes reached here==");
            return defer.promise;
        };
        var sendConsentDataToBack = function (securityParams, defer, retryDip, reqData) {       // function added  for OB akshaypise April2024
            var apiURL = $rootScope.integrationsActive ? CONFIG.apiUrl + '/OpenBanking/fetchConsentDetails/' + self.arn + '/' + '?hash_id=' + Math.random() :
                'resources/data/mock/step11_document/open-banking-consent.json';
            return $http({
                method: $rootScope.integrationsActive ? "POST" : "GET",
                url: apiURL,
                headers: {
                    'Content-Type': 'application/json'
                },
                params: securityParams,
                data: JSON.stringify(reqData)
            }).then(function (response) {
                reqData.reqCounter++;
                console.log("response from backend  ===", response.data);
                //console.log("for counter ", reqData.reqCounter + " response from backend  for poll count has value==", response.data);
        
                if (response.status === 200 && response.data) { //api success
                    if (response.data.responseCode === 203 && retryDip.active && reqData.reqCounter > 6) { // after try many time resolve
                        //console.log("lops go---->reqData.reqCounter",reqData.reqCounter);
                        //console.log("code go inside 203activereqcounter");
                        retryDip.active = false;
                        defer.resolve(response.data);
                    } else if (response.data.responseCode === 203) { // try again call same API
                        //console.log("code go inside 203looping");
                        retryDip.active = true;
                    } else if (response.data.responseCode === 200 || response.data.responseCode === 201 || response.data.responseCode === 202 || response.data.responseCode === 204 || response.data.responseCode === 205 || response.data.responseCode === 206) {
                        //console.log("200/201/202/204/205/206 response current value of counter==", reqData.reqCounter)
                        retryDip.active = false;
                        defer.resolve(response.data);
                        reqData.reqCounter = 7;
                    } else {
                        //console.log("//console goes else condtion if other error message show else--1");
                        retryDip.active = false;
                        response.data.message= "Sorry! Some internal error has occurred";
                        defer.resolve(response.data);
                    }
                } else {
                    //console.log("else of 200", response);
                    defer.reject("Sorry! Some internal error has occured");
                    return {    success: false,
                                message: "Sorry! Some internal error has occured"
                            };
                }
            }, function (response) {
                //console.log("last 1", response);
                return {
                    success: false,
                    message: "Sorry! Some internal error has occurred",
                    errorCode: 404
                };
            });
        };

        self.getOpenBankingURLlink = function () {          // function added for OB akshaypise march2024 (get the OB URL)
            var apiURL = $rootScope.integrationsActive ? CONFIG.apiUrl + '/OpenBanking/consentInitiate/' + self.arn + '/' + '?hash_id=' + Math.random() : 'resources/data/mock/step11_document/open-banking-url.json';
            return $http({
                method: $rootScope.integrationsActive ? "POST" : "GET",
                url: apiURL,
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                if (response.status == 200 && response.data) {
                    return response.data;
                } else {
                    return {
                        success: false,
                        message: "Sorry! there seems to be some technical error."
                    };
                }
            }, function (error) {
                return {
                    success: false,
                    message: "Sorry! there seems to be some technical error."
                };
            });
        };
        self.sendDocumentData = function (docData, securityParams, isSaveExit) {
            var deferred = $q.defer(),
                apiURL, httpMethod, resolved = false;
              
            if ($rootScope.integrationsActive) {
                httpMethod = "POST";
                apiURL = CONFIG.apiUrl + '/documentupload/saveDocument/' + self.arn + '/' + isSaveExit + '?hash_id=' + Math.random();
            } else {
                httpMethod = "GET";
                apiURL = 'resources/data/mock/step11_document/document_save.json';
            }
            $timeout(function () {
                if (!resolved) {
                    deferred.reject();
                }
            }, 120 * 1000);
            $http({
                method: httpMethod,
                url: apiURL,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(docData),
                params: securityParams
            }).then(function (response) {
                if (response.status === 200 && response.data) {
                    resolved = true;
                    deferred.resolve(response.data);
                } else {
                    resolved = true;
                    deferred.reject();
                }
            }, function (response) {
                resolved = true;
                deferred.reject();
            });
            return deferred.promise;
        };

        self.getUserDetails = function () {
            var userDTO = {},
                localState = appState.getApplicationData();
            if (localState) {
                if (localState.primaryApplicant) {
                    self.arn = localState.primaryApplicant.arn;
                    self.fullName = localState.primaryApplicant.fullName ? localState.primaryApplicant.fullName : null;
                    userDTO.addressDoc = localState.primaryApplicant.addressOptions ? localState.primaryApplicant.addressOptions : null;
                    if (userDTO.addressDoc == 'Alternate residence') {
                        userDTO.addressDoc = true;
                    } else {
                        userDTO.addressDoc = false;
                    }
                    if (localState.primaryApplicant.employmentDetails) {
                        var companyName = localState.primaryApplicant.employmentDetails.changedCompanyName ? localState.primaryApplicant.employmentDetails.changedCompanyName : 'N';
                        var skipPerfios = localState.primaryApplicant.employmentDetails.hasSkippedPerfios ? localState.primaryApplicant.employmentDetails.hasSkippedPerfios : 'N';
                    
                        var panStatusFlag = localState.primaryApplicant.panStatusFlag ? localState.primaryApplicant.panStatusFlag : 'N';
                        if (companyName == 'Y' || skipPerfios == 'Y' || panStatusFlag == 'NO_PAN_FOUND')
                            userDTO.incomeDoc = true;
                        else
                            userDTO.incomeDoc = false;
                    }
                    if (localState.primaryApplicant.dipDetails) {
                        self.balanceTransferTaken = localState.primaryApplicant.dipDetails.balanceTransferTaken ? localState.primaryApplicant.dipDetails.balanceTransferTaken : 'N';
                        if (self.balanceTransferTaken == 'N') {
                            self.balanceTransferTaken = false;
                        } else {
                            self.balanceTransferTaken = true;
                        }
                        self.supplementaryCardApplied = localState.primaryApplicant.dipDetails.supplementaryCardApplied ? localState.primaryApplicant.dipDetails.supplementaryCardApplied : 'N';
                        if (self.supplementaryCardApplied == 'N') {
                            self.supplementaryCardApplied = false;
                        } else {
                            self.supplementaryCardApplied = true;
                        }
                    }
                }
            }
            userDTO.incomeDocs = [];
            userDTO.poiType = null;
            var apiURL, httpMethod;
            if ($rootScope.integrationsActive) {
                httpMethod = "POST";
                apiURL = CONFIG.apiUrl + '/documentupload/fetchDocuments/' + self.arn + '?hash_id=' + Math.random();
            } else {
                httpMethod = "GET";
                apiURL = 'resources/data/mock/step11_document/document_fetch.json';
            }
            return $http({
                method: httpMethod,
                url: apiURL,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                if (response.status === 200 && response.data) {
                    var tempDocs = response.data.incomeProof;
                    if (angular.isArray(tempDocs) && tempDocs.length > 0) {
                        userDTO.poiType=response.data.poiType;
                        userDTO.poiNumber=response.data.poiNumber;
                        userDTO.poaType=response.data.poaType;
                        userDTO.poaNumber=response.data.poaNumber;
                        angular.forEach(tempDocs, function (file) {
                            if (!UtilService.isEmpty(file.document)) {
                                file.document = "data:" + file.documentType + ";base64," + file.document;
                            }
                            var newFile = new self.IncomeDoc(file.document, file.documentName, file.documentGroup, file.documentType);
                            userDTO.incomeDocs.push(newFile);
                        });
                        // Sort the Documents array by document name
                        userDTO.incomeDocs.sort(function (a, b) {
                            if (a.documentName < b.documentName) {
                                return -1;
                            }
                            if (a.documentName > b.documentName) {
                                return 1;
                            }
                        });
                    } else {
                        userDTO.incomeDocs.push(new self.IncomeDoc());
                    }
                } else {
                    userDTO.incomeDocs.push(new self.IncomeDoc());
                }
                return userDTO;
            }, function (response) {
                userDTO.incomeDocs.push(new self.IncomeDoc());
                return userDTO;
            });
        };

        self.IncomeDoc = function (document, documentName, documentGroup, documentType) {
            this.document = document || "";
            this.documentName = documentName || "";
            this.documentGroup = documentGroup || "";
            // this.documentGroup = documentGroup || "INCOME PROOF";
            this.documentType = documentType || "";
            this.validationError = {
                maxSize: false,
                minSize: false,
                format: false,
                noGroup: false
            };
            this.hasValidationError = function () {
                return this.validationError.maxSize || this.validationError.minSize || this.validationError.format || this.validationError.noGroup;
            };
            this.isEmpty = function () {
                return UtilService.isEmpty(this.document);
            };
            this.resetValidationError = function () {
                this.validationError.maxSize = false;
                this.validationError.minSize = false;
                this.validationError.format = false;
                if (UtilService.isEmpty(this.document)) {
                    this.validationError.noGroup = false;
                }
            };
        };

    }]);

    module.exports = step11Service.name;
})();


/***/ })

});
//# sourceMappingURL=5efa91e2454063a76cdb2.js.map