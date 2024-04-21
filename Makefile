convert-video: #id=1
	@echo "Converting to ~/videos/dist/v${id}.en.webm"
	@ffmpeg -i ~/videos/KYVideos_41724/KY\ ${id}\ ENG\ New\ 040424\ h264.mov -crf 10 -preset ultrafast -s 1280x720 -y ~/videos/dist/v${id}.en.webm
