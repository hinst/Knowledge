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

## Ollama use only one CPU core

Export model file

	ollama show gemma4:e4b --modelfile > gemma4_e4b_oneCPU

Add to the model file

	PARAMETER num_thread 1

Import model file

	ollama create gemma4:e4b_1cpu -f ./gemma4_e4b_1cpu

Launch customized model

	ollama run gemma4:e4b_1cpu
