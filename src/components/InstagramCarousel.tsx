export default function InstagramCarousel() {
  const posts = [
    "DPRvROtEVqh",
    "CmpNsxduklJ",
    "CmhQH7rObRd",
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        overflowX: "auto",
        scrollSnapType: "x mandatory",
      }}
    >
      {posts.map((id) => (
        <iframe
          key={id}
          src={`https://www.instagram.com/p/${id}/embed/`}
          allowTransparency
          allowFullScreen
          frameBorder="0"
          scrolling="no"
          style={{
            width: "250px",
            height: "450px",
            borderRadius: "20px"
          }}
        />
      ))}
    </div>
  );
};
