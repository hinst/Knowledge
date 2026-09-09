# Disable PATH sharing

Edit `/etc/wsl.conf`

	[interop]
	appendWindowsPath = false

Enable Docker:

	export PATH="$PATH:/mnt/c/Program Files/Docker/Docker/resources/bin"
