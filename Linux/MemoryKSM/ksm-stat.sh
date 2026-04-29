#!/bin/bash

if [[ "$1" == "--show" ]]; then
    KSM_DIR="/sys/kernel/mm/ksm"
    PAGE_SIZE=$(getconf PAGE_SIZE)

    if [ -f "$KSM_DIR/run" ]; then
        # Pages currently shared
        shared=$(cat "$KSM_DIR/pages_sharing")
        printf "Memory Saved: %'d MB\n" $((shared * PAGE_SIZE / 1024 / 1024))
    else
        echo "KSM not found or not enabled."
    fi
    exit 0
fi

SCRIPT="$(readlink -f "$0")"
watch -n 10 -c "bash '$SCRIPT' --show"