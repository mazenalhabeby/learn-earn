/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Container, Grid} from 'theme-ui'
import SectionHeader from 'components/section-header'
import FeatureCard from 'components/feature-card.js'
import Partnership from 'assets/feature/partnership.svg'
import Support from 'assets/feature/support.svg'
import book from 'assets/key-feature/book.svg'
import scure from 'assets/key-feature/scure.svg'

const data = [
  {
    id: 1,
    imgSrc: book,
    altText: 'مواد تعليمية ',
    title: 'مواد تعليمية ',
    text: 'نوفر لك مواد تعليمية مجانية لمساعدتك على تحقيق أهدافك بثقة',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'مساعدة شخصية',
    title: 'مساعدة شخصية',
    text: 'نقف دائمًا بجانبك خطوة بخطوة من خلال توفير مساعد شخصي يمكنه مساعدتك في السوق',
  },
  {
    id: 3,
    imgSrc: Support,
    altText: 'نحن متواجدون 24/7',
    title: 'نحن متواجدون 24/7',
    text: 'مع خدمة دعم العملاء لدينا ، لن تشعر أنك وحيد ، ستجدنا متى احتجت إلينا على مدار الساعة طوال أيام الأسبوع',
  },
  {
    id: 4,
    imgSrc: scure,
    altText: 'الثقة والامان',
    title: 'الثقة والامان',
    text: 'الثقة والامان وسهولة السحب وإجراءات الاستثمار الخاص بكم حيث تراخيص إعتماد الشركة من قبل هيئة الرقابة المالية البريطانيه وسلطة السلوك المالي',
  },
]

export default function Feature() {
  return (
    <section sx={{variant: 'section.feature'}}>
      <Container>
        <SectionHeader slogan="بعض من خدماتنا" title="تعرف على بعض الخدمات" />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  )
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
}
