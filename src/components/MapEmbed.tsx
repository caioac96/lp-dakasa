export default function MapEmbed() {
    const address = "KM 121, BR-277, 719 - Rondinha, Campo Largo - PR, 83608-000";
    const encoded = encodeURIComponent(address);

    // https://www.google.com/maps/place/Da+Kasa+Porcelanas/@-25.4461794,-49.4919036,17z/data=!3m1!4b1!4m6!3m5!1s0x94dd19aafe3ddcf9:0xa0d81df760feb2fe!8m2!3d-25.4461843!4d-49.4893287!16s%2Fg%2F1xb2fqvz?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D

    // URL para embed simples
    const embedUrl = `https://www.google.com/maps?q=place:Da+Kasa+Porcelanas/${encoded}&z=12&output=embed`;

    // Link para abrir no Google Maps (app/novo tab)
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encoded}`;

    return (
        <div style={{ margin: "0 auto", width: "60%" }}>
            <p style={{ margin: "0 0 1rem 0" }}>{address}</p>

            <br />
            <div
                style={{
                    width: "100%",
                    height: "250px",
                    aspectRatio: "16/9",
                    borderRadius: 12,
                    overflow: "hidden",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                }}
            >
                <iframe
                    title="Mapa - Da Kasa"
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>

            <br />
            <p style={{ fontSize: 13, marginTop: 8 }}>
                <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                    Abrir no <b>Google Maps</b>
                </a>
            </p>
        </div>
    );
}
