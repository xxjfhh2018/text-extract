import { NextResponse } from "next/server";
import Replicate from "replicate";
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const WEBHOOK_HOST = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NGROK_HOST;
// 定义POST请求处理函数，作为默认输出函数
export async function POST(request) {
  console.log('Debug: 收到 POST 请求到 /api/predictions');
  try {    
    const body = await request.json();
    console.log('Debug: 请求体:', body);

    // 检查是否为 webhook 回调
    if (body.status && body.id) {
      return handleWebhook(body);
    }

    // 原有的预测创建逻辑
    const { image } = body;
    console.log('提取的图片 URL:', image);

    if (!image) {
      console.error('请求中未提供图片 URL');
      return NextResponse.json({ error: '未提供图片 URL' }, { status: 400 });
    }

    if (!process.env.REPLICATE_API_TOKEN) {
      console.error('REPLICATE_API_TOKEN 未设置');
      throw new Error('REPLICATE_API_TOKEN 未设置');
    }

    console.log('使用 Replicate API 创建预测...');
    const prediction = await replicate.predictions.create({
      version: "a524caeaa23495bc9edc805ab08ab5fe943afd3febed884a4f3747aa32e9cd61",
      input: { image },
      webhook: `${WEBHOOK_HOST}/api/predictions`,
      webhook_events_filter: ["completed"]
    });

    console.log('Debug: 预测结果:', prediction);
    return NextResponse.json({ message: "预测已开始", id: prediction.id });
  } catch (error) {
    console.error('详细错误:', error);
    console.error('堆栈跟踪:', error.stack);
    return NextResponse.json({ error: '内部服务器错误' }, { status: 500 });
  }
}
async function handleWebhook(body) {
  console.log('收到 Replicate webhook:', body);

  // 这里应该添加一些验证逻辑，确保请求确实来自 Replicate

  switch (body.status) {
    case 'succeeded':
      console.log('预测成功，结果:', body.output);
      // 这里可以添加将结果保存到数据库或发送通知等逻辑
      break;
    case 'failed':
      console.error('预测失败:', body.error);
      // 这里可以添加错误处理逻辑
      break;
    default:
      console.log('收到其他状态:', body.status);
  }

  return NextResponse.json({ message: "Webhook 成功接收" });
}