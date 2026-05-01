import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { locations } from "./model/data";
import { LocationCard } from "./ui/location-card";

const location = locations.vi[0];

describe("LocationCard", () => {
  it("renders location name and address", () => {
    render(<LocationCard location={location} />);
    expect(screen.getByText(location.name)).toBeInTheDocument();
    expect(screen.getByText(location.address)).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    render(<LocationCard location={location} onClick={onClick} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("shows selected variant when selected=true", () => {
    const { container } = render(<LocationCard location={location} selected />);
    expect(container.firstChild).toHaveClass("border-l-shu-seal");
  });
});

describe("locations data", () => {
  it("has 6 locations in VI locale", () => {
    expect(locations.vi).toHaveLength(6);
  });
});
