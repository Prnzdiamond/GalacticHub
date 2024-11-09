const Footer = () => {
  return (
    <>
      <div className="footer w-full bg-black text-white">
        <div className="container mx-auto py-12 px-6 md:px-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="footer-section">
            <h5 className="text-xl font-semibold mb-4">About Us</h5>
            <p className="text-sm">
              We are a company dedicated to providing the best sci-fi movie
              experiences.
            </p>
          </div>
          <div className="footer-section">
            <h5 className="text-xl font-semibold mb-4">Categories</h5>
            <ul className="space-y-2">
              <li>Sci-Fi</li>
              <li>Fantasy</li>
              <li>Drama</li>
              <li>Action</li>
              <li>
                {" "}
                <a href="#" className=" hover:text-gray-300">
                  View all Categories
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h5 className="text-xl font-semibold mb-4">Contact</h5>
            <ul className="space-y-2">
              <li>Email: info@galactichub.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Location: 123 Space Avenue</li>
            </ul>
          </div>
          <div className="footer-section">
            <h5 className="text-xl font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <img
                  src="/path/to/facebook-icon.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  src="/path/to/twitter-icon.svg"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src="/path/to/instagram-icon.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom w-full bg-primary py-4 text-center text-sm">
          © 2024 GalacticHub. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
