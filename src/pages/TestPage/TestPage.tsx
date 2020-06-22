import Step1 from 'pages/InitializeProjectPage/components/Step1/Step1';
import Step2 from 'pages/InitializeProjectPage/components/Step2/Step2';
import Step3 from 'pages/InitializeProjectPage/components/Step3/Step3';
import Step4 from 'pages/InitializeProjectPage/components/Step4/Step4';
import Step5 from 'pages/InitializeProjectPage/components/Step5/Step5';
import React from 'react';

const TestPage = () => {
  return (
    <div style={{ marginTop: 80 }}>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
    </div>
  );
};

export default TestPage;
