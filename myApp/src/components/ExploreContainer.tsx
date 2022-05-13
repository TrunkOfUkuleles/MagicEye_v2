import React from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonImg } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
  name: any[];
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {

  const listing = (el:any) => {

    return (
      <IonItem class="card-result" key={`${el.name}key`}>
        <IonImg src={el.image_uris.small} />
        <IonLabel key={`${el.name}lebelkey`}>{el.name}</IonLabel>
      </IonItem>
    )
  }

  // const adding = (e) => {

  // }


  return (

      <IonContent id="results-overall">
        {/*-- List of Text Items --*/}
        <IonList id="results-list">
          {name.map((el:any) => listing(el))}
        </IonList>
      </IonContent>
    );
  
};

export default ExploreContainer;
