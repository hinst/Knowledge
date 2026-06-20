# Large Language Models

## Disable thinking
Edit template. Add:

	{%- set enable_thinking = false %}

## Ollama use CPU only mode

Set environment variable:

	OLLAMA_LLM_LIBRARY="cpu_avx2"

Does not help:

	❌ CUDA_VISIBLE_DEVICES="-1"
	❌ ROCR_VISIBLE_DEVICES="-1"
