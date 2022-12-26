import styles from "./Contact.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
function Contact() {
  return (
    <div id="contact" className={styles.contact}>
      <h2 className={styles.header}>Contact me</h2>
      <div className={styles.contacts}>
        <div
          onClick={() => {
            window.open(
              "https://www.facebook.com/eldin.dezmic.96",
              "_blank",
              "noopener,noreferrer"
            );
          }}
          className={styles.iconWrap}
        >
          <FacebookIcon className={styles.icon}></FacebookIcon>
        </div>
        <div
          onClick={() => {
            window.open(
              "https://www.instagram.com/dezmiceldin/",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          <InstagramIcon className={styles.icon}></InstagramIcon>
        </div>
        <div
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/eldin-dezmic-5804611b4/",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          <LinkedInIcon className={styles.icon}></LinkedInIcon>
        </div>
        <div className={styles.iconWrap}>
          <a href="mailto: dezmic91@gmail.com">
            <EmailIcon className={styles.icon}></EmailIcon>
          </a>
        </div>
        <div
          onClick={() => {
            window.open(
              "https://twitter.com/eldin_dezmic",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          <TwitterIcon className={styles.icon}></TwitterIcon>
        </div>
        <div className={styles.iconWrap}>
          <a href="https://api.whatsapp.com/send?phone=387644086863">
            <WhatsAppIcon className={styles.icon}></WhatsAppIcon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
