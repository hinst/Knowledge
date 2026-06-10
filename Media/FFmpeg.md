# Lossless cut

	ffmpeg -ss hh:mm:ss -to hh:mm:ss -i input.mp4 -c copy output.mp4

# Extract last frame from video

	ffmpeg -sseof -1 -i input.mp4 -update 1 -q:v 2 output.png

# Concatenate files

	ffmpeg -f concat -i list.txt -c copy output.mp4

File format for list.txt:

	file 'first.mp4'
	file 'other.mp4'