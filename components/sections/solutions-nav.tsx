import styles from "./solutions-nav.module.css";

const SOLUTIONS = [
  { title: "Bank & finance", description: "Secure, high-contrast displays for trading floors and retail banking." },
  { title: "Education", description: "Interactive and large-scale screens for modern campuses and auditoriums." },
  { title: "Energy", description: "Reliable control room monitors for 24/7 critical infrastructure monitoring." },
  { title: "Healthcare", description: "Medical-grade clarity for diagnostics, wayfinding, and patient rooms." },
  { title: "Retail", description: "Vibrant storefront displays and digital signage to drive foot traffic." },
  { title: "Real Estate", description: "Immersive video walls and transparent screens for property showrooms." },
  { title: "Manufacturing", description: "Rugged LED systems for factory floors and production tracking." },
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
          <div key={solution.title} className={styles.card}>
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
