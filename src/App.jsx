import React, { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Sparkles, Rocket, LayoutGrid, Settings, ExternalLink, ShieldCheck, Menu, X, CheckCircle, AlertCircle, Download, Smartphone, FileDown, Settings2, Play, ArrowRight, Shield, Clock, Package, Gift, DollarSign, Percent, Users, Info, Globe, Monitor, Lock, Wifi, Gamepad2, LogIn, HelpCircle, Zap, Star, Battery, RefreshCw, Trash2, MessageCircle, UserPlus } from "lucide-react";

export default function WebsiteLiveStarter() {
  const [logoUrl] = useState("/logo.png");
  const [playNowColor, setPlayNowColor] = useState("#dc2626"); // Default red
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Metadata configuration for each route
  const pageMetadata = {
    'home': {
      title: 'Juwa777 – Free Social Gaming App | Slots, Fish Games & Keno',
      description: 'Juwa 777 is a free social gaming app for Android and iOS. Browse free games including slots, fish shooting games, and keno. All gameplay is virtual and for entertainment purposes only. 18+.',
      image: 'https://www.juwa777.com/logo.png',
      url: 'https://www.juwa777.com/'
    },
    'games': {
      title: 'Juwa777 Games – Free Slots, Fish Shooting & Keno Games',
      description: 'Browse Juwa777 game library featuring slots, fish shooting games, and keno. Free social casino games available. Entertainment only. 18+ only.',
      image: 'https://www.juwa777.com/logo.png',
      url: 'https://www.juwa777.com/games'
    },
    'about': {
      title: 'About Juwa777 – Free Social Gaming Platform',
      description: 'Learn about Juwa777, a free social gaming platform offering slots, fish games, and keno. Entertainment purposes only. 18+.',
      image: 'https://www.juwa777.com/logo.png',
      url: 'https://www.juwa777.com/about'
    },
    'blog': {
      title: 'Juwa777 Blog – Gaming Tips, Guides & Updates',
      description: 'Read Juwa777 gaming blog for tips, guides, and updates about free social casino games. Learn about slots, fish games, and more.',
      image: 'https://www.juwa777.com/logo.png',
      url: 'https://www.juwa777.com/blog'
    },
    'blog-origin-of-juwa': {
      title: 'The Origin of Juwa: How Juwa777 Came to Life | Juwa777 Blog',
      description: 'Discover the fascinating story of how Juwa777 was born during the COVID-19 pandemic, from the Sanskrit word "Juwa" to becoming one of the largest online gaming platforms in the United States.',
      image: 'https://www.juwa777.com/blog imgae/welcome to fabulous juwa online.png',
      url: 'https://www.juwa777.com/blog-origin-of-juwa'
    },
    'blog-download-juwa-777': {
      title: 'Download Juwa 777 App: Complete Installation Guide | Juwa777 Blog',
      description: 'Step-by-step instructions to download and install Juwa 777 on your Android or iOS device. Get started with over 100 exciting games today.',
      image: 'https://www.juwa777.com/blog imgae/download juwa now.png',
      url: 'https://www.juwa777.com/blog-download-juwa-777'
    },
    'blog-juwa-no-deposit-bonus': {
      title: 'Juwa 777 No Deposit Bonus: Welcome Offers and Bonus Guide | Juwa777 Blog',
      description: 'Discover how to maximize your Juwa 777 experience with welcome bonuses, reload offers, and referral rewards. Learn about wagering requirements and bonus terms.',
      image: 'https://www.juwa777.com/blog imgae/ultra big win with juwa.png',
      url: 'https://www.juwa777.com/blog-juwa-no-deposit-bonus'
    },
    'blog-juwa-777-app-troubleshooting': {
      title: 'Juwa 777 App Troubleshooting: Common Issues and Solutions | Juwa777 Blog',
      description: 'Solve common installation and performance issues with the Juwa 777 app. Learn troubleshooting tips, optimization techniques, and how to get the best experience.',
      image: 'https://www.juwa777.com/blog imgae/boost you gaming fun with juwa.png',
      url: 'https://www.juwa777.com/blog-juwa-777-app-troubleshooting'
    },
    'JUWA2': {
      title: 'Juwa2: Complete Guide to Juwa2.0 Gaming Platform | Juwa777 Blog',
      description: 'Juwa2.0 guide with play without agent registration, play with agent Facebook support, promotions, and 100+ slots, fish games, and keno.',
      image: 'https://www.juwa777.com/juwa2/juwa2 logo.png',
      url: 'https://www.juwa777.com/JUWA2'
    },
    'contact': {
      title: 'Contact Juwa777 – Customer Support & Help',
      description: 'Contact Juwa777 support team for help with your free social gaming account. Get customer support and assistance.',
      image: 'https://www.juwa777.com/logo.png',
      url: 'https://www.juwa777.com/contact'
    },
    'faq': {
      title: 'Juwa777 FAQ – Frequently Asked Questions',
      description: 'Get help with Juwa777 login, admin access, app download, and gameplay questions. Find step-by-step guides and troubleshooting tips. Entertainment only. 18+.',
      image: 'https://www.juwa777.com/logo.png',
      url: 'https://www.juwa777.com/faq'
    },
    'relay': {
      title: 'Juwa Bros Relay – Official Customer Support & Freeplay Promos',
      description: 'Official Juwa customer support on Juwa Bros Relay. Sign up for your account, log in, and get Thursday freeplay promos for verified users.',
      image: 'https://www.juwa777.com/favicon.svg',
      url: 'https://www.juwa777.com/relay'
    }
  };

  // Path-based router for clean URLs (e.g., /home instead of /#home)
  const [route, setRoute] = useState("home");
  
  // Update meta tags when route changes
  useEffect(() => {
    const metadata = pageMetadata[route] || pageMetadata['home'];
    const baseUrl = 'https://www.juwa777.com';
    
    // Update document title
    document.title = metadata.title;
    
    // Update or create meta tags
    const updateMetaTag = (property, content) => {
      let element = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (property.startsWith('og:') || property.startsWith('article:')) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Update Open Graph tags
    updateMetaTag('og:title', metadata.title);
    updateMetaTag('og:description', metadata.description);
    updateMetaTag('og:image', metadata.image);
    updateMetaTag('og:url', metadata.url);
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:site_name', 'Juwa777');
    
    // Update Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', metadata.title);
    updateMetaTag('twitter:description', metadata.description);
    updateMetaTag('twitter:image', metadata.image);
    
    // Update description meta tag
    updateMetaTag('description', metadata.description);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', metadata.url);
  }, [route]);

  useEffect(() => {
    const sync = () => {
      // Get pathname and remove leading slash, default to 'home'
      let path = window.location.pathname.replace(/^\//, '');
      // Handle root path "/" as "home"
      if (path === '' || path === '/') {
        path = 'home';
      }
      // Legacy blog URL → clean /JUWA2 path
      if (path === 'blog-juwa2-casino') {
        window.history.replaceState({}, '', '/JUWA2');
        path = 'JUWA2';
      }
      const newRoute = path;
      console.log('Route changing to:', newRoute);
      setRoute(newRoute);
      // Handle hash navigation for intent sections
      const hash = window.location.hash;
      if (hash) {
        // Wait for route to render, then scroll to hash element
        const scrollToHash = () => {
          const element = document.querySelector(hash);
          if (element) {
            // Account for fixed header (dynamic offset)
            const headerOffset = document.querySelector('header')?.offsetHeight ?? 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            return true;
          }
          return false;
        };
        
        // Try immediately, then retry with requestAnimationFrame (max 10 tries)
        let attempts = 0;
        const tryScroll = () => {
          if (scrollToHash() || attempts >= 10) return;
          attempts++;
          requestAnimationFrame(tryScroll);
        };
        tryScroll();
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    sync();
    // Listen for popstate (back/forward buttons) and custom pushstate events
    window.addEventListener('popstate', sync);
    // Custom event for programmatic navigation
    window.addEventListener('pushstate', sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('pushstate', sync);
    };
  }, []);

  // Helper function to navigate programmatically
  const navigate = (path) => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // Handle root navigation
    const finalPath = cleanPath === 'home' ? '/' : `/${cleanPath}`;
    window.history.pushState({}, '', finalPath);
    window.dispatchEvent(new Event('pushstate'));
  };

  // Controls
  const [tagline, setTagline] = useState("BE A BIG WINNER WITH OUR HOT JACKPOT");
  const [heroDesc, setHeroDesc] = useState("Experience unmatched quality in gameplay and customer service. Play Juwa777 - the premier Juwa game platform with over 100 free social casino games.");
  const [dark, setDark] = useState(true);
  const [featureCount, setFeatureCount] = useState(3);
  const [accentHue, setAccentHue] = useState(226);
  const [footerNote, setFooterNote] = useState("© " + new Date().getFullYear() + " All rights reserved.");

  const accent = useMemo(() => `hsl(${accentHue} 84% 56%)`, [accentHue]);

  // ================= PAGES =================
  const HomePage = () => (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 md:px-10 py-16 md:py-24">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ aspectRatio: '16/9' }}
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        {/* Gradient overlays */}
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full blur-3xl opacity-30 z-20" style={{ background: accent }} />
        <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full blur-3xl opacity-20 z-20" style={{ background: accent }} />
        
        <div className="relative max-w-4xl z-30">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Juwa777 – Free Social Gaming App for Android & iOS
          </h1>
          <p className="mt-4 text-neutral-300 text-base md:text-lg">{heroDesc}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button style={{ background: playNowColor, borderColor: playNowColor }} className="text-white hover:opacity-90" onClick={() => window.open('https://www.juwabros.com', '_blank')}>
              <Sparkles className="h-4 w-4 mr-2" /> Play Now
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" onClick={() => window.open('https://dl.juwa777.com/', '_blank')}>Get Started</Button>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-12 bg-neutral-950">
        <div className="hidden md:grid grid-cols-3">
          {/* Welcome Bonus */}
          <div 
            className="relative h-64 overflow-hidden bg-gradient-to-b from-red-500 to-red-900 flex flex-col items-center justify-center text-center text-white transition-all duration-300 hover:scale-105 hover:brightness-110 hover:z-10 cursor-pointer"
            onMouseEnter={() => setPlayNowColor("#dc2626")} // red-600
            onMouseLeave={() => setPlayNowColor("#dc2626")} // default red
          >
            <div className="text-base opacity-90">1st Credit Bonus</div>
            <div className="mt-2 font-extrabold text-white leading-[1.1] tracking-tight [text-wrap:balance]" style={{fontSize:'clamp(28px,4.5vw,40px)'}} dangerouslySetInnerHTML={{ __html: '100% Welcome<br/>Bonus' }}></div>
            <div className="mt-6">
              <Button variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.open('https://www.facebook.com/juwaloot', '_blank')}>Join Now</Button>
            </div>
          </div>

          {/* Reload Bonus */}
          <div 
            className="relative h-64 overflow-hidden bg-gradient-to-b from-orange-500 to-orange-900 flex flex-col items-center justify-center text-center text-white transition-all duration-300 hover:scale-105 hover:brightness-110 hover:z-10 cursor-pointer"
            onMouseEnter={() => setPlayNowColor("#ea580c")} // orange-600
            onMouseLeave={() => setPlayNowColor("#dc2626")} // default red
          >
            <div className="text-base opacity-90">2nd Credit Bonus</div>
            <div className="mt-2 font-extrabold text-white leading-[1.1] tracking-tight [text-wrap:balance]" style={{fontSize:'clamp(28px,4.5vw,40px)'}}>50% Reload Bonus</div>
            <div className="mt-6">
              <Button variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.open('https://www.facebook.com/share/1Bie9cjV6W/?mibextid=wwXIfr', '_blank')}>Join Now</Button>
            </div>
          </div>

          {/* Referral Bonus */}
          <div 
            className="relative h-64 overflow-hidden bg-gradient-to-b from-blue-500 to-blue-900 flex flex-col items-center justify-center text-center text-white transition-all duration-300 hover:scale-105 hover:brightness-110 hover:z-10 cursor-pointer"
            onMouseEnter={() => setPlayNowColor("#2563eb")} // blue-600
            onMouseLeave={() => setPlayNowColor("#dc2626")} // default red
          >
            <div className="text-base opacity-90">Play together and enjoy</div>
            <div className="mt-2 font-extrabold text-white leading-[1.1] tracking-tight [text-wrap:balance]" style={{fontSize:'clamp(28px,4.5vw,40px)'}}>$5 Referral Bonus</div>
            <div className="mt-6">
              <Button variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.open('https://www.facebook.com/juwaloot', '_blank')}>Join Now</Button>
            </div>
          </div>
        </div>

        {/* Mobile Swipeable Carousel */}
        <div className="md:hidden">
          {(() => {
            const banners = [
              {
                bg: "from-red-500 to-red-900",
                subtitle: "1st Credit Bonus",
                title: "100% Welcome<br/>Bonus",
                desc: ""
              },
              {
                bg: "from-orange-500 to-orange-900", 
                subtitle: "2nd Credit Bonus",
                title: "50% Reload Bonus",
                desc: ""
              },
              {
                bg: "from-blue-500 to-blue-900",
                subtitle: "Play together and enjoy", 
                title: "$5 Referral Bonus",
                desc: ""
              }
            ];
            
            const [currentIndex, setCurrentIndex] = React.useState(0);
            const [startX, setStartX] = React.useState(0);
            const [isDragging, setIsDragging] = React.useState(false);
            
            const handleTouchStart = (e) => {
              setStartX(e.touches[0].clientX);
              setIsDragging(true);
            };
            
            const handleTouchEnd = (e) => {
              if (!isDragging) return;
              setIsDragging(false);
              
              const endX = e.changedTouches[0].clientX;
              const diff = startX - endX;
              
              if (Math.abs(diff) > 50) {
                if (diff > 0) {
                  // Swipe left - next banner
                  setCurrentIndex((prev) => (prev + 1) % banners.length);
                } else {
                  // Swipe right - previous banner
                  setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
                }
              }
            };
            
            return (
              <div className="relative overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  {banners.map((banner, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className={`relative h-64 overflow-hidden bg-gradient-to-b ${banner.bg} flex flex-col items-center justify-center text-center text-white`}>
                        <div className="text-base opacity-90">{banner.subtitle}</div>
                        <div className="mt-2 font-extrabold text-white leading-[1.1] tracking-tight [text-wrap:balance]" style={{fontSize:'clamp(28px,4.5vw,40px)'}} dangerouslySetInnerHTML={{ __html: banner.title }}></div>
                        {banner.desc && <div className="mt-3 text-sm opacity-90">{banner.desc}</div>}
                        <div className="mt-6">
                          <Button variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => {
                            if (index === 0) {
                              // 1st Deposit Offer - Juwa Loot
                              window.open('https://www.facebook.com/juwaloot', '_blank');
                            } else if (index === 1) {
                              // 2nd Deposit Offer - Juwa Jackpot
                              window.open('https://www.facebook.com/share/1Bie9cjV6W/?mibextid=wwXIfr', '_blank');
                            } else if (index === 2) {
                              // Referral Bonus - Juwa Loot
                              window.open('https://www.facebook.com/juwaloot', '_blank');
                            }
                          }}>Join Now</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Dots indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                  {banners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
        
        {/* Bonus Disclaimer */}
        <div className="text-center mt-4 px-6">
          <p className="text-sm text-neutral-400">Quick in-app rewards and smooth account support. For entertainment purposes only.</p>
        </div>
      </section>

      {/* Introduction Section - Expanded Content */}
      <section className="px-6 md:px-10 py-12 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Welcome to Juwa777 – Your Free Social Gaming Destination</h2>
          <div className="space-y-4 text-neutral-300 text-base md:text-lg leading-relaxed">
            <p>
              Juwa 777 is a premier free social gaming platform and mobile gaming app designed for Android and iOS devices. Juwa offers an extensive collection of over 100 exciting casino games and arcade games, including classic slot games, thrilling fish shooting games, and engaging keno experiences. All gameplay is completely free and designed for entertainment purposes only. Experience the best in social casino gaming and free online games.
            </p>
            <p>
              Whether you're a fan of traditional slot machines, enjoy the action-packed excitement of fish shooting games, or prefer the strategic gameplay of keno, Juwa has something for every gaming enthusiast. Our mobile gaming platform provides a safe, secure, and enjoyable gaming experience where players can enjoy casino-style games, arcade games, and social gaming without any real-money gambling or cash payouts. Play free games on your smartphone or tablet.
            </p>
            <p>
              To play Juwa777 games, download and install our app on your Android or iOS device. Once you have the app installed, you can access our entire game library and start playing. Simply download the app, create your free account, and begin exploring our vast collection of social gaming experiences. Browse our <a href="/games" onClick={(e) => { e.preventDefault(); navigate('games'); }} className="text-red-400 hover:text-red-300 underline">complete games library</a>, learn more <a href="/about" onClick={(e) => { e.preventDefault(); navigate('about'); }} className="text-red-400 hover:text-red-300 underline">about our platform</a>, check our <a href="/faq" onClick={(e) => { e.preventDefault(); navigate('faq'); }} className="text-red-400 hover:text-red-300 underline">FAQ page</a> for common questions, or <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('contact'); }} className="text-red-400 hover:text-red-300 underline">contact our support team</a> if you need help.
            </p>
          </div>
        </div>
      </section>

      {/* Official Support Carousel */}
      <section className="px-6 md:px-10 py-10 bg-neutral-950">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-6">Our Official Facebook Support</h2>
        {(() => {
          const slides = [
            { img: "/partner1.png", blocks: [
              { title: "Dig your daily bonus", desc: "Collect your daily bonus and start spinning!", cta: "JOIN THE FUN" }
            ]},
            { img: "/partner2.png", blocks: [
              { title: "First-time player?", desc: "Dive in and claim your juicy welcome offer!", cta: "JOIN NOW" }
            ]},
            { img: "/juwa jackpots.jpg", blocks: [
              { title: "Big wins spotlight", desc: "Follow for highlights, tips and massive wins.", cta: "FOLLOW NOW" }
            ]},
          ];
          const [i, setI] = React.useState(0);
          const go = (d) => setI((prev) => (prev + d + slides.length) % slides.length);
          const startX = React.useRef(0);
          const onTouchStart = (e) => { startX.current = e.touches[0].clientX; };
          const onTouchEnd = (e) => {
            const dx = e.changedTouches[0].clientX - startX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          };
          const current = slides[i];
          return (
            <div className="relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <button aria-label="Previous" onClick={() => go(-1)} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 text-white items-center justify-center z-10">‹</button>
              <button aria-label="Next" onClick={() => go(1)} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/40 hover:bg-black/60 text-white items-center justify-center z-10">›</button>
              <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-neutral-900 grid md:grid-cols-2">
                <div className="flex items-center justify-center bg-black/20" style={{ aspectRatio: '16/9', minHeight: '280px' }}>
                  <img src={current.img} alt="" className="h-full w-full object-cover p-2" style={{ width: '100%', height: '100%' }} onError={(e)=>{e.currentTarget.src='/placeholder.jpg';}} />
                </div>
                <div className={`p-6 md:p-10 text-white flex flex-col justify-center items-start gap-5 min-h-[280px] relative ${
                  i === 0 ? 'bg-gradient-to-br from-green-400 to-green-800' : 
                  i === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-800' : 
                  'bg-gradient-to-br from-amber-700 to-amber-900'
                }`}>
                  {/* Decorative images in bottom right */}
                  <div className={`absolute bottom-4 ${
                    i === 0 ? 'right-4 w-32 h-32 md:w-40 md:h-40' : 
                    i === 1 ? 'right-4 w-40 h-40 md:w-48 md:h-48' : 
                    '-right-2 w-48 h-48 md:w-56 md:h-56'
                  }`}>
                    <img 
                      src={i === 0 ? "/coins.png" : i === 1 ? "/cup.png" : "/joker.png"} 
                      alt={i === 0 ? "Gaming coins icon for Juwa777 social casino games" : i === 1 ? "Trophy cup icon for Juwa777 gaming rewards" : "Joker card icon for Juwa777 casino games"} 
                      className="w-full h-full object-contain opacity-80" 
                      onError={(e)=>{e.currentTarget.style.display='none'}} 
                    />
                  </div>
                  {current.blocks.map((b, idx) => (
                    <div key={idx} className={`${idx > 0 ? 'mt-8' : ''} relative z-10`}>
                      <div className="font-extrabold tracking-tight text-white text-5xl md:text-6xl lg:text-7xl" style={{lineHeight:1.1}}>{b.title}</div>
                      <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed max-w-md">{b.desc}</p>
                      <div className="mt-6">
                        <Button 
                          variant="secondary" 
                          className="bg-white text-neutral-900 hover:opacity-90 text-sm md:text-base px-4 py-2"
                          onClick={() => {
                            if (b.cta === "JOIN THE FUN") {
                              window.open('https://www.facebook.com/share/1Bie9cjV6W/?mibextid=wwXIfr', '_blank');
                            } else if (b.cta === "JOIN NOW") {
                              window.open('https://www.facebook.com/juwaloot', '_blank');
                            } else if (b.cta === "FOLLOW NOW") {
                              window.open('https://www.facebook.com/share/1Bie9cjV6W/?mibextid=wwXIfr', '_blank');
                            }
                          }}
                        >
                          {b.cta}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                {slides.map((_, idx) => (
                  <button key={idx} onClick={() => setI(idx)} className={`h-2.5 w-2.5 rounded-full ${idx===i ? 'bg-white' : 'bg-white/40'}`} />
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Game Categories Section - Expanded */}
      <section className="px-6 md:px-10 py-12 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">Explore Our Game Categories</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-neutral-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-3">Slot Games</h3>
              <p className="text-neutral-300 leading-relaxed">
                Experience the excitement of classic and modern slot games with various themes, paylines, and bonus features. Our slot collection includes everything from traditional fruit machines to adventure-themed slots with immersive graphics and engaging gameplay mechanics. <a href="/games" onClick={(e) => { e.preventDefault(); navigate('games'); }} className="text-red-400 hover:text-red-300 underline">View all slot games</a>.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-3">Fish Shooting Games</h3>
              <p className="text-neutral-300 leading-relaxed">
                Dive into action-packed fish shooting games where skill and strategy combine for thrilling gameplay. These games feature vibrant underwater worlds, various fish species with different point values, and exciting bonus rounds that keep the action fast-paced and engaging. <a href="/games" onClick={(e) => { e.preventDefault(); navigate('games'); }} className="text-red-400 hover:text-red-300 underline">Explore fish games</a>.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-3">Keno Games</h3>
              <p className="text-neutral-300 leading-relaxed">
                Enjoy the strategic gameplay of keno, a lottery-style game where you select numbers and watch as winning numbers are drawn. Our keno games offer multiple betting options and various game modes to suit different playing styles and preferences. <a href="/games" onClick={(e) => { e.preventDefault(); navigate('games'); }} className="text-red-400 hover:text-red-300 underline">Try keno games</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Games Section */}
      <section className="px-6 md:px-10 py-12 bg-neutral-950">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-8">Our Games</h2>
        <div className="max-w-7xl mx-auto relative">
          {/* First Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-4">
            {[
              "7 Burning HOT.png",
              "777 Jackpot Inferno.png", 
              "Big Bass Bonzana.png",
              "Buffalo Keno.png",
              "Cash Cow.png",
              "Deep Sea Predator.png",
              "Diamond Riches.png",
              "Epic Summer.png"
            ].map((game, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-neutral-800/50 hover:bg-neutral-700/70 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="aspect-square p-2">
                  <img 
                    src={`/Games/${game}`} 
                    alt={`${game.replace('.png', '')} - Free ${game.includes('Keno') ? 'keno' : game.includes('Fish') || game.includes('Bass') || game.includes('Sea') || game.includes('Dragon') || game.includes('Fishing') ? 'fish shooting' : 'slot'} game on Juwa777 social gaming app`}
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => { e.currentTarget.src = '/placeholder.jpg'; }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl"></div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl">
                  <p className="text-white text-xs font-medium truncate">{game.replace('.png', '')}</p>
                </div>
              </div>
            ))}
          </div>
          
          
          {/* Second Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              "Fortune Lion.png",
              "Happy Fishing.png",
              "Huge Cash.png",
              "King Kong's Rampage.png",
              "Mega Money Machine.png",
              "Perfect Purple Jackpots.png",
              "Rainbow Riches.png",
              "Wild Royale Gold.png"
            ].map((game, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-neutral-800/50 hover:bg-neutral-700/70 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="aspect-square p-2">
                  <img 
                    src={`/Games/${game}`} 
                    alt={`${game.replace('.png', '')} - Free ${game.includes('Keno') ? 'keno' : game.includes('Fish') || game.includes('Bass') || game.includes('Sea') || game.includes('Dragon') || game.includes('Fishing') ? 'fish shooting' : 'slot'} game on Juwa777 social gaming app`}
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => { e.currentTarget.src = '/placeholder.jpg'; }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl"></div>
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl">
                  <p className="text-white text-xs font-medium truncate">{game.replace('.png', '')}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Games Button */}
          <div className="text-center mt-8">
            <Button 
              onClick={() => setRoute('games')}
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-3 text-lg transition-all duration-300"
            >
              View All Games
            </Button>
          </div>
        </div>
      </section>

      {/* Category tiles */}
      <section id="categories" className="px-6 md:px-10 py-8 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Free social slots and casino-style games</h2>
            <p className="text-neutral-300 text-base md:text-lg">Juwa777 offers over 200 social casino games to choose from. Play the best Juwa777 game collection including slots, fish games, keno, and instant win games. There is always something new to play on Juwa777.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-b from-pink-500 to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center text-center min-h-[200px]">
              <img src="/slots.png" alt="Free slot games and casino slots on Juwa777 mobile gaming app" className="h-28 w-28 md:h-32 md:w-32 object-contain" />
              <div className="mt-6 text-lg md:text-2xl font-extrabold tracking-tight">SLOTS</div>
            </div>
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-b from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center text-center min-h-[200px]">
              <img src="/instantwin.png" alt="Instant win games and quick play casino games on Juwa777" className="h-28 w-28 md:h-32 md:w-32 object-contain" />
              <div className="mt-6 text-lg md:text-2xl font-extrabold tracking-tight">INSTANT WIN</div>
          </div>
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-b from-sky-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center text-center min-h-[200px]">
              <img src="/keno.png" alt="Free keno games and lottery-style games on Juwa777 social gaming platform" className="h-28 w-28 md:h-32 md:w-32 object-contain" />
              <div className="mt-6 text-lg md:text-2xl font-extrabold tracking-tight">KENO</div>
            </div>
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-b from-emerald-600 to-lime-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center text-center min-h-[200px]">
              <img src="/fish.png" alt="Fish shooting games and arcade-style action games on Juwa777" className="h-28 w-28 md:h-32 md:w-32 object-contain" />
              <div className="mt-6 text-lg md:text-2xl font-extrabold tracking-tight">FISH GAMES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety (circle illustrations) */}
      <section id="safety" className="px-6 md:px-10 py-14 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Safe. Fast. Fair.</h2>
            <p className="text-neutral-300 text-lg md:text-xl">Play with Confidence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="mx-auto h-36 w-36 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-[0_10px_30px_rgba(16,185,129,0.35)] overflow-hidden">
                <img src="/secure.png" alt="Secure Play" className="h-44 w-44 object-cover" onError={(e)=>{e.currentTarget.style.display='none'}} />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold tracking-wide">SECURE PLAY</h3>
              <p className="mt-2 text-neutral-300 leading-relaxed max-w-xs mx-auto">Bank‑grade encryption and account protection keep your play safe.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-36 w-36 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-[0_10px_30px_rgba(245,158,11,0.35)] overflow-hidden">
                <img src="/payouts.png" alt="Fast Rewards" className="h-44 w-44 object-cover" onError={(e)=>{e.currentTarget.style.display='none'}} />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold tracking-wide">FAST REWARDS</h3>
              <p className="mt-2 text-neutral-300 leading-relaxed max-w-xs mx-auto">Quick in-app rewards and virtual credit processing with trusted, transparent processing.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-36 w-36 rounded-full bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center shadow-[0_10px_30px_rgba(99,102,241,0.35)] overflow-hidden">
                <img src="/rng.png" alt="Fair RNG" className="h-44 w-44 object-cover" onError={(e)=>{e.currentTarget.style.display='none'}} />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold tracking-wide">FAIR RNG</h3>
              <p className="mt-2 text-neutral-300 leading-relaxed max-w-xs mx-auto">Independently tested randomness for fair outcomes every spin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section className="px-6 md:px-10 py-12 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">How to Get Started with Juwa777</h2>
          <div className="space-y-6">
            <div className="bg-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center">1</span>
                Download the App
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Download and install the Juwa777 app on your Android or iOS device. Visit our website to get the download link for your device. The app is required to access and play all games. Our app is optimized for mobile devices, ensuring a smooth and responsive gaming experience on smartphones and tablets.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center">2</span>
                Create Your Free Account
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Once the app is installed, sign up for a free account through our simple registration process. Provide basic information to create your profile, and you'll be ready to start playing within minutes. No credit card or payment information is required.
              </p>
            </div>
            <div className="bg-neutral-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center">3</span>
                Start Playing Games
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                Browse our extensive <a href="/games" onClick={(e) => { e.preventDefault(); navigate('games'); }} className="text-red-400 hover:text-red-300 underline">game library</a> and choose from slots, fish games, keno, and more. Each game offers unique features, themes, and gameplay mechanics. All games are free to play and designed for entertainment purposes only. Need help? Check our <a href="/faq" onClick={(e) => { e.preventDefault(); navigate('faq'); }} className="text-red-400 hover:text-red-300 underline">FAQ page</a> or <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('contact'); }} className="text-red-400 hover:text-red-300 underline">contact support</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const GamesPage = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');
    
    const filters = ['All', 'Slots', 'Fish', 'Keno', 'Hot', 'New'];
    
    // Game images from public/games/ folder
    const allGames = [
      '45 President.png',
      '7 Burning HOT.png',
      '7 Crystal Clovers.png',
      '777 Jackpot Inferno.png',
      '777 Lucky.png',
      'Big Bass Bonzana.png',
      'Black & White Double.png',
      'Bonus Hot 7\'s.png',
      'Buffalo Keno.png',
      'Cash Cow.png',
      'Cash Zone.png',
      'Cherry Valentine.png',
      'Deep Sea Predator.png',
      'Deep Sea.png',
      'Diamond Riches.png',
      'Dragon Treasure.png',
      'Epic Summer.png',
      'Epic Vault.png',
      'Farm Life.png',
      'Fortune Lion.png',
      'Fruit Mary.png',
      'Glitz.png',
      'Happy Fishing.png',
      'Hex Gems.png',
      'Hexa Keno.png',
      'Huge Cash.png',
      'King Kong\'s Rampage.png',
      'Life of Luxury.png',
      'Loteria Don.png',
      'Mega Money Machine.png',
      'Megaball Deluxe.png',
      'Megs 10x Pay.png',
      'Moolah Bingo.png',
      'Oh my Girls.png',
      'Perfect Purple Jackpots.png',
      'Rainbow Riches.png',
      'Simple Triple.png',
      'Spin Golden Wheel.png',
      'Super Stars.png',
      'Superball Keno.png',
      'Wild Royale Gold.png',
      'Wild West.png'
    ];

    // Filter games based on selected category
    const getFilteredGames = () => {
      switch (selectedFilter) {
        case 'Keno':
          return allGames.filter(game => 
            game.includes('Buffalo Keno') || 
            game.includes('Hexa Keno') || 
            game.includes('Superball Keno')
          );
        case 'Hot':
          return allGames.filter(game => 
            game.includes('Wild West') || 
            game.includes('Oh my Girls') || 
            game.includes('King Kong\'s Rampage') || 
            game.includes('Cash Cow') || 
            game.includes('Buffalo Keno') || 
            game.includes('Moolah Bingo')
          );
        case 'Fish':
          return allGames.filter(game => 
            game.includes('Cash Cow') || 
            game.includes('Big Bass Bonzana') || 
            game.includes('Deep Sea') || 
            game.includes('Deep Sea Predator') || 
            game.includes('Dragon Treasure') || 
            game.includes('Happy Fishing')
          );
        case 'New':
          return allGames.filter(game => 
            game.includes('Simple Triple') || 
            game.includes('Loteria Don') || 
            game.includes('Spin Golden Wheel') || 
            game.includes('Megaball Deluxe')
          );
        case 'Slots':
          // All games except Fish and Keno games
          const fishGames = ['Cash Cow', 'Big Bass Bonzana', 'Deep Sea', 'Deep Sea Predator', 'Dragon Treasure', 'Happy Fishing'];
          const kenoGames = ['Buffalo Keno', 'Hexa Keno', 'Superball Keno'];
          return allGames.filter(game => 
            !fishGames.some(fish => game.includes(fish)) && 
            !kenoGames.some(keno => game.includes(keno))
          );
        default:
          return allGames;
      }
    };

    const gameImages = getFilteredGames();
    
    return (
    <section className="px-6 md:px-10 py-12">
        <div className="w-full">
          {/* Page H1 */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-6 text-center">
            Explore Juwa777 Games – Slots, Fish Games & Keno
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 text-center max-w-3xl mx-auto">
            Discover over 100 games available in the Juwa 777 app. Browse our selection of slots, fish shooting games, and keno for entertainment purposes only. Download the Juwa777 app to access the full games library on Android & iOS.
          </p>
          <div className="text-center mb-8">
            <a 
              href="/blog-download-juwa-777" 
              onClick={(e) => { e.preventDefault(); navigate('blog-download-juwa-777'); }}
              className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Download Juwa777 App
            </a>
          </div>

          {/* Games Introduction Content */}
          <div className="max-w-4xl mx-auto mb-12 space-y-6">
            <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">Explore Our Free Social Gaming Collection</h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                Juwa777 offers over 100 games in the app, featuring an extensive library of casino-style social games designed for entertainment purposes only. Our mobile gaming platform features three main categories: classic slot games, action-packed fish shooting games, and strategic keno games. All games are completely free to play. Download the Juwa 777 app to access and play all games on your Android or iOS device.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Whether you enjoy the spinning reels of slot machines, the fast-paced action of fish shooting games, or the strategic number selection of keno, our diverse game collection has something for every gaming enthusiast. Each game category offers unique gameplay mechanics, engaging graphics, and entertaining features that provide hours of fun. Experience the best in free social gaming.
              </p>
            </div>

            {/* Game Categories Detailed */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] border-2 border-pink-400/30">
                <h3 className="text-xl font-bold mb-3">Slot Games</h3>
                <p className="text-white/90 leading-relaxed text-sm mb-4">
                  Experience classic and modern slot games with various themes, paylines, and bonus features. Our slot collection includes traditional fruit machines, adventure-themed slots, and progressive jackpot games. Each slot game features immersive graphics, engaging sound effects, and exciting bonus rounds.
                </p>
                <a href="/games" onClick={(e) => { e.preventDefault(); navigate('games'); }} className="text-red-200 hover:text-white underline text-sm font-medium inline-block">View all slot games →</a>
              </div>
              <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-lime-500 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] border-2 border-emerald-400/30">
                <h3 className="text-xl font-bold mb-3">Fish Shooting Games</h3>
                <p className="text-white/90 leading-relaxed text-sm mb-4">
                  Dive into action-packed fish shooting games where skill and strategy combine for thrilling gameplay. These arcade-style games feature vibrant underwater worlds, various fish species with different point values, and exciting bonus rounds. Perfect for players who enjoy fast-paced, skill-based gaming experiences.
                </p>
                <a href="/games" onClick={(e) => { e.preventDefault(); navigate('games'); }} className="text-red-200 hover:text-white underline text-sm font-medium inline-block">Explore fish games →</a>
              </div>
              <div className="bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-all hover:scale-[1.02] border-2 border-sky-400/30">
                <h3 className="text-xl font-bold mb-3">Keno Games</h3>
                <p className="text-white/90 leading-relaxed text-sm mb-4">
                  Enjoy the strategic gameplay of keno, a lottery-style game where you select numbers and watch as winning numbers are drawn. Our keno games offer multiple betting options, various game modes, and different number selection strategies. Ideal for players who prefer thoughtful, strategic gameplay.
                </p>
                <a href="/games" onClick={(e) => { e.preventDefault(); navigate('games'); }} className="text-red-200 hover:text-white underline text-sm font-medium inline-block">Try keno games →</a>
              </div>
            </div>

            {/* How to Play Section */}
            <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">How to Play Juwa777 Games</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Download the App</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                      First, download and install the Juwa 777 app on your Android or iOS device. The app is required to access and play all games. Visit our website to get the download link for your device.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Choose Your Game Category</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                      Once the app is installed, browse our game collection using the filter buttons. Select from All Games, Slots, Fish Games, Keno, Hot Games, or New Games to find the perfect gaming experience for you.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Select and Play a Game</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                      Click on any game to start playing. Each game displays its name and RTP (Return to Player) percentage. All games are free to play and designed for entertainment purposes only. No real-money gambling or cash payouts are available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                  selectedFilter === filter
                    ? 'font-bold text-red-600'
                    : 'text-neutral-600 dark:text-neutral-300 hover:underline'
                }`}
              >
                {filter}
              </button>
        ))}
      </div>
          
          {/* Games Grid */}
          {gameImages.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {gameImages.map((image, index) => {
                const gameName = image.replace('.png', '');
                const rtp = Math.floor(Math.random() * 7) + 91; // Random RTP between 91-97%
                
                return (
                  <div key={index} className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700">
                    {/* Game Image */}
                    <div className="aspect-square relative" style={{ width: '100%', aspectRatio: '1/1' }}>
                      <img
                        src={`/Games/${image}`}
                        alt={`${gameName} - Free ${selectedFilter === 'All' ? 'social casino' : selectedFilter.toLowerCase()} game on Juwa777 mobile gaming app for Android and iOS`}
                        className="w-full h-full object-contain"
                        style={{ width: '100%', height: '100%', display: 'block' }}
                        loading="lazy"
                        onError={(e) => {
                          console.log('Failed to load image:', `/Games/${image}`);
                          e.target.style.display = 'none';
                        }}
                        onLoad={() => {
                          console.log('Successfully loaded image:', `/Games/${image}`);
                        }}
                      />
                    </div>
                    
                    {/* Game Info */}
                    <div className="px-2 py-1 flex items-center justify-between">
                      <div className="text-white text-sm font-medium truncate flex-1">
                        {gameName}
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-500 ml-2 flex-shrink-0">
                        RTP {rtp}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Game Features Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-6">Why Play Juwa777 Games?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="text-red-600">✓</span> Free to Play
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                    All games are completely free to play. No registration fees, no hidden costs, and no payment required. Enjoy unlimited gameplay for entertainment purposes only. Experience free online games and social casino gaming at no cost.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="text-red-600">✓</span> Easy App Access
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                    Download our mobile gaming app on your Android or iOS device to access all games. Once installed, you can start playing immediately. The mobile app provides optimized performance and the best gaming experience on smartphones and tablets.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="text-red-600">✓</span> Diverse Game Selection
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                    Choose from over 100 different casino games and arcade games across multiple categories. From classic slot games to action-packed fish shooting games and strategic keno games, there's something for every player and gaming style.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="text-red-600">✓</span> Mobile Optimized
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                    All games are optimized for mobile devices, ensuring smooth gameplay on smartphones and tablets. Enjoy the same great gaming experience on any screen size. Perfect for mobile gaming and on-the-go entertainment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const RelayPage = () => (
    <>
      <section className="relative overflow-hidden px-6 md:px-10 py-14 md:py-20 bg-gradient-to-br from-[#8d63ff] via-[#6b4fd4] to-[#4c78ff]">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full blur-3xl opacity-30 bg-white" />
        <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full blur-3xl opacity-20 bg-white" />
        <div className="relative max-w-6xl mx-auto text-center text-white z-10">
          <div className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6 border border-white/20">
            Official Customer Support
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Juwa Bros Relay
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Private messaging, beautifully simple. Connect with the official Juwa support team, get verified, and never miss a weekly promo.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 py-12 bg-neutral-50 dark:bg-neutral-900/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <img src="/favicon.svg" alt="Juwa Bros Relay logo" className="h-28 md:h-36 w-28 md:w-36 mb-6 drop-shadow-lg" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white text-center mb-3">
              Juwa Bros Relay – Official Support Hub
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-700 dark:text-neutral-300 text-center mb-6">
              Private messaging, beautifully simple
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Button
                style={{ background: '#6b4fd4', borderColor: '#6b4fd4' }}
                className="text-white hover:opacity-90 px-8 py-2 text-base"
                onClick={() => window.open('https://www.juwabros.com/signup', '_blank')}
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Create account
              </Button>
              <Button
                variant="outline"
                className="border-[#8d63ff] text-[#6b4fd4] dark:text-[#a78bfa] hover:bg-[#8d63ff]/10 px-8 py-2 text-base"
                onClick={() => window.open('https://www.juwabros.com/login', '_blank')}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Sign in
              </Button>
            </div>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed text-center max-w-3xl">
              Juwa Bros Relay is the official Juwa customer support channel. Sign up for your account, message our team securely, and stay connected for account help, verification updates, and exclusive announcements — including the weekly Thursday freeplay promo for verified users.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Card className="bg-gradient-to-br from-violet-500 to-violet-700 border-violet-600 overflow-hidden">
              <CardContent className="p-8 min-h-[180px] flex flex-col justify-between">
                <MessageCircle className="h-10 w-10 text-white/90 mb-4" />
                <div>
                  <div className="font-semibold text-white text-xl mb-2">Official Support</div>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Message the Juwa team directly for account help, verification, promos, and gameplay questions — all in one private inbox.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-indigo-500 to-indigo-700 border-indigo-600 overflow-hidden">
              <CardContent className="p-8 min-h-[180px] flex flex-col justify-between">
                <ShieldCheck className="h-10 w-10 text-white/90 mb-4" />
                <div>
                  <div className="font-semibold text-white text-xl mb-2">Verified Access</div>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Staff review every signup before you can sign in. Use your legal first and last name so approval is not delayed.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500 to-purple-800 border-purple-600 overflow-hidden">
              <CardContent className="p-8 min-h-[180px] flex flex-col justify-between">
                <Gift className="h-10 w-10 text-white/90 mb-4" />
                <div>
                  <div className="font-semibold text-white text-xl mb-2">Thursday Freeplay</div>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Every Thursday, a freeplay promo is announced on Relay for verified users. Stay signed in so you never miss it.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white mb-3">How to Get Started</h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Follow these steps to create your Relay account and connect with official Juwa customer support.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '1', icon: UserPlus, title: 'Create your account', desc: 'Sign up with your legal name, email, phone, and username.' },
                { step: '2', icon: Clock, title: 'Wait for approval', desc: 'Staff review every signup. Access requires approval before you can sign in.' },
                { step: '3', icon: LogIn, title: 'Log in to Relay', desc: 'Once approved, sign in and open your private inbox.' },
                { step: '4', icon: Gift, title: 'Catch Thursday promos', desc: 'Verified users receive the weekly freeplay promo announcement every Thursday.' },
              ].map(({ step, icon: Icon, title, desc }) => (
                <Card key={step} className="border border-neutral-200/60 dark:border-neutral-800/60 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center text-violet-700 dark:text-violet-300 font-bold">
                        {step}
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 bg-violet-100 dark:bg-violet-900/30 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60 h-full">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                  <MessageCircle className="h-7 w-7 text-violet-600" />
                  Official Juwa customer support
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                  Relay is Juwa Bros&apos; private messaging platform built for customer support. Instead of scattered emails or social DMs, you get a secure, dedicated channel to reach the team that knows Juwa inside and out.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                  Whether you need help with your account, have a verification question, or want details about promos and gameplay, Relay keeps everything in one place.
                </p>
                <ul className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
                  {['Account and login assistance', 'Verification and approval updates', 'Promo and freeplay announcements', 'General Juwa gameplay questions'].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-violet-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-neutral-200/60 dark:border-neutral-800/60 h-full">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                  <UserPlus className="h-7 w-7 text-violet-600" />
                  Sign up for your account
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                  Create your Relay account on Juwa Bros to connect with support. You will join as a customer — use your legal first and last name; nicknames or fake names may delay approval.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
                  One customer account per phone number. After staff approve your signup, you can sign in and start messaging the team right away.
                </p>
                <div className="space-y-3">
                  <Button
                    style={{ background: '#6b4fd4', borderColor: '#6b4fd4' }}
                    className="text-white hover:opacity-90 w-full"
                    onClick={() => window.open('https://www.juwabros.com/signup', '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Create account
                  </Button>
                  <Button
                    variant="outline"
                    className="border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 w-full"
                    onClick={() => window.open('https://www.juwabros.com/login', '_blank')}
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Sign in
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <Card className="overflow-hidden border border-violet-200 dark:border-violet-800">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-8 md:p-10 flex flex-col justify-center text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 rounded-full text-sm font-semibold w-fit mb-4">
                    <Zap className="h-4 w-4" />
                    Weekly Promo
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Thursday Freeplay Promo</h2>
                  <p className="text-white/90 leading-relaxed mb-6">
                    Every Thursday, a freeplay promo is announced on Juwa Bros Relay for verified users. Sign up, complete staff approval, and stay signed in so you never miss the weekly announcement.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
                      <div className="text-2xl font-bold">Every</div>
                      <div className="text-sm text-white/80">Thursday</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center">
                      <div className="text-2xl font-bold">Verified</div>
                      <div className="text-sm text-white/80">Users only</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 text-center hidden sm:block">
                      <div className="text-2xl font-bold">Freeplay</div>
                      <div className="text-sm text-white/80">Promo</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 md:p-10 flex flex-col justify-center bg-white dark:bg-neutral-800">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Don&apos;t miss out</h3>
                  <div className="space-y-4 mb-6">
                    {[
                      { icon: CheckCircle, text: 'Sign up and use your legal name for faster approval' },
                      { icon: ShieldCheck, text: 'Complete staff verification to unlock promo access' },
                      { icon: Clock, text: 'Check Relay every Thursday for the latest freeplay announcement' },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-start gap-3">
                        <Icon className="h-5 w-5 text-violet-600 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">{text}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    style={{ background: '#6b4fd4', borderColor: '#6b4fd4' }}
                    className="text-white hover:opacity-90 w-full sm:w-auto"
                    onClick={() => window.open('https://www.juwabros.com/signup', '_blank')}
                  >
                    <Gift className="h-4 w-4 mr-2" />
                    Create account
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-6 text-center">Why use Juwa Bros Relay?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Lock, iconBg: 'bg-violet-100 dark:bg-violet-900/30', title: 'Private & secure', desc: 'Your conversations stay in a dedicated support inbox — not public social feeds.' },
                { icon: Users, iconBg: 'bg-indigo-100 dark:bg-indigo-900/30', title: 'Official Juwa team', desc: 'Connect directly with staff who handle Juwa accounts, promos, and support.' },
                { icon: Smartphone, iconBg: 'bg-purple-100 dark:bg-purple-900/30', title: 'Works on any device', desc: 'Access Relay from your phone, tablet, or desktop browser anytime.' },
                { icon: Star, iconBg: 'bg-fuchsia-100 dark:bg-fuchsia-900/30', title: 'Exclusive promos', desc: 'Verified users get first access to Thursday freeplay announcements.' },
              ].map(({ icon: Icon, iconBg, title, desc }) => (
                <Card key={title} className="border border-neutral-200/60 dark:border-neutral-800/60 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className={`flex-shrink-0 w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="h-6 w-6 text-violet-600" />
                    </div>
                    <h3 className="font-bold text-neutral-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="mb-8 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-violet-600" />
                Related Help on Juwa777
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                Need help with the app or gameplay? These Juwa777 pages may also be useful:
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('contact'); }} className="text-red-600 hover:text-red-700 underline">
                    Contact Juwa777 Support
                  </a>
                </li>
                <li>
                  <a href="/faq" onClick={(e) => { e.preventDefault(); navigate('faq'); }} className="text-red-600 hover:text-red-700 underline">
                    Juwa777 FAQ
                  </a>
                </li>
                <li>
                  <a href="/blog-download-juwa-777" onClick={(e) => { e.preventDefault(); navigate('blog-download-juwa-777'); }} className="text-red-600 hover:text-red-700 underline">
                    Download Juwa 777 App Guide
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 border border-violet-200 dark:border-violet-800 mb-8">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-3">Ready to connect with Juwa support?</h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                Create your Relay account today, get verified by staff, and join verified users who receive Thursday freeplay promos on Juwa Bros Relay.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  style={{ background: '#6b4fd4', borderColor: '#6b4fd4' }}
                  className="text-white hover:opacity-90 px-8"
                  onClick={() => window.open('https://www.juwabros.com/signup', '_blank')}
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  Create account
                </Button>
                <Button
                  variant="outline"
                  className="border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 px-8"
                  onClick={() => window.open('https://www.juwabros.com/login', '_blank')}
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign in
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2">
                <Info className="h-5 w-5" />
                Important
              </h3>
              <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed">
                Access to Juwa Bros Relay requires staff approval. Use your legal first and last name when signing up. One customer account per phone number. Juwa777 is a free social gaming platform for entertainment purposes only. 18+ only. Play responsibly.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
  const AboutPage = () => (
    <section className="px-6 md:px-10 py-12 bg-neutral-50 dark:bg-neutral-900/40">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <img src={logoUrl} alt="Juwa777 logo - free social gaming app" className="h-32 md:h-40 w-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white text-center mb-4">About Juwa777 – Your Free Social Gaming Platform</h1>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white text-center">Safe, Fair & Rewarding</h2>
        </div>
        <div className="mt-6 space-y-6">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">Welcome to Juwa777</h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              Juwa777 is a premier free social gaming platform and mobile gaming app designed for Android and iOS devices. Our online gaming platform offers over 100 exciting casino games and arcade games, including classic slot games, action-packed fish shooting games, and strategic keno experiences. All games are completely free to play and designed for entertainment purposes only. Experience the best in social casino gaming and free online games.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              We provide fun, skill-based gaming experiences that bring players nonstop entertainment. Our mobile gaming platform features engaging gameplay mechanics, immersive graphics, and exciting bonus features. With features like Spin Wheel bonuses, cashback rewards, and hourly lucky draws, Juwa777 delivers a fun and rewarding gaming experience every time you play. Explore our <a href="/games" onClick={(e) => { e.preventDefault(); navigate('games'); }} className="text-red-600 hover:text-red-700 underline">game collection</a> or read our <a href="/blog" onClick={(e) => { e.preventDefault(); navigate('blog'); }} className="text-red-600 hover:text-red-700 underline">blog</a> for gaming tips and updates.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
              Our mission is to provide safe, accessible, and engaging gameplay with unmatched customer service. We believe that gaming should be fun, fair, and accessible to everyone. That's why we've created a platform where players can enjoy casino-style games without any real-money gambling or cash payouts. If you have questions, check our <a href="/faq" onClick={(e) => { e.preventDefault(); navigate('faq'); }} className="text-red-600 hover:text-red-700 underline">FAQ page</a> or <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('contact'); }} className="text-red-600 hover:text-red-700 underline">contact our support team</a>.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              We're committed to delivering fast performance, fair RNG (Random Number Generator) systems, and secure gameplay. Our platform is designed to comply with sweepstakes laws, ensuring that all players can enjoy our games responsibly. We prioritize player safety, fair play, and responsible gaming practices.
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">What Makes Us Different</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Free Social Gaming</h3>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                  Unlike traditional online casinos, Juwa777 offers completely free social gaming experiences and free online games. All gameplay is virtual and designed for entertainment purposes only. Enjoy social casino gaming without any real-money gambling.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Easy App Access</h3>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                  To play Juwa777 games, you'll need to download and install our app on your Android or iOS device. Once installed, you can access our entire game library and start playing. The app provides the best gaming experience with optimized performance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Diverse Game Collection</h3>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                  With over 100 games across multiple categories, we offer something for every gaming enthusiast. From classic slot machines to action-packed fish shooting games and strategic keno, our diverse collection ensures endless entertainment.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Mobile Optimized</h3>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                  Our platform is fully optimized for mobile devices, ensuring smooth gameplay on smartphones and tablets. Enjoy the same great gaming experience whether you're on Android or iOS.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-green-500 to-green-700 border-green-600">
            <CardContent className="p-8 flex items-center justify-between min-h-[140px]">
              <div className="flex-1 pr-6">
                <div className="font-semibold text-white text-lg">Safe</div>
                <p className="text-sm text-white/90 mt-3">Register through our official Facebook account, install the app, fund your account, and start winning.</p>
              </div>
              <img src="/how it works.png" alt="Safe and secure gaming platform with account protection" className="w-28 h-28 flex-shrink-0" />
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500 to-blue-700 border-blue-600">
            <CardContent className="p-8 flex items-center justify-between min-h-[140px]">
              <div className="flex-1 pr-6">
                <div className="font-semibold text-white text-lg">Fair</div>
                <p className="text-sm text-white/90 mt-3">Designed to comply with sweepstakes laws; no purchase necessary offers available.</p>
              </div>
              <img src="/fair.png" alt="Fair gaming with RNG and sweepstakes compliance" className="w-28 h-28 flex-shrink-0" />
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-500 to-orange-700 border-orange-600">
            <CardContent className="p-8 flex items-center justify-between min-h-[140px]">
              <div className="flex-1 pr-6">
                <div className="font-semibold text-white text-lg">Rewarding</div>
                <p className="text-sm text-white/90 mt-3">Fast verification and multiple withdrawal options for eligible prize wins.</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/pouts.png" alt="Fast and secure prize redemption options" className="w-36 h-36 flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Community Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-left">
            <h3 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white">Join the Juwa community!</h3>
            <p className="text-neutral-700 dark:text-neutral-300 text-lg">Be part of a friendly community, discover exclusive offers, and enjoy competitions with fellow players.</p>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6">
              <div className="text-white/80 text-sm mb-2">OVER</div>
              <div className="text-white text-5xl md:text-6xl font-bold">1,000,000</div>
              <div className="text-white/90 text-lg">Fans on Facebook</div>
            </div>
            
            <div>
              <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors" onClick={() => window.open('https://www.facebook.com/share/1Bie9cjV6W/?mibextid=wwXIfr', '_blank')}>
                JOIN OUR COMMUNITY
              </button>
            </div>
            
            <div className="flex gap-6">
              <div className="w-10 h-10 border-2 border-neutral-300 dark:border-neutral-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="w-10 h-10 border-2 border-neutral-300 dark:border-neutral-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="w-10 h-10 border-2 border-neutral-300 dark:border-neutral-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-neutral-600 dark:text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
            </div>
      </div>
          
          <div className="flex justify-center">
            <img src="/community.png" alt="Juwa Community" className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );

  const BlogPage = () => {
    const blogPosts = [
      {
        id: 'juwa2-casino',
        title: 'Juwa2: Complete Guide to Juwa2.0 Gaming Platform',
        category: 'Platform Guides',
        excerpt: 'Discover Juwa2 and Juwa2.0 - a comprehensive guide to the gaming platform, features, games, and how to get started. Learn about Juwa2 slots and casino games.',
        date: 'January 13, 2025',
        readTime: '8 min read',
        image: '/juwa2/juwa2 logo.png'
      },
      {
        id: 'origin-of-juwa',
        title: 'The Origin of Juwa: How Juwa777 Came to Life',
        category: 'Company Story',
        excerpt: 'Discover the fascinating story of how Juwa777 was born during the COVID-19 pandemic, from the Sanskrit word "Juwa" to becoming one of the largest online gaming platforms in the United States.',
        date: 'December 18, 2025',
        readTime: '6 min read',
        image: '/blog imgae/welcome to fabulous juwa online.png'
      },
      {
        id: 'download-juwa-777',
        title: 'Download Juwa 777 App: Complete Installation Guide for Android and iOS',
        category: 'Getting Started',
        excerpt: 'Step-by-step instructions to download and install the latest version of Juwa 777 on your Android or iOS device. Get started with over 100 exciting games today.',
        date: 'January 7, 2025',
        readTime: '5 min read',
        image: '/blog imgae/download juwa now.png'
      },
      {
        id: 'juwa-no-deposit-bonus',
        title: 'Juwa 777 No Deposit Bonus: Welcome Offers and Bonus Guide',
        category: 'Bonuses & Promotions',
        excerpt: 'Discover how to maximize your Juwa 777 experience with welcome bonuses, reload offers, and referral rewards. Learn about wagering requirements and bonus terms.',
        date: 'January 8, 2025',
        readTime: '6 min read',
        image: '/blog imgae/ultra big win with juwa.png'
      },
      {
        id: 'juwa-777-app-troubleshooting',
        title: 'Juwa 777 App Troubleshooting: Common Issues and Solutions',
        category: 'Getting Started',
        excerpt: 'Solve common installation and performance issues with the Juwa 777 app. Learn troubleshooting tips, optimization techniques, and how to get the best experience.',
        date: 'January 10, 2025',
        readTime: '7 min read',
        image: '/blog imgae/boost you gaming fun with juwa.png'
      }
    ];

    return (
      <section className="px-6 md:px-10 py-12 bg-neutral-50 dark:bg-neutral-950 max-xl:pr-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4">Juwa777 Gaming Blog – Tips, Guides & Latest Updates</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">Expert tips, guides, and insights to enhance your Juwa777 gaming experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => {
                  navigate(post.id === 'juwa2-casino' ? 'JUWA2' : `blog-${post.id}`);
                }}
                className="cursor-pointer"
              >
              <Card 
                className="overflow-hidden border border-neutral-200/60 dark:border-neutral-800/60 hover:shadow-lg transition-shadow duration-300 group h-full flex flex-col"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-neutral-900 shrink-0">
                  <img 
                    src={post.image || '/blog imgae/download juwa now.png'} 
                    alt={post.title}
                    className="blog-card-cover absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = '/blog imgae/download juwa now.png';
                    }}
                  />
                  {!post.image && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-600 via-red-700 to-red-800">
                      <Package className="h-16 w-16 text-white opacity-80" />
                    </div>
                  )}
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-red-600 dark:text-red-400">{post.category}</span>
                    <span className="text-xs text-neutral-500">•</span>
                    <span className="text-xs text-neutral-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-neutral-500">{post.date}</span>
                    <div className="flex items-center gap-1 text-sm text-red-600 dark:text-red-400 font-medium group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
              </CardContent>
            </Card>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
  };

  const DownloadGuideBlog = () => (
    <section className="px-6 md:px-10 py-12 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <a href="#blog" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Blog</a>
          <span>/</span>
          <span>Download Guide</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-semibold rounded-full mb-4">
            Getting Started
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4 leading-tight">
            Download Juwa 777 App: Complete Installation Guide for Android and iOS
          </h1>
          <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>5 min read</span>
            </div>
            <span>•</span>
            <span>January 7, 2025</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-8 rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <img 
            src="/blog imgae/download juwa now.png" 
            alt="Download Juwa 777 App"
            className="w-full h-full object-cover"
            style={{ width: '100%', height: '100%', display: 'block' }}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Get ready to experience the ultimate social casino gaming platform with Juwa 777. This comprehensive guide will walk you through downloading and installing the latest version of the Juwa 777 application on both Android and iOS devices. Whether you're a first-time user or looking to update to the newest release, we've got you covered with detailed, step-by-step instructions.
          </p>
        </div>

        {/* Quick Start Block */}
        <Card className="mb-8 border-2 border-red-200 dark:border-red-800 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
              <Rocket className="h-6 w-6 text-red-600" />
              Quick Start
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Jump to the section you need:
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="#android-installation" 
                onClick={(e) => { e.preventDefault(); const el = document.getElementById('android-installation'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
              >
                Android Installation
              </a>
              <a 
                href="#ios-installation" 
                onClick={(e) => { e.preventDefault(); const el = document.getElementById('ios-installation'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors"
              >
                iOS Installation
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Related Help Block */}
        <Card className="mb-8 border border-neutral-200/60 dark:border-neutral-800/60">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-red-600" />
              Related Help
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              Need more assistance? Check out these resources:
            </p>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/faq#juwa777-login" 
                  onClick={(e) => { e.preventDefault(); navigate('faq'); setTimeout(() => { const el = document.getElementById('juwa777-login'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                  className="text-red-600 hover:text-red-700 underline"
                >
                  How to Login to Juwa777
                </a>
              </li>
              <li>
                <a 
                  href="/faq#juwa-admin-login" 
                  onClick={(e) => { e.preventDefault(); navigate('faq'); setTimeout(() => { const el = document.getElementById('juwa-admin-login'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                  className="text-red-600 hover:text-red-700 underline"
                >
                  Juwa Admin Login Help
                </a>
              </li>
              <li>
                <a 
                  href="/blog-juwa-777-app-troubleshooting" 
                  onClick={(e) => { e.preventDefault(); navigate('blog-juwa-777-app-troubleshooting'); }}
                  className="text-red-600 hover:text-red-700 underline"
                >
                  App Troubleshooting Guide
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* App Information Table */}
        <Card className="mb-8 border border-neutral-200/60 dark:border-neutral-800/60">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
              <Package className="h-6 w-6 text-red-600" />
              Application Information
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg">
                <Smartphone className="h-5 w-5 text-red-600 flex-shrink-0" />
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">App Name</div>
                  <div className="font-semibold text-neutral-900 dark:text-white">Juwa 777</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg">
                <Settings2 className="h-5 w-5 text-red-600 flex-shrink-0" />
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">Version</div>
                  <div className="font-semibold text-neutral-900 dark:text-white">Latest</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg">
                <FileDown className="h-5 w-5 text-red-600 flex-shrink-0" />
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">File Size</div>
                  <div className="font-semibold text-neutral-900 dark:text-white">69.06 MB</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg">
                <Shield className="h-5 w-5 text-red-600 flex-shrink-0" />
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">License</div>
                  <div className="font-semibold text-neutral-900 dark:text-white">Free</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-neutral-900/50 rounded-lg md:col-span-2">
                <Smartphone className="h-5 w-5 text-red-600 flex-shrink-0" />
                <div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">System Requirements</div>
                  <div className="font-semibold text-neutral-900 dark:text-white">Android 7.0 or higher / iOS compatible</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* iOS Section */}
        <div id="ios-installation" className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Smartphone className="h-8 w-8 text-red-600" />
            iOS Installation Instructions
          </h2>
          <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                For iOS users, the installation process follows a similar pattern but with platform-specific considerations. Download the iOS version directly from our official website. After downloading, you may need to manually trust the application in your iPhone's Settings under General, then Device Management or Profiles & Device Management. Follow the on-screen prompts to complete the installation and begin your gaming journey.
              </p>
              
              {/* iOS Installation Video */}
              <div className="mt-6 mb-4">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Watch the Complete iOS Installation Guide</h3>
                <div className="rounded-lg overflow-hidden bg-neutral-900 max-w-sm mx-auto" style={{marginBottom: '0'}}>
                  <div className="relative w-full" style={{aspectRatio: '9/16', maxHeight: '500px'}}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/hiIQrBmtJqg"
                      title="Juwa777 iOS Installation Guide"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 text-center" style={{marginTop: '8px'}}>
                  Follow along with this step-by-step video guide to install Juwa777 on your iOS device.
                </p>
              </div>

              <div className="mt-4">
                <Button 
                  onClick={() => window.open('https://dl.juwa777.com/', '_blank')}
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download for iOS
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Android Section */}
        <div id="android-installation" className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Download className="h-8 w-8 text-red-600" />
            Android Installation Process
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
            Installing Juwa 777 on your device is straightforward and secure when downloaded from our official source. Follow these detailed steps to get started with the latest version of the application.
          </p>

          {/* Step 1 */}
          <Card className="mb-4 border-l-4 border-l-red-600 dark:border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                    <FileDown className="h-5 w-5 text-red-600" />
                    Download the APK File
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                    Click the download button provided on this page to obtain the latest version of the Juwa 777 APK file. Ensure you're downloading from our official website to guarantee you receive the authentic, verified application. The download typically takes just a few moments depending on your internet connection speed.
                  </p>
                  <div className="mt-4">
                    <Button 
                      onClick={() => window.open('https://dl.juwa777.com/', '_blank')}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Juwa 777 Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="mb-4 border-l-4 border-l-red-600 dark:border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                    <Package className="h-5 w-5 text-red-600" />
                    Locate and Initiate Installation
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                    Once the download completes, navigate to your device's Downloads folder. You'll find the APK file named something like "juwa777.apk". Tap on the file to begin the installation process. Your device may prompt you with a security warning—this is normal for applications installed outside of official app stores.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="mb-4 border-l-4 border-l-red-600 dark:border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                    <Settings2 className="h-5 w-5 text-red-600" />
                    Enable Installation from Unknown Sources
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                    If you encounter an "Installation Blocked" message, you'll need to enable installation from unknown sources. Navigate to your device's Settings menu, then proceed to Security or Privacy settings. Locate the option labeled "Unknown Sources" or "Install Unknown Apps" and toggle it to enabled. This permission allows your device to install applications from sources other than the Google Play Store.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mt-4">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      <strong>Note:</strong> This setting is a standard security feature. Only enable it when installing trusted applications from verified sources like our official website.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="mb-4 border-l-4 border-l-red-600 dark:border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-red-600" />
                    Complete the Installation
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                    Return to the APK file and tap it again. Follow the on-screen installation prompts, which will guide you through the final steps. The installation process typically completes within 30-60 seconds. You'll see a confirmation message once the app has been successfully installed on your device.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 5 */}
          <Card className="mb-8 border-l-4 border-l-red-600 dark:border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                    <Play className="h-5 w-5 text-red-600" />
                    Launch and Start Playing
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                    After installation completes, locate the Juwa 777 app icon in your device's app drawer or home screen. Tap to launch the application. Upon first launch, you may be prompted to grant certain permissions—these are necessary for the app to function properly. Once you've completed the initial setup, you'll have access to 14+ unique games and start earning real money! Enjoy playing different games in different slots, including slots, fish shooting games, keno, and more. Start exploring and enjoy the exciting world of social casino gaming!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">What You Get with Juwa 777</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                    <Package className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">100+ Games</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Access a diverse collection of slot games, fish shooting games, keno, and instant win games.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">Safe & Secure</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Download from our official source ensures you receive the verified, secure application.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">Regular Updates</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Stay current with the latest features, games, and improvements through regular app updates.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">Fast Performance</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Optimized for smooth gameplay with quick loading times and responsive controls.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Conclusion */}
        <Card className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Conclusion</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              Juwa 777 APK is an Android application that you can also get for iOS devices. It is a Juwa Game slot application where you can play different games in different slots and earn real money. The app offers over 100 exciting games including slots, fish shooting games, keno, and more. Download the latest version today and enjoy playing 14+ unique games. The installation process is quick and straightforward—follow the steps outlined above, and you'll be playing in minutes. Start your gaming journey with Juwa 777 and experience the thrill of social casino gaming!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => window.open('https://dl.juwa777.com/', '_blank')}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Juwa 777 Now
              </Button>
              <Button 
                onClick={() => window.location.hash = '#home'}
                variant="outline"
                className="border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
              >
                Explore Games
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Blog */}
        <div className="mt-8 text-center">
          <a 
            href="#blog" 
            className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 hover:gap-3 transition-all font-medium"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Blog
          </a>
        </div>
      </div>
    </section>
  );

  const NoDepositBonusBlog = () => (
    <section className="px-6 md:px-10 py-12 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <a href="#blog" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Blog</a>
          <span>/</span>
          <span>Bonuses & Promotions</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-semibold rounded-full mb-4">
            Bonuses & Promotions
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4 leading-tight">
            Juwa 777 No Deposit Bonus: Welcome Offers and Bonus Guide
          </h1>
          <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>6 min read</span>
            </div>
            <span>•</span>
            <span>January 8, 2025</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-8 rounded-2xl overflow-hidden">
          <img 
            src="/blog imgae/ultra big win with juwa.png" 
            alt="Juwa 777 Bonuses and Big Wins"
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Juwa 777 offers generous bonus opportunities designed to enhance your gaming experience and maximize your bankroll. Whether you're a new player looking to get started or a returning member seeking additional value, understanding the available bonuses and their terms is essential for making the most of your gameplay. This comprehensive guide covers all the bonus offers, how they work, and what you need to know about wagering requirements.
          </p>
        </div>

        {/* Welcome Bonus Section */}
        <div className="mb-8">
          <Card className="border-l-4 border-l-red-600 dark:border-l-red-500 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center">
                  <Gift className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                    200% Welcome Bonus - Up to $500
                  </h2>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                    New players at Juwa 777 are greeted with an exceptional welcome offer: a 200% match bonus on your first deposit, with a maximum bonus amount of $500. This means when you make your initial deposit, Juwa 777 will match it by 200%, significantly boosting your starting bankroll.
                  </p>
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 mt-4">
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      <strong className="text-red-600 dark:text-red-400">Example:</strong> If you deposit $100, you'll receive an additional $200 in bonus credits, giving you a total of $300 to play with. Deposit $250 or more, and you'll receive the maximum $500 bonus.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reload Bonus Section */}
        <div className="mb-8">
          <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                    50% Reload Bonus on Every Deposit
                  </h2>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                    Returning players aren't left out of the bonus action. Juwa 777 offers a 50% reload bonus on every subsequent deposit you make after your initial welcome bonus. This ongoing promotion ensures that your bankroll continues to grow with each deposit, providing sustained value throughout your gaming journey.
                  </p>
                  <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-lg p-4 mt-4">
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      <strong className="text-orange-600 dark:text-orange-400">Example:</strong> If you deposit $100 on your second or subsequent deposit, you'll receive an extra $50 in bonus credits, bringing your total playable balance to $150.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Referral Bonus Section */}
        <div className="mb-8">
          <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                    $5 Referral Bonus Program
                  </h2>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                    Juwa 777 rewards you for sharing the platform with friends through their referral bonus program. For each friend you refer who makes an initial deposit of $20 or more, you'll receive $5 in free casino credits. This program allows you to earn bonus funds simply by introducing others to the Juwa 777 experience.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>How it works:</strong> Share your referral link with friends. When they sign up and make their first deposit of $20 or more, both you and your friend benefit from the referral bonus.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Wagering Requirements Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Info className="h-8 w-8 text-red-600" />
            Understanding Wagering Requirements
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
            Before you can withdraw any winnings derived from bonus funds, you must meet the wagering requirements. These requirements ensure fair play and prevent bonus abuse while still providing significant value to players.
          </p>

          <Card className="mb-4 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <Percent className="h-5 w-5 text-red-600" />
                200% Welcome Bonus Wagering Requirements
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                For the 200% Welcome Bonus, the wagering requirement is set at 20 times the combined total of your deposit and bonus amount. This means you need to wager the total amount (deposit + bonus) 20 times before you can withdraw any winnings from the bonus funds.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
                  <strong>Example Calculation:</strong>
                </p>
                <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1 list-disc list-inside">
                  <li>You deposit $100 and receive a $200 bonus</li>
                  <li>Total amount subject to wagering: $300 ($100 + $200)</li>
                  <li>Wagering requirement: $300 × 20 = $6,000</li>
                  <li>You must wager at least $6,000 before withdrawing bonus winnings</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-4 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                Important Notes About Wagering
              </h3>
              <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Only bonus winnings are subject to wagering requirements. Your original deposit can typically be withdrawn according to standard withdrawal terms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Different games may contribute differently to wagering requirements. Check the terms for specific game contributions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Wagering requirements must be completed within the specified time frame, typically 30 days from bonus receipt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>Failure to meet wagering requirements within the time limit may result in forfeiture of bonus funds and associated winnings.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Eligibility Section */}
        <div className="mb-8">
          <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-red-600" />
                Bonus Eligibility and Availability
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                Juwa 777's bonus promotions are available to players in all 50 U.S. states, making these offers accessible to a wide range of players across the country. The platform is designed to comply with sweepstakes laws, ensuring that players can enjoy these bonuses regardless of their location within the United States.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-lg p-4">
                  <div className="font-semibold text-neutral-900 dark:text-white mb-2">Available To</div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">Players in all 50 U.S. states</p>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-lg p-4">
                  <div className="font-semibold text-neutral-900 dark:text-white mb-2">Bonus Type</div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">Deposit-based bonuses with wagering requirements</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How to Claim Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">How to Claim Your Bonuses</h2>
          <div className="space-y-4">
            <Card className="border-l-4 border-l-red-600 dark:border-l-red-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Sign Up for an Account</h3>
                    <p className="text-neutral-700 dark:text-neutral-300">Create your Juwa 777 account through the official platform. Ensure you provide accurate information during registration.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600 dark:border-l-red-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Make Your First Deposit</h3>
                    <p className="text-neutral-700 dark:text-neutral-300">Complete your first deposit to automatically receive the 200% welcome bonus. The bonus is typically credited immediately or within a few minutes.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600 dark:border-l-red-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Start Playing</h3>
                    <p className="text-neutral-700 dark:text-neutral-300">Use your bonus funds to explore Juwa 777's extensive game library. Remember to meet wagering requirements before withdrawing winnings.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Conclusion */}
        <Card className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Maximize Your Juwa 777 Experience</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              Juwa 777's bonus structure is designed to provide exceptional value to both new and returning players. The 200% welcome bonus offers an excellent starting boost, while the 50% reload bonus ensures ongoing value with every deposit. Combined with the referral program, these bonuses create multiple opportunities to enhance your bankroll and extend your gameplay. Remember to review all terms and conditions, understand the wagering requirements, and play responsibly. With these bonuses, you can explore more games, take more chances, and potentially increase your winnings while enjoying the exciting world of social casino gaming at Juwa 777.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => window.open('https://www.facebook.com/people/Fortune-JUWA/61565056061906/?mibextid=wwXIfr&rdid=903GVl4fnaFYCKne&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JNy4sFfi2%2F%3Fmibextid%3DwwXIfr', '_blank')}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Gift className="h-4 w-4 mr-2" />
                Claim Your Bonus
              </Button>
              <Button 
                onClick={() => window.location.hash = '#blog'}
                variant="outline"
                className="border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
              >
                Back to Blog
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Blog */}
        <div className="mt-8 text-center">
          <a 
            href="#blog" 
            className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 hover:gap-3 transition-all font-medium"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Blog
          </a>
        </div>
      </div>
    </section>
  );

  const PlayJuwaOnlineBlog = () => (
    <section className="px-6 md:px-10 py-12 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <a href="#blog" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Blog</a>
          <span>/</span>
          <span>Getting Started</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-semibold rounded-full mb-4">
            Getting Started
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4 leading-tight">
            Play Juwa Online Games: No Download Required for Android and iOS
          </h1>
          <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>5 min read</span>
            </div>
            <span>•</span>
            <span>January 9, 2025</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-8 rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <img 
            src="/blog imgae/play juwa online.png" 
            alt="Play Juwa Online Games"
            className="w-full h-full object-cover"
            style={{ width: '100%', height: '100%', display: 'block' }}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <Card className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 mb-6">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">No Download Required!</h3>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    Play Juwa games directly in your web browser on both Android and iOS devices. No app installation needed—just open your browser and start playing instantly!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Looking to play Juwa games online without downloading a mobile app? You've come to the right place! Juwa online offers exciting casino-style games that can be played directly in your web browser on Android and iOS devices—absolutely no download or installation required. This instant access gives you the thrill of an online casino right at your fingertips, without taking up valuable storage space on your device. In this comprehensive guide, we'll show you how to play Juwa online without any downloads and explore all the features that make Juwa 777 a top choice for online gaming.
          </p>
        </div>

        {/* What is Juwa Section */}
        <div className="mb-8">
          <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <Gamepad2 className="h-6 w-6 text-red-600" />
                What is Juwa?
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Juwa is an online gaming platform that offers a diverse variety of casino-style games, including slots, card games, fish shooting games, and keno. The platform allows you to play for entertainment or real money rewards through sweepstakes entries. Juwa has gained significant popularity in the USA due to its easy access, exciting gameplay, and the convenience of playing directly in your browser without requiring app installations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How to Play Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Play className="h-8 w-8 text-red-600" />
            How to Play Juwa Online Games (No Download Required)
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
            Ready to start playing? You can easily access Juwa online games directly in your browser—no app download or installation needed for Android or iOS devices. The process is straightforward and takes just a few minutes to get started. Simply use your web browser to access the games instantly.
          </p>

          {/* Step 1 */}
          <Card className="mb-4 border-l-4 border-l-red-600 dark:border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-red-600" />
                    Visit the Juwa Website
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                    Open your web browser on any Android or iOS device and navigate to the official Juwa website. You can search for "Juwa play online" or visit the platform directly. This will take you to the Juwa online platform where you can start playing immediately without any downloads.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="mb-4 border-l-4 border-l-red-600 dark:border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                    <LogIn className="h-5 w-5 text-red-600" />
                    Create an Account or Log In
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                    To access the games, you'll need to sign up for a new account or log in using your existing Juwa credentials. The registration process is simple and takes only a few minutes. If you already have a Juwa account, simply enter your username and password to access your dashboard.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="mb-8 border-l-4 border-l-red-600 dark:border-l-red-500">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                    <Gamepad2 className="h-5 w-5 text-red-600" />
                    Choose Your Game and Start Playing
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                    Once logged in, you can browse through the extensive variety of games available on the platform. From slots to card games, fish shooting games to keno, there's something for every type of player. Simply select your preferred game and start playing instantly—no lengthy downloads required, just login and play.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Juwa 777 Online Casino Login Section */}
        <div className="mb-8">
          <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <LogIn className="h-6 w-6 text-red-600" />
                Juwa 777 Online Casino Login
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                For users who enjoy playing at online casinos, Juwa 777 is an excellent option that offers a wide range of casino games including slot machines, blackjack, poker, fish shooting games, and keno. To get started, you simply need to log into the Juwa 777 online casino using your existing credentials.
              </p>
              
              <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-lg p-4 mt-4">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Steps to Log In:</h3>
                <ol className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 list-decimal list-inside">
                  <li>Navigate to the official Juwa777 website or mobile site</li>
                  <li>Click on the Juwa 777 online casino login button</li>
                  <li>Enter your username and password</li>
                  <li>You're now ready to explore all the games Juwa 777 has to offer</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Play Juwa Online Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Why Play Juwa Online?</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
            There are numerous compelling reasons why Juwa is an excellent choice for online gamers. Here are some of the key advantages that make playing Juwa online a great experience:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">No Download Needed for iOS or Android</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Play directly in your web browser on both Android and iOS devices—no app installation required. Enjoy your favorite games without filling up your device's storage. This also saves your data and bandwidth, making it perfect for quick gaming sessions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">Works on Android and iOS Without App Download</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Play Juwa directly in your browser on both Android and iOS devices—no app download or installation needed. The online version is available for all operating systems through your web browser, ensuring universal access without any downloads.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <LogIn className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">Easy Login</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Use your Juwa login for instant access to games. Once you log in, you'll have access to all the games in your dashboard immediately.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <Gamepad2 className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">Variety of Games</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Juwa offers an exciting mix of games, from slots to casino classics. These games may have hardware restrictions on mid-range devices, so playing online saves your device resources.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Safety Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Shield className="h-8 w-8 text-red-600" />
            How to Stay Safe While Playing Juwa Online
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
            When playing online games like Juwa, it's essential to prioritize your safety and security. Follow these important guidelines to ensure a safe and enjoyable gaming experience:
          </p>

          <Card className="mb-4 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <Lock className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Use a Secure Login</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Always log in from the official Juwa website to protect your account. Never enter your credentials on third-party sites or suspicious links. Ensure you're visiting the legitimate Juwa platform before entering any login information.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-4 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Play Responsibly</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Set limits for yourself and play for entertainment to avoid any risks associated with gambling. Establish time and spending limits before you start playing, and stick to them. Remember that gaming should be fun and enjoyable, not a source of stress or financial strain.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Wifi className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Monitor Your Internet Connection</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Ensure you're on a secure and reliable network when playing online. Avoid using public Wi-Fi networks for gaming sessions that involve account access or financial transactions. A stable internet connection also ensures smooth gameplay without interruptions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conclusion */}
        <Card className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Conclusion</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              Playing Juwa online without downloading any app is the perfect way to enjoy top-notch casino games on the go. Whether you're using an Android or iOS device, you can access all Juwa games directly through your web browser—no app download or installation required. Whether you're looking for a quick gaming session during your break or want to dive into more extended gameplay, Juwa offers it all for Android and iOS users without requiring any downloads. The convenience of instant browser access, combined with the wide variety of games and the security of playing through your browser, makes Juwa online an excellent choice for both casual and serious gamers. Just log in with your Juwa account through your browser, and you're ready to play your favorite games instantly, anywhere, anytime—no app needed!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => window.open('https://www.facebook.com/people/Fortune-JUWA/61565056061906/?mibextid=wwXIfr&rdid=903GVl4fnaFYCKne&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JNy4sFfi2%2F%3Fmibextid%3DwwXIfr', '_blank')}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Play className="h-4 w-4 mr-2" />
                Play Juwa Online Now
              </Button>
              <Button 
                onClick={() => window.location.hash = '#blog'}
                variant="outline"
                className="border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
              >
                Back to Blog
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Blog */}
        <div className="mt-8 text-center">
          <a 
            href="#blog" 
            className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 hover:gap-3 transition-all font-medium"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Blog
          </a>
        </div>
      </div>
    </section>
  );

  const TroubleshootingBlog = () => (
    <section className="px-6 md:px-10 py-12 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <a href="#blog" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Blog</a>
          <span>/</span>
          <span>Getting Started</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-sm font-semibold rounded-full mb-4">
            Getting Started
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4 leading-tight">
            Juwa 777 App Troubleshooting: Common Issues and Solutions
          </h1>
          <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>7 min read</span>
            </div>
            <span>•</span>
            <span>January 10, 2025</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-8 rounded-2xl overflow-hidden">
          <img 
            src="/blog imgae/boost you gaming fun with juwa.png" 
            alt="Boost Your Gaming Fun with Juwa"
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            After successfully downloading and installing the Juwa 777 app, you may encounter some common issues or want to optimize your experience for the best performance. This comprehensive troubleshooting guide covers the most frequent problems users face, along with proven solutions and optimization tips to ensure smooth gameplay and maximum enjoyment of your Juwa 777 experience.
          </p>
        </div>

        {/* Installation Issues Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <HelpCircle className="h-8 w-8 text-red-600" />
            Common Installation Issues
          </h2>

          <Card className="mb-4 border-l-4 border-l-red-600 dark:border-l-red-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                "Installation Blocked" Error
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                If you see an "Installation Blocked" message when trying to install the APK file, your device's security settings are preventing installations from unknown sources.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-800 dark:text-blue-200 font-semibold mb-2">Solution:</p>
                <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1 list-decimal list-inside">
                  <li>Go to your device's Settings menu</li>
                  <li>Navigate to Security or Privacy settings</li>
                  <li>Find and enable "Unknown Sources" or "Install Unknown Apps"</li>
                  <li>Select your browser or file manager and toggle the permission on</li>
                  <li>Return to the APK file and try installing again</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-4 border-l-4 border-l-orange-600 dark:border-l-orange-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                "App Not Installed" Error
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                This error typically occurs when there's insufficient storage space, a corrupted download, or an incompatible Android version.
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <p className="text-sm text-orange-800 dark:text-orange-200 font-semibold mb-2">Solutions:</p>
                <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1 list-disc list-inside">
                  <li>Check available storage space (app requires at least 100MB free)</li>
                  <li>Verify your Android version is 7.0 or higher</li>
                  <li>Delete the corrupted APK and download a fresh copy from the official source</li>
                  <li>Clear your device's cache and try again</li>
                  <li>Restart your device and attempt installation once more</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 border-l-4 border-l-yellow-600 dark:border-l-yellow-500">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                iOS Installation Issues
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                iOS users may need to manually trust the application after installation before it can be opened.
              </p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-200 font-semibold mb-2">Solution:</p>
                <ol className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1 list-decimal list-inside">
                  <li>After installation, go to iPhone Settings</li>
                  <li>Navigate to General, then Device Management or Profiles & Device Management</li>
                  <li>Find the Juwa 777 developer profile</li>
                  <li>Tap "Trust [Developer Name]" and confirm</li>
                  <li>Return to your home screen and open the Juwa 777 app</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Issues Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Zap className="h-8 w-8 text-red-600" />
            Performance and Optimization
          </h2>

          <Card className="mb-4 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                <Battery className="h-5 w-5 text-red-600" />
                App Running Slowly or Lagging
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                If the app is running slowly or experiencing lag, there are several optimization steps you can take to improve performance.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-lg p-4">
                  <div className="font-semibold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                    <RefreshCw className="h-4 w-4 text-red-600" />
                    Quick Fixes
                  </div>
                  <ul className="text-sm text-neutral-600 dark:text-neutral-300 space-y-1 list-disc list-inside">
                    <li>Close other running apps</li>
                    <li>Restart the Juwa 777 app</li>
                    <li>Clear app cache from device settings</li>
                    <li>Restart your device</li>
                  </ul>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-lg p-4">
                  <div className="font-semibold text-neutral-900 dark:text-white mb-2 flex items-center gap-2">
                    <Settings2 className="h-4 w-4 text-red-600" />
                    Advanced Tips
                  </div>
                  <ul className="text-sm text-neutral-600 dark:text-neutral-300 space-y-1 list-disc list-inside">
                    <li>Free up device storage space</li>
                    <li>Update to the latest app version</li>
                    <li>Check internet connection stability</li>
                    <li>Disable battery optimization for the app</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-4 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                <Wifi className="h-5 w-5 text-red-600" />
                Connection Issues
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                Network connectivity problems can prevent the app from loading games or connecting to servers.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <p className="text-sm text-green-800 dark:text-green-200 font-semibold mb-2">Troubleshooting Steps:</p>
                <ol className="text-sm text-green-800 dark:text-green-200 space-y-1 list-decimal list-inside">
                  <li>Check your internet connection (Wi-Fi or mobile data)</li>
                  <li>Switch between Wi-Fi and mobile data to test</li>
                  <li>Restart your router if using Wi-Fi</li>
                  <li>Check if other apps can connect to the internet</li>
                  <li>Disable VPN if active, as it may interfere with connections</li>
                  <li>Clear app data and log in again</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-red-600" />
                High Battery Consumption
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                Gaming apps can be battery-intensive. Here's how to optimize battery usage while playing Juwa 777.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Reduce Screen Brightness</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Lower your device's screen brightness to conserve battery during extended gaming sessions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Close Background Apps</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Close unnecessary apps running in the background to free up system resources.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Use Power Saving Mode</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Enable your device's power saving mode for longer battery life during gameplay.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Keep App Updated</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Always use the latest version which includes performance optimizations.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* App Features and Tips Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Star className="h-8 w-8 text-red-600" />
            Getting the Most Out of Juwa 777
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <Gamepad2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">Explore All Games</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Juwa 777 offers 14+ unique games. Take time to explore slots, fish games, keno, and more to find your favorites.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <Gift className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">Claim Bonuses</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Take advantage of welcome bonuses, reload bonuses, and referral rewards to maximize your bankroll.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">Secure Your Account</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Use a strong password and enable two-factor authentication if available to protect your account.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <RefreshCw className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">Regular Updates</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Keep the app updated to the latest version to access new features, games, and performance improvements.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Maintenance Tips Section */}
        <div className="mb-8">
          <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <Settings2 className="h-6 w-6 text-red-600" />
                Regular Maintenance Tips
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Trash2 className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Clear Cache Regularly</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Clear the app cache from your device settings every few weeks to free up space and improve performance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Monitor Storage Space</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Ensure you have at least 100MB of free storage to allow the app to function properly and receive updates.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Check for Updates</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Regularly check for app updates to ensure you have the latest version with bug fixes and new features.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conclusion */}
        <Card className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-800">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Troubleshooting Success</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
              Most issues with the Juwa 777 app can be resolved by following the troubleshooting steps outlined in this guide. Whether you're dealing with installation problems, performance issues, or connection difficulties, the solutions provided here should help you get back to enjoying your favorite games. Remember to keep your app updated, maintain adequate storage space, and follow best practices for optimal performance. If problems persist after trying these solutions, consider reaching out to Juwa 777 customer support for additional assistance. With proper maintenance and optimization, you'll be able to enjoy all 14+ unique games and start earning real money with a smooth, trouble-free experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => window.open('https://dl.juwa777.com/', '_blank')}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Latest Version
              </Button>
              <Button 
                onClick={() => window.location.hash = '#contact'}
                variant="outline"
                className="border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
              >
                <HelpCircle className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Blog */}
        <div className="mt-8 text-center">
          <a 
            href="#blog" 
            className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 hover:gap-3 transition-all font-medium"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Blog
          </a>
        </div>
      </div>
    </section>
  );

  const OriginOfJuwaBlog = () => (
    <section className="px-6 md:px-10 py-12 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <a href="#blog" className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Blog</a>
          <span>/</span>
          <span>Company Story</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-semibold rounded-full mb-4">
            Company Story
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4 leading-tight">
            The Origin of Juwa: How Juwa777 Came to Life
          </h1>
          <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>6 min read</span>
            </div>
            <span>•</span>
            <span>December 18, 2025</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-8 rounded-2xl overflow-hidden">
          <img 
            src="/blog imgae/welcome to fabulous juwa online.png" 
            alt="The Origin of Juwa777"
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Discover the fascinating story of how Juwa777 was born during the COVID-19 pandemic, from the Sanskrit word "Juwa" to becoming one of the largest online gaming platforms in the United States. This is the journey of innovation, opportunity, and the creation of a gaming revolution.
          </p>
        </div>

        {/* The Beginning Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Rocket className="h-8 w-8 text-red-600" />
            The Story Begins: COVID-19 Changes Everything
          </h2>
          <Card className="mb-4 border-l-4 border-l-red-600 dark:border-l-red-500">
            <CardContent className="p-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                The story of Juwa started during the COVID-19 pandemic. Before COVID, many people liked to play slot machines at gas stations or local game stores. That was the main way people played games. Some online games like Golden Dragon and RiverSweeps were already around, but most players did not know about them. They liked going to stores to play in person.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                In 2020, COVID changed everything. People had to stay home, and many stores were closed. Because of this, players started looking for ways to play games online. Games like FireKirin, Orion Stars, and SoloWay Milky Way became popular. Still, there was space for something new and better.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* The Opportunity Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-red-600" />
            Seeing the Opportunity
          </h2>
          <Card className="mb-4 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                That is when the founders of Juwa777 saw a big opportunity. They wanted to create a platform where people could play Juwa online and enjoy the same games they loved in stores.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* The Name Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Globe className="h-8 w-8 text-red-600" />
            Finding the Perfect Name: The Sanskrit Connection
          </h2>
          <Card className="mb-4 border-l-4 border-l-purple-600 dark:border-l-purple-500">
            <CardContent className="p-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                Finding the right name was hard. The founders looked at Greek and Latin words, but none felt right. One day, a founder found the word "Juwa" from Sanskrit, one of the oldest languages in the world. In Sanskrit, Juwa means betting or gambling. The founders loved the meaning and chose it as the name.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mt-4">
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  <strong>Fun Fact:</strong> To make the name even luckier, they added 777, and Juwa777 was born. The number 777 is considered lucky in many cultures, making it the perfect addition to the Sanskrit name.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The Launch Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Package className="h-8 w-8 text-red-600" />
            The Official Launch: October 2021
          </h2>
          <Card className="mb-4 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                The Juwa team worked hard to bring popular store games online. These games included Life of Luxury, fish games, Keno, and many slot games. After months of hard work, the Juwa app was officially released in October 2021.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-lg p-4">
                  <div className="font-semibold text-neutral-900 dark:text-white mb-2">Launch Date</div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">October 2021</p>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-lg p-4">
                  <div className="font-semibold text-neutral-900 dark:text-white mb-2">Initial Games</div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">Life of Luxury, Fish Games, Keno, Slots</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Early Growth Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Users className="h-8 w-8 text-red-600" />
            Early Growth and Promotions
          </h2>
          <Card className="mb-4 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                At first, Juwa was shared with a small group of players. Promotions were done through Facebook and Telegram. Soon after, Juwa added a 20% reload bonus, which helped Juwa grow very fast.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mt-4">
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>Growth Strategy:</strong> The combination of social media marketing and attractive reload bonuses created a strong foundation for rapid expansion.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experience Mode Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Gamepad2 className="h-8 w-8 text-red-600" />
            Innovation: Experience Mode
          </h2>
          <Card className="mb-4 border-l-4 border-l-blue-600 dark:border-l-blue-500">
            <CardContent className="p-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                One special feature of Juwa online was the ability to play games without loading money. Some fish games and slot games on Juwa777 have Experience Mode, where players get free credits to practice. This helped new players learn the games without any risk.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Player-Friendly Feature:</strong> Experience Mode allows players to try games risk-free, making Juwa777 more accessible to newcomers and helping them build confidence before playing with real credits.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Distributor Credits Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <DollarSign className="h-8 w-8 text-red-600" />
            Expanding Through Distributor Credits
          </h2>
          <Card className="mb-4 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                As more people joined, Juwa allowed users to buy distributor credits so they could grow their own gaming business. This helped Juwa expand even more.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Revolutionary Features Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Zap className="h-8 w-8 text-red-600" />
            Revolutionary Features That Changed Online Gaming
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
            Later, Juwa added new features that changed online gaming. These included wager bonuses, cash back rewards, leaderboards, and auto wheels. The wager bonus and cash back features were very special because no other platform had them at the time. Later, many platforms copied these ideas from Juwa777.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <Card className="border-l-4 border-l-orange-600 dark:border-l-orange-500">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src="/wager juwa777.png" 
                    alt="Wager Bonus Feature"
                    className="w-full h-auto rounded-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                  <Percent className="h-5 w-5 text-orange-600" />
                  Wager Bonus
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  A revolutionary feature that rewards players based on their wagering activity. This innovative bonus system was first introduced by Juwa777 and later adopted by many other platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600 dark:border-l-green-500">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img 
                    src="/cashback juwa777.png" 
                    alt="Cash Back Rewards Feature"
                    className="w-full h-auto rounded-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  Cash Back Rewards
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Another industry-first feature that gives players cash back on their gameplay. This player-friendly innovation set a new standard in online gaming rewards.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-4 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Other Innovative Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Leaderboards</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Compete with other players and climb the ranks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Auto Wheels</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Automated bonus wheels for exciting rewards</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Today Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Star className="h-8 w-8 text-red-600" />
            Juwa777 Today: A Gaming Giant
          </h2>
          <Card className="mb-4 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                Today, Juwa777 is one of the biggest online gaming platforms in the United States. This success comes from hard-working staff and loyal players who love to play Juwa online.
              </p>
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mt-4">
                <p className="text-sm text-red-800 dark:text-red-200 font-semibold">
                  <strong>Success Factors:</strong> Innovation, player-focused features, and a dedicated community have made Juwa777 a leader in the online gaming industry.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The Future Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Rocket className="h-8 w-8 text-red-600" />
            The Journey Continues: Juwa777
          </h2>
          <Card className="mb-4 border-l-4 border-l-red-600 dark:border-l-red-500">
            <CardContent className="p-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                And the journey is not over yet. Juwa777 continues to grow and evolve, bringing new games and features to players across the United States.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Check out Juwa777 today and be part of the next chapter of Juwa's story.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-red-600 to-red-800 border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join the Juwa777 Community</h2>
            <p className="text-white/90 mb-6 text-lg">
              Be part of the next chapter in online gaming. Experience the platform that revolutionized the industry.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={() => window.open('https://dl.juwa777.com/', '_blank')}
                className="bg-white text-red-600 hover:bg-neutral-100 font-semibold"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Juwa777 Now
              </Button>
              <Button 
                onClick={() => window.open('https://www.juwabros.com', '_blank')}
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold"
              >
                <Play className="h-4 w-4 mr-2" />
                Play Now
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Blog */}
        <div className="mt-8 text-center">
          <a 
            href="#blog" 
            className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 hover:gap-3 transition-all font-medium"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Blog
          </a>
        </div>
      </div>
    </section>
  );

  const JUWA2_DIRECT_URL = 'https://m.juwa2.xin/v1/user/register?code=1AZu1F';
  const JUWA2_AGENT_URL = 'https://www.facebook.com/people/Loot-Juwa-Loot/61584567339149/';

  const Juwa2CasinoBlog = () => (
    <section className="px-6 md:px-10 py-12 bg-neutral-50 dark:bg-neutral-950 max-xl:pr-20">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <a href="#blog" onClick={(e) => { e.preventDefault(); navigate('blog'); }} className="hover:text-red-600 dark:hover:text-red-400 transition-colors">Blog</a>
          <span>/</span>
          <span>Platform Guides</span>
        </div>

        {/* Hero + primary CTAs */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-neutral-200/60 dark:border-neutral-800/60 bg-gradient-to-br from-red-700 via-red-800 to-neutral-950 shadow-xl">
          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <div className="relative w-full md:w-48 lg:w-56 shrink-0 aspect-video md:aspect-square rounded-xl overflow-hidden bg-neutral-900/40 border border-white/10">
                <img
                  src="/juwa2/juwa2 logo.png"
                  alt="Juwa2 Logo - Juwa2.0 Gaming Platform"
                  className="absolute inset-0 w-full h-full object-contain p-3"
                  loading="eager"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="inline-block px-3 py-1 bg-white/15 text-white text-sm font-semibold rounded-full mb-3">
                  Platform Guides
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
                  Juwa2: Complete Guide to Juwa2.0 Gaming Platform
                </h1>
                <p className="text-red-100/90 mb-5 leading-relaxed">
                  Register instantly or connect with an agent for personalized support. Play 100+ slots, fish games, and keno on Juwa2.0.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={JUWA2_DIRECT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-red-700 font-bold hover:bg-red-50 transition-colors shadow-lg"
                  >
                    <Rocket className="h-5 w-5" />
                    Play Without Agent
                    <ExternalLink className="h-4 w-4 opacity-70" />
                  </a>
                  <a
                    href={JUWA2_AGENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0866ff] text-white font-bold hover:bg-[#0756d4] transition-colors shadow-lg border border-white/20"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Play With Agent
                    <ExternalLink className="h-4 w-4 opacity-80" />
                  </a>
                </div>
                <p className="text-xs text-red-100/70 mt-3">
                  18+ only. Play responsibly. Links open in a new tab.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400 mb-8">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>8 min read</span>
          </div>
          <span>•</span>
          <span>January 13, 2025</span>
          <span>•</span>
          <a href="https://juwa2casino.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 dark:hover:text-red-400 transition-colors inline-flex items-center gap-1">
            juwa2casino.com <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Play options */}
        <div className="mb-10 grid md:grid-cols-2 gap-4">
          <Card className="border-2 border-red-200 dark:border-red-900/50 bg-white dark:bg-neutral-900/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/40">
                  <Rocket className="h-6 w-6 text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Play Without Agent</h2>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
                Create your Juwa2.0 account directly in the browser. Fast signup with your invite code — no middleman needed. Best if you want to start playing right away.
              </p>
              <a
                href={JUWA2_DIRECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-red-400 hover:gap-3 transition-all"
              >
                Register on Juwa2.0 <ArrowRight className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
          <Card className="border-2 border-blue-200 dark:border-blue-900/50 bg-white dark:bg-neutral-900/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
                  <UserPlus className="h-6 w-6 text-[#0866ff]" />
                </div>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white">Play With Agent</h2>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
                Connect with a Juwa2 agent on Facebook for guided setup, bonus help, and account support. Recommended if you prefer one-on-one assistance.
              </p>
              <a
                href={JUWA2_AGENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0866ff] hover:gap-3 transition-all"
              >
                Message on Facebook <ArrowRight className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Juwa2, also known as Juwa2.0, is a popular social gaming platform that offers an extensive collection of casino-style games including slots, fish shooting games, and keno. This guide covers how to get started — whether you register directly or through an agent — plus platform features, games, and promotions.
          </p>
        </div>

        {/* What is Juwa2 Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Package className="h-8 w-8 text-red-600" />
            What is Juwa2?
          </h2>
          <Card className="mb-4 border-l-4 border-l-red-600 dark:border-l-red-500">
            <CardContent className="p-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                Juwa2, commonly referred to as Juwa2.0, is a social gaming platform designed for entertainment purposes. The platform offers a wide variety of casino-style games including slot games, fish shooting games, keno, and other arcade-style games. Juwa2 provides players with an engaging gaming experience through its user-friendly interface and diverse game collection.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                The platform is accessible through web browsers and mobile apps, making it convenient for players to enjoy games on various devices including Android smartphones, iPhones, and tablets. Juwa2 focuses on providing entertainment through social gaming experiences.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Platform Interface Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Smartphone className="h-8 w-8 text-red-600" />
            Juwa2.0 Platform Interface
          </h2>
          <Card className="mb-4 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <div className="mb-4 relative aspect-[1536/691] w-full overflow-hidden rounded-lg bg-neutral-900">
                <img 
                  src="/juwa2/Juwa2.0_interface-1536x691.webp" 
                  alt="Juwa2.0 gaming platform interface showing game selection and features"
                  className="blog-card-cover absolute inset-0 rounded-lg"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                The Juwa2.0 platform features a modern, intuitive interface designed for easy navigation. Players can quickly browse through different game categories, access their account settings, and manage their gaming experience. The interface is optimized for both desktop and mobile devices, ensuring a smooth experience across all platforms.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-lg p-4">
                  <div className="font-semibold text-neutral-900 dark:text-white mb-2">User-Friendly Design</div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">Easy navigation and intuitive controls for all players</p>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-lg p-4">
                  <div className="font-semibold text-neutral-900 dark:text-white mb-2">Mobile Optimized</div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">Responsive design works seamlessly on smartphones and tablets</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Game Selection Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Gamepad2 className="h-8 w-8 text-red-600" />
            Game Selection on Juwa2
          </h2>
          <Card className="mb-4 border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                Juwa2 offers a diverse collection of games to suit different player preferences. The platform features various game categories including:
              </p>
              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Slot Games</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Classic and modern slot machines with various themes, paylines, and bonus features</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Fish Shooting Games</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Action-packed arcade-style games featuring underwater worlds and skill-based gameplay</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Keno Games</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Lottery-style number selection games with multiple betting options</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Arcade Games</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Various arcade-style games for quick entertainment</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Getting Started Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Rocket className="h-8 w-8 text-red-600" />
            How to Get Started with Juwa2
          </h2>
          <Card className="mb-4 border-l-4 border-l-blue-600 dark:border-l-blue-500">
            <CardContent className="p-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                Getting started with Juwa2 is straightforward. The platform is designed to be accessible and user-friendly for players of all experience levels. Here's what you need to know:
              </p>
              <div className="space-y-3 mt-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Choose How to Play</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      <a href={JUWA2_DIRECT_URL} target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline">Register directly</a>
                      {' '}without an agent, or{' '}
                      <a href={JUWA2_AGENT_URL} target="_blank" rel="noopener noreferrer" className="text-[#0866ff] hover:underline">connect via Facebook</a>
                      {' '}for agent-assisted setup.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Create Your Account</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Register for a free account to access the game library</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Explore Games</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Browse the game collection and select your preferred games to play</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">Start Playing</div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Begin enjoying the games and features available on the platform</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Platform Features Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-red-600" />
            Key Features of Juwa2.0
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">Secure Platform</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Juwa2 provides a secure gaming environment with account protection and data security measures.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Smartphone className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">Mobile Compatible</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Access Juwa2 on Android and iOS devices for gaming on the go.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Gamepad2 className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">Diverse Game Library</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Extensive collection of slots, fish games, keno, and arcade games.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">Social Gaming</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Connect with other players and enjoy social gaming experiences.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Exclusive Promotions */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Gift className="h-8 w-8 text-red-600" />
            Exclusive Juwa2 Promotions
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60 bg-gradient-to-br from-red-50 to-white dark:from-red-950/30 dark:to-neutral-900/50">
              <CardContent className="p-5">
                <div className="text-xs font-bold uppercase tracking-wide text-red-600 dark:text-red-400 mb-2">Ongoing</div>
                <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">100% Welcome Bonus</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Deposit on Juwa2 and earn up to $500 in rewards on your first day of membership.</p>
              </CardContent>
            </Card>
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-5">
                <div className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-2">Daily</div>
                <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">Daily Spin Wheel</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Spin the wheel every day for instant bonuses and free spins — win up to $100 bonus daily.</p>
              </CardContent>
            </Card>
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
              <CardContent className="p-5">
                <div className="text-xs font-bold uppercase tracking-wide text-green-600 dark:text-green-400 mb-2">Weekly</div>
                <h3 className="font-bold text-lg text-neutral-900 dark:text-white mb-2">Cashback Fridays</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Get up to 10% cashback on weekly losses every Friday — a popular perk on juwa2casino.com.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trending Games */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
            <Star className="h-8 w-8 text-red-600" />
            Trending on Juwa2.0
          </h2>
          <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">Popular titles players are enjoying right now:</p>
              <div className="flex flex-wrap gap-2">
                {['Mega Money Machine', '777 Lucky', '777 Jackpot Inferno', 'Spin Golden Wheel', 'Black & White Double', "King Kong's Rampage"].map((game) => (
                  <span key={game} className="px-3 py-1.5 rounded-full text-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/60">
                    {game}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ready to play CTA */}
        <div className="mb-8 rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900/50 p-6 md:p-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Ready to Play Juwa2.0?</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-5 max-w-xl mx-auto">
            Join over 1,000,000 fans in the Juwa2 community. Start directly or get help from an agent — your choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={JUWA2_DIRECT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-colors">
              Play Without Agent <ExternalLink className="h-4 w-4" />
            </a>
            <a href={JUWA2_AGENT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0866ff] text-white font-bold hover:bg-[#0756d4] transition-colors">
              Play With Agent <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mb-8">
          <Card className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-red-800 dark:text-red-200 mb-3">Important Information</h3>
              <p className="text-red-700 dark:text-red-300 leading-relaxed">
                Juwa2 is a social gaming platform designed for entertainment purposes only. All gameplay is virtual and for entertainment purposes. Players must be 18 years or older to use the platform. Please play responsibly and within your limits.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Back to Blog */}
        <div className="mt-8 text-center">
          <a 
            href="#blog" 
            onClick={(e) => { e.preventDefault(); navigate('blog'); }}
            className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 hover:gap-3 transition-all font-medium"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Blog
          </a>
        </div>
      </div>
    </section>
  );

  const ContactPage = () => {
    const [name, setName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      // Validation
      if (!name || name.trim().length < 2) {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 3000);
        return;
      }

      if (!userEmail || !userEmail.includes("@")) {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 3000);
        return;
      }
      
      if (!message || message.trim().length < 10) {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 3000);
        return;
      }

      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        // Call the serverless function API endpoint
        // This will use Namecheap SMTP to send the email
        const response = await fetch('https://v0-email-sending-function.vercel.app/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            userEmail: userEmail,
            phoneNumber: phoneNumber,
            message: message,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to send email');
        }
        
        setSubmitStatus("success");
        setName("");
        setUserEmail("");
        setPhoneNumber("");
        setMessage("");
        setTimeout(() => setSubmitStatus(null), 5000);
      } catch (error) {
        console.error("Email sending failed:", error);
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
    <section className="px-6 md:px-10 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <img src={logoUrl} alt="Juwa777 logo - free social gaming app" className="h-32 md:h-40 w-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white text-center mb-4">Contact Juwa777 Support Team</h1>
        </div>
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
            We're here to help! Whether you have questions about accessing Juwa777 games, need assistance with your account, or want to learn more about our free social gaming platform and features, our support team is ready to assist you. Get in touch with us through any of the methods below, and we'll respond as quickly as possible.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            For quick answers to common questions, check out our <a href="/faq" onClick={(e) => { e.preventDefault(); navigate('faq'); }} className="text-red-600 hover:text-red-700 underline">FAQ page</a> or browse our <a href="/blog" onClick={(e) => { e.preventDefault(); navigate('blog'); }} className="text-red-600 hover:text-red-700 underline">blog posts</a> for detailed guides and tips.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="mb-8 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-6 text-center">How to Reach Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">Support Hours</h3>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm mb-2">
                Our customer support team is available to assist you with any questions or concerns about the Juwa777 free social gaming platform, mobile gaming app, and online gaming experience.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
                We typically respond to inquiries within 24-48 hours. For urgent matters, please use the contact form below with detailed information about your issue.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">What We Can Help With</h3>
              <ul className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm space-y-2">
                <li>• Questions about accessing and playing games</li>
                <li>• Account-related inquiries</li>
                <li>• Technical support and troubleshooting</li>
                <li>• Information about our game collection</li>
                <li>• General platform questions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6 space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                    <label className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 block">Name *</label>
                    <Input 
                      type="text"
                      placeholder="Your full name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="w-full"
                    />
              </div>
              <div>
                    <label className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 block">Email *</label>
                    <Input 
                      type="email"
                      placeholder="you@example.com" 
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="w-full"
                    />
              </div>
                  <div>
                    <label className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 block">Phone Number</label>
                    <Input 
                      type="tel"
                      placeholder="(555) 123-4567" 
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 block">Message *</label>
                    <Textarea 
                      rows={4} 
                      placeholder="How can we help?" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </div>
                  
                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <p className="text-sm text-green-700 dark:text-green-300">Message sent successfully! We'll get back to you soon.</p>
                    </div>
                  )}
                  
                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                      <p className="text-sm text-red-700 dark:text-red-300">
                        {!name || name.trim().length < 2
                          ? "Please enter your name (at least 2 characters)."
                          : !userEmail || !userEmail.includes("@") 
                          ? "Please enter a valid email address."
                          : !message || message.trim().length < 10
                          ? "Please enter a message (at least 10 characters)."
                          : "Failed to send message. Please try again or email us directly."}
                      </p>
                    </div>
                  )}

                  <Button 
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white border-red-600 w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
            </CardContent>
          </Card>
          <div className="space-y-4">
            <Card className="border border-neutral-200/60 dark:border-neutral-800/60"><CardContent className="p-5"><div className="font-semibold">Live chat</div><p className="text-sm text-neutral-600 dark:text-neutral-300">Chat with an agent 24/7.</p></CardContent></Card>
              <Card className="border border-neutral-200/60 dark:border-neutral-800/60"><CardContent className="p-5"><div className="font-semibold">Email support</div><p className="text-sm text-neutral-600 dark:text-neutral-300">juwa@juwa777.com</p></CardContent></Card>
            <a href="/faq" onClick={(e) => { e.preventDefault(); navigate('faq'); }} className="block group">
              <Card className="border border-neutral-200/60 dark:border-neutral-800/60 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:border-red-500 dark:hover:border-red-500 active:bg-red-50 dark:active:bg-red-900/20 active:border-red-500 transition-all duration-200 hover:shadow-md active:shadow-lg">
                <CardContent className="p-5">
                  <div className="font-semibold text-neutral-900 dark:text-white group-hover:text-red-600 group-active:text-red-600 transition-colors duration-200">FAQ</div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">Payouts, verification, and responsible play.</p>
                  <div className="mt-2 text-xs text-red-600 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">Tap to view FAQ →</div>
                </CardContent>
              </Card>
            </a>
            <a href="/blog" onClick={(e) => { e.preventDefault(); navigate('blog'); }} className="block group">
              <Card className="border border-neutral-200/60 dark:border-neutral-800/60 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:border-red-500 dark:hover:border-red-500 active:bg-red-50 dark:active:bg-red-900/20 active:border-red-500 transition-all duration-200 hover:shadow-md active:shadow-lg">
                <CardContent className="p-5">
                  <div className="font-semibold text-neutral-900 dark:text-white group-hover:text-red-600 group-active:text-red-600 transition-colors duration-200">Blog & Guides</div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">Download guides, troubleshooting tips, and bonus information.</p>
                  <div className="mt-2 text-xs text-red-600 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">View blog posts →</div>
                </CardContent>
              </Card>
            </a>
            <a href="/games" onClick={(e) => { e.preventDefault(); navigate('games'); }} className="block group">
              <Card className="border border-neutral-200/60 dark:border-neutral-800/60 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:border-red-500 dark:hover:border-red-500 active:bg-red-50 dark:active:bg-red-900/20 active:border-red-500 transition-all duration-200 hover:shadow-md active:shadow-lg">
                <CardContent className="p-5">
                  <div className="font-semibold text-neutral-900 dark:text-white group-hover:text-red-600 group-active:text-red-600 transition-colors duration-200">Browse Games</div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">Explore over 100 free casino games including slots, fish games, and keno.</p>
                  <div className="mt-2 text-xs text-red-600 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">View all games →</div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
  };

  const FAQPage = () => {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (index) => {
      setOpenItems(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    };

    const faqData = [
      {
        question: "Is Juwa777 the same as Juwa 777?",
        answer: "Yes. Juwa777 and Juwa 777 refer to the same app. The name is commonly written in different formats, including Juwa, Juwa777, and Juwa 777. All refer to the same free social gaming platform available for Android and iOS devices. For entertainment purposes only. 18+ only."
      },
      {
        question: "What is Juwa777 used for?",
        answer: "Juwa777 is a social-style gaming app featuring virtual slot games, fish games, and number-based games intended for entertainment purposes only. The app provides over 100 free games for players to enjoy. All gameplay is virtual and designed for entertainment. No real-money gambling, deposits, withdrawals, or cash payouts are available. 18+ only."
      },
      {
        question: "Can you play Juwa 777 online without downloading?",
        answer: "Juwa 777 is primarily accessed through a mobile app. Most users need to download the app to play. The app is required to access our game library on Android and iOS devices. Visit our website to get the download link for your device. All games are for entertainment purposes only. 18+ only."
      },
      {
        question: "Is Juwa777 free to play?",
        answer: "Juwa777 is a free social-style app with virtual gameplay. The app is free to download and all games are free to play. Access and features may vary depending on how users obtain the app. All gameplay is for entertainment purposes only. No real-money gambling, deposits, withdrawals, or cash payouts are available. 18+ only."
      },
      {
        question: "What is Juwa admin login?",
        answer: "Juwa admin login usually refers to agent-level or administrator access rather than standard player login. Regular players access the app through standard login credentials. For support with login issues, contact our support team through the Contact page. All gameplay is for entertainment purposes only. 18+ only."
      },
      {
        question: "How do I download Juwa 777?",
        answer: "Most users receive Juwa 777 through a direct app link or APK provided by an agent or distributor. Visit our website to get the download link for your Android or iOS device. Once downloaded and installed, you can access our entire game library. All games are for entertainment purposes only. 18+ only."
      },
      {
        question: "Is Juwa777 available on Google Play?",
        answer: "Juwa777 is not always listed in official app stores, which is why users often search for Juwa 777 APK options. The app is typically distributed through direct download links. Visit our website to get the download link for your device. All games are for entertainment purposes only. 18+ only."
      },
      {
        question: "Why can't I log in to Juwa777?",
        answer: "Login issues are often related to incorrect credentials or account access provided by an administrator. Make sure you're using the correct username and password. If problems persist, contact our support team through the Contact page. All gameplay is for entertainment purposes only. 18+ only."
      },
      {
        question: "Do I need an account to log in?",
        answer: "Yes. Juwa777 login typically requires credentials provided during account setup. You'll need to create an account or receive login credentials to access the app and play games. All games are for entertainment purposes only. 18+ only."
      },
      {
        question: "What is Juwa777?",
        answer: "Juwa777 is a free social gaming platform designed for Android and iOS devices. Our platform offers over 100 exciting games including classic slots, action-packed fish shooting games, and strategic keno experiences. All games are completely free to play and designed for entertainment purposes only. No real-money gambling, deposits, withdrawals, or cash payouts are available. Juwa777 provides a safe, secure, and enjoyable gaming environment where players can experience casino-style games without any financial risk."
      },
      {
        question: "How many games are available in Juwa777?",
        answer: "Juwa777 offers over 100 free social casino games across multiple categories. Our game collection includes slot games with various themes and paylines, fish shooting games with vibrant underwater worlds, and keno games with multiple betting options. This diverse selection ensures there's something for every type of player, whether you prefer classic slot machines, action-packed arcade games, or strategic number-based games."
      },
      {
        question: "Is Juwa777 free to use?",
        answer: "Yes, Juwa777 is completely free to use. All games are free to play and require no payment, registration fees, or hidden costs. To play games, you'll need to download and install our app on your Android or iOS device. Once the app is installed, you can access our entire game library and start playing. All gameplay is for entertainment purposes only."
      },
      {
        question: "Do I need to download an app to play Juwa777?",
        answer: "Yes, you need to download and install the Juwa777 app on your Android or iOS device to play games. The app is required to access our game library. Visit our website to get the download link for your device. Once installed, you can start playing all games immediately."
      },
      {
        question: "What types of games does Juwa777 offer?",
        answer: "Juwa777 offers three main game categories: Slot Games featuring classic and modern themes with various paylines and bonus features; Fish Shooting Games with action-packed underwater gameplay where skill and strategy combine; and Keno Games with lottery-style number selection and multiple betting options. Each category offers unique gameplay mechanics, engaging graphics, and entertaining features."
      },
      {
        question: "Is Juwa777 safe to use?",
        answer: "Yes, Juwa777 is a safe and secure free social gaming platform. We prioritize player safety and data protection. Our platform uses secure connections and follows best practices for online gaming. All games are for entertainment purposes only, with no real-money gambling or financial transactions. We recommend playing responsibly and ensuring gaming is permitted under your local laws."
      },
      {
        question: "Can I play Juwa777 on my mobile device?",
        answer: "Yes, Juwa777 is fully optimized for mobile devices including Android smartphones and tablets, as well as iOS devices like iPhones and iPads. You need to download and install our app on your mobile device to play games. The app is designed to work seamlessly on mobile devices, ensuring smooth gameplay and responsive controls."
      },
      {
        question: "What are the system requirements for Juwa777?",
        answer: "Juwa777 has minimal system requirements. You need an Android or iOS device with internet connectivity. Download and install our app on your device to access games. Our app is optimized for mobile devices and works on most smartphones and tablets. The app handles all system requirements automatically."
      },
      {
        question: "How do I get started with Juwa777?",
        answer: "Getting started with Juwa777 is simple. First, download and install the Juwa777 app on your Android or iOS device. Visit our website to get the download link. Once the app is installed, browse our game collection and select any game you'd like to play. All games are free to access and require no registration or payment. Simply click on a game and start playing immediately. For more detailed instructions, check our blog posts or contact our support team."
      },
      {
        question: "Are there any age restrictions for Juwa777?",
        answer: "Yes, Juwa777 is for players 18 years and older only. Our platform is designed for adult entertainment purposes only. We require all players to be of legal age in their jurisdiction. Responsible gaming is important, and we encourage players to play within their limits and understand that all gameplay is for entertainment purposes only."
      },
      {
        question: "What rewards and bonuses does Juwa777 offer?",
        answer: "Juwa777 offers various entertainment features including Spin Wheel bonuses, cashback rewards, and hourly lucky draws. These features add excitement and extra entertainment value to your gaming experience. All rewards and bonuses are part of the free social gaming experience and are for entertainment purposes only. No real-money value or cash payouts are associated with these features."
      },
      {
        question: "How do I get support if I have an issue?",
        answer: "If you need support, you can reach out through our Contact page on the website. Fill out the contact form with your question or concern, and our support team will respond within 24-48 hours. You can also check our FAQ page for answers to common questions, or browse our blog posts for detailed guides and troubleshooting tips."
      },
      {
        question: "Is Juwa777 legal to play?",
        answer: "Juwa777 is a free social gaming platform designed for entertainment purposes only. Since we don't offer real-money gambling, deposits, withdrawals, or cash payouts, our platform operates differently from traditional online casinos. However, gaming laws vary by location, so we recommend checking your local laws to ensure gaming is permitted in your area. All players must be 18 years or older."
      },
      {
        question: "Can I play Juwa777 games offline?",
        answer: "No, Juwa777 games require an active internet connection to play. Our app needs connectivity to load games and maintain your gaming session. Make sure you have a stable internet connection on your Android or iOS device for the best gaming experience."
      },
      {
        question: "What should I do if a game isn't loading?",
        answer: "If a game isn't loading, try these troubleshooting steps: Check your internet connection, refresh the page, clear your browser cache, try a different browser, or restart your device. If problems persist, contact our support team through the Contact page with details about the issue, including which game and device you're using. You can also browse our blog for troubleshooting guides."
      }
    ];

    // Add FAQPage JSON-LD schema for SEO
    useEffect(() => {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };

      // Remove existing FAQPage schema if present
      const existingScript = document.querySelector('script[data-faq-schema]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new FAQPage schema
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-faq-schema', 'true');
      script.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(script);

      // Cleanup on unmount
      return () => {
        const scriptToRemove = document.querySelector('script[data-faq-schema]');
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }, [faqData]);

  return (
      <section className="px-6 md:px-10 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <img src={logoUrl} alt="Juwa777 logo - free social gaming app" className="h-32 md:h-40 w-auto mb-6" />
          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            <a href="#contact" className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">Contact</a>
            <span className="mx-2">&gt;</span>
            <span className="text-neutral-600 dark:text-neutral-300">FAQ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white text-center mb-4">Frequently Asked Questions About Juwa777</h1>
          <p className="text-center text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
            Find answers to common questions about Juwa777 free social gaming platform. Learn about our games, how to play, platform features, and more. If you don't find what you're looking for, feel free to <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('contact'); }} className="text-red-600 hover:text-red-700 underline">contact our support team</a>.
          </p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white text-center mb-8 mt-12">Juwa777 Frequently Asked Questions</h2>
              
              {/* Intent Hub Sections - Lightweight version (Login & Download expanded, others collapsed) */}
              <div className="space-y-6 mb-12">
                
                {/* Juwa777 Login Section - EXPANDED */}
                <section id="juwa777-login" className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">How to Login to Juwa777</h2>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                    To login to Juwa777, you need to download and install the app first. Once installed, open the app and enter your username and password. If you don't have an account yet, you'll need to create one through the registration process. Login credentials are typically provided during account setup or by your distributor.
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                    Common login issues include incorrect credentials, account access restrictions, or network connectivity problems. Make sure you're using the correct username and password provided during account setup.
                  </p>
                  <div className="mt-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Troubleshooting Steps:</h3>
                    <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                      <li>Verify your username and password are correct</li>
                      <li>Check your internet connection</li>
                      <li>Ensure the app is updated to the latest version</li>
                      <li>Try restarting the app</li>
                      <li>Contact support if issues persist</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <a href="/blog-download-juwa-777" onClick={(e) => { e.preventDefault(); navigate('blog-download-juwa-777'); }} className="text-red-600 hover:text-red-700 underline">Download Juwa 777 app</a> | <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('contact'); }} className="text-red-600 hover:text-red-700 underline">Get login help</a>
                  </div>
                </section>

                {/* Juwa 777 Download Section - EXPANDED */}
                <section id="juwa-777-download" className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">Download Juwa 777 App</h2>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                    To download Juwa 777, visit our website and get the download link for your device. The app is available for both Android and iOS devices. Most users receive the app through a direct download link or APK file provided by a distributor or agent.
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                    The Juwa777 app is not always available in official app stores like Google Play or Apple App Store, which is why direct download links are commonly used. Once downloaded, follow the installation instructions for your device type.
                  </p>
                  <div className="mt-4">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Download Steps:</h3>
                    <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                      <li>Visit juwa777.com to get download link</li>
                      <li>Choose Android or iOS version</li>
                      <li>Download the APK (Android) or installation file (iOS)</li>
                      <li>Enable installation from unknown sources (Android)</li>
                      <li>Follow on-screen installation instructions</li>
                      <li>Trust the app in device settings (iOS)</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <a href="/blog-download-juwa-777" onClick={(e) => { e.preventDefault(); navigate('blog-download-juwa-777'); }} className="text-red-600 hover:text-red-700 underline font-semibold">Complete Download Guide →</a>
                  </div>
                </section>

                {/* Juwa Admin Login Section - COLLAPSED (using details) */}
                <details className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6 md:p-8">
                  <summary className="cursor-pointer">
                    <h2 id="juwa-admin-login" className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white inline">Juwa Admin Login</h2>
                  </summary>
                  <div className="mt-4">
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                      Juwa admin login refers to agent-level or administrator access to the Juwa777 platform. This is different from standard player login and is typically used by distributors, agents, or platform administrators who manage accounts, credits, and user access.
                    </p>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                      Admin login credentials are provided separately from player accounts and require special permissions. If you need admin access, contact your distributor or platform administrator for credentials and setup instructions.
                    </p>
                    <div className="mt-4">
                      <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Admin Login Requirements:</h3>
                      <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                        <li>Admin-level credentials from distributor</li>
                        <li>Special permissions and access rights</li>
                        <li>Separate login portal or interface</li>
                        <li>Contact distributor for setup assistance</li>
                      </ul>
                    </div>
                  </div>
                </details>

                {/* Play Juwa Online Section - COLLAPSED (using details) */}
                <details className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6 md:p-8">
                  <summary className="cursor-pointer">
                    <h2 id="play-juwa-online" className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white inline">Can You Play Juwa 777 Online Without Downloading?</h2>
                  </summary>
                  <div className="mt-4">
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                      No, you cannot play Juwa 777 online without downloading the app. Juwa777 requires the mobile app to be installed on your Android or iOS device. The app is required to access and play all games - there is no browser-based version available.
                    </p>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                      To play Juwa 777, you must download and install the mobile app first. Once you have the app installed, create an account or login with existing credentials. Then browse the game library, select a game, and start playing. All games are free to play and designed for entertainment purposes only.
                    </p>
                    <div className="mt-4">
                      <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Getting Started:</h3>
                      <ul className="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300">
                        <li>Download and install the Juwa777 app</li>
                        <li>Create your free account</li>
                        <li>Browse the game library</li>
                        <li>Select a game to play</li>
                        <li>Enjoy free social gaming</li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <a href="/blog-download-juwa-777" onClick={(e) => { e.preventDefault(); navigate('blog-download-juwa-777'); }} className="text-red-600 hover:text-red-700 underline">Download app</a> | <a href="/games" onClick={(e) => { e.preventDefault(); navigate('games'); }} className="text-red-600 hover:text-red-700 underline">Browse games</a>
                    </div>
                  </div>
                </details>

              </div>
              
              <div>
            {faqData.map((item, index) => (
              <div key={index} className={`py-4 ${index < faqData.length - 1 ? 'border-b border-neutral-200 dark:border-neutral-700' : ''}`}>
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left flex items-center justify-between transition-colors"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white pr-4">
                    {index + 1}. {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <span className={`text-lg font-normal transition-colors duration-200 ${
                      openItems[index] ? 'text-neutral-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-300'
                    }`}>
                      {openItems[index] ? '−' : '+'}
                    </span>
              </div>
                </button>
                {openItems[index] && (
                  <div className="pt-3">
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {item.answer}
                    </p>
              </div>
                )}
              </div>
            ))}
              </div>

              {/* Additional Help Section */}
              <div className="mt-12 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4 text-center">Still Have Questions?</h2>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-center mb-6">
                  If you couldn't find the answer you're looking for, our support team is here to help. Get in touch with us through any of the following methods:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('contact'); }} className="bg-white dark:bg-neutral-800 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Contact Form</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Send us a message and we'll respond within 24-48 hours.</p>
                  </a>
                  <a href="/blog" onClick={(e) => { e.preventDefault(); navigate('blog'); }} className="bg-white dark:bg-neutral-800 rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Blog & Guides</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Read detailed guides, tips, and troubleshooting articles.</p>
                  </a>
                  <div className="bg-white dark:bg-neutral-800 rounded-lg p-4 text-center">
                    <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">Email Support</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">Email us at juwa@juwa777.com for assistance.</p>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-800 dark:text-red-200 text-center">
                  <strong>Important:</strong> Juwa777 is a free social gaming platform for entertainment purposes only. No real-money gambling, deposits, withdrawals, or cash payouts are available. All gameplay is virtual. 18+ only. Play responsibly.
                </p>
              </div>
              </div>
      </section>
    );
  };

  return (
    <div className={"min-h-screen w-full " + (dark ? "dark" : "")}> 
      <div className="bg-gray-50 dark:bg-neutral-950 transition-colors">
        <main className="w-full">
          <div className="overflow-hidden rounded-2xl shadow-sm border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900">
            <nav className="flex items-center justify-between px-5 py-3">
              <div className="flex items-center gap-2">
                <img src={logoUrl} alt="Juwa777 logo - free social gaming app" className="h-10 w-auto" />
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
                <a href="/" onClick={(e) => { e.preventDefault(); navigate('home'); }} className={route==='home' ? 'font-bold text-red-600' : 'hover:underline'}>Home</a>
                <a href="/JUWA2" onClick={(e) => { e.preventDefault(); navigate('JUWA2'); }} className={route==='JUWA2' ? 'font-bold text-red-600' : 'hover:underline'}>JUWA2</a>
                <a href="/relay" onClick={(e) => { e.preventDefault(); navigate('relay'); }} className={route==='relay' ? 'font-bold text-red-600' : 'hover:underline'}>Relay</a>
                <a href="/games" onClick={(e) => { e.preventDefault(); navigate('games'); }} className={route==='games' ? 'font-bold text-red-600' : 'hover:underline'}>Games</a>
                <a href="/about" onClick={(e) => { e.preventDefault(); navigate('about'); }} className={route==='about' ? 'font-bold text-red-600' : 'hover:underline'}>About</a>
                <a href="/blog" onClick={(e) => { e.preventDefault(); navigate('blog'); }} className={route==='blog' ? 'font-bold text-red-600' : 'hover:underline'}>Blog</a>
                <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('contact'); }} className={route==='contact' ? 'font-bold text-red-600' : 'hover:underline'}>Contact</a>
              </div>
              
              {/* Desktop Buttons */}
              <div className="hidden md:flex items-center gap-3">
                <Button variant="outline" className="border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50" onClick={() => navigate('faq')}>
                  FAQ
                </Button>
                <Button style={{ background: playNowColor, borderColor: playNowColor }} className="text-white hover:opacity-90" onClick={() => window.open('https://www.juwabros.com', '_blank')}>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Play now
                </Button>
              </div>
              
              {/* Mobile Navigation */}
              <div className="flex md:hidden items-center gap-3">
                <Button style={{ background: playNowColor, borderColor: playNowColor }} className="text-white hover:opacity-90 px-4 py-2" onClick={() => window.open('https://www.juwabros.com', '_blank')}>
                <Sparkles className="h-4 w-4 mr-2" />
                Play now
              </Button>
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </nav>
            
            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
              <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div className="px-5 py-4 space-y-3">
                  <a href="/" onClick={(e) => { e.preventDefault(); navigate('home'); setMobileMenuOpen(false); }} className={`block py-2 text-sm ${route==='home' ? 'font-bold text-red-600' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`}>Home</a>
                  <a href="/JUWA2" onClick={(e) => { e.preventDefault(); navigate('JUWA2'); setMobileMenuOpen(false); }} className={`block py-2 text-sm ${route==='JUWA2' ? 'font-bold text-red-600' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`}>JUWA2</a>
                  <a href="/relay" onClick={(e) => { e.preventDefault(); navigate('relay'); setMobileMenuOpen(false); }} className={`block py-2 text-sm ${route==='relay' ? 'font-bold text-red-600' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`}>Relay</a>
                  <a href="/games" onClick={(e) => { e.preventDefault(); navigate('games'); setMobileMenuOpen(false); }} className={`block py-2 text-sm ${route==='games' ? 'font-bold text-red-600' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`}>Games</a>
                  <a href="/about" onClick={(e) => { e.preventDefault(); navigate('about'); setMobileMenuOpen(false); }} className={`block py-2 text-sm ${route==='about' ? 'font-bold text-red-600' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`}>About</a>
                  <a href="/blog" onClick={(e) => { e.preventDefault(); navigate('blog'); setMobileMenuOpen(false); }} className={`block py-2 text-sm ${route==='blog' ? 'font-bold text-red-600' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`}>Blog</a>
                  <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('contact'); setMobileMenuOpen(false); }} className={`block py-2 text-sm ${route==='contact' ? 'font-bold text-red-600' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`}>Contact</a>
                  <a href="/faq" onClick={(e) => { e.preventDefault(); navigate('faq'); setMobileMenuOpen(false); }} className={`block py-2 text-sm ${route==='faq' ? 'font-bold text-red-600' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`}>FAQ</a>
                </div>
              </div>
            )}

            {route === 'home' && <HomePage />}
            {route === 'games' && <GamesPage />}
            {route === 'about' && <AboutPage />}
            {route === 'blog' && <BlogPage />}
            {route === 'blog-download-juwa-777' && <DownloadGuideBlog />}
            {route === 'blog-juwa-no-deposit-bonus' && <NoDepositBonusBlog />}
            {route === 'blog-juwa-777-app-troubleshooting' && <TroubleshootingBlog />}
            {route === 'blog-origin-of-juwa' && <OriginOfJuwaBlog />}
            {route === 'JUWA2' && <Juwa2CasinoBlog />}
            {route === 'contact' && <ContactPage />}
            {route === 'faq' && <FAQPage />}
            {route === 'relay' && <RelayPage />}

            <section className="px-6 md:px-10 pt-6 pb-6">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="relative z-10 flex items-center justify-between gap-4 p-6 md:p-8 bg-gradient-to-r from-red-800 to-red-600 text-white">
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-flex items-center justify-center h-12 w-12 rounded-xl bg-white/10"><ShieldCheck className="h-7 w-7" /></span>
                    <div>
                      <div className="text-2xl md:text-3xl font-extrabold tracking-wide">MADE TO PLAY SAFELY</div>
                      <div className="text-white/90 italic">Your safety and enjoyment are our priority.</div>
                    </div>
                  </div>
                  <img src={logoUrl} alt="Juwa777 logo - free social gaming app" className="h-10 md:h-12 w-auto" />
                </div>
              </div>
            </section>

            <footer className="px-6 md:px-10 pb-8">
              <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <img src={logoUrl} alt="Juwa777 - Free Social Gaming App Logo" className="h-7 w-auto" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-300">© 2025 All rights reserved.</span>
                </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm mb-4">
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white mb-2">Navigation</div>
                      <div className="space-y-1">
                        <a href="/" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="block text-neutral-600 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">Home</a>
                        <a href="/games" onClick={(e) => { e.preventDefault(); navigate('games'); }} className="block text-neutral-600 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">Games</a>
                        <a href="/about" onClick={(e) => { e.preventDefault(); navigate('about'); }} className="block text-neutral-600 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">About</a>
                        <a href="/relay" onClick={(e) => { e.preventDefault(); navigate('relay'); }} className="block text-neutral-600 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">Relay</a>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white mb-2">Resources</div>
                      <div className="space-y-1">
                        <a href="/blog" onClick={(e) => { e.preventDefault(); navigate('blog'); }} className="block text-neutral-600 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">Blog</a>
                        <a href="/faq" onClick={(e) => { e.preventDefault(); navigate('faq'); }} className="block text-neutral-600 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">FAQ</a>
                        <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('contact'); }} className="block text-neutral-600 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">Contact</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300 text-center">
                  <div className="font-semibold text-red-600 dark:text-red-400 text-base mb-2">
                    ⚠️ 18+ Only | For Entertainment Purposes Only | Play Responsibly
                  </div>
                  <div>
                    Copyright 2023, Juwa777. All rights reserved.
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>

      {/* Floating Social Icons - Stacked */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-2 md:gap-3">
        {/* Telegram Icon */}
        <a
          href="https://t.me/JUWA2GO"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-neutral-800 rounded-full p-1.5 md:p-2 shadow-xl md:shadow-2xl hover:shadow-[#40B3E0]/50 transition-all duration-300 hover:scale-110 active:scale-95 group border border-[#40B3E0] md:border-2 relative"
          aria-label="Join us on Telegram"
        >
          <img 
            src="/telegram-svgrepo-com.svg" 
            alt="Telegram" 
            className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-105 transition-transform duration-300"
          />
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#40B3E0] animate-ping opacity-30"></span>
        </a>

        {/* Messenger Icon */}
        <a
          href="https://www.facebook.com/share/1Bie9cjV6W/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-neutral-800 rounded-full p-1.5 md:p-2 shadow-xl md:shadow-2xl hover:shadow-[#0866ff]/50 transition-all duration-300 hover:scale-110 active:scale-95 group border border-[#0866ff] md:border-2 relative"
          aria-label="Chat with us on Messenger"
        >
          <img 
            src="/Messenger_Icon_Primary_Blue.svg" 
            alt="Messenger" 
            className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-105 transition-transform duration-300"
          />
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#0866ff] animate-ping opacity-30"></span>
        </a>

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/qr/JMUAYF2374KRM1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-neutral-800 rounded-full p-1.5 md:p-2 shadow-xl md:shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 active:scale-95 group border border-[#25D366] md:border-2 relative"
          aria-label="Contact us on WhatsApp"
        >
          <img 
            src="/whatsapp-white.svg" 
            alt="WhatsApp" 
            className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-105 transition-transform duration-300"
          />
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        </a>

        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/phoenixjuwa?igsh=b210bG5mZWFjd2F2&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-neutral-800 rounded-full p-1.5 md:p-2 shadow-xl md:shadow-2xl hover:shadow-[#E1306C]/50 transition-all duration-300 hover:scale-110 active:scale-95 group border border-[#E1306C] md:border-2 relative"
          aria-label="Follow us on Instagram"
        >
          <img 
            src="/instagram.svg" 
            alt="Instagram" 
            className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-105 transition-transform duration-300"
          />
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#E1306C] animate-ping opacity-30"></span>
        </a>

        {/* Signal Icon */}
        <a
          href="https://signal.me/#eu/H4dqi2VC7E_jEWZQSmddKK1oaARHUxxBPHZ3A_ygWoHK7Opj9L9Ktr3xIKwIxCvd"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-neutral-800 rounded-full p-1.5 md:p-2 shadow-xl md:shadow-2xl hover:shadow-[#3A76F0]/50 transition-all duration-300 hover:scale-110 active:scale-95 group border border-[#3A76F0] md:border-2 relative"
          aria-label="Contact us on Signal"
        >
          <img 
            src="/signal-white.svg" 
            alt="Signal" 
            className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-105 transition-transform duration-300"
          />
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#3A76F0] animate-ping opacity-30"></span>
        </a>
      </div>

      <style>{` :root { --accent: hsl(${accentHue} 84% 56%); } `}</style>
    </div>
  );
}
