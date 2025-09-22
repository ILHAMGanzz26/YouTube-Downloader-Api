# Fitur ✨
- Mendownload video YouTube hingga 1080p
- Mendapatkan URL video & audio terpisah
- Support YouTube Shorts
- Bisa digabung menggunakan ffmpeg menjadi satu file MP4
- Ringan, cocok dijalankan di Termux atau VPS

# Persyaratan ⚠
- Termux terbaru / Node.js environment
- Node.js v22+
- Python 3 (untuk yt-dlp)
- ffmpeg (opsional, untuk merge video + audio)

## Instalasi Via Termux
```php
$ pkg update -y
$ pkg upgrade -y
$ pkg install git -y
$ pkg install nodejs python ffmpeg -y
$ git clone https://github.com/ILHAMGanzz26/YouTube-Downloader-Api
$ cd YouTube-Downloader-Api
$ pip install yt-dlp
```
• Install dependencies:
```bash
npm install
```
> Jika error permission (EACCES), gunakan npm install --no-bin-links.

## Run Api🔥
```bash
node index.js
```
> API berjalan di: http://127.0.0.1:5000

### Endpoint:
```text
http://127.0.0.1:5000/downloader/ytmp4v2?url=https://youtu.be/z_dt9_D6g40?si=T7Myco7GRAxsjtQg
```

## Contoh Response
```json
{
  "status": true,
  "creator": "IlhamGanz",
  "type": "video",
  "format": "248 - 1920x1080 (1080p)+251 - audio only (medium)",
  "title": "Dj Buka Hatimu Armada Sloww Reverb Trend Bolank Fvnky Viral Tiktok",
  "thumbnail": "https://i.ytimg.com/vi/z_dt9_D6g40/maxresdefault.jpg",
  "duration": 239,
  "video_url": "https://rr3---sn-poqvn5u-ngbe.googlevideo.com/videoplayback?expire=1758553409&ei=4RDRaMa4BcKqpt8Prs328A0&ip=114.10.16.130&id=o-ANp29xgrbjVm1fvmvnVb6nMf0bNak1XRGW5Bq97tGGHV&itag=248&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1758531809%2C&mh=ou&mm=31%2C29&mn=sn-poqvn5u-ngbe%2Csn-poqvn5u-jb3k&ms=au%2Crdu&mv=m&mvi=3&pl=23&rms=au%2Cau&initcwndbps=677500&bui=ATw7iSUxIwguvlJ3UR0bw9Dqt5eFI4Qbn3oQR94K8bdjvcVMZ-3bhSJIepLu68ty_lKcVsgNRqoVGlTY&spc=hcYD5TjdjWOD&vprv=1&svpuc=1&mime=video%2Fwebm&ns=8y8g5DcdbjS2LlNReMrHqVkQ&rqh=1&gir=yes&clen=34841844&dur=238.766&lmt=1758477172433355&mt=1758531235&fvip=3&keepalive=yes&fexp=51552689%2C51565116%2C51565682%2C51580968&c=TVHTML5_SIMPLY&sefc=1&txp=530F224&n=L4i8K68xI88nOw&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIgZM_qSeWUWnsoOGeKfwWjU9CFBONDcgFJnDhrLF5mifkCIQDQeFvc68nvmSjhxDL3mN0eXDhFqDCxBrJz1TJVz1Islg%3D%3D&sig=AJfQdSswRgIhAIgNRAfdMgYZn6LcS6RDRX8fIvY8S7gd-X8LvDIvJ4YxAiEAsfTRfsHdbEL40JV0IohSWpG5eqf5o_VLoc-uu5vg9pI%3D",
  "audio_url": "https://rr3---sn-poqvn5u-ngbe.googlevideo.com/videoplayback?expire=1758553409&ei=4RDRaMa4BcKqpt8Prs328A0&ip=114.10.16.130&id=o-ANp29xgrbjVm1fvmvnVb6nMf0bNak1XRGW5Bq97tGGHV&itag=251&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1758531809%2C&mh=ou&mm=31%2C29&mn=sn-poqvn5u-ngbe%2Csn-poqvn5u-jb3k&ms=au%2Crdu&mv=m&mvi=3&pl=23&rms=au%2Cau&initcwndbps=677500&bui=ATw7iSUxIwguvlJ3UR0bw9Dqt5eFI4Qbn3oQR94K8bdjvcVMZ-3bhSJIepLu68ty_lKcVsgNRqoVGlTY&spc=hcYD5TjdjWOD&vprv=1&svpuc=1&mime=audio%2Fwebm&ns=8y8g5DcdbjS2LlNReMrHqVkQ&rqh=1&gir=yes&clen=4023388&dur=238.801&lmt=1758477304570330&mt=1758531235&fvip=3&keepalive=yes&fexp=51552689%2C51565116%2C51565682%2C51580968&c=TVHTML5_SIMPLY&sefc=1&txp=5318224&n=L4i8K68xI88nOw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=APaTxxMwRQIgZM_qSeWUWnsoOGeKfwWjU9CFBONDcgFJnDhrLF5mifkCIQDQeFvc68nvmSjhxDL3mN0eXDhFqDCxBrJz1TJVz1Islg%3D%3D&sig=AJfQdSswRgIhAKW1-Dr9evWz0ApoEwJePr9baC0fXh3DZ46ApnupSGj9AiEAyDtMd4Ym3OuXUrQO7LXHvn_CXzJlJ14z8GkQ71sIUuE%3D"
}
```

## Merge Video + Audio (Opsional)
```python
ffmpeg -i "<video_url>" -i "<audio_url>" -c copy output.mp4
```
## Tips
• Update yt-dlp agar selalu support YouTube terbaru:
```bash
pip install -U yt-dlp
```
• Bisa diakses melalui IP Termux di jaringan lokal:
```txt
http://<IP_HP>:5000/downloader/ytmp4v2?url=<YOUTUBE_URL>
```
Untuk hosting permanen, bisa deploy ke Firebase Cloud Run, Render, atau Heroku.

## Lisensi
Open Source, bebas digunakan

Creator: IlhamGanz
