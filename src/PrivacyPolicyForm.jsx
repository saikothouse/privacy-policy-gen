import React from 'react';
import { Formik, Form, Field } from 'formik';

const PrivacyPolicyForm = ({ onGenerate }) => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Privacy Policy Generator</h2>
      <p className="mb-6 text-gray-600">
        This form helps you create a privacy policy for your website or app. Please fill out the details below.
      </p>
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
              <label htmlFor="companyName" className="block font-medium">Company Name</label>
              <Field name="companyName" type="text" className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
              <label htmlFor="websiteUrl" className="block font-medium">Website URL</label>
              <Field name="websiteUrl" type="text" className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
              <label htmlFor="contactEmail" className="block font-medium">Contact Email</label>
              <Field name="contactEmail" type="email" className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
              <label htmlFor="dataCollection" className="block font-medium">Data Collection Details</label>
              <Field name="dataCollection" as="textarea" className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
              <label htmlFor="policyType" className="block font-medium">Policy Type</label>
              <Field as="select" name="policyType" className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="website">Website</option>
                <option value="app">App</option>
              </Field>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200">Generate Policy</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PrivacyPolicyForm;
