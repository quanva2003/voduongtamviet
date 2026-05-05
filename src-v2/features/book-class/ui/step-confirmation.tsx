import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { fadeInUp, staggerChildren } from "@/shared/lib/motion";
import { Button, Container, EnsoCircle } from "@/shared/ui";

import type { Booking } from "../model/types";

interface StepConfirmationProps {
  booking: Booking;
}

export function StepConfirmation({ booking }: StepConfirmationProps) {
  const { t } = useTranslation();
  return (
    <Container size="sm" className="py-16">
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center"
      >
        <motion.div variants={fadeInUp}>
          <EnsoCircle size={80} stroke={1.5} variant="brushed" color="var(--color-gold)" />
        </motion.div>
        <motion.h2
          variants={fadeInUp}
          className="mt-6 font-display text-[length:var(--text-display-md)] text-text-primary"
        >
          {t("booking.confirmation.headline")}
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-[length:var(--text-body-lg)] text-text-secondary"
        >
          {t("booking.confirmation.body")}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-8 rounded-[var(--radius-lg)] border border-border bg-sumi-paper px-8 py-6"
        >
          <p className="text-[length:var(--text-eyebrow)] tracking-[0.15em] text-text-muted uppercase">
            {t("booking.confirmation.idLabel")}
          </p>
          <p className="mt-2 font-mono text-[length:var(--text-h2)] tracking-widest text-shu-seal">
            {booking.id}
          </p>
          <p className="mt-2 text-[length:var(--text-body-sm)] text-text-muted">
            {t("booking.confirmation.saveId")}
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/booking?my=true">
            <Button variant="secondary">{t("booking.confirmation.myBookings")}</Button>
          </Link>
          <Link to="/">
            <Button variant="ghost">{t("booking.confirmation.home")}</Button>
          </Link>
        </motion.div>
      </motion.div>
    </Container>
  );
}
