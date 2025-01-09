import { InvalidDateError } from "@/lib/errors/invalid-date-error";
import { getRelativeTime } from ".";

describe("getRelativeTime", () => {
  beforeAll(() => {
    jest
      .useFakeTimers()
      .setSystemTime(new Date("2025-01-08T12:00:00Z").getTime());
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should return seconds if less than a minute ago", () => {
    const date = new Date("2025-01-08T11:59:45Z").toISOString();
    expect(getRelativeTime(date)).toBe("15s");
  });

  it("should return minutes if less than an hour ago", () => {
    const date = new Date("2025-01-08T11:55:00Z").toISOString();
    expect(getRelativeTime(date)).toBe("5m");
  });

  it("should return hours if less than a day ago", () => {
    const date = new Date("2025-01-08T09:00:00Z").toISOString();
    expect(getRelativeTime(date)).toBe("3h");
  });

  it("should return days if less than 30 days ago", () => {
    const date = new Date("2024-12-30T12:00:00Z").toISOString();
    expect(getRelativeTime(date)).toBe("9d");
  });

  it("should return months if less than a year ago", () => {
    const date = new Date("2024-10-08T12:00:00Z").toISOString();
    expect(getRelativeTime(date)).toBe("3mo");
  });

  it("should return years if more than a year ago", () => {
    const date = new Date("2020-01-08T12:00:00Z").toISOString();
    expect(getRelativeTime(date)).toBe("5y");
  });

  it("should handle invalid dates gracefully", () => {
    expect(() => getRelativeTime("invalid-date")).toThrow(InvalidDateError);
    expect(() => getRelativeTime("")).toThrow(InvalidDateError);
  });
});
