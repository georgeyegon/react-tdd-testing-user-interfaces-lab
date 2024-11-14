import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm George`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm george/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of myself with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/my profile picture/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "profile.jpg");
});

test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", { name: /about me/i, level: 2 });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a biography paragraph", () => {
  render(<App />);
  const bio = screen.getByText(/biography about me/i);
  expect(bio).toBeInTheDocument();
});

test("has a link to my GitHub page", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toHaveAttribute("href", "https://github.com/yourprofile");
});

test("has a link to my LinkedIn page", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/yourprofile");
});
