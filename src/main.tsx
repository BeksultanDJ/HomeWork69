import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './components/store/store';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);
