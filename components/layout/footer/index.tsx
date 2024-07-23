import Discord from "@/components/basic/icons/discord";
import Telegram from "@/components/basic/icons/telegram";
import Twitter from "@/components/basic/icons/twitter";
import Logo from "@/components/basic/logo";

export default function Footer() {
  return (
    <footer className="bg-main flex p-4 justify-center">
      <div className="max-w-container w-full flex flex-col items-center gap-20">
        <div className="flex justify-between w-full flex-col gap-5 md:flex-row md:gap-3">
          <SocialSection />
          <div className="bg-placeHolder h-full flex-1 max-w-[1px]" />
          <CompanyLinks />
          <SupportLinks />
          <ProductLinks />
        </div>
        <p className="text-white text-left md:text-center">
          Gambly.io is a property of{" "}
          <span className="text-primary">
            Nextgen Virtual Gaming Group S.r.L
          </span>
          , a Gaming company registered under the ID number{" "}
          <span className="text-primary">3-102-900646</span> in Costa Rica.
        </p>
      </div>
    </footer>
  );
}

const SocialSection = () => {
  return (
    <section className="flex flex-col gap-5">
      <Logo />
      <div className="flex items-center gap-5">
        <Twitter />
        <Discord />
        <Telegram />
      </div>
      <p className="text-placeHolder">Gambly © 2024. All rights reserved</p>
    </section>
  );
};

const CompanyLinks = () => {
  return (
    <section className="flex flex-col">
      <h4 className="font-semibold mb-3 text-white">Company</h4>
      <ul className="text-placeHolder">
        <li>Whitepaper</li>
        <li>FAQ</li>
        <li>Supported Countries</li>
        <li>Contact us</li>
        <li>Careers</li>
      </ul>
    </section>
  );
};

const SupportLinks = () => {
  return (
    <section className="flex flex-col">
      <h4 className="font-semibold mb-3 text-white">Support</h4>
      <ul className="text-placeHolder">
        <li>Terms and Conditions</li>
        <li>Security</li>
        <li>Privacy Policy</li>
        <li>Licensing</li>
      </ul>
    </section>
  );
};

const ProductLinks = () => {
  return (
    <section className="flex flex-col">
      <h4 className="font-semibold mb-3 text-white">Product</h4>
      <ul className="text-placeHolder">
        <li>Tokens</li>
        <li>Deposits</li>
        <li>Withdrawals</li>
        <li>Games</li>
      </ul>
    </section>
  );
};
