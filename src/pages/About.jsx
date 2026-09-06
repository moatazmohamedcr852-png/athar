import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './About.css';

const About = () => {
  return (
    <div className="about-container animate-fade-in">
      <div className="about-header">
        <h2 className="hero-title">عن <span className="text-gold">أثر</span></h2>
      </div>

      <div className="swiper-container-wrapper">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[EffectCards, Pagination, Navigation, Autoplay]}
          className="about-swiper"
          dir="rtl"
        >
          <SwiperSlide className="about-slide">
            <div className="slide-content">
              <h3>من نحن؟</h3>
              <p>
                "أثر" هي مبادرة تصميم مستدامة تعمل على تحويل الورق المهمل إلى ديكورات منزلية ومنتجات عملية عالية الجودة ومصنوعة يدويًا. نحن نؤمن بأن النفايات ليست نهاية رحلة المنتج، بل هي بداية لشيء جديد.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="about-slide">
            <div className="slide-content">
              <h3>مهمتنا</h3>
              <p>
                تتمثل مهمتنا في مواجهة التحديات البيئية من خلال منح الورق المُتخلص منه محليًا حياة ثانية عبر الحرفية الابتكارية والإنتاج المستدام. ومن خلال جمع نفايات الورق من الحرم الجامعي والمجتمعات المحلية، وتحويلها إلى عجينة ورق (باپيه ماشيه) عالية الجودة، ثم تشكيلها إلى منتجات مصنوعة بعناية، تصنع "أثر" رحلة دائرية مكتملة من النفايات إلى القيمة.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="about-slide">
            <div className="slide-content">
              <h3>الاستدامة والتصميم</h3>
              <p>
                في "أثر"، تسير الاستدامة والتصميم يدًا بيد. تُبنى عملية الإنتاج لدينا حول مبادئ الاقتصاد الدائري، والمصادر المحلية، وممارسات الخلو من النفايات، والحرفية الإبداعية. يتيح لنا ذلك تقليل الأثر البيئي مع خلق منتجات فريدة تتميز بالطابع، والهدف، والقيمة المستدامة.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="about-slide">
            <div className="slide-content">
              <h3>رؤيتنا</h3>
              <p>
                تتجاوز رؤيتنا مجرد تقديم ديكورات مستدامة؛ إذ نهدف إلى بناء مجتمع يشارك فيه الأفراد بفعالية في الاقتصاد الدائري. ومن خلال نقاط الجمع وبرنامج الولاء الخاص بنا، يمكن للعملاء المساهمة بأوراقهم المستعملة والحصول على مكافآت، مما يساعد في تحويل النفايات إلى مورد مشترك.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="about-slide">
            <div className="slide-content">
              <h3>نقطة التلاقي</h3>
              <p>
                تمثل "أثر" نقطة التلاقي بين المسؤولية البيئية، والإبداع، والابتكار. انطلاقًا من مجتمع جامعة بدر بنواحي (BNU)، نبني نموذجًا قابلًا للتوسع بطموح أن نصبح رائدًا إقليميًا في مجال المستلزمات المنزلية المستدامة والمُعاد تدويرها.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="about-slide highlight-slide">
            <div className="slide-content flex-center">
              <h2 className="text-gold highlight-text">
                أثر — نحول التحديات البيئية إلى تصميمات مستدامة.
              </h2>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default About;
