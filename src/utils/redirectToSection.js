import { useEffect } from 'react'; import { useNavigate, useParams } from 'react-router-dom'; 

export default function RedirectToSection() { 
    const { id } = useParams();  
    const navigate = useNavigate(); 
    
    useEffect(() => { navigate(`/#${id}`, { replace: true }); 
}, [id, navigate]); 
    
    return null; }