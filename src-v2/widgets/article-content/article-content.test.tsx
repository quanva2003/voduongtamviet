import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { articles } from "@/entities/article";

import { ArticleContent } from "./ui/article-content";

const article = articles.vi[0]!;

describe("ArticleContent", () => {
  it("renders article title", () => {
    render(
      <MemoryRouter>
        <ArticleContent article={article} />
      </MemoryRouter>,
    );
    expect(screen.getByText(article.title)).toBeInTheDocument();
  });

  it("renders author and read time", () => {
    render(
      <MemoryRouter>
        <ArticleContent article={article} />
      </MemoryRouter>,
    );
    expect(screen.getByText(article.author)).toBeInTheDocument();
    expect(screen.getByText(article.readTime)).toBeInTheDocument();
  });

  it("renders category badge when provided", () => {
    render(
      <MemoryRouter>
        <ArticleContent article={article} categoryLabel="Kỹ thuật" />
      </MemoryRouter>,
    );
    expect(screen.getByText("Kỹ thuật")).toBeInTheDocument();
  });

  it("renders tags", () => {
    render(
      <MemoryRouter>
        <ArticleContent article={article} />
      </MemoryRouter>,
    );
    article.tags.forEach((tag) => {
      expect(screen.getByText(`#${tag}`)).toBeInTheDocument();
    });
  });
});
