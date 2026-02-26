import FooterBottom from "./FooterBottom";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterPartners from "./FooterPartners";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <div className="relative mt-12 w-full bg-neutral-900 text-white">
      <Newsletter />
      <footer className="pt-24 pb-12">
        <div className="text-center opacity-50">
          <FooterBrand />
          <FooterLinks />
          <FooterPartners />
          <FooterBottom />
        </div>
      </footer>
    </div>
  );
}
