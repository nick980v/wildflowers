"use client";

import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Image from "next/image";

const BorderContainer = styled.div`
  border-radius: 25px;
  border: 1px solid var(--Tertiary, #d9932c);
  padding: 2rem;
`;
const SubHeading = styled.h1`
  color: white;
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: 110%;
  height: auto;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Text = styled.p`
  color: #fffcfa;
  font-size: 18px;
  line-height: 125%;
  margin-bottom: 1.5rem;
  font-style: normal;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const Input = styled.input`
  color: var(--Accent, #4c6e3d);
  border-radius: 8px;
  border: 1px solid var(--Primary, #062f21);
  background: #00281a;
  padding: 0.75rem;
  width: 100%;
`;

const TextArea = styled.textarea`
  color: var(--Accent, #4c6e3d);
  border-radius: 8px;
  border: 1px solid var(--Primary, #062f21);
  background: #00281a;
  padding: 0.75rem;
  width: 100%;
  min-height: 150px;
  resize: vertical;
`;

const Spinner = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid #d9932c;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const StatusMessage = styled.p`
  color: ${(props) => (props.$error ? "#ff4444" : "#4c6e3d")};
  text-align: center;
  margin-top: 1rem;
`;

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Sent! Thank you.");
        setForm({
          firstName: "",
          surname: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus(
          "Error sending message. Please email us directly at enquiries@wildflowerscommunity.uk"
        );
      }
    } catch (error) {
      setStatus(
        "Error sending message. Please email us directly at enquiries@wildflowerscommunity.uk"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BorderContainer>
      <SubHeading>
        <Image
          src="/PaperPlane.svg"
          alt="Paper plane icon"
          width={70}
          height={40}
        />
        Contact Form
      </SubHeading>
      <Text>
        We aim to get back to you as soon as possible. We can&apos;t wait to
        welcome you and your little one to Wild flowers; where nature brings
        learning to life.
      </Text>
      <Form onSubmit={handleSubmit}>
        <InputsContainer>
          <Input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First name*"
            required
            disabled={isLoading}
          />
          <Input
            name="surname"
            value={form.surname}
            onChange={handleChange}
            placeholder="Surname*"
            required
            disabled={isLoading}
          />
          <Input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email*"
            type="email"
            required
            disabled={isLoading}
          />
          <Input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            type="tel"
            disabled={isLoading}
          />
        </InputsContainer>
        <TextArea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message*"
          required
          disabled={isLoading}
        />
        {isLoading && <Spinner />}
        {status && (
          <StatusMessage $error={status.includes("Error")}>
            {status}
          </StatusMessage>
        )}
        <Button type="submit" disabled={isLoading}>
          Send
        </Button>
      </Form>
    </BorderContainer>
  );
}
