# Enable BTRFS compression

1. Edit `/etc/fstab` and add after `default` either of these:
	1. `compression=lzo`
	1. `compression=zstd`
1. Defragment
	1. `sudo btrfs filesystem defragment -r -v -clzo /`
1. Check compression ratio
	1. `sudo apt install btrfs-compsize`
	1. `sudo compsize -x /`
