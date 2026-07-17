import React, { useEffect, useState } from 'react';
import './index.css';
import yellowCamera from './assets/yellow_camera.jpg';
import bwCamera from './assets/bw_camera.jpg';
import networkingImg from './assets/networking.jpg';
import gameTechImg from './assets/game_tech.jpg';
import manufacturingImg from './assets/manufacturing.jpg';
import yellowLeaf from './assets/yellow_leaf.jpg';
import profilePhoto from './assets/profile_photo.jpg';
import webDevImg from './assets/web_dev_coding.jpg';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const expertiseDetails = {
    game: {
      title: "Game Technology",
      image: gameTechImg,
      description: "Berfokus pada pengembangan perangkat lunak interaktif dan teknologi game. Memiliki pemahaman kuat tentang logika pemrograman dan struktur data.",
      skills: ["C# / C++", "Unity / Game Engine", "Logic & Problem Solving", "3D/2D Pipeline"]
    },
    network: {
      title: "PT Amber Karya",
      image: networkingImg,
      description: "Pengalaman praktis di industri sebagai Operator Trainee Produksi. Menjunjung tinggi tingkat ketelitian dan kualitas hasil sesuai standar.",
      skills: ["Termination Crimping", "Assembly Kabel & Connector", "Quality Control Dasar", "Kerja Tim & Target Harian"]
    },
    manufacture: {
      title: "Web Development",
      image: webDevImg,
      description: "Berpengalaman dalam merancang dan membangun website modern, responsif, dan interaktif dengan estetika tinggi (seperti yang Anda lihat saat ini). Ahli dalam Front-End Development.",
      skills: ["React.js & JavaScript", "HTML5 & Modern CSS", "UI/UX & Interactive Design", "Responsive Layouts"]
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="vertical-page">
      {/* HEADER */}
      <header className={`header ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo cursor-pointer" onClick={() => scrollTo('home')}>
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="black"/>
              <path d="M22 0H28L25 20H19L22 0Z" fill="black"/>
              <path d="M34 0H40L37 20H31L34 0Z" fill="black"/>
            </svg>
          </div>
          <nav className="nav-links">
            <button onClick={() => scrollTo('home')}>Home</button>
            <button onClick={() => scrollTo('about')}>Sneak Peek</button>
            <button onClick={() => scrollTo('skills')}>Skills</button>
            <button onClick={() => scrollTo('experience')}>Experience</button>
            <button onClick={() => scrollTo('footer')}>Contact</button>
          </nav>
          <div className="location-info" onClick={() => setIsProfileOpen(!isProfileOpen)} style={{ cursor: 'pointer', position: 'relative' }}>
            <span className="dot"></span>
            Politeknik Negeri Batam
            <div className="avatar-small" style={{ backgroundImage: `url(${profilePhoto})` }}></div>
            
            {/* PROFILE DROPDOWN CARD */}
            {isProfileOpen && (
              <div className="profile-dropdown-card" onClick={(e) => e.stopPropagation()}>
                <div className="profile-card-image" style={{ backgroundImage: `url(${profilePhoto})` }}></div>
                <div className="profile-card-content">
                  <div className="profile-name-row">
                    <h3>reyy</h3>
                    <svg className="verified-badge" viewBox="0 0 24 24" fill="#00FBFF" width="18" height="18"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"/></svg>
                  </div>
                  <p className="profile-bio">
                    A Frontend Developer focused on building beautiful & intuitive user experiences.
                  </p>
                  <div className="profile-stats">
                    <div className="stat">
                      <span style={{ fontWeight: '700', color: 'white' }}>128</span>
                      <span style={{ fontSize: '12px' }}>Pengikut</span>
                    </div>
                    <div className="stat">
                      <span style={{ fontWeight: '700', color: 'white' }}>108</span>
                      <span style={{ fontSize: '12px' }}>Diikuti</span>
                    </div>
                    <button className="profile-follow-btn" onClick={() => window.open('https://www.instagram.com/rezaa_.06', '_blank')}>
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-left">
          <h1 className="hero-title">
            Reihan<br/>Fahreza
          </h1>
          
          <div className="hero-description-container">
            <p className="hero-description">
              Mahasiswa D4 Informatika peminatan Game Technology. Memiliki latar belakang Teknik Komputer & Jaringan, serta pengalaman di bidang manufaktur elektronik. Disiplin, teliti, & cepat beradaptasi.
            </p>
          </div>
          
          <div className="hero-bottom-row">
            <div className="social-links">
              <a href="https://www.linkedin.com/in/mreihanfahreza" target="_blank" rel="noreferrer" className="social-circle">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:reihanfahreza012@gmail.com" className="social-circle">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12.713l11.985-8.713h-23.97l11.985 8.713zm-12-7.518v13.805h24v-13.805l-12 8.726-12-8.726z"/>
                </svg>
              </a>
              <a href="https://wa.me/6282172795156" target="_blank" rel="noreferrer" className="social-circle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
            </div>
            
            <div className="edu-container">
              <div className="edu-item">
                <h3 className="edu-title">Politeknik Negeri Batam</h3>
                <p className="edu-desc">D4 Teknik Informatika (Game Tech)<br/>2025 — Sekarang</p>
              </div>
              <div className="edu-item">
                <h3 className="edu-title">SMK Negeri 7 Batam</h3>
                <p className="edu-desc">Teknik Komputer & Jaringan<br/>2022 — 2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          {/* ORGANIC SHAPED CONTAINER */}
          <div className="dark-blob-card interactive-card">
            <img src={yellowCamera} alt="Creative professional" className="main-image" />
            <div className="signature">Informatics</div>
            
            <div className="floating-globe">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
          </div>
          
          <div className="side-elements-vertical">
            <div className="side-circle img-circle hover-scale cursor-pointer" style={{ backgroundImage: `url(${gameTechImg})` }} onClick={() => setActiveModal('game')}></div>
            <div className="side-circle img-circle hover-scale cursor-pointer" style={{ backgroundImage: `url(${networkingImg})` }} onClick={() => setActiveModal('network')}></div>
            <div className="side-circle arrow-circle hover-scale cursor-pointer" onClick={() => scrollTo('skills')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE ABOUT */}
      <div className="marquee-container about-marquee">
        <div className="marquee">
          <span>informatics . game tech . networking . hardware . &nbsp;</span>
          <span>informatics . game tech . networking . hardware . &nbsp;</span>
        </div>
      </div>

      {/* DARK ABOUT SECTION */}
      <section id="about" className="dark-section">
        <div className="crosshair top-left">
           <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="10" stroke="white" strokeWidth="1"/><line x1="20" y1="0" x2="20" y2="40" stroke="white" strokeWidth="1"/><line x1="0" y1="20" x2="40" y2="20" stroke="white" strokeWidth="1"/></svg>
        </div>
        <div className="crosshair top-right">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="10" stroke="white" strokeWidth="1"/><line x1="20" y1="0" x2="20" y2="40" stroke="white" strokeWidth="1"/><line x1="0" y1="20" x2="40" y2="20" stroke="white" strokeWidth="1"/></svg>
        </div>
        <div className="crosshair bottom-left">
           <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="10" stroke="white" strokeWidth="1"/><line x1="20" y1="0" x2="20" y2="40" stroke="white" strokeWidth="1"/><line x1="0" y1="20" x2="40" y2="20" stroke="white" strokeWidth="1"/></svg>
        </div>
        <div className="crosshair bottom-right">
           <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="10" stroke="white" strokeWidth="1"/><line x1="20" y1="0" x2="20" y2="40" stroke="white" strokeWidth="1"/><line x1="0" y1="20" x2="40" y2="20" stroke="white" strokeWidth="1"/></svg>
        </div>
        
        <div className="project-teaser-container">
          <h2 className="teaser-title">SNEAK PEEK</h2>
          
          <div className="teaser-marquee-wrapper">
            <div className="teaser-marquee">
              {/* GROUP 1 */}
              <div className="teaser-group">
                <div className="teaser-card" onClick={() => scrollTo('experience')}>
                  <div className="teaser-card-img" style={{ backgroundImage: `url(${bwCamera})` }}></div>
                  <div className="teaser-card-info">
                    <h4>TONTONANKU</h4>
                    <p>Anime Streaming Platform</p>
                  </div>
                </div>
                <div className="teaser-card" onClick={() => scrollTo('experience')}>
                  <div className="teaser-card-img" style={{ backgroundImage: `url(${gameTechImg})` }}></div>
                  <div className="teaser-card-info">
                    <h4>Jasa Joki</h4>
                    <p>Web Platform</p>
                  </div>
                </div>
                <div className="teaser-card" onClick={() => scrollTo('experience')}>
                  <div className="teaser-card-img" style={{ backgroundImage: `url(${networkingImg})` }}></div>
                  <div className="teaser-card-info">
                    <h4>Reihan Portofolio</h4>
                    <p>Portfolio Website</p>
                  </div>
                </div>
              </div>

              {/* GROUP 2 */}
              <div className="teaser-group">
                <div className="teaser-card" onClick={() => scrollTo('experience')}>
                  <div className="teaser-card-img" style={{ backgroundImage: `url(${bwCamera})` }}></div>
                  <div className="teaser-card-info">
                    <h4>TONTONANKU</h4>
                    <p>Anime Streaming Platform</p>
                  </div>
                </div>
                <div className="teaser-card" onClick={() => scrollTo('experience')}>
                  <div className="teaser-card-img" style={{ backgroundImage: `url(${gameTechImg})` }}></div>
                  <div className="teaser-card-info">
                    <h4>Jasa Joki</h4>
                    <p>Web Platform</p>
                  </div>
                </div>
                <div className="teaser-card" onClick={() => scrollTo('experience')}>
                  <div className="teaser-card-img" style={{ backgroundImage: `url(${networkingImg})` }}></div>
                  <div className="teaser-card-info">
                    <h4>Reihan Portofolio</h4>
                    <p>Portfolio Website</p>
                  </div>
                </div>
              </div>

              {/* GROUP 3 */}
              <div className="teaser-group">
                <div className="teaser-card" onClick={() => scrollTo('experience')}>
                  <div className="teaser-card-img" style={{ backgroundImage: `url(${bwCamera})` }}></div>
                  <div className="teaser-card-info">
                    <h4>TONTONANKU</h4>
                    <p>Anime Streaming Platform</p>
                  </div>
                </div>
                <div className="teaser-card" onClick={() => scrollTo('experience')}>
                  <div className="teaser-card-img" style={{ backgroundImage: `url(${gameTechImg})` }}></div>
                  <div className="teaser-card-info">
                    <h4>Jasa Joki</h4>
                    <p>Web Platform</p>
                  </div>
                </div>
                <div className="teaser-card" onClick={() => scrollTo('experience')}>
                  <div className="teaser-card-img" style={{ backgroundImage: `url(${networkingImg})` }}></div>
                  <div className="teaser-card-info">
                    <h4>Reihan Portofolio</h4>
                    <p>Portfolio Website</p>
                  </div>
                </div>
              </div>

              {/* GROUP 4 */}
              <div className="teaser-group">
                <div className="teaser-card" onClick={() => scrollTo('experience')}>
                  <div className="teaser-card-img" style={{ backgroundImage: `url(${bwCamera})` }}></div>
                  <div className="teaser-card-info">
                    <h4>TONTONANKU</h4>
                    <p>Anime Streaming Platform</p>
                  </div>
                </div>
                <div className="teaser-card" onClick={() => scrollTo('experience')}>
                  <div className="teaser-card-img" style={{ backgroundImage: `url(${gameTechImg})` }}></div>
                  <div className="teaser-card-info">
                    <h4>Jasa Joki</h4>
                    <p>Web Platform</p>
                  </div>
                </div>
                <div className="teaser-card" onClick={() => scrollTo('experience')}>
                  <div className="teaser-card-img" style={{ backgroundImage: `url(${networkingImg})` }}></div>
                  <div className="teaser-card-info">
                    <h4>Reihan Portofolio</h4>
                    <p>Portfolio Website</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION (OVERLAPPING TEXT) */}
      <section id="skills" className="portfolio-section">
        <h1 className="portfolio-overlay-text">expertise</h1>
        <div className="portfolio-grid-vertical">
          <div className="port-img-wrapper img-left interactive-card" onClick={() => setActiveModal('game')}>
            <img src={gameTechImg} alt="Game Technology" className="main-image" />
            <div className="hover-info">Game Tech</div>
          </div>
          <div className="port-img-wrapper img-center interactive-card" onClick={() => setActiveModal('network')}>
            <img src={networkingImg} alt="Networking" className="main-image" />
            <div className="hover-info">PT Amber Karya</div>
          </div>
          <div className="port-img-wrapper img-right interactive-card" onClick={() => setActiveModal('manufacture')}>
            <img src={webDevImg} alt="Web Development" className="main-image" />
            <div className="hover-info">Web Development</div>
          </div>
        </div>
      </section>

      {/* MARQUEE EXPERIENCE */}
      <div className="marquee-container exhibition-marquee">
        <div className="marquee">
          <span>experience . education . experience . education .</span>
        </div>
      </div>

      {/* EXPERIENCE LIST SECTION */}
      <section id="experience" className="exhibitions-section">
        <div className="exhibition-list-full">
          {/* Project Showcase */}
          <div className="exhibition-item-full border-none project-showcase">
            <div className="project-image" style={{ backgroundImage: `url(${bwCamera})` }}></div>
            <div className="project-details">
              <h3 className="project-title">TONTONANKU</h3>
              <p className="project-desc">Website katalog streaming Anime & Donghua dengan antarmuka UI/UX modern ala Netflix. Proyek ini dibangun menggunakan Native HTML, CSS, dan JavaScript.</p>
            </div>
            <button className="visit-web-btn" onClick={() => window.open('https://tontonanku.github.io/TONTONANKU/', '_blank')}>
              Live Demo <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer id="footer" className="footer-section">
        <div className="footer-top">
           <div className="logo cursor-pointer" onClick={() => scrollTo('home')}>
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="white"/>
              <path d="M22 0H28L25 20H19L22 0Z" fill="white"/>
              <path d="M34 0H40L37 20H31L34 0Z" fill="white"/>
            </svg>
          </div>

          <nav className="nav-links-footer">
            <button onClick={() => window.open('mailto:reihanfahreza012@gmail.com', '_blank')}>Email</button>
            <button onClick={() => window.open('https://wa.me/6282172795156', '_blank')}>WhatsApp</button>
            <button onClick={() => window.open('https://www.linkedin.com/in/mreihanfahreza', '_blank')}>LinkedIn</button>
          </nav>
        </div>
        <div className="footer-huge-text">
          reihan
        </div>
      </footer>

      {/* MODAL OVERLAY */}
      <div className={`expertise-modal-overlay ${activeModal ? 'open' : ''}`} onClick={() => setActiveModal(null)}>
        <div className="expertise-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-modal-btn" onClick={() => setActiveModal(null)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          {activeModal && (
            <div className="modal-split">
              <div className="modal-img-container">
                <img src={expertiseDetails[activeModal].image} alt={expertiseDetails[activeModal].title} />
              </div>
              <div className="modal-text-container">
                <h2 className="modal-title">{expertiseDetails[activeModal].title}</h2>
                <p className="modal-desc">{expertiseDetails[activeModal].description}</p>
                
                <h3 className="modal-subtitle">Core Skills</h3>
                <ul className="modal-skills-list">
                  {expertiseDetails[activeModal].skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
