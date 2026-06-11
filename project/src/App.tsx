import { Mail, Phone, Linkedin, Download, Code2, Briefcase, User, ChevronDown, Database, Terminal, CheckCircle2 } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-white/95 backdrop-blur-sm border-b border-blue-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Souhayb
            </h1>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition">À propos</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition">Compétences</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600 transition">Expériences & Projets</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-blue-600 transition">Formation</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-100 border border-green-400/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <CheckCircle2 size={16} className="text-green-400" />
                DISPONIBLE IMMÉDIATEMENT
              </div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-4">
                ABDOURAHIMI<br />
                <span className="text-blue-200">Souhayb</span>
              </h2>
              <p className="text-xl text-white font-medium mb-2">Étudiant en BUT Informatique</p>
              <p className="text-lg text-blue-200 mb-8">Développeur & Technicien</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a href="mailto:souhayb299@gmail.com" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">
                  <Mail size={18} /> Email
                </a>
                <a href="tel:+33745257878" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">
                  <Phone size={18} /> Téléphone
                </a>
                <a href="https://www.linkedin.com/in/souhayb-abdourahimi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href="/CV_Souhayb_professionnels_developpeur.pdf" download className="flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-600 font-semibold px-4 py-2 rounded-lg transition shadow-lg">
                  <Download size={18} /> Mon CV
                </a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-1">
                <div className="bg-blue-50 rounded-xl p-8 flex items-center justify-center h-96">
                  <User size={120} className="text-blue-600 opacity-30" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-blue-200" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-800"></div>
            <h3 className="text-3xl font-bold text-gray-900">À Propos de Moi</h3>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Étudiant en 1ère année de <span className="font-semibold text-blue-600">BUT Informatique à l'IUT de Nantes</span>, je suis passionné par le développement logiciel, les systèmes d'information et les nouvelles technologies.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Rigoureux, adaptable et motivé, je cherche à mettre mes compétences au service d'une entreprise dynamique. Je suis particulièrement intéressé par des missions en <span className="font-semibold text-blue-600">développement web/applicatif</span>, en <span className="font-semibold text-blue-600">maintenance informatique</span>, ou en <span className="font-semibold text-blue-600">gestion de données</span>.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Qualité</div>
              <p className="text-gray-600 font-medium">Analyse & Résolution</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Qualité</div>
              <p className="text-gray-600 font-medium">Réactivité</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Qualité</div>
              <p className="text-gray-600 font-medium">Adaptabilité</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Qualité</div>
              <p className="text-gray-600 font-medium">Travail en équipe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-800"></div>
            <h3 className="text-3xl font-bold text-gray-900">Compétences Techniques</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Langages */}
            <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-blue-600" size={24} />
                <h4 className="text-xl font-bold text-gray-900">Langages</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>HTML / CSS</li>
              </ul>
            </div>

            {/* Bases de Données */}
            <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-blue-600" size={24} />
                <h4 className="text-xl font-bold text-gray-900">Bases de Données</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>SQL / PostgreSQL</li>
                <li>NoSQL (MongoDB)</li>
                <li>Conception relationnelle</li>
                <li>Requêtes optimisées</li>
              </ul>
            </div>

            {/* Outils & Frameworks */}
            <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-blue-600" size={24} />
                <h4 className="text-xl font-bold text-gray-900">Frameworks</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>React.js / Node.js</li>
                <li>Flask / Django</li>
                <li>VS Code / IntelliJ</li>
                <li>Postman / Figma (UI/UX)</li>
              </ul>
            </div>

            {/* Systèmes & Déploiement */}
            <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="text-blue-600" size={24} />
                <h4 className="text-xl font-bold text-gray-900">Systèmes & Outils</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Linux / Bash</li>
                <li>Windows / Ubuntu</li>
                <li>Git / GitHub</li>
                <li>Docker (initiation)</li>
              </ul>
            </div>

            {/* Langues */}
            <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <User className="text-blue-600" size={24} />
                <h4 className="text-xl font-bold text-gray-900">Langues</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Français (Natif)</li>
                <li>Anglais (B2)</li>
                <li>Espagnol (B1)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Projects Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-800"></div>
            <h3 className="text-3xl font-bold text-gray-900">Expériences & Projets</h3>
          </div>

          <div className="space-y-8">
            {/* Projet Web BUT */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 hover:shadow-md transition relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-xl text-sm font-semibold">
                2025 – 2026
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-1">Développeur Web – Projet Scolaire</h4>
              <p className="text-blue-600 font-semibold mb-4">IUT de Nantes | BUT Info</p>
              <ul className="space-y-2 text-gray-700 mb-6 ml-2">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Conception et développement d'une application web full-stack (HTML, CSS, JS, Python/Flask).</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Création d'une base de données relationnelle PostgreSQL avec requêtes optimisées.</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Travail en équipe Agile avec gestion de version Git/GitHub.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Flask', 'PostgreSQL', 'HTML/CSS/JS', 'Agile/Git'].map((tag, i) => (
                  <span key={i} className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            {/* Projet NSI */}
            <div className="bg-white rounded-xl p-8 border border-blue-200 shadow-sm hover:shadow-md transition relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-xl text-sm font-semibold">
                2024 – 2025
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-1">Application de gestion – Projet NSI</h4>
              <p className="text-blue-600 font-semibold mb-4">Lycée Le Verger Ste-Marie | Spécialité NSI</p>
              <ul className="space-y-2 text-gray-700 mb-6 ml-2">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Développement d'un programme Python pour la gestion et l'analyse de données CSV.</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Implémentation d'algorithmes de tri et de recherche, interface console interactive.</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Rédaction d'une documentation technique et présentation orale du projet.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Algorithmique', 'Analyse CSV', 'Documentation'].map((tag, i) => (
                  <span key={i} className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full font-medium">{tag}</span>
                ))}
              </div>
            </div>

            {/* Dépannage */}
            <div className="bg-white rounded-xl p-8 border border-blue-200 shadow-sm hover:shadow-md transition relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-xl text-sm font-semibold">
                2024 – Présent
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-1">Aide Informatique (Dépannage & Assistance)</h4>
              <p className="text-blue-600 font-semibold mb-4">Entourage familial & Bénévolat</p>
              <ul className="space-y-2 text-gray-700 mb-6 ml-2">
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Installation et configuration de systèmes d'exploitation (Windows, Ubuntu).</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Résolution d'incidents matériels et logiciels, maintenance préventive.</li>
                <li className="flex items-start"><span className="text-blue-600 mr-2">•</span> Sensibilisation à la cybersécurité et aux bonnes pratiques numériques.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {['Maintenance', 'Windows/Linux', 'Support Tech', 'Cybersécurité'].map((tag, i) => (
                  <span key={i} className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-800"></div>
            <h3 className="text-3xl font-bold text-gray-900">Formation & Diplômes</h3>
          </div>

          <div className="space-y-6">
            {[
              {
                degree: "BUT Informatique – Parcours Développement",
                school: "IUT de Nantes (Université de Nantes)",
                period: "2025 – 2028",
                details: [
                  "Développement logiciel, bases de données, réseaux, algorithmes, génie logiciel.",
                  "Projets tuteurés en équipe, méthodes Agile/Scrum, communication professionnelle."
                ]
              },
              {
                degree: "Baccalauréat Général",
                school: "Lycée Le Verger Sainte-Marie, Nantes",
                period: "2024 – 2025",
                details: [
                  "Spécialités : Mathématiques & NSI (Numérique et Sciences Informatiques).",
                  "Projets : développement web, algorithmique, modélisation de bases de données."
                ]
              }
            ].map((edu, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-blue-200 shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-blue-600 font-semibold mt-1">{edu.school}</p>
                  </div>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap ml-4">{edu.period}</span>
                </div>
                <ul className="space-y-2 ml-4">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-gray-700 flex items-start">
                      <span className="text-blue-600 font-bold mr-3">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-800"></div>
            <h3 className="text-3xl font-bold text-gray-900">Centres d'Intérêt</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⚽", title: "Football", description: "Pratique régulière et passion pour ce sport" },
              { icon: "🔭", title: "Veille technologique", description: "Suivi constant de l'actualité IT" },
              { icon: "🎮", title: "Jeux Vidéo", description: "Intérêt particulier pour le game dev" },
              { icon: "📚", title: "Lecture tech & IA", description: "Curiosité pour l'intelligence artificielle" }
            ].map((interest, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 text-center">
                <div className="text-5xl mb-4">{interest.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{interest.title}</h4>
                <p className="text-gray-700 text-sm">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Me Contacter</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a href="mailto:souhayb299@gmail.com" className="bg-white/10 hover:bg-white/20 rounded-xl p-6 transition backdrop-blur-sm">
              <Mail className="mx-auto mb-4" size={32} />
              <p className="font-semibold mb-2">Email</p>
              <p className="text-blue-100">souhayb299@gmail.com</p>
            </a>

            <a href="tel:+33745257878" className="bg-white/10 hover:bg-white/20 rounded-xl p-6 transition backdrop-blur-sm">
              <Phone className="mx-auto mb-4" size={32} />
              <p className="font-semibold mb-2">Téléphone</p>
              <p className="text-blue-100">07 45 25 78 78</p>
            </a>

            <a href="https://www.linkedin.com/in/souhayb-abdourahimi" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 rounded-xl p-6 transition backdrop-blur-sm">
              <Linkedin className="mx-auto mb-4" size={32} />
              <p className="font-semibold mb-2">LinkedIn</p>
              <p className="text-blue-100">Souhayb Abdourahimi</p>
            </a>
          </div>

          <p className="text-blue-200 mb-8">Localisation : Nantes (44), France</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-100 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2 font-bold">ABDOURAHIMI Souhayb</p>
          <p className="text-blue-300 text-sm">
            souhayb299@gmail.com • +33 7 45 25 78 78 • Nantes
          </p>
          <p className="text-blue-300 text-xs mt-4 opacity-75">
            © {new Date().getFullYear()} Souhayb Abdourahimi. Portfolio personnel. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
