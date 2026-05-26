import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import data from '../../../../data/dummy_data.json';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';

const PAGE_TRANSITION = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const SECTIONS = {
  hero: null,
  about: null,
  skills: null,
  projects: null,
  experience: null,
  testimonials: null,
  contact: null,
};

export default function ChooseAdventurePortfolio() {
  const [scene, setScene] = useState('hero');
  const [history, setHistory] = useState([]);

  const navigate = useCallback((next) => {
    if (!(next in SECTIONS)) return;
    setHistory((prev) => [...prev, scene]);
    setScene(next);
  }, [scene]);

  const reset = useCallback(() => {
    setScene('hero');
    setHistory([]);
  }, []);

  const renderScene = () => {
    switch (scene) {
      case 'hero':
        return (
          <HeroSection
            data={data}
            onBegin={() => navigate('about')}
          />
        );
      case 'about':
        return (
          <AboutSection
            data={data}
            onChoice={navigate}
          />
        );
      case 'skills':
        return (
          <SkillsSection
            data={data}
            onChoice={navigate}
          />
        );
      case 'projects':
        return (
          <ProjectsSection
            data={data}
            onChoice={navigate}
          />
        );
      case 'experience':
        return (
          <ExperienceSection
            data={data}
            onChoice={navigate}
          />
        );
      case 'testimonials':
        return (
          <TestimonialsSection
            data={data}
            onChoice={navigate}
          />
        );
      case 'contact':
        return (
          <ContactSection
            data={data}
            onReset={reset}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full">
      {scene !== 'hero' && (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0e17]/80 backdrop-blur border-b border-violet-900/30 px-4 py-2.5 flex items-center justify-between font-mono">
          <span className="text-xs text-violet-400 tracking-widest uppercase">
            {data.personal.name}
          </span>
          <div className="hidden sm:flex items-center gap-1">
            {['about', 'skills', 'projects', 'experience', 'testimonials', 'contact'].map((s) => (
              <button
                key={s}
                onClick={() => navigate(s)}
                className={`px-3 py-1 rounded-lg text-xs transition-colors capitalize ${scene === s ? 'bg-violet-800/50 text-white' : 'text-slate-500 hover:text-slate-200'}`}
              >
                {s}
              </button>
            ))}
          </div>
          <button
            onClick={reset}
            className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
          >
            ↺ Restart
          </button>
        </nav>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={scene}
          {...PAGE_TRANSITION}
          className={scene !== 'hero' ? 'pt-10' : ''}
        >
          {renderScene()}
        </motion.div>
      </AnimatePresence>

      {scene !== 'hero' && (
        <div className="fixed bottom-4 right-4 z-50 font-mono">
          <div className="flex gap-1">
            {['about', 'skills', 'projects', 'experience', 'testimonials', 'contact'].map((s) => (
              <button
                key={s}
                onClick={() => navigate(s)}
                title={s}
                className={`w-2 h-2 rounded-full transition-colors ${scene === s ? 'bg-violet-400' : 'bg-slate-700 hover:bg-slate-500'}`}
              />
            ))}
          </div>
        </div>
      )}
import React from 'react';
import data from '../../../../data/dummy_data.json';

/**
 * Choose Adventure Portfolio Template
 * Category: Interactive / Experimental
 * Description: Choose-your-own-adventure navigation with branching paths where user choices determine which sections they see next. Story-driven exploration.
 */
export default function ChooseAdventure() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-8 font-sans">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          {data.personal.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">{data.personal.title}</p>
        <div className="p-8 border-2 border-dashed border-cyan-500/40 rounded-2xl bg-gray-900/50 backdrop-blur-sm">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
            Interactive / Experimental
          </span>
          <h2 className="text-2xl font-bold text-gray-200 mb-3">Choose Adventure Template</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Choose-your-own-adventure navigation with branching paths where user choices determine which sections they see next. Story-driven exploration.
          </p>
          <p className="text-cyan-400 font-semibold">Open an issue to contribute and build this template!</p>
        </div>
      </div>
    </div>
  );
}
