import React from 'react';
import PictureAbout from '../../components/PictureAbout/PictureAbout';
import './About.css';

const About = () => {
  return (
    <>
      <div className='boxAbout'>
        <div className='aboutMe'>
          <PictureAbout />
          <div className='aboutMeBox'>
            <h2 className='titleAbout'>Claudiu Olaru – Ihr IT-Experte in Hamburg</h2>
            <p className='textAbout'>
              Mit über 6 Jahren Erfahrung im IT-Support biete ich professionelle und zuverlässige Lösungen für Ihre technischen Herausforderungen. Mein Fokus liegt auf 1st, 2nd 3nd Level Support, Netzwerkadministration und der Optimierung von IT-Prozessen. Ob vor Ort oder remote – ich sorge dafür, dass Ihre Systeme reibungslos laufen und Sie sich auf Ihr Kerngeschäft konzentrieren können.
            </p>
          </div>
        </div>
        <div className='skills'>
          <h2 id="skillsSection" className='titleAbout'>Meine Leistungen im Überblick</h2>
          <p className='textAbout'>
            <li>IT-Support & Fehlerbehebung: Schnelle Analyse und Lösung von Störungen, Benutzerverwaltung (Active Directory) und Installation von Hard- und Software.
            </li>
            <li>Netzwerkadministration: Konfiguration von Firewalls, VPNs, DHCP, DNS und Support für Switche sowie Router.
            </li>
            <li>Systemintegration: Unterstützung bei Rollouts, Upgrades und Migrationen, z. B. auf Windows 11.</li>
            <li>Mobile Device Management: Einrichtung und Verwaltung von mobilen Geräten (Intune) und Homeoffice-Lösungen.</li>
            <li>VIP-Support: Individuelle Betreuung und umfassender Support für Ihre wichtigsten Mitarbeiter.</li>
            <li>Hardwarereparaturen: Von der Diagnose bis zur Reparatur – ich kümmere mich um Laptops, PCs, Tablets und Drucker aller Marken. Auch Hardware-Upgrades und Aufrüstung gehören zu meinem Leistungsspektrum.</li>
            <li>Datenvernichtung: Sicheres Löschen von Daten gemäß geltender Datenschutzrichtlinien (DSGVO), um Ihre sensiblen Informationen vor unbefugtem Zugriff zu schützen.</li>
            <li>Hardwareentsorgung: Umweltgerechte Entsorgung von Altgeräten und defekten Komponenten, inklusive Recycling-Services, um wertvolle Ressourcen zu schonen.</li>
            <li>Firmenumzüge: Professioneller Abbau, sicherer Transport und präzise Neuinstallation Ihrer IT-Hardware, damit Ihr Betrieb ohne Unterbrechung weiterlaufen kann.</li>
          </p>
        </div>
        <div className='skillstwo'>
          <h2 className='titleAbout'>Technische Expertise</h2>
          <p className='textAbout'>
            <li>Betriebssysteme: Windows 7–11, Windows Server 2016/19, macOS
            </li>
            <li>Netzwerk: Cisco, Juniper, IP-Telefonie (Avaya)
            </li>
            <li>Tools: MS Office 365, SharePoint, Service Now, HP Service Desk</li>
            <li>Datenbanken & Programmierung: SQL, MySQL, PHP, HTML, CSS</li>
            <li>Sprachen: Deutsch, Englisch, Türkisch, Rumänisch</li>
          </p>
        </div>
      </div>
    </>
  )
}

export default About;