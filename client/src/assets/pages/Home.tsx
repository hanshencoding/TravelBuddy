import React from 'react';
import { userAPI } from '../services/api';

function HomePage(){

    const testAmbilProfil = async (): Promise<void> => {
    try {
      console.log("Mulai nembak lewat services/api.ts...");
      const data = await userAPI.getProfile(2);
      console.log(data);
    } catch (error: any) {
      console.log("Error");
    }
  };

  return(
    <header>
        <h1>Hello Hanshen Ganteng</h1>
        <button  onClick={testAmbilProfil}>Test Tembak Profile ID 1</button>
    </header>
  )
}
export default HomePage;