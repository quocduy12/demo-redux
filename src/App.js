import './App.css';
import TrangChu from './pages/trang_chu';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/demo-4" element={<TrangChu />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
