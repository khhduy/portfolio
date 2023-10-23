import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
					Have a nice day :^)
				</p>
				<p className="footer-subscription-text">
					Thank you for your interest in my experiences. You can email me or find me on LinkedIn if you want to chat more!
				</p>
				<p className="footer-subscription-email">
					dtrankhanh2507@gmail.com
				</p>
			</section>
			<div className="social-icons">
				<a href="https://www.linkedin.com/in/tran-khanh-duy-2301a2231/" target="_blank" rel="noopener noreferrer">
					<i className="fab fa-linkedin"></i>
				</a>
				<a href="dtrankhanh2507@gmail.com">
					<i className="far fa-envelope"></i>
				</a>
				<a href="https://github.com/kzduy" target="_blank" rel="noopener noreferrer">
					<i className="fab fa-github"></i>
				</a>
			</div>
		</div>
	)
}

export default Footer