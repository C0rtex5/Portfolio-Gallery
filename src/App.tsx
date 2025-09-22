import work1 from './assets/work1.png'
import work2 from './assets/work2.png'
import work3 from './assets/work3.png'
import work4 from './assets/work4.png'

const IMAGES = [work1, work2, work3, work4]

export default function App() {
    return <ImageSlider imageUrls={IMAGES} />
}
