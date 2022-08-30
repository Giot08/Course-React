export const getImagen = async() => {

    try {

        const apiKey = 'zX6tMlSr7RzCRsf1AEZpHe4m7B31Pr18';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url
    } catch (error) {
        // manejo del error
        console.error(error)
        return "No se encontro la imagen"
    }
    
    
    
}

 getImagen();



