convert-video: #id=1
	@echo "Converting to ~/media/v${id}.en.webm"
	@ffmpeg -i ~/videos/KYVideos_41724/KY\ ${id}\ ENG\ New\ 040424\ h264.mov -crf 10 -preset ultrafast -s 1280x720 -y ~/videos/dist/v${id}.en.webm

convert-audio:
	@echo "Creating ~/media/a${id}.txt, ~/media/a${1}.en.wav and ~/media/a${1}.en.aac"
	@find ../audios/KY${id}AG_Eng -name '*.wav' -printf "file '%p'\n" > a${id}.txt
	@ffmpeg -f concat -safe 0 -i a${id}.txt -c copy a${id}.en.wav
	ffmpeg -i a${id}.en.wav -c:a aac -b:a 128k a${id}.en.aac
