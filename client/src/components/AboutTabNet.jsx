import React from "react";
import './AboutTabNet.css';

const AboutTabNet = () => {
  return (
    <section className="about-tabnet">
      <h1> Why We Use TabNet for GDM Prediction</h1>

      <p>
        Our GDM prediction model is powered by <strong>TabNet</strong>, a deep learning architecture designed specifically
        for <em>tabular data</em>—the kind commonly found in healthcare records such as blood sugar levels, BMI, blood pressure, and more.
        TabNet gives us the best of both worlds: <strong>high accuracy</strong> and <strong>interpretability</strong>, making it ideal
        for sensitive healthcare decisions.
      </p>

      <h2> Why TabNet?</h2>
      <ul>
        <li>
          <strong>Built for Medical Data:</strong> TabNet handles structured (tabular) health data without forcing
          it into formats like images or text sequences.
        </li>
        <li>
          <strong>Minimal Manual Tuning:</strong> It learns which features matter most directly from the data, reducing
          the need for manual feature engineering.
        </li>
        <li>
          <strong>Interpretability:</strong> TabNet uses <em>feature masking</em> to show which variables (like fasting glucose,
          BMI, etc.) contributed most to each prediction.
        </li>
        <li>
          <strong>Fast & Scalable:</strong> It's efficient for both training and deployment, enabling real-time predictions.
        </li>
      </ul>

      <h2> How TabNet Works</h2>
      <p>
        TabNet mimics the decision-making process of a clinician using modern deep learning and attention-based mechanisms.
        Here's how it works:
      </p>

      <ol>
        <li>
          <strong>Input Stage:</strong> Your health data (like age, glucose levels, weight, etc.) is fed into the model.
        </li>
        <li>
          <strong>Decision Steps:</strong> At each step, TabNet chooses the most relevant features using a learned <em>feature mask</em>,
          just like a doctor deciding what to focus on first.
        </li>
        <li>
          <strong>Sparse Attention:</strong> Instead of using all features at once, TabNet selects only the most informative ones—reducing noise and increasing relevance.
        </li>
        <li>
          <strong>Prediction:</strong> These refined features are passed through layers to generate a personalized GDM risk score.
        </li> 
      </ol>

      <h2> Why This Matters in GDM</h2>
      <p>
        Gestational Diabetes is influenced by a mix of static and dynamic risk factors—like family history, diet, and blood sugar levels.
        TabNet's ability to <strong>adaptively focus on different features</strong> at different times makes it an excellent fit for predicting such a complex condition.
      </p>

      <ul>
        <li>Identifies early warning signs using clinical data</li>
        <li>Reduces false positives and unnecessary stress</li>
        <li>Explains risk factors clearly to doctors and users</li>
        <li>Tracks how your lifestyle changes affect future predictions</li>
      </ul>
    </section>
  );
};

export default AboutTabNet;

