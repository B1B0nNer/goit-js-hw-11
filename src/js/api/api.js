import axios from "axios";

export async function getPhotos(inputValue, page) {
    try {
      return await axios.get('https://pixabay.com/api/', {
        params: {
            key: '37799453-78811c6f09fe99e1b830b1318',
            q: inputValue,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch : true,
            per_page: 40,
            page: page,
        }
      });
      
    } catch (error) {
      console.log(error);
    }
  }



