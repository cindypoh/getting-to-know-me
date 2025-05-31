"use client";

import React, { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, Phone, MapPin, Code, Brain, Zap, ChevronDown, ExternalLink, Star, GitFork, Calendar, Award, Briefcase, GraduationCap, User, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      name: "AI Code Assistant",
      description: "Advanced AI-powered code completion and debugging tool with multi-language support",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      stars: 1247,
      forks: 89,
      github: "https://github.com/username/ai-code-assistant",
      demo: "https://ai-code-demo.vercel.app"
    },
    {
      name: "Neural Network Visualizer",
      description: "Interactive web application for visualizing and understanding neural network architectures",
      tech: ["JavaScript", "D3.js", "PyTorch", "WebGL"],
      stars: 856,
      forks: 124,
      github: "https://github.com/username/neural-viz",
      demo: "https://neural-viz.github.io"
    },
    {
      name: "AutoML Pipeline",
      description: "Automated machine learning pipeline with hyperparameter optimization and model selection",
      tech: ["Python", "Scikit-learn", "Docker", "Kubernetes"],
      stars: 2103,
      forks: 342,
      github: "https://github.com/username/automl-pipeline",
      demo: "https://automl-demo.herokuapp.com"
    }
  ];

  const skills = [
    { category: "AI/ML", items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Hugging Face", "LangChain"] },
    { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "Go", "Rust", "C++"] },
    { category: "Frontend", items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "WebGL", "D3.js"] },
    { category: "Backend", items: ["Node.js", "FastAPI", "Django", "PostgreSQL", "MongoDB", "Redis"] },
    { category: "Cloud/DevOps", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
    { category: "Tools", items: ["Git", "Jupyter", "VS Code", "Figma", "Postman", "MLflow"] }
  ];

  const experiences = [
    {
      title: "Senior AI Software Engineer",
      company: "TechFlow AI",
      duration: "2023 - Present",
      description: "Leading development of AI-powered software solutions, implementing LLM integrations, and optimizing ML pipelines for production environments."
    },
    {
      title: "Machine Learning Engineer",
      company: "DataStream Corp",
      duration: "2021 - 2023",
      description: "Developed and deployed ML models for real-time data processing, achieving 40% improvement in prediction accuracy."
    },
    {
      title: "Full Stack Developer",
      company: "InnovateTech",
      duration: "2019 - 2021",
      description: "Built scalable web applications using React and Node.js, collaborating with cross-functional teams to deliver high-quality software."
    }
  ];

  const downloadResume = (format: string) => {
    // In a real implementation, you would have actual resume files
    const link = document.createElement('a');
    link.href = format === 'pdf' ? '/resume.pdf' : '/resume.docx';
    link.download = `Cindy_Lai_Poh_Yuan_Resume.${format}`;
    link.click();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Cindy Lai Poh Yuan
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-cyan-400 transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Brain className="w-16 h-16 text-cyan-400" />
              </div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            AI Software Engineer
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting intelligent solutions that bridge the gap between artificial intelligence and human needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => downloadResume('pdf')}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <Download className="w-5 h-5" />
              Download Resume (PDF)
            </button>
            <button
              onClick={() => downloadResume('docx')}
              className="flex items-center gap-2 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download Resume (Word)
            </button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/cindypoh" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-110">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/username" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-110">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:yuanplc31@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-110">
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate AI Software Engineer with 5+ years of experience building intelligent systems that solve real-world problems. My expertise spans machine learning, deep learning, and full-stack development.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I specialize in creating AI-powered applications that are not just technically sound, but also user-friendly and scalable. From NLP chatbots to computer vision systems, I love turning complex AI concepts into practical solutions.
              </p>
              <div className="flex items-center gap-4 text-slate-400">
                <MapPin className="w-5 h-5" />
                <span>Penang, Malaysia</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                <Code className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-semibold mb-2">Clean Code</h3>
                <p className="text-sm text-slate-400">Writing maintainable, scalable code that stands the test of time</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-400/50 transition-all duration-300">
                <Brain className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="font-semibold mb-2">AI Innovation</h3>
                <p className="text-sm text-slate-400">Pushing boundaries with cutting-edge AI and ML technologies</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-pink-400/50 transition-all duration-300">
                <Zap className="w-8 h-8 text-pink-400 mb-4" />
                <h3 className="font-semibold mb-2">Performance</h3>
                <p className="text-sm text-slate-400">Optimizing systems for maximum efficiency and speed</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                <Sparkles className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="font-semibold mb-2">User Experience</h3>
                <p className="text-sm text-slate-400">Creating intuitive interfaces that users love</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-slate-300">{skill}</span>
                      <div className="w-20 bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full" style={{width: `${85 + Math.random() * 15}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-cyan-400 group-hover:text-cyan-300">{project.name}</h3>
                  <div className="flex gap-2">
                    <a href={project.github} className="text-slate-400 hover:text-cyan-400 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demo} className="text-slate-400 hover:text-cyan-400 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-cyan-400 border border-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-slate-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-1">{exp.title}</h3>
                    <p className="text-lg text-purple-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your AI ideas to life? I'm always excited to discuss new opportunities and innovative projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a href="mailto:yuanplc31@gmail.com" className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              <Phone className="w-5 h-5" />
              Call Me
            </a>
          </div>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/username" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-125">
              <Github className="w-10 h-10" />
            </a>
            <a href="https://linkedin.com/in/username" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-125">
              <Linkedin className="w-10 h-10" />
            </a>
            <a href="mailto:yuanplc31@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-125">
              <Mail className="w-10 h-10" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Cindy Lai Poh Yuan. Built with React & Next.js. Deployed on GitHub Pages.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;