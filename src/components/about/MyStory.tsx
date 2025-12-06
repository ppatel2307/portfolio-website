/**
 * MyStory component.
 * Displays the user's personal story with image placeholders.
 */

interface ImagePlaceholderProps {
  id: string;
  src?: string;
  alt?: string;
  className?: string;
}

function ImagePlaceholder({ id, src, alt, className = '' }: ImagePlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt || 'Story image'}
        className={`rounded-xl object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`
        rounded-xl
        bg-gradient-to-br from-ink-100 to-ink-50
        dark:from-ink-700 dark:to-ink-800
        border-2 border-dashed border-ink-200 dark:border-ink-600
        flex flex-col items-center justify-center
        text-ink-400 dark:text-ink-500
        ${className}
      `}
    >
      <svg className="w-12 h-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-sm font-medium">Image {id}</span>
    </div>
  );
}

interface StorySectionProps {
  children: React.ReactNode;
  className?: string;
}

function StorySection({ children, className = '' }: StorySectionProps) {
  return (
    <div className={`mb-12 ${className}`}>
      {children}
    </div>
  );
}

function StoryText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg text-ink-600 dark:text-ink-300 leading-relaxed mb-6">
      {children}
    </p>
  );
}

export function MyStory() {
  // Image sources - update these paths when you add your images
  const images = {
    birth: '', // Add path like '/images/story/birth.jpg'
    childhood: '', // Add path like '/images/story/childhood.jpg'
    woodworking1: '', // '/images/story/woodworking1.jpg'
    woodworking2: '', // '/images/story/woodworking2.jpg'
    woodworking3: '', // '/images/story/woodworking3.jpg'
    sports1: '', // '/images/story/sports1.jpg'
    sports2: '', // '/images/story/sports2.jpg'
    sports3: '', // '/images/story/sports3.jpg'
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Birth & Early Life */}
      <StorySection>
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <StoryText>
              I was born on April 5th, 2004, in Maryland—Hanuman Jayanti. Growing up with that 
              symbolism taught me early the importance of <span className="font-semibold text-accent dark:text-accent-light">resilience</span>, <span className="font-semibold text-accent dark:text-accent-light">discipline</span>, and <span className="font-semibold text-accent dark:text-accent-light">staying grounded</span> in 
              my values. Those principles still guide how I work and how I treat people.
            </StoryText>
          </div>
          <div className="md:col-span-1">
            <ImagePlaceholder 
              id="1" 
              src={images.birth} 
              alt="Birth photo"
              className="w-full aspect-square"
            />
          </div>
        </div>
      </StorySection>

      {/* Growing Up */}
      <StorySection>
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1 order-2 md:order-1">
            <ImagePlaceholder 
              id="2" 
              src={images.childhood} 
              alt="Childhood photo"
              className="w-full aspect-square"
            />
          </div>
          <div className="md:col-span-2 order-1 md:order-2">
            <StoryText>
              I grew up in Clarksville, Maryland, surrounded by hard-working families and exceptional 
              schools. I learned quickly that environment shapes ambition. The saying <em>"show me your 
              friends and I'll show you your future"</em> stayed with me, pushing me to surround myself 
              with peers who motivate me. From this came one of my strongest professional traits: 
              <span className="font-semibold text-accent dark:text-accent-light"> I actively seek out high-performing teams and elevate the energy around me.</span>
            </StoryText>
          </div>
        </div>
      </StorySection>

      {/* Problem Solving & Woodworking */}
      <StorySection>
        <StoryText>
          My love for problem-solving started with Legos. I built anything I could imagine. That 
          instinct evolved into woodworking—a craft that taught me <span className="font-semibold text-accent dark:text-accent-light">persistence</span>, <span className="font-semibold text-accent dark:text-accent-light">creativity</span>, and 
          the belief that <span className="font-semibold text-accent dark:text-accent-light">there is always a way forward</span>. When I hit a roadblock, I don't stop, 
          I adapt. This hands-on mindset is the foundation of how I approach engineering challenges today.
        </StoryText>
        
        <div className="grid grid-cols-3 gap-4 mt-6">
          <ImagePlaceholder 
            id="3" 
            src={images.woodworking1} 
            alt="Woodworking 1"
            className="w-full aspect-[4/3]"
          />
          <ImagePlaceholder 
            id="4" 
            src={images.woodworking2} 
            alt="Woodworking 2"
            className="w-full aspect-[4/3]"
          />
          <ImagePlaceholder 
            id="5" 
            src={images.woodworking3} 
            alt="Woodworking 3"
            className="w-full aspect-[4/3]"
          />
        </div>
      </StorySection>

      {/* Sports */}
      <StorySection>
        <StoryText>
          Sports shaped another part of me. Playing lacrosse and football taught me <span className="font-semibold text-accent dark:text-accent-light">discipline</span>, <span className="font-semibold text-accent dark:text-accent-light">teamwork</span>, 
          and how to push myself beyond my comfort zone. I learned how to communicate under pressure, 
          trust my teammates, and hold myself accountable—skills that translate directly into 
          collaborative engineering work.
        </StoryText>
        
        <div className="grid grid-cols-3 gap-4 mt-6">
          <ImagePlaceholder 
            id="6" 
            src={images.sports1} 
            alt="Sports 1"
            className="w-full aspect-[4/3]"
          />
          <ImagePlaceholder 
            id="7" 
            src={images.sports2} 
            alt="Sports 2"
            className="w-full aspect-[4/3]"
          />
          <ImagePlaceholder 
            id="8" 
            src={images.sports3} 
            alt="Sports 3"
            className="w-full aspect-[4/3]"
          />
        </div>
      </StorySection>

      {/* Family */}
      <StorySection>
        <StoryText>
          My family shaped the rest. My dad taught me to <span className="font-semibold text-accent dark:text-accent-light">lead with kindness</span> and help people 
          whenever I can. My mom taught me <span className="font-semibold text-accent dark:text-accent-light">empathy and loyalty</span>. My sister taught me how to be 
          social, confident, and outgoing. Together, they made me someone who can work with all kinds 
          of people—someone who listens first, collaborates naturally, and strengthens a team both 
          professionally and personally.
        </StoryText>
      </StorySection>

      {/* Hobbies */}
      <StorySection>
        <StoryText>
          Outside of academics and engineering, I have a wide range of hobbies—<span className="text-ink-800 dark:text-cream-50">camping, guitars, 
          motorcycles, snowboarding, traveling, surfing, cooking, art, woodworking, teaching, fitness</span>. 
          These aren't just hobbies; they've made me comfortable connecting with people from all 
          backgrounds. Whether I'm on a construction site, in a research lab, or working with 
          developers, I can find common ground with almost anyone.
        </StoryText>
      </StorySection>

      {/* Conclusion */}
      <StorySection className="mb-0">
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent/20 dark:to-accent/10 rounded-2xl p-8 border border-accent/20">
          <p className="text-xl text-ink-700 dark:text-ink-200 leading-relaxed font-medium">
            All of these experiences shaped the way I build, learn, and collaborate. They made me 
            someone who <span className="text-accent dark:text-accent-light">thinks creatively</span>, <span className="text-accent dark:text-accent-light">works hard</span>, <span className="text-accent dark:text-accent-light">adapts quickly</span>, and <span className="text-accent dark:text-accent-light">genuinely enjoys 
            being part of a team</span>. And that's the person I bring into every project.
          </p>
        </div>
      </StorySection>
    </div>
  );
}

