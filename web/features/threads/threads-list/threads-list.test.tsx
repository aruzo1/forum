import { render, screen } from "@testing-library/react";
import { DUMMY_PARENT_THREADS } from "@/lib/constants";
import { ThreadsList } from ".";

describe("ThreadsList", () => {
  it("renders table headers", () => {
    render(<ThreadsList threads={DUMMY_PARENT_THREADS} />);

    expect(screen.getByText("Topic")).toBeInTheDocument();
    expect(screen.getByText("Contributors")).toBeInTheDocument();
    expect(screen.getByText("Replies")).toBeInTheDocument();
    expect(screen.getByText("Views")).toBeInTheDocument();
    expect(screen.getByText("Activity")).toBeInTheDocument();
  });

  it("renders all threads with correct data", () => {
    render(<ThreadsList threads={DUMMY_PARENT_THREADS} />);

    DUMMY_PARENT_THREADS.forEach(({ subject, body, replies, views }) => {
      expect(screen.getByText(subject)).toBeInTheDocument();
      expect(screen.getByText(body)).toBeInTheDocument();
      expect(screen.getByText(replies)).toBeInTheDocument();
      expect(screen.getByText(views)).toBeInTheDocument();
    });
  });

  it("renders contributors' avatars for each thread", () => {
    render(<ThreadsList threads={DUMMY_PARENT_THREADS} />);

    DUMMY_PARENT_THREADS.forEach(({ recentContributors }) => {
      recentContributors.forEach(({ username }) => {
        expect(
          screen.getAllByAltText(`${username}'s avatar`)[0],
        ).toBeInTheDocument();
      });
    });
  });

  it("contains correct link to individual thread page", () => {
    render(<ThreadsList threads={DUMMY_PARENT_THREADS} />);

    DUMMY_PARENT_THREADS.forEach(({ id, subject }) => {
      const link = screen.getByRole("link", { name: new RegExp(subject, "i") });
      expect(link).toHaveAttribute("href", `/threads/${id}`);
    });
  });
});
