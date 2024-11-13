import Footer from "./footer/Footer";
import Header from "./header/Header";
import WhatsappSticker from "./items/WhatsappSticker";

function CustomLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <WhatsappSticker />
    </>
  );
}

export default CustomLayout;
