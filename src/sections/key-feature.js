/** @jsx jsx */
import {jsx} from 'theme-ui'
import {Container, Grid} from 'theme-ui'
import SectionHeader from '../components/section-header'
import FeatureCardColumn from 'components/feature-card-column.js'
import Performance from 'assets/feature/performance.svg'
import Subscription from 'assets/feature/subscription.svg'
import Support from 'assets/key-feature/support.svg'

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'حساب إسلامي',
    title: 'حساب إسلامي',
    text: '‏يبدأ  من 100 دولار بعايد شهري يصل إلى 30%',
  },
  {
    id: 2,
    imgSrc: Performance,
    altText: 'حساب ‏عادي',
    title: 'حساب ‏عادي',
    text: 'يبدأ  من ٢٥٠ دولار  مع ‏ ‏توفير مدير حساب ',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'بوليصة التأمين',
    title: 'بوليصة التأمين',
    text: 'تفعيل بوليصة التأمين بمجرد توقيع العقد الاستثماري',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'المساعدة فى خلق  أستثمار جيد ',
    title: 'المساعدة فى خلق  أستثمار جيد ',
    text: 'المساعدة فى خلق  أستثمار جيد وآمن لدى المتداولين فى الشرق الاوسط لما لها من فرصة تحسين زيادة الدخل للمستثمر',
  },
]

export default function KeyFeature() {
  return (
    <section sx={{variant: 'section.keyFeature'}} id="feature">
      <Container>
        <SectionHeader
          slogan="مميزاتنا"
          title="تعرف على ما يميزنا في هذا المجال"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
}
