import rootComponentPageReducers from "pages/ComponentPage/rootReducers/rootReducers";
import rootHomePageReducers from "pages/HomePage/rootReducers/rootReducers";
import rootReducersImageGallery from "pages/ImageGalleryPage/rootReducers/rootReducers";
import rootLoginPageReducers from "pages/LoginPage/rootReducers/rootReducers";
import rootSettingsPageReducers from "pages/SettingsPage/rootReducers/rootReducers";

const rootReducers = {
  ...rootReducersImageGallery,
  ...rootSettingsPageReducers,
  ...rootComponentPageReducers,
  ...rootHomePageReducers,
  ...rootLoginPageReducers,
}

export default rootReducers;
