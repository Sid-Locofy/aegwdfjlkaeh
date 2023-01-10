import { useState, useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MatterhornPopup from "../components/matterhorn-popup";
import PortalPopup from "../components/portal-popup";
import "./hotels-page.css";

const HotelsPage = () => {
  const navigate = useNavigate();
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);

  const onWebScreenClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFickleflightLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className="hotels-page">
        <header className="top-header1">
          <div className="top-container1">
            <div
              className="fickleflight-logo1"
              onClick={onFickleflightLogoContainerClick}
            >
              <div className="symbols">
                <img
                  className="web-screen-icon"
                  alt=""
                  src="../webscreen.svg"
                  onClick={onWebScreenClick}
                />
              </div>
            </div>
            <div className="navigation-right1">
              <div className="navigation-menu1">
                <div className="explore1" onClick={onExploreTextClick}>
                  Explore
                </div>
                <div className="explore1" onClick={onSearchTextClick}>
                  Search
                </div>
                <button className="hotels1">Hotels</button>
                <button className="offers1">Offers</button>
              </div>
              <div className="account-section1">
                <img
                  className="hamburger-menu-icon1"
                  alt=""
                  src="../notification.svg"
                />
                <img
                  className="notification-bell-icon1"
                  alt=""
                  src="../notification1.svg"
                />
                <img
                  className="unsplashd1upkifd04a-icon"
                  alt=""
                  src="../top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="header">
          <div className="banner">
            <img
              className="banner-background1"
              alt=""
              src="../banner-background@2x.png"
            />
            <div className="title1">
              <div className="stays-in-los">Stays in Los Angeles</div>
              <div className="options">
                <div className="pilldefault">
                  <div className="beds">Recommended</div>
                </div>
                <div className="pilldefault1">
                  <div className="beds">Price</div>
                </div>
                <div className="pilldefault1">
                  <div className="beds">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hotel-results">
          <div className="results-sumamry">
            <div className="results">200+ results</div>
            <div className="filters">
              <img className="filters-icon" alt="" src="../filters.svg" />
              <div className="filters1">Filters</div>
            </div>
          </div>
          <div className="results-section">
            <div className="result-cards-col">
              <div className="results-card">
                <img
                  className="results-image-icon"
                  alt=""
                  src="../unsplashs6ch7n3eoqy@2x.png"
                />
                <div className="results-details">
                  <div className="results-sumamry">
                    <div className="result-and-video">
                      <div className="king-bed-standard">
                        1 king bed standard
                      </div>
                      <b className="holiday-inn-expre">Holiday Inn Expre...</b>
                      <div className="review">
                        <div className="reviews4">(1,136 reviews)</div>
                        <div className="stars">
                          <div className="div12">4.7</div>
                          <img
                            className="vector-icon4"
                            alt=""
                            src="../vector7.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="notification-bell-icon1"
                      alt=""
                      src="../video4.svg"
                    />
                  </div>
                  <div className="price-and-cta">
                    <div className="pricing">
                      <b className="s-286">$S 286</b>
                      <div className="night4">/night</div>
                    </div>
                    <button className="view-details-button">
                      <div className="view-details-button-child" />
                      <div className="search-flights1">View Details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="results-card1">
                <img
                  className="results-image-icon"
                  alt=""
                  src="../unsplashs6ch7n3eoqy1@2x.png"
                />
                <div className="results-details1">
                  <div className="results-sumamry">
                    <div className="result">
                      <b className="freehand-los-angeles">
                        Freehand Los Angeles
                      </b>
                      <div className="bed-in-quad">Bed in Quad</div>
                      <div className="review1">
                        <div className="reviews5">(1,941 reviews)</div>
                        <div className="stars1">
                          <div className="div13">4.2</div>
                          <img
                            className="vector-icon4"
                            alt=""
                            src="../vector8.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="price-and-cta1">
                    <div className="pricing">
                      <b className="s-286">$S 198</b>
                      <div className="night4">/night</div>
                    </div>
                    <button className="view-details-button">
                      <div className="view-details-button-child" />
                      <div className="search-flights1">View Details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="results-card1">
                <img
                  className="results-image-icon"
                  alt=""
                  src="../unsplashs6ch7n3eoqy2@2x.png"
                />
                <div className="results-details1">
                  <div className="results-sumamry">
                    <div className="result">
                      <b className="freehand-los-angeles">
                        The Westin Bonavent...
                      </b>
                      <div className="bed-in-quad">1 King, City view</div>
                      <div className="review1">
                        <div className="reviews5">(1,002 reviews)</div>
                        <div className="stars1">
                          <div className="div13">4.1</div>
                          <img
                            className="vector-icon4"
                            alt=""
                            src="../vector9.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="price-and-cta1">
                    <div className="pricing">
                      <b className="s-286">$S 289</b>
                      <div className="night4">/night</div>
                    </div>
                    <button className="view-details-button">
                      <div className="view-details-button-child" />
                      <div className="search-flights1">View Details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="results-card">
                <img
                  className="results-image-icon"
                  alt=""
                  src="../unsplashs6ch7n3eoqy3@2x.png"
                />
                <div className="results-details">
                  <div className="results-sumamry">
                    <div className="result-and-video">
                      <div className="king-bed-standard">Deluxe King</div>
                      <b className="holiday-inn-expre">
                        The Ritz-Carlton, L...
                      </b>
                      <div className="review">
                        <div className="reviews4">(1,136 reviews)</div>
                        <div className="stars">
                          <div className="div12">4.7</div>
                          <img
                            className="vector-icon4"
                            alt=""
                            src="../vector10.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      className="feature-video-icon"
                      alt=""
                      src="../video5.svg"
                      onClick={openMatterhornPopup}
                    />
                  </div>
                  <div className="price-and-cta">
                    <div className="pricing">
                      <b className="s-286">$S 286</b>
                      <div className="night4">/night</div>
                    </div>
                    <button className="view-details-button">
                      <div className="view-details-button-child" />
                      <div className="search-flights1">View Details</div>
                    </button>
                  </div>
                </div>
              </div>
              <iframe
                className="map"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
              />
            </div>
            <iframe
              className="map1"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
            />
          </div>
        </div>
        <div className="footer-section1">
          <div className="newsletter-form-section">
            <img
              className="newsletter-section-background"
              alt=""
              src="../newsletter-section-background@2x.png"
            />
            <div className="subscribe-form">
              <div className="form-header1">
                <b className="form-title-subtext1">
                  subscribe to our newsletter
                </b>
                <b className="form-title1">Get weekly updates</b>
              </div>
              <div className="form1">
                <div className="form-text1">
                  <div className="fill-in-your1">
                    Fill in your details to join the party!
                  </div>
                </div>
                <div className="form-fields1">
                  <div className="form-text1">
                    <TextField
                      className="input3"
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Your name"
                      size="medium"
                      margin="none"
                    />
                  </div>
                  <div className="form-text1">
                    <TextField
                      className="input3"
                      color="primary"
                      variant="outlined"
                      type="text"
                      label="Email address"
                      size="medium"
                      margin="none"
                    />
                  </div>
                </div>
                <button className="button7">
                  <div className="unstyledbutton1">
                    <div className="button8">submit</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <footer className="footer1">
            <div className="fickleflight-bio1">
              <img className="logo-icon1" alt="" src="../logo1.svg" />
              <div className="fickle-flight-is1">
                Fickle Flight is your one-stop travel portal. We offer hassle
                free flight and hotel bookings. We also have all your flight
                needs in you online shop.
              </div>
              <img
                className="social-icons1"
                alt=""
                src="../social-icons1.svg"
              />
            </div>
            <div className="seperator" />
            <div className="footer-links1">
              <div className="company2">
                <div className="about-us1">About Us</div>
                <div className="company3">Company</div>
                <div className="news1">News</div>
                <div className="careers1">Careers</div>
                <div className="how-we-work1">How we work</div>
              </div>
              <div className="company2">
                <div className="account1">Account</div>
                <div className="support3">Support</div>
                <div className="support-center1">Support Center</div>
                <div className="faq1">FAQ</div>
                <div className="accessibility1">Accessibility</div>
              </div>
              <div className="more2">
                <div className="covid-advisory1">Covid Advisory</div>
                <div className="more3">More</div>
                <div className="airline-fees1">Airline Fees</div>
                <div className="tips1">Tips</div>
                <div className="how-we-work1">Quarantine Rules</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelsPage;
