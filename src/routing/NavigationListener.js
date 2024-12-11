import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { goToPath } from '../redux/slicers/NavigationSlice';  

const NavigationListener = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const isAuth = useSelector((state) => state.auth.isAuth);
    const path = useSelector((state) => state.navigation.path);

    useEffect(() => {
        const routes = [
            '/home',
            '/login',
        ];

        if (path) {
            if (routes.includes(path)) {
                if (isAuth) {
                    dispatch(goToPath(path)); 
                    navigate(path); 
                } else {
                    console.log('Non autenticato, non posso navigare.');
                    dispatch(goToPath('/login'));
                    navigate('/login');  
                }
            } else {
                console.log('Percorso non definito, reindirizzo alla landing.');
                dispatch(goToPath('/'));
                navigate('/'); 
            }
        }
    }, [path, isAuth, dispatch, navigate]);  

    return null;
};

export default NavigationListener;
