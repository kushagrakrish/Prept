"use client";

import { motion } from "motion/react";
import {
  GoldTitle,
  GrayTitle,
  SectionHeading,
  SectionLabel,
} from "@/components/reusables";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodeDemo } from "@/components/demo-components-animate-code";
import { StarsBackgroundDemo } from "@/components/demo-stars-bg";
import { AI_TAGS, AVATARS, LOGOS, ROLES, SLOTS } from "@/lib/data";
import { Wallet } from "lucide-react";
import { Bot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BentoCard from "@/components/BentoCard";
import MockUI from "@/components/MockUI";
import { PricingTable } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className='bg-black overflow-x-hidden text-stone-200'>
      {/* HERO */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='relative min-h-screen grid grid-cols-1 lg:grid-cols-5 px-4 sm:px-8 pt-28 sm:pt-32 pb-20 overflow-hidden'
      >
        <StarsBackgroundDemo />

        {/* LEFT */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className='col-span-full lg:col-span-3 flex flex-col items-center justify-center text-center lg:-rotate-2 relative z-10'
        >
          <Badge variant='gold' className="mb-6">Powered by AI — Now in Beta</Badge>

          <h1 className='font-serif relative text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-4xl leading-tight'>
            <GrayTitle>Ace your next interview</GrayTitle>
            <br />
            <GoldTitle>with real experts</GoldTitle>
          </h1>

          <p className='relative text-sm sm:text-base md:text-lg text-stone-400 max-w-xl mt-6 leading-relaxed'>
            Book 1:1 mock interviews with senior engineers from top companies.
            Get AI-powered feedback, role-specific questions, and the confidence
            to land your dream job.
          </p>

          <div className='relative flex justify-center gap-2 sm:gap-4 mt-10 sm:w-auto'>
            <Link href='/onboarding'>
              <Button variant='gold' size='hero'>
                Get started
              </Button>
            </Link>

            <Link href='/explore'>
              <Button variant='outline' size='hero'>
                Browse Interviewers →
              </Button>
            </Link>
          </div>

          <div className='relative flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-16'>
            <div className='flex'>
              {AVATARS.map((av, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-[#0a0a0b] overflow-hidden ${
                    i > 0 ? "-ml-2" : ""
                  }`}
                >
                  <Image
                    src={av.src}
                    alt='user avatar'
                    width={32}
                    height={32}
                    className='w-full h-full object-cover'
                  />
                </div>
              ))}
            </div>

            <p className='text-sm text-stone-500 text-center sm:text-left'>
              <strong className='text-stone-400 font-medium'>
                2,400+ engineers
              </strong>{" "}
              cracked FAANG interviews via Prept
            </p>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className='col-span-full lg:col-span-2 flex items-center justify-center lg:justify-start mt-12 lg:mt-0 lg:rotate-3 relative z-10'
        >
          <CodeDemo duration={30000} writing />
        </motion.div>
      </motion.section>

      {/* LOGOS */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='relative z-10 border-y border-white/5 py-14'
      >
        <p className='text-center text-xs font-semibold text-stone-600 tracking-widest uppercase mb-8'>
          Interviewees landed roles at
        </p>

        <div className='flex flex-wrap items-center justify-center gap-12 sm:gap-24 px-6'>
          {LOGOS.map((l) => (
            <Image
              key={l.alt}
              src={l.src}
              alt={l.alt}
              width={50}
              height={50}
              className='h-6 w-auto opacity-40 grayscale hover:opacity-80 transition-opacity duration-200'
            />
          ))}
        </div>
      </motion.section>

      {/* FEATURES */}
      <section className='relative z-10 py-28 max-w-5xl mx-auto px-6'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <SectionLabel>Features</SectionLabel>
          <SectionHeading
            gray='Everything you need,'
            gold="nothing you don't"
          />
        </motion.div>

        <div className='grid grid-cols-12 gap-4'>
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='col-span-12 md:col-span-7'
          >
            <BentoCard
              icon={<Bot size={20} className='text-violet-400' />}
              title={<GrayTitle>AI Question Generator</GrayTitle>}
              desc="Interviewers get a live AI co-pilot generating role-specific questions on demand — system design, behavioural, DSA — all tailored to the candidate's level."
            >
              <div className='flex flex-wrap gap-2 mt-5'>
                {AI_TAGS.map((t) => (
                  <Badge key={t.label} variant={t.active ? "gold" : "outline"}>
                    {t.label}
                  </Badge>
                ))}
              </div>
            </BentoCard>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='col-span-12 md:col-span-5'
          >
            <BentoCard
              icon={<Wallet size={16} className='text-violet-400' />}
              title={<GrayTitle>Credit System</GrayTitle>}
              desc='Subscribe for monthly credits. Book sessions. Interviewers earn and withdraw any time.'
            >
              <div className='mt-5 rounded-xl bg-white/2 border border-white/5 p-5 flex justify-between items-end'>
                <div>
                  <p className='text-xs text-stone-600 mb-1'>Your balance</p>
                  <p className='font-serif text-4xl leading-none bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                    28
                  </p>
                  <p className='text-xs text-stone-600 mt-1'>
                    credits remaining
                  </p>
                </div>

                <Badge variant='gold'>+10 this month</Badge>
              </div>
            </BentoCard>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='col-span-12 md:col-span-4'
          >
            <BentoCard
              icon='📹'
              title='HD Video Calls'
              desc='Powered by Stream. Screen sharing, recording, and instant playback links — all built in.'
            >
              <MockUI rows={3} />
            </BentoCard>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='col-span-12 md:col-span-4'
          >
            <BentoCard
              icon='💬'
              title='Persistent Chat'
              desc='Message your interviewer before and after the call. Share resources, prep notes, and follow-ups in one thread.'
            />
          </motion.div>

          {/* Card 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='col-span-12 md:col-span-4'
          >
            <BentoCard
              icon='🔒'
              title='Security by Arcjet'
              desc='Bot protection, rate limiting, and abuse prevention baked into every API route.'
            />
          </motion.div>

          {/* Card 6 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='col-span-12 md:col-span-6'
          >
            <BentoCard
              icon='📊'
              title={<GrayTitle>AI Feedback Reports</GrayTitle>}
              desc='Post-interview analysis by Gemini with actionable insights.'
            >
              <MockUI rows={5} />
            </BentoCard>
          </motion.div>

          {/* Card 7 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='col-span-12 md:col-span-6'
          >
            <BentoCard
              icon='🗓️'
              title={<GoldTitle>Slot-based Scheduling</GoldTitle>}
              desc='Interviewers set availability once. Interviewees pick from open slots and confirm with one click — no back-and-forth needed.'
            >
              <div className='flex flex-wrap gap-2 mt-5'>
                {SLOTS.map((s) => (
                  <span
                    key={s.label}
                    className={`text-xs px-3 py-1.5 rounded-lg border ${s.cls}`}
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </BentoCard>
          </motion.div>
        </div>
      </section>

      {/* ROLES */}
      <section className='relative z-10 pb-28 max-w-5xl mx-auto px-6'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <SectionLabel>Who it&apos;s for</SectionLabel>
          <SectionHeading gray='Built for both sides' gold='of the table' />
        </motion.div>

        <div className='grid md:grid-cols-2 gap-6'>
          {ROLES.map((role, idx) => (
            <motion.div
              key={role.label}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
              whileHover={{ y: -6, borderColor: "rgba(139, 92, 246, 0.2)" }}
              className='relative bg-[#0f0f11] border border-white/5 rounded-2xl p-12 h-full transition duration-300 overflow-hidden shadow-xl'
            >
              <div className='absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.04)_0%,transparent_70%)] pointer-events-none' />

              <span className='inline-block text-xs font-semibold text-violet-400 tracking-widest uppercase border border-violet-500/20 bg-violet-500/10 rounded-full px-3 py-1.5 mb-5'>
                {role.label}
              </span>

              <h3 className='font-serif text-2xl tracking-tight mb-4'>
                {role.title}
              </h3>

              <p className='text-sm text-stone-400 leading-relaxed mb-8'>
                {role.desc}
              </p>

              <ul className='space-y-3'>
                {role.perks.map((p) => (
                  <li key={p} className='flex gap-3 text-sm text-stone-400'>
                    <span className='mt-0.5 min-w-4 h-4 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-xs text-violet-400'>
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className='relative z-10 pb-28 max-w-5xl mx-auto px-6'
      >
        <div className='text-center mb-16'>
          <SectionLabel>Pricing</SectionLabel>
          <SectionHeading
            gray='Simple, transparent'
            gold='credit-based plans'
          />
          <p className='text-stone-400 mt-3 text-sm'>
            Each credit = one session. Unused credits roll over.
          </p>
        </div>

        <PricingTable />
      </motion.section>

      {/* CTA */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className='relative z-10 pb-28 max-w-5xl mx-auto px-6'
      >
        <div className='relative border border-violet-500/20 rounded-3xl px-3 sm:px-16 py-20 bg-linear-to-br from-violet-500/5 text-center overflow-hidden shadow-2xl'>
          <StarsBackgroundDemo />
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(139,92,246,0.03)_0%,transparent_70%)] pointer-events-none" />

          <h2 className='font-serif relative text-4xl md:text-5xl leading-tight tracking-tight mb-4'>
            <GrayTitle>Your next interview</GrayTitle>
            <br />
            <GoldTitle>starts here</GoldTitle>
          </h2>

          <p className='relative text-stone-400 font-light text-sm mb-11'>
            Join thousands of engineers already levelling up on Prept.
          </p>

          <div className='flex flex-col sm:flex-row justify-center gap-4 relative z-10'>
            <Link href='/onboarding' className='relative'>
              <Button variant='gold' size='hero'>
                Get started
              </Button>
            </Link>

            <Link href='/explore' className='relative'>
              <Button variant='outline' size='hero'>
                Browse Interviewers →
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
