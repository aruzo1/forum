import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DUMMY_PARENT_THREADS } from "@/lib/constants";
import { ThreadStats } from ".";

const mockThread = DUMMY_PARENT_THREADS[0];

describe("ThreadStats", () => {
  it("renders all recent contributors' avatars", () => {
    render(<ThreadStats {...mockThread} />);

    const avatars = screen.getAllByRole("img");
    expect(avatars).toHaveLength(mockThread.recentContributors.length);
  });

  it("renders stats correctly", () => {
    render(<ThreadStats {...mockThread} />);

    expect(screen.getByText("Replies")).toBeInTheDocument();
    expect(screen.getByText(mockThread.replies)).toBeInTheDocument();

    expect(screen.getByText("Views")).toBeInTheDocument();
    expect(screen.getByText(mockThread.views)).toBeInTheDocument();
  });

  it("displays the correct labels for stats", () => {
    render(<ThreadStats {...mockThread} />);

    const labels = ["Replies", "Views"];
    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
