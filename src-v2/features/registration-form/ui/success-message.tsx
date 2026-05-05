import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { fadeInUp, staggerChildren } from "@/shared/lib/motion";
import { Button, EnsoCircle } from "@/shared/ui";

interface SuccessMessageProps {
  onReset: () => void;
}

export function SuccessMessage({ onReset }: SuccessMessageProps) {
  const { t } = useTranslation();
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center gap-6 py-16 text-center"
    >
      <motion.div variants={fadeInUp}>
        <EnsoCircle size={80} stroke={1.5} variant="brushed" color="var(--color-shu-seal)" />
      </motion.div>
      <motion.h2
        variants={fadeInUp}
        className="font-display text-[length:var(--text-display-md)] text-text-primary"
      >
        {t("registration.form.success.headline")}
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        className="max-w-sm text-[length:var(--text-body-lg)] text-text-secondary"
      >
        {t("registration.form.success.body")}
      </motion.p>
      <motion.div variants={fadeInUp}>
        <Button variant="secondary" onClick={onReset}>
          {t("registration.form.success.again")}
        </Button>
      </motion.div>
    </motion.div>
  );
}
