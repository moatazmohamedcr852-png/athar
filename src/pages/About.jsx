import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './About.css';

const slidesData = [
  {
    title: "من نحن؟",
    text: `"أثر" هي مبادرة تصميم مستدامة تعمل على تحويل الورق المهمل إلى ديكورات منزلية ومنتجات عملية عالية الجودة ومصنوعة يدويًا. نحن نؤمن بأن النفايات ليست نهاية رحلة المنتج، بل هي بداية لشيء جديد.`
  },
  {
    title: "مهمتنا",
    text: `تتمثل مهمتنا في مواجهة التحديات البيئية من خلال منح الورق المُتخلص منه محليًا حياة ثانية عبر الحرفية الابتكارية والإنتاج المستدام. ومن خلال جمع نفايات الورق من الحرم الجامعي والمجتمعات المحلية، وتحويلها إلى عجينة ورق (باپيه ماشيه) عالية الجودة، ثم تشكيلها إلى منتجات مصنوعة بعناية، تصنع "أثر" رحلة دائرية مكتملة من النفايات إلى القيمة.`
  },
  {
    title: "الاستدامة والتصميم",
    text: `في "أثر"، تسير الاستدامة والتصميم يدًا بيد. تُبنى عملية الإنتاج لدينا حول مبادئ الاقتصاد الدائري، والمصادر المحلية، وممارسات الخلو من النفايات، والحرفية الإبداعية. يتيح لنا ذلك تقليل الأثر البيئي مع خلق منتجات فريدة تتميز بالطابع، والهدف، والقيمة المستدامة.`
  },
  {
    title: "رؤيتنا",
    text: `تتجاوز رؤيتنا مجرد تقديم ديكورات مستدامة؛ إذ نهدف إلى بناء مجتمع يشارك فيه الأفراد بفعالية في الاقتصاد الدائري. ومن خلال نقاط الجمع وبرنامج الولاء الخاص بنا، يمكن للعملاء المساهمة بأوراقهم المستعملة والحصول على مكافآت، مما يساعد في تحويل النفايات إلى مورد مشترك.`
  },
  {
    title: "نقطة التلاقي",
    text: `تمثل "أثر" نقطة التلاقي بين المسؤولية البيئية، والإبداع، والابتكار. انطلاقًا من مجتمع جامعة بدر بنواحي (BNU)، نبني نموذجًا قابلًا للتوسع بطموح أن نصبح رائدًا إقليميًا في مجال المستلزمات المنزلية المستدامة والمُعاد تدويرها.`
  },
  {
    title: "",
    text: `أثر — نحول التحديات البيئية إلى تصميمات مستدامة.`,
    isHighlight: true
  }
];

const PaperSlide = ({ slide, index, progress }) => {
  // We want this slide to start tearing when progress is between index/6 and (index+1)/6
  const start = index / slidesData.length;
  const end = (index + 1) / slidesData.length;

  // Top half animations
  const yTop = useTransform(progress, [start, end], ["0%", "-100%"]);
  const rotateTop = useTransform(progress, [start, end], [0, -8]);
  const opacityTop = useTransform(progress, [start, end], [1, 0]);

  // Bottom half animations
  const yBottom = useTransform(progress, [start, end], ["0%", "100%"]);
  const rotateBottom = useTransform(progress, [start, end], [0, 8]);
  const opacityBottom = useTransform(progress, [start, end], [1, 0]);

  // z-index: the first slide is on top, last slide is on bottom
  const zIndex = slidesData.length - index;

  const content = (
    <div className={`slide-content ${slide.isHighlight ? 'highlight-content' : ''}`}>
      {slide.title && <h3>{slide.title}</h3>}
      {slide.isHighlight ? (
        <h2 className="text-gold highlight-text">{slide.text}</h2>
      ) : (
        <p>{slide.text}</p>
      )}
    </div>
  );

  return (
    <div className="paper-slide-container" style={{ zIndex }}>
      {/* TOP HALF */}
      <motion.div
        className={`paper-half top-half ${slide.isHighlight ? 'highlight-slide' : ''}`}
        style={{
          y: yTop,
          rotate: rotateTop,
          opacity: opacityTop,
          transformOrigin: 'bottom left'
        }}
      >
        <div className="paper-inner">
          {content}
        </div>
      </motion.div>

      {/* BOTTOM HALF */}
      <motion.div
        className={`paper-half bottom-half ${slide.isHighlight ? 'highlight-slide' : ''}`}
        style={{
          y: yBottom,
          rotate: rotateBottom,
          opacity: opacityBottom,
          transformOrigin: 'top right'
        }}
      >
        <div className="paper-inner">
          {content}
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  
  // Track the scroll progress of the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Navigate to rewards/products when we scroll all the way to the end
    if (latest >= 0.99) {
      navigate('/rewards');
    }
  });

  return (
    <div className="about-page-wrapper">
      <div className="about-header-static">
        <h2 className="hero-title animate-fade-in">عن <span className="text-gold">أثر</span></h2>
        <p style={{color: 'var(--olive-medium)', marginTop: '10px'}}>(قم بالتمرير للأسفل)</p>
      </div>
      
      {/* The scroll container is tall enough to allow scrolling through all slides */}
      <div 
        ref={containerRef} 
        className="scroll-container" 
        style={{ height: `${slidesData.length * 100}vh` }}
      >
        {/* Sticky section that holds all the stacked slides */}
        <div className="sticky-section">
          {slidesData.map((slide, i) => (
            <PaperSlide key={i} slide={slide} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

