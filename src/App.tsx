import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Results2026Section } from './components/Results2026Section';
import { Results2025Section } from './components/Results2025Section';
import { Courses } from './components/Courses';
import { WhyEnunciate } from './components/WhyEnunciate';
import { PreparationSystemSection } from './components/PreparationSystemSection';
import { SparkBatchSection } from './components/SparkBatchSection';
import { LearnerAppSection } from './components/LearnerAppSection';
import { HowToStartExamSection } from './components/HowToStartExamSection';
import { StudyMaterials } from './components/StudyMaterials';
import { DemoClassesSection } from './components/DemoClassesSection';
import { RecordedClassesSection } from './components/RecordedClassesSection';
import { ParentTrustSystemSection } from './components/ParentTrustSystemSection';
import { Testimonials } from './components/Testimonials';
import { Faculty } from './components/Faculty';
import { FAQ } from './components/FAQ';
import { RegistrationCTASection } from './components/RegistrationCTASection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { EnrollModal } from './components/EnrollModal';

export default function App() {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState<string | undefined>(undefined);

  const handleOpenEnrollModal = (courseTitle?: string) => {
    setPreselectedCourse(courseTitle);
    setEnrollModalOpen(true);
  };

  const handleCloseEnrollModal = () => {
    setEnrollModalOpen(false);
    setPreselectedCourse(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased">
      
      {/* Header Bar */}
      <Header onOpenEnrollModal={handleOpenEnrollModal} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1 & 2. Hero */}
        <Hero onOpenEnrollModal={handleOpenEnrollModal} />
        
        {/* 3. Trust indicators */}
        <TrustBar />

        {/* 4. 2026 Sainik Results */}
        <Results2026Section onOpenEnrollModal={handleOpenEnrollModal} />

        {/* 5. AISSEE 2025 Results */}
        <Results2025Section />

        {/* 6. Courses */}
        <Courses onOpenEnrollModal={handleOpenEnrollModal} />

        {/* 7. Why Enunciate */}
        <WhyEnunciate />

        {/* 8. Preparation System */}
        <PreparationSystemSection />

        {/* 9 & 10. SPARK Batch & Schedules */}
        <SparkBatchSection />

        {/* 11. Learner App Platform */}
        <LearnerAppSection />

        {/* 12. How to Start Your Exam */}
        <HowToStartExamSection />

        {/* 13. Study Material */}
        <StudyMaterials onOpenEnrollModal={handleOpenEnrollModal} />

        {/* 14 & 15. Demo Classes & Mathematics Explanation Sessions */}
        <DemoClassesSection />

        {/* 16. Recorded Subject Video Archives */}
        <RecordedClassesSection />

        {/* 17. Parent Trust & Ecosystem */}
        <ParentTrustSystemSection />

        {/* Testimonials & Faculty */}
        <Testimonials />
        <Faculty />

        {/* 18. FAQ */}
        <FAQ />

        {/* 19. Registration CTA */}
        <RegistrationCTASection onOpenEnrollModal={handleOpenEnrollModal} />

        {/* Final Admissions CTA */}
        <FinalCTA onOpenEnrollModal={handleOpenEnrollModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Callouts & Interactive Lead Modal */}
      <FloatingWhatsApp />
      <StickyMobileCTA onOpenEnrollModal={handleOpenEnrollModal} />
      <EnrollModal 
        isOpen={enrollModalOpen} 
        onClose={handleCloseEnrollModal} 
        preselectedCourse={preselectedCourse} 
      />

    </div>
  );
}

