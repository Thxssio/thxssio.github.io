import React, { useState } from "react";
import { Music, Download, Link2, X } from "lucide-react";
import Particle from "../Particle";
import { Toaster, toast } from "react-hot-toast";
import "./TuneDrop.css";

function extractVideoId(youtubeUrl) {
  const regex =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|embed)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
  const match = youtubeUrl.match(regex);
  return match ? match[1] : youtubeUrl.trim();
}

function TuneDrop() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!url) return;

    const rapidApiHost = process.env.REACT_APP_RAPIDAPI_HOST;
    const rapidApiKey = process.env.REACT_APP_RAPIDAPI_KEY;

    if (!rapidApiHost || !rapidApiKey) {
      toast.error("API credentials missing. Configure them in your environment.");
      return;
    }

    setStatus("loading");
    toast.loading("Processing download request...", { id: "download" });

    try {
      const videoId = extractVideoId(url.trim());
      if (!videoId) {
        throw new Error("Video ID not found.");
      }

      const apiUrl = `https://${rapidApiHost}/dl?id=${encodeURIComponent(videoId)}`;

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "x-rapidapi-key": rapidApiKey,
          "x-rapidapi-host": rapidApiHost,
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed (HTTP ${response.status})`);
      }

      const data = await response.json();

      if (!data || data.status !== "ok" || !data.link) {
        throw new Error("API response missing a download link.");
      }

      window.open(data.link, "_blank", "noopener,noreferrer");
      setStatus("success");
      toast.success("Download started!", { id: "download" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      toast.error("Track unavailable. Try another video.", {
        id: "download",
      });
    } finally {
      setUrl("");
    }
  };

  const isBusy = !url || status === "loading";
  const toastTheme = {
    background: "rgba(8, 32, 39, 0.95)",
    color: "#f8fafc",
    border: "1px solid rgba(0, 191, 99, 0.4)",
    boxShadow: "0 18px 30px rgba(0, 0, 0, 0.45)",
  };

  return (
    <section className="tunedrop">
      <Particle />
      <div className="tunedrop__inner">
        <main className="tunedrop__main">
          <div className="tunedrop-card">
            <div className="tunedrop-card__icon">
              <Music size={64} />
            </div>

            <h1 className="tunedrop-card__title">TuneDrop</h1>
            <p className="tunedrop-card__subtitle">
              Download your favourite YouTube tracks in a click
            </p>

            <form className="tunedrop-form" onSubmit={handleSubmit}>
              <div className="tunedrop-form__field">
                <span className="tunedrop-form__icon">
                  <Link2 size={18} />
                </span>

                {url ? (
                  <button
                    type="button"
                    className="tunedrop-form__clear"
                    onClick={() => setUrl("")}
                    aria-label="Clear link"
                  >
                    <X size={18} />
                  </button>
                ) : null}

                <input
                  type="text"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                  placeholder="Paste a YouTube link or video ID"
                  className="tunedrop-input"
                />
              </div>

              <button
                type="submit"
                className={`tunedrop-submit${isBusy ? " disabled" : ""}`}
                disabled={isBusy}
              >
                <Download size={18} />
                <span>{status === "loading" ? "Fetching..." : "Download audio"}</span>
              </button>
            </form>

            {status === "success" ? (
              <div className="tunedrop-status success">
                Download kicked off successfully!
              </div>
            ) : null}

            {status === "error" ? (
              <div className="tunedrop-status error">
                We could not grab this track. Try another link.
              </div>
            ) : null}
          </div>
        </main>
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: toastTheme,
        }}
      />
    </section>
  );
}

export default TuneDrop;
