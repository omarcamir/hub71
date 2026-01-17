import { ContactForm } from "../components/sections/home/ContactForm/Schema";
import { ContactResponse } from "../types/ContactTypes";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export async function fetchSessions() {
  const res = await fetch(`${API_BASE}/sessions`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch sessions");
  }

  return res.json();
}


// Contact 

export async function submitContact(
  data: ContactForm
): Promise<ContactResponse> {
  const res = await fetch(`${API_BASE}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}