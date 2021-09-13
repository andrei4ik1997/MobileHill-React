import { Header, SearchPanel, Footer,Contacts } from "../../pageElements";
import { useEffect } from "react";


export default function ContactsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="container">
      <Header />
      <SearchPanel />
      <Contacts />
      <Footer />
    </div>
  );
}