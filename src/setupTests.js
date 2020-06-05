import "@testing-library/jest-dom/extend-expect";
import "mutationobserver-shim";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./components/ContactForm";
