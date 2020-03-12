import storage from './storage';

const readStorage = async () => {
  const images = storage.ref().child('images').listAll();
  const data = (await images).items;
  const imgSrc = await Promise.all(data.map(item => item.getDownloadURL()));
  return imgSrc;
};

export default readStorage;
