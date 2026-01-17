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
