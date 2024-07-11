const createPost = async(name, post) =>{
    if(!name || !post){
        throw Error("All field are required");
    }

    const response = await fetch("/api/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('webToken')}`
        },
        body: JSON.stringify({name, post})
    });

    const data = await response.json();

    if(!response.ok){
        throw Error(data.error);
    }

    return data;
}

const deletePost = async(name, post) =>{
    if(!name || !post){
        throw Error("All field are required");
    }

    const response = await fetch("/api/post", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('webToken')}`
        },
        body: JSON.stringify({name, post})
    });

    const data = await response.json();

    if(!response.ok){
        throw Error(data.error);
    }

    return data;
}

export { createPost, deletePost }