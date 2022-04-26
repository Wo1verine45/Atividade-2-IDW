import facebookLogo from "../../assets/facebook.png";
import instagramLogo from "../../assets/instagram.png";
import whatsappLogo from "../../assets/whatsapp.png";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list" id="contacts">
        <li className="footer-item">
          <a
            href="https://pt-br.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
            <img src={facebookLogo} alt="Facebook Logo" />
          </a>
        </li>
        <li className="footer-item">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
            <img src={instagramLogo} alt="Instagram Logo" />
          </a>
        </li>
        <li className="footer-item">
          <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
            Whatsapp
            <img src={whatsappLogo} alt="WhatsApp Logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
