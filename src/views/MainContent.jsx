import React from 'react'
import Navbar from '../components/Navb/Navbar'
import { Provider } from 'react-redux'
import  generateStore  from '../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import SwitchRoute from '../components/SwitchRoute'
const MainContent = () => {
    const store = generateStore()
    return (
        <Provider store={store}>
            <Router>
            <div>
                <header>
                    <Navbar />
                </header>
                <main>
                    <SwitchRoute/>
                </main>
            </div>
            </Router>
        </Provider>
    )
}

export default MainContent
