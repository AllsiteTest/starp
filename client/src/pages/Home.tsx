import { motion } from "framer-motion";
import { 
  Leaf, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Gift,
  Phone,
  Mail,
  MapPin,
  Menu,
  X
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-foreground">
              Nexaura<span className="text-primary">Wellness</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('advantage')} className="text-sm font-medium hover:text-primary transition-colors">Why Us</button>
            <button onClick={() => scrollToSection('packages')} className="text-sm font-medium hover:text-primary transition-colors">Packages</button>
            <button onClick={() => scrollToSection('rewards')} className="text-sm font-medium hover:text-primary transition-colors">Rewards</button>
            <Button onClick={() => scrollToSection('contact')} variant="default" className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Contact Us
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-xl">
            <button onClick={() => scrollToSection('about')} className="text-left py-2 font-medium">About</button>
            <button onClick={() => scrollToSection('advantage')} className="text-left py-2 font-medium">Why Us</button>
            <button onClick={() => scrollToSection('packages')} className="text-left py-2 font-medium">Packages</button>
            <button onClick={() => scrollToSection('rewards')} className="text-left py-2 font-medium">Rewards</button>
            <Button onClick={() => scrollToSection('contact')} className="w-full bg-primary">Contact Us</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center pt-20">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
        </div>

        <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              <Award className="w-4 h-4" /> ISO 9001:2015 Certified
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
              Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">Wellness</span>,<br />
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Wealth</span>.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Your trusted partner in holistic health and financial freedom. Join the revolution with Nexaura and transform your life today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection('packages')} size="lg" className="rounded-full bg-primary hover:bg-emerald-700 text-lg h-14 px-8 shadow-lg shadow-primary/25">
                Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button onClick={() => scrollToSection('about')} variant="outline" size="lg" className="rounded-full text-lg h-14 px-8 border-2 hover:bg-secondary/50">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:block"
          >
            {/* Using Unsplash image for wellness/nature theme */}
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/50">
              {/* wellness healthy lifestyle nature sunlight */}
              <img 
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"
                alt="Wellness Lifestyle"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs">
                <div className="bg-amber-100 p-3 rounded-full">
                  <TrendingUp className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Rapid Growth</p>
                  <p className="text-sm text-muted-foreground">Join thousands of successful partners</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <Section id="about" background="muted">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              title="Our Story & Vision" 
              subtitle="Founded on principles of transparency, integrity, and genuine wellness."
              center={false}
              className="mb-8"
            />
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Incorporated on <strong className="text-foreground">19 March 2025</strong>, Nexaura Wellness Marketing Pvt. Ltd. was born from a desire to bridge the gap between premium wellness products and accessible financial opportunities.
              </p>
              <p>
                Under the visionary leadership of our directors, <strong className="text-foreground">Mrs. Nupur Sarkar Saha</strong> and <strong className="text-foreground">Mr. Kalyan Mandal</strong>, we are committed to building a community where health and wealth go hand in hand.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-border flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-bold text-sm">Startup India</p>
                  <p className="text-xs text-muted-foreground">Recognized Entity</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-border flex items-center gap-3">
                <Award className="w-8 h-8 text-amber-500" />
                <div>
                  <p className="font-bold text-sm">ISO 9001:2015</p>
                  <p className="text-xs text-muted-foreground">Quality Certified</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* team meeting business corporate */}
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop" alt="Corporate Team" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
            {/* handshake business partnership */}
            <img src="https://pixabay.com/get/g8eb03c02c1acd11c202eba714f002d7a8705c03ee4b36d31dce82af400861fd2b306af8e7b7ea3afb7fdb8840859d0ec6a54de31bdd62a87b0fbe5b1e48dfc29_1280.jpg" alt="Partnership" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
          </div>
        </div>
      </Section>

      {/* 5P Advantage */}
      <Section id="advantage">
        <SectionHeader 
          title="The 5P Advantage" 
          subtitle="What sets Nexaura apart in the direct selling industry."
        />
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: Leaf, title: "Product", desc: "Premium quality wellness formulations backed by science." },
            { icon: Target, title: "Plan", desc: "Simple, scalable, and lucrative compensation structure." },
            { icon: Gift, title: "Payout", desc: "Fair, transparent, and timely disbursement of earnings." },
            { icon: Users, title: "People", desc: "A culture of support, mentorship, and collective growth." },
            { icon: CheckCircle2, title: "Process", desc: "Fully digital, transparent, and compliant systems." },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl border border-border/50 shadow-lg shadow-black/5 hover:shadow-xl hover:border-primary/20 transition-all text-center group"
            >
              <div className="w-14 h-14 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 font-display">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Packages */}
      <Section id="packages" background="muted">
        <SectionHeader 
          title="Start Your Journey" 
          subtitle="Choose the package that fits your ambition."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Bronze */}
          <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
            <h3 className="text-2xl font-bold font-display text-slate-700">Bronze</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold text-foreground">750</span>
              <span className="text-muted-foreground ml-2">NV</span>
            </div>
            <p className="text-sm text-muted-foreground mb-8">Perfect for beginners starting their wellness journey.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary" /> Entry Level Access</li>
              <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary" /> Basic Training</li>
              <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-primary" /> Standard Support</li>
            </ul>
            <Button className="w-full rounded-xl" variant="outline" onClick={() => scrollToSection('contact')}>Get Started</Button>
          </div>

          {/* Silver - Featured */}
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-2xl scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-white/20 px-3 py-1 text-xs font-bold rounded-bl-xl">POPULAR</div>
            <h3 className="text-2xl font-bold font-display text-white">Silver</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold">1500</span>
              <span className="text-white/80 ml-2">NV</span>
            </div>
            <p className="text-sm text-white/80 mb-8">For those serious about building a sustainable business.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-accent" /> Enhanced Earnings</li>
              <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-accent" /> Leadership Training</li>
              <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-accent" /> Priority Support</li>
            </ul>
            <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-xl font-bold" onClick={() => scrollToSection('contact')}>Get Started</Button>
          </div>

          {/* Platinum */}
          <div className="bg-white rounded-3xl p-8 border border-amber-200 shadow-lg shadow-amber-900/5 hover:shadow-xl transition-all relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-100 rounded-full blur-xl"></div>
            <h3 className="text-2xl font-bold font-display text-amber-600">Platinum</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold text-foreground">3000</span>
              <span className="text-muted-foreground ml-2">NV</span>
            </div>
            <p className="text-sm text-muted-foreground mb-8">Maximum benefits for visionary leaders.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Max Income Potential</li>
              <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Exclusive Events Access</li>
              <li className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-amber-500" /> Dedicated Manager</li>
            </ul>
            <Button className="w-full rounded-xl border-amber-200 hover:bg-amber-50 text-amber-900" variant="outline" onClick={() => scrollToSection('contact')}>Get Started</Button>
          </div>
        </div>
      </Section>

      {/* Income Streams */}
      <Section id="rewards">
        <SectionHeader 
          title="Unmatched Rewards" 
          subtitle="We believe in generously rewarding your hard work and dedication."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Income Types */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display mb-6">Income Streams</h3>
            {[
              { title: "Referral Income", value: "30-50%", desc: "Earn massive commissions on every direct referral." },
              { title: "Generation Income", value: "16 Levels", desc: "Build a legacy with income that spans 16 generations deep." },
              { title: "Rank Royalty", value: "Lifetime", desc: "Achieve ranks and earn permanent royalty from company turnover." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-border shadow-sm flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                </div>
                <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Funds */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Gift className="w-32 h-32" />
            </div>
            <h3 className="text-2xl font-bold font-display mb-2">Achievement Funds</h3>
            <p className="text-slate-400 mb-8">Unlock lifestyle rewards as you grow.</p>
            
            <div className="grid grid-cols-2 gap-4">
              {['Mobile Fund', 'Laptop Fund', 'Bike Fund', 'Gold Fund', 'Car Fund', 'House Fund'].map((fund, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
                  <span className="font-medium text-sm">{fund}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" background="muted">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-border">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-primary text-primary-foreground relative">
              <div className="absolute inset-0 bg-emerald-900/20" />
              <div className="relative z-10">
                <h2 className="text-3xl font-display font-bold mb-6">Get in Touch</h2>
                <p className="text-white/80 mb-12">
                  Have questions about our products or business plan? Our team is ready to help you start your journey.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Office Address</h4>
                      <p className="text-white/80 text-sm">
                        Nexaura Wellness Marketing Pvt. Ltd.<br/>
                        Kolkata, West Bengal, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Email Us</h4>
                      <p className="text-white/80 text-sm">support@nexaura.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Call Us</h4>
                      <p className="text-white/80 text-sm">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h3 className="text-xl font-bold mb-6 text-foreground">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl text-white">Nexaura Wellness</span>
            </div>
            <p className="text-sm max-w-sm text-slate-400">
              Empowering individuals through health and wealth. Join the fastest growing wellness community in India.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-primary">About Us</button></li>
              <li><button onClick={() => scrollToSection('packages')} className="hover:text-primary">Business Plan</button></li>
              <li><button onClick={() => scrollToSection('rewards')} className="hover:text-primary">Legal</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © 2025 Nexaura Wellness Marketing Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const submitContact = useSubmitContact();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertContactMessage) => {
    submitContact.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} className="bg-slate-50 border-slate-200 focus:border-primary/50" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} className="bg-slate-50 border-slate-200 focus:border-primary/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+91..." {...field} value={field.value || ''} className="bg-slate-50 border-slate-200 focus:border-primary/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="How can we help you?" 
                  className="min-h-[100px] bg-slate-50 border-slate-200 focus:border-primary/50 resize-none" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-emerald-700 text-white font-semibold py-6 rounded-xl shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:-translate-y-0.5"
          disabled={submitContact.isPending}
        >
          {submitContact.isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
