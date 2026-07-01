"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import styles from "./solutions-nav.module.css";

const SOLUTIONS = [
  { title: "Bank & finance", description: "Secure, high-contrast displays for trading floors and retail banking.", image: "/images/solutions/bank.jpg" },
  { title: "Education", description: "Interactive and large-scale screens for modern campuses and auditoriums.", image: "/images/solutions/education.jpg" },
  { title: "Stage", description: "Dynamic and seamless backdrops for live events and performances.", image: "/images/solutions/stage.jpg" },
  { title: "Healthcare", description: "Medical-grade clarity for diagnostics, wayfinding, and patient rooms.", image: "/images/solutions/healthcare.jpg" },
  { title: "Retail", description: "Vibrant storefront displays and digital signage to drive foot traffic.", image: "/images/solutions/retail-bar.jpg" },
  { title: "Real Estate", description: "Immersive video walls and transparent screens for property showrooms.", image: "/images/solutions/real-estate.jpg" },
  { title: "Conference", description: "High-resolution displays for seamless presentations and corporate meetings.", image: "/images/projects/conference.jpg" },
  { title: "Church", description: "Immersive visual experiences to elevate worship services and congregation engagement.", image: "/images/solutions/church.jpg" },
];

export function SolutionsNav() {
  const [selectedSolution, setSelectedSolution] = useState<typeof SOLUTIONS[0] | null>(null);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.tabsContainer}>
          <div className={styles.activeTab}>Enterprise solutions</div>
        </div>
      </div>

      <div className={styles.grid}>
        {SOLUTIONS.map((solution, index) => (
          <div 
            key={solution.title} 
            className={styles.card}
            onClick={() => setSelectedSolution(solution)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedSolution(solution);
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={solution.image}
              alt={solution.title}
              fill
              className={styles.cardImage}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              priority={index < 4}
            />
            <div className={styles.cardOverlay} />
            <div className={styles.cardContent}>
              <div className={styles.textContainer}>
                <h3 className={styles.title}>{solution.title}</h3>
                <p className={styles.description}>{solution.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedSolution && (
        <div className={styles.modalOverlay} onClick={() => setSelectedSolution(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton} 
              onClick={() => setSelectedSolution(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <div className={styles.modalImageContainer}>
              <Image
                src={selectedSolution.image}
                alt={selectedSolution.title}
                fill
                className={styles.modalImage}
                sizes="(max-width: 1024px) 95vw, 80vw"
                priority
              />
            </div>
            <div className={styles.modalTextContainer}>
              <h3 className={styles.modalTitle}>{selectedSolution.title}</h3>
              <p className={styles.modalDescription}>{selectedSolution.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
