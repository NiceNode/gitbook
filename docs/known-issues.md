# Known issues

There are known issues with NiceNode - as long as we are in Alpha stage, please expect there to be issues

## Mac and Windows

Podman is software that NiceNode uses to run nodes. It is very reliable and stable on Linux, but not yet on Mac and Windows.

1. Installing. Podman may not install properly. This could be simply due to Podman instability or your hardware or software configuration being unexpected or non-standard.
2. Nodes crash. This is related to the instability of Podman and NiceNode.

## Node does not start

Currently, there are some node and network options in NiceNode that do not work on all operating systems. Here is a table of known combinations which do not currently work

| Node(s)  | Client(s) | Network(s) | Operating System(s) |
| -------- | --------- | ---------- | ------------------- |
| Arbitrum | Nitro     | All        | macOS               |
| Ethereum | Prysm     | All        | macOS               |
