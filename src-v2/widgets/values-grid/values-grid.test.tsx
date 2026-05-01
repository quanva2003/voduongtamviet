import { render, screen } from "@testing-library/react";

import { values } from "@/entities/value";

import { ValuesGrid } from "./ui/values-grid";

describe("ValuesGrid", () => {
  it("renders kanji and titles for all values", () => {
    render(<ValuesGrid values={values.vi} />);
    values.vi.forEach((v) => {
      expect(screen.getAllByText(v.kanji).length).toBeGreaterThan(0);
      expect(screen.getByText(v.title)).toBeInTheDocument();
    });
  });
});
