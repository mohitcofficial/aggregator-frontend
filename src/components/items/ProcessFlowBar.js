"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./ProcessFlowBar.module.css";

import {
  MapPin,
  CreditCard,
  FileText,
  Buildings,
  ShieldCheck,
  ClockCountdown,
  Headset,
  Globe,
} from "@phosphor-icons/react";

const steps = [
  {
    title: "Choose Preferred Location & Plan",
    description:
      "Select your preferred business address and choose the plan that suits your business.",
    icon: MapPin,
  },
  {
    title: "Make Payment",
    description:
      "Complete your payment securely through our trusted payment gateway.",
    icon: CreditCard,
  },
  {
    title: "KYC & Documentation",
    description:
      "Upload your documents for quick verification by our support team.",
    icon: FileText,
  },
  {
    title: "Virtual Office Ready",
    description:
      "Your virtual office is activated and ready for GST & business use.",
    icon: Buildings,
  },
];

const features = [
  {
    title: "100% Compliant",
    text: "GST & MCA Accepted",
    icon: ShieldCheck,
  },
  {
    title: "PAN India",
    text: "150+ Prime Locations",
    icon: Globe,
  },
  {
    title: "Quick Setup",
    text: "Ready within 24 Hours",
    icon: ClockCountdown,
  },
  {
    title: "Expert Support",
    text: "Dedicated Relationship Manager",
    icon: Headset,
  },
];

export default function ProcessFlowBar() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.badge}>Simple. Fast. Reliable.</div>

      <h2 className={styles.heading}>
        Your <span>Virtual Office</span> in 4 Easy Steps
      </h2>

      <div className={styles.progressBar}>
        <motion.div
          className={styles.progress}
          animate={{
            width: `${(step / (steps.length - 1)) * 100}%`,
          }}
          transition={{
            duration: 0.8,
          }}
        />
      </div>

      <div className={styles.cards}>
        {steps.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className={`${styles.card} ${
                index <= step ? styles.activeCard : ""
              }`}
            >
              <div
                className={`${styles.stepNumber} ${
                  index <= step ? styles.activeNumber : ""
                }`}
              >
                {index + 1}
              </div>

              <div className={styles.iconWrapper}>
                <Icon size={48} weight="duotone" />
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className={styles.features}>
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className={styles.feature}>
              <Icon size={34} weight="duotone" />

              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
