// GET /api/hello
export async function GET() {
  return Response.json({
    message: "สวัสดีจาก API ของเรา",
    time: new Date().toISOString(),
  });
}
