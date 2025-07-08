import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  Sparkles, 
  Mail, 
  FileText, 
  TrendingUp, 
  Clock,
  Check,
  Star,
  Users,
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: "AI Invoice Assistant",
      description: "Generate professional invoices in seconds with smart auto-fill and industry templates."
    },
    {
      icon: Clock,
      title: "Smart Follow-ups",
      description: "Automated AI reminders that adapt to client behavior and payment patterns."
    },
    {
      icon: FileText,
      title: "PDF Export",
      description: "Beautiful, branded invoices that reflect your business identity and professionalism."
    },
    {
      icon: Mail,
      title: "Branded Emails",
      description: "Send invoices with custom branding and track opens, views, and payment status."
    },
    {
      icon: TrendingUp,
      title: "Client Analytics",
      description: "Understand payment patterns, track revenue trends, and optimize your cash flow."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share invoices and track payments across your team with role-based permissions."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Freelance Designer",
      company: "Chen Design Studio",
      avatar: "SC",
      content: "Invoicy AI cut my invoicing time from hours to minutes. The AI follow-ups have improved my payment rate by 40%!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Consultant",
      company: "Rodriguez Consulting",
      avatar: "MR", 
      content: "The analytics dashboard gives me insights I never had before. I can see exactly when clients view invoices.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Agency Owner",
      company: "Digital Spark",
      avatar: "EW",
      content: "Professional, fast, and the AI reminders are incredible. Our cash flow has never been better.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 19,
      description: "Perfect for freelancers and solo entrepreneurs",
      features: [
        "Up to 10 invoices/month",
        "AI invoice generation", 
        "PDF export with branding",
        "Email sending",
        "Basic analytics",
        "Email support"
      ],
      highlighted: false
    },
    {
      name: "Pro", 
      price: 39,
      description: "Ideal for growing businesses and agencies",
      features: [
        "Unlimited invoices",
        "Advanced AI features",
        "Smart follow-up automation",
        "Advanced analytics",
        "Team collaboration",
        "Priority support",
        "Custom branding",
        "API access"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: 99,
      description: "For large teams and enterprise needs",
      features: [
        "Everything in Pro",
        "White-label solution",
        "Advanced integrations",
        "Dedicated account manager",
        "Custom features",
        "SLA guarantee",
        "Advanced security",
        "Training & onboarding"
      ],
      highlighted: false
    }
  ];

  const faqs = [
    {
      question: "How does the AI invoice generation work?",
      answer: "Our AI analyzes your business patterns, client history, and industry standards to auto-fill invoice details, suggest pricing, and even write service descriptions. It learns from your preferences to become more accurate over time."
    },
    {
      question: "Can I customize the invoice templates?",
      answer: "Absolutely! You can upload your logo, set brand colors, customize layouts, and create multiple templates for different types of services. Every invoice reflects your unique brand identity."
    },
    {
      question: "How do smart follow-ups work?",
      answer: "Our AI tracks client payment behavior and automatically sends personalized reminders at optimal times. It adjusts the tone and frequency based on the client relationship and payment history."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits. Your business data is protected with the highest security standards."
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Yes! We integrate with popular tools like QuickBooks, Stripe, PayPal, Slack, and many more. Our API also allows custom integrations for enterprise clients."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Invoicy AI</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground">Features</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground">Reviews</a>
              <Link to="/login" className="text-muted-foreground hover:text-foreground">Sign In</Link>
              <Link to="/signup">
                <Button className="gap-2">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a href="#features" className="block text-muted-foreground hover:text-foreground">Features</a>
              <a href="#pricing" className="block text-muted-foreground hover:text-foreground">Pricing</a>
              <a href="#testimonials" className="block text-muted-foreground hover:text-foreground">Reviews</a>
              <Link to="/login" className="block text-muted-foreground hover:text-foreground">Sign In</Link>
              <Link to="/signup" className="block">
                <Button className="w-full gap-2">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
                🚀 Trusted by 10,000+ businesses
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Create. Send. <br />
                <span className="text-yellow-300">Get Paid.</span> <br />
                Smarter.
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                AI-powered invoicing & reminders that save you hours every week. 
                Generate professional invoices, automate follow-ups, and get paid faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="xl" variant="secondary" className="gap-2 animate-bounce-in">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Watch Demo
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/70 mt-4">
                ✨ No credit card required • 14-day free trial
              </p>
            </div>

            <div className="animate-on-scroll lg:animate-fade-up">
              {/* Animated Invoice Mockup */}
              <Card className="card-elevated p-6 bg-white shadow-xl animate-glow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">INVOICE</h3>
                    <p className="text-muted-foreground">#INV-2024-001</p>
                  </div>
                  <Badge className="badge-paid">Paid</Badge>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold">Elena Thomas</p>
                      <p className="text-sm text-muted-foreground">elena@designstudio.com</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">Due: Aug 15, 2024</p>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Web Development</p>
                        <p className="text-sm text-muted-foreground">Landing page design & development</p>
                      </div>
                      <p className="text-2xl font-bold text-primary">$950</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-success">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">Smart Follow-Up Enabled</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge variant="secondary" className="mb-4">🎯 Everything you need</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Powerful features that save you time
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From AI-powered invoice generation to smart payment tracking, 
              we've built everything you need to manage your invoicing workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-feature animate-on-scroll group">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge variant="secondary" className="mb-4">⭐ Customer Love</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Trusted by thousands of businesses
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our customers say about Invoicy AI
            </p>
          </div>

          <div className="relative animate-on-scroll">
            <Card className="card-elevated p-8 max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-foreground mb-6 leading-relaxed">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                  <span className="font-semibold text-primary">
                    {testimonials[activeTestimonial].avatar}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-semibold">{testimonials[activeTestimonial].name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>
            </Card>

            {/* Testimonial Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge variant="secondary" className="mb-4">💰 Simple Pricing</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Choose the perfect plan for your business
            </h2>
            <p className="text-xl text-muted-foreground">
              Start free, upgrade when you grow. No hidden fees or surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`card-pricing animate-on-scroll ${
                  plan.highlighted ? 'border-primary shadow-xl scale-105' : ''
                }`}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-success" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/signup" className="w-full">
                  <Button 
                    className={`w-full ${plan.highlighted ? 'variant-hero' : ''}`}
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    {plan.highlighted ? 'Start Free Trial' : 'Get Started'}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge variant="secondary" className="mb-4">❓ Got Questions?</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 animate-on-scroll">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-elevated">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer">
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-4xl font-bold mb-6">
            Ready to get paid faster?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of businesses using Invoicy AI to streamline their invoicing process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="xl" variant="secondary" className="gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/invoice-builder">
              <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Try Demo
              </Button>
            </Link>
          </div>
          <p className="text-sm text-primary-foreground/70 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted-dark text-muted-foreground py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">Invoicy AI</span>
              </div>
              <p className="text-sm leading-relaxed">
                AI-powered invoicing that helps businesses get paid faster and manage cash flow better.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-foreground">Features</a></li>
                <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
                <li><Link to="/invoice-builder" className="hover:text-foreground">Demo</Link></li>
                <li><a href="#" className="hover:text-foreground">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground">Blog</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground">Status</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2024 Invoicy AI. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground">Twitter</a>
              <a href="#" className="hover:text-foreground">LinkedIn</a>
              <a href="#" className="hover:text-foreground">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;