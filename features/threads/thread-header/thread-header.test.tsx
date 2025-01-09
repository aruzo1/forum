import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ThreadHeader } from "./thread-header";
import { DUMMY_PARENT_THREADS } from "@/lib/constants";

const mockThread = DUMMY_PARENT_THREADS[0];

describe("ThreadHeader", () => {
  it("renders the subject and back link", () => {
    render(<ThreadHeader {...mockThread} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      mockThread.subject,
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link").querySelector("svg")).toBeInTheDocument();
  });

  it("links to the root path", () => {
    render(<ThreadHeader {...mockThread} />);

    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });
});
