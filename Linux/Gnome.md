# Tweaks
1. Use tweak app
	1. Install: `sudo apt install dconf-editor`
	1. Run: `dconf-editor`
1. Search `animation` to disable animations
1. Search `trash` to hide trash icon from dock

# Edit start menu
1. GUI tool:
	1. Use program named Alacarte
		1. Install: `sudo apt install alacarte`
1. Manual:
	1. Go to folder: `~/.local/share/applications`
	1. Create file: `my-app.desktop`

```ini
[Desktop Entry]
Name=My app
Type=Application
Exec=/home/path
Icon=/home/path.svg
Terminal=false
StartupWMClass=my-app
```

How to find StartupWMClas:
1. Press Alt+F2 and type `lg`
1. Go to tab `Windows` and look for WM Class in there
1. Remember the class and press `Escape`

# Autostart in Gnome 50
1. Launch Settings
1. Choose Apps
1. Search for the app
1. Open properties and toggle Autostart
