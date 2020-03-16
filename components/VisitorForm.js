import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ScannerDetectionPlugin from './jquery/jquery.scannerdetection';
import SSIDContext from '../store/SSIDContext';

const SignupSchema = Yup.object().shape({

  firstName: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  lastName: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  birthDate: Yup.date()
    .required('Required')
    .min(new Date(1950, 0, 1))
    .max(new Date(2002, 0, 1)),

});



const VisitorForm = () => {

  const context = useContext(SSIDContext);
  const { isOfficeUseOnly, isScanned } = context.visitor;

  let mapPropsToValues = (props) => {
    return {
      firstName: props.firstName || '',
      lastName: props.lastName || '',
      birthDate: props.birthDate || '',
    }
  }

  let validate = (isValid, dirty) => (isScanned) ? (!isScanned) : (!(isValid && dirty));

  return (
    <div>

      {console.log(context.visitor)}

      <ScannerDetectionPlugin setBarcodeValue={(value) => {
        context.setValue({ firstName: 'Shahid', lastName: 'Amin', birthDate: '05/01/1988', barcode: value, isOfficeUseOnly: false, isScanned: true, });
      }} />

      <Formik

        enableReinitialize={true}

        initialValues={mapPropsToValues(context.visitor)}

        validationSchema={SignupSchema}

        onSubmit={(values, { setSubmitting }) => {

          setTimeout(() => {

            if (isOfficeUseOnly) {
              context.setValue(values);
            }

            alert(JSON.stringify(context.visitor, null, 2));
            setSubmitting(false);

          }, 400);

        }}
      >
        {({ isValid, dirty }) => (

          <Form>

            <div className="form-group">
              <Field disabled={!isOfficeUseOnly} type="text" name="firstName" className="form-control form-control-lg" placeholder="Legal First Name" />
              <ErrorMessage name="firstName" className="form-text error-message" component="small" />
            </div>

            <div className="form-group">
              <Field disabled={!isOfficeUseOnly} type="text" name="lastName" className="form-control form-control-lg" placeholder="Legal Last Name" />
              <ErrorMessage name="lastName" className="form-text error-message" component="small" />
            </div>

            <div className="form-group">
              <Field disabled={!isOfficeUseOnly} type="text" name="birthDate" className="form-control form-control-lg" placeholder="Date of Birth (mm/dd/yyyy)" />
              <ErrorMessage name="birthDate" className="form-text error-message" component="small" />
            </div>

            <button disabled={validate(isValid, dirty)} className="ssid-button green" type="submit">
              CONFIRM AND SUBMIT
            </button>

          </Form>
        )}

      </Formik>

      <style>
        {`
          .form-control-lg {        
            padding: 2rem 1rem;
            font-size: 1.5rem;
            line-height: 1.5;        
          }
        `}
      </style>
    </div>
  );
};

export default VisitorForm;