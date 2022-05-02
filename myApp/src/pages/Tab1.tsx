import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React , {useState} from 'react';
import ExploreContainer from '../components/ExploreContainer';
import superagent from 'superagent';
import './Tab1.css';

const Tab1: React.FC = () => {


  const [text, setText] = useState<string>('');
  const [serachSet, setSearchSet] = useState<any>([])

  const searcher = () => {
    
    const mtg = `https://api.scryfall.com/cards/search?q=${encodeURIComponent(text)}`

     superagent.get(mtg)
      .then(function (results) {
        const raw =  results;
        console.log(raw.body.data)
        setSearchSet([...raw.body.data])
      })
      .catch(function(error){
        console.log('Womp Womp', error);
      })
  }

  const ent = (e:any) => {
    if (e.key === "Enter") { searcher() }
}



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Magic Eye</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonInput placeholder="Card Search" value={text} onKeyUp={(e) => {ent(e)}} onIonChange={e=>setText(e.detail.value!)} onSubmit={e=>{searcher()}}></IonInput>
        {serachSet.length > 0 && <ExploreContainer name={serachSet} />}

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
