# File permissions

## Increase open file limit
1. Check current limit `ulimit -n`
	1. Default is `1024`
1. Edit file `/etc/security/limits.conf`
	1. Run `sudo nano /etc/security/limits.conf`
	1. Add
		1. `root soft nofile 999000`
		1. `root hard nofile 999000`
		1. `* soft nofile 999000`
		1. `* hard nofile 999000`
1. Edit file `/etc/pam.d/common-session`
	1. Run `sudo nano /etc/pam.d/common-session`
	1. Add `session required pam_limits.so`
1. Edit file `/etc/systemd/system.conf`
	1. Run `sudo nano /etc/systemd/system.conf`
	1. Set `DefaultLimitNOFILE=999000`
1. Reboot

## Format: `d u g o`
1. `d` directory
1. `u` user
1. `g` group
1. `o` others
