# How to create swap file

1. Create
	1. `sudo fallocate -l 12G /swapfile`
	1. For BTRFS: `sudo btrfs filesystem mkswapfile --size 12G /swapfile`
1. Format
	1. `sudo mkswap /swapfile`
1. Enable
	1. `sudo swapon /swapfile`

# How to enable Zswap

1. Install diagnostics tool
	1. `sudo apt install sysfsutils`
1. Check Zswap status:
	1. `systool -v -m zswap`
1. Enable Zswap
	1. `echo 1 | sudo tee /sys/module/zswap/parameters/enabled`
1. Show statistics
	1. `sudo grep -r . /sys/kernel/debug/zswap`
1. Enable on startup
	1. Edit GRUB: `sudo nano /etc/default/grub`
	1. `GRUB_CMDLINE_LINUX="zswap.enabled=1 zswap.zpool=zsmalloc"`
	1. Save: `sudo update-grub`