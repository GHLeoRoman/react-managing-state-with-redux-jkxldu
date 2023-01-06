// Detail.jsx
import {
  IonButton,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import StudentStore from '../store';
import AddStudentModal from '../components/AddStudentModal';
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
  const { studentId } = useParams();

  const student = StudentStore.useState(state =>
    state.students.find(s => s.id === studentId)
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Student Manager</IonTitle>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <p>{student && JSON.stringify(student)}</p>
      </IonContent>
    </IonPage>
  );
};

export default React.memo(Detail);
