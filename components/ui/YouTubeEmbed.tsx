type YouTubeEmbedProps = {
  /** A specific video id, or omit to use the channel's latest-uploads playlist */
  videoId?: string;
  playlistId?: string;
  title?: string;
  autoplay?: boolean;
  rounded?: boolean;
};

/**
 * Silent, looping YouTube embed. Defaults to CFC's latest-uploads playlist so
 * the "Latest Message" always reflects the most recent video on the channel.
 */
export function YouTubeEmbed({
  videoId,
  playlistId,
  title = "Christian Family Church",
  autoplay = true,
  rounded = true,
}: YouTubeEmbedProps) {
  const base = videoId
    ? `https://www.youtube.com/embed/${videoId}`
    : `https://www.youtube.com/embed/videoseries`;
  const params = new URLSearchParams({
    mute: "1",
    rel: "0",
    modestbranding: "1",
    ...(autoplay ? { autoplay: "1" } : {}),
    ...(playlistId ? { list: playlistId, loop: "1" } : {}),
  });

  return (
    <div
      style={{
        position: "relative",
        borderRadius: rounded ? 8 : 0,
        overflow: "hidden",
        aspectRatio: "16 / 9",
        boxShadow: "0 30px 60px -30px rgba(11,24,48,.5)",
        background: "#000",
      }}
    >
      <iframe
        src={`${base}?${params.toString()}`}
        title={title}
        loading="lazy"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      />
    </div>
  );
}
