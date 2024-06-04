import Benefit from "./components/Benefit";
import Dashboard from "./components/Dashboard";
import FAQ from "./components/FAQ";
import FirstPage from "./components/FirstPage";
import FooterSecction from "./components/Footer";
import Header from "./components/Header";
import Lines from "./components/Lines";
import PaymentBlock from "./components/PaymentBlock";
import PlateSecction from "./components/PlateSecction";
import Simple from "./components/Simple";

export default function page() {
  return (
    <div>
      <Header />
      <FirstPage />
      <Lines />
      <Benefit />
      <Simple />
      <PaymentBlock />
      <Dashboard />
      <PlateSecction />
      <FAQ />
      <FooterSecction/>
    </div>
  )
}