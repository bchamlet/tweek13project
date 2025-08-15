import Layout from "/components/Layout";
import { useSegment } from "../lib/segment";
import { useRouter } from "next/router";

const properties = [
  { name: "Owl Bali Resort", city: "Bali", slug: "owl-bali" },
  { name: "Owl Sydney Harbour", city: "Sydney", slug: "owl-sydney" },
  { name: "Owl Shibuya", city: "Tokyo", slug: "owl-tokyo" },
  { name: "Owl Auckland Central", city: "Auckland", slug: "owl-auckland" },
  { name: "Owl Marina Bay", city: "Singapore", slug: "owl-singapore" },
];

export default function SearchResults() {
  useSegment("Search Results");
  const router = useRouter();

  return (
    <Layout>
      <h1>Search Results</h1>
      <ul>
        {properties.map((p) => (
          <li key={p.slug}>
            <a href={`/property/${p.slug}`}>
              {p.name} – {p.city}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
