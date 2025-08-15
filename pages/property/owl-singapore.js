import Layout from "../../components/layout";
import { useSegment } from "../../lib/segment";

export default function OwlSingapore() {
  useSegment("Owl Marina Bay Property Page");
  return (
    <Layout>
      <h1>Owl Marina Bay</h1>
      <p>Location: Marina Bay, Singapore</p>
      <h2>Property Overview</h2>
      <ul>
        <li>Infinity pool overlooking Marina Bay Sands</li>
        <li>Private sky garden and outdoor yoga pavilion</li>
        <li>Exclusive club lounge with complimentary afternoon tea</li>
        <li>Designer shopping arcade within the hotel</li>
        <li>Personal butler service in all suites</li>
        <li>Children’s adventure zone & interactive playground</li>
      </ul>
      <h2>Parking Options</h2>
      <ul>
        <li>Smart parking system with advance reservation</li>
        <li>Complimentary for all hotel guests</li>
      </ul>
    </Layout>
  );
}
