

import { Button } from "./ui/button";
import { Download } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"
      id="home"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Hi, I'm Busi Manzini
            </h1>
            <p className="text-lg text-gray-600">
               Honours Student in Mathematics passionate about Computational Mathematics, Quantitative Analysis, and Data Science.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </Button>

              <Button
                onClick={() => scrollToSection("projects")}
                variant="outline"
                className="border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                View Projects
              </Button>

              <a
                href="/uploads/Busi's CV(2025)[1].pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition shadow"
              >
                <Download className="w-4 h-4" />
                View CV
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/uploads/profilePicture.jpeg"
              alt="Busi Manzini"
              className="rounded-2xl shadow-2xl w-full max-w-[400px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;