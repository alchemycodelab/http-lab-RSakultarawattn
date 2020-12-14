module.exports = rawRequest => {
  const stringy = rawRequest.toString();
  const data = stringy.split(' ');
  const body = data[4].split('\r\n');
  console.log(data[4].split('fr'), 'hello');
  return {
    method: data[0],
    path: data[1],
    body: body[2]
  };
  

};
