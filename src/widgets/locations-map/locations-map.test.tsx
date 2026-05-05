import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { locations } from "@/entities/location";

import { LocationsMap } from "./ui/locations-map";

describe("LocationsMap", () => {
  it("renders all location cards", () => {
    render(<LocationsMap locations={locations.vi} />);
    locations.vi.forEach((loc) => {
      expect(screen.getByText(loc.name)).toBeInTheDocument();
    });
  });

  it("selecting a location updates the map iframe title", async () => {
    render(<LocationsMap locations={locations.vi} />);
    const second = locations.vi[1]!;
    await userEvent.click(screen.getAllByRole("button")[1]!);
    expect(screen.getByTitle(new RegExp(second.name))).toBeInTheDocument();
  });
});
