"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./ProcessFlowBar.module.css";

const steps = [
  "Choose Preferred Location & Plan",
  "Make Payment",
  "KYC Documentation",
  "Office Ready to Use",
];

export default function StepProgressBar() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.heading}>
          <div className={styles.round}></div>
          Your
          <strong>Virtual Office</strong>
          in 4 easy steps
        </div>
        {/* Progress Bar */}
        <div className={styles.progressBar}>
          <motion.div
            className={styles.progress}
            initial={{ width: "0%" }}
            animate={{ width: `${(step / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        {/* Step Indicators */}
        <div className={styles.stepContainer}>
          {steps.map((text, index) => (
            <div key={index} className={styles.step}>
              <div
                className={`${styles.stepCircle} ${
                  index <= step ? styles.activeStep : styles.inactiveStep
                }`}
              >
                {index + 1}
              </div>
              <p className={styles.stepLabel}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
