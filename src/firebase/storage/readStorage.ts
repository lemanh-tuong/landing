import storage from './storage';

const readStorage = async (path: string) => {
  const images = storage.ref().child(`images/${path}`).listAll();
  const data = (await images).items;
  const imgSrc = await Promise.all(data.map(item => item.getDownloadURL()));
  return imgSrc;
};

export default readStorage;
