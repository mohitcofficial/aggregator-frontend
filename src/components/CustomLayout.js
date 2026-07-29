import Footer from "./footer/Footer";
import Header from "./header/Header";
import CallSticker from "./items/CallSticker";
import WhatsappSticker from "./items/WhatsappSticker";
import Disclaimer from "./lpItems/Disclaimer";

function CustomLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Disclaimer />
      <WhatsappSticker />
      <CallSticker />
    </>
  );
}

export default CustomLayout;
