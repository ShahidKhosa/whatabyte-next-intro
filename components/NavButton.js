import Link from "next/link";
import { withRouter } from "next/router";

const NavButton = props => (  
  <li className={props.buttonClass}>
    <Link href={props.path}>
      <a onClick={props.onButtonClick} className={'ssid_btn btn_' + props.buttonClass} title={props.text}>
        {props.text}
        {props.subText && <small>{props.subText}</small>}
      </a>
    </Link>
  </li>
);

export default withRouter(NavButton);
