import Layout from "../../components/Layout";
import { useSegment } from "../../lib/segment";

export default function OwlSydney() {
  useSegment("Owl Sydney Property Page");
  return (
    <Layout>
      <h1>Owl Sydney Harbour</h1>
      <p>Location: Sydney, Australia</p>
      <h2>Property Overview</h2>
      <ul>
        <li>Rooftop infinity pool with panoramic harbour views</li>
        <li>Direct access to Sydney Harbour promenade</li>
        <li>In-room spa treatments available</li>
        <li>Executive lounge with complimentary breakfast & canapés</li>
        <li>Fully equipped business centre</li>
        <li>24/7 multilingual concierge & private city tour desk</li>
      </ul>
      <h2>Parking Options</h2>
      <ul>
        <li>Secured underground car park (fee applies)</li>
        <li>Electric vehicle charging stations</li>
      </ul>
    </Layout>
  );
}
