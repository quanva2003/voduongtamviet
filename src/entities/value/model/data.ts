import type { Locale } from "@/shared/i18n";

import type { Value } from "./types";

export const values: Record<Locale, Value[]> = {
  vi: [
    {
      id: "tam",
      kanji: "心",
      title: "Tâm — Tinh thần",
      description:
        "Rèn luyện tâm trí, phát triển nhân cách và đạo đức. Karate không chỉ là võ thuật mà còn là con đường tu thân, giúp võ sinh trở thành người tốt đẹp hơn trong cuộc sống.",
    },
    {
      id: "than",
      kanji: "体",
      title: "Thân — Thể chất",
      description:
        "Xây dựng thể lực toàn diện thông qua luyện tập bài bản. Sức mạnh, sức bền, sự linh hoạt và phản xạ được phát triển đồng đều để tạo nên một võ sinh khỏe mạnh.",
    },
    {
      id: "thuat",
      kanji: "技",
      title: "Thuật — Kỹ thuật",
      description:
        "Nắm vững các kỹ thuật karate truyền thống từ kata đến kumite. Kỹ thuật thuần thục là kết quả của sự kiên trì và tập luyện đúng phương pháp dưới sự hướng dẫn của thầy.",
    },
  ],
  en: [
    {
      id: "tam",
      kanji: "心",
      title: "[EN] Shin — Spirit",
      description:
        "[EN] Cultivating the mind and developing character and ethics. Karate is not just a martial art — it is a path of self-improvement that makes practitioners better people.",
    },
    {
      id: "than",
      kanji: "体",
      title: "[EN] Tai — Body",
      description:
        "[EN] Building comprehensive physical fitness through systematic training. Strength, endurance, flexibility and reflexes are developed equally to create a well-rounded practitioner.",
    },
    {
      id: "thuat",
      kanji: "技",
      title: "[EN] Waza — Technique",
      description:
        "[EN] Mastering traditional karate techniques from kata to kumite. Technical mastery is the result of perseverance and correct training under a qualified instructor.",
    },
  ],
  ja: [
    {
      id: "tam",
      kanji: "心",
      title: "心 — 精神",
      description: "心を鍛え、人格と道徳を育てる。空手は武道であるだけでなく、自己修養の道である。",
    },
    {
      id: "than",
      kanji: "体",
      title: "体 — 身体",
      description:
        "体系的な稽古を通じて総合的な体力を培う。強さ・持久力・柔軟性・反射神経をバランスよく発達させる。",
    },
    {
      id: "thuat",
      kanji: "技",
      title: "技 — 技術",
      description:
        "形から組手まで、伝統的な空手の技術を習得する。技の熟達は、師の指導のもとでの粘り強い稽古の成果である。",
    },
  ],
};
