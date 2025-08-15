import Layout from "/components/layout.js";
import { useSegment } from "/lib/segment";

export default function Dining() {
  useSegment("Dining Page");
  return (
    <Layout>
      <h1>Dining at Owl Hotel & Resorts</h1>

      <h2>The Night Owl – Fine Dining</h2>
      <p>
        Award-winning cuisine, crafted by renowned chefs. Open for lunch
        (12pm–3pm) and dinner (6pm–11pm). Dress code applies. Reservation
        recommended.
        <br />
        Specialties: Modern Asian fusion, premium seafood, chef's degustation
        menu.
      </p>

      <h2>Grove & Grain – Contemporary Brasserie</h2>
      <p>
        Relaxed, stylish atmosphere with an international à la carte menu. Open
        for lunch (11.30am–3pm) and dinner (6pm–10pm).
        <br />
        Highlights: Seasonal menus, signature cocktails, vegan-friendly dishes.
      </p>

      <h2>The Lark Café – All-day Buffet</h2>
      <p>
        Buffet spread featuring global cuisine and local specialities. Open for
        breakfast (6.30am–10.30am), lunch (12pm–2.30pm), and dinner
        (6pm–9.30pm).
        <br />
        Kid-friendly, bakery, live cooking stations, bottomless drinks packages
        available.
      </p>
    </Layout>
  );
}
