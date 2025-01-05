import React from "react";
import "./MyInfo.css"; // Importing the CSS file

const MyInfo = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Glokal AI</h1>
        <p>Empowering financial institutions with smart AI solutions.</p>
      </header>

      <section className="section">
        <h2>About Us</h2>
        <p>
          Glokal AI is a Berlin-based company specializing in creating digital
          AI workers for financial institutions. Our mission is to enhance
          efficiency and robustness in processes and decision-making within the
          financial sector.
        </p>
      </section>

      <section className="section">
        <h2>Our Offerings</h2>
        <div className="card">
          <h3>Lina</h3>
          <p>
            A self-learning AI digital worker designed to assist customers
            seeking business loans. Lina offers:
          </p>
          <ul>
            <li>Unique loan product suggestions with AI ratings.</li>
            <li>24/7 customer support with significant cost savings.</li>
            <li>Personalized query resolution for efficiency.</li>
          </ul>
        </div>
        <div className="card">
          <h3>Loan Document Collection AI</h3>
          <p>
            Automates pre-qualification checks, online applications, and KYB
            checks, saving approximately 20 hours of manual work per week.
          </p>
        </div>
        <div className="card">
          <h3>SamurAI</h3>
          <p>
            An AI-driven ERP solution offering:
          </p>
          <ul>
            <li>AI-generated ratings for loan applications.</li>
            <li>Summarized loan applications for faster processing.</li>
            <li>360-degree customer insights and fraud detection.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Founder</h2>
        <p>
          Glokal AI was founded by Jeet Pattanaik, who identified significant
          gaps in ERP solutions after a decade of experience with SAP and other
          major tech platforms. He established Glokal AI to address challenges
          in the European financial sector, including an aging workforce and
          hiring difficulties.
        </p>
      </section>

      <section className="section">
        <h2>Contact Us</h2>
        <p>
          Address: 10965 Berlin, Germany <br />
          Email: <a href="mailto:jeet.pattanaik@glokalai.com">jeet.pattanaik@glokalai.com</a>
        </p>
      </section>
    </div>
  );
};

export default MyInfo;