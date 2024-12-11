import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function NavigationListener() {
    const navigate = useNavigate();
    const path = useSelector((state) => state.navigation.path);

    useEffect(() => {
        if (path) {
            navigate(path);
        }
    }, [path, navigate]);

    return null;
}

export default NavigationListener;
