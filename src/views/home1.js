import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Highlight from '../components/highlight'
import Point from '../components/point'
import Accordion from '../components/accordion'
import Feature from '../components/feature'
import Check from '../components/check'
import Quote from '../components/quote'
import Footer from '../components/footer'
import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container">
      <Helmet>
        <title>Home1 - Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Home1 - Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="home1-header">
        <div className="home1-heading">
          <div id="notifcation" className="home1-notification"></div>
          <Navbar></Navbar>
        </div>
        <div className="home1-hero">
          <div className="home1-content">
            <h1 className="home1-title">
              Chartwise is a clean, easy to use, finance app.
            </h1>
            <span className="home1-caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </span>
            <div className="home1-hero-buttons">
              <div className="home1-io-btn">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-zmzg.svg"
                  className="home1-apple"
                />
                <span className="home1-caption1">Download for iOS</span>
              </div>
              <div className="home1-android-btn">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ld65.svg"
                  className="home1-android"
                />
                <span className="home1-caption2">Download for Android</span>
              </div>
            </div>
          </div>
          <div className="home1-images">
            <div className="home1-column">
              <img
                alt="pastedImage"
                src="/playground_assets/firstpasted-1500h.png"
                className="home1-pasted-image"
              />
            </div>
            <div className="home1-column1">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-5cga-1500h.png"
                className="home1-pasted-image1"
              />
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-c39.svg"
                className="home1-pasted-image2"
              />
            </div>
            <div className="home1-column2">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-iqnj.svg"
                className="home1-pasted-image3"
              />
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-06e.svg"
                className="home1-pasted-image4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home1-video">
        <div className="home1-content01">
          <div className="home1-header1">
            <h2 className="home1-text">
              Built specifically for people who want faster transactions
            </h2>
          </div>
          <div className="home1-video-container">
            <video
              src="https://www.youtube.com/watch?v=MRQ69XeDxVk"
              loop
              muted
              poster="/playground_assets/pastedimage-09r-900w.png"
              autoPlay
              className="home1-video1"
            ></video>
            <div className="home1-heading-container">
              <div className="home1-heading01">
                <span className="home1-text01">
                  Consectetur adipiscing elit, sed do eiusmod tempor
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home1-text02">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="home1-explore">
                <span className="home1-text03">
                  Explore pricing plans -&gt;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-stats">
        <div className="home1-stat">
          <span className="home1-caption3">200k</span>
          <span className="home1-description">
            Lorem ipsum dolor sit ametconsectetur adipiscing
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div className="home1-stat1">
          <span className="home1-caption4">$3,5 billions</span>
          <span className="home1-description1">
            Lorem ipsum dolor sit ametconsectetur adipiscing
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
        <div className="home1-stat2">
          <span className="home1-caption5">10.000 +</span>
          <span className="home1-description2">
            Lorem ipsum dolor sit ametconsectetur adipiscing
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
      </div>
      <div className="home1-sections">
        <div className="home1-section">
          <div className="home1-image">
            <div className="home1-image-highlight">
              <span className="home1-text04">
                <span>
                  <span>
                    always know your in and out
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home1-content02">
            <h2 className="home1-text09">Everything you get with Chartwise</h2>
            <Highlight
              Title="Lorem ipsum dolor sit amet, consectetur "
              Description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud"
            ></Highlight>
            <Highlight
              Title="Lorem ipsum dolor sit amet, consectetur "
              Description="Sed do eiusmod tempor incididunt ut labore et dolore"
            ></Highlight>
            <div className="home1-explore1">
              <span>Explore pricing plans -&gt;</span>
            </div>
          </div>
        </div>
        <div className="home1-section1">
          <div className="home1-content03">
            <div className="home1-heading02">
              <h2 className="home1-text11">Keep track with all transactions</h2>
              <span className="home1-text12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </span>
            </div>
            <div className="home1-content04">
              <div className="home1-points">
                <Point></Point>
                <Point text="Quis nostrud exercitation ullamco"></Point>
                <Point text="Reprehenderit qui in ea voluptate velit"></Point>
              </div>
              <Link to="/" className="home1-navlink">
                <div className="home1-get-started">
                  <span className="home1-sign-up">Get started now</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="home1-image1"></div>
        </div>
        <div className="home1-section2">
          <div className="home1-image2">
            <div className="home1-image-overlay"></div>
          </div>
          <div className="home1-content05">
            <h2 className="home1-text13">
              <span>Create milestones</span>
              <br></br>
            </h2>
            <Accordion></Accordion>
          </div>
        </div>
      </div>
      <div className="home1-banner-container">
        <div className="home1-banner">
          <div className="home1-overlay">
            <span className="home1-text16">
              Begin your financial journey on Chartwise
            </span>
            <div className="home1-book-btn">
              <span className="home1-text17">Book a demo</span>
            </div>
          </div>
          <img
            alt="pastedImage"
            src="/playground_assets/fourthpasted1-1200w.png"
            className="home1-pasted-image5"
          />
        </div>
      </div>
      <div className="home1-features">
        <div className="home1-header2">
          <div className="home1-tag">
            <span className="home1-text18">Features</span>
          </div>
          <div className="home1-heading03">
            <h2 className="home1-text19">Everything you get with Chartwise</h2>
            <span className="home1-text20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </span>
          </div>
        </div>
        <div className="home1-feature-list">
          <Feature></Feature>
          <Feature
            Title="Multiple Devices"
            Thumbnail="/playground_assets/vector6113-r6dl.svg"
          ></Feature>
          <Feature
            Title="Analytics"
            Thumbnail="/playground_assets/vector6113-6zj.svg"
          ></Feature>
          <Feature
            Title="Virtual Card"
            Thumbnail="/playground_assets/vector6113-lvvs.svg"
          ></Feature>
          <Feature
            Title="Safe Transactions"
            Thumbnail="/playground_assets/vector6114-cupp.svg"
          ></Feature>
          <Feature
            Title="Milestones"
            Thumbnail="/playground_assets/vector6114-6m1e.svg"
          ></Feature>
          <Feature
            Title="Trade"
            Thumbnail="/playground_assets/vector6114-yjl.svg"
          ></Feature>
          <Feature
            Title="Wallet"
            Thumbnail="/playground_assets/vector6113-lvvs.svg"
          ></Feature>
        </div>
      </div>
      <div className="home1-pricing">
        <div className="home1-content06">
          <div className="home1-header3">
            <div className="home1-tag1">
              <span className="home1-text21">Pricing plans</span>
            </div>
            <div className="home1-heading04">
              <h2 className="home1-text22">No setup cost or hidden fees.</h2>
            </div>
          </div>
          <div className="home1-pricing-plans">
            <div className="home1-plans">
              <div className="home1-plan">
                <div className="home1-top">
                  <div className="home1-heading05">
                    <span className="home1-text23">Standard</span>
                    <span className="home1-text24">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home1-cost">
                    <span className="home1-text25">Free</span>
                  </div>
                </div>
                <div className="home1-bottom">
                  <div className="home1-check-list">
                    <Check></Check>
                    <Check Feature="Quis nostrud exercitation ulla"></Check>
                    <Check Feature="Duis aute irure dolor intuit"></Check>
                    <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check Feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home1-button">
                    <span className="home1-text26">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="home1-plan1">
                <div className="home1-top1">
                  <div className="home1-heading06">
                    <span className="home1-text27">Plus</span>
                    <span className="home1-text28">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home1-cost1">
                    <span className="home1-text29">$8</span>
                    <span className="home1-text30">/month</span>
                  </div>
                </div>
                <div className="home1-bottom1">
                  <div className="home1-check-list1">
                    <Check></Check>
                    <Check Feature="Quis nostrud exercitation ulla"></Check>
                    <Check Feature="Duis aute irure dolor intuit"></Check>
                    <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check Feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home1-button1">
                    <span className="home1-text31">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="home1-plan2">
                <div className="home1-top2">
                  <div className="home1-heading07">
                    <span className="home1-text32">Premium</span>
                    <span className="home1-text33">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home1-cost2">
                    <span className="home1-text34">$16</span>
                    <span className="home1-text35">/month</span>
                  </div>
                </div>
                <div className="home1-bottom2">
                  <div className="home1-check-list2">
                    <Check></Check>
                    <Check Feature="Quis nostrud exercitation ulla"></Check>
                    <Check Feature="Duis aute irure dolor intuit"></Check>
                    <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check Feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home1-button2">
                    <span className="home1-text36">Get Standard</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home1-expand">
              <div className="home1-overlay1">
                <div className="home1-header4">
                  <div className="home1-heading08">
                    <span className="home1-text37">Expand</span>
                    <span className="home1-text38">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </span>
                  </div>
                  <div className="home1-check-list3">
                    <div className="home1-check">
                      <svg viewBox="0 0 1024 1024" className="home1-icon">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home1-text39">
                        Sed ut perspiciatis unde
                      </span>
                    </div>
                    <div className="home1-check1">
                      <svg viewBox="0 0 1024 1024" className="home1-icon02">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home1-text40">
                        Quis nostrud exercitation ulla
                      </span>
                    </div>
                    <div className="home1-check2">
                      <svg viewBox="0 0 1024 1024" className="home1-icon04">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home1-text41">
                        Duis aute irure dolor intuit
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home1-button3">
                  <span className="home1-text42">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home1-plans1">
            <div className="home1-plan3">
              <div className="home1-top3">
                <div className="home1-heading09">
                  <span className="home1-text45">Standard</span>
                  <span className="home1-text46">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="home1-cost3">
                  <span className="home1-text47">Free</span>
                </div>
              </div>
              <div className="home1-bottom3">
                <div className="home1-check-list4">
                  <Check></Check>
                  <Check Feature="Quis nostrud exercitation ulla"></Check>
                  <Check Feature="Duis aute irure dolor intuit"></Check>
                  <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check Feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="home1-button4">
                  <span className="home1-text48">Get Standard</span>
                </div>
              </div>
            </div>
            <div className="home1-plan4">
              <div className="home1-top4">
                <div className="home1-heading10">
                  <span className="home1-text49">Plus</span>
                  <span className="home1-text50">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="home1-cost4">
                  <span className="home1-text51">$8</span>
                  <span className="home1-text52">/month</span>
                </div>
              </div>
              <div className="home1-bottom4">
                <div className="home1-check-list5">
                  <Check></Check>
                  <Check Feature="Quis nostrud exercitation ulla"></Check>
                  <Check Feature="Duis aute irure dolor intuit"></Check>
                  <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check Feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="home1-button5">
                  <span className="home1-text53">Get Plus</span>
                </div>
              </div>
            </div>
            <div className="home1-plan5">
              <div className="home1-top5">
                <div className="home1-heading11">
                  <span className="home1-text54">Premium</span>
                  <span className="home1-text55">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="home1-cost5">
                  <span className="home1-text56">$16</span>
                  <span className="home1-text57">/month</span>
                </div>
              </div>
              <div className="home1-bottom5">
                <div className="home1-check-list6">
                  <Check></Check>
                  <Check Feature="Quis nostrud exercitation ulla"></Check>
                  <Check Feature="Duis aute irure dolor intuit"></Check>
                  <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check Feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="home1-button6">
                  <span className="home1-text58">Get Plus</span>
                </div>
              </div>
            </div>
            <div className="home1-expand1">
              <div className="home1-overlay2">
                <div className="home1-header5">
                  <div className="home1-heading12">
                    <span className="home1-text59">Expand</span>
                    <span className="home1-text60">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </span>
                  </div>
                  <div className="home1-check-list7">
                    <div className="home1-check3">
                      <svg viewBox="0 0 1024 1024" className="home1-icon06">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home1-text61">
                        Sed ut perspiciatis unde
                      </span>
                    </div>
                    <div className="home1-check4">
                      <svg viewBox="0 0 1024 1024" className="home1-icon08">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home1-text62">
                        Quis nostrud exercitation ulla
                      </span>
                    </div>
                    <div className="home1-check5">
                      <svg viewBox="0 0 1024 1024" className="home1-icon10">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home1-text63">
                        Duis aute irure dolor intuit
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home1-button7">
                  <span className="home1-text64">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home1-help">
          <span className="home1-text67">Need any help?</span>
          <div className="home1-explore2">
            <span className="home1-text68">
              Get in touch with us right away -&gt;
            </span>
          </div>
        </div>
      </div>
      <div className="home1-testimonials">
        <div className="home1-logo-container">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-idcu.svg"
            className="home1-logo"
          />
        </div>
        <div className="home1-content07">
          <div id="quotes" className="home1-quotes">
            <div className="quote active-quote">
              <Quote rootClassName="quote-root-class-name4"></Quote>
            </div>
            <div className="quote">
              <Quote
                Quote='"Testing these templates is a pleasure."'
                Title="Developer @ Vista La Vista"
                Author="Author 2"
                rootClassName="quote-root-class-name5"
              ></Quote>
            </div>
            <div className="quote">
              <Quote
                Quote='"Wow, awesome works!'
                Title="Designer @ OhBoy"
                rootClassName="quote-root-class-name6"
              ></Quote>
            </div>
          </div>
          <div className="home1-buttons">
            <div id="quote-before" className="home1-left">
              <svg viewBox="0 0 1024 1024" className="home1-icon12">
                <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
              </svg>
            </div>
            <div id="quote-next" className="home1-right">
              <svg viewBox="0 0 1024 1024" className="home1-icon14">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </div>
          </div>
          <div>
            <DangerousHTML
              html={` <script>
    /* Quote Slider - Code Embed */

    let current = 1;

    const nextButton = document.querySelector("#quote-next");
    const previousButton = document.querySelector("#quote-before");
    const quotes = document.querySelectorAll(".quote");

    if (nextButton && previousButton && quotes) {
      nextButton.addEventListener("click", () => {
        quotes.forEach((quote) => {
          quote.classList.remove("active-quote");
        });

        current == quotes.length ? (current = 1) : current++;
        quotes[current - 1].classList.add("active-quote");
      });

      previousButton.addEventListener("click", () => {
        quotes.forEach((quote) => {
          quote.classList.remove("active-quote");
        });

        current == 1 ? (current = quotes.length) : current--;
        quotes[current - 1].classList.add("active-quote");
      });
    }
  </script>`}
            ></DangerousHTML>
          </div>
        </div>
      </div>
      <div className="home1-faq">
        <div className="home1-content08">
          <div className="home1-header6">
            <div className="home1-tag2">
              <span className="home1-text69">
                <span>FAQ</span>
                <br></br>
              </span>
            </div>
            <div className="home1-heading13">
              <h2 className="home1-text72">Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="home1-rows">
            <div className="home1-column3">
              <div className="Question">
                <span className="home1-title1">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home1-description3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="Question">
                <span className="home1-title2">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home1-description4">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    tempor incididunt ut labore et dolore magna aliqua.
                    Excepteur sint occaecat
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home1-question2 Question">
                <span className="home1-title3">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home1-description5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </span>
              </div>
            </div>
            <div className="home1-column4">
              <div className="home1-question3 Question">
                <span className="home1-title4">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home1-description6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </span>
              </div>
              <div className="home1-question4 Question">
                <span className="home1-title5">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home1-description7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </span>
              </div>
              <div className="home1-question5 Question">
                <span className="home1-title6">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home1-description8">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    tempor incididunt ut labore et dolore magna aliqua.
                    Excepteur sint occaecat
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-get-started1">
        <div className="home1-content09">
          <div className="home1-heading14">
            <h2 className="home1-text79">Get started with Chartwise now!</h2>
            <span className="home1-text80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore magna.
            </span>
          </div>
          <div className="home1-hero-buttons1">
            <div className="home1-io-btn1">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-zmzg.svg"
                className="home1-apple1"
              />
              <span className="home1-caption6">Download for iOS</span>
            </div>
            <div className="home1-android-btn1">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-ld65.svg"
                className="home1-android1"
              />
              <span className="home1-caption7">Download for Android</span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home1
