module.exports = rawRequest => {
  const [method, path] = rawRequest.split(' ');
  const [, body] = rawRequest.split('\r\n\r\n');

  console.log(body, 'HELLLOO');

  if(body) {
    return {
      method,
      path,
      body
    };
  } else {
    return {
      method,
      path
    };
  }
};
