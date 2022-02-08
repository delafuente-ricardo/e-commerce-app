import { useLocation, useNavigate } from 'react-router-dom';

const useBreadcrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const stepBack = () => {
    navigate(-1);
  };

  return {
    stepBack,
    isActive,
  };
};

export default useBreadcrumbs;
