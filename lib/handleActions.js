'use strict';

exports.__esModule = true;
exports['default'] = handleActions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _handleAction = require('./handleAction');

var _handleAction2 = _interopRequireDefault(_handleAction);

var _reduceReducers = require('reduce-reducers');

var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

function handleActions(handlers, defaultState) {
  var reducers = Object.keys(handlers).reduce(function (result, type) {
    result.push(_handleAction2['default'](type, handlers[type]));
    return result;
  }, []);

  return typeof defaultState !== 'undefined' ? function (state, action) {
    if (state === undefined) state = defaultState;
    return _reduceReducers2['default'].apply(undefined, reducers)(state, action);
  } : _reduceReducers2['default'].apply(undefined, reducers);
}

module.exports = exports['default'];