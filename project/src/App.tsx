import { Mail, Phone, Linkedin, Download, Code2, Briefcase, BookOpen, User, ChevronDown } from 'lucide-react';

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
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition">Projets</button>
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
              <h2 className="text-5xl sm:text-6xl font-bold mb-4">
                ABDOURAHIMI<br />
                <span className="text-blue-200">Souhayb</span>
              </h2>
              <p className="text-lg text-blue-100 mb-2">Étudiant en BUT Informatique</p>
              <p className="text-base text-blue-200 mb-8">Candidat parcours DACS – Cybersécurité & Réseaux</p>

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
                <a href="/CV_Souhayb_professionnel_cybersecurite.pdf" download className="flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-600 font-semibold px-4 py-2 rounded-lg transition">
                  <Download size={18} /> CV
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
              Étudiant en 1ère année de BUT Informatique à l'IUT de Nantes, je souhaite me spécialiser dans la <span className="font-semibold text-blue-600">cybersécurité</span> et le <span className="font-semibold text-blue-600">déploiement des systèmes d'information</span>.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Rigoureux, curieux et motivé, je cherche à intégrer le parcours <span className="font-semibold text-blue-600">DACS</span> afin de développer des compétences solides en <span className="font-semibold">administration des réseaux, sécurisation des infrastructures et gestion des cybermenaces</span>.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Mon objectif est de poursuivre en <span className="font-semibold text-blue-600">master cybersécurité</span> pour acquérir une expertise reconnue dans ce domaine en constante évolution.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">19</div>
              <p className="text-gray-600">Ans</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <p className="text-gray-600">Années d'études</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-gray-600">Projets</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <p className="text-gray-600">Langues</p>
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
            {/* Développement */}
            <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-blue-600" size={24} />
                <h4 className="text-xl font-bold text-gray-900">Développement</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Kotlin, Java, Python</li>
                <li>JavaScript, HTML/CSS</li>
                <li>React.js, Node.js</li>
                <li>Flask, Django</li>
              </ul>
            </div>

            {/* Bases de Données */}
            <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-blue-600" size={24} />
                <h4 className="text-xl font-bold text-gray-900">Bases de Données</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Oracle SQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB (NoSQL)</li>
                <li>Requêtes optimisées</li>
              </ul>
            </div>

            {/* Systèmes & Réseaux */}
            <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-blue-600" size={24} />
                <h4 className="text-xl font-bold text-gray-900">Systèmes & Réseaux</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Linux, Bash</li>
                <li>SSH, Git/GitHub</li>
                <li>Configuration réseau</li>
                <li>Protocoles ARP/ICMP</li>
              </ul>
            </div>

            {/* Outils & Frameworks */}
            <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-blue-600" size={24} />
                <h4 className="text-xl font-bold text-gray-900">Outils</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Git, GitHub, GitLab</li>
                <li>IntelliJ, VS Code</li>
                <li>Docker (initiation)</li>
                <li>Figma (UI/UX)</li>
              </ul>
            </div>

            {/* Méthodologies */}
            <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-blue-600" size={24} />
                <h4 className="text-xl font-bold text-gray-900">Méthodologies</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Agile/Scrum</li>
                <li>Kanban</li>
                <li>UML</li>
                <li>PERT/Gantt</li>
              </ul>
            </div>

            {/* Langues */}
            <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="text-blue-600" size={24} />
                <h4 className="text-xl font-bold text-gray-900">Langues</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Français (natif)</li>
                <li>Anglais (B2)</li>
                <li>Espagnol (B1)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-blue-800"></div>
            <h3 className="text-3xl font-bold text-gray-900">Projets Réalisés</h3>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Implémentation d'un Besoin Client",
                description: "Application complète développée en équipe, suivant les méthodologies Agile et les bonnes pratiques de développement.",
                tags: ["Kotlin/Java", "Agile", "Travail d'équipe"]
              },
              {
                title: "Comparaison d'Algorithmes",
                description: "Analyse détaillée de la complexité et performance de différents algorithmes de tri et recherche en Python.",
                tags: ["Python", "Algorithmes", "Analyse"]
              },
              {
                title: "Configuration Linux",
                description: "Installation et configuration complète d'un poste de développement sous Linux avec tous les outils nécessaires.",
                tags: ["Linux", "Bash", "Systèmes"]
              },
              {
                title: "Base de Données Relationnelle",
                description: "Création d'une base de données Oracle SQL pour la gestion de données complexes avec requêtes optimisées.",
                tags: ["Oracle SQL", "Conception DB", "Requêtes"]
              },
              {
                title: "Analyse de Données - Bornes Électriques",
                description: "Normalisation, création de vues inter-comptes Oracle et analyse collaborative en équipe.",
                tags: ["SQL", "Analyse", "Collaboration"]
              },
              {
                title: "Graphes et Réseaux Sociaux",
                description: "Implémentation d'algorithmes avancés (Dijkstra) et calcul de métriques de centralité en Python sur GitLab.",
                tags: ["Python", "Graphes", "GitLab"]
              }
            ].map((project, idx) => (
              <div key={idx} className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 hover:shadow-md transition">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
                  "Développement logiciel, bases de données, réseaux, algorithmes",
                  "Projets tuteurés en équipe avec méthodologies Agile/Scrum",
                  "Communication professionnelle et génie logiciel"
                ]
              },
              {
                degree: "Baccalauréat Général",
                school: "Lycée Le Verger Sainte-Marie, Nantes",
                period: "2022 – 2025",
                details: [
                  "Spécialités : Mathématiques & NSI",
                  "Projets en développement web et algorithmique",
                  "Modélisation de bases de données"
                ]
              }
            ].map((edu, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-blue-200 shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">{edu.degree}</h4>
                    <p className="text-blue-600 font-semibold mt-1">{edu.school}</p>
                  </div>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">{edu.period}</span>
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
              { icon: "📚", title: "Manga/Anime", description: "Suivi régulier de différentes séries" },
              { icon: "🎮", title: "Jeux Vidéo", description: "Intérêt particulier pour le game dev" },
              { icon: "👥", title: "Réseaux Sociaux", description: "Veille technologique et tendances numériques" }
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
          <p className="text-blue-200 text-sm">Groupe TP 2.2 – BUT1 Informatique – IUT de Nantes</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-100 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-2">ABDOURAHIMI Souhayb</p>
          <p className="text-blue-300 text-sm">
            souhayb299@gmail.com • +33 7 45 25 78 78 • Nantes
          </p>
          <p className="text-blue-300 text-xs mt-4 opacity-75">
            © 2025 Souhayb Abdourahimi. Portfolio personnel. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
