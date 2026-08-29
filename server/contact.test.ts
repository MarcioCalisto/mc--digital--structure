import { describe, expect, it } from "vitest";
import { contactInput, getRequestSource, sendContactEmail } from "./contact";

const validContact = {
  name: "Márcio",
  email: "marcio@example.com",
  projectType: "Sistema Web" as const,
  message: "Quero conversar sobre um sistema.",
  honeypot: "",
};

describe("contact validation and safety", () => {
  it("parses a valid contact and reports pending email configuration", async () => {
    const parsed = contactInput.safeParse(validContact);
    expect(parsed.success).toBe(true);
    if (!parsed.success) return;

    const result = await sendContactEmail(parsed.data, "vitest-config-test");
    expect(result).toMatchObject({
      success: false,
      code: "EMAIL_NOT_CONFIGURED",
    });
  });

  it("accepts honeypot submissions without sending an email", async () => {
    const parsed = contactInput.safeParse({
      ...validContact,
      honeypot: "bot-value",
    });
    expect(parsed.success).toBe(true);
    if (!parsed.success) return;

    await expect(
      sendContactEmail(parsed.data, "vitest-honeypot-test")
    ).resolves.toEqual({ success: true, code: "SPAM_ACCEPTED" });
  });

  it("rate limits repeated submissions from the same source", async () => {
    const source = "vitest-rate-limit-test";
    const first = await sendContactEmail(validContact, source);
    const second = await sendContactEmail(validContact, source);
    expect(first).toMatchObject({
      success: false,
      code: "EMAIL_NOT_CONFIGURED",
    });
    expect(second).toEqual({ success: false, code: "RATE_LIMITED" });
  });

  it("prefers the first forwarded IP and falls back to the request IP", () => {
    expect(
      getRequestSource({
        ip: "10.0.0.4",
        headers: { "x-forwarded-for": "203.0.113.10, 10.0.0.4" },
      })
    ).toBe("203.0.113.10");
    expect(getRequestSource({ ip: "10.0.0.4", headers: {} })).toBe("10.0.0.4");
  });
});
