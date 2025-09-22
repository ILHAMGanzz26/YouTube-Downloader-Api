const express = require("express");
const { exec } = require("child_process");

const app = express();
const port = process.env.PORT || 5000;

app.get("/downloader/ytmp4v2", async (req, res) => {
    const url = decodeURIComponent(req.query.url || "");
    if (!url) return res.json({ status: false, message: "URL tidak ada" });

    // Ambil metadata lengkap (title, thumbnail, duration)
    const metaCmd = `yt-dlp -j "${url}"`;

    exec(metaCmd, (metaErr, metaOut, metaStderr) => {
        if (metaErr || !metaOut) return res.json({ status: false, message: "Gagal mendapatkan metadata" });

        let info = {};
        try {
            info = JSON.parse(metaOut);
        } catch (e) {
            return res.json({ status: false, message: "Gagal parsing metadata" });
        }

        // Ambil URL video + audio terbaik
        const formatCmd = `yt-dlp -f "bestvideo[height<=1080]+bestaudio/best" -g "${url}"`;

        exec(formatCmd, (fmtErr, fmtOut, fmtStderr) => {
            if (fmtErr || !fmtOut) return res.json({ status: false, message: "Gagal mendapatkan video" });

            const lines = fmtOut.trim().split("\n");

            res.json({
                status: true,
                creator: "IlhamGanz",
                type: "video",
                format: info.format || "1080p",
                title: info.title,
                thumbnail: info.thumbnail,
                duration: info.duration,
                video_url: lines[0] || null,
                audio_url: lines[1] || null
            });
        });
    });
});

app.get("/", (req, res) => {
    res.json({ message: "Stable YTMP4 API running!" });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
