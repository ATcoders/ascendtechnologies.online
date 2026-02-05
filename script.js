*{margin:0;padding:0;box-sizing:border-box}
body{
  font-family:'Inter',sans-serif;
  background:#0b0f14;
  color:#fff;
  letter-spacing:0.2px;
}
a{text-decoration:none;color:inherit}

/* ================= NAVBAR ================= */
.navbar{
  display:flex;justify-content:space-between;align-items:center;
  padding:18px 8%;
  position:fixed;width:100%;
  background:rgba(10,15,20,0.7);
  backdrop-filter:blur(10px);
  z-index:1000
}
.logo{display:flex;align-items:center;gap:10px;font-weight:600}
.logo-box{
  width:36px;height:36px;border-radius:10px;
  background:linear-gradient(135deg,#00d4ff,#7b61ff);
  display:flex;align-items:center;justify-content:center;
  font-weight:700
}
.nav-links a{margin:0 14px;color:#aaa;font-size:14px}
.nav-links a:hover{color:#fff}



/* ================= HERO ================= */
.hero {
  position:relative;
  padding:180px 8% 140px;
  text-align:center;
  overflow:hidden;
}
.hero-bg {
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 30% 20%, rgba(0,212,255,0.15), transparent 40%),
    radial-gradient(circle at 70% 30%, rgba(123,97,255,0.15), transparent 40%),
    linear-gradient(#0b0f14, #0b0f14);
  z-index:0;
}
.hero-content {position:relative;z-index:1}
.hero-badge{
  display:inline-block;padding:8px 18px;border-radius:999px;
  border:1px solid rgba(0,212,255,0.4);
  color:#00d4ff;font-size:14px;margin-bottom:30px;
  background:rgba(0,212,255,0.05);
}
.hero h1{font-size:72px;font-weight:800;line-height:1.1;margin-bottom:25px}
.hero h1 span{
  background:linear-gradient(90deg,#00d4ff,#7b61ff);
  -webkit-background-clip:text;color:transparent
}
.hero-sub{
  max-width:720px;margin:0 auto 40px;
  color:#9aa4b2;font-size:18px;line-height:1.8;
}
.hero-buttons{display:flex;justify-content:center;gap:20px;flex-wrap:wrap}

/* Buttons */
.btn-primary{
  background:#00d4ff;color:#000;
  padding:16px 28px;border-radius:12px;
  font-weight:600;font-size:16px
}
.btn-secondary{
  border:1px solid rgba(255,255,255,0.15);
  padding:16px 28px;border-radius:12px;color:#fff;font-weight:500
}

/* ================= SERVICES ================= */
.services-section{
  padding:140px 8%;
  background:radial-gradient(circle at top center, rgba(0,212,255,0.08), transparent 60%);
}
.services-title{font-size:52px;font-weight:800;margin-bottom:20px}
.services-title span{
  background:linear-gradient(90deg,#00d4ff,#7b61ff);
  -webkit-background-clip:text;color:transparent
}
.services-sub{color:#9aa4b2;font-size:17px;margin-bottom:70px}
.services-grid{
  display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:35px
}
.service-card{
  background:linear-gradient(145deg,#0e141b,#0c1117);
  border-radius:18px;padding:35px;
  border:1px solid rgba(255,255,255,0.05);
  transition:.4s ease;overflow:hidden
}
.service-card:hover{
  transform:translateY(-8px);
  border-color:rgba(0,212,255,0.3);
  box-shadow:0 20px 60px rgba(0,0,0,0.6)
}
.icon-box{
  width:60px;height:60px;border-radius:16px;
  display:flex;align-items:center;justify-content:center;
  font-size:26px;margin-bottom:22px;
  box-shadow:0 10px 30px rgba(0,0,0,0.4)
}

/* ================= ABOUT ================= */
.about {padding:120px 8%}
.about-grid{display:flex;align-items:center;gap:80px;flex-wrap:wrap}
.about-images{position:relative;flex:1;min-width:340px;height:600px}
.img-wrapper{position:absolute;border-radius:20px;overflow:hidden;box-shadow:0 25px 60px rgba(0,0,0,0.45)}
.img-wrapper img{width:100%;height:100%;object-fit:cover}
.img1{width:60%;height:100%;left:0;top:0;z-index:1}
.img2{width:55%;height:42%;right:0;top:0;z-index:2}
.img3{width:55%;height:42%;right:0;bottom:0;z-index:2}
.experience-badge{
  position:absolute;bottom:20px;left:20px;
  background:#0e141b;padding:18px 26px;border-radius:14px;
  box-shadow:0 10px 40px rgba(0,0,0,0.6);z-index:3
}

/* ================= FEATURED WORK ================= */
.featured-work{padding:140px 8%}
.featured-title{font-size:56px;font-weight:800;margin-bottom:20px}
.featured-title span{
  background:linear-gradient(90deg,#00d4ff,#7b61ff);
  -webkit-background-clip:text;color:transparent
}
.featured-sub{color:#9aa4b2;margin-bottom:70px;font-size:17px}
.work-grid{
  display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:35px
}
.work-card{
  position:relative;border-radius:22px;overflow:hidden;
  height:320px;cursor:pointer;
  box-shadow:0 20px 60px rgba(0,0,0,0.6)
}
.work-card img{
  width:100%;height:100%;object-fit:cover;transition:.6s ease
}
.work-card:hover img{transform:scale(1.08)}
.work-info{
  position:absolute;bottom:0;left:0;width:100%;padding:30px;
  background:linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4), transparent)
}
.work-type{font-size:14px;color:#00d4ff;margin-bottom:8px;display:block}

/* ================= TESTIMONIALS ================= */
.testimonials-section{padding:140px 8%;text-align:center}
.testimonial-title{font-size:52px;font-weight:800;margin-bottom:60px}
.testimonial-title span{
  background:linear-gradient(90deg,#00d4ff,#7b61ff);
  -webkit-background-clip:text;color:transparent
}
.testimonial-card{
  max-width:750px;margin:0 auto;
  background:linear-gradient(145deg,#0e141b,#0c1117);
  border-radius:22px;padding:60px 50px 50px;
  border:1px solid rgba(255,255,255,0.05);
  box-shadow:0 20px 60px rgba(0,0,0,0.6)
}

/* ================= CONTACT ================= */
.contact-section{padding:140px 8%}
.contact-grid{display:flex;gap:80px;flex-wrap:wrap}
.contact-left h2{font-size:56px;font-weight:800;margin-bottom:20px}
.contact-left h2 span{
  background:linear-gradient(90deg,#00d4ff,#7b61ff);
  -webkit-background-clip:text;color:transparent
}
.contact-form-box{
  flex:1;min-width:340px;
  background:linear-gradient(145deg,#0e141b,#0c1117);
  padding:40px;border-radius:22px;
  border:1px solid rgba(255,255,255,0.05);
  box-shadow:0 20px 60px rgba(0,0,0,0.6)
}
.contact-form-box input,
.contact-form-box textarea{
  width:100%;padding:14px 16px;border-radius:12px;
  border:none;background:#111827;color:#fff;font-size:15px
}
.contact-form-box textarea{height:150px;resize:none;margin-bottom:20px}
.btn-primary.full{width:100%;padding:16px;font-size:16px}
