import Header from '../components/Header/Header'
import Banner from './components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Main from './components/Main/Main'
import './MainPage.css'


export default function MainPage() {

  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <Main/>
      <Footer />
    </div>
  )
}

