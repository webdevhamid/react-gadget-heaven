const Footer = () => {
  return (
    <footer className=" p-28 bg-white">
      <div className="pb-8 text-center">
        <h2 className="font-bold text-3xl mb-3">Gadget Heaven</h2>
        <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="divider"></div>
      <div className="container mx-auto footer  place-content-center justify-between text-black">
        <nav>
          <h6 className="footer-title"> Product Support</h6>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
