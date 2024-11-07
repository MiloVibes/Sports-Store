import "./style.css";
export default function Categories() {
  return (
    <section className="categories flex alignCenter justifyCenter width100">
      <div className="catContainer flex alignCenter spaceBtw width95 maxWidth gap1 ">
        <a href="/" className="catBox">
          <p>Sports</p>
        </a>
        <a href="/" className="catBox">
          <p>Shoes</p>
        </a>
        <a href="/" className="catBox">
          <p>Women</p>
        </a>
        <a href="/" className="catBox">
          <p>Men</p>
        </a>
        <a href="/" className="catBox">
          <p>Kids</p>
        </a>
        <a href="/" className="catBox">
          <p>Accessories</p>
        </a>
        <a href="/" className="catBox">
          <p>Exercise and Wellness</p>
        </a>
        <a href="/" className="catBox">
          <p>Outdoor</p>
        </a>
        <a href="/" className="catBox">
          <p>Fan Shop</p>
        </a>
        <a href="/" className="catBox">
          <p>Sale</p>
        </a>
      </div>
    </section>
  );
}
