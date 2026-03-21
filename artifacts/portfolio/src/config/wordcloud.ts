/**
 * Hero word cloud configuration.
 * Edit keywords here — they render automatically in the hero section.
 *
 * size: "xl" | "lg" | "md" | "sm" — controls visual prominence
 * highlight: true — applies the primary gradient color (use for 1-2 anchor words)
 * opacity: 0-100 — controls text opacity (e.g. 80 = 80%)
 */

export interface WordCloudItem {
  word: string;
  size: "xl" | "lg" | "md" | "sm";
  highlight?: boolean;
  opacity?: number;
}

export const wordCloudKeywords: WordCloudItem[] = [
  { word: "Adoption", size: "xl", highlight: true },
  { word: "Regulated", size: "lg", opacity: 80 },
  { word: "Banking", size: "lg", opacity: 70 },
  { word: "Enterprise", size: "lg", opacity: 60 },
  { word: "Risk", size: "md", opacity: 55 },
  { word: "Platform", size: "md", opacity: 50 },
  { word: "Data", size: "md", opacity: 50 },
  { word: "Zero to One", size: "md", opacity: 50 },
  { word: "AI", size: "md", highlight: true, opacity: 60 },
  { word: "Cross-Functional", size: "sm", opacity: 40 },
  { word: "Governance", size: "sm", opacity: 35 },
  { word: "B2B", size: "sm", opacity: 35 },
  { word: "Fintech", size: "sm", opacity: 35 },
];
