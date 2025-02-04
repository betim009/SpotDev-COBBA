import yt_dlp

url = "https://www.youtube.com/watch?v=uJM4b-BRTWI&ab_channel=VintageCulture"
ydl_opts = {"format": "best"}  # Isso baixa um único arquivo sem precisar do ffmpeg

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download([url])
