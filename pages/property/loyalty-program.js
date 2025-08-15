import Layout from "../components/Layout";
import { useSegment } from "../lib/segment";

export default function LoyaltyProgram() {
  useSegment("Loyalty Program Page");
  return (
    <Layout>
      <h1>Owl Rewards Loyalty Program</h1>
      <p>
        Discover a world of privileges with <strong>Owl Rewards</strong>. Earn
        points every time you stay, dine, or enjoy our amenities, and unlock
        exclusive benefits across all Owl Hotel and Resorts destinations.
      </p>
      <h2>How It Works</h2>
      <ul>
        <li>
          Earn <b>10 points</b> for every 1 USD spent on eligible stays and
          services.
        </li>
        <li>
          Redeem points for complimentary nights, room upgrades, dining, spa
          treatments, and more.
        </li>
        <li>Enjoy personalized offers and member-only rates.</li>
      </ul>
      <h2>Membership Tiers</h2>

      <h3>Hatchling – Entry Level</h3>
      <ul>
        <li>Member-only rates on accommodation</li>
        <li>Late checkout (subject to availability)</li>
        <li>Welcome drink on arrival</li>
      </ul>

      <h3>Feather – 10 Nights or 5,000 Points in a Calendar Year</h3>
      <ul>
        <li>All Hatchling benefits</li>
        <li>Complimentary daily breakfast for one</li>
        <li>Early check-in (subject to availability)</li>
        <li>Priority waitlist for sold out dates</li>
      </ul>

      <h3>Nest – 30 Nights or 20,000 Points in a Calendar Year</h3>
      <ul>
        <li>All Feather benefits</li>
        <li>Double points on dining and spa services</li>
        <li>Room upgrade (subject to availability)</li>
        <li>Exclusive members’ events and experiences</li>
      </ul>

      <h3>Flight – 60 Nights or 50,000 Points in a Calendar Year</h3>
      <ul>
        <li>All Nest benefits</li>
        <li>Guaranteed room availability with 48 hours notice</li>
        <li>Dedicated reservations line</li>
        <li>Complimentary suite upgrade once per year</li>
        <li>Personalized welcome amenity</li>
      </ul>

      <h2>Join Today</h2>
      <p>
        Membership is free. Sign up online or at any Owl Hotel and Resorts front
        desk and start earning rewards on your next stay.
      </p>
    </Layout>
  );
}
