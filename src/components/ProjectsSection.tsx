const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-8">
          
          {/* Project 1: Health Assistant */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src="/uploads/screenshot-health.png"
              alt="Health Assistant Project"
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">InnovativeHealth UniHackers Team</h3>
                <p className="text-gray-600">July 2024</p>
              </div>
              <h4 className="text-lg font-medium mb-2">Standard Bank UniHack</h4>
              <p className="text-gray-700 mb-4">
                Liberty Life Building, Century City, Cape Town
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  Developed a health platform with AI-powered chatbot to improve access to care in underserved communities.
                </li>
                <li>
                  Features include symptom consultation, medication delivery, and appointment booking.
                </li>
              </ul>
            </div>
          </div>

          {/* Project 2: Loan Eligibility Prediction System */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <img
                src="/uploads/page1.png"
                alt="Loan Eligibility Dashboard Page 1"
                className="w-full h-auto object-cover"
              />
              <img
                src="/uploads/page2.png"
                alt="Loan Eligibility Dashboard Page 2"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">Loan Eligibility Prediction System</h3>
                <p className="text-gray-600">May 2025</p>
              </div>
              <h4 className="text-lg font-medium mb-2">Streamlit ML Dashboard</h4>
              <p className="text-gray-700 mb-4">
                Predicts loan approval using logistic regression and an interactive UI.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  Built with Streamlit — supports both CSV upload and single user predictions.
                </li>
                <li>
                  Shows prediction confidence, model metrics, and visual data insights.
                </li>
                <li>
                  Utilizes logistic regression for binary classification of loan eligibility.
                </li>
              </ul>
              <a
                href="https://github.com/BusiManzini/Loan-Eligibility-System"
                target="_blank"
                className="inline-block mt-4 text-primary font-semibold hover:underline"
              >
                🔗 View on GitHub
              </a>
              <a
                href="https://busimanzini-loan-eligibility-system-app.streamlit.app/"
                target="_blank"
                className="inline-block mt-4 text-primary font-semibold hover:underline"
              >
                🔗 View website
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
