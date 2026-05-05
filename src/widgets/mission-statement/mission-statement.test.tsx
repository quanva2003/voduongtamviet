import { render, screen } from "@testing-library/react";

import { MissionStatement } from "./ui/mission-statement";

describe("MissionStatement", () => {
  it("renders title and all paragraphs", () => {
    render(<MissionStatement title="Sứ mệnh" paragraphs={["Đoạn một.", "Đoạn hai."]} />);
    expect(screen.getByText("Sứ mệnh")).toBeInTheDocument();
    expect(screen.getByText("Đoạn một.")).toBeInTheDocument();
    expect(screen.getByText("Đoạn hai.")).toBeInTheDocument();
  });
});
