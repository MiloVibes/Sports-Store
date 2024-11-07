import "./style.css";
export default function Footer() {
  return (
    <footer className="width100 flex alignCenter justifyCenter flexColumn">
      <div className="footerContainer width95 maxWidth flex alignStart spaceBtw gap1">
        
        <div className="fMenu">
          <h3>Pages</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Login</a></li>
            <li><a href="/">Signup</a></li>
            <li><a href="/">Signup As Vendor</a></li>
            <li><a href="/">Signup As Brand</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>

        <div className="fMenu">
          <h3>Social</h3>
          <ul>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">LinkedIn</a></li>
            <li><a href="/">Pinterest</a></li>
          </ul>
        </div>

        <div className="fMenu">
          <h3>Categories</h3>
          <ul>
            <li><a href="/">Soccer</a></li>
            <li><a href="/">Basketball</a></li>
            <li><a href="/">Baseball</a></li>
            <li><a href="/">Fitness & Training</a></li>
            <li><a href="/">Outdoor Sports</a></li>
            <li><a href="/">Running</a></li>
            <li><a href="/">Cycling</a></li>
            <li><a href="/">Golf</a></li>
            <li><a href="/">Swimming</a></li>
            <li><a href="/">More Sports</a></li>
          </ul>
        </div>

        <div className="fMenu">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Footwear</a></li>
            <li><a href="/">Apparel</a></li>
            <li><a href="/">Equipment</a></li>
            <li><a href="/">Sports Nutrition</a></li>
            <li><a href="/">Fan Gear</a></li>
            <li><a href="/">Accessories</a></li>
            <li><a href="/">Protective Gear</a></li>
            <li><a href="/">Training Gear</a></li>
            <li><a href="/">Clearance</a></li>
          </ul>
        </div>

        <div className="fMenu">
          <h3>Legal</h3>
          <ul>
            <li><a href="/">Privacy & Policy</a></li>
            <li><a href="/">Terms & Conditions</a></li>
            <li><a href="/">Refund Policy</a></li>
            <li><a href="/">Return Policy</a></li>
            <li><a href="/">Careers</a></li>
          </ul>
        </div>

        <div className="fMenu">
          <h1>Mero&apos;s Sporting Goods</h1>
        </div>

      </div>
      
      <div className="fCopyright width95 maxWidth flex alignCenter spaceBtw">
        <p>© Copyright 2024 | Mero&apos;s Sporting Goods</p>
        {/* <a href="/">Super Admin</a> */}
      </div>
    </footer>
  );
}
