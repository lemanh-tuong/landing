import firebase from '../firebase';


interface Property {
  sectionTitle: string;
  sectionSubTitle: string;
  imgUrl: string;
}

export function writeSection(id: string, props: Property) {
  firebase.database().ref(`/section/${id}`).set({
    mainTitle: props.sectionTitle,
    subTitle: props.sectionSubTitle,
    imgUrl: props.imgUrl
  });
}
