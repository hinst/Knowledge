# CMD

## Enable new line after folder path in prompt

	prompt $P$_$G

VSCode:

```json
    "terminal.integrated.profiles.windows": {
        "Command Prompt": {
            "path": [
                "${env:windir}\\Sysnative\\cmd.exe",
                "${env:windir}\\System32\\cmd.exe"
            ],
            "args": ["/K", "prompt $P$_$G"],
            "icon": "terminal-cmd"
        }
    },
    "terminal.integrated.defaultProfile.windows": "Command Prompt",
```

## Install WMIC command

	DISM /Online /Add-Capability /CapabilityName:WMIC~~~~

Remove:

	DISM /Online /Remove-Capability /CapabilityName:WMIC~~~~​

## Run from Windows Task Scheduler without displaying terminal window

In Task -> Properties -> General, choose Run Whether user is logged in or not

## Boot into safe mode

	shutdown /r /o /t 0

Afterwards, choose: Troubleshoot, Restart in Safe Mode

## `ll` command in Windows

Put into `ll.bat` and add to `%PATH%`:

```bat
@echo off
if "%~1"=="" (
  ls -l -h -a --color=auto
) else (
  ls -l -h -a --color=auto "%*"
)
```
