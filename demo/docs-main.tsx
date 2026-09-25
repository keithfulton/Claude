import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/styles.css';
import { Gallery } from './Gallery';
import { Foundations } from './Foundations';

const Page = document.body.dataset.page === 'foundations' ? Foundations : Gallery;
createRoot(document.getElementById('root')!).render(<StrictMode><Page /></StrictMode>);
