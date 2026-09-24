import About from './components/about'
import Journal from './components/journal'
import ScrollToTopButton from './components/scrollToTopButton'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'

const App = () => {
    return (
        <div id="top">
            <SiteHeader />
            <div id="journal"><Journal /></div>
            <div id="about"><About /></div>
            <SiteFooter />
            <ScrollToTopButton />
        </div>
    )
}

export default App
