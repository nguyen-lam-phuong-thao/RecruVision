import { useState } from 'react';

const faqs = [
  {
    question: 'How do I reset my password?',
    answer: 'Click on the "Forgot Password?" link on the login page and follow the instructions sent to your email.'
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can use the contact form below or email us at support@recruvision.com. Our team will respond within 24 hours.'
  },
  {
    question: 'Where can I find billing information?',
    answer: 'Billing information is available in your account settings under the "Billing" tab.'
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can change your plan anytime from your account dashboard.'
  },
  {
    question: 'How do I delete my account?',
    answer: 'Please contact support using the form below and our team will assist you with account deletion.'
  },
];

const resources = [
  { label: 'Getting Started Guide', url: '#' },
  { label: 'Video Tutorials', url: '#' },
  { label: 'Community Forum', url: '#' },
  { label: 'System Status', url: '#' },
  { label: 'Privacy Policy', url: '#' },
];

export const SupportCenter = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleFaqClick = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={{ background: '#F5F8FA', minHeight: '100vh', padding: 0 }}>
      <div style={{ padding: '32px 0 0 32px', fontWeight: 700, fontSize: 28, color: '#043873' }}>
        Support Center
      </div>
      <div style={{ margin: '32px 24px 0 24px', display: 'flex', gap: 40, flexWrap: 'wrap' }}>
        {/* FAQ Section */}
        <div style={{ flex: 2, minWidth: 340, maxWidth: 600 }}>
          <div style={{ fontWeight: 700, fontSize: 22, color: '#043873', marginBottom: 18 }}>Frequently Asked Questions</div>
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 4px rgba(4,56,115,0.06)', border: '1px solid #e5e7eb', padding: 0 }}>
            {faqs.map((faq, idx) => (
              <div key={faq.question} style={{ borderBottom: idx < faqs.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                <button
                  onClick={() => handleFaqClick(idx)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    padding: '22px 28px',
                    fontWeight: 600,
                    fontSize: 17,
                    color: '#043873',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                  }}
                >
                  {faq.question}
                  <span style={{ fontSize: 22, color: '#4F9CF9', transition: 'transform 0.2s', transform: openFaq === idx ? 'rotate(90deg)' : 'rotate(0deg)' }}>▶</span>
                </button>
                {openFaq === idx && (
                  <div style={{ background: '#F5F8FA', color: '#043873', padding: '0 28px 18px 28px', fontSize: 16, borderRadius: 8 }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Contact Form & Resources */}
        <div style={{ flex: 1, minWidth: 320, maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 4px rgba(4,56,115,0.06)', border: '1px solid #e5e7eb', padding: '28px 24px' }}>
            <div style={{ fontWeight: 700, fontSize: 20, color: '#043873', marginBottom: 12 }}>Contact Support</div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                style={{ padding: '12px 14px', borderRadius: 7, border: '1.5px solid #4F9CF9', fontSize: 16, color: '#043873', background: '#F5F8FA', fontWeight: 500 }}
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                style={{ padding: '12px 14px', borderRadius: 7, border: '1.5px solid #4F9CF9', fontSize: 16, color: '#043873', background: '#F5F8FA', fontWeight: 500 }}
              />
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                style={{ padding: '12px 14px', borderRadius: 7, border: '1.5px solid #4F9CF9', fontSize: 16, color: '#043873', background: '#F5F8FA', fontWeight: 500 }}
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
                rows={4}
                style={{ padding: '12px 14px', borderRadius: 7, border: '1.5px solid #4F9CF9', fontSize: 16, color: '#043873', background: '#F5F8FA', fontWeight: 500, resize: 'vertical' }}
              />
              <button type="submit" style={{ background: '#4F9CF9', color: '#fff', border: 'none', borderRadius: 7, padding: '12px 0', fontWeight: 700, fontSize: 17, marginTop: 6, cursor: 'pointer' }}>Send Message</button>
              {submitted && <div style={{ color: '#4F9CF9', fontWeight: 600, marginTop: 6 }}>Thank you! Your message has been sent.</div>}
            </form>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 1px 4px rgba(4,56,115,0.06)', border: '1px solid #e5e7eb', padding: '24px 20px' }}>
            <div style={{ fontWeight: 700, fontSize: 19, color: '#043873', marginBottom: 10 }}>Helpful Resources</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {resources.map(r => (
                <li key={r.label} style={{ marginBottom: 10 }}>
                  <a href={r.url} style={{ color: '#4F9CF9', fontWeight: 600, fontSize: 16, textDecoration: 'none' }}>{r.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
