// En querys.js

const URL = "https://localhost:44375";

const getAutopartes = async () => {
  try {
    const response = await fetch(`${URL}/api/app/autoparte/autopartes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener autopartes:', error);
    throw error;
  }
};

export default getAutopartes ;
