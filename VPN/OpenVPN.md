# OpenVPN

## How to connect

	sudo openvpn --config file.ovpn

## Bad connection troubleshooting

It is possible that the remote server pushes an unprocessable route to the client.
We can edit connection.ovpn file and include a workaround.
First, add this line:

	pull-filter ignore ""

In log output, see list of all rules. Look for messages saying "already exists."
Next, replace pull filter ignoring everything, with a specific filter. Example:

	pull-filter ignore "route 1.2.3.4 255.255.255.255"