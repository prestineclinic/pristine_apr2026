import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  Activity, 
  ChevronRight, 
  Shield, 
  Zap, 
  Users, 
  Award, 
  Star, 
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation
} from 'lucide-react';
import { SEO } from './components/SEO';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { BookingForm } from './components/BookingForm';
import { cn } from './lib/utils';

const services = [
  {
    title: "Physiotherapy",
    description: "Expert physiotherapy that restores movement and function after injury, illness, or surgery. Personalized treatment plans for lasting recovery.",
    icon: Activity,
    color: "bg-sky-50 text-sky-600",
    image: "/images/physiotherapie.jpg"
  },
  {
    title: "Osteopathy",
    description: "Holistic hands-on approach to healthcare that focuses on improving circulation, biomechanics, and the body's natural ability to heal itself.",
    icon: Shield,
    color: "bg-rose-50 text-rose-600",
    image: "/images/Osteopathy.jpg"
  },
  {
    title: "Neuro & Pediatric Rehab",
    description: "Specialized rehabilitation for patients with neurological or developmental conditions, supporting recovery and improving quality of life.",
    icon: Zap,
    color: "bg-indigo-50 text-indigo-600",
    image: "/images/neuro_paediatric_rehab.jpg"
  },
  {
    title: "PNF Therapy",
    description: "Proprioceptive Neuromuscular Facilitation techniques that enhance flexibility, strength, and coordination through guided stretching patterns.",
    icon: Activity,
    color: "bg-blue-50 text-blue-600",
    image: "/images/pnf.jpeg"
  },
  {
    title: "Pilates",
    description: "Low-impact exercise method focusing on core strength, posture correction, and overall body conditioning for injury prevention and wellness.",
    icon: Shield,
    color: "bg-green-50 text-green-600",
    image: "/images/pilates.jpg"
  }
];

const conditions = [
  { name: "Cervical Pain", description: "Neck stiffness and pain caused by poor posture, stress, or degenerative changes.", image: "/images/cervical.jpg" },
  { name: "Knee Osteoarthritis", description: "Joint wear and tear leading to pain, swelling, and reduced mobility in the knee.", image: "/images/kneeos.jpg" },
  { name: "Sciatica", description: "Radiating pain along the sciatic nerve from the lower back down through the leg.", image: "/images/sciatica.jpg" },
  { name: "Tennis Elbow", description: "Overuse injury causing pain on the outer side of the elbow and forearm.", image: "/images/tennis_elbow.jpg" },
  { name: "Frozen Shoulder", description: "Progressive stiffness and pain in the shoulder limiting range of motion.", image: "/images/frozenshoulder.jpg" },
  { name: "Lower Back Pain", description: "Chronic or acute pain in the lumbar region from prolonged sitting or injury.", image: "/images/cervical.jpg" },
  { name: "Ligament Injuries", description: "Sprains and tears in ligaments causing instability, swelling, and pain.", image: "/images/kneeos.jpg" },
];

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Patient",
    content: "The clinic staff is extremely professional and friendly. My physiotherapy sessions have been very effective and comfortable.",
    rating: 5
  },
  {
    name: "Sneha Patel",
    role: "Patient",
    content: "I was impressed with the personalized care here. The team helped me recover from my back pain faster than I expected.",
    rating: 5
  },
  {
    name: "Arjun Menon",
    role: "Patient",
    content: "Highly recommend this clinic! The therapists are knowledgeable, and the atmosphere is very supportive.",
    rating: 5
  }
];

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white selection:bg-primary/30">
        <SEO />
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50">
          {/* Rail Text */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block">
            <span className="rail-text">Est. 2025 • Pristine Clinic • Koramangala, Bengaluru</span>
          </div>

          <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 h-full">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-48 pb-32 lg:pt-56 lg:pb-40 space-y-12 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-slate-400" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-600">Premium Rehabilitation</span>
                </div>

                <h1 className="text-[12vw] lg:text-[8vw] font-display font-normal leading-[0.85] tracking-[-0.04em] text-slate-950 slam-in">
                  RECOVER<br />
                  <span className="font-medium italic text-sky-600">FASTER</span><br />
                  PERFORM<br />
                  BETTER.
                </h1>

                <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed max-w-lg">
                  We bridge the gap between clinical excellence and peak performance for athletes and digital professionals alike.
                </p>

                <div className="flex flex-wrap gap-6 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="bg-slate-950 text-white px-10 py-5 rounded-full font-medium text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl shadow-slate-900/20"
                  >
                    Book Consultation
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#services"
                    className="group flex items-center gap-4 px-6 py-5 font-medium text-sm uppercase tracking-widest text-slate-950"
                  >
                    Our Expertise
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-all">
                      <ArrowRight size={16} />
                    </div>
                  </motion.a>
                </div>
              </motion.div>

              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-300">
                <div>
                  <p className="text-3xl font-display font-normal text-slate-950">2k+</p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-700">Patients Treated</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-normal text-slate-950">15+</p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-700">Specialists</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-normal text-slate-950">98%</p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-700">Success Rate</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="lg:col-span-5 relative min-h-[60vh] lg:min-h-screen pt-32 lg:pt-40">
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-x-0 bottom-0 top-32 lg:top-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=1200"
                  alt="Physiotherapy treatment at Pristine Clinic, Koramangala Bengaluru"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/10" />
              </motion.div>

              {/* Floating Badge */}
              <motion.a
                href="#contact"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 right-12 glass-panel p-8 rounded-3xl max-w-[240px] hidden md:block cursor-pointer hover:shadow-xl transition-shadow"
              >
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-300 mb-2">Next Available</p>
                <p className="text-xl font-display font-medium text-slate-950">Today, 4:30 PM</p>
                <div className="h-[1px] w-full bg-slate-200 my-4" />
                <div className="flex items-center gap-2 text-sky-500">
                  <Clock size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Instant Booking</span>
                </div>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section className="section-padding bg-white">
          <div className="max-w-[1400px] mx-auto space-y-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-sky-600" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-sky-600">The Digital Athlete</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-normal leading-tight text-slate-950">
                  Built for the <span className="italic font-medium">Modern</span> Professional.
                </h2>
              </div>
              <p className="text-lg text-slate-700 font-normal leading-relaxed max-w-md pb-4">
                Long hours at the desk shouldn't mean long-term pain. We specialize in treating the unique physical constraints of the tech industry—from "tech-neck" to repetitive strain.
              </p>
            </div>

            <div className="bento-grid">
              {/* Large Feature */}
              <motion.div
                whileHover={{ y: -10 }}
                className="col-span-12 lg:col-span-8 bg-slate-950 rounded-[48px] overflow-hidden relative group min-h-[500px]"
              >
                <img
                  src="/images/posturepain.jpg"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000"
                  alt="Posture and ergonomics physiotherapy for desk professionals"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="relative p-12 h-full flex flex-col justify-end space-y-6">
                  <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center text-slate-950 shadow-2xl shadow-sky-500/40">
                    <Activity size={32} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-4xl font-display font-medium text-white">Posture & Ergonomics</h4>
                    <p className="text-slate-300 text-lg max-w-lg font-normal">
                      We analyze your workstation setup and biomechanics to eliminate the root causes of desk-related fatigue and chronic pain.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Secondary Feature */}
              <motion.div
                whileHover={{ y: -10 }}
                className="col-span-12 lg:col-span-4 bg-sky-50 rounded-[48px] p-12 flex flex-col justify-between"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-sky-600 shadow-sm">
                  <Shield size={32} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-3xl font-display font-medium text-slate-950">Evidence-Based</h4>
                  <p className="text-slate-700 font-normal leading-relaxed">
                    Every technique we use is backed by the latest clinical research in sports science and orthopedic medicine.
                  </p>
                </div>
              </motion.div>

              {/* Small Features */}
              <motion.div
                whileHover={{ y: -10 }}
                className="col-span-12 lg:col-span-4 bg-slate-100 rounded-[48px] p-10 space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-sm">
                    <Users size={20} />
                  </div>
                  <h4 className="text-xl font-display font-medium text-slate-950">1-on-1 Care</h4>
                </div>
                <p className="text-slate-700 font-normal text-sm leading-relaxed">
                  No overlapping appointments. Your therapist's full attention is on your recovery for the entire session.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                className="col-span-12 lg:col-span-8 bg-slate-200 rounded-[48px] overflow-hidden relative group min-h-[300px]"
              >
                <img
                  src="/images/Osteopathy.jpg"
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
                  alt="Manual therapy and osteopathy at Pristine Clinic Koramangala"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="relative p-10 h-full flex flex-col justify-center space-y-4">
                  <h4 className="text-3xl font-display font-medium text-slate-950">Manual Excellence</h4>
                  <p className="text-slate-700 font-normal max-w-md">
                    Hands-on techniques that go beyond standard exercises. We specialize in joint mobilization and myofascial release.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding bg-slate-50">
          <div className="max-w-[1400px] mx-auto space-y-24">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] w-12 bg-slate-300" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-600">Our Expertise</span>
                <div className="h-[1px] w-12 bg-slate-300" />
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-normal text-slate-950">Specialized Treatment</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-5 relative">
                    <div className="aspect-square rounded-full overflow-hidden mask-oval bg-slate-200">
                      <img
                        src={service.image}
                        alt={`${service.title} service at Pristine Clinic, Koramangala Bengaluru`}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className={cn("absolute top-0 right-0 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl", service.color)}>
                      <service.icon size={28} />
                    </div>
                  </div>
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-sky-600">0{i + 1}</p>
                      <h4 className="text-3xl font-display font-medium text-slate-950">{service.title}</h4>
                    </div>
                    <p className="text-slate-700 font-normal leading-relaxed text-lg">
                      {service.description}
                    </p>
                    <motion.a
                      whileHover={{ x: 10 }}
                      href="#contact"
                      className="inline-flex items-center gap-4 text-slate-950 font-medium group/link"
                    >
                      <span className="text-sm uppercase tracking-widest">Consultation</span>
                      <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover/link:bg-slate-950 group-hover/link:text-white transition-all">
                        <ArrowRight size={14} />
                      </div>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions We Treat */}
        <section id="about" className="section-padding bg-slate-950 text-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto space-y-16">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] w-12 bg-sky-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-sky-500">What We Treat</span>
                <div className="h-[1px] w-12 bg-sky-500" />
              </div>
              <h2 className="text-5xl md:text-8xl font-display font-normal leading-tight">
                Conditions We <br />
                <span className="italic font-medium text-sky-400">Specialize In.</span>
              </h2>
              <p className="text-xl text-slate-300 font-normal leading-relaxed">
                From chronic pain to post-injury rehabilitation, we provide expert care for a wide range of conditions.
              </p>
            </div>

            {/* Scrolling Conditions */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
              <div className="marquee-track" aria-hidden="false">
                {[...conditions, ...conditions].map((condition, i) => (
                  <div key={i} className="group flex-shrink-0 w-[280px]">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 mb-4">
                      <img
                        src={condition.image}
                        alt={`${condition.name} treatment at Pristine Clinic physiotherapy, Bengaluru`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        width="280"
                        height="210"
                      />
                    </div>
                    <h4 className="text-base font-display font-medium text-white mb-1">{condition.name}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{condition.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Immersive */}
        <section id="testimonials" className="relative min-h-screen flex items-center py-32 overflow-hidden bg-white">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-slate-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-100/50 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-[1400px] mx-auto px-6 w-full space-y-24">
            <div className="text-center space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Success Stories</span>
              <h2 className="text-5xl md:text-8xl font-display font-normal text-slate-950 tracking-tight">
                Trusted by <span className="italic font-medium">Thousands.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="glass-panel p-12 rounded-[56px] space-y-10 flex flex-col justify-between min-h-[450px]"
                >
                  <div className="space-y-6">
                    <div className="flex gap-1 text-sky-500">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-2xl font-display font-normal leading-relaxed text-slate-900">
                      "{t.content}"
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200">
                      <img
                        src={`https://i.pravatar.cc/150?u=physio${i}`}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-950 text-lg">{t.name}</h4>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Booking Section */}
        <section id="contact" className="section-padding relative overflow-hidden bg-slate-950">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500 blur-[150px] rounded-full" />
          </div>

          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-5 space-y-16">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-sky-500" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-sky-500">Contact</span>
                </div>
                <h3 className="text-5xl md:text-7xl font-display font-normal text-white leading-tight">
                  Let's Start Your <br />
                  <span className="italic font-medium text-sky-400">Recovery.</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-300">Location</p>
                  <p className="text-white font-normal">No 50 hig, KHB Colony, Koramangala 8th Block, Koramangala, Bengaluru, Karnataka 560095</p>
                </div>
                <div className="space-y-4">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-300">Phone</p>
                  <p className="text-white font-normal">+91 6364 635 943</p>
                </div>
                <div className="space-y-4">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-300">Email</p>
                  <p className="text-white font-normal">prestine.clinic@gmail.com</p>
                </div>
                <div className="space-y-4">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-300">Hours</p>
                  <p className="text-white font-normal">Mon-Sat: 10AM - 8:30PM</p>
                  <p className="text-white font-normal">Sun: 9AM - 1PM</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white rounded-[64px] p-12 md:p-20 shadow-2xl"
            >
              <BookingForm />
            </motion.div>
          </div>
        </section>

        {/* Health Resources */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-primary font-bold uppercase tracking-[0.2em] text-sm">Health Resources</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900">Stay Informed, Stay Healthy</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Article 1 */}
              <motion.div whileHover={{ y: -10 }} className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-6 shadow-md bg-slate-100">
                  <img src="/images/posturepain.jpg" alt="Desk Posture" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-primary shadow-sm">Posture</div>
                </div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-3">Tips & Prevention</p>
                <h4 className="text-2xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-3">Fix Your Desk Posture Before It Fixes You</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Hours of sitting with a hunched back and forward head can cause chronic neck and lower back pain. Keep your screen at eye level, feet flat on the floor, and take a 2-minute stretch break every 30 minutes. Strengthening your core and upper back muscles is the best long-term fix.</p>
              </motion.div>

              {/* Article 2 */}
              <motion.div whileHover={{ y: -10 }} className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-6 shadow-md bg-slate-100">
                  <img src="/images/pnf.jpeg" alt="Sports Warmup" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-primary shadow-sm">Sports</div>
                </div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-3">Warm-Up Guide</p>
                <h4 className="text-2xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-3">Why Skipping Warm-Up Is the #1 Cause of Sports Injuries</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Jumping straight into intense activity with cold muscles leads to strains, sprains, and tears. A proper warm-up of 10-15 minutes with dynamic stretches, light jogging, and sport-specific drills increases blood flow, loosens joints, and primes your nervous system for peak performance.</p>
              </motion.div>

              {/* Article 3 */}
              <motion.div whileHover={{ y: -10 }} className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-6 shadow-md bg-slate-100">
                  <img src="/images/kneeos.jpg" alt="Common Injuries" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-primary shadow-sm">Injury Prevention</div>
                </div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-3">Know the Risks</p>
                <h4 className="text-2xl font-display font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-3">5 Most Common Ways People Get Injured</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Poor posture at work, skipping warm-ups, overtraining without rest, lifting with bad form, and ignoring early pain signals — these are the top causes we see at the clinic. Most injuries are preventable with proper technique, regular stretching, and listening to your body before it's too late.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
        <Chatbot />

        {/* Floating Get Directions Button */}
        <motion.a
          href="https://maps.app.goo.gl/X6yLj491oM27uxEz6"
          target="_blank"
          rel="noopener noreferrer"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-6 z-50 glass-panel px-5 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-center gap-3 cursor-pointer group"
        >
          <div className="bg-sky-500 text-white p-2 rounded-xl group-hover:bg-sky-600 transition-colors">
            <Navigation size={18} />
          </div>
          <div className="hidden sm:block">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-600">Koramangala, Bengaluru</p>
            <p className="text-sm font-display font-medium text-slate-950">Get Directions</p>
          </div>
        </motion.a>
      </div>
    </HelmetProvider>
  );
}