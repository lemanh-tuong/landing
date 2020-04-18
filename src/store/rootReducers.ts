import rootReducersImageGallery from "pages/ImageGalleryPage/rootReducers/rootReducers";
import rootSettingsPageReducers from "pages/SettingsPage/rootReducers/rootReducers";

const rootReducers = {
  ...rootReducersImageGallery,
  ...rootSettingsPageReducers,
}

export default rootReducers;
