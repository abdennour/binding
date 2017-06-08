import nameSpaceToValue from './nameSpaceToValue';


function globalBinder(...args) {
  const firstArgument= args[0];
  if (typeof firstArgument === 'string' && firstArgument.indexOf('.') > 0 ) {
    return nameSpaceToValue(...args);
  }
}

module.exports = globalBinder;
