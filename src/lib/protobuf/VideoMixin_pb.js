// source: VideoMixin.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Encoding', null, global);
goog.exportSymbol('proto.VideoMixin', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Encoding = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Encoding, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Encoding.displayName = 'proto.Encoding';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.VideoMixin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.VideoMixin.repeatedFields_, null);
};
goog.inherits(proto.VideoMixin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.VideoMixin.displayName = 'proto.VideoMixin';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Encoding.prototype.toObject = function(opt_includeInstance) {
  return proto.Encoding.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Encoding} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Encoding.toObject = function(includeInstance, msg) {
  var f, obj = {
    filesize: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ipfsHash: msg.getIpfsHash_asB64(),
    width: jspb.Message.getFieldWithDefault(msg, 3, 0),
    height: jspb.Message.getFieldWithDefault(msg, 4, 0),
    frameRate: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Encoding}
 */
proto.Encoding.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Encoding;
  return proto.Encoding.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Encoding} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Encoding}
 */
proto.Encoding.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFilesize(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setIpfsHash(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFrameRate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Encoding.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Encoding.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Encoding} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Encoding.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilesize();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getIpfsHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getFrameRate();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional uint64 filesize = 1;
 * @return {number}
 */
proto.Encoding.prototype.getFilesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Encoding} returns this
 */
proto.Encoding.prototype.setFilesize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes ipfs_hash = 2;
 * @return {!(string|Uint8Array)}
 */
proto.Encoding.prototype.getIpfsHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes ipfs_hash = 2;
 * This is a type-conversion wrapper around `getIpfsHash()`
 * @return {string}
 */
proto.Encoding.prototype.getIpfsHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getIpfsHash()));
};


/**
 * optional bytes ipfs_hash = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getIpfsHash()`
 * @return {!Uint8Array}
 */
proto.Encoding.prototype.getIpfsHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getIpfsHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.Encoding} returns this
 */
proto.Encoding.prototype.setIpfsHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint32 width = 3;
 * @return {number}
 */
proto.Encoding.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.Encoding} returns this
 */
proto.Encoding.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 height = 4;
 * @return {number}
 */
proto.Encoding.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.Encoding} returns this
 */
proto.Encoding.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 frame_rate = 5;
 * @return {number}
 */
proto.Encoding.prototype.getFrameRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.Encoding} returns this
 */
proto.Encoding.prototype.setFrameRate = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.VideoMixin.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.VideoMixin.prototype.toObject = function(opt_includeInstance) {
  return proto.VideoMixin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.VideoMixin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.VideoMixin.toObject = function(includeInstance, msg) {
  var f, obj = {
    filename: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filesize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    ipfsHash: msg.getIpfsHash_asB64(),
    duration: jspb.Message.getFieldWithDefault(msg, 4, 0),
    encodingList: jspb.Message.toObjectList(msg.getEncodingList(),
    proto.Encoding.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.VideoMixin}
 */
proto.VideoMixin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.VideoMixin;
  return proto.VideoMixin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.VideoMixin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.VideoMixin}
 */
proto.VideoMixin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilename(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFilesize(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setIpfsHash(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDuration(value);
      break;
    case 5:
      var value = new proto.Encoding;
      reader.readMessage(value,proto.Encoding.deserializeBinaryFromReader);
      msg.addEncoding(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.VideoMixin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.VideoMixin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.VideoMixin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.VideoMixin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilesize();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getIpfsHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getEncodingList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.Encoding.serializeBinaryToWriter
    );
  }
};


/**
 * optional string filename = 1;
 * @return {string}
 */
proto.VideoMixin.prototype.getFilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.VideoMixin} returns this
 */
proto.VideoMixin.prototype.setFilename = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 filesize = 2;
 * @return {number}
 */
proto.VideoMixin.prototype.getFilesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.VideoMixin} returns this
 */
proto.VideoMixin.prototype.setFilesize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes ipfs_hash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.VideoMixin.prototype.getIpfsHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes ipfs_hash = 3;
 * This is a type-conversion wrapper around `getIpfsHash()`
 * @return {string}
 */
proto.VideoMixin.prototype.getIpfsHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getIpfsHash()));
};


/**
 * optional bytes ipfs_hash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getIpfsHash()`
 * @return {!Uint8Array}
 */
proto.VideoMixin.prototype.getIpfsHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getIpfsHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.VideoMixin} returns this
 */
proto.VideoMixin.prototype.setIpfsHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional uint32 duration = 4;
 * @return {number}
 */
proto.VideoMixin.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.VideoMixin} returns this
 */
proto.VideoMixin.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated Encoding encoding = 5;
 * @return {!Array<!proto.Encoding>}
 */
proto.VideoMixin.prototype.getEncodingList = function() {
  return /** @type{!Array<!proto.Encoding>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Encoding, 5));
};


/**
 * @param {!Array<!proto.Encoding>} value
 * @return {!proto.VideoMixin} returns this
*/
proto.VideoMixin.prototype.setEncodingList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.Encoding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Encoding}
 */
proto.VideoMixin.prototype.addEncoding = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.Encoding, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.VideoMixin} returns this
 */
proto.VideoMixin.prototype.clearEncodingList = function() {
  return this.setEncodingList([]);
};


goog.object.extend(exports, proto);
