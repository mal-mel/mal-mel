import { Route, Switch, Redirect } from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';
import {
    MainPage,
    NotesPage,
    ProjectsPage,
    AboutPage
} from '../pages';

import './app.css';


const App = () => {
    return (
        <>
            <Header />
            <main role="main" className="uk-container main-container">
                <Switch>
                    <Route path="/" exact render={ () => <MainPage /> }/>
                    {/*<Route path="/blog" exact render={ () => <BlogPage /> }/>*/}
                    {/*<Route path="/projects" exact render={ () => <ProjectsPage />}/>*/}
                    <Route path="/about" exact render={ () => <AboutPage /> }/>
                    <Redirect to="/" />
                </Switch>
            </main>
            <Footer />
        </>
    );
};


export default App;
