import Layout from "../../components/layout";
import { useSegment } from "../../lib/segment";

export default function OwlAuckland() {
  useSegment("Owl Auckland Property Page");
  return (
    <Layout>
      <h1>Owl Auckland Central</h1>
      <p>Location: Auckland, New Zealand</p>
      <h2>Property Overview</h2>
      <ul>
        <li>Heated indoor lap pool with atrium ceiling</li>
        <li>Private in-room saunas in suite categories</li>
        <li>Direct access to Queen Street shopping district</li>
        <li>Pet-friendly accommodation & dog-walking service</li>
        <li>Wine-tasting lounge featuring New Zealand vintages</li>
        <li>Complimentary city bikes & guided walking tours</li>
      </ul>
      <h2>Parking Options</h2>
      <ul>
        <li>Self-parking (fee applies)</li>
        <li>Valet parking available 24/7</li>
      </ul>
    </Layout>
  );
}
