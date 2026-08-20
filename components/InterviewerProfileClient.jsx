"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Award, 
  Coins, 
  Sparkles,
  Layout, 
  Database, 
  Cpu, 
  Binary, 
  GitBranch, 
  MessageSquareCode, 
  Terminal, 
  Smartphone
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { GrayTitle, SectionLabel } from "@/components/reusables";
import { CATEGORY_LABEL, EXPECT_ITEMS } from "@/lib/data";
import SlotPicker from "@/components/SlotPicker";
import { StarsBackgroundDemo } from "@/components/demo-stars-bg";

const CATEGORY_ICONS = {
  FRONTEND: Layout,
  BACKEND: Database,
  FULLSTACK: Cpu,
  DSA: Binary,
  SYSTEM_DESIGN: GitBranch,
  BEHAVIORAL: MessageSquareCode,
  DEVOPS: Terminal,
  MOBILE: Smartphone,
};

export default function InterviewerProfileClient({ interviewer, dbUser }) {
  // Container stagger options
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
  };

  return (
    <main className='min-h-screen bg-black text-stone-200 selection:bg-violet-500/20 selection:text-violet-400'>
      {/* ── Hero identity banner ── */}
      <section className='relative border-b border-white/5 overflow-hidden py-4'>
        <StarsBackgroundDemo />
        
        {/* Soft background ambient glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-emerald-500/2 rounded-full blur-3xl pointer-events-none" />

        <div className='relative max-w-6xl mx-auto px-6 sm:px-8 pt-20 pb-12 flex flex-col gap-6 sm:gap-8'>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link 
              href='/explore'
              className='inline-flex items-center text-stone-500 hover:text-violet-400 transition-colors text-xs font-medium gap-1.5 self-start group'
            >
              <motion.span whileHover={{ x: -3 }} className="inline-flex items-center">
                <ArrowLeft size={13} />
              </motion.span>
              Back to explore
            </Link>
          </motion.div>

          <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 120,
                damping: 14,
                delay: 0.1
              }}
              whileHover={{ scale: 1.04 }}
              className="relative p-1.5 rounded-2xl bg-white/2 border border-white/5 shadow-[0_0_24px_rgba(139,92,246,0.03)] shrink-0"
            >
              <div className="absolute inset-0 bg-linear-to-br from-violet-500/20 to-transparent opacity-40 rounded-2xl blur-xs" />
              <Avatar className='w-28 h-28 border border-white/10 shrink-0 rounded-xl relative z-10'>
                <AvatarImage
                  src={interviewer.imageUrl}
                  alt={interviewer.name}
                  className='rounded-xl object-cover'
                />
                <AvatarFallback className='rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 text-3xl font-medium'>
                  {interviewer.name?.[0] ?? "?"}
                </AvatarFallback>
              </Avatar>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='flex flex-col gap-3 min-w-0 pt-2'
            >
              <h1 className='font-serif text-[clamp(2.25rem,4vw,3.25rem)] leading-none tracking-tight'>
                <GrayTitle>{interviewer.name}</GrayTitle>
              </h1>

              {interviewer.title && interviewer.company && (
                <p className='text-sm sm:text-base text-stone-400 font-light flex items-center justify-center sm:justify-start gap-2'>
                  <span className="text-stone-300 font-medium">{interviewer.title}</span>
                  <span className='text-stone-700'>·</span>
                  <span className="text-violet-400/80 font-medium">{interviewer.company}</span>
                </p>
              )}

              <div className='flex items-center justify-center sm:justify-start gap-2 flex-wrap mt-1'>
                {interviewer.yearsExp && (
                  <Badge
                    variant='outline'
                    className='border-white/5 bg-white/2 text-stone-400 text-xs px-3 py-1 rounded-lg flex items-center gap-1'
                  >
                    <Award size={12} className="text-stone-500" />
                    {interviewer.yearsExp}+ yrs experience
                  </Badge>
                )}
                <Badge
                  variant='outline'
                  className='border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs px-3 py-1 rounded-lg flex items-center gap-1'
                >
                  <Coins size={12} className="text-violet-400" />
                  {interviewer.creditRate ?? 10} credits / session
                </Badge>
                {interviewer.availabilities?.length > 0 && (
                  <Badge
                    variant='outline'
                    className='border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs px-3 py-1 rounded-lg flex items-center gap-1'
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Slots Available
                  </Badge>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className='max-w-6xl mx-auto px-6 sm:px-8 py-12 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start relative z-10'>
        {/* ── LEFT COLUMN ── */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className='lg:col-span-3 flex flex-col gap-6 order-2 lg:order-1'
        >
          {/* About Section */}
          {interviewer.bio && (
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -3, borderColor: "rgba(255, 255, 255, 0.08)" }}
              className='bg-[#0f0f11]/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            >
              <SectionLabel>About</SectionLabel>
              <p className='text-sm sm:text-base text-stone-300 font-light leading-relaxed whitespace-pre-line'>
                {interviewer.bio}
              </p>
            </motion.div>
          )}

          {/* Specialties Section */}
          {interviewer.categories?.length > 0 && (
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -3, borderColor: "rgba(255, 255, 255, 0.08)" }}
              className='bg-[#0f0f11]/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col gap-5 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            >
              <div>
                <SectionLabel>Specialties</SectionLabel>
                <p className='text-xs text-stone-500 font-light mt-1'>
                  Interview categories this expert covers.
                </p>
              </div>
              <div className='flex flex-wrap gap-2.5'>
                {interviewer.categories.map((cat) => {
                  const IconComponent = CATEGORY_ICONS[cat] || Sparkles;
                  return (
                    <motion.span
                      key={cat}
                      whileHover={{ y: -2, scale: 1.03 }}
                      className='inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-xl border border-violet-500/15 bg-violet-500/5 text-violet-400/90 font-medium cursor-default transition-all duration-200 hover:border-violet-500/30 hover:bg-violet-500/10'
                    >
                      <IconComponent size={12} className="text-violet-400/60" />
                      {CATEGORY_LABEL[cat] ?? cat}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* What to expect Section */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -3, borderColor: "rgba(255, 255, 255, 0.08)" }}
            className='bg-[#0f0f11]/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          >
            <div>
              <SectionLabel>What to expect</SectionLabel>
              <p className='text-xs text-stone-500 font-light mt-1'>
                Every session on Prept includes the following.
              </p>
            </div>
            <ul className='flex flex-col gap-5'>
              {EXPECT_ITEMS.map(([icon, title, desc]) => (
                <motion.li 
                  key={title} 
                  whileHover={{ x: 4 }}
                  className='flex items-start gap-4 group/item cursor-default'
                >
                  <span className='mt-0.5 w-10 h-10 shrink-0 rounded-xl bg-violet-500/5 border border-violet-500/15 flex items-center justify-center text-base group-hover/item:border-violet-500/30 group-hover/item:bg-violet-500/10 transition-all duration-250'>
                    {icon}
                  </span>
                  <div className='flex flex-col gap-0.5'>
                    <p className='text-sm font-semibold text-stone-200 group-hover/item:text-violet-400 transition-colors duration-250'>
                      {title}
                    </p>
                    <p className='text-xs text-stone-500 font-light leading-relaxed'>
                      {desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN (Slot Picker) ── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 16,
            delay: 0.3
          }}
          className="lg:col-span-2 lg:sticky top-24 order-1 lg:order-2"
        >
          <SlotPicker
            interviewer={interviewer}
            interviewerCredits={interviewer.creditRate ?? 10}
            userCredits={dbUser?.credits ?? 0}
            currentUser={dbUser}
          />
        </motion.div>
      </div>
    </main>
  );
}
