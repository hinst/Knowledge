# CMD

## Enable new line after folder path in prompt

	prompt $P$_$G

## Install WMIC command

	DISM /Online /Add-Capability /CapabilityName:WMIC~~~~

Remove:

	DISM /Online /Remove-Capability /CapabilityName:WMIC~~~~​

## Run from Windows Task Scheduler without displaying terminal window

In Task -> Properties -> General, choose Run Whether user is logged in or not
