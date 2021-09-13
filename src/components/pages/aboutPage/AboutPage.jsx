import { Header, SearchPanel, Footer, About } from "../../pageElements";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="container">
      <Header />
      <SearchPanel />
      <About />
      <Footer />
    </div>
  );
}
