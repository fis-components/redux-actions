// Map of action statuses to reducer property names
'use strict';

exports.__esModule = true;
exports['default'] = handleAction;
var statusMappings = {
  'error': 'error',
  'success': 'success'
};

function isFunction(val) {
  return typeof val === 'function';
}

// Default action status, if none is specified
var defaultStatus = 'success';

function handleAction(type, reducers) {
  return function (state, action) {
    // If action type does not match, return previous state
    if (action.type !== type) return state;

    // If status is undefined, use default status
    var status = typeof action.status !== 'undefined' ? action.status : defaultStatus;

    // Get reducer key that corresponds to status
    var handlerKey = statusMappings[status];

    // If status does not correspond to a reducer key, return previous state
    if (!handlerKey) return state;

    // If function is passed instead of map, use as reducer
    if (isFunction(reducers)) return reducers(state, action);

    // Call reducer
    // Throws if reducer is not a function
    var reducer = reducers[handlerKey];
    return reducer(state, action);
  };
}

module.exports = exports['default'];