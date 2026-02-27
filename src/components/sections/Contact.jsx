import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Instagram, Linkedin } from '../Icons';
import { CONTACT, SOCIAL_LINKS } from '@/lib/constants';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-deer-900/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-max mx-auto" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-deer-400 uppercase tracking-wider mb-4 block">
            Get in Touch
          </span>
          <h2 className="heading-lg text-white mb-6">
            We're Here to{' '}
            <span className="gradient-text-deer">Help</span>
          </h2>
          <p className="body-lg">
            Have questions about Chauffit? Want to partner with us? 
            We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-panel p-8 md:p-10">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 p-5 rounded-xl bg-surface-800/40 border border-white/[0.04] hover:border-white/[0.08] transition-all group hover:-translate-y-1 duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-deer-600/20 flex items-center justify-center group-hover:bg-deer-600/30 transition-colors">
                  <Mail className="w-6 h-6 text-deer-400" />
                </div>
                <div>
                  <p className="text-sm text-surface-400 mb-1">Email Us</p>
                  <p className="font-medium text-white">{CONTACT.email}</p>
                </div>
              </a>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-surface-800/40 border border-white/[0.04] hover:border-white/[0.08] transition-all group hover:-translate-y-1 duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-600/20 flex items-center justify-center group-hover:bg-pink-600/30 transition-colors">
                  <Instagram className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <p className="text-sm text-surface-400 mb-1">Instagram</p>
                  <p className="font-medium text-white">@chauffit</p>
                </div>
              </a>
            </div>

            <div className="flex items-center justify-center">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-surface-800/40 border border-white/[0.04] hover:border-white/[0.08] transition-all group hover:-translate-y-1 duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-surface-400 mb-1">LinkedIn</p>
                  <p className="font-medium text-white">Chauffit</p>
                </div>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/[0.06] text-center">
              <p className="text-surface-400 text-sm">
                Service available in Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}