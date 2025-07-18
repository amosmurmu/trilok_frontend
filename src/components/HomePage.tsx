import { Footer } from "./Footer";
import { NavBar } from "./Navbar";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow px-6 py-10">

        <h1 className="text-3xl font-bold underline">This is initial title for trilok</h1>
      </main>
      <Footer />
    </div>
  )
}