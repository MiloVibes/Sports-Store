import {
  HiArrowLongRight,
  HiArrowSmallRight,
  HiOutlineHeart,
} from "react-icons/hi2";
import "./style.css";
import iPhone from "../../../../../../public/assets/iphone.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function HomeProducts() {
  const sports = [
    {
      name: "adidas Adult Argentina Lionel Messi #10 2024 Home Replica Jersey",
      image: "/assets/Messi_Jersey.png",
    },
    {
      name: "Head Boom MP 2024",
      image: "/assets/Head_Boom_MP_2024.png",
    },
    {
      name: "Boost Oxygen Natural - 10L Canister",
      image: "/assets/Boost_Oxygen_Natural.png",
    },
    {
      name: "Riddell Youth SpeedFlex Football Helmet",
      image: "/assets/Riddell Youth SpeedFlex Football Helmet.png",
    },
  ];
  const shoes = [
    {
      name: "adidas F50 Elite Messi x Bad Bunny FG Soccer Cleats",
    },
    {
      name: "Nike Men's Air Force 1 '07 Shoes",
    },
    {
      name: "Nike Men's Air Force 1 '07 LV8 Shoes",
    },
    {
      name: "Brooks Women's Glycerin 21 Running Shoes",
    },
  ];
  const women = [
    {
      name: "Nike Women's Sportswear Club Fleece Pullover Hoodie",
    },
    {
      name: "Nike Women's Pro 3” Shorts",
    },
    {
      name: "Nike Women's One High-Waisted 7/8 Leggings with Pockets",
    },
    {
      name: "Nike Women's Sportswear Phoenix Fleece Over-Oversized Pullover Hoodie",
    },
  ];
  const men = [
    {
      name: "Mixer",
    },
    {
      name: "Mixer",
    },
    {
      name: "Mixer",
    },
    {
      name: "Mixer",
    },
  ];

  function truncateText(text: string, maxLength: number) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }
  return (
    <section className="homeProducts flex alignCenter justifyCenter width100">
      <div className="hProductsContainer width95 maxWidth">
        <div className="hProductsTab">
          <div className="hPTHead flex alignCenter spaceBtw">
            <h2>Sports</h2>
            <a href="/">
              Explore More{" "}
              <HiArrowSmallRight style={{ display: "inline-block" }} />
            </a>
          </div>
          <div className="hProductTabChild flex alignCenter spaceBtw gap1">
            {sports.map((item, index) => {
              return (
                <div key={index} className="hProductBox">
                  <div className="hPBWishlist width100 flex alignCenter justifyEnd">
                    <HiOutlineHeart className="hPBWishlistIcon" />
                  </div>
                  <div className="hPBImage">
                    <Image src={item.image} alt={item.name} width={200} height={200} />
                  </div>
                  <h3>{truncateText(item.name, 35)}</h3>
                  <p>Shipped in 4-7 Days</p>
                  <h4>
                    <s>$1399</s> $1299
                  </h4>
                  <div className="hPBButtons flex alignCenter spaceBtw gap1">
                    <button className="hPBButton hPBButtonCart">
                      <AiOutlineShoppingCart
                        style={{ display: "inline-block" }}
                      />{" "}
                      Add To Cart
                    </button>
                    <button className="hPBButton">
                      {" "}
                      Buy Now{" "}
                      <HiArrowLongRight style={{ display: "inline-block" }} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hProductsTab marginTop3">
          <div className="hPTHead flex alignCenter spaceBtw">
            <h2>Shoes</h2>
            <a href="/">
              Expore More{" "}
              <HiArrowSmallRight style={{ display: "inline-block" }} />
            </a>
          </div>
          <div className="hProductTabChild flex alignCenter spaceBtw gap1">
            {shoes.map((item, index) => {
              return (
                <div key={index} className="hProductBox">
                  <div className="hPBWishlist width100 flex alignCenter justifyEnd">
                    <HiOutlineHeart className="hPBWishlistIcon" />
                  </div>
                  <div className="hPBImage">
                    {/* <Image src={item.image} alt="" /> */}
                    IMAGE
                  </div>
                  <h3>{truncateText(item.name, 35)}</h3>
                  <p>Shipped in 4-7 Days</p>
                  <h4>
                    <s>$139</s> $129
                  </h4>
                  <div className="hPBButtons flex alignCenter spaceBtw gap1">
                    <button className="hPBButton hPBButtonCart">
                      <AiOutlineShoppingCart
                        style={{ display: "inline-block" }}
                      />{" "}
                      Add To Cart
                    </button>
                    <button className="hPBButton">
                      {" "}
                      Buy Now{" "}
                      <HiArrowLongRight style={{ display: "inline-block" }} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hProductsTab marginTop3">
          <div className="hPTHead flex alignCenter spaceBtw">
            <h2>Women</h2>
            <a href="/">
              Expore More{" "}
              <HiArrowSmallRight style={{ display: "inline-block" }} />
            </a>
          </div>
          <div className="hProductTabChild flex alignCenter spaceBtw gap1">
            {women.map((item, index) => {
              return (
                <div key={index} className="hProductBox">
                  <div className="hPBWishlist width100 flex alignCenter justifyEnd">
                    <HiOutlineHeart className="hPBWishlistIcon" />
                  </div>
                  <div className="hPBImage">
                    {/* <Image src={item.image} alt="" /> */}
                    IMAGE
                  </div>
                  <h3>{truncateText(item.name, 35)}</h3>
                  <p>Shipped in 4-7 Days</p>
                  <h4>
                    <s>$1399</s> $1299
                  </h4>
                  <div className="hPBButtons flex alignCenter spaceBtw gap1">
                    <button className="hPBButton hPBButtonCart">
                      <AiOutlineShoppingCart
                        style={{ display: "inline-block" }}
                      />{" "}
                      Add To Cart
                    </button>
                    <button className="hPBButton">
                      {" "}
                      Buy Now{" "}
                      <HiArrowLongRight style={{ display: "inline-block" }} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hProductsTab marginTop3">
          <div className="hPTHead flex alignCenter spaceBtw">
            <h2>Men</h2>
            <a href="/">
              Expore More{" "}
              <HiArrowSmallRight style={{ display: "inline-block" }} />
            </a>
          </div>
          <div className="hProductTabChild flex alignCenter spaceBtw gap1">
            {men.map((item, index) => {
              return (
                <div key={index} className="hProductBox">
                  <div className="hPBWishlist width100 flex alignCenter justifyEnd">
                    <HiOutlineHeart className="hPBWishlistIcon" />
                  </div>
                  <div className="hPBImage">
                    {/* <Image src={item.image} alt="" /> */}
                    IMAGE
                  </div>
                  <h3>{truncateText(item.name, 35)}</h3>
                  <p>Shipped in 4-7 Days</p>
                  <h4>
                    <s>$1399</s> $1299
                  </h4>
                  <div className="hPBButtons flex alignCenter spaceBtw gap1">
                    <button className="hPBButton hPBButtonCart">
                      <AiOutlineShoppingCart
                        style={{ display: "inline-block" }}
                      />{" "}
                      Add To Cart
                    </button>
                    <button className="hPBButton">
                      {" "}
                      Buy Now{" "}
                      <HiArrowLongRight style={{ display: "inline-block" }} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
