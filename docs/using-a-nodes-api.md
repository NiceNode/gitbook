# Using a Node's API

With some exceptions, NiceNode will use the standard default ports for all node API endpoints. In a node's settings, the API endpoint ports are shown and they can be changed.

## Ethereum nodes

| API Name | Endpoint  | Test command |
| -------- | --------- | ---------- |
| Http API | `http://localhost:8545`     | <code>curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}' http://localhost:8545</code>        |
| Websocket API | `http://localhost:8546`     | linux/macOS: <code>echo '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}' \| websocat ws://localhost:8546</code><br> windows (PowerShell): <code>'{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}' \| .\websocat.exe ws://localhost:8546</code>      |
| Beacon client API | `http://localhost:5052` | <code>curl http://localhost:5052/eth/v1/node/version</code>   |

Websocket commands require having Websocat installed. Downloads https://github.com/vi/websocat/releases. Or on macOS: <code>brew install websocat</code>

## Accessing the API from another computer on the same network
Determine the local IP address of the computer running NiceNode and the nodes. On Linux, the command  may print the local IP address. 
| Operating System(s) | Command for local IP address |
| -------- | --------- |
| Linux   | `hostname -I \| awk '{print $1}'`     | 
| macOS   | `ipconfig getifaddr en0`     | 
| Windows (PowerShell) | `(Get-NetIPAddress -AddressFamily IPv4).IPAddress`      |
| Windows (Command Prompt) | `ipconfig \| findstr /i "IPv4 Address"` (or `ipconfig` and manually search)     | 

Typically, on home networks this will look something like `192.168.0.X` where X is between `0 and 255`. From there, in the endpoint, just replace `localhost` with the `IP address` such as `192.168.0.110`.

## Accessing the API within a container
NiceNode runs containers with Podman. If you are running your container with Podman, in the endpoint, just replace `localhost` with `host.internal.containers`