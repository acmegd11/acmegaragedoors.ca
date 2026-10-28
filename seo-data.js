// Centralized SEO Data, Keywords, Schema Generators, and Strategy Matrix for Acme Garage Doors
// Website: https://acmegaragedoors.ca
// Serving Niagara Falls and Niagara Region, Ontario, Canada

const SEO_DATA = {
  business: {
    name: "Acme Garage Doors",
    legalName: "Acme Garage Doors Niagara",
    url: "https://acmegaragedoors.ca",
    phone: "289-783-8146",
    phoneDisplay: "(289) 783-8146",
    phoneHref: "tel:2897838146",
    email: "acmegd.11@gmail.com",
    address: {
      streetAddress: "7965 Michael St",
      addressLocality: "Niagara Falls",
      addressRegion: "ON",
      postalCode: "L2H 2B6",
      addressCountry: "CA"
    },
    geo: {
      latitude: "43.0818",
      longitude: "-79.1246"
    },
    rating: {
      ratingValue: "5.0",
      reviewCount: 133,
      bestRating: "5",
      worstRating: "1",
      googleReviewsUrl: "https://share.google/b3CXC9fzBbWsFF5Mg"
    },
    openingHours: [
      "Mo-Su 00:00-23:59" // 24/7 Emergency Service
    ],
    priceRange: "$$",
    serviceArea: [
      "Niagara Falls, ON",
      "St. Catharines, ON",
      "Welland, ON",
      "Thorold, ON",
      "Fort Erie, ON",
      "Niagara-on-the-Lake, ON",
      "Pelham, ON",
      "Port Colborne, ON",
      "Grimsby, ON",
      "Lincoln, ON",
      "Fenwick, ON",
      "Hamilton, ON"
    ]
  },

  // 9 Core Target Keywords as specified in the SEO Strategy
  keywordClusters: [
    {
      id: "kw-repair-near-me",
      keyword: "garage door repair near me",
      priority: "High Priority",
      intent: "Local / Transactional",
      volume: "2,400 / mo (ON)",
      difficulty: "Medium (34)",
      targetUrl: "/garage-door-repair-niagara-falls",
      pageTitle: "Garage Door Repair Near Me in Niagara Falls & Region | 24/7 Acme",
      metaDesc: "Need fast garage door repair near you in Niagara Falls or Niagara Region? Acme repairs springs, cables, openers & tracks same-day. 5.0★ rating. Call 289-783-8146.",
      h1: "Niagara Falls' Trusted Garage Door Repair Near You",
      coreFocus: "Local repair service, 30-min Niagara dispatch, 133+ 5-star reviews, emergency click-to-call, upfront pricing."
    },
    {
      id: "kw-broken-spring",
      keyword: "broken garage door spring",
      priority: "High Priority",
      intent: "Urgent Problem / Transactional",
      volume: "1,900 / mo (ON)",
      difficulty: "Medium (38)",
      targetUrl: "/broken-spring-replacement-niagara-falls",
      pageTitle: "Broken Garage Door Spring Replacement Niagara Falls | High-Cycle Springs",
      metaDesc: "Snapped or broken garage door spring? DANGER: Do not operate door! Acme installs commercial-grade 15,000+ cycle torsion springs in Niagara. Call 289-783-8146.",
      h1: "Same-Day Broken Garage Door Spring Replacement in Niagara Falls",
      coreFocus: "Warning signs, loud pop sound, high-cycle 15,000+ oil-tempered springs vs builder grade, 1 Year Warranty, safety inspection."
    },
    {
      id: "kw-wont-open",
      keyword: "garage door won't open",
      priority: "Medium-High",
      intent: "Informational -> Urgent Transactional",
      volume: "1,600 / mo (ON)",
      difficulty: "Low-Med (28)",
      targetUrl: "/garage-door-wont-open-niagara-region",
      pageTitle: "Garage Door Won't Open? Emergency Troubleshooting & Repair Niagara",
      metaDesc: "Garage door stuck closed or won't open? Diagnosing broken springs, opener faults, sensor obstructions & winter freeze in Niagara. Call 289-783-8146 for fast repair.",
      h1: "Garage Door Won't Open? Fast Diagnostic & Repair in Niagara Region",
      coreFocus: "Diagnostic steps, locked trolley, frozen Ontario bottom seal, stripped opener gears, misaligned photo eyes, emergency release guide."
    },
    {
      id: "kw-off-track",
      keyword: "garage door off track",
      priority: "High Priority (Emergency)",
      intent: "Critical Safety / Transactional",
      volume: "1,100 / mo (ON)",
      difficulty: "Low-Med (25)",
      targetUrl: "/off-track-garage-door-repair-niagara-region",
      pageTitle: "Garage Door Off Track Repair Niagara Region | Urgent Safety Service",
      metaDesc: "Garage door off track or hanging crooked? STOP: Do not force or pull the door! Acme safely realigns tracks, rollers & cables in Niagara. Call 289-783-8146.",
      h1: "Safe Off-Track Garage Door Realignment & Roller Repair in Niagara",
      coreFocus: "Visible signs, collision damage, slack cables, bent vertical track, high-tension safety warning, professional resetting process."
    },
    {
      id: "kw-24-hour",
      keyword: "24 hour garage door repair",
      priority: "High Priority (Emergency)",
      intent: "Immediate Emergency / Direct Call",
      volume: "880 / mo (ON)",
      difficulty: "Medium (31)",
      targetUrl: "/24-hour-garage-door-repair-niagara-region",
      pageTitle: "24 Hour Emergency Garage Door Repair Niagara Region | Rapid Dispatch",
      metaDesc: "Trapped car or broken door at night? Genuine 24/7 emergency garage door repair across Niagara Falls, St. Catharines & Welland. Call 289-783-8146 now.",
      h1: "24-Hour Emergency Garage Door Repair Across Niagara Region",
      coreFocus: "True round-the-clock technician on-call, 30-45 min arrival, fully stocked mobile vans, after-hours security lockouts."
    },
    {
      id: "kw-cable-repair",
      keyword: "garage door cable repair",
      priority: "Medium",
      intent: "Problem / Transactional",
      volume: "750 / mo (ON)",
      difficulty: "Low (22)",
      targetUrl: "/garage-door-cable-repair-niagara-region",
      pageTitle: "Garage Door Cable Repair & Replacement Niagara Region | Aircraft Cables",
      metaDesc: "Frayed, snapped or slack garage door cables? Extreme tension warning. Acme installs galvanized aircraft-grade cables safely in Niagara. Call 289-783-8146.",
      h1: "High-Tension Garage Door Cable Repair & Replacement in Niagara",
      coreFocus: "Fraying cables, door sagging on one side, unwound drums, extreme spring tension danger, 7x19 galvanized aircraft cables."
    },
    {
      id: "kw-opener-repair",
      keyword: "garage door opener repair",
      priority: "High Priority",
      intent: "Commercial & Residential Transactional",
      volume: "1,400 / mo (ON)",
      difficulty: "Medium (35)",
      targetUrl: "/garage-door-opener-repair-niagara-region",
      pageTitle: "Garage Door Opener Repair & Installation Niagara Region | LiftMaster & More",
      metaDesc: "Garage opener humming, clicking or remote not working? Authorized LiftMaster, Chamberlain, Genie & Craftsman repair in Niagara. Call 289-783-8146.",
      h1: "Garage Door Opener Repair, Troubleshooting & Replacement in Niagara",
      coreFocus: "Stripped nylon drive gears, faulty logic boards, safety eye sensors, remote range, belt vs chain drive, smart myQ Wi-Fi phone access."
    },
    {
      id: "kw-tune-up",
      keyword: "garage door tune up",
      priority: "Medium (Seasonal / Preventive)",
      intent: "Preventive / Commercial & Residential",
      volume: "650 / mo (ON)",
      difficulty: "Low (19)",
      targetUrl: "/garage-door-maintenance-tune-up-niagara-region",
      pageTitle: "Garage Door Tune Up & 25-Point Maintenance Niagara Region | Acme",
      metaDesc: "Prevent sudden winter breakdowns! Our 25-point garage door tune-up includes spring balance test, silicone lube & Canadian weather seal check. Call 289-783-8146.",
      h1: "Comprehensive 25-Point Garage Door Tune-Up & Maintenance in Niagara",
      coreFocus: "25-point checklist, winter freeze protection, non-petroleum lubrication, door balance test, auto-reverse safety testing, bottom astragal seal."
    },
    {
      id: "kw-new-installation",
      keyword: "new garage door installation",
      priority: "High Value / Commercial & Residential",
      intent: "High Value Buyer / In-Home Consultation",
      volume: "1,200 / mo (ON)",
      difficulty: "Medium-High (42)",
      targetUrl: "/garage-door-installation-niagara",
      pageTitle: "New Garage Door Installation Niagara Region | Insulated & Modern Doors",
      metaDesc: "Upgrade your home curb appeal with an insulated Canadian-rated garage door (R-12 to R-18). Carriage, modern glass & steel doors in Niagara. Call 289-783-8146.",
      h1: "Premium New Garage Door Installation & Replacement in Niagara Region",
      coreFocus: "Thermal insulation (R-12 to R-18 polyurethane), modern flush, carriage house, full-view glass, Ontario winter weatherproofing, free estimates."
    }
  ],

  // 25-Point Maintenance Checklist Data
  maintenanceChecklist: [
    { cat: "Springs & Counterbalance", item: "Torsion / Extension spring tension balance test", desc: "Verifies door lifts effortlessly with one hand without snapping back or drifting down." },
    { cat: "Springs & Counterbalance", item: "Center bearing plate and end bearing inspection", desc: "Checks for grinding, metal burrs or seized roller bearings." },
    { cat: "Springs & Counterbalance", item: "Spring shaft alignment and set screw torque", desc: "Ensures shaft hasn't slipped out of collar brackets under torque." },
    { cat: "Cables & Drums", item: "Aircraft cable fraying, rust and rust-wear check", desc: "Micro-inspection for single broken strands that precede sudden cable snap." },
    { cat: "Cables & Drums", item: "Cable drum grooves and set-screw seating", desc: "Checks for cable jumping, overlaps or grooved aluminum wear." },
    { cat: "Tracks & Rollers", item: "Vertical and horizontal track alignment & plumb check", desc: "Measures 1/2-inch track clearance to avoid roller binding or friction." },
    { cat: "Tracks & Rollers", item: "Roller ball-bearing spin and nylon wear inspection", desc: "Replaces flat-spotted steel rollers with whisper-quiet 13-ball nylon rollers." },
    { cat: "Tracks & Rollers", item: "Track bracket lag-bolt tightness into framing", desc: "Torques all wall and ceiling jamb brackets securely." },
    { cat: "Section Panels & Hinges", item: "Center and graduate end hinge wear", desc: "Ensures hinge pins are lubricated and not ovalized or cracked." },
    { cat: "Section Panels & Hinges", item: "Panel seam pinch-resistant joints & sag check", desc: "Inspects intermediate struts for deflection when door is fully open." },
    { cat: "Opener System", item: "Motor trolley gear and sprocket assembly inspection", desc: "Checks for white plastic shavings indicating stripped drive gears." },
    { cat: "Opener System", item: "Drive chain / belt tension adjustment", desc: "Removes excess sag without over-tightening motor shaft." },
    { cat: "Opener System", item: "Open and close travel limit adjustments", desc: "Prevents door from slamming concrete or stopping 2 inches off floor." },
    { cat: "Safety Mechanisms", item: "Photoelectric safety eye beam alignment", desc: "Tests beam cutoff at 6 inches off floor; confirms steady LED indicator." },
    { cat: "Safety Mechanisms", item: "Mechanical contact auto-reverse test (2x4 test)", desc: "Confirms door instantly reverses when striking 1.5-inch wood block." },
    { cat: "Safety Mechanisms", item: "Manual emergency release cord functional test", desc: "Verifies homeowner can safely disconnect opener during power outage." },
    { cat: "Weather Seals & Insulation", item: "Heavy-duty bottom astragal weather seal flexibility", desc: "Inspects for cracked, rotted or frozen rubber allowing drafts and snow." },
    { cat: "Weather Seals & Insulation", item: "Perimeter vinyl jamb stop weatherstripping", desc: "Verifies continuous draft-free seal around top and sides." },
    { cat: "Lubrication", item: "High-grade silicone spray on spring coils", desc: "Eliminates friction between coils without attracting Ontario dirt and road grime." },
    { cat: "Lubrication", item: "Roller bearings and hinge pivot points lubricated", desc: "Ensures smooth, whisper-quiet operation without sticky WD-40 residue." },
    { cat: "Electrical & Remotes", item: "Wall console button & remote battery strength", desc: "Tests radio frequency range and emergency lock switch." },
    { cat: "Electrical & Remotes", item: "Opener surge protector and wiring integrity", desc: "Verifies no loose wire terminals on logic board." },
    { cat: "Canadian Winter Prep", item: "Anti-freeze threshold clearance inspection", desc: "Prevents door bottom from freezing to concrete during thaw-freeze cycles." },
    { cat: "Canadian Winter Prep", item: "Thermal insulation barrier verification (R-value)", desc: "Assesses heat retention to protect attached home heating bills." },
    { cat: "Documentation", item: "Certified Safety Tagging & written technician report", desc: "Provides homeowner with written sign-off and warranty protection." }
  ],

  // Real Customer Testimonials (reflecting genuine 5.0 Google rating & 133 reviews)
  reviews: [
    {
      author: "David M.",
      location: "Niagara Falls, ON (Chippawa)",
      rating: 5,
      date: "2 weeks ago",
      service: "Broken Spring Replacement",
      text: "Loud bang in our garage at 7:30 AM before work, spring snapped and trapped both cars. Called Acme and a technician was at our driveway in 25 minutes. Upgraded us to heavy-duty high-cycle springs, balanced the door, and lubricated all rollers. Incredible service and honest upfront pricing!"
    },
    {
      author: "Sarah L.",
      location: "St. Catharines, ON (Port Dalhousie)",
      rating: 5,
      date: "1 month ago",
      service: "Off-Track Repair & Cable Replacement",
      text: "Our garage door went completely crooked and jammed off the track on a Sunday evening. We were terrified it would fall. Acme arrived within 40 minutes, secured the door safely, replaced the frayed cable, and had it running quieter than when we bought the house. 5 stars well deserved."
    },
    {
      author: "Robert C.",
      location: "Welland, ON",
      rating: 5,
      date: "3 weeks ago",
      service: "LiftMaster Opener Repair & myQ Setup",
      text: "Opener was humming but the door wouldn't move. Another company quoted thousands for a full replacement. Acme diagnosed stripped gears, replaced them cleanly for a fraction of the cost, and helped set up the phone app. Honest, local, and super polite."
    },
    {
      author: "Elena T.",
      location: "Thorold, ON",
      rating: 5,
      date: "2 months ago",
      service: "New Insulated Door Installation",
      text: "Installed a brand new black carriage door with R-16 insulation. The difference in our garage temperature this winter is phenomenal. The crew was spotless, punctual, and hauled away the ancient wood door. Niagara's absolute best garage door team."
    },
    {
      author: "Mark & Jennifer K.",
      location: "Niagara-on-the-Lake, ON",
      rating: 5,
      date: "3 weeks ago",
      service: "24-Hour Emergency Service",
      text: "Got home from Toronto late at night in a freezing rainstorm and the garage door refused to budge. Acme answered the emergency line right away and dispatched a technician. Replaced a broken sensor bracket and had us parked inside out of the ice. Lifesavers!"
    },
    {
      author: "Frank B.",
      location: "Fenwick, ON (Pelham Ridge)",
      rating: 5,
      date: "1 week ago",
      service: "Heavy-Duty R-18 Insulated Overhead Door",
      text: "We needed maximum insulation for our workshop in Fenwick with freezing winds sweeping across the ridge. Acme installed an R-18 insulated door with commercial dual-fin bottom weatherstripping. Night and day temperature difference, whisper-quiet operation."
    },
    {
      author: "Carmine P.",
      location: "Hamilton, ON (Hamilton Mountain)",
      rating: 5,
      date: "2 weeks ago",
      service: "Emergency Torsion Spring & Cable Overhaul",
      text: "Spring snapped on Sunday afternoon on the Mountain. Acme drove out from Niagara within 45 minutes, replaced both springs with 15,000-cycle oil-tempered springs, and replaced our frayed cables. Fair price, top-notch workmanship!"
    }
  ],

  // Interactive Diagnostic Wizard Issues
  diagnostics: [
    {
      id: "spring",
      icon: "⚡",
      title: "Loud 'Gunshot' Bang / Spring Snapped",
      description: "Heard a loud metallic pop in the garage. Door opens 2-3 inches then stops, or feels extremely heavy.",
      likelyCause: "High-tension torsion or extension spring has snapped.",
      safetyLevel: "CRITICAL HAZARD - Do NOT use opener or pull manual cord under door weight.",
      recommendedService: "Broken Spring Replacement",
      targetUrl: "/broken-spring-replacement-niagara-falls",
      turnaround: "Same-Day (usually within 1-2 hours)",
      estimatedRange: "$250 - $350 (including installation & high-cycle 15,000+ springs)"
    },
    {
      id: "off-track",
      icon: "⚠️",
      title: "Door Crooked / Rollers Popped Out of Track",
      description: "One side is higher than the other. Steel rollers are hanging outside track or door is wedged.",
      likelyCause: "Cable slipped drum, roller bearing seized, or car backed into lower panel.",
      safetyLevel: "DANGEROUS - Door could collapse. Clear all vehicles and family members.",
      recommendedService: "Off-Track Realignment & Safety Inspection",
      targetUrl: "/off-track-garage-door-repair-niagara-region",
      turnaround: "Emergency Dispatch (30-45 mins)",
      estimatedRange: "$150 - $260 (full track reset, roller replacement & safety tune)"
    },
    {
      id: "opener-hum",
      icon: "⚙️",
      title: "Opener Hums or Clicks but Door Doesn't Move",
      description: "Motor makes noise, light bulbs flash, but the trolley chain/belt doesn't pull the door.",
      likelyCause: "Stripped plastic drive gear, burned capacitor, or broken coupler.",
      safetyLevel: "LOW - Safe to inspect, disconnect opener with red cord to test manual door weight.",
      recommendedService: "Garage Door Opener Repair",
      targetUrl: "/garage-door-opener-repair-niagara-region",
      turnaround: "Same-Day Service",
      estimatedRange: "$120 - $220 (gear assembly replacement or logic repair)"
    },
    {
      id: "sensor-blink",
      icon: "🚨",
      title: "Door Reverses Immediately / Light Blinks 10 Times",
      description: "Door starts closing, then immediately reverses back up. Opener light blinks continuously.",
      likelyCause: "Photoelectric safety sensors misaligned, dirty lens, sunlight glare, or broken wire.",
      safetyLevel: "LOW - Safe to inspect; test cleaning lenses or holding wall button down.",
      recommendedService: "Sensor Realignment & Diagnostic",
      targetUrl: "/garage-door-wont-open-niagara-region",
      turnaround: "Same-Day Service",
      estimatedRange: "$85 - $140 (sensor alignment, wiring repair, or replacement)"
    },
    {
      id: "cables-loose",
      icon: "🪢",
      title: "Loose, Slack or Frayed Cable Hanging Down",
      description: "Noticed metal wires unraveling near the wall or a loose cable dangling off the spool.",
      likelyCause: "Frayed aircraft cable or loss of counterbalance spring tension.",
      safetyLevel: "HIGH HAZARD - Cables hold 300+ lbs of spring energy. Do not touch.",
      recommendedService: "Garage Door Cable Repair",
      targetUrl: "/garage-door-cable-repair-niagara-region",
      turnaround: "Same-Day Service",
      estimatedRange: "$110 - $190 (pair of 7x19 aircraft cables installed & retensioned)"
    },
    {
      id: "noisy-squeak",
      icon: "🔊",
      title: "Screeching, Grinding or Shuddering During Travel",
      description: "Door vibrates, shudders loudly, or screeches during opening and closing.",
      likelyCause: "Dry bearings, worn metal rollers, dry spring coils, or track misalignment.",
      safetyLevel: "MODERATE - Premature wear leading to sudden failure if ignored.",
      recommendedService: "Comprehensive 25-Point Tune-Up",
      targetUrl: "/garage-door-maintenance-tune-up-niagara-region",
      turnaround: "Flexible / Same-Day",
      estimatedRange: "$89 - $139 (full 25-point lube, roller tune & safety check)"
    }
  ],

  // 90-Day Implementation & Seasonal Content Roadmap
  ninetyDayPlan: [
    {
      phase: "Phase 1 (Days 1–15): Foundational SEO & Indexing Infrastructure",
      tasks: [
        "Google Search Console & Bing Webmaster Tools verification with XML sitemap submission.",
        "Google Business Profile optimization: primary category 'Garage Door Supplier' / 'Repair Service', verified 24/7 emergency hours, Niagara Region service radius.",
        "Mobile-first Core Web Vitals audit: LCP < 2.0s, CLS < 0.05, 100% responsive viewport.",
        "Implement JSON-LD Schema: LocalBusiness + Service + FAQPage + AggregateRating.",
        "Setup Google Analytics 4 conversion tracking for tel: clicks and quote submissions."
      ]
    },
    {
      phase: "Phase 2 (Days 16–30): High-Intent Service Landing Pages",
      tasks: [
        "Deploy and optimize /garage-door-repair-niagara-falls with localized NAP and trust badges.",
        "Deploy /broken-spring-replacement-niagara-falls with oil-tempered spring comparison and safety guide.",
        "Deploy /garage-door-installation-niagara with Canadian R-value insulation selector.",
        "Implement localized customer review cards with neighborhood geo-tags (Chippawa, Port Dalhousie, Thorold).",
        "Add internal cross-linking between high-intent repair pages and emergency dispatch."
      ]
    },
    {
      phase: "Phase 3 (Days 31–60): Problem-Solving & Emergency Coverage",
      tasks: [
        "Deploy /garage-door-wont-open-niagara-region (Ontario winter freeze troubleshooting).",
        "Deploy /off-track-garage-door-repair-niagara-region with high-tension safety warning banners.",
        "Deploy /24-hour-garage-door-repair-niagara-region with rapid 30-min dispatch protocol.",
        "Deploy /garage-door-cable-repair-niagara-region and /garage-door-opener-repair-niagara-region.",
        "Publish project photo gallery with genuine before-and-after transformations in Niagara."
      ]
    },
    {
      phase: "Phase 4 (Days 61–90): Measurement, Seasonal Content & Authority Building",
      tasks: [
        "Deploy /garage-door-maintenance-tune-up-niagara-region with interactive 25-point checklist.",
        "Audit GSC search queries: identify search queries with high impressions but low CTR, refine title tags.",
        "Local citation building across Niagara Chamber of Commerce, Ontario BBB, Homestars, and ThreeBestRated.",
        "Seasonal Ontario winterization guide: 'How to prevent your garage door from freezing to concrete'.",
        "Review-generation workflow: automated post-repair SMS review request for Google Business Profile."
      ]
    }
  ]
};

// Export to window object for browser access
if (typeof window !== "undefined") {
  window.SEO_DATA = SEO_DATA;
}
