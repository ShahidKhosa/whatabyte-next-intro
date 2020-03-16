import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SSIDContext from '../store/SSIDContext';

const SignupSchema = Yup.object().shape({

  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

const MatchPassword = props => {

  console.log('calling MatchPassword component');

  const context = useContext(SSIDContext);

  return (
    <div>
      <Formik

        initialValues={{ password: '' }}

        validationSchema={SignupSchema}

        onSubmit={(values, { setSubmitting }) => {

          setTimeout(() => {

            if (values.password === '1234') {

              context.setValue({ firstName: '', lastName: '', birthDate: '', barcode: '', isOfficeUseOnly: true, isScanned: false, });

              props.closeModal();

            }

            console.log(JSON.stringify(values, null, 2));

            setSubmitting(false);

          }, 400);

        }}

      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label>Password:</label>
              <Field type="password" name="password" className="form-control form-control-lg" placeholder="Enter Password" />
              <ErrorMessage name="password" className="form-text error-message" component="small" />
            </div>
            <button style={{ marginTop: '2rem' }} disabled={isSubmitting} className="ssid-button green" type="submit">
              SUBMIT
            </button>
          </Form>
        )}
      </Formik>

      <style>{`

      .form-control-lg {        
        padding: 2rem 1rem;
        font-size: 1.5rem;
        line-height: 1.5;        
      }

    `}</style>
    </div>
  );
};

export default React.memo(MatchPassword);