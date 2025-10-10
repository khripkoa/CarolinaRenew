import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Получаем объект текущего местоположения (URL)
  const location = useLocation();

  // Хук срабатывает каждый раз, когда меняется путь (pathname)
  useEffect(() => {
    // Принудительно скроллим окно в верхнюю левую точку (0, 0)
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Этот компонент ничего не рендерит
  return null;
};

export default ScrollToTop;