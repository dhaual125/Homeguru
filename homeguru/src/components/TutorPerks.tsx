"use client";

const perks = [
  { stat: '₹999', label: 'One-Time\nRegistration Fee', desc: 'One flat fee. No hidden charges, no recurring costs. Start earning immediately.' },
  { stat: 'Weekly', label: 'Payments\nWithout Delay', desc: 'Receive tuition fees every week directly to your account. Zero chasing.' },
  { stat: '100%', label: 'Scheduling\nFlexibility', desc: 'Confirm or deny class requests on your own terms. Your time, your rules.' },
  { stat: '1 : 1', label: 'Private Online\nTuition', desc: 'Fully private, hassle-free sessions. Just you and your student, no distractions.' },
];

export default function TutorPerks() {
  return (
    <section className="w-full rounded-[32px] overflow-hidden" style={{ border: '1px solid #0a0a0a', background: '#f6f6f6' }}>
      {/* Header row */}
      <div style={{ padding: 'clamp(32px, 5vw, 56px) clamp(24px, 4vw, 56px) 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <p style={{ fontFamily: 'Matter, sans-serif', fontWeight: 500, fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#6d6d6d', margin: 0 }}>For Tutors</p>
        <h2 style={{ fontFamily: 'Season Mix, sans-serif', fontWeight: 400, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: '1.1', color: '#0a0a0a', margin: 0 }}>
          Perks of being a Tutor<br />at HomeGuru
        </h2>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: '#e7e7e7', margin: 'clamp(24px, 3vw, 40px) 0 0' }} />

      {/* Perks grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {perks.map((p, i) => (
          <div
            key={i}
            style={{
              padding: 'clamp(28px, 4vw, 48px) clamp(24px, 3vw, 40px)',
              borderRight: i < perks.length - 1 ? '1px solid #e7e7e7' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <span style={{ fontFamily: 'Season Mix, sans-serif', fontWeight: 600, fontSize: 'clamp(36px, 4vw, 52px)', lineHeight: 1, color: '#F97316', letterSpacing: '-1px' }}>{p.stat}</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{ fontFamily: 'Season Mix, sans-serif', fontWeight: 400, fontSize: '17px', color: '#0a0a0a', lineHeight: '1.3', margin: 0, whiteSpace: 'pre-line' }}>{p.label}</p>
              <p style={{ fontFamily: 'Matter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#6d6d6d', lineHeight: '1.6', margin: 0 }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
