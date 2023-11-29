import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"lunarfridge-f224d","appId":"1:902646144743:web:d5124c602ab5ba0ab04c42","storageBucket":"lunarfridge-f224d.appspot.com","apiKey":"AIzaSyA2z0l4oetSyjYsNqkKUdmMkYpDQiQ8oHg","authDomain":"lunarfridge-f224d.firebaseapp.com","messagingSenderId":"902646144743","measurementId":"G-B1DG2D0KFN"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
