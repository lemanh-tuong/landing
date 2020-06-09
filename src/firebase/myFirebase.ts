import { NavProps } from 'components/Nav/Nav';
import firebase from 'firebase';
import app from 'firebase/app';
import { PageGeneralData } from 'pages/ListPage/ListPageType/type';
import { Option, PageProps } from 'pages/SettingsPage/SettingsPage';

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export interface AppConfig {
  firebaseConfig: FirebaseConfig
}
export interface SignInFirebaseArg {
  email: string;
  password: string;
}

export interface UpdateFireBaseArg {
  ref: string;
  updateValue: object;
}

export type AddToNavArg = Partial<NavProps> & {
  indexInsert?: number;
};

export type AddToPageArg = PageProps & PageGeneralData & {
  newSection?: Option;
  indexInsert?: number;
};

export interface WriteFirebaseArg<T = object> {
  ref: string;
  value: T;
}

export interface UploadFileArg {
  path: string;
  files: File[];
}

export type DeleteSectionInFireBase = PageProps & PageGeneralData & {
  indexDelete: number;
};

class MyFirebase {
  database: firebase.database.Database = {} as firebase.database.Database;
  storage: firebase.storage.Storage = {} as firebase.storage.Storage;
  authentication: firebase.auth.Auth = {} as firebase.auth.Auth;
  firebaseConfig: FirebaseConfig;
  constructor(config: AppConfig) {
    this.firebaseConfig = config.firebaseConfig;
    this.initializeFirebase();
  }

  initializeFirebase = () => {
    if(!firebase.apps.length) {
      firebase.initializeApp(this.firebaseConfig);
      this.database = firebase.database();
      this.storage = firebase.storage();
      this.authentication = app.auth();
    }
    //  else {
    //   firebase.app();
    //   this.database = firebase.database();
    //   this.storage = firebase.storage();
    //   this.authentication = app.auth();
    // }
  }

  // Authentication Method
  signInFirebase = ({email, password}: SignInFirebaseArg) => {
    return this.authentication.signInWithEmailAndPassword(email, password);
  };
  signOutFirebase = () => {
    return this.authentication.signOut();
  }

  // Database Method
  readDatabase = async (path: string) => {
    return (await this.database.ref(path).once('value')).val();
  }

  updateDatabase = ({ref, updateValue}: UpdateFireBaseArg) => {
    return this.database.ref(ref).update(updateValue);
  };

  addToNav = ({logo, navItems}: AddToNavArg) => {
    return this.database.ref('nav').set({
      logo: logo,
      navItems: navItems
    })
  }

  addToPage = ({pageName, elements, newSection, id, pathName, indexInsert}: AddToPageArg) => {
    if(!!newSection) {
      const newElements = !!indexInsert && indexInsert > 0
      ? [...elements.slice(0, indexInsert), {...newSection}, ...elements.slice(indexInsert, elements.length)]
      : (indexInsert === 0) ? [{...newSection}, ...elements]
      : elements.concat(newSection);
      return this.database.ref(`PagesDetail/${pathName.slice(1)}`).set({
        pageName: pageName,
        elements: [...newElements],
        id: id,
        pathName: pathName,
      }).then(() => 'Added')
      .catch(err => err);
    }
    return this.database.ref(`PagesDetail/${pathName.slice(1)}`).set({
      pageName: pageName,
      elements: [...elements],
      id: id,
      pathName: pathName,
    })
  }

  writeDatabase = <T extends any>({ref, value}: WriteFirebaseArg<T>) => {
    return this.database.ref(ref).set(value);
  };

  removeDatabase = ({ref}: {ref: string}) => {
    return this.database.ref(ref).remove();
  };

  deleteSectionInFirebase = ({pageName, id, pathName,  elements,  indexDelete}: DeleteSectionInFireBase) => {
    const newElements = [...elements.slice(0, indexDelete), ...elements.slice(indexDelete + 1, elements.length)];
    return this.database.ref(`PagesDetail/${pathName.slice(1)}`).set({
      pageName,
      id,
      pathName,
      elements: [...newElements]
    })
  }


  // Storage Method

  readStorage = async (path: string) => {
    const images = this.storage.ref().child(`images/${path}`).listAll();
    const data = (await images).items;
    const imgSrc = await Promise.all(data.map(item => item.getDownloadURL()));
    return imgSrc;
  };
  uploadFile = async ({path, files}: UploadFileArg) => {
    let newImgs;
    const storageRef  = this.storage.ref();
    await Promise.all(files.map(async file => {
      const ref = storageRef.child(`images/${path}/${file.name}`);
      await ref.put(file);
    })).then(async () => {
      const imgs: any[] = await this.readStorage(path);
      newImgs = [...imgs];
    });

    return newImgs;
  };

  getAuthentication = () => {
    return this.authentication;
  }

  getDatabase = () => {
    return this.database;
  }

  getStorage = () => {
    return this.storage;
  }

}


export default MyFirebase;
