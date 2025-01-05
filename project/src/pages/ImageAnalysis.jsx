import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast'
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function ImageAnalysis() {
  const [image, setImage] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [loading,setLoading] = useState(false);
  // const [a,setA] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setImage(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1
  });

  const handleReset = () => {
    setImage(null);
    setAnalysisResults(null);
  };

  const handleStartAnalysis = async () => {
    if (!image) return;

    
    const mockResult = {
      behaviors: {
        socialInteraction: 80,
        communication: 60,
        repetitiveBehaviors: 50,
        sensoryResponses: 70,
        eyeContact: 40,
        jointAttention: 55
      },
      prediction: "Autistic",
      confidence: 88.96,
      recommendations: [
        "Consider occupational therapy for sensory processing",
        "Speech therapy may help with communication skills",
        "Social skills training recommended",
        "Structured daily routines beneficial",
        "Regular exercise and physical activities"
      ]
    };

    setAnalysisResults(mockResult);
    setLoading(true);
    try{
      if(!image){
        return;
      }
      const formData = new FormData();
      const response = await fetch(image);
      const blob = await response.blob();
      const file = new File([blob], 'eyeImage.jpg', { type: blob.type });
      console.log("File", file);
      formData.append('image', file);
      console.log("FormData : ", formData);

      for (let pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);                                                                                                                                                      
      }
      
      setLoading(true);

      const result = await axios.post('http://localhost:5000/predict', formData);
      const ans = result.data.prediction;
      toast.success("Prediction Succssful");
      console.log(ans);
      // setA(ans);

      setAnalysisResults({
        predict: ans
      });
    }
    catch(error){
      console.log(error);
      toast.error(error);
      setLoading(false);
    }
    finally{
      setLoading(false);
    }


  };

  // const barChartData = {
  //   labels: [
  //     'Social Interaction',
  //     'Communication',
  //     'Repetitive Behaviors',
  //     'Sensory Responses',
  //     'Eye Contact',
  //     'Joint Attention'
  //   ],
  //   datasets: [
  //     {
  //       label: 'Behavioral Analysis Scores',
  //       data: analysisResults ? Object.values(analysisResults.behaviors) : [],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.5)',
  //         'rgba(54, 162, 235, 0.5)',
  //         'rgba(255, 206, 86, 0.5)',
  //         'rgba(75, 192, 192, 0.5)',
  //         'rgba(153, 102, 255, 0.5)',
  //         'rgba(255, 159, 64, 0.5)'
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)'
  //       ],
  //       borderWidth: 1
  //     }
  //   ]
  // };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-purple-700 mb-8"
      >
        Autism Image Analysis
      </motion.h1>

      <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-8">Upload an Image for Analysis</h2>
        
        <div className="max-w-xl mx-auto">
          <div 
            {...getRootProps()} 
            className="border-4 border-dashed rounded-lg p-8 mb-6 hover:border-purple-500 transition-colors cursor-pointer"
          >
            <input {...getInputProps()} />
            {image ? (
              <img src={image} alt="Uploaded" className="w-full h-auto rounded-md" />
            ) : (
              <div className="text-center">
                <p className="text-gray-600 mb-2">Drag and drop an image here, or click to select</p>
                <p className="text-sm text-gray-500">Supported formats: JPG, PNG</p>
              </div>
            )}
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={handleStartAnalysis}
              className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              disabled={!image}
            >
              Start Analysis
            </button>
          </div>
        </div>
      </div>

      {analysisResults && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6">Analysis Results</h3>
          {}
          <div className="mb-8">
            <h4 className="text-lg font-medium mb-4">Behavioral Assessment</h4>
            {/* <Bar data={barChartData} /> */}
          </div>

         
        </motion.div>
      )}
    </div>
  );
}

export default ImageAnalysis;
