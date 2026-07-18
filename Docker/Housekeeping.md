# Docker Housekeeping

## After installation:
1. Allow Docker permission in Linux
	1. Run `sudo usermod -aG docker $USER`
1. After installing Docker Desktop
	1. Disable GPU acceleration
		1. Go to `C:\Users\YOU\AppData\Roaming\Docker`
		1. Edit `settings-store.json`
		1. Set `"DisableHardwareAcceleration": true`

## Reclaim disk space:
Run `docker system prune -a`

## Reclaim virtual hard drive space on Windows
https://stackoverflow.com/questions/70946140/docker-desktop-wsl-ext4-vhdx-too-large

	wsl --shutdown
	wsl --list --verbose
	DISKPART> select vdisk file="C:\Users\USERNAME\AppData\Local\Docker\wsl\disk\docker_data.vhdx"
	DISKPART> compact vdisk
