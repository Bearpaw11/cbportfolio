import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import classes from "./Contact.module.css";
import PageHeader from "./../PageHeader/PageHeader";

const handleURL = (url) => {
  return () => window.open(url, "_blank");
};

const mailTo = () => {
  window.open("mailto:christopherbehrens1984@gmail.com");
};

const Contact = () => {
  return (
    <div className={classes.Contacts} id="contact">
      <PageHeader title={"Contact"} />
      <div className={classes.Contact}>
        <div className={classes.ContactIcons}>
          <FaRegEnvelope
            color="white"
            size="40px"
            style={{ padding: "1%" }}
            onClick={mailTo}
          />
          <FaGithub
            color="white"
            size="40px"
            style={{ padding: "1%" }}
            onClick={handleURL("https://github.com/Bearpaw11")}
          />
          <FaLinkedin
            color="white"
            size="40px"
            style={{ padding: "1%" }}
            onClick={handleURL("https://www.linkedin.com/in/chris-behrens/")}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
