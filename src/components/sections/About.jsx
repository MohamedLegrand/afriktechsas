import SectionTitle from '../ui/SectionTitle';

const About = () => {
  return (
    <section id="about" className="about">
      <SectionTitle title="À Propos" subtitle="Qui sommes-nous ?" />
      <div className="about-content">
        <p>
          AfrikTechSas est une entreprise technologique dédiée au développement de solutions
          digitales innovantes pour le marché africain et international.
        </p>
      </div>
    </section>
  );
};

export default About;
