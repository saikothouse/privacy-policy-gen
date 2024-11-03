import React, { useState } from 'react';
import PrivacyPolicyForm from './PrivacyPolicyForm';

const App = () => {
  const [policy, setPolicy] = useState('');

  const handleGenerate = (values) => {
    const generatedPolicy = `
      **Privacy Policy for ${values.companyName}**

      Effective Date: [Insert Date]

      At ${values.companyName}, accessible from ${values.websiteUrl}, 
      your privacy is of utmost importance to us. This Privacy Policy outlines 
      the types of personal information we collect, how we use it, and your rights 
      regarding your information.

      **1. Information We Collect**
      - Personal Identification Information: Name, Email, Phone Number, etc.
      - Non-Personal Identification Information: Browser type, IP address, etc.
      - Cookies and Tracking Technologies: We use cookies to enhance user experience.

      **2. How We Use Your Information**
      - To improve customer service and respond to user requests
      - To personalize user experience and analyze site usage
      - To process transactions and send periodic emails regarding orders or inquiries
      - To comply with legal obligations and protect our rights

      **3. Data Retention**
      We will retain your personal information only for as long as is necessary 
      for the purposes set out in this Privacy Policy.

      **4. Data Protection**
      We implement appropriate security measures to protect your personal information 
      from unauthorized access, disclosure, or destruction.

      **5. Your Rights Under GDPR**
      If you are a resident of the European Economic Area (EEA), you have certain data 
      protection rights. ${values.companyName} aims to take reasonable steps to allow 
      you to correct, amend, delete, or limit the use of your Personal Data. If you 
      wish to be informed about what Personal Data we hold about you and if you want 
      it to be removed from our systems, please contact us.

      **6. Your Rights Under CCPA**
      If you are a California resident, you have the right to request that we disclose 
      certain information to you about our collection and use of your personal information 
      over the past 12 months. Once we receive and confirm your verifiable consumer 
      request, we will disclose to you:
      - The categories of personal information we collected about you
      - The categories of sources for the personal information we collected about you
      - Our business or commercial purpose for collecting or selling that personal information
      - The categories of third parties with whom we share that personal information
      - The specific pieces of personal information we collected about you

      **7. Do Not Sell My Personal Information**
      We do not sell your personal information. However, if you are a California resident, 
      you have the right to opt-out of the sale of your personal information. To exercise 
      this right, please contact us.

      **8. CalOPPA Compliance**
      Pursuant to CalOPPA, we agree to the following:
      - Users can visit our site anonymously
      - Once this privacy policy is created, we will add a link to it on our home page 
        or as a minimum, on the first significant page after entering our website
      - Our Privacy Policy link includes the word 'Privacy' and can easily be found 
        on the page specified above
      - You will be notified of any Privacy Policy changes on our Privacy Policy Page
      - You can change your personal information by emailing us

      **9. Google Analytics**
      We use Google Analytics to track user behavior on our website. This helps us 
      understand how users interact with our website and make improvements to the 
      user experience.

      **10. Google AdSense**
      We use Google AdSense to display ads on our website. This helps us generate 
      revenue and support the maintenance of our website.

      **11. Changes to This Privacy Policy**
      We reserve the right to modify this Privacy Policy at any time. 
      You acknowledge and agree that it is your responsibility to review this 
      Privacy Policy periodically to familiarize yourself with any modifications.

      **12. Your Acceptance of These Terms**
      By using this ${values.policyType === 'website' ? 'website' : 'app'}, 
      you signify your acceptance of this Privacy Policy. 
      If you do not agree to this Privacy Policy, please do not use this 
      ${values.policyType === 'website' ? 'website' : 'app'}. 
      Your continued use of this ${values.policyType === 'website' ? 'website' : 'app'} 
      following the posting of changes to this Privacy Policy will be deemed your 
      acceptance of those changes.
    `;
    setPolicy(generatedPolicy);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Privacy Policy Generator</h1>
      <PrivacyPolicyForm onGenerate={handleGenerate} />
      {policy && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Generated Privacy Policy</h2>
          <div className="bg-white shadow-md rounded p-4">
            <pre className="whitespace-pre-wrap">{policy}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
