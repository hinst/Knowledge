# Memory Kernel Same Page Merging

## Check if supported by kernel

```bash
grep KSM /boot/config-`uname -r`
```

## Enable
```bash
echo 1 > /sys/kernel/mm/ksm/run
```

## Settings

Reduce CPU usage:
```bash
echo 10 > /sys/kernel/mm/ksm/advisor_max_cpu
```

Other settings: use defaults.

## Show saved memory

[Script](Scripts/MemoryKSM/ksm-stat.sh)