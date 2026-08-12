import React, { useState, useEffect } from 'react';
import { Play, Calendar, ExternalLink, X } from 'lucide-react';

interface VideoCardProps {
  title: string;
  date?: string;
  youtubeUrl: string;
  youtubeId: string;
  subject?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ title, date, youtubeUrl, youtubeId, subject }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Close modal on Escape key press and disable background scrolling
  useEffect(() => {
    if (!isPlaying) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPlaying(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isPlaying]);

  // Generate standard YouTube thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <>
      <div className="bg-navy-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:border-amber-400/50 transition-all flex flex-col group">
        
        {/* Video Thumbnail Box */}
        <div className="relative aspect-video bg-slate-950 overflow-hidden cursor-pointer" onClick={() => setIsPlaying(true)}>
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60"></div>

          {/* Subject Badge */}
          {subject && (
            <span className="absolute top-3 left-3 bg-navy-950/90 text-amber-400 border border-amber-400/40 text-[10px] font-bold px-2.5 py-1 rounded-md backdrop-blur-md uppercase tracking-wider">
              {subject}
            </span>
          )}

          {/* Date Tag */}
          {date && (
            <span className="absolute top-3 right-3 bg-slate-900/90 text-slate-300 text-[10px] font-medium px-2 py-1 rounded-md flex items-center gap-1 backdrop-blur-md">
              <Calendar className="w-3 h-3 text-amber-400" /> {date}
            </span>
          )}

          {/* Play Icon Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-amber-400 text-navy-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 fill-navy-950 ml-1" />
            </div>
          </div>
        </div>

        {/* Info Content */}
        <div className="p-4 flex flex-col justify-between flex-grow space-y-3">
          <h4 className="text-sm font-bold text-white line-clamp-2 font-heading group-hover:text-amber-400 transition-colors">
            {title}
          </h4>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <button
              onClick={() => setIsPlaying(true)}
              className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 text-xs"
            >
              <Play className="w-3.5 h-3.5 fill-amber-400" /> Watch Video
            </button>

            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-200 flex items-center gap-1 text-[11px]"
            >
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

      {/* Video Modal Player */}
      {isPlaying && (
        <div 
          className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setIsPlaying(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden border border-slate-700 shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="flex items-center justify-between p-4 bg-navy-900 text-white border-b border-slate-800">
              <h3 className="text-sm sm:text-base font-bold line-clamp-1 font-heading">{title}</h3>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(false);
                }}
                className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title={title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
