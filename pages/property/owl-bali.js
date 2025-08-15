import Layout from "../../components/layout";
import { useSegment } from "../../lib/segment";

export default function OwlBali() {
  useSegment("Owl Bali Property Page");
  return (
    <Layout>
      <h1>Owl Bali Resort</h1>
      <p>Location: Bali, Indonesia</p>
      <h2>Property Overview</h2>
      <ul>
        <li>Infinity pool with ocean views</li>
        <li>Private beach access</li>
        <li>Full-service spa & wellness centre</li>
        <li>Premium fitness studio</li>
        <li>Complimentary high-speed Wi-Fi throughout</li>
        <li>Kids’ club, babysitting (on request)</li>
      </ul>
      <h2>Parking Options</h2>
      <ul>
        <li>Valet parking (complimentary for guests)</li>
        <li>Onsite covered parking garage</li>
      </ul>
    </Layout>
  );
}
