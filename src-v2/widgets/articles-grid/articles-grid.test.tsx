import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { articles } from "@/entities/article";

import { ArticlesGrid } from "./ui/articles-grid";

const wrap = (ui: React.ReactElement) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe("ArticlesGrid", () => {
  it("renders articles", () => {
    wrap(<ArticlesGrid articles={articles.vi.slice(0, 3)} />);
    expect(screen.getByText(articles.vi[0].title)).toBeInTheDocument();
  });

  it("renders empty state when no articles", () => {
    wrap(<ArticlesGrid articles={[]} />);
    expect(screen.getByText(/chưa có bài viết/i)).toBeInTheDocument();
  });

  it("renders pagination when articles exceed perPage", () => {
    const onPageChange = vi.fn();
    wrap(<ArticlesGrid articles={articles.vi} page={1} perPage={3} onPageChange={onPageChange} />);
    expect(screen.getAllByRole("button").length).toBeGreaterThan(1);
  });
});
