import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const Portfolio = () => {
  const projects = [
    { id: 1, title: 'Projet 1', description: 'Description du projet 1.' },
    { id: 2, title: 'Projet 2', description: 'Description du projet 2.' },
    { id: 3, title: 'Projet 3', description: 'Description du projet 3.' },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <SectionTitle title="Portfolio" subtitle="Nos réalisations" />
      <div className="portfolio-grid">
        {projects.map((project) => (
          <Card key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
