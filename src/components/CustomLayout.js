import Footer from "./footer/Footer";
import Header from "./header/Header";
import WhatsappSticker from "./items/WhatsappSticker";
import Disclaimer from "./lpItems/Disclaimer";

function CustomLayout({ children }) {
  return (
    <>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
      <Disclaimer />
      <WhatsappSticker />
    </>
  );
}

export default CustomLayout;
