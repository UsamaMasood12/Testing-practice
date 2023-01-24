function capitalize(str) {
    const check = /^[a-zA-Z]+$/;
    if (!str.match(check)) {
        throw new Error('Must be a string');
    }
    else {
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
    }
  }
  
  module.exports = capitalize;