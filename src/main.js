import './style.css';
import { createExplorerApp } from './app/explorer-app.js';

const app = await createExplorerApp();

if (import.meta.hot) {
  import.meta.hot.dispose(() => app.dispose());
}
