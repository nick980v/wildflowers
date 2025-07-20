"use client";

import { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Button from "./Button";

const BorderContainer = styled.div`
  border-radius: 25px;
  border: 1px solid var(--Tertiary, #d9932c);
  padding: 2rem;
  background: #00281a;
  max-width: 1000px;
  margin: 0 auto;
  @media (max-width: 600px) {
    padding: 1rem;
  }
  margin-bottom: 5rem;
`;
const SectionHeading = styled.h1`
  color: #d9932c;
  font-size: 1.3rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const InputsRow = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
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
  min-height: 100px;
  resize: vertical;
`;
const Label = styled.label`
  color: #fffcfa;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  display: block;
`;
const CheckboxLabel = styled.label`
  color: #fffcfa;
  font-size: 1rem;
  display: block;
  margin-bottom: 0.5rem;
`;
const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;
const ErrorText = styled.p`
  color: #ff4444;
  font-size: 0.95rem;
  margin: 0.25rem 0 0 0;
`;
const PrivacyLink = styled.a`
  color: #d9932c;
  text-decoration: underline;
  font-size: 14px;
  text-align: center;
  &:hover {
    color: #fffcfa;
  }
`;

const initialForm = {
  // Child Info
  childFullName: "",
  childPreferredName: "",
  childDOB: "",
  childAddress: "",
  // Parent/Carer Info
  parentFullName: "",
  parentRelationship: "",
  parentPhone: "",
  parentEmail: "",
  emergencyName: "",
  emergencyPhone: "",
  dropoffName: "",
  dropoffRelationship: "",
  dropoffContact: "",
  // Session Booking
  sessionFridayAM: false,
  sessionLunch: false,
  sessionFridayPM: false,
  bookingType: "",
  starterPack: "",
  oneOffDate: "",
  // Medical/Allergy
  hasAllergies: false,
  allergies: "",
  hasMedical: false,
  medical: "",
  hasMedication: false,
  medication: "",
  // Permissions
  photoConsent: "",
  // Additional
  additionalNotes: "",
  digitalSignature: "",
  signatureDate: "",
  agree: false,
};

export default function BookingForm({ sheetData = [] }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [availableFridays, setAvailableFridays] = useState([]);

  // Compute available Fridays with sessions in the future
  useEffect(() => {
    if (!sheetData || !Array.isArray(sheetData)) return;
    const today = new Date();
    const fridays = sheetData
      .map((row) => {
        // row.date is 'DD/MM/YYYY'
        const [day, month, year] = row.date.split("/");
        const dateObj = new Date(`${year}-${month}-${day}`);
        return {
          date: row.date,
          dateObj,
        };
      })
      .filter(({ dateObj }) => {
        // Only future Fridays
        return (
          dateObj.getDay() === 5 &&
          dateObj >=
            new Date(today.getFullYear(), today.getMonth(), today.getDate())
        );
      })
      .map(({ date, dateObj }) => ({
        value: dateObj.toISOString().slice(0, 10),
        label: dateObj.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      }));
    // Remove duplicates (if multiple sessions on same Friday)
    const unique = [];
    const seen = new Set();
    for (const d of fridays) {
      if (!seen.has(d.value)) {
        unique.push(d);
        seen.add(d.value);
      }
    }
    setAvailableFridays(unique);
  }, [sheetData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    // Child Info
    if (!form.childFullName.trim()) newErrors.childFullName = "Required";
    if (!form.childDOB) newErrors.childDOB = "Required";
    if (!form.childAddress.trim()) newErrors.childAddress = "Required";
    // Parent/Carer Info
    if (!form.parentFullName.trim()) newErrors.parentFullName = "Required";
    if (!form.parentRelationship.trim())
      newErrors.parentRelationship = "Required";
    if (!form.parentPhone.trim()) newErrors.parentPhone = "Required";
    else if (!/^\+?\d{7,15}$/.test(form.parentPhone.replace(/\s/g, "")))
      newErrors.parentPhone = "Invalid phone";
    if (!form.parentEmail.trim()) newErrors.parentEmail = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(form.parentEmail))
      newErrors.parentEmail = "Invalid email";
    // Session Booking
    if (!form.sessionFridayAM && !form.sessionLunch && !form.sessionFridayPM)
      newErrors.session = "Select at least one session";
    if (!form.bookingType) newErrors.bookingType = "Required";
    if (!form.starterPack) newErrors.starterPack = "Required";
    if (form.bookingType === "One-Off" && !form.oneOffDate)
      newErrors.oneOffDate = "Select a date";
    // Permissions
    if (!form.photoConsent) newErrors.photoConsent = "Required";
    // Additional
    if (!form.digitalSignature.trim()) newErrors.digitalSignature = "Required";
    if (!form.signatureDate) newErrors.signatureDate = "Required";
    if (!form.agree)
      newErrors.agree = "You must agree to the privacy policy and terms";
    // Medical/Allergy
    if (form.hasAllergies && !form.allergies.trim())
      newErrors.allergies = "Please specify";
    if (form.hasMedical && !form.medical.trim())
      newErrors.medical = "Please specify";
    if (form.hasMedication && !form.medication.trim())
      newErrors.medication = "Please specify";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setIsLoading(true);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Sent! Thank you.");
        setForm(initialForm);
        // TODO: Add new Booking conversion
        //   if (typeof window !== "undefined" && window.gtag) {
        //     window.gtag("event", "conversion", {
        //       send_to: "AW-17139336367/3a6BCNaW2tEaEK-J1uw_", // replace with your actual value
        //     });
        //   }
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
      <h1
        style={{
          color: "white",
          fontSize: 32,
          fontWeight: 900,
          marginBottom: 8,
        }}
      >
        Booking Form
      </h1>
      <Form onSubmit={handleSubmit}>
        {/* 1. Child Information */}
        <SectionHeading>Child Information</SectionHeading>
        <Label>
          Full Name
          <Input
            name="childFullName"
            value={form.childFullName}
            onChange={handleChange}
            required
            disabled={isLoading}
            placeholder="Child's full name*"
          />
          {errors.childFullName && (
            <ErrorText>{errors.childFullName}</ErrorText>
          )}
        </Label>
        <Label>
          Preferred Name
          <Input
            name="childPreferredName"
            value={form.childPreferredName}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="Preferred name (optional)"
          />
        </Label>
        <InputsRow>
          <Label style={{ flex: 1 }}>
            Date of Birth
            <Input
              type="date"
              name="childDOB"
              value={form.childDOB}
              onChange={handleChange}
              required
              disabled={isLoading}
              placeholder="Date of birth*"
            />
            {errors.childDOB && <ErrorText>{errors.childDOB}</ErrorText>}
          </Label>
          <Label style={{ flex: 2 }}>
            Home Address
            <TextArea
              name="childAddress"
              value={form.childAddress}
              onChange={handleChange}
              required
              disabled={isLoading}
              placeholder="Home address*"
            />
            {errors.childAddress && (
              <ErrorText>{errors.childAddress}</ErrorText>
            )}
          </Label>
        </InputsRow>

        {/* 2. Parent/Carer Information */}
        <SectionHeading>Parent/Carer Information</SectionHeading>
        <Label>
          Full Name
          <Input
            name="parentFullName"
            value={form.parentFullName}
            onChange={handleChange}
            required
            disabled={isLoading}
            placeholder="Parent/Carer full name*"
          />
          {errors.parentFullName && (
            <ErrorText>{errors.parentFullName}</ErrorText>
          )}
        </Label>
        <InputsRow>
          <Label style={{ flex: 1 }}>
            Relationship to Child
            <Input
              name="parentRelationship"
              value={form.parentRelationship}
              onChange={handleChange}
              required
              disabled={isLoading}
              placeholder="Relationship to child*"
            />
            {errors.parentRelationship && (
              <ErrorText>{errors.parentRelationship}</ErrorText>
            )}
          </Label>
          <Label style={{ flex: 1 }}>
            Phone Number
            <Input
              name="parentPhone"
              value={form.parentPhone}
              onChange={handleChange}
              required
              disabled={isLoading}
              placeholder="Phone number*"
            />
            {errors.parentPhone && <ErrorText>{errors.parentPhone}</ErrorText>}
          </Label>
        </InputsRow>
        <Label>
          Email Address
          <Input
            name="parentEmail"
            value={form.parentEmail}
            onChange={handleChange}
            required
            disabled={isLoading}
            placeholder="Email address*"
          />
          {errors.parentEmail && <ErrorText>{errors.parentEmail}</ErrorText>}
        </Label>
        <InputsRow>
          <Label style={{ flex: 1 }}>
            Emergency Contact Name
            <Input
              name="emergencyName"
              value={form.emergencyName}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="Emergency contact name (optional)"
            />
          </Label>
          <Label style={{ flex: 1 }}>
            Emergency Contact Phone
            <Input
              name="emergencyPhone"
              value={form.emergencyPhone}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="Emergency contact phone (optional)"
            />
          </Label>
        </InputsRow>
        <InputsRow>
          <Label style={{ flex: 1 }}>
            Regular Drop-off/Pick-up Person Name
            <Input
              name="dropoffName"
              value={form.dropoffName}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="Drop-off/Pick-up person name (optional)"
            />
          </Label>
          <Label style={{ flex: 1 }}>
            Relationship
            <Input
              name="dropoffRelationship"
              value={form.dropoffRelationship}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="Relationship (optional)"
            />
          </Label>
          <Label style={{ flex: 1 }}>
            Contact
            <Input
              name="dropoffContact"
              value={form.dropoffContact}
              onChange={handleChange}
              disabled={isLoading}
              placeholder="Contact (optional)"
            />
          </Label>
        </InputsRow>

        {/* 3. Session Booking */}
        <SectionHeading>Session Booking</SectionHeading>
        <div
          style={{ color: "#fffcfa", fontSize: "1rem", marginBottom: "0.5rem" }}
        >
          Please tick the session(s) you&apos;d like to book
        </div>
        <CheckboxLabel>
          <input
            type="checkbox"
            name="sessionFridayAM"
            checked={form.sessionFridayAM}
            onChange={handleChange}
            disabled={isLoading}
          />
          Friday AM
        </CheckboxLabel>
        <CheckboxLabel>
          <input
            type="checkbox"
            name="sessionLunch"
            checked={form.sessionLunch}
            onChange={handleChange}
            disabled={isLoading}
          />
          Community Lunch
        </CheckboxLabel>
        <CheckboxLabel>
          <input
            type="checkbox"
            name="sessionFridayPM"
            checked={form.sessionFridayPM}
            onChange={handleChange}
            disabled={isLoading}
          />
          Friday PM
        </CheckboxLabel>
        {errors.session && <ErrorText>{errors.session}</ErrorText>}
        <Label>How would you like to book?</Label>
        <RadioGroup>
          {/* Full-Term Booking */}
          <CheckboxLabel
            style={{ alignItems: "flex-start", flexDirection: "column" }}
          >
            <span>
              <input
                type="radio"
                name="bookingType"
                value="Full-Term"
                checked={form.bookingType === "Full-Term"}
                onChange={handleChange}
                disabled={isLoading}
                style={{ marginRight: 8 }}
              />
              <strong>Full-Term Booking</strong>
            </span>
            <span
              style={{ fontSize: "0.98em", color: "#d9932c", marginLeft: 24 }}
            >
              Book and pay upfront for the full term — includes a 10% discount
              and a free welcome pack.
            </span>
          </CheckboxLabel>
          {/* Weekly Booking */}
          <CheckboxLabel
            style={{ alignItems: "flex-start", flexDirection: "column" }}
          >
            <span>
              <input
                type="radio"
                name="bookingType"
                value="Weekly"
                checked={form.bookingType === "Weekly"}
                onChange={handleChange}
                disabled={isLoading}
                style={{ marginRight: 8 }}
              />
              <strong>Weekly Booking (Pay-as-you-go)</strong>
            </span>
            <span
              style={{ fontSize: "0.98em", color: "#d9932c", marginLeft: 24 }}
            >
              Attend regularly each week, but pay each time instead of all at
              once.
            </span>
          </CheckboxLabel>
          {/* One-Off Booking */}
          <CheckboxLabel
            style={{ alignItems: "flex-start", flexDirection: "column" }}
          >
            <span>
              <input
                type="radio"
                name="bookingType"
                value="One-Off"
                checked={form.bookingType === "One-Off"}
                onChange={handleChange}
                disabled={isLoading}
                style={{ marginRight: 8 }}
              />
              <strong>One-Off Booking</strong>
            </span>
            <span
              style={{ fontSize: "0.98em", color: "#d9932c", marginLeft: 24 }}
            >
              Book and pay for individual Fridays when you’re available.
            </span>
          </CheckboxLabel>
        </RadioGroup>
        {errors.bookingType && <ErrorText>{errors.bookingType}</ErrorText>}
        {form.bookingType !== "Full-Term" && (
          <>
            <Label>Order Starter Pack (£15)?</Label>
            <span style={{ fontSize: "0.98em", color: "#d9932c" }}>
              Includes a drawstring bag, name badge, and welcome booklet.
            </span>
            <RadioGroup>
              <CheckboxLabel>
                <input
                  type="radio"
                  name="starterPack"
                  value="Yes"
                  checked={form.starterPack === "Yes"}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                Yes
              </CheckboxLabel>
              <CheckboxLabel>
                <input
                  type="radio"
                  name="starterPack"
                  value="No"
                  checked={form.starterPack === "No"}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                No
              </CheckboxLabel>
            </RadioGroup>
            {errors.starterPack && <ErrorText>{errors.starterPack}</ErrorText>}
          </>
        )}
        {form.bookingType === "One-Off" && (
          <Label>
            Select Friday for One-Off Booking
            <Input
              as="select"
              name="oneOffDate"
              value={form.oneOffDate || ""}
              onChange={handleChange}
              required
              disabled={isLoading || availableFridays.length === 0}
              placeholder="Select a Friday*"
            >
              <option value="">Select a Friday*</option>
              {availableFridays.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </Input>
            {errors.oneOffDate && <ErrorText>{errors.oneOffDate}</ErrorText>}
          </Label>
        )}

        {/* 4. Medical and Allergy Info */}
        <SectionHeading>Medical and Allergy Info</SectionHeading>
        <CheckboxLabel>
          <input
            type="checkbox"
            name="hasAllergies"
            checked={form.hasAllergies}
            onChange={handleChange}
            disabled={isLoading}
          />
          Any allergies or intolerances?
        </CheckboxLabel>
        {form.hasAllergies && (
          <Label>
            Please specify
            <TextArea
              name="allergies"
              value={form.allergies}
              onChange={handleChange}
              required={form.hasAllergies}
              disabled={isLoading}
              placeholder="Please specify allergies or intolerances*"
            />
            {errors.allergies && <ErrorText>{errors.allergies}</ErrorText>}
          </Label>
        )}
        <CheckboxLabel>
          <input
            type="checkbox"
            name="hasMedical"
            checked={form.hasMedical}
            onChange={handleChange}
            disabled={isLoading}
          />
          Any medical conditions or needs?
        </CheckboxLabel>
        {form.hasMedical && (
          <Label>
            Please specify
            <TextArea
              name="medical"
              value={form.medical}
              onChange={handleChange}
              required={form.hasMedical}
              disabled={isLoading}
              placeholder="Please specify medical conditions or needs*"
            />
            {errors.medical && <ErrorText>{errors.medical}</ErrorText>}
          </Label>
        )}
        <CheckboxLabel>
          <input
            type="checkbox"
            name="hasMedication"
            checked={form.hasMedication}
            onChange={handleChange}
            disabled={isLoading}
          />
          Any medication?
        </CheckboxLabel>
        {form.hasMedication && (
          <Label>
            Please specify
            <TextArea
              name="medication"
              value={form.medication}
              onChange={handleChange}
              required={form.hasMedication}
              disabled={isLoading}
              placeholder="Please specify medication*"
            />
            {errors.medication && <ErrorText>{errors.medication}</ErrorText>}
          </Label>
        )}

        {/* 5. Permissions */}
        <SectionHeading>Permissions</SectionHeading>
        <Label>Do you give photo consent?</Label>
        <RadioGroup>
          <CheckboxLabel>
            <input
              type="radio"
              name="photoConsent"
              value="Yes"
              checked={form.photoConsent === "Yes"}
              onChange={handleChange}
              disabled={isLoading}
            />
            Yes
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="radio"
              name="photoConsent"
              value="No"
              checked={form.photoConsent === "No"}
              onChange={handleChange}
              disabled={isLoading}
            />
            No
          </CheckboxLabel>
          <CheckboxLabel>
            <input
              type="radio"
              name="photoConsent"
              value="Ask"
              checked={form.photoConsent === "Ask"}
              onChange={handleChange}
              disabled={isLoading}
            />
            Ask me each time
          </CheckboxLabel>
        </RadioGroup>
        {errors.photoConsent && <ErrorText>{errors.photoConsent}</ErrorText>}

        {/* 6. Additional Notes and Consent */}
        <SectionHeading>Additional Notes and Consent</SectionHeading>
        <Label>
          Additional notes or questions
          <TextArea
            name="additionalNotes"
            value={form.additionalNotes}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="Any additional notes or questions? (optional)"
          />
        </Label>
        <InputsRow>
          <Label style={{ flex: 2 }}>
            Full name (digital signature)
            <Input
              name="digitalSignature"
              value={form.digitalSignature}
              onChange={handleChange}
              required
              disabled={isLoading}
              placeholder="Full name (digital signature)*"
            />
            {errors.digitalSignature && (
              <ErrorText>{errors.digitalSignature}</ErrorText>
            )}
          </Label>
          <Label style={{ flex: 1 }}>
            Date
            <Input
              type="date"
              name="signatureDate"
              value={form.signatureDate}
              onChange={handleChange}
              required
              disabled={isLoading}
              placeholder="Today's date*"
            />
            {errors.signatureDate && (
              <ErrorText>{errors.signatureDate}</ErrorText>
            )}
          </Label>
        </InputsRow>
        <CheckboxLabel>
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <span style={{ marginLeft: "8px" }}>
            I confirm I have read and agree to the{" "}
            <PrivacyLink href="/privacy-policy" target="_blank">
              privacy policy
            </PrivacyLink>{" "}
            and terms.
          </span>
        </CheckboxLabel>
        {errors.agree && <ErrorText>{errors.agree}</ErrorText>}
        {status && (
          <p style={{ color: "#4c6e3d", textAlign: "center", marginTop: 8 }}>
            {status}
          </p>
        )}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit Booking"}
        </Button>
      </Form>
    </BorderContainer>
  );
}
