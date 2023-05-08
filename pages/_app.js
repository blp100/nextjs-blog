//`pages/_app.js`
import "../styles/global.css";

const App = ({Component, pageProps}) => {
    return <Component {...pageProps} />;
}

export default App;