import Layout from "/components/Layout.js";
import HeroImage from "../components/HeroImage";
import SearchBar from "../components/SearchBar";
import { useSegment } from "../lib/segment";

export default function Home() {
  useSegment("Home");
  return (
    <Layout>
      <HeroImage />
      <div className="container">
        <h1>Welcome to Owl Hotel and Resorts</h1>
        <p>
          Experience timeless luxury at our stunning destinations across Asia
          and Oceania.
        </p>
        <SearchBar />
      </div>
    </Layout>
  );
}
