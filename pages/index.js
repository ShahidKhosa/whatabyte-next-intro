// pages/index.js
import Layout from "../components/Layout";
import NavButton from "../components/NavButton";

const Index = () => (
  <Layout
    Column="1"    
    title='Home'
    navButtons={<NavButton buttonClass="gray" path="/faculty-options" text="FACULTY SIGN-IN/OUT" />}
  >

    <a className="welcome__brand">
      <img src="/assets/img/ssi-logo.png" alt="" />
    </a>

    <h1>Welcome to our schoolSAFEid kiosk. <br />Please select the option below to continue.</h1>

    <ul className="btn-wrapper">

      <NavButton buttonClass="green" path="/visitor-signin" text="VISITOR SIGN IN" subText="registro de visitante" />

      <NavButton buttonClass="red" path="/take-photo" text="VISITOR SIGN OUT" subText="salida de visitante" />

      <NavButton buttonClass="yellow" path="/" text="STUDENT SIGN IN" subText="registro de estudiante" />

      <NavButton buttonClass="blue" path="/" text="STUDENT SIGN OUT" subText="salida de estudiante" />

    </ul>
  </Layout>
);

export default Index;