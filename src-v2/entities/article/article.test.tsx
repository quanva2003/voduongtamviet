import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { articles } from "./model/data";
import { ArticleCard } from "./ui/article-card";
import { ArticleMetaRow } from "./ui/article-meta-row";

const article = articles.vi[0];

const wrap = (ui: React.ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe("ArticleCard", () => {
  it("renders title and excerpt", () => {
    wrap(<ArticleCard article={article} />);
    expect(screen.getByText(article.title)).toBeInTheDocument();
    expect(screen.getByText(article.excerpt)).toBeInTheDocument();
  });

  it("renders category badge when categoryLabel is provided", () => {
    wrap(<ArticleCard article={article} categoryLabel="Kỹ thuật" />);
    expect(screen.getByText("Kỹ thuật")).toBeInTheDocument();
  });
});

describe("ArticleMetaRow", () => {
  it("renders author, date and readTime", () => {
    wrap(<ArticleMetaRow article={article} />);
    expect(screen.getByText(article.author)).toBeInTheDocument();
    expect(screen.getByText(article.readTime)).toBeInTheDocument();
  });
});

describe("articles data", () => {
  it("has 6 articles per locale", () => {
    expect(articles.vi).toHaveLength(6);
    expect(articles.en).toHaveLength(6);
    expect(articles.ja).toHaveLength(6);
  });
});
