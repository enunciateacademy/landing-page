import React from 'react';
import { Play, ExternalLink, Video, Sparkles } from 'lucide-react';
import { demoVideosData, mathExplanationVideos } from '../data/demoVideos';
import { contactData } from '../data/contact';
import { VideoCard } from './VideoCard';

export const DemoClassesSection: React.FC = () => {
  return (
    <section id="demo-classes" className="py-16 sm:py-24 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-950 border border-slate-800 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Video className="w-4 h-4 text-amber-400" />
            <span>Complete Academic Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
            Don't Just Take Our Word for It — <span className="text-amber-400">Watch Our Classes</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            See how our teachers explain concepts, simplify difficult topics, and interact with young students.
          </p>
        </div>

        {/* Live Demo Classes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {demoVideosData.map((item) => (
            <VideoCard
              key={item.id}
              title={item.title}
              date={item.date}
              youtubeUrl={item.youtubeUrl}
              youtubeId={item.youtubeId}
              subject={item.subject}
            />
          ))}
        </div>

        {/* Explore More Free Classes Banner */}
        <div className="mb-20 bg-navy-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2 justify-center sm:justify-start">
              <Sparkles className="w-5 h-5 text-amber-400" /> Explore 50+ Free Sample Lessons
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Access topic-wise recorded lectures across Mathematics, Intelligence, English and GK.
            </p>
          </div>

          <a
            href={contactData.blogFreeClassesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient-btn px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider font-bold flex items-center gap-2 flex-shrink-0 shadow-lg"
          >
            <span>WATCH MORE FREE CLASSES</span>
            <ExternalLink className="w-4 h-4 text-navy-950" />
          </a>
        </div>

        {/* Mathematics Recorded Explanation Sessions Section (#15) */}
        <div className="pt-8 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <h3 className="text-2xl sm:text-4xl font-black font-heading text-white">
              Mathematics — Recorded Explanation Sessions
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Step-by-step problem solving, calculation shortcuts, and OMR test strategy videos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mathExplanationVideos.map((item) => (
              <VideoCard
                key={item.id}
                title={item.title}
                date={item.date}
                youtubeUrl={item.youtubeUrl}
                youtubeId={item.youtubeId}
                subject={item.subject}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
