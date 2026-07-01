import styles from "./solutions-nav.module.css";

const SOLUTIONS = [
  { title: "Bank & finance", description: "Secure, high-contrast displays for trading floors and retail banking.", image: "/images/solutions/bank.png" },
  { title: "Education", description: "Interactive and large-scale screens for modern campuses and auditoriums.", image: "/images/solutions/education.png" },
  { title: "Stage", description: "Dynamic and seamless backdrops for live events and performances.", image: "/images/solutions/stage.png" },
  { title: "Healthcare", description: "Medical-grade clarity for diagnostics, wayfinding, and patient rooms.", image: "/images/solutions/healthcare.png" },
  { title: "Retail", description: "Vibrant storefront displays and digital signage to drive foot traffic.", image: "/images/solutions/retail-bar.jpg" },
  { title: "Real Estate", description: "Immersive video walls and transparent screens for property showrooms.", image: "/images/solutions/real-estate.png" },
  { title: "Conference", description: "High-resolution displays for seamless presentations and corporate meetings.", image: "/images/projects/conference.jpg" },
  { title: "Church", description: "Immersive visual experiences to elevate worship services and congregation engagement.", image: "/images/solutions/church.png" },
];

export function SolutionsNav() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.tabsContainer}>
          <div className={styles.activeTab}>Enterprise solutions</div>
        </div>
      </div>

      <div className={styles.grid}>
        {SOLUTIONS.map((solution) => (
          <div 
            key={solution.title} 
            className={styles.card}
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0) 100%), url(${solution.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className={styles.cardContent}>
              <div className={styles.textContainer}>
                <h3 className={styles.title}>{solution.title}</h3>
                <p className={styles.description}>{solution.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
