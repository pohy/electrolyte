// Load modules.
var Spec = require('../spec')
  , util = require('util')
  , debug = require('debug')('electrolyte');


/**
 * A specification using a constructor.
 *
 * Objects will be created by applying the `new` operator to the constructor
 * with any required dependencies and returning the result.
 *
 * @constructor
 * @param {string} id - The id of the specification.
 * @param {object} mod - The module containing the object factory.
 * @param {number} hs - The handle of the source from which the spec was loaded.
 * @protected
 */
function ConstructorSpec(id, ctor, hs) {
  Spec.call(this, id, ctor, hs);
  this._ctor = ctor;
}

// Inherit from `Spec`.
util.inherits(ConstructorSpec, Spec);

/**
 * Instantiate an object from the specification.
 *
 * @private
 */
ConstructorSpec.prototype.instantiate = function() {
  debug('instantiate %s', this.id);
  var args = [].slice.call(arguments)
    , ctor = this._ctor;
  return new ctor(...args);
}


// Expose constructor.
module.exports = ConstructorSpec;
