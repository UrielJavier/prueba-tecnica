import { createRoot } from 'react-dom/client';
import App from "./App.tsx";
import { worker } from '../mocks/browser.js';

if(process.env.ENV) {
    worker.start()
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);