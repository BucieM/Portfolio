const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-12">

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between mb-4">
              <h3 className="text-xl font-bold text-primary">Mathematics Tutor</h3>
              <p className="text-gray-600">Feb 2023 – Present</p>
            </div>
            <h4 className="text-lg font-medium mb-2">University of the Western Cape</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Conducted one-on-one sessions to improve mathematical understanding and exam preparation.</li>
              <li>Organized problem-solving workshops to develop critical thinking and analytical skills.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between mb-4">
              <h3 className="text-xl font-bold text-primary">Data Capturer</h3>
              <p className="text-gray-600">Mar 2023 – Sep 2023</p>
            </div>
            <h4 className="text-lg font-medium mb-2">UWC Physics Department</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Created and managed Excel spreadsheets for accurate research data entry.</li>
              <li>Captured and processed data efficiently across multiple projects under tight deadlines.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between mb-4">
              <h3 className="text-xl font-bold text-primary">Call Centre Agent</h3>
              <p className="text-gray-600">Jan 2021 – Mar 2021</p>
            </div>
            <h4 className="text-lg font-medium mb-2">Omnichannel Communications</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Delivered excellent customer support in a dynamic, high-pressure environment.</li>
              <li>Explained services clearly and effectively to diverse client groups.</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between mb-4">
              <h3 className="text-xl font-bold text-primary">Waitress</h3>
              <p className="text-gray-600">Aug 2019 – Nov 2019</p>
            </div>
            <h4 className="text-lg font-medium mb-2">Wason Chinese and Sushi Restaurant</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Assisted with order taking, food serving, and customer service during peak hours.</li>
              <li>Supported bar and floor staff with drink preparation and cleaning duties.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
