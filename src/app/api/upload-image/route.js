import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from 'uuid';

// 配置 S3 客户端
const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return new Response(JSON.stringify({ error: '没有文件上传' }), { status: 400 });
    }

    // 生成唯一的文件名
    const fileName = `${uuidv4()}-${file.name}`;

    // 创建 PutObjectCommand
    const putObjectCommand = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: fileName,
      Body: await file.arrayBuffer(),
      ContentType: file.type,
    });

    // 上传文件到 R2
    await s3Client.send(putObjectCommand);

    // 返回文件的公共 URL
    const publicUrl = `${process.env.R2_PUBLIC_DOMAIN}/${fileName}`;

    return new Response(JSON.stringify({ url: publicUrl }), { status: 200 });
  } catch (error) {
    console.error('上传失败:', error);
    return new Response(JSON.stringify({ error: '文件上传失败' }), { status: 500 });
  }
}