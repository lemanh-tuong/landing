import rootComponentPageReducers from "pages/ComponentPage/rootReducers/rootReducers";
import rootReducersImageGallery from "pages/ImageGalleryPage/rootReducers/rootReducers";
import rootSettingsPageReducers from "pages/SettingsPage/rootReducers/rootReducers";

const rootReducers = {
  ...rootReducersImageGallery,
  ...rootSettingsPageReducers,
  ...rootComponentPageReducers
}

export default rootReducers;
