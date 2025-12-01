import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import {
  HomePage,
  CollegesPage,
  CreateCollegePage,
  CreateInternPage,
  NotFoundPage,
} from './pages';

/**
 * Main App component with routing configuration.
 */
function App() {
  return (
    <Router>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#282A3A',
            color: '#ffffff',
            border: '1px solid #735F32',
          },
          success: {
            iconTheme: {
              primary: '#735F32',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ff4444',
              secondary: '#ffffff',
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="colleges" element={<CollegesPage />} />
          <Route path="colleges/new" element={<CreateCollegePage />} />
          <Route path="interns/new" element={<CreateInternPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
