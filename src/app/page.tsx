import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <>
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-muted">Homepage content coming next.</p>
        </main>
        <Footer />
      </>
  );
}