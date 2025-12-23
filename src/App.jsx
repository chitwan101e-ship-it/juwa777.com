import React, { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Sparkles, Rocket, LayoutGrid, Settings, ExternalLink, ShieldCheck, Menu, X, CheckCircle, AlertCircle, Download, Smartphone, FileDown, Settings2, Play, ArrowRight, Shield, Clock, Package, Gift, DollarSign, Percent, Users, Info, Globe, Monitor, Lock, Wifi, Gamepad2, LogIn, HelpCircle, Zap, Star, Battery, RefreshCw, Trash2 } from "lucide-react";

export default function WebsiteLiveStarter() {
  const [logoUrl] = useState("/logo.png");
  const [playNowColor, setPlayNowColor] = useState("#dc2626"); // Default red
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Metadata configuration for each route
  const pageMetadata = {
    'home': {
      title: 'Juwa777.com Download - Free Juwa777 App for Android & iOS | Official Site',
      description: 'Download Juwa777 app from juwa777.com for Android and iOS. Get the latest Juwa777 APK free. Official download site with slots, fish games, and keno. Entertainment only. No real-money gambling. 18+.',
      image: 'https://juwa777.com/logo.png',
      url: 'https://juwa777.com/'
    },
    'games': {
      title: 'Juwa777 Games - Free Casino Games | Slots, Fish Games & Keno',
      description: 'Play over 100 free casino games on Juwa777 including slots, fish shooting games, and keno. Entertainment only. No real-money gambling. 18+.',
      image: 'https://juwa777.com/logo.png',
      url: 'https://juwa777.com/games'
    },
    'about': {
      title: 'About Juwa777 - Free Social Casino Games Platform',
      description: 'Learn about Juwa777, a free social casino app offering slots, fish games, and keno. Entertainment only. No real-money gambling. 18+.',
      image: 'https://juwa777.com/logo.png',
      url: 'https://juwa777.com/about'
    },
    'blog': {
      title: 'Juwa777 Blog - Guides, Tips & News | Free Casino Games',
      description: 'Read the latest Juwa777 blog posts with guides, tips, and news about free social casino games. Entertainment only. No real-money gambling. 18+.',
      image: 'https://juwa777.com/logo.png',
      url: 'https://juwa777.com/blog'
    },
    'blog-origin-of-juwa': {
      title: 'The Origin of Juwa: How Juwa777 Came to Life | Juwa777 Blog',
      description: 'Discover the fascinating story of how Juwa777 was born during the COVID-19 pandemic, from the Sanskrit word "Juwa" to becoming one of the largest online gaming platforms in the United States.',
      image: 'https://juwa777.com/blog imgae/welcome to fabulous juwa online.png',
      url: 'https://juwa777.com/blog-origin-of-juwa'
    },
    'blog-download-juwa-777': {
      title: 'Download Juwa 777 App: Complete Installation Guide | Juwa777 Blog',
      description: 'Step-by-step instructions to download and install Juwa 777 on your Android or iOS device. Get started with over 100 exciting games today.',
      image: 'https://juwa777.com/blog imgae/download juwa now.png',
      url: 'https://juwa777.com/blog-download-juwa-777'
    },
    'blog-juwa-no-deposit-bonus': {
      title: 'Juwa 777 No Deposit Bonus: Welcome Offers and Bonus Guide | Juwa777 Blog',
      description: 'Discover how to maximize your Juwa 777 experience with welcome bonuses, reload offers, and referral rewards. Learn about wagering requirements and bonus terms.',
      image: 'https://juwa777.com/blog imgae/ultra big win with juwa.png',
      url: 'https://juwa777.com/blog-juwa-no-deposit-bonus'
    },
    'blog-juwa-777-app-troubleshooting': {
      title: 'Juwa 777 App Troubleshooting: Common Issues and Solutions | Juwa777 Blog',
      description: 'Solve common installation and performance issues with the Juwa 777 app. Learn troubleshooting tips, optimization techniques, and how to get the best experience.',
      image: 'https://juwa777.com/blog imgae/boost you gaming fun with juwa.png',
      url: 'https://juwa777.com/blog-juwa-777-app-troubleshooting'
    },
    'contact': {
      title: 'Contact Juwa777 - Get Help & Support | juwa777.com',
      description: 'Contact Juwa777 for support, questions, or assistance. Get help with downloading, installation, or gameplay. Entertainment only. No real-money gambling. 18+.',
      image: 'https://juwa777.com/logo.png',
      url: 'https://juwa777.com/contact'
    },
    'faq': {
      title: 'Juwa777 FAQ - Frequently Asked Questions | juwa777.com',
      description: 'Find answers to frequently asked questions about Juwa777 app download, installation, gameplay, and more. Entertainment only. No real-money gambling. 18+.',
      image: 'https://juwa777.com/logo.png',
      url: 'https://juwa777.com/faq'
    }
  };

  // Path-based router for clean URLs (e.g., /home instead of /#home)
  const [route, setRoute] = useState("home");
  
  // Update meta tags when route changes
  useEffect(() => {
    const metadata = pageMetadata[route] || pageMetadata['home'];
    const baseUrl = 'https://juwa777.com';
    
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
      const newRoute = path;
      console.log('Route changing to:', newRoute);
      setRoute(newRoute);
      // Scroll to top when route changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
            BE A BIG WINNER WITH OUR<br />HOT JACKPOT
          </h1>
          <p className="mt-4 text-neutral-300 text-base md:text-lg">{heroDesc}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button style={{ background: playNowColor, borderColor: playNowColor }} className="text-white hover:opacity-90" onClick={() => window.open('https://www.facebook.com/share/17aBWNSxLD/?mibextid=wwXIfr', '_blank')}>
              <Sparkles className="h-4 w-4 mr-2" /> Play Now
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" onClick={() => window.open('https://dl.juwa777.com/', '_blank')}>Download Juwa Now</Button>
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
            <div className="text-base opacity-90">1st Deposit Offer</div>
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
            <div className="text-base opacity-90">2nd Deposit Offer</div>
            <div className="mt-2 font-extrabold text-white leading-[1.1] tracking-tight [text-wrap:balance]" style={{fontSize:'clamp(28px,4.5vw,40px)'}}>50% Reload Bonus</div>
            <div className="mt-6">
              <Button variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.open('https://www.facebook.com/JuwaJackpots/', '_blank')}>Join Now</Button>
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
                subtitle: "1st Deposit Offer",
                title: "100% Welcome<br/>Bonus",
                desc: ""
              },
              {
                bg: "from-orange-500 to-orange-900", 
                subtitle: "2nd Deposit Offer",
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
                              window.open('https://www.facebook.com/JuwaJackpots/', '_blank');
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
      </section>

      {/* Partners Carousel */}
      <section className="px-6 md:px-10 py-10 bg-neutral-950">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-6">Our Official Facebook Partners</h2>
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
                <div className="flex items-center justify-center bg-black/20">
                  <img src={current.img} alt="" className="h-full w-full object-cover max-h-[450px] p-2" onError={(e)=>{e.currentTarget.src='/placeholder.jpg';}} />
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
                      alt="" 
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
                              window.open('https://www.facebook.com/share/17aBWNSxLD/?mibextid=wwXIfr', '_blank');
                            } else if (b.cta === "JOIN NOW") {
                              window.open('https://www.facebook.com/juwaloot', '_blank');
                            } else if (b.cta === "FOLLOW NOW") {
                              window.open('https://www.facebook.com/JuwaJackpots/', '_blank');
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
                    alt={game.replace('.png', '')}
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
                    alt={game.replace('.png', '')}
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
            <p className="text-neutral-300 text-base md:text-lg">Juwa777 offers over 200 social casino games to choose from. Play the best Juwa game collection including slots, fish games, keno, and instant win games. There is always something new to play on Juwagame.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-b from-pink-500 to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center text-center min-h-[200px]">
              <img src="/slots.png" alt="Slots" className="h-28 w-28 md:h-32 md:w-32 object-contain" />
              <div className="mt-6 text-lg md:text-2xl font-extrabold tracking-tight">SLOTS</div>
            </div>
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-b from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center text-center min-h-[200px]">
              <img src="/instantwin.png" alt="Instant Win" className="h-28 w-28 md:h-32 md:w-32 object-contain" />
              <div className="mt-6 text-lg md:text-2xl font-extrabold tracking-tight">INSTANT WIN</div>
          </div>
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-b from-sky-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center text-center min-h-[200px]">
              <img src="/keno.png" alt="Keno" className="h-28 w-28 md:h-32 md:w-32 object-contain" />
              <div className="mt-6 text-lg md:text-2xl font-extrabold tracking-tight">KENO</div>
            </div>
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-b from-emerald-600 to-lime-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center justify-center text-center min-h-[200px]">
              <img src="/fish.png" alt="Fish Games" className="h-28 w-28 md:h-32 md:w-32 object-contain" />
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
                <img src="/payouts.png" alt="Fast Payouts" className="h-44 w-44 object-cover" onError={(e)=>{e.currentTarget.style.display='none'}} />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold tracking-wide">FAST PAYOUTS</h3>
              <p className="mt-2 text-neutral-300 leading-relaxed max-w-xs mx-auto">Lightning‑quick redemptions with trusted, transparent processing.</p>
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
                    <div className="aspect-square relative">
                      <img
                        src={`/Games/${image}`}
                        alt={gameName}
                        className="w-full h-full object-contain"
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
        </div>
      </section>
    );
  };

  const AboutPage = () => (
    <section className="px-6 md:px-10 py-12 bg-neutral-50 dark:bg-neutral-900/40">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <img src={logoUrl} alt="Logo" className="h-32 md:h-40 w-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white text-center">Safe, Fair & Rewarding</h2>
        </div>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300 text-center">Juwa777 is a mobile gaming platform offering over 100 exciting games—including slots, fish shooting, and keno—designed to bring players nonstop entertainment and rewards. We offer fun, skill-based games with sweepstakes entries—play for entertainment and a chance to win prizes. With features like Spin Wheel bonuses, cashback, and hourly lucky draws, Juwa777 delivers a fun and rewarding experience every time you play. Our mission is to provide safe, accessible, and engaging gameplay with unmatched customer service, backed by fast performance, fair RNG, and secure payments.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-green-500 to-green-700 border-green-600">
            <CardContent className="p-8 flex items-center justify-between min-h-[140px]">
              <div className="flex-1 pr-6">
                <div className="font-semibold text-white text-lg">Safe</div>
                <p className="text-sm text-white/90 mt-3">Register through our official Facebook account, install the app, fund your account, and start winning.</p>
              </div>
              <img src="/how it works.png" alt="Safe" className="w-28 h-28 flex-shrink-0" />
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500 to-blue-700 border-blue-600">
            <CardContent className="p-8 flex items-center justify-between min-h-[140px]">
              <div className="flex-1 pr-6">
                <div className="font-semibold text-white text-lg">Fair</div>
                <p className="text-sm text-white/90 mt-3">Designed to comply with sweepstakes laws; no purchase necessary offers available.</p>
              </div>
              <img src="/fair.png" alt="Fair" className="w-28 h-28 flex-shrink-0" />
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-500 to-orange-700 border-orange-600">
            <CardContent className="p-8 flex items-center justify-between min-h-[140px]">
              <div className="flex-1 pr-6">
                <div className="font-semibold text-white text-lg">Rewarding</div>
                <p className="text-sm text-white/90 mt-3">Fast verification and multiple withdrawal options for eligible prize wins.</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img src="/pouts.png" alt="Payouts" className="w-36 h-36 flex-shrink-0" />
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
              <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors" onClick={() => window.open('https://www.facebook.com/JuwaJackpots/', '_blank')}>
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
      <section className="px-6 md:px-10 py-12 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4">Blog & Guides</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">Expert tips, guides, and insights to enhance your Juwa777 gaming experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => {
                  navigate(`blog-${post.id}`);
                }}
                className="cursor-pointer"
              >
              <Card 
                className="overflow-hidden border border-neutral-200/60 dark:border-neutral-800/60 hover:shadow-lg transition-shadow duration-300 group h-full"
              >
                <div className="h-48 overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative">
                  <img 
                    src={post.image || '/blog imgae/download juwa now.png'} 
                    alt={post.title}
                    className="w-full h-full object-cover absolute inset-0"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  {!post.image && (
                    <Package className="h-16 w-16 text-white opacity-80 relative z-10" />
                  )}
        </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-red-600 dark:text-red-400">{post.category}</span>
                    <span className="text-xs text-neutral-500">•</span>
                    <span className="text-xs text-neutral-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
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
        <div className="mb-8 rounded-2xl overflow-hidden">
          <img 
            src="/blog imgae/download juwa now.png" 
            alt="Download Juwa 777 App"
            className="w-full h-auto object-cover"
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

        {/* Download Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Download className="h-8 w-8 text-red-600" />
            Download and Installation Process
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

        {/* iOS Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
            <Smartphone className="h-8 w-8 text-red-600" />
            iOS Installation Instructions
          </h2>
          <Card className="border border-neutral-200/60 dark:border-neutral-800/60">
            <CardContent className="p-6">
              <p className="text-neutral-700 dark:text-neutral-300 mb-4 leading-relaxed">
                For iOS users, the installation process follows a similar pattern but with platform-specific considerations. Download the iOS version directly from our official website. After downloading, you may need to manually trust the application in your iPhone's Settings under General, then Device Management or Profiles & Device Management. Follow the on-screen prompts to complete the installation and begin your gaming journey.
              </p>
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
        <div className="mb-8 rounded-2xl overflow-hidden">
          <img 
            src="/blog imgae/play juwa online.png" 
            alt="Play Juwa Online Games"
            className="w-full h-auto object-cover"
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
                onClick={() => window.open('https://www.facebook.com/people/Fortune-JUWA/61565056061906/?mibextid=wwXIfr&rdid=903GVl4fnaFYCKne&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1JNy4sFfi2%2F%3Fmibextid%3DwwXIfr', '_blank')}
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
          <img src={logoUrl} alt="Logo" className="h-32 md:h-40 w-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white text-center">Contact & Support</h2>
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
            <a href="#faq" className="block group">
              <Card className="border border-neutral-200/60 dark:border-neutral-800/60 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:border-red-500 dark:hover:border-red-500 active:bg-red-50 dark:active:bg-red-900/20 active:border-red-500 transition-all duration-200 hover:shadow-md active:shadow-lg">
                <CardContent className="p-5">
                  <div className="font-semibold text-neutral-900 dark:text-white group-hover:text-red-600 group-active:text-red-600 transition-colors duration-200">FAQ</div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">Payouts, verification, and responsible play.</p>
                  <div className="mt-2 text-xs text-red-600 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">Tap to view FAQ →</div>
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
        question: "What is Juwa777?",
        answer: "Juwa777 is a mobile casino-style gaming application for Android (with guidance for iOS), offering a wide range of interactive games that combine chance, skill, and excitement."
      },
      {
        question: "How many games are available in Juwa777?",
        answer: "Juwa777 offers over 100 games to choose from, including: 🎰 Slot games with multiple themes and paylines, 🐟 Fish shooting games, 🎲 Keno games and other varieties. This diversity ensures there's something for every type of player."
      },
      {
        question: "Is Juwa777 free to use?",
        answer: "Yes, the app is free to download and play. Some content or features may require in-app purchases or virtual credits."
      },
      {
        question: "Is it safe to install Juwa777?",
        answer: "The APK provided on the official site is checked, but downloading apps outside of Google Play or App Store always carries some risk. Users are advised to: Keep antivirus software active, Review app permissions before installing."
      },
      {
        question: "How do I download and install the app on Android?",
        answer: "1. Visit the official website and download the latest APK file. 2. Enable 'Install Unknown Apps' in your Android settings. 3. Locate and open the APK file to install. 4. Follow on-screen prompts."
      },
      {
        question: "What about iOS users?",
        answer: "iOS users can refer to the iOS installation guide available on the official Juwa777 site for step-by-step instructions."
      },
      {
        question: "Can I play Juwa777 games outside the app?",
        answer: "Currently, Juwa777 is primarily available through the mobile app. Future updates may expand play options."
      },
      {
        question: "What rewards and bonuses does Juwa777 offer?",
        answer: "Players can enjoy multiple reward features, including: 🎡 Spin Wheel bonuses, 💵 Cashback rewards, ⏰ Hourly Lucky Draws every few hours. These add excitement and extra chances to win beyond regular gameplay."
      },
      {
        question: "How do I get support if I have an issue?",
        answer: "You can reach out through the Contact Us section on the official website for help with downloads, account issues, or game questions."
      },
      {
        question: "Are there risks involved in playing Juwa777?",
        answer: "Yes. As with any game of chance, there are both potential wins and losses. Play responsibly, understand the odds of each game, and make sure gaming is permitted under your local laws."
      }
    ];

  return (
      <section className="px-6 md:px-10 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <img src={logoUrl} alt="Logo" className="h-32 md:h-40 w-auto mb-6" />
          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            <a href="#contact" className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors">Contact</a>
            <span className="mx-2">&gt;</span>
            <span className="text-neutral-600 dark:text-neutral-300">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-white text-center">Frequently Asked Questions</h2>
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
                <img src={logoUrl} alt="Logo" className="h-10 w-auto" />
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
                <a href="/home" onClick={(e) => { e.preventDefault(); navigate('home'); }} className={route==='home' ? 'font-bold text-red-600' : 'hover:underline'}>Home</a>
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
                <Button style={{ background: playNowColor, borderColor: playNowColor }} className="text-white hover:opacity-90" onClick={() => window.open('https://www.facebook.com/share/17aBWNSxLD/?mibextid=wwXIfr', '_blank')}>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Play now
                </Button>
              </div>
              
              {/* Mobile Navigation */}
              <div className="flex md:hidden items-center gap-3">
                <Button style={{ background: playNowColor, borderColor: playNowColor }} className="text-white hover:opacity-90 px-4 py-2" onClick={() => window.open('https://www.facebook.com/share/17aBWNSxLD/?mibextid=wwXIfr', '_blank')}>
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
                  <a href="/home" onClick={(e) => { e.preventDefault(); navigate('home'); setMobileMenuOpen(false); }} className={`block py-2 text-sm ${route==='home' ? 'font-bold text-red-600' : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'}`}>Home</a>
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
            {route === 'contact' && <ContactPage />}
            {route === 'faq' && <FAQPage />}

            <section className="px-6 md:px-10 pt-6 pb-6">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="relative z-10 flex items-center justify-between gap-4 p-6 md:p-8 bg-gradient-to-r from-red-800 to-red-600 text-white">
                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline-flex items-center justify-center h-12 w-12 rounded-xl bg-white/10"><ShieldCheck className="h-7 w-7" /></span>
                    <div>
                      <div className="text-2xl md:text-3xl font-extrabold tracking-wide">MADE TO PLAY SAFELY</div>
                      <div className="text-white/90 italic">Playing responsibly within limits.</div>
                    </div>
                  </div>
                  <img src={logoUrl} alt="Logo" className="h-10 md:h-12 w-auto" />
                </div>
              </div>
            </section>

            <footer className="px-6 md:px-10 pb-8">
              <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 flex flex-col gap-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <img src={logoUrl} alt="Logo" className="h-7 w-auto" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-300">© 2025 All rights reserved.</span>
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">
                  Copyright 2023, Juwa777 (Juwagame). All rights reserved. Play Juwa game responsibly. Gambling should be entertaining. Remember that you always risk losing the money you bet, so do not spend more than you can afford to lose. If you think you may have a problem, click here.
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>

      {/* Floating Social Icons - Stacked */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* Telegram Icon */}
        <a
          href="https://t.me/Juwabrosofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-neutral-800 rounded-full p-3 shadow-2xl hover:shadow-[#40B3E0]/50 transition-all duration-300 hover:scale-110 active:scale-95 group border-2 border-[#40B3E0]"
          aria-label="Join us on Telegram"
        >
          <img 
            src="/telegram-svgrepo-com.svg" 
            alt="Telegram" 
            className="w-14 h-14 group-hover:scale-105 transition-transform duration-300"
          />
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#40B3E0] animate-ping opacity-30"></span>
        </a>

        {/* Messenger Icon */}
        <a
          href="https://www.facebook.com/share/17aBWNSxLD/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-neutral-800 rounded-full p-3 shadow-2xl hover:shadow-[#0866ff]/50 transition-all duration-300 hover:scale-110 active:scale-95 group border-2 border-[#0866ff]"
          aria-label="Chat with us on Messenger"
        >
          <img 
            src="/Messenger_Icon_Primary_Blue.svg" 
            alt="Messenger" 
            className="w-14 h-14 group-hover:scale-105 transition-transform duration-300"
          />
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#0866ff] animate-ping opacity-30"></span>
        </a>
      </div>

      <style>{` :root { --accent: hsl(${accentHue} 84% 56%); } `}</style>
    </div>
  );
}
