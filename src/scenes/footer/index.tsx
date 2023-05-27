import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          Every day is another chance to get stronger, to eat better, to live healthier, and to be the best version of you.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">twitter</p>
          <p className="my-5">linkedin</p>
          <p>facebook</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">If you also neeed this website whatsapp or call me on.</p>
          <p>(+254)101232209</p>
          <p>(+254)797466387</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
