import { describe, it, expect } from "vitest";

import type { Article } from "@/entities/article";

import { filterArticles } from "./filter-articles";

const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    slug: "kata-basics",
    title: "Kỹ thuật Kata",
    excerpt: "kata basics",
    content: "",
    author: "Thầy A",
    date: "2024-01-01",
    category: "techniques",
    image: "/img/1",
    readTime: "5 phút",
    tags: ["kata", "cơ bản"],
  },
  {
    id: "2",
    slug: "philosophy",
    title: "Triết lý võ đạo",
    excerpt: "philosophy",
    content: "",
    author: "Cô B",
    date: "2024-01-02",
    category: "philosophy",
    image: "/img/2",
    readTime: "7 phút",
    tags: ["triết lý"],
  },
  {
    id: "3",
    slug: "training-plan",
    title: "Kế hoạch luyện tập",
    excerpt: "training",
    content: "",
    author: "Thầy C",
    date: "2024-01-03",
    category: "training",
    image: "/img/3",
    readTime: "6 phút",
    tags: ["luyện tập"],
  },
];

describe("filterArticles", () => {
  it("returns all articles when no filter", () => {
    expect(filterArticles(MOCK_ARTICLES, { category: "all", search: "" })).toHaveLength(3);
  });

  it("filters by category", () => {
    const result = filterArticles(MOCK_ARTICLES, { category: "techniques", search: "" });
    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe("1");
  });

  it("filters by search term in title", () => {
    const result = filterArticles(MOCK_ARTICLES, { category: "all", search: "kata" });
    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe("1");
  });

  it("filters by search term in tags", () => {
    const result = filterArticles(MOCK_ARTICLES, { category: "all", search: "triết lý" });
    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe("2");
  });

  it("returns empty when no match", () => {
    expect(filterArticles(MOCK_ARTICLES, { category: "all", search: "xyzabc" })).toHaveLength(0);
  });

  it("combines category and search", () => {
    const result = filterArticles(MOCK_ARTICLES, { category: "techniques", search: "kata" });
    expect(result).toHaveLength(1);
  });
});
