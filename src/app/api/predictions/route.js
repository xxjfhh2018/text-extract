// 导入NextResponse模块，用于处理HTTP响应
import { NextResponse } from "next/server";
// 导入Replicate模块
import Replicate from "replicate";
// 创建Replicate实例
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});
 
// In production and preview deployments (on Vercel), the VERCEL_URL environment variable is set.
// In development (on your local machine), the NGROK_HOST environment variable is set.
const WEBHOOK_HOST = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NGROK_HOST;
// 定义POST请求处理函数，作为默认输出函数
export async function POST(request) {
  console.log('Debug: Received POST request to /api/predictions');
  try {    
    const body = await request.json();
    console.log('Debug: Request body:', body);

    const { image } = body;
    console.log('Extracted image URL:', image);

    if (!image) {
      console.error('No image URL provided in the request');
      return NextResponse.json({ error: 'No image URL provided' }, { status: 400 });
    }

    if (!process.env.REPLICATE_API_TOKEN) {
      console.error('REPLICATE_API_TOKEN is not set');
      throw new Error('REPLICATE_API_TOKEN is not set');
    }

    console.log('Creating prediction with Replicate API...');
    const prediction = await replicate.predictions.create({
      version: "a524caeaa23495bc9edc805ab08ab5fe943afd3febed884a4f3747aa32e9cd61",
      input: { image }
    });

    console.log('Debug: Prediction result:', prediction);
    return NextResponse.json(prediction);
  } catch (error) {
    console.error('Detailed error:', error);
    console.error('Stack trace:', error.stack);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}