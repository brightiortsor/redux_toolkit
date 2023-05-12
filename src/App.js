import styled from "styled-components";
import Link from "next/link";
import { breakpoints, colors, sizes } from "./theme";

export const Section = styled.div`
  width: 100%;
  padding: 4rem 0;
`;

// Hero section styling
export const HeroSection = styled.section`
  min-height: 80vh;
  width: 100%;
  padding-top: 15rem;
  box-shadow: 0px 8px 15px 0px rgba(8, 0, 42, 0.18);
`;
export const Wrapper = styled.div`
  width: 98%;
  max-width: ${sizes.wrapperWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .red-line_small {
    width: 60px;
    height: 5px;
    background: ${colors.primaryColor};
    border-radius: 3px;

    margin-bottom: 1.4rem;
  }

  .headline {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */
    letter-spacing: 0.085em;
    text-transform: uppercase;
    color: #636363;
  }
  h1 {
    font-weight: 700;
    font-size: 46px;
    line-height: 70px;
    text-align: center;

    color: ${colors.textColor};
    margin: 1rem 0;
  }
  .red-line {
    width: 200px;
    height: 5px;
    background: ${colors.primaryColor};
    border-radius: 3px;
  }
`;

export const Experience = styled.div`
  display: flex;
  justify: space-between;
  align: center;
  flex-direction: row;

  margin-top: 1.5rem;
  width: 100%;

  div {
    width: 50%;
    display: flex;
    justify: center;
    align-items: center;

    h1 {
      font-weight: 800;
      font-size: 180px;
      line-height: 235px;

      leading-trim: both;
      text-edge: cap;
      text-align: center;

      background: linear-gradient(255.79deg, #ac2121 14.97%, #e9000e 89.5%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;

      margin-right: 1rem;
    }
    h4 {
      font-weight: 400;
      font-size: 20px;
      line-height: 170%;
      /* or 34px */

      color: #414141;
    }
    .details {
      font-weight: 400;
      font-size: 20px;
      line-height: 170%;
      /* or 34px */

      color: #414141;
      text-align: start;
      padding-left: 2.5rem;
    }
  }
`;

export const Associates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem 0;

  .wrapper {
    max-width: 1200px;
    position: relative;
  }
  .wrapper .carousel {
    white-space: nowrap;
    overflow: hidden;

    display: flex;
  }
  @media (max-width: 576px) {
    margin: 1.5rem 0.8rem;
  }
`;

export const OfferContainer = styled.div`
  display: flex;
  justify: center;
  align: start;
`;

export const SearchForm = styled.div`
  margin-bottom: 1rem;
  .search-box {
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 0.5rem 0.8rem;
    display: flex;
    justify: start;
    align: center;
    width: 80%;

    svg {
      font-size: 24px;
      color: ${colors.textColor};
      margin-right: 1.4rem;
    }
    input {
      border: none;
      outline: none;
      background: transparent;
      color: ${colors.textColor};
      width: 400px;

      ::placeholder {
        font-size: 16px;
      }
    }
  }
`;
export const Details = styled.div`
  width: 60%;
  padding: 1rem;
  text-align: start;

  .red-line_small {
    width: 60px;
    height: 5px;
    background: ${colors.primaryColor};
    border-radius: 3px;

    margin-bottom: 1.4rem;
  }
  .offer-details {
    h3 {
      padding-top: 1rem;
      padding-bottom: 0.9rem;
      font-weight: 600;
      font-size: 25px;
      line-height: 28px;
      /* identical to box height, or 112% */
      text-align: start;

      color: ${colors.textColor};
    }
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 170%;

      color: ${colors.textColor};
      margin-bottom: 1rem;
    }
    a {
      color: ${colors.primaryColor};

      display: flex;
      justify: start;
      align-items: center;
      flex-direction: row;

      text-transform: uppercase;
      margin: 0.6rem 0;

      svg {
        font-size: 32px;
        font-weight: 600;
        padding-left: 0.8rem;
      }
    }
  }
`;

export const Tabs = styled.div`
  width: 40%;
  padding: 0 1.5rem;
  h3 {
    font-weight: 600;
    font-size: 30px;
    line-height: 28px;
    text-align: start;
    color: ${colors.textColor};
    padding-bottom: 0.9rem;
    margin-top: 0.7rem;
  }
  .tabs-container {
    width: 100%;
    padding: 1rem;

    a {
      color: ${colors.textColor};
    }

    ul {
      display: flex;
      flex-direction: column;
      li {
        /* padding: 0.5rem 2rem; */
        margin: 0.6rem 0;
        background: transparent;
        color: ${colors.textColor};
        list-style: none;
        border: 1px solid #808587;
        border-radius: 6px;
        font-weight: 600;
        font-size: 16px;
        line-height: 36px;
        /* identical to box height, or 150% */
        text-align: center;
        text-transform: capitalize;

        button {
          background: transparent;
          width: 100%;
          padding: 0.5rem 2rem;
        }
      }
      li.active {
        background: radial-gradient(
          144.82% 1073.17% at 144.82% 108.82%,
          #c90303 0%,
          #981e13 100%
        );
        color: white;
      }
    }
  }
`;

export const BannerSection = styled.div`
  width: 98%;
  padding: 2rem 1rem;
  background: linear-gradient(255.79deg, #ac2121 14.97%, #e9000e 89.5%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .banner-details {
    display: flex;
    gap: 0.5rem;
  }

  .details-title1 {
    color: #fff;
    font-size: 14px;
  }

  .details-title2 {
    color: #fff;
    font-weight: 700;
    font-size: 24px;
    width: 85%;
  }

  .cta-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      background: #fff;
      border-radius: 1rem;
      padding: 0.4rem 0.8rem;
      color: #e9000e;
      font-weight: 600;
      font-size: 14px;
      min-width: 150px;

      :hover {
        background: transparent;
        border: 1px solid #fff;
        color: #fff;
      }
    }
  }

  .cta-phone {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid #fff;
    border-radius: 1rem;
    padding: 0.3rem 0.5rem;
    min-width: 150px;

    span {
      padding: 0.2rem;
      background: #fff;
      border-radius: 50%;

      svg {
        color: #e9000e;
        font-size: 12px;
      }
    }
    p {
      font-size: 14px;
      color: #fff;
    }
  }
`;

//.......stop styles/////


import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LandingLayout from "../layouts/landing.layout";
// import '@/styles/globals.css'

// imported styling here
import {
  HeroSection,
  Wrapper,
  Experience,
  Associates,
  Section,
  OfferContainer,
  Details,
  Tabs,
  SearchForm,
  BannerSection,
} from "../../styles/home.style";
import { Box } from "@mui/material";

// slider
import Marquee from "react-fast-marquee";
import { BiSearch } from "react-icons/bi";
import { BsArrowRight, BsTelephoneFill } from "react-icons/bs";

// brand images are imported here
import {
  brandmovers,
  burtech,
  dcfoods,
  divichotel,
  finlab,
  nigerPolice,
  weather,
} from "../../assets/clients";
import { useState } from "react";

const images = [
  brandmovers,
  burtech,
  dcfoods,
  divichotel,
  finlab,
  nigerPolice,
  weather,
];

/**
 *
 * @description this is the Home page section
 * @returns {React.JSX.Element}
 */
const Home = () => {
  const LogoMarquee = () => {
    return (
      <Marquee gradient={false}>
        {images.map((image, index) => (
          <Box key={index} mr="10px">
            <Image src={image} alt="Logo" width={100} height={50} />
          </Box>
        ))}
      </Marquee>
    );
  };
  const [activeTab, setActiveTab] = useState(0);
  const tabTitles = [
    "Software Development",
    "Testing & QA",
    "Application Services",
    "UX/UI Design",
    "IT Consulting",
    "Data Analytics",
    "Cyber Security",
  ];
  const tabDetails = [
    "A1 software development company with 33 years of business excellence, we can develop reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
    "A2 software development company with 33 years of business excellence, we can develop reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
    "A3 software development company with 33 years of business excellence, we can develop reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
    "A4 software development company with 33 years of business excellence, we can develop reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
    "A5 software development company with 33 years of business excellence, we can develop reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
    "A6 software development company with 33 years of business excellence, we can develop reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
    "A7 software development company with 33 years of business excellence, we can develop reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <Head>
        <title>Tanta Innovatives Limited</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection>
        <Wrapper>
          <p className="headline">Making a Better Reality</p>
          <h1>TRANSFORM YOUR BUSINESS WITH CUTTING-EDGE SOFTWARE SOLUTIONS.</h1>
          <div className="red-line"></div>

          <Experience>
            <div>
              <h1>13+</h1>
              <h4>YEARS EXPERIENCE IN IT CONSULTING</h4>
            </div>
            <div>
              <p className="details">
                We have been providing bespoke and platform-based solutions to
                large, mid-size and small businesses in Healthcare, Banking,
                Retail, Telecom, and other industries for over 13 years.
              </p>
            </div>
          </Experience>

          <Associates>
            <div className="wrapper">
              <div className="carousel">
                <div>
                  <LogoMarquee logos={images} />
                </div>
              </div>
            </div>
          </Associates>
        </Wrapper>
      </HeroSection>

      {/* Offers Section starts here */}
      <Section>
        <Wrapper>
          <OfferContainer>
            <Details>
              <SearchForm>
                <div className="search-box">
                  <BiSearch />
                  <input type="text" placeholder="Search anything here" />
                </div>
              </SearchForm>

              <div className="offer-details">
                <h3>{tabTitles[activeTab]}</h3>
                <div className="red-line_small"></div>
                <p>{tabDetails[activeTab]}</p>
                <Link href="/">
                  learn more <BsArrowRight />
                </Link>
              </div>
            </Details>
            <Tabs>
              <h3>Our Offering</h3>
              <div className="red-line_small"></div>
              <div className="tabs-container">
                <ul>
                  {tabTitles.map((title, index) => (
                    <li
                      key={index}
                      className={activeTab === index ? "active" : ""}
                    >
                      <button onClick={() => handleTabClick(index)}>
                        {title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </Tabs>
          </OfferContainer>
        </Wrapper>
      </Section>
      <BannerSection>
        {/* <Wrapper> */}
        <div className="banner-details">
          <div>
            <p className="details-title1">INDUSTRIES WE SERVE</p>
            <p className="details-title2">
              For your very specific industry,we have highly-tailored IT
              solutions.
            </p>
            <p className="details-title2"></p>
          </div>
          <div className="cta-wrapper">
            <div className="cta-phone">
              <span>
                <BsTelephoneFill className="phone-icon" />
              </span>
              <p>(01) 123 555 656</p>
            </div>
            <button>Let’s work together</button>
          </div>
        </div>
        {/*</Wrapper> */}
      </BannerSection>
    </>
  );
};

Home.getLayout = (page) => {
  return <LandingLayout>{page}</LandingLayout>;
};
export default Home;

//................//
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
