const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-4xl mx-auto space-y-8">

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between mb-4">
              <h3 className="text-xl font-bold text-primary">BSc Honours in Mathematical Science</h3>
              <p className="text-gray-600">Feb 2025 – Present</p>
            </div>
            <h4 className="text-lg font-medium mb-2">University of the Western Cape</h4>
            <p className="text-gray-700">Cape Town, South Africa</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between mb-4">
              <h3 className="text-xl font-bold text-primary">BSc in Mathematics and Statistical Science</h3>
              <p className="text-gray-600">Feb 2021 – Nov 2024</p>
            </div>
            <h4 className="text-lg font-medium mb-2">University of the Western Cape</h4>
            <p className="text-gray-700">Cape Town, South Africa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
