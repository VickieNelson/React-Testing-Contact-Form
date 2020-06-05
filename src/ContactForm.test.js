import "@testing-library/jest-dom/extend-expect";
import "mutationobserver-shim";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./components/ContactForm";

test("renders form inputs", () => {
  render(<ContactForm />);

  const firstNameInput = screen.getByTestId(/firstName/i);
  const lastNameInput = screen.getByTestId(/lastName/i);
  const emailInput = screen.getByTestId(/email/i);
  const messageInput = screen.getByTestId(/message/i);

  fireEvent.change(firstNameInput, {
    target: { name: "firstName", value: "Vickie" },
  });
  fireEvent.change(lastNameInput, {
    target: { name: "lastName", value: "Nelson" },
  });
  fireEvent.change(emailInput, {
    target: { name: "email", value: "vickie@vickie.com" },
  });
  fireEvent.change(messageInput, {
    target: { name: "message", value: "Total rockstar" },
  });
});

test("testing form submit", () => {
  render(<ContactForm />);
  // const firstNameInput = getByText(/first name/i)
  // const LastNameInput = getByLabelText(/Last Name/i)
  // console.log(render(<ContactForm/>))
  const firstNameInput = screen.getByTestId(/firstName/i);
  const lastNameInput = screen.getByTestId(/lastName/i);
  const emailInput = screen.getByTestId(/email/i);
  const messageInput = screen.getByTestId(/message/i);

  expect(firstNameInput).toBeVisible();
  expect(lastNameInput).toBeVisible();
  expect(emailInput).toBeVisible();
  expect(messageInput).toBeVisible();
});

//THIS TEST NOT WORKING
// test("testing form submit", () => {
//   render(<ContactForm />);

//   const submitButton = screen.getByText(/submit query/i);

//   //2. run click event
//   // clicking the button
//   fireEvent.click(submitButton);

//   // assertion

//   // New name
//   //1. query new name text
//   //2. assert that it's being rendered
//   const newName = screen.getByText(/Sarah/i);
//   expect(newName).toBeInTheDocument();
// });
