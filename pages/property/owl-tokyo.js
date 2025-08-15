import Layout from "../../components/Layout";
import { useSegment } from "../../lib/segment";

export default function OwlTokyo() {
  useSegment("Owl Tokyo Property Page");
  return (
    <Layout>
      <h1>Owl Shibuya</h1>
      <p>Location: Shibuya, Tokyo, Japan</p>
      <h2>Property Overview</h2>
      <ul>
        <li>Sky lounge with 360° city views</li>
        <li>Authentic Japanese bathhouse (onsen-style)</li>
        <li>Robotic butler room delivery</li>
        <li>Virtual reality entertainment suites</li>
        <li>Pillow & bedding concierge</li>
        <li>24-hour fitness studio with Peloton bikes</li>
      </ul>
      <h2>Parking Options</h2>
      <ul>
        <li>Valet parking (limited availability)</li>
        <li>Nearby public parking lots</li>
      </ul>
    </Layout>
  );
}
