import "./Footer.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
export function FooterComponent() {
  return (
    <footer className="footer">
        <p className="contatos">Contatos</p>
        <div className="redes-sociais">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
            </div>
    </footer>
  );
}