

export const petition = async( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category ) } &limit=10&api_key=Z7oS0VAmrso597M5z15ueE4OtA1D4pBz`;
  const resp = await fetch(url);
  const {data} = await resp.json();

  const results = data.map( img => { // desgloso el objeto data en los elementos que necesito, el id, el títle y las images por ejemplo
    return {
      id: img.id,
      title: img.title,
      images: img.images.downsized_medium.url
    }
  });

  return results;  // actualizado el estado unicial 'images' con el resultado de la vaariable results. LLeno el array vacio con un objeto
};
