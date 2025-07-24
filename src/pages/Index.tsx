import ResumeHeader from "@/components/ResumeHeader";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import InterestsSection from "@/components/InterestsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ResumeHeader />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <InterestsSection />
      <ContactSection />
    </div>
  );
};

export default Index;