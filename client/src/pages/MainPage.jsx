import Header from '../components/Header/Header'
import Banner from '../components/forMainPage/Banner'
import Footer from '../components/Footer/Footer'
import Main from '../components/forMainPage/Main'
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

