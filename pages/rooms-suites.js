import Layout from "/components/layout";
import { useSegment } from "/lib/segment";

const rooms = [
  {
    name: "Deluxe Room",
    description:
      "Our spacious Deluxe Rooms offer plush king or twin beds, elegant marble bathrooms, floor-to-ceiling windows and a tranquil sitting area. Designed for restful nights and productive days, complete with premium linen and blackout drapes.",
    amenities: [
      "King or Twin beds",
      "City, garden, or ocean view (property dependent)",
      "Marble bathroom with rain shower",
      "Nespresso coffee machine",
      "Fast, complimentary Wi-Fi",
      "40-inch smart TV",
    ],
    size: "32–38sqm",
  },
  {
    name: "Executive Room",
    description:
      "Located on higher floors, Executive Rooms feature a designer work-space and exclusive access to the Executive Lounge, where daily breakfast and evening canapés are served. Enjoy panoramic vistas and enhanced amenities.",
    amenities: [
      "King bed",
      "Access to Executive Lounge",
      "Daily gourmet breakfast",
      "Evening canapés and cocktails",
      "Complimentary pressing of two garments per stay",
      "Upgraded bath amenities",
    ],
    size: "38–42sqm",
  },
  {
    name: "Premier Suite",
    description:
      "Experience luxury living in our Premier Suites, featuring a separate living area perfect for entertaining or unwinding. Smart home technology, spa-inspired bathroom, and curated in-room art complete your stay.",
    amenities: [
      "Separable living and bedroom areas",
      "Walk-in wardrobe",
      "Deep soaking bathtub",
      "24-hour in-suite dining",
      "Personalised pillow menu",
      "One complimentary minibar refill per stay",
    ],
    size: "55–65sqm",
  },
  {
    name: "Skyline Suite",
    description:
      "Positioned on the hotel’s uppermost floors, our Skyline Suites guarantee breathtaking skyline or ocean views, tailor-made amenities, and executive lounge access. Enjoy a daily in-suite breakfast and a private check-in experience.",
    amenities: [
      "Uninterrupted high-floor views",
      "Private check-in/check-out",
      "Daily in-suite breakfast",
      "Return airport transfer (one per stay)",
      "Late checkout until 2pm (subject to availability)",
      "Luxury spa bathroom products",
    ],
    size: "68–80sqm",
  },
  {
    name: "Owl Presidential Suite",
    description:
      "The ultimate statement of grandeur, the Owl Presidential Suite features opulent decor, grand dining and living rooms, a private terrace (in select locations), a dedicated butler and chef, and the most exclusive benefits including VIP transfers.",
    amenities: [
      "Multiple bedrooms, living and dining areas",
      "Private terrace or balcony (property dependent)",
      "Fully equipped kitchen and bar",
      "Dedicated butler and chef",
      "Exclusive VIP privileges",
      "Private spa treatment room",
    ],
    size: "150–230sqm",
  },
];

export default function RoomsSuites() {
  useSegment("Rooms & Suites");
  return (
    <Layout>
      <h1>Rooms &amp; Suites</h1>
      <p>
        Retreat to timeless comfort in our curated collection of rooms and
        suites. Every accommodation at Owl Hotel & Resorts blends bespoke
        furnishings, cutting-edge technology and thoughtful touches to create
        your perfect sanctuary.
      </p>
      <div style={{ marginTop: "2rem" }}>
        {rooms.map((room, idx) => (
          <div
            key={room.name}
            style={{
              marginBottom: "2.5rem",
              padding: "2rem",
              background: "#fafbfc",
              borderRadius: "10px",
              boxShadow: "0 2px 8px #0002",
            }}
          >
            <h2 style={{ marginBottom: "0.3rem" }}>{room.name}</h2>
            <em
              style={{
                color: "#626262",
                marginBottom: "1rem",
                display: "block",
              }}
            >
              {room.size}
            </em>
            <p>{room.description}</p>
            <b>Amenities include:</b>
            <ul style={{ marginLeft: "1.5rem" }}>
              {room.amenities.map((am, i) => (
                <li key={i}>{am}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
}
