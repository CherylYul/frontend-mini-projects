import React from "react";

export default function SessionTwo() {
  return (
    <section className="section-two">
      <div class="container">
        <h2>For the true Crypto-connoisseur</h2>
        <div class="section-two-image-container">
          <div class="feature-item">
            <img
              src="images/crypto-punk.jpg"
              alt="punk with blach hair and red and blue glasses"
              class="feature-image"
            />
            <p>
              Is $33k for sneakers too basic? No problem! This CryptoPunk is a
              steal at $6.6 million, making Bag #748 (right) a total bargain.
            </p>
          </div>
          <div class="feature-item">
            <p>
              That's not a screenshot. Those eight lines of white text on a
              black background is the actual NFT we're selling for $1.4 million.
            </p>
          </div>
        </div>
        <a href="#" class="btn btn-light">
          About Us
        </a>
        <a href="#" class="btn btn-mid">
          Contact
        </a>
        <p>
          Still not convinced? To be honest, nor are we. That's why we're
          selling them, not buying them.
        </p>
      </div>
    </section>
  );
}
