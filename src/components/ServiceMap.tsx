import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, ToggleLeft, Users, Shield, Clock, Search, ExternalLink, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

interface RegionData {
  id: string;
  name: string;
  x: number; // for SVG mapping
  y: number; // for SVG mapping
  teamsCount: number;
  avgResponse: string;
  popularAC: string;
  keyHighlight: string;
  servicedThisMonth: number;
  coverageStatus: 'Fully Active' | 'Express Available' | 'Standard Active';
  hqProximity: string;
}

const REGIONS: RegionData[] = [
  {
    id: 'kl',
    name: 'Kuala Lumpur City Center',
    x: 200,
    y: 150,
    teamsCount: 5,
    avgResponse: '30 - 45 mins',
    popularAC: 'Daikin Inverter, Panasonic nanoe X',
    keyHighlight: 'High-rise luxury condo experts with custom dust-protection sheet kits.',
    servicedThisMonth: 142,
    coverageStatus: 'Fully Active',
    hqProximity: '14 mins via MEX Highway'
  },
  {
    id: 'pj-subang',
    name: 'Petaling Jaya & Subang Jaya',
    x: 130,
    y: 170,
    teamsCount: 4,
    avgResponse: '35 - 50 mins',
    popularAC: 'Mitsubishi Electric, Acson Eco',
    keyHighlight: 'LDP Highway quick dispatch route. Specialized in terraced home ceiling cassettes.',
    servicedThisMonth: 128,
    coverageStatus: 'Express Available',
    hqProximity: '18 mins via LDP'
  },
  {
    id: 'shah-alam',
    name: 'Shah Alam',
    x: 80,
    y: 200,
    teamsCount: 3,
    avgResponse: '40 - 55 mins',
    popularAC: 'York, Daikin Standard, Midea',
    keyHighlight: 'Industrial commercial factory service and routine office cooling maintenance.',
    servicedThisMonth: 95,
    coverageStatus: 'Express Available',
    hqProximity: '24 mins via Federal Highway'
  },
  {
    id: 'klang',
    name: 'Klang District',
    x: 40,
    y: 240,
    teamsCount: 2,
    avgResponse: '45 - 60 mins',
    popularAC: 'Panasonic Standard, Sharp Plasmacluster',
    keyHighlight: 'Coastal region rust-prevention checks for outdoor condenser units.',
    servicedThisMonth: 64,
    coverageStatus: 'Standard Active',
    hqProximity: '32 mins via KESAS'
  },
  {
    id: 'ampang-cheras',
    name: 'Ampang & Cheras',
    x: 270,
    y: 160,
    teamsCount: 3,
    avgResponse: '35 - 50 mins',
    popularAC: 'Toshiba Inverter, Daikin, York',
    keyHighlight: 'MRR2 Highway standby team. Prompt troubleshooting for clogged drainage loops.',
    servicedThisMonth: 112,
    coverageStatus: 'Fully Active',
    hqProximity: '15 mins via MRR2'
  },
  {
    id: 'puchong',
    name: 'Puchong',
    x: 120,
    y: 230,
    teamsCount: 3,
    avgResponse: '30 - 45 mins',
    popularAC: 'Panasonic Deluxe, Daikin Smart',
    keyHighlight: 'High density residential area. Direct pipeline cleaning for multi-tier split units.',
    servicedThisMonth: 119,
    coverageStatus: 'Express Available',
    hqProximity: '12 mins via LDP'
  },
  {
    id: 'serdang-sk',
    name: 'Seri Kembangan & Serdang (HQ base)',
    x: 200,
    y: 250,
    teamsCount: 6,
    avgResponse: '15 - 30 mins',
    popularAC: 'All Major Brands (Inverter Specialists)',
    keyHighlight: 'Immediate home-base dispatch! Rapid fault diagnosing with local parts store inventory.',
    servicedThisMonth: 184,
    coverageStatus: 'Fully Active',
    hqProximity: 'Local HQ Base (0-5 mins)'
  },
  {
    id: 'kajang-bangi',
    name: 'Kajang & Bangi',
    x: 270,
    y: 280,
    teamsCount: 3,
    avgResponse: '35 - 50 mins',
    popularAC: 'Acson Smart, Daikin Go, Mitsubishi',
    keyHighlight: 'SST-compliant service records. Specialized in double-storey home inverter refits.',
    servicedThisMonth: 104,
    coverageStatus: 'Fully Active',
    hqProximity: '16 mins via SILK Highway'
  },
  {
    id: 'cyber-putra',
    name: 'Cyberjaya & Putrajaya',
    x: 180,
    y: 320,
    teamsCount: 4,
    avgResponse: '25 - 40 mins',
    popularAC: 'Daikin Premium VRV, Panasonic Eco',
    keyHighlight: 'Certified smart-home inverter maintenance and government office logistics.',
    servicedThisMonth: 137,
    coverageStatus: 'Fully Active',
    hqProximity: '10 mins via MEX Extension'
  }
];

export default function ServiceMap() {
  const [selectedRegion, setSelectedRegion] = useState<RegionData>(REGIONS[6]); // default to Serdang (HQ)
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredRegion, setHoveredRegion] = useState<RegionData | null>(null);

  // Filter regions based on search
  const filteredRegions = REGIONS.filter(r => 
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.popularAC.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.keyHighlight.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="service-regions-dashboard" className="bg-[#0B1B3D] border border-blue-900/60 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-400 bg-white/10 px-2.5 py-1 rounded-md border border-white/15 uppercase tracking-wider font-sans">
              <Navigation className="w-3.5 h-3.5 animate-spin-slow text-emerald-400" />
              <span>KL & Selangor Regional Coverage</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight font-display">
              Where We Deliver Ice-Cold Cooling ⚡
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
              Tap any sector node on our network map to check real-time technical team availability, estimated dispatch SLA response times, and localized warranty data.
            </p>
          </div>
          
          {/* Quick Search */}
          <div className="relative w-full md:w-72 shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/50">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search your district (e.g. PJ, Kajang)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-white/20 bg-white/10 placeholder-white/40 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/25 focus:border-emerald-400 transition-all font-sans"
            />
          </div>
        </div>

        {/* Dashboard Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Stylized Vector SVG Map Viewport (Interactive Grid) */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col justify-between relative overflow-hidden min-h-[350px] sm:min-h-[420px]">
            
            {/* Ambient Base layer Map background decor */}
            <div className="absolute inset-0 bg-radial-gradient from-emerald-500/10 to-transparent pointer-events-none" />
            
            {/* Live Map Indicators */}
            <div className="flex items-center justify-between z-10 text-[10px] font-mono uppercase text-white/55 border-b border-dashed border-white/10 pb-2.5">
              <span>ACTIVE DISPATCH GRID (LIVE UPDATE)</span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-emerald-450 animate-ping inline-block" />
                <span className="text-emerald-400 font-bold">100% COVERAGE ACTIVE</span>
              </span>
            </div>

            {/* Main Interactive Map Canvas */}
            <div className="relative flex-1 flex items-center justify-center my-4">
              <svg 
                viewBox="0 0 320 360" 
                className="w-full max-w-[310px] h-auto drop-shadow-[0_10px_15px_rgba(15,23,42,0.15)]"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stylized Selangor outline back-shape (simple polygon array for artistic design vibe) */}
                <path
                  d="M10 200 L50 150 L110 110 L180 90 L240 100 L290 130 L310 180 L290 270 L230 330 L160 350 L90 320 L40 280 Z"
                  className="fill-white/5 stroke-white/20 stroke-2"
                  strokeDasharray="4 4"
                />

                {/* Sub regional boundaries for aesthetic backdrop */}
                <path d="M110 110 L200 150 L270 160" className="stroke-white/10 stroke-1" strokeDasharray="3 3"/>
                <path d="M200 250 L130 170 L200 150" className="stroke-white/10 stroke-1" strokeDasharray="3 3"/>
                <path d="M200 250 L180 320 L270 280" className="stroke-white/10 stroke-1" strokeDasharray="3 3"/>
                
                {/* Connecting Transit Network Paths representing highway dispatch links */}
                {REGIONS.map((region, i) => {
                  // Connect regions to the Serdang HQ base (REGIONS[6])
                  if (region.id === 'serdang-sk') return null;
                  const hq = REGIONS[6];
                  return (
                    <line
                      key={`line-${region.id}`}
                      x1={hq.x}
                      y1={hq.y}
                      x2={region.x}
                      y2={region.y}
                      className={`stroke-emerald-400/35 stroke-[1.5] transition-all duration-300 ${
                        selectedRegion.id === region.id ? 'stroke-emerald-400/80 stroke-2 stroke-dash' : ''
                      }`}
                      strokeDasharray="5 5"
                    />
                  );
                })}

                {/* HQ Base Radial Waves */}
                <circle cx={200} cy={250} r="25" className="fill-emerald-400/10 stroke-emerald-400/20 stroke-1" />
                <circle cx={200} cy={250} r="14" className="fill-emerald-400/20 stroke-emerald-400/30 stroke-1 animate-pulse" />

                {/* Interactive Node Markers */}
                {REGIONS.map((r) => {
                  const isSelected = selectedRegion.id === r.id;
                  const isHovered = hoveredRegion?.id === r.id;
                  const isHq = r.id === 'serdang-sk';
                  
                  return (
                    <g 
                      key={r.id} 
                      className="cursor-pointer group"
                      onClick={() => setSelectedRegion(r)}
                      onMouseEnter={() => setHoveredRegion(r)}
                      onMouseLeave={() => setHoveredRegion(null)}
                    >
                      {/* Interactive Trigger Zone */}
                      <circle 
                        cx={r.x} 
                        cy={r.y} 
                        r="22" 
                        className="fill-transparent stroke-transparent" 
                      />

                      {/* Ripple pulsing animation for selected or HQ node */}
                      {(isSelected || isHq) && (
                        <circle 
                          cx={r.x} 
                          cy={r.y} 
                          r={isSelected ? "12" : "15"} 
                          className="stroke-emerald-400 fill-transparent stroke-[1] animate-ping"
                        />
                      )}

                      {/* Main Node bubble marker */}
                      <circle 
                        cx={r.x} 
                        cy={r.y} 
                        r={isHq ? "9" : "7.5"} 
                        className={`transition-all duration-300 ${
                          isSelected 
                            ? 'fill-emerald-400 stroke-white stroke-[2.5] scale-125' 
                            : isHq 
                            ? 'fill-emerald-500 stroke-white stroke-[2]' 
                            : 'fill-white/30 group-hover:fill-emerald-400 group-hover:scale-110 stroke-white/20 stroke-[1.5]'
                        }`}
                      />

                      {/* Small crown on HQ node */}
                      {isHq && (
                        <circle 
                          cx={r.x} 
                          cy={r.y} 
                          r="3" 
                          className="fill-white" 
                        />
                      )}
                    </g>
                  );
                })}

                {/* Map Labels for select regions */}
                <g className="pointer-events-none select-none font-sans font-extrabold text-[8px] tracking-tight">
                  <rect x="175" y="130" width="50" height="12" rx="4" fill="white" />
                  <text x="200" y="139" fill="#0a3d30" textAnchor="middle" className="font-extrabold text-[7px]">KUALA LUMPUR</text>
                  
                  <rect x="155" y="222" width="90" height="13" rx="4" fill="#0b1b3d" />
                  <text x="200" y="231" fill="#34d399" textAnchor="middle" className="font-extrabold text-[7px]">THE KHAN'S HQ (SERDANG)</text>
                  
                  <rect x="8" y="246" width="36" height="12" rx="3" fill="white" />
                  <text x="26" y="254" fill="#475569" textAnchor="middle">KLANG</text>
                  
                  <rect x="250" y="293" width="50" height="12" rx="3" fill="white" />
                  <text x="275" y="301" fill="#475569" textAnchor="middle">KAJANG / BANGI</text>
                </g>
              </svg>
            </div>

            {/* Quick Map Legend */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3 border-t border-white/10">
              <span className="text-[10px] text-white/80 flex items-center space-x-1.5 font-sans">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block border border-white" />
                <span>Selected Area</span>
              </span>
              <span className="text-[10px] text-white/80 flex items-center space-x-1.5 font-sans">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[7px] font-bold border border-white/20">★</span>
                <span>The Khan Operations Hub</span>
              </span>
              <span className="text-[10px] text-white/80 flex items-center space-x-1.5 font-sans">
                <span className="w-2 h-0.5 border-t border-dashed border-emerald-400 inline-block" />
                <span>Express Transit Highway Routes</span>
              </span>
            </div>
          </div>

          {/* Right Column: Dynamic Region KPI Detail Board */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRegion.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="bg-white/10 border border-white/15 rounded-2xl p-6 shadow-xs flex-1 flex flex-col justify-between space-y-6"
              >
                {/* Panel Top Details */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-white/60 bg-white/10 px-2 py-0.5 rounded-md uppercase tracking-wide font-mono">
                      Service Region Profile
                    </span>
                    <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      selectedRegion.coverageStatus === 'Fully Active' 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : selectedRegion.coverageStatus === 'Express Available'
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}>
                      ● {selectedRegion.coverageStatus}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xl font-extrabold text-[#FFFFFF] tracking-tight font-display flex items-center gap-1.5">
                      <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span>{selectedRegion.name}</span>
                    </h4>
                    <p className="text-xs text-white/60 flex items-center gap-1">
                      <span>Proximity:</span>
                      <strong className="text-white font-semibold font-mono">{selectedRegion.hqProximity}</strong>
                    </p>
                  </div>

                  {/* Operational Metrics Block */}
                  <div className="grid grid-cols-2 gap-3.5 pt-2">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-left">
                      <div className="text-[10px] text-white/60 font-bold uppercase tracking-wider flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        <span>SLA Response</span>
                      </div>
                      <div className="text-base font-extrabold text-[#FFFFFF] mt-1 font-mono">
                        {selectedRegion.avgResponse}
                      </div>
                    </div>

                    <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-left">
                      <div className="text-[10px] text-white/60 font-bold uppercase tracking-wider flex items-center space-x-1">
                        <Users className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Teams On-duty</span>
                      </div>
                      <div className="text-base font-extrabold text-[#FFFFFF] mt-1 font-mono">
                        {selectedRegion.teamsCount} Active Teams
                      </div>
                    </div>
                  </div>

                  {/* Highlights and reviews */}
                  <div className="space-y-3.5 pt-2">
                    <div className="space-y-1">
                      <span className="text-[10px] font-extrabold uppercase text-white/50 tracking-widest font-mono">Territorial Expertise</span>
                      <p className="text-xs text-white bg-white/5 p-3 rounded-xl border border-white/10 leading-relaxed">
                        {selectedRegion.keyHighlight}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-extrabold uppercase text-white/50 tracking-widest font-mono">Common Local Aircon Brands Handled</span>
                      <p className="text-xs text-white/90 font-medium font-sans">
                        {selectedRegion.popularAC}
                      </p>
                    </div>

                    <div className="bg-white/5 p-3 rounded-lg border border-white/10 text-center flex items-center justify-between text-xs font-semibold text-white/80">
                      <span>Completed services this month</span>
                      <span className="bg-white/10 px-2 py-0.5 rounded border border-white/15 font-bold font-mono text-emerald-400">
                        {selectedRegion.servicedThisMonth} Units
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Booking Link integrated inside for great UX */}
                <div className="pt-4 border-t border-white/10 hover:scale-[1.01] transition-transform duration-200">
                  <a
                    href={`${BUSINESS_INFO.links.whatsapp}?text=Hi,%20I'm%20located%20in%20${encodeURIComponent(selectedRegion.name)}.%20I%20would%20like%20to%20book%20an%20aircon%2520service.`}
                    target="_blank"
                    rel="no-referrer"
                    className="w-full bg-emerald-500 hover:bg-emerald-405 text-[#0A3D30] font-black py-3.5 rounded-xl text-xs flex items-center justify-center space-x-2 shadow-md transition-all duration-200"
                  >
                    <Zap className="w-4 h-4 fill-[#0A3D30] text-[#0A3D30] animate-bounce" />
                    <span>Instant SLA Booking for {selectedRegion.name.split(' ')[0]}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Quick Search Filtering list results (fallback list view to ensure 100% accessible layout) */}
        {searchQuery && (
          <div className="bg-white/10 border border-white/15 rounded-2xl p-4 space-y-2 max-h-40 overflow-y-auto">
            <p className="text-[10px] text-white/60 uppercase tracking-widest font-mono font-bold">Search results ({filteredRegions.length}):</p>
            {filteredRegions.map((region) => (
              <button
                key={`search-res-${region.id}`}
                onClick={() => {
                  setSelectedRegion(region);
                  setSearchQuery('');
                }}
                className="w-full text-left font-sans text-xs hover:bg-white/10 p-2.5 rounded-lg border border-transparent hover:border-white/10 flex items-center justify-between text-white transition-colors animate-fade-in"
              >
                <span className="font-semibold">{region.name}</span>
                <span className="text-[10px] text-emerald-400 font-mono italic">SLA: {region.avgResponse} ➜</span>
              </button>
            ))}
            {filteredRegions.length === 0 && (
              <p className="text-xs text-white/50 italic">No direct match. We cover all neighboring areas in KL & Selangor, feel free to call us!</p>
            )}
          </div>
        )}

        {/* Guarantee Seal */}
        <div className="bg-white/5 border border-dashed border-white/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center flex-shrink-0 border border-white/10">
            <Shield className="w-5.5 h-5.5 text-emerald-400" />
          </div>
          <div className="space-y-0.5">
            <h5 className="text-xs font-black text-[#FFFFFF] uppercase tracking-wider font-sans">
              30-Day Workmanship Leak Warranty Coverage
            </h5>
            <p className="text-xs text-white/80 leading-relaxed">
              Whichever district you reside in, our localized warranty covers all serviced cooling units for water leaks. Backed by {BUSINESS_INFO.companyName}.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
