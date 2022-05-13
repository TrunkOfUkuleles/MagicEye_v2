import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import { CameraPreview, CameraPreviewOptions } from '@awesome-cordova-plugins/camera-preview';
import './Tab2.css';

const Tab2: React.FC = () => {

  // const [open, setOpen] = useState<boolean>(false);

  const openScanner = async () => {

    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1,
      storeToFile: false
    };
    console.log("PRE SCAN");

    const data = await CameraPreview.startCamera(cameraPreviewOpts).then(
      (res: any) =>{
        console.log("Scanning...", res)
      },
  (err: any) => {
    console.log(err)
  }
    );

    return data
    
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton  expand="block" type="button" onClick={openScanner} onSubmit={openScanner}>Scan</IonButton>
        {/* <ExploreContainer name="Tab 2 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
