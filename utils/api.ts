const createURL = (path : string) =>{
    return window.location.origin + path;
}

export const CreateNewEntry = async () =>{
    const res = await  fetch(new Request('/api/journal'), {
        method : 'POST'
    })

    if(res.ok){
        const data = await res.json();
        return data.data;
    }
}