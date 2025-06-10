import { useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-700 mb-8">
              Feel free to reach out to me for collaboration, opportunities, or just to say hello.
              I'm always open to discussing new projects, creative ideas, or internships.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-primary" />
                <span className="text-gray-700">061 153 1206</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="text-primary" />
                <span className="text-gray-700">buciemanzini9@gmail.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <Github className="text-primary" />
                <a
                  href="https://github.com/BucieM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  github.com/BucieM
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Linkedin className="text-primary" />
                <a
                  href="https://www.linkedin.com/in/busi-manzini-09546724b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Busi Manzini
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
