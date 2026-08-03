export const registerUser = async (userData) => {
    
        const response = await fetch('http://localhost:5000/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message );
        }
         
        return data;
    
    
}   