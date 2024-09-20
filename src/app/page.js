'use client';

import Head from 'next/head';
import Faq from '../components/faq';
import { useState, useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Home() {
  const [imageUrl, setImageUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);
  const [extractedText, setExtractedText] = useState(null);
  const textareaRef = useRef(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const fileInputRef = useRef(null);

  const onDrop = useCallback((acceptedFiles) => {
    handleImageUpload(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleClearImage = () => {
    setImageUrl(null);
    setUploadProgress(0);
    setExtractedText(null);
    setError(null);
  };
  const handleCopyText = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      document.execCommand('copy');
      // 可选：显示复制成功的提示
      alert('Text copied to clipboard!');
    }
  };
  //处理图片上传过程
  const handleImageUpload = (file) => {
    if (!file) return;
  
    setIsUploading(true);
    setError(null);
    setUploadProgress(0);
  
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    formData.append('file', file);
  
    xhr.open('POST', '/api/upload-image', true);
  
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        setUploadProgress(percentComplete);
      }
    };
  
    xhr.onload = () => {
      try {
        const response = JSON.parse(xhr.responseText);
        if (xhr.status === 200) {
          setImageUrl(response.url);
        } else {
          // 处理错误响应
          const errorMessage = response.error || 'Unknown error';
          const errorDetails = response.details || '';
          console.error(`Upload failed:\nStatus: ${xhr.status}\nError: ${errorMessage}\nDetails: ${errorDetails}`);
          setError('Upload failed'); // 简单的错误消息用于 UI 显示
        }
      } catch (e) {
        // 处理 JSON 解析错误
        console.error('Upload failed: Unable to parse server response', e);
        setError('Upload failed');
      }
      setIsUploading(false);
    };
  
    xhr.onerror = () => {
      console.error('Upload failed: Network error');
      setError('Upload failed');
      setIsUploading(false);
    };
  
    xhr.send(formData);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  //处理文本提取过程
  const pollPredictionResult = async (predictionId) => {
    console.log('Debug: Polling prediction result for:', predictionId);
    const maxAttempts = 10;
    const interval = 2000; // 2 seconds

    for (let i = 0; i < maxAttempts; i++) {
      const response = await fetch(`/api/predictions/${predictionId}`);
      const data = await response.json();

      if (data.status === 'succeeded') {
        return data.output;
      } else if (data.status === 'failed') {
        throw new Error(data.error || 'Text extraction failed');
      }

      // Wait before next attempt
      await new Promise(resolve => setTimeout(resolve, interval));
    }

    throw new Error('Prediction timed out');
  };

  //处理文本提取
  const handleExtractText = async () => {
    if (!imageUrl) {
      setError('Please upload an image first');
      return;
    }

    setIsExtracting(true);
    setError(null);
    setExtractedText(null);

    try {
      const response = await fetch('/api/predictions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: imageUrl }),
      });
      // 添加详细的调试信息
      console.log('API Response Status:', response.status);
      console.log('API 响应状态文本:', response.statusText);
      console.log('API 响应头:', Object.fromEntries(response.headers.entries()));

      // 克隆响应以便我们可以同时读取正文和检查状态
      const responseClone = response.clone();

      try {
        const responseBody = await responseClone.text();
        console.log('API 响应体:', responseBody);
        
        // 尝试解析 JSON
        try {
          const jsonBody = JSON.parse(responseBody);
          console.log('API 响应体 (JSON):', jsonBody);
        } catch (jsonError) {
          console.log('响应体不是有效的 JSON');
        }
      } catch (error) {
        console.error('读取响应体时出错:', error);
      }

      if (!response.ok) {
        throw new Error('Text extraction failed');
      }

      const data = await response.json();
      
      if (data.id) {
        setExtractedText('Processing... Please wait.');
        const result = await pollPredictionResult(data.id);
        setExtractedText(result);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (err) {
      setError('Text extraction failed: ' + err.message);
    } finally {
      setIsExtracting(false);
    }
  };

  return (
    <>
    <Head>
      <title>Accurate Text Extraction from Images in 2024 | Textract.tools</title>
      <meta name="description" content="Textract.tools provides tools to extract text from images or OCR documents or images,Helps you convert images to text." />
      <meta name="keyword"  content="text extraction" />
    </Head>
      
      <section>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Image Upload and Text Extraction</h1>
        
        <div {...getRootProps()} className="mb-4">
          <input {...getInputProps()} />
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer h-64 flex items-center justify-center">
            {imageUrl ? (
              <img src={imageUrl} alt="Uploaded" className="max-h-full max-w-full object-contain" />
            ) : isDragActive ? (
              <p>Drop the image here ...</p>
            ) : (
              <p>Drag and drop an image here, or click to select an image</p>
            )}
          </div>
        </div>

        <div className="mb-4 flex space-x-4">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            accept="image/*"
            className="hidden"
          />
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={isUploading}
          >
            Select Image to Upload
          </button>
          <button
            onClick={handleExtractText}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            disabled={!imageUrl || isExtracting}
          >
            Extract Text
          </button>
          <button
        onClick={handleClearImage}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        disabled={!imageUrl || isUploading || isExtracting}
      >
        Clear Image
        </button>
        </div>

        {isUploading && (
          <div className="mb-4">
            <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Uploading: {uploadProgress.toFixed(0)}%
            </p>
          </div>
        )}

        {isExtracting && (
          <p className="text-blue-500 mb-4">Extracting text...</p>
        )}


        {error && (
          <div className="text-red-500 mb-4">
            {error}
          </div>
        )}

        {extractedText && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Extracted Text:</h2>
            <form className="flex flex-col items-center">
              <div className="w-full mb-2">
                <textarea
                  ref={textareaRef}
                  value={extractedText}
                  readOnly
                  className="w-full h-80 min-h-[10rem] p-2 border rounded-lg bg-yellow-100"
                />
              </div>
              <div className="w-full flex justify-left">
                <button
                  type="button"
                  onClick={handleCopyText}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Copy Text
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      </section>
      <section className="pb-12">
      {/* Container */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-16 md:px-10 md:py-20">
        {/* HEADING TEXT */}
        <p className="font-inter mb-2 text-center text-sm font-medium">
          3 EASY STEPS
        </p>
        <h2 className="text-center text-3xl font-bold lg:text-4xl">
          How to extract text from images 
        </h2>
        <p className="font-inter mx-auto mb-12 mt-4 max-w-lg px-5 text-center text-base font-light text-gray-500">

        It's a simple drag-and-drop, click, and copy process.
        </p>
        {/* HOW IT WORKS STEPS */}
        <div className="flex flex-col items-start justify-center lg:flex-row">
          {/* BLOCK */}
          <div className="relative my-8 flex w-full rounded-md lg:mx-8 lg:flex-col">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200">
              <h2 className="text-3xl font-medium">1</h2>
            </div>
            <div className="ml-6 lg:ml-0">
              <h2 className="mb-5 text-xl font-medium lg:mt-8">
                Upload Image
              </h2>
              <p className="font-inter max-w-md pr-5 text-base text-gray-500">
              Simply drag and drop your image into the box above, 
              or click the &#x27;Select Image to Upload&#x27; button to begin.
              </p>
            </div>
            {/* MOBILE - HOW IT WORKS LINE */}
            <svg
              className="absolute -bottom-[48px] left-[28px] lg:hidden"
              width="12"
              height="70"
              viewBox="0 0 12 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
                fill="black"
              ></path>
            </svg>
            {/* DESKTOP - HOW IT WORKS LINE */}
            <svg
              className="absolute right-0 top-7 hidden lg:block"
              width="170"
              height="12"
              viewBox="0 0 170 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM169.773 6L164 0.226497L158.227 6L164 11.7735L169.773 6ZM6 7H9.95V5H6V7ZM17.85 7H25.75V5H17.85V7ZM33.65 7H41.55V5H33.65V7ZM49.45 7H57.35V5H49.45V7ZM65.25 7H73.15V5H65.25V7ZM81.05 7H88.95V5H81.05V7ZM96.85 7H104.75V5H96.85V7ZM112.65 7H120.55V5H112.65V7ZM128.45 7H136.35V5H128.45V7ZM144.25 7H152.15V5H144.25V7ZM160.05 7H164V5H160.05V7Z"
                fill="black"
              />
            </svg>
          </div>
          {/* BLOCK */}
          <div className="relative my-8 flex w-full rounded-md lg:mx-8 lg:flex-col">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200">
              <h2 className="text-3xl font-medium">2</h2>
            </div>
            <div className="ml-6 lg:ml-0">
              <h2 className="mb-5 text-xl font-medium lg:mt-8">
                Click the button"Extract Text" 
              </h2>
              <p className="font-inter max-w-md pr-5 text-base text-gray-500">
              Next, click the &#x27;Extract Text&#x27; button and wait patiently for the process to complete.
              </p>
            </div>
            {/* MOBILE - HOW IT WORKS LINE */}
            <svg
              className="absolute -bottom-[48px] left-[28px] lg:hidden"
              width="12"
              height="70"
              viewBox="0 0 12 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
                fill="black"
              ></path>
            </svg>
            {/* DESKTOP - HOW IT WORKS LINE */}
            <svg
              className="absolute right-0 top-7 hidden lg:block"
              width="170"
              height="12"
              viewBox="0 0 170 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM169.773 6L164 0.226497L158.227 6L164 11.7735L169.773 6ZM6 7H9.95V5H6V7ZM17.85 7H25.75V5H17.85V7ZM33.65 7H41.55V5H33.65V7ZM49.45 7H57.35V5H49.45V7ZM65.25 7H73.15V5H65.25V7ZM81.05 7H88.95V5H81.05V7ZM96.85 7H104.75V5H96.85V7ZM112.65 7H120.55V5H112.65V7ZM128.45 7H136.35V5H128.45V7ZM144.25 7H152.15V5H144.25V7ZM160.05 7H164V5H160.05V7Z"
                fill="black"
              />
            </svg>
          </div>
          {/* BLOCK */}
          <div className="relative my-8 flex w-full rounded-md lg:mx-8 lg:flex-col">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-200">
              <h2 className="text-3xl font-medium">3</h2>
            </div>
            <div className="ml-6 lg:ml-0">
              <h2 className="mb-5 text-xl font-medium lg:mt-8">Done!</h2>
              <p className="font-inter max-w-md pr-5 text-base text-gray-500">
              Finally, the text box below will display the extracted text.
              You can click the &#x27;Copy Text&#x27; button to copy it.
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section>
        <Faq />
      </section>
      
    </>
  );
}