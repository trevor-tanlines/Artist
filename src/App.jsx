function App() {
  return (
      <div className="app">
        <section id="content">
          <header>
            <div>
                <h1>Shop Mart</h1>
                <div>
                  <button className="icon-btn">
                    <span>&#129293;</span>
                    </button>

                  <span className="badge">3</span>
                  
                  <button className="icon-btn">
                  <span>&#128722;</span>
                  <span className="badge">1</span>
                  </button>
                </div>
            </div>

            <div>
              <nav>
                <button>Home</button>
                <button>Catalog</button>
                <button>All Products</button>
                <button>Wishlist</button>
              </nav>

              <form>
                <input type="search" placeholder="search" />
                <button type="button">Go</button>
              </form>
            </div>
          </header>

          <main>
            <div className="Product">
            <img src=""></img>
            <p className="pr-name">Shoes</p>
            <p className="pr-price">$40</p>
            </div>
          </main>

          <main>
            <div className="Product">
            <img src=""></img>
            <p className="pr-name">Shoes</p>
            <p className="pr-price">$40</p>
            </div>
          </main>

          <main>
            <div className="Product">
            <img src=""></img>
            <p className="pr-name">Shoes</p>
            <p className="pr-price">$40</p>
            </div>
          </main>

          <main>
            <div className="Product">
            <img src=""></img>
            <p className="pr-name">Shoes</p>
            <p className="pr-price">$40</p>
            </div>
          </main>

          <main>
            <div className="Product">
            <img src=""></img>
            <p className="pr-name">Shoes</p>
            <p className="pr-price">$40</p>
            </div>
          </main>

          <main>
            <div className="Product">
            <img src=""></img>
            <p className="pr-name">Shoes</p>
            <p className="pr-price">$40</p>
            </div>
          </main>

          <main>
            <div className="Product">
            <img src=""></img>
            <p className="pr-name">Shoes</p>
            <p className="pr-price">$40</p>
            </div>
          </main>

        </section>
        <footer>

        <div>
            <h3>Our Products</h3>
            <ul>
              <li><a href="">Home Page</a></li>
              <li><a href="">Search</a></li>
              <li><a href="">Catalog</a></li>
            </ul>
          </div>

        <div>
            <h3>Our Policies</h3>
            <ul>
              <li><a href="">Return Policy</a></li>
              <li><a href="">Shipping Policy</a></li>
              <li><a href="">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3>Our Store</h3>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Sell With Us</a></li>
            </ul>
          </div>
        </footer>
      </div>
  );
}

export default App;
