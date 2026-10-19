"use client";
import { useEffect, useState } from "react";

const ceremonyDate = new Date("2026-11-07T10:00:00+07:00").getTime();
function getCountdown(now: number) {
  const distance = Math.max(0, ceremonyDate - now);
  return { days: Math.floor(distance / 86400000), hours: Math.floor(distance % 86400000 / 3600000), minutes: Math.floor(distance % 3600000 / 60000), seconds: Math.floor(distance % 60000 / 1000), passed: now >= ceremonyDate };
}
const address = "Lô E2a-7, Đường D1, Khu Công nghệ cao, Phường Tăng Nhơn Phú, TP. Hồ Chí Minh";
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Đại học FPT University HCMC, ${address}`)}`;

export default function Home() {
  const [now, setNow] = useState<number | null>(null);

  const [burst, setBurst] = useState(0);
  const [burstOrigin, setBurstOrigin] = useState({ x: 0, y: 0 });
  useEffect(() => { setNow(Date.now()); const timer = window.setInterval(() => setNow(Date.now()), 1000); return () => window.clearInterval(timer); }, []);
  function celebrate(event: React.MouseEvent<HTMLButtonElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setBurstOrigin({ x: bounds.left + bounds.width / 2, y: bounds.top + bounds.height / 2 });
    setBurst((value) => value + 1);
    window.setTimeout(() => setBurst((value) => Math.max(0, value - 1)), 2200);
  }
  const countdown = now === null ? null : getCountdown(now);
  const units: [string, string][] = [[String(countdown?.days ?? "—"), "NGÀY"], [countdown ? String(countdown.hours).padStart(2,"0") : "—", "GIỜ"], [countdown ? String(countdown.minutes).padStart(2,"0") : "—", "PHÚT"], [countdown ? String(countdown.seconds).padStart(2,"0") : "—", "GIÂY"]];
  return <main className="page-shell">
    <div className="glow glow-one" aria-hidden="true"/><div className="glow glow-two" aria-hidden="true"/>
    <header className="topbar"><a className="monogram" href="#home" aria-label="Về đầu trang">V<span>·</span>A</a><span className="topbar-label">MỘT CỘT MỐC ĐÁNG NHỚ</span><span className="topbar-year">2026</span></header>
    <section className="hero" id="home"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line"/> LỜI MỜI TỐT NGHIỆP</p><h1>Một hành trình<br/>khép lại, <em>một</em><br/><em>ước mơ</em> mở ra.</h1><p className="intro">Sau bao ngày nỗ lực, mình sắp chạm đến một cột mốc thật đặc biệt. Mình rất vui nếu bạn có thể đến chung vui trong ngày này.</p><a className="primary-link" href="#loi-moi">Cùng mình đếm ngược <span aria-hidden="true">↓</span></a><div className="hero-note"><span className="note-star">✳</span> THE NEXT CHAPTER STARTS HERE</div></div>
    <div className="hero-art" aria-label="Minh họa mũ tốt nghiệp giữa những tia nắng"><div className="sun-disc"/><div className="orbit orbit-outer"/><div className="orbit orbit-inner"/><span className="spark spark-a">✳</span><span className="spark spark-b">✦</span><span className="spark spark-c">✧</span><div className="cap cap-top"><span/></div><div className="cap cap-base"/><div className="tassel"><span/></div><div className="art-caption"><span>THE CLASS OF</span><strong>’26</strong></div><div className="art-index">01 — 07 / 11</div></div></section>
    <section className="invitation-card" id="loi-moi"><div className="card-topline"><span>THÂN MỜI BẠN</span><span className="tiny-flower">✳</span><span>CELEBRATE WITH ME</span></div><div className="card-content"><div className="graduate-info"><p className="section-kicker">NGƯỜI TỐT NGHIỆP</p><h2>Võ Lê<br/><em>Đức Anh</em></h2><div className="info-rule"/><p className="degree">KỸ THUẬT PHẦN MỀM</p><p className="student-id">MSSV <span>SE170497</span></p></div>
    <div className="event-info"><p className="section-kicker">NGÀY ĐẶC BIỆT</p><p className="date-month">THÁNG MƯỜI MỘT <span>· 2026</span></p><div className="date-lockup"><span>07</span><div><b>THỨ BẢY · 10:00 SÁNG</b><small>07.11.2026</small></div></div><div className="location-block"><span className="location-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.5"/></svg></span><div><b>ĐẠI HỌC FPT UNIVERSITY HCMC</b><p>{address}</p></div></div><a className="map-link" href={mapUrl} target="_blank" rel="noreferrer">XEM BẢN ĐỒ <span aria-hidden="true">↗</span></a></div></div><div className="card-bottomline"><span>YOUR PRESENCE MEANS THE WORLD TO ME</span><span>♡</span></div></section>
    <section className="countdown-section" aria-live="polite"><div className="countdown-heading"><p className="eyebrow"><span className="eyebrow-line"/> NGÀY MÌNH MONG CHỜ</p><h2>{countdown?.passed ? "Ngày đặc biệt đã đến!" : "Còn một chút nữa thôi."}</h2><p>Hẹn gặp bạn trong buổi lễ tốt nghiệp nhé.</p></div><div className="countdown" aria-label="Đếm ngược đến ngày 7 tháng 11 năm 2026">{units.map(([value,label]) => <div className="time-unit" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
    <div className="guest-controls"><button className="celebrate-button" onClick={celebrate}><span aria-hidden="true">✦</span> GỬI LỜI CHÚC MỪNG</button></div>
    {burst > 0 && <div className="confetti-layer" key={burst} aria-hidden="true">{Array.from({length: 76}, (_, index) => <i key={`${burst}-${index}`} style={{"--i": index, "--hue": `${(index * 47 + burst * 29) % 360}deg`, "--origin-x": `${burstOrigin.x}px`, "--origin-y": `${burstOrigin.y}px`} as React.CSSProperties}/>)}</div>}
    <footer className="footer"><span>VÕ LÊ ĐỨC ANH · SE170497</span><span>MADE WITH ♡ FOR A NEW BEGINNING</span></footer>
  </main>;
}
