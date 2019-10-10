import * as http from "http";

const hostname: string = 'localhost';
const port: number = 3000;

const server = http.createServer((request, response) =>
{
    const helloString: string = "Hello World!";

    response.writeHead(
    200,
    {
        'Content-Type': 'text/plain'
    });

    response.end(helloString);
})

server.listen(port, hostname, () =>
{
    console.log(`Server running @ http://${ hostname }:${ port.toString() }`);
});
