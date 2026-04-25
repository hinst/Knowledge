# Grub
1. File location
	1. Path: `/etc/default/grub`
	1. Edit: `sudo nano /etc/default/grub`
1. Apply changes:
	1. `sudo update-grub`
1. Timeout settings
	1. `GRUB_TIMEOUT=3`
		1. Apparently, changing only GRUB_TIMEOUT is not enough
	1. `GRUB_RECORDFAIL_TIMEOUT=$GRUB_TIMEOUT`
	1. `GRUB_TIMEOUT_STYLE=menu`
