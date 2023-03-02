import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Check from '../components/check'
import Quote from '../components/quote'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="home-header">
        <div className="home-heading">
          <div id="notifcation" className="home-notification"></div>
          <Navbar></Navbar>
        </div>
        <div className="home-hero">
          <div className="home-content">
            <h1 className="home-title">
              Chartwise is a clean,stock chart pattern analyzer.
            </h1>
            <span className="home-caption">
              Analyze stock chart patterns on the go with our easy to use
              product, to help make better investments.
            </span>
            <div className="home-hero-buttons">
              <div className="home-io-btn">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-zmzg.svg"
                  className="home-apple"
                />
                <span className="home-caption1">Download for iOS</span>
              </div>
              <div className="home-android-btn">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ld65.svg"
                  className="home-android"
                />
                <span className="home-caption2">Download for Android</span>
              </div>
            </div>
          </div>
          <div className="home-images">
            <div className="home-column">
              <img
                alt="pastedImage"
                src="/playground_assets/firstpasted-1500h.png"
                className="home-pasted-image"
              />
            </div>
            <div className="home-column1">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-5cga-1500h.png"
                className="home-pasted-image1"
              />
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-c39.svg"
                className="home-pasted-image2"
              />
            </div>
            <div className="home-column2">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-iqnj.svg"
                className="home-pasted-image3"
              />
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-06e.svg"
                className="home-pasted-image4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-video">
        <div className="home-content01">
          <div className="home-header1">
            <h2 className="home-text">
              Built specifically for people who want quick analysis.
            </h2>
          </div>
          <div className="home-video-container">
            <video
              src="https://www.youtube.com/watch?v=MRQ69XeDxVk"
              loop
              muted
              poster="/playground_assets/pastedimage-09r-900w.png"
              autoPlay
              className="home-video1"
            ></video>
            <div className="home-heading-container">
              <div className="home-heading01">
                <span className="home-text001">
                  Better analysis of market, with faster response time
                </span>
                <span className="home-text002">
                  Select the type of pattern to be analyzed for a particular
                  stock, or to follow the recent market trends.
                </span>
              </div>
              <div className="home-explore">
                <span className="home-text003">
                  Explore pricing plans -&gt;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-stats">
        <div className="home-stat">
          <span className="home-caption3">98.6%</span>
          <span className="home-description">
            Average accuracy in forming the patterns.
          </span>
        </div>
        <div className="home-stat1">
          <span className="home-caption4">10 secs</span>
          <span className="home-description01">
            Estimated maximum time taken to load the pattern
          </span>
        </div>
        <div className="home-stat2">
          <span className="home-caption5">100 +</span>
          <span className="home-description02">
            Different stocks data available to analyze using patterns.
          </span>
        </div>
      </div>
      <div className="home-sections">
        <div className="home-section">
          <div className="home-image">
            <div className="home-image-highlight">
              <span className="home-text004">
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
          <div className="home-content02">
            <h2 className="home-text009">Everything you get with Chartwise</h2>
            <div className="home-highlight">
              <span className="home-text010">
                Always know in and out about your trading
              </span>
              <span className="home-text011">
                Start analyzing in depth about stocks and know the correct time
                to buy and sell a stock to earn profits.
              </span>
            </div>
            <div className="home-highlight1">
              <span className="home-text012">
                Keep track of your daily investments
              </span>
              <span className="home-text013">
                Easily analyze the frequent changes in stock market.
              </span>
            </div>
            <div className="home-explore1">
              <span>Explore pricing plans -&gt;</span>
            </div>
          </div>
        </div>
        <div className="home-section1">
          <div className="home-content03">
            <div className="home-heading02">
              <h2 className="home-text015">
                Keep track with all your investments.
              </h2>
              <span className="home-text016">
                Never miss out on a pump by keeping track of all the stocks
                using our high level analysis
              </span>
            </div>
            <div className="home-content04">
              <div className="home-points">
                <div className="home-point">
                  <div className="home-check">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                  </div>
                  <span className="home-text017">
                    Get on time updates about trends
                  </span>
                </div>
                <div className="home-point1">
                  <div className="home-check01">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                  </div>
                  <span className="home-text018">
                    Know when to buy and sell stocks
                  </span>
                </div>
                <div className="home-point2">
                  <div className="home-check02">
                    <svg viewBox="0 0 1024 1024" className="home-icon04">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                  </div>
                  <span className="home-text019">
                    Automate the process of analyzing
                  </span>
                </div>
              </div>
              <Link to="/" className="home-navlink">
                <div className="home-get-started">
                  <span className="home-sign-up">Get started now</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="home-image01"></div>
        </div>
        <div className="home-section2">
          <div className="home-image02">
            <div className="home-image-overlay"></div>
          </div>
          <div className="home-content05">
            <h2 className="home-text020">
              <span>Why Chartwise?</span>
              <br></br>
            </h2>
            <div className="home-accordion">
              <div
                data-role="accordion-container"
                className="home-element accordion-element"
              >
                <div className="home-details">
                  <span className="home-text023">
                    Clean Experience with minimal ads
                  </span>
                  <span data-role="accordion-content" className="home-text024">
                    Understand the stock market with a hastle-free experience
                    and get in-depth analysis of complex market trends
                  </span>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon"
                  className="home-icon06"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
              <div
                data-role="accordion-container"
                className="home-element1 accordion-element"
              >
                <div className="home-details1">
                  <span className="home-text025">
                    Stories, Editorials and Expert opinions on analysis
                  </span>
                  <span data-role="accordion-content" className="home-text026">
                    Trusted by top professionals in stock market to do technical
                    analysis of market and generate real-time reports.
                  </span>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon"
                  className="home-icon08"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
              <div
                data-role="accordion-container"
                className="home-element2 accordion-element"
              >
                <div className="home-details2">
                  <span className="home-text027">Sharp - Insight rich</span>
                  <span data-role="accordion-content" className="home-text028">
                    Gain better understanding of when to enter and exit stock
                    market by analyzing various insightful patterns.
                  </span>
                </div>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon"
                  className="home-icon10"
                >
                  <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                </svg>
              </div>
              <div>
                <DangerousHTML
                  html={`<script>
  /*
  Accordion - Code Embed
  */

  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          accordionContents.forEach((accordionContent) => {
              accordionContent.style.display = "none"; //Hides all accordion contents
          });

          accordionIcons.forEach((accordionIcon) => {
              accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
          });

          accordionContents[index].style.display = "flex"; // Shows accordion content
          accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
      });
  });

  /*
  Here's what the above is doing:
      1. Selects all accordion containers, contents, and icons
      2. Hides all accordion contents
      3. Adds an event listener to each accordion container
      4. When an accordion container is clicked, it:
          - Hides all accordion contents
          - Resets all icon transforms to 0deg (default)
          - Checks if this container has class "accordion-open"
              - If it does, it removes class "accordion-open"
              - If it doesn't, it:
                  - Removes class "accordion-open" from all containers
                  - Adds class "accordion-open" to this container
                  - Shows accordion content
                  - Rotates accordion icon 180deg
  */
</script>
`}
                ></DangerousHTML>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner-container">
        <div className="home-banner">
          <div className="home-overlay">
            <span className="home-text029">
              Begin your trading journey on Chartwise
            </span>
            <div className="home-book-btn">
              <span className="home-text030">Book a demo</span>
            </div>
          </div>
          <img
            alt="pastedImage"
            src="/playground_assets/fourthpasted1-1200w.png"
            className="home-pasted-image5"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-header2">
          <div className="home-tag">
            <span className="home-text031">Features</span>
          </div>
          <div className="home-heading03">
            <h2 className="home-text032">Everything you get with Chartwise</h2>
            <span className="home-text033">
              <span className="home-text034">
                Stay ahead in the market, maximise profits by
              </span>
              <br></br>
              <span>using our services.</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="home-feature-list">
          <div className="home-feature">
            <img
              alt="image"
              src="/playground_assets/vector.svg"
              className="home-image03"
            />
            <div className="home-content06">
              <span className="home-title01">Account</span>
              <span className="home-description03">
                Register or Login on our site to use our various services
              </span>
            </div>
          </div>
          <div className="home-feature1">
            <img
              alt="image"
              src="/playground_assets/vector6113-r6dl.svg"
              className="home-image04"
            />
            <div className="home-content07">
              <span className="home-title02">Multiple Devices</span>
              <span className="home-description04">
                Support for upto 1 , 2 and 4 devices on free, plus and premium
                plans acc.
              </span>
            </div>
          </div>
          <div className="home-feature2">
            <img
              alt="image"
              src="/playground_assets/vector6113-6zj.svg"
              className="home-image05"
            />
            <div className="home-content08">
              <span className="home-title03">Analytics</span>
              <span className="home-description05">
                Get top tier analytics on stocks by using various patterns.
              </span>
            </div>
          </div>
          <div className="home-feature3">
            <img
              alt="image"
              src="/playground_assets/vector6113-lvvs.svg"
              className="home-image06"
            />
            <div className="home-content09">
              <span className="home-title04">Secure</span>
              <span className="home-description06">
                All payment credentials are highly encrypted on our site.
              </span>
            </div>
          </div>
          <div className="home-feature4">
            <img
              alt="image"
              src="/playground_assets/vector6114-cupp.svg"
              className="home-image07"
            />
            <div className="home-content10">
              <span className="home-title05">Reliable data</span>
              <span className="home-description07">
                Trusted by professional traders for technical analysis of
                market.
              </span>
            </div>
          </div>
          <div className="home-feature5">
            <img
              alt="image"
              src="/playground_assets/vector6114-6m1e.svg"
              className="home-image08"
            />
            <div className="home-content11">
              <span className="home-title06">Milestones</span>
              <span className="home-description08">
                Compete in a leaderboard to achieve daily milestones
              </span>
            </div>
          </div>
          <div className="home-feature6">
            <img
              alt="image"
              src="/playground_assets/vector6114-yjl.svg"
              className="home-image09"
            />
            <div className="home-content12">
              <span className="home-title07">Trade</span>
              <span className="home-description09">
                Trade effeciently through better understanding of stock market
              </span>
            </div>
          </div>
          <div className="home-feature7">
            <img
              alt="image"
              src="/playground_assets/vector6113-lvvs.svg"
              className="home-image10"
            />
            <div className="home-content13">
              <span className="home-title08">Wallet</span>
              <span className="home-description10">
                Link your trade account to our application wallet for better
                analysis.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-content14">
          <div className="home-header3">
            <div className="home-tag1">
              <span className="home-text038">Pricing plans</span>
            </div>
            <div className="home-heading04">
              <h2 className="home-text039">No setup cost or hidden fees.</h2>
            </div>
          </div>
          <div className="home-pricing-plans">
            <div className="home-plans">
              <div className="home-plan">
                <div className="home-top">
                  <div className="home-heading05">
                    <span className="home-text040">Standard</span>
                    <span className="home-text041">
                      Analyze upto 10 stocks using our free service
                    </span>
                  </div>
                  <div className="home-cost">
                    <span className="home-text042">Free</span>
                  </div>
                </div>
                <div className="home-bottom">
                  <div className="home-check-list">
                    <div className="home-check03">
                      <svg viewBox="0 0 1024 1024" className="home-icon12">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text043">
                        No credit card required
                      </span>
                    </div>
                    <div className="home-check04">
                      <svg viewBox="0 0 1024 1024" className="home-icon14">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text044">
                        Search upto 10 stocks for 5 times
                      </span>
                    </div>
                    <div className="home-check05">
                      <svg viewBox="0 0 1024 1024" className="home-icon16">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text045">Interactive charts</span>
                    </div>
                    <div className="home-check06">
                      <svg viewBox="0 0 1024 1024" className="home-icon18">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text046">
                        Analyze stocks using 1 pattern
                      </span>
                    </div>
                    <div className="home-check07">
                      <svg viewBox="0 0 1024 1024" className="home-icon20">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text047">
                        Get historical data about stocks
                      </span>
                    </div>
                  </div>
                  <div className="home-button">
                    <span className="home-text048">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-top1">
                  <div className="home-heading06">
                    <span className="home-text049">Plus</span>
                    <span className="home-text050">
                      Analyze upto 50 stocks through various patterns
                    </span>
                  </div>
                  <div className="home-cost1">
                    <span className="home-text051">$8</span>
                    <span className="home-text052">/month</span>
                  </div>
                </div>
                <div className="home-bottom1">
                  <div className="home-check-list1">
                    <div className="home-check08">
                      <svg viewBox="0 0 1024 1024" className="home-icon22">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text053">Live demo to analyze</span>
                    </div>
                    <div className="home-check09">
                      <svg viewBox="0 0 1024 1024" className="home-icon24">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text054">
                        Search from upto 50 stocks
                      </span>
                    </div>
                    <div className="home-check10">
                      <svg viewBox="0 0 1024 1024" className="home-icon26">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text055">
                        Available for mobiles also
                      </span>
                    </div>
                    <div className="home-check11">
                      <svg viewBox="0 0 1024 1024" className="home-icon28">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text056">
                        Analyze stocks using 2 patterns
                      </span>
                    </div>
                    <div className="home-check12">
                      <svg viewBox="0 0 1024 1024" className="home-icon30">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text057">
                        Get accurate data upto previous day
                      </span>
                    </div>
                  </div>
                  <div className="home-button1">
                    <span className="home-text058">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="home-plan2">
                <div className="home-top2">
                  <div className="home-heading07">
                    <span className="home-text059">Premium</span>
                    <span className="home-text060">
                      Get regular email notifications about trends
                    </span>
                  </div>
                  <div className="home-cost2">
                    <span className="home-text061">$16</span>
                    <span className="home-text062">/month</span>
                  </div>
                </div>
                <div className="home-bottom2">
                  <div className="home-check-list2">
                    <div className="home-check13">
                      <svg viewBox="0 0 1024 1024" className="home-icon32">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text063">
                        Get instantly notified
                      </span>
                    </div>
                    <div className="home-check14">
                      <svg viewBox="0 0 1024 1024" className="home-icon34">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text064">
                        Search from upto 100+ stocks
                      </span>
                    </div>
                    <div className="home-check15">
                      <svg viewBox="0 0 1024 1024" className="home-icon36">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text065">Get indepth analysis</span>
                    </div>
                    <div className="home-check16">
                      <svg viewBox="0 0 1024 1024" className="home-icon38">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text066">
                        Analyze stocks using 3 patterns
                      </span>
                    </div>
                    <div className="home-check17">
                      <svg viewBox="0 0 1024 1024" className="home-icon40">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text067">
                        Real time update on stock prices
                      </span>
                    </div>
                  </div>
                  <div className="home-button2">
                    <span className="home-text068">Get Standard</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-expand">
              <div className="home-overlay1">
                <div className="home-header4">
                  <div className="home-heading08">
                    <span className="home-text069">Expand</span>
                    <span className="home-text070">
                      Explore different subscription plans, added benefits with
                      increase in each subscription.
                    </span>
                  </div>
                  <div className="home-check-list3">
                    <div className="home-check18">
                      <svg viewBox="0 0 1024 1024" className="home-icon42">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text071">
                        We serve you 24*7 / 365 days
                      </span>
                    </div>
                    <div className="home-check19">
                      <svg viewBox="0 0 1024 1024" className="home-icon44">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text072">
                        Contact us for any query
                      </span>
                    </div>
                    <div className="home-check20">
                      <svg viewBox="0 0 1024 1024" className="home-icon46">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text073">
                        No credit card required  for trial
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-button3">
                  <span className="home-text074">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-plans1">
            <div className="home-plan3">
              <div className="home-top3">
                <div className="home-heading09">
                  <span className="home-text077">Standard</span>
                  <span className="home-text078">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="home-cost3">
                  <span className="home-text079">Free</span>
                </div>
              </div>
              <div className="home-bottom3">
                <div className="home-check-list4">
                  <Check></Check>
                  <Check Feature="Quis nostrud exercitation ulla"></Check>
                  <Check Feature="Duis aute irure dolor intuit"></Check>
                  <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check Feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="home-button4">
                  <span className="home-text080">Get Standard</span>
                </div>
              </div>
            </div>
            <div className="home-plan4">
              <div className="home-top4">
                <div className="home-heading10">
                  <span className="home-text081">Plus</span>
                  <span className="home-text082">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="home-cost4">
                  <span className="home-text083">$8</span>
                  <span className="home-text084">/month</span>
                </div>
              </div>
              <div className="home-bottom4">
                <div className="home-check-list5">
                  <Check></Check>
                  <Check Feature="Quis nostrud exercitation ulla"></Check>
                  <Check Feature="Duis aute irure dolor intuit"></Check>
                  <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check Feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="home-button5">
                  <span className="home-text085">Get Plus</span>
                </div>
              </div>
            </div>
            <div className="home-plan5">
              <div className="home-top5">
                <div className="home-heading11">
                  <span className="home-text086">Premium</span>
                  <span className="home-text087">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="home-cost5">
                  <span className="home-text088">$16</span>
                  <span className="home-text089">/month</span>
                </div>
              </div>
              <div className="home-bottom5">
                <div className="home-check-list6">
                  <Check></Check>
                  <Check Feature="Quis nostrud exercitation ulla"></Check>
                  <Check Feature="Duis aute irure dolor intuit"></Check>
                  <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check Feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="home-button6">
                  <span className="home-text090">Get Plus</span>
                </div>
              </div>
            </div>
            <div className="home-expand1">
              <div className="home-overlay2">
                <div className="home-header5">
                  <div className="home-heading12">
                    <span className="home-text091">Expand</span>
                    <span className="home-text092">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </span>
                  </div>
                  <div className="home-check-list7">
                    <div className="home-check21">
                      <svg viewBox="0 0 1024 1024" className="home-icon48">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text093">
                        Sed ut perspiciatis unde
                      </span>
                    </div>
                    <div className="home-check22">
                      <svg viewBox="0 0 1024 1024" className="home-icon50">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text094">
                        Quis nostrud exercitation ulla
                      </span>
                    </div>
                    <div className="home-check23">
                      <svg viewBox="0 0 1024 1024" className="home-icon52">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text095">
                        Duis aute irure dolor intuit
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-button7">
                  <span className="home-text096">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-help">
          <span className="home-text099">Need any help?</span>
          <div className="home-explore2">
            <span className="home-text100">
              Get in touch with us right away -&gt;
            </span>
          </div>
        </div>
      </div>
      <div className="home-testimonials">
        <div className="home-logo-container">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-idcu.svg"
            className="home-logo"
          />
        </div>
        <div className="home-content15">
          <div id="quotes" className="home-quotes">
            <div className="quote active-quote">
              <Quote rootClassName="quote-root-class-name"></Quote>
            </div>
            <div className="quote">
              <Quote
                Quote='"Testing these templates is a pleasure."'
                Title="Developer @ Vista La Vista"
                Author="Author 2"
                rootClassName="quote-root-class-name"
              ></Quote>
            </div>
            <div className="quote">
              <Quote
                Quote='"Wow, awesome works!'
                Title="Designer @ OhBoy"
                rootClassName="quote-root-class-name"
              ></Quote>
            </div>
          </div>
          <div className="home-buttons">
            <div id="quote-before" className="home-left">
              <svg viewBox="0 0 1024 1024" className="home-icon54">
                <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
              </svg>
            </div>
            <div id="quote-next" className="home-right">
              <svg viewBox="0 0 1024 1024" className="home-icon56">
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
      <div className="home-faq">
        <div className="home-content16">
          <div className="home-header6">
            <div className="home-tag2">
              <span className="home-text101">
                <span>FAQ</span>
                <br></br>
              </span>
            </div>
            <div className="home-heading13">
              <h2 className="home-text104">Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="home-rows">
            <div className="home-column3">
              <div className="Question">
                <span className="home-title09">
                  What is Chartwise and how does it work?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description11">
                  Chartwise is a stock chart pattern analyzer used to analyze
                  various stock patterns so that users can make better decisions
                  when to buy and sell stocks and maximise their profits. It
                  uses a linear regression approach to form the patterns.
                </span>
              </div>
              <div className="Question">
                <span className="home-title10">
                  What types of stock chart patterns can Chartwise analyze?
                </span>
                <span className="home-description12">
                  Chartwise can analyze stock chart using patterns such as
                  triangle pattern, channel pattern, head &amp; shoulder pattern
                  etc.
                </span>
              </div>
              <div className="home-question2 Question">
                <span className="home-title11">
                  Does Chartwise provide any advice on when to buy and sell
                  stocks?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description13">
                  We have a special feature of automatically notifying users
                  about the correct time to buy and sell stock through email
                  notification or sms notifications.
                </span>
              </div>
            </div>
            <div className="home-column4">
              <div className="home-question3 Question">
                <span className="home-title12">
                  How accurate is Chartwise in analyzing stock market trends?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description14">
                  Our product is capable of producing accurate results
                  consistently with and accuracy of 98.6% to form the patterns. 
                </span>
              </div>
              <div className="home-question4 Question">
                <span className="home-title13">
                  Is there a free trial version of Chartwise available?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description15">
                  We offer a free trial version which is valid for 7 days. After
                  which we charge on a yearly basis or upto the next 3 months.
                </span>
              </div>
              <div className="home-question5 Question">
                <span className="home-title14">
                  What kind of customer support does Chartwise provide for its
                  users?
                </span>
                <span className="home-description16">
                  Chartwise has a  24*7 customer service support where we help
                  you right from setting up your account and then solving any
                  query regarding the usage of product and how to use it for
                  making better decisions.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-get-started1">
        <div className="home-content17">
          <div className="home-heading14">
            <h2 className="home-text105">Get started with Chartwise now!</h2>
            <span className="home-text106">
              Come be part of a community where you grow together and earn
              maximum profit through our services.
            </span>
          </div>
          <div className="home-hero-buttons1">
            <div className="home-io-btn1">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-zmzg.svg"
                className="home-apple1"
              />
              <span className="home-caption6">Download for iOS</span>
            </div>
            <div className="home-android-btn1">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-ld65.svg"
                className="home-android1"
              />
              <span className="home-caption7">Download for Android</span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
