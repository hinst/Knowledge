# How to create swap file

1. Create
	1. `sudo fallocate -l 12G /swapfile`
	1. For BTRFS: `sudo btrfs filesystem mkswapfile --size 12G /swapfile`
1. Format
	1. `sudo mkswap /swapfile`
1. Enable
	1. `sudo swapon /swapfile`