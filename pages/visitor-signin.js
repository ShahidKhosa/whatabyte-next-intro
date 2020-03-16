import React from 'react';
import Layout from "../components/Layout";
import NavButton from "../components/NavButton";
import VisitorForm from '../components/VisitorForm';
import BModal from '../components/Modal';
import MatchPassword from '../components/MatchPassword';


const visitorSignin = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (

        <Layout Column="2" title='Visitor Sign-in'

            top={
                <h1 className="page-heading">Scan Drivers License or Frequent Visitor ID</h1>
            }

            left={
                <>
                    <div>
                        <img className="img img-responsive" src="./assets/img/barcode_scanner.png" alt="Scan License" title="Scan Drivers License or Frequent Visitor ID" />
                        <div className="text-center">Scan your driver license 2D barcode.</div>
                    </div>

                    <div>&nbsp;</div>

                    <div>
                        <img className="img img-responsive" src="./assets/img/pdf417.png" alt="Scan License" />
                        <p className="text-center">Sample 2D barcode on back of license.</p>
                    </div>
                </>
            }

            right={

                <>
                    <VisitorForm isVisitor={true} />

                    <div>&nbsp;</div>

                    <p className="page-content">Hold your drivers license up to the scanning device as shown. The back of your license should face the scanning device so that it can read the 2D bar code. Once you hear the beep, please confirm your first name, last name and date of birth. Hit submit to continue.</p>
                </>

            }

            navButtons={
                <>
                    <NavButton buttonClass="gray" path="/" text="Go To Home" />
                    <NavButton buttonClass="green" path="" text="OFFICE USE ONLY" onButtonClick={() => setModalShow(true)} />
                </>
            }


            after={
                <BModal
                    title='Enter Password'
                    size="md"
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                >
                    <MatchPassword closeModal={() => setModalShow(false)} />
                </BModal>
            }
        />

    );
}

export default visitorSignin;