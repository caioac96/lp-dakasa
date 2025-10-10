import { ContainerInstagram } from "./styles";

export default function InstagramCarousel() {
  const posts = [
    "DPRvROtEVqh",
    "CmpNsxduklJ",
    "DOdp1RgDR1c",
    "ClWps-0OT78",
    "CmhQH7rObRd",
    "ClMenzuuxsQ"
  ];

  return (
    <ContainerInstagram>
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
    </ContainerInstagram>
  );
};
