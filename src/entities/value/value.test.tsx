import { render, screen } from "@testing-library/react";

import { values } from "./model/data";
import { ValueCard } from "./ui/value-card";

const value = values.vi[0]!;

describe("ValueCard", () => {
  it("renders kanji, title and description", () => {
    render(<ValueCard value={value} animate={false} />);
    expect(screen.getByText(value.kanji)).toBeInTheDocument();
    expect(screen.getByText(value.title)).toBeInTheDocument();
    expect(screen.getByText(value.description)).toBeInTheDocument();
  });
});

describe("values data", () => {
  it("has 3 values per locale", () => {
    expect(values.vi).toHaveLength(3);
    expect(values.en).toHaveLength(3);
    expect(values.ja).toHaveLength(3);
  });

  it("uses kanji 心体技", () => {
    const kanjis = values.vi.map((v) => v.kanji);
    expect(kanjis).toEqual(["心", "体", "技"]);
  });
});
