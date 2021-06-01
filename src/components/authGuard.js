import { Redirect } from 'react-router';


export function AuthGuard(Comp) {
    return () => {
        const token = localStorage.getItem('token');
        return (token ? <Comp></Comp> : <Redirect to="/"></Redirect>);
    }
}