import './App.css';

function App() {
  const navToggle = () => {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');

    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
    console.log('clicked');
  }

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-brand">
                <a href="/">
                    <img src="img/cognex_logo.png" alt="COGNEX" height="30px" />
                </a>
            </div>

            <ul className="navbar-nav-left">
                <li>
                    <a href="https://www.cognex.com/products" target="_blank" rel="noreferrer">Products</a>
                </li>
                <li>
                    <a href="https://www.cognex.com/solutions" target="_blank" rel="noreferrer">Solutions</a>
                </li>
                <li>
                    <a href="https://www.cognex.com/industries" target="_blank" rel="noreferrer">Industries</a>
                </li>
                <li>
                    <a href="https://www.cognex.com/applications" target="_blank" rel="noreferrer">Applications</a>
                </li>
            </ul>

            <ul className="navbar-nav-right">
                <li>
                    <span>Call Cognex Sales<br/>02-539-9980</span>
                </li>
                <li><button className="btn btn-dark-outline">MyCognex Log In</button></li>
                <li><button className="btn btn-dark">Create Account</button></li>
            </ul>

            <button type="button" className="hamburger" id="menu-btn" onClick={navToggle}>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
        </div>
    </nav>

    <div className="mobile-menu hidden" id="menu">
        <ul>
            <li>
                <a href="https://www.cognex.com/products" target="_blank" rel="noreferrer">Products</a>
            </li>
            <li>
                <a href="https://www.cognex.com/solutions" target="_blank" rel="noreferrer">Solutions</a>
            </li>
            <li>
                <a href="https://www.cognex.com/industries" target="_blank" rel="noreferrer">Industries</a>
            </li>
            <li>
                <a href="https://www.cognex.com/applications" target="_blank" rel="noreferrer">Applications</a>
            </li>
        </ul>

        <div className="mobile-menu-bottom">
            <button className="btn btn-dark-outline">MyCognex Log In</button>
            <button className="btn btn-dark">Create Account</button>
            <div>
              <span>Call Cognex Sales<br/>02-539-9980</span>
            </div>
        </div>
    </div>

    <section className="box box-a bg-primary text-center py-md">
        <div className="box-inner">
            <h2 className="text-xl">COGNEX Special Website</h2>
            <p className="text-md">
                Hello from, <b>eastus</b>!
            </p>
        </div>
    </section>

    <section className="box box-b bg-secondary grid-col-2">
        <img src="img/box-b.png" alt="" />
        <div className="box-text">
            <h2 className="text-xl">In-Sight D900</h2>
            <p className="text-md">
                Powered by In-Sight D900 Deep Learning-Based Vision Software
            </p>
            <a href="https://www.cognex.com/products/deep-learning/in-sight-d900" className="btn btn-light-outline">Order Now</a>
        </div>
    </section>

    <section className="box box-c bg-secondary grid-col-2 grid-reversed">
        <img src="img/box-c.png" alt="" />
        <div className="box-text">
            <h2 className="text-xl">DataMan 470 Series</h2>
            <p className="text-md">
                Fixed-mount barcode readers solve complex, high-throughput
                manufacturing and loigstics applications with ease.
            </p>
            <a href="https://www.cognex.com/products/barcode-readers/fixed-mount-barcode-readers/dataman-470-series" className="btn btn-light-outline">Order Now</a>
        </div>
    </section>

    <section className="box box-d bg-primary grid-col-2">
        <img src="img/box-d.png" alt="" />
        <div className="box-text">
            <h2 className="text-xl">VisionPro Deep Learning</h2>
            <p className="text-md">
                Graphical programming environment for deep learning-based industrial image analysis.
            </p>
            <a href="https://www.cognex.com/products/deep-learning/visionpro-deep-learning" className="btn btn-light-outline">Order Now</a>
        </div>
    </section>

    <section className="box box-e bg-secondary grid-col-2 grid-reversed">
        <img src="img/box-e.jpg" alt="" />
        <div className="box-text">
            <h2 className="text-md">Cognex Solutions</h2>
            <p className="text-sm">
                Companies across the globe face complex manufacturing and operational challenges in the creation
                and fulfillment of quality products to their customers. Cognex machine vision and industrial barcode
                reading solutions help our customers solve some of their most challenging and diverse application challenges.
                Our knowledge of these problems, paired with our innovative technology, means we can provide robust and
                repeatable solutions that address several challenges facing a broad range of industries; including guidance,
                identification, gauging, and inspection. Using our solutions, our customers have increased process
                performance, improved product quality, and reduced costs.
            </p>
        </div>
    </section>

    <section className="box box-f grid-col-2">
        <div>
            <img src="img/box-f1.jpg" alt="" />
            <div className="bg-extra py-lg">
                <div className="box-text">
                    <h2 className="text-md">World’s leading provider of vision systems, software, sensors, and industrial barcode readers</h2>
                    <p className="text-sm">
                        Cognex supplies inspection, guidance and identification solutions to virtually all manufacturing
                        industry sectors. In addition to the major sectors shown below, we also supply the Aerospace,
                        Electronic Assembly Equipment, Document Processing and Printing, Life Sciences and Product
                        Security markets.
                    </p>
                </div>
            </div>
        </div>
        <div>
            <img src="img/box-f2.jpg" alt="" />
            <div className="bg-primary py-lg">
                <div className="box-text">
                    <h2 className="text-md">World’s leading provider of vision systems, software, sensors, and industrial barcode readers</h2>
                    <p className="text-sm">
                        Cognex vision helps companies improve product quality, eliminate production errors,
                        lower manufacturing costs, and exceed consumer expectations for high quality products
                        at an affordable price.
                        at an affordable price.
                        at an affordable price.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <div className="divider"></div>

    <footer className="footer">
        <div className="footer-container">
            <div className="social">
                <a href="https://www.facebook.com/cognexcorp/" target="_blank" rel="noreferrer">
                    <img src="./img/social-facebook.svg" alt="" />
                </a>
                <a href="https://www.pinterest.com/pin/304344887288692549/" target="_blank" rel="noreferrer">
                    <img src="./img/social-pinterest.svg" alt="" />
                </a>
                <a href="https://www.instagram.com/explore/locations/764811369/united-states/natick-massachusetts/cognex-corporation/?hl=en" target="_blank" rel="noreferrer">
                    <img src="./img/social-instagram.svg" alt="" />
                </a>
                <a href="https://www.youtube.com/c/CognexTV" target="_blank" rel="noreferrer">
                    <img src="./img/social-youtube.svg" alt="" />
                </a>
                <a href="https://twitter.com/cognex_corp" target="_blank" rel="noreferrer">
                    <img src="./img/social-twitter.svg" alt="" />
                </a>
            </div>
            <p>© 2021 COGNEX. All rights reserved.</p>
        </div>
    </footer>
    </div>
  );
}

export default App;
