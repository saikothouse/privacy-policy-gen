import React from 'react';
import { Formik, Form, Field } from 'formik';

const PrivacyPolicyForm = ({ onGenerate }) => {
  return (
    <Formik
      initialValues={{
        companyName: '',
        websiteUrl: '',
        contactEmail: '',
        dataCollection: '',
        policyType: 'website',
      }}
      onSubmit={(values) => {
        onGenerate(values);
      }}
    >
      {() => (
        <Form className="space-y-4">
          <div>
            <label htmlFor="companyName" className="block">Company Name</label>
            <Field name="companyName" type="text" className="border p-2 w-full" required />
          </div>
          <div>
            <label htmlFor="websiteUrl" className="block">Website URL</label>
            <Field name="websiteUrl" type="text" className="border p-2 w-full" required />
          </div>
          <div>
            <label htmlFor="contactEmail" className="block">Contact Email</label>
            <Field name="contactEmail" type="email" className="border p-2 w-full" required />
          </div>
          <div>
            <label htmlFor="dataCollection" className="block">Data Collection Details</label>
            <Field name="dataCollection" as="textarea" className="border p-2 w-full" required />
          </div>
          <div>
            <label htmlFor="policyType" className="block">Policy Type</label>
            <Field as="select" name="policyType" className="border p-2 w-full">
              <option value="website">Website</option>
              <option value="app">App</option>
            </Field>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2">Generate Policy</button>
        </Form>
      )}
    </Formik>
  );
};

export default PrivacyPolicyForm;