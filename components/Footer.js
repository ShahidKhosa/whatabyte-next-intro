// components/Footer.js
import Link from "next/link";
import NavButton from "./NavButton";

const Footer = props => (
  <div className="inner">
    <ul className="btn-wrapper">
      { props.navButtons? props.navButtons : <NavButton onPress={() => this.props.navigation.goBack()} buttonClass="gray" path="/" text="Go Back"/>}
    </ul>

    <Link href="#">
      <a className="welcome__foot--brand">
        <img src="/assets/img/ssi_footer-logo.png" alt="schoolSAFEid" title="schoolSAFEid" />
      </a>
    </Link>
  </div>
);

export default Footer;
