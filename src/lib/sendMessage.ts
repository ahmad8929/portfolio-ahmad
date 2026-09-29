import { profile } from "@/data/portfolio";

// Free key from https://web3forms.com (messages land in your inbox).
// Without it, sending falls back to opening the visitor's email app with everything pre-filled.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export type Message = { name: string; email: string; message: string; topic: string };

/** Returns "sent" when delivered via Web3Forms, "mailto" when it handed off to the mail app. */
export async function sendMessage({ name, email, message, topic }: Message): Promise<"sent" | "mailto"> {
  if (!WEB3FORMS_KEY) {
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      `${topic} — from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    return "mailto";
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `Portfolio: ${topic} — from ${name}`,
      from_name: name,
      name,
      email,
      topic,
      message,
    }),
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.message);
  return "sent";
}
