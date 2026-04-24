# Docker Housekeeping

## Reclaim disk space:
	docker system prune -a

## Reclaim virtual hard drive space on Windows
https://stackoverflow.com/questions/70946140/docker-desktop-wsl-ext4-vhdx-too-large

	wsl --shutdown
	wsl --list --verbose
	DISKPART> select vdisk file="C:\Users\USERNAME\AppData\Local\Docker\wsl\disk\docker_data.vhdx"
	DISKPART> compact vdisk
