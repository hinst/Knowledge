# ComfyUI-Zluda

https://github.com/patientx/ComfyUI-Zluda

As of 2026.06.07 does not support the latest version of HIP SDK.
* Latest AMD HIP SDK: `v7.1.1`
* Currently supported by ComfyUI-Zluda: `v6.4.2`

Do not try to use the unsupported version, it will not work.

⚠️ ComfyUI-Zluda no longer working, I switched to using standard version of ComfyUI with ROCm

# Useful flags for running ComfyUI on graphics card 7900 XT

	--use-split-cross-attention --cache-none --disable-smart-memory --disable-pinned-memory --disable-async-offload

# Commands to run after switching ComfyUI version through Git

	venv\Scripts\activate
	pip install -r requirements.txt
