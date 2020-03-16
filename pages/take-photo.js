// pages/index.js
import Layout from "../components/Layout";
import WebcamCapture from "../components/TakePhoto";

// Upload to local seaweedFS instance
const uploadImage = async file => {
  const formData = new FormData();
  formData.append('file', file);

  // Connect to a seaweedfs instance
};

const Index = () => (
  <Layout
    Column="1"    
    title='Take Photo'    
  >

    <h1>Take Photo</h1>

    <h1>Align your face in the square and press the Take Photo button.</h1>

    <WebcamCapture width={415} height={310} sendFile={uploadImage} />

  </Layout>
);

export default Index;