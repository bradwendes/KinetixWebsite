const attempts = new Map<string, { count: number; reset: number }>();
const allowedTypes = ['Performance', 'Event Support', 'Consultancy', 'Other'];

function clean(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);
}

export async function POST(request: Request) {
  const ip = request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
  const now = Date.now();
  const entry = attempts.get(ip);
  if (entry && entry.reset > now && entry.count >= 5) {
    return Response.json({ message: 'Too many attempts. Please wait a few minutes or email us directly.' }, { status: 429 });
  }
  attempts.set(ip, { count: entry && entry.reset > now ? entry.count + 1 : 1, reset: entry && entry.reset > now ? entry.reset : now + 600000 });

  let body: Record<string, unknown>;
  try {
    body = await request.json() as Record<string, unknown>;
  } catch {
    return Response.json({ message: 'Please check the form and try again.' }, { status: 400 });
  }

  if (clean(body.website, 200)) return Response.json({ message: 'Thank you.' });
  const data = {
    name: clean(body.name, 100),
    company: clean(body.company, 120),
    email: clean(body.email, 160),
    telephone: clean(body.telephone, 40),
    type: clean(body.type, 30),
    project: clean(body.project, 3000),
  };

  if (!data.name || !/^\S+@\S+\.\S+$/.test(data.email) || !allowedTypes.includes(data.type) || data.project.length < 20) {
    return Response.json({ message: 'Please complete your name, a valid email, enquiry type and project details.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || 'info@teamkinetix.co.uk';
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    return Response.json({ message: 'Online enquiries are not connected yet. Please email info@teamkinetix.co.uk.' }, { status: 503 });
  }

  const rows = Object.entries(data).map(([key, value]) => `<tr><th align="left" style="padding:8px;border-bottom:1px solid #ddd;text-transform:capitalize">${escapeHtml(key)}</th><td style="padding:8px;border-bottom:1px solid #ddd">${escapeHtml(value).replace(/\n/g, '<br>') || '—'}</td></tr>`).join('');
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${apiKey}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `Team Kinetix enquiry — ${data.type} — ${data.name}`,
      html: `<h1>New Team Kinetix enquiry</h1><table style="border-collapse:collapse">${rows}</table>`,
    }),
  });

  if (!response.ok) {
    return Response.json({ message: 'We could not send your enquiry. Please email info@teamkinetix.co.uk.' }, { status: 502 });
  }
  return Response.json({ message: 'Enquiry sent.' });
}
