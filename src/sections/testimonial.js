/** @jsx jsx */
import {jsx, Container, Heading, Text, Box, Image} from 'theme-ui'
import SectionHeader from 'components/section-header'
import Rating from 'components/rating'
import ButtonGroup from 'components/button-group'
import Carousel from 'react-multi-carousel'

import Avatar1 from 'assets/testimonial/avatar1.png'
import Avatar2 from 'assets/testimonial/avatar2.png'
import Avatar3 from 'assets/testimonial/avatar3.jpg'
import Avatar4 from 'assets/testimonial/avatar4.png'

const data = [
  {
    id: 1,
    title: 'شكرا على المساعدة',
    description:
      'كنت أستغرق الكثير من الوقت للتحقيق في استراتيجيات الاستثمار والتعرف على تداول العملات الأجنبية. ولكن الآن مع التعلم والكسب أقضي وقتًا أقل وأكسب المزيد من المال',
    avatar: Avatar2,
    name: 'احمد فتحى',
    designation: '@ahmed.fathy',
    review: 5,
  },
  {
    id: 2,
    title: 'حرية العمل',
    description:
      'حصلت على أفضل وظيفة حتى الآن ، ولكني أبحث دائمًا عن مصادر دخل جديدة. يتيح لي حرية العمل مباشرة من هاتفي لساعات قليلة من اليوم مع تعلم و اكسب حققة هذا الهدف',
    avatar: Avatar1,
    name: 'هالة كمال',
    designation: '@halla.style',
    review: 4,
  },
  {
    id: 3,
    title: 'دخلى وقت الحجر الصحى',
    description:
      'لم أكن قلقًا كثيرًا بشأن مدخلي في وقت الحجر الصحي ، لأن تعلم والربح ساعدني كثيرًا في تحقيق دخل جيد جدًا في هذا الوقت انصح الجميع بالتعامل معهم ',
    avatar: Avatar4,
    name: 'هشام فهمى',
    designation: '@h.fahmi',
    review: 5,
  },
  {
    id: 4,
    title: 'استمتع بالحياة',
    description:
      'استمتع بوقتك وتقضي وقتًا أقل في العمل ، سفر أكثر هذه هي حياتي بعد أن أستثمر في التعلم والكسب',
    avatar: Avatar3,
    name: 'سارة وصفى',
    designation: '@sara.free',
    review: 4,
  },
]

const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 1619},
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: {max: 1619, min: 1024},
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: {max: 1024, min: 640},
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: {max: 639, min: 0},
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

export default function TestimonialCard() {
  return (
    <section id="testimonial" sx={{variant: 'section.testimonial'}}>
      <Container css={{textAlign: 'center'}}>
        <SectionHeader slogan="آراء العملاء" title="إرضاء العميل هدفنا" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}>
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              <Rating rating={item.review} />
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.description}>{item.description}</Text>
              <div className="card-footer">
                <div className="image">
                  <Image src={item.avatar} alt="Client Image" />
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  )
}

const styles = {
  carouselWrapper: {
    direction: 'ltr',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      ml: ['auto', null, null, null, null, null, null, '-220px'],
      mr: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
}
