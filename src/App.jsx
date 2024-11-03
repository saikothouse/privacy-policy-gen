import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import PrivacyPolicyForm from './PrivacyPolicyForm';

const App = () => {
  const [policy, setPolicy] = useState('');
  const [formValues, setFormValues] = useState({});

  const handleGenerate = (values) => {
    setFormValues(values); // Store form values for later use
    const generatedPolicy = `
      **Privacy Policy for ${values.companyName}**

      At ${values.companyName}, accessible from ${values.websiteUrl}, 
      one of our main priorities is the privacy of our visitors. 
      This Privacy Policy document outlines the types of information that is collected 
      and recorded by ${values.companyName} and how we use it.

      **Contact Us:**
      For any inquiries, please contact us at ${values.contactEmail}.

      **Data Collection:**
      ${values.dataCollection}

      **Policy Type:**
      This policy applies to our ${values.policyType === 'website' ? 'website' : 'app'}.

      **Information We Collect:**
      - Personal Identification Information (Name, Email, Phone Number, etc.)
      - Non-Personal Identification Information (Browser type, IP address, etc.)

      **How We Use Your Information:**
      - To improve customer service
      - To personalize user experience
      - To process transactions
      - To send periodic emails

      **Your Rights Under GDPR:**
      If you are a resident of the European Economic Area (EEA), you have certain data protection rights. ${values.companyName} aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. If you wish to be informed about what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.

      **Your Rights Under CCPA:**
      If you are a California resident, you have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you:
      - The categories of personal information we collected about you
      - The categories of sources for the personal information we collected about you
      - Our business or commercial purpose for collecting or selling that personal information
      - The categories of third parties with whom we share that personal information
      - The specific pieces of personal information we collected about you

      **Do Not Sell My Personal Information:**
      We do not sell your personal information. However, if you are a California resident, you have the right to opt-out of the sale of your personal information. To exercise this right, please contact us.

      **CalOPPA Compliance:**
      Pursuant to CalOPPA, we agree to the following:
      - Users can visit our site anonymously
      - Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website
      - Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above
      - You will be notified of any Privacy Policy changes on our Privacy Policy Page
      - You can change your personal information by emailing us

      **Google Analytics:**
      We use Google Analytics to track user behavior on our website. This helps us understand how users interact with our website and make improvements to the user experience.

      **Google AdSense:**
      We use Google AdSense to display ads on our website. This helps us generate revenue and support the maintenance of our website.

      **Changes to This Privacy Policy:**
      We reserve the right to modify this Privacy Policy at any time. 
      You acknowledge and agree that it is your responsibility to review this Privacy Policy periodically 
      to familiarize yourself with any modifications.

      **Your Acceptance of These Terms:**
      By using this ${values.policyType === 'website' ? 'website' : 'app'}, 
      you signify your acceptance of this Privacy Policy. 
      If you do not agree to this Privacy Policy, please do not use this ${values.policyType === 'website' ? 'website' : 'app'}. 
      Your continued use of this ${ values.policyType === 'website' ? 'website' : 'app'} 
      following the posting of changes to this Privacy Policy will be deemed your acceptance of those changes.
    `;
    setPolicy(generatedPolicy);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const generateHTML = () => {
    const html = `
      <h1>Privacy Policy for ${formValues.companyName}</h1>
      <p>At ${formValues.companyName}, accessible from ${formValues.websiteUrl}, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by ${formValues.companyName} and how we use it.</p>

      <h2>Contact Us:</h2>
      <p>For any inquiries, please contact us at ${formValues.contactEmail}.</p>

      <h2>Data Collection:</h2>
      <p>${formValues.dataCollection}</p>

      <h2>Policy Type:</h2>
      <p>This policy applies to our ${formValues.policyType === 'website' ? 'website' : 'app'}.</p>

      <h2>Information We Collect:</h2>
      <ul>
        <li>Personal Identification Information (Name, Email, Phone Number, etc.)</li>
        <li>Non-Personal Identification Information (Browser type, IP address, etc.)</li>
      </ul>

      <h2>How We Use Your Information:</h2>
      <ul>
        <li>To improve customer service</li>
        <li>To personalize user experience</li>
        <li>To process transactions</li>
        <li>To send periodic emails</li>
      </ul>

      <h2>Your Rights Under GDPR:</h2>
      <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. ${formValues.companyName} aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. If you wish to be informed about what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.</p>

      <h2>Your Rights Under CCPA:</h2>
      <p>If you are a California resident, you have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you:</p>
      <ul>
        <li>The categories of personal information we collected about you</li>
        <li>The categories of sources for the personal information we collected about you</li>
        <li>Our business or commercial purpose for collecting or selling that personal information</li>
        <li>The categories of third parties with whom we share that personal information</li>
        <li>The specific pieces of personal information we collected about you</li>
      </ul>

      <h2>Do Not Sell My Personal Information:</h2>
      <p>We do not sell your personal information. However, if you are a California resident, you have the right to opt-out of the sale of your personal information. To exercise this right, please contact us.</p>

      <h2>CalOPPA Compliance:</h2>
      <p>Pursuant to CalOPPA, we agree to the following:</p>
      <ul>
        <li>Users can visit our site anonymously</li>
        <li>Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website</li>
        <li>Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above</li>
        <li>You will be notified of any Privacy Policy changes on our Privacy Policy Page</li>
        <li>You can change your personal information by emailing us</li>
      </ul>

      <h2>Google Analytics:</h2>
      <p>We use Google Analytics to track user behavior on our website. This helps us understand how users interact with our website and make improvements to the user experience.</p>

      <h2>Google AdSense:</h2>
      <p>We use Google AdSense to display ads on our website. This helps us generate revenue and support the maintenance of our website.</p>

      <h2>Changes to This Privacy Policy:</h2>
      <p>We reserve the right to modify this Privacy Policy at any time. You acknowledge and agree that it is your responsibility to review this Privacy Policy periodically to familiarize yourself with any modifications.</p>

      <h2>Your Acceptance of These Terms:</h2>
      <p>By using this ${formValues.policyType === 'website' ? 'website' : 'app'}, you signify your acceptance of this Privacy Policy. If you do not agree to this Privacy Policy, please do not use this ${formValues.policyType === 'website' ? 'website' : 'app'}. Your continued use of this ${formValues.policyType === 'website' ? 'website' : 'app'} following the posting of changes to this Privacy Policy will be deemed your acceptance of those changes.</p>
    `;
    return html;
  };

  const generateMarkdown = () => {
    const markdown = `
      # Privacy Policy for ${formValues.companyName}

      At ${formValues.companyName}, accessible from ${formValues.websiteUrl}, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by ${formValues.companyName} and how we use it.

 ## Contact Us:

      For any inquiries, please contact us at ${formValues.contactEmail}.

      ## Data Collection:

      ${formValues.dataCollection}

      ## Policy Type:

      This policy applies to our ${formValues.policyType === 'website' ? 'website' : 'app'}.

      ## Information We Collect:

      * Personal Identification Information (Name, Email, Phone Number, etc.)
      * Non-Personal Identification Information (Browser type, IP address, etc.)

      ## How We Use Your Information:

      * To improve customer service
      * To personalize user experience
      * To process transactions
      * To send periodic emails

      ## Your Rights Under GDPR:

      If you are a resident of the European Economic Area (EEA), you have certain data protection rights. ${formValues.companyName} aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. If you wish to be informed about what Personal Data we hold about you and if you want it to be removed from our systems, please contact us.

      ## Your Rights Under CCPA:

      If you are a California resident, you have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you:

      * The categories of personal information we collected about you
      * The categories of sources for the personal information we collected about you
      * Our business or commercial purpose for collecting or selling that personal information
      * The categories of third parties with whom we share that personal information
      * The specific pieces of personal information we collected about you

      ## Do Not Sell My Personal Information:

      We do not sell your personal information. However, if you are a California resident, you have the right to opt-out of the sale of your personal information. To exercise this right, please contact us.

      ## CalOPPA Compliance:

      Pursuant to CalOPPA, we agree to the following:

      * Users can visit our site anonymously
      * Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website
      * Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above
      * You will be notified of any Privacy Policy changes on our Privacy Policy Page
      * You can change your personal information by emailing us

      ## Google Analytics:

      We use Google Analytics to track user behavior on our website. This helps us understand how users interact with our website and make improvements to the user experience.

      ## Google AdSense:

      We use Google AdSense to display ads on our website. This helps us generate revenue and support the maintenance of our website.

      ## Changes to This Privacy Policy:

      We reserve the right to modify this Privacy Policy at any time. You acknowledge and agree that it is your responsibility to review this Privacy Policy periodically to familiarize yourself with any modifications.

      ## Your Acceptance of These Terms:

      By using this ${formValues.policyType === 'website' ? 'website' : 'app'}, you signify your acceptance of this Privacy Policy. If you do not agree to this Privacy Policy, please do not use this ${formValues.policyType === 'website' ? 'website' : 'app'}. Your continued use of this ${formValues.policyType === 'website' ? 'website' : 'app'} following the posting of changes to this Privacy Policy will be deemed your acceptance of those changes.
    `;
    return markdown;
  };

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Privacy Policy Generator</title>
        <meta name="description" content="Generate a privacy policy for your website or app" />
        <meta name="keywords" content="privacy policy, generator, website, app" />
      </Helmet>
      <h1 className="text-2xl font-bold">Privacy Policy Generator</h1>
      <PrivacyPolicyForm onGenerate={handleGenerate} />
      {policy && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Generated Privacy Policy</h2>
          <div className="bg-white shadow-md rounded p-4">
            <pre className="whitespace-pre-wrap">{policy}</pre>
          </div>
          <div className="flex justify-between mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => copyToClipboard(policy)}
            >
              Copy Markdown
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => copyToClipboard(generateHTML())}
 >
              Copy HTML
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => copyToClipboard(generateMarkdown())}
            >
              Copy Markdown (Formatted)
            </button>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Generated HTML</h2>
            <div className="bg-white shadow-md rounded p-4" dangerouslySetInnerHTML={{ __html: generateHTML() }} />
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Generated Markdown (Formatted)</h2>
            <div className="bg-white shadow-md rounded p-4">
              <pre className="whitespace-pre-wrap">{generateMarkdown()}</pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
