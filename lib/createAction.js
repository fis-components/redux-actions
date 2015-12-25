'use strict';

exports.__esModule = true;
exports['default'] = createAction;
function identity(t) {
  return t;
}

function createAction(type, actionCreator) {
  var finalActionCreator = typeof actionCreator === 'function' ? actionCreator : identity;

  return function () {
    return {
      type: type,
      payload: finalActionCreator.apply(undefined, arguments)
    };
  };
}

module.exports = exports['default'];