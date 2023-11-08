import fetch from "node-fetch";
import "./db.js";
import DataModel from "./DataModel.js";

async function fetchDataAndSaveToDatabase() {
  const apiUrl =
    process.env.API_URL;
  const requestOptions = {
    method: "GET",
    headers: {
      "Cache-Control": "no-cache",
      "X-Token": process.env.API_TOKEN,
    },
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    if (!response.ok) {
      throw new Error('Error en la solicitud a la API');
    }

    const data = await response.json();

    // Busca un documento existente con el mismo valor de 'gid'
    const existingData = await DataModel.findOne({ gid: data.operacion[0].gid }).exec();

    if (!existingData) {
      // No se encontró un documento existente, así que se puede insertar
      await DataModel.create(data.operacion);
      console.log('Datos insertados en la base de datos');
    } else {
      console.log('El documento con gid', data.operacion[0].gid, 'ya existe en la base de datos. No se ha insertado.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

setInterval(fetchDataAndSaveToDatabase, process.env.FETCH_INTERVAL);

fetchDataAndSaveToDatabase();
