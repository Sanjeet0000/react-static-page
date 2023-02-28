import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import Navbar from './components/Navbar';
import MainArticle from './components/MainArticle';
import Latest from './components/Latest';
import LatestArticle from './components/LatestArticle';
import Footer from './components/footer';
function App(){
    return(
        <>
        <Title />
        <Navbar />
       <MainArticle />
       <Latest />
       <LatestArticle/>
       <Footer />
        </>
        )
}

export default App;