import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useRelativeTime } from "@/lib/hooks/use-relative-time";
import { DUMMY_PARENT_THREADS } from "@/lib/constants";
import { ThreadMain } from ".";

jest.mock("@/lib/hooks/use-relative-time", () => ({
  useRelativeTime: jest.fn(),
}));

const mockThread = DUMMY_PARENT_THREADS[0];

describe("ThreadMain", () => {
  beforeEach(() => {
    (useRelativeTime as jest.Mock).mockReturnValue("5m");
  });

  it("renders the thread content", () => {
    render(<ThreadMain {...mockThread} />);

    expect(
      screen.getByRole("img", {
        name: `${mockThread.author.username}'s avatar`,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(mockThread.author.username)).toBeInTheDocument();
    expect(screen.getByText(/5m ago/)).toBeInTheDocument();
    expect(screen.getByText(mockThread.body)).toBeInTheDocument();
  });
});
