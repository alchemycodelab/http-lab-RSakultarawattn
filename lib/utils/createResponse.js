module.exports = createResponse => ({ body:'<h1>hi there</h1>', contentType: 'text/html', status: '200 OK' }) = {
    (`HTTP/1.1 200 OK
    Accept-Ranges: bytes
    Content-Length: 17
    Content-Type: text/html\r
    \r
    <h1>hi there</h1>`)
};
