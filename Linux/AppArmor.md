# Disable App Armor

1. Edit GRUB configuration file
	1. `sudo nano /etc/default/grub`
1. Add `apparmor=0` to `GRUB_CMDLINE_LINUX`
	1. `GRUB_CMDLINE_LINUX="apparmor=0"`
	1. Settings in `GRUB_CMDLINE_LINUX` are separated by space
1. Run `sudo update-grub`
1. Disable service
	1. `sudo systemctl stop apparmor`
	1. `sudo systemctl disable apparmor`
	1. `sudo systemctl daemon-reload`
1. Reboot
1. Check status
	1. Run `sudo aa-status`
