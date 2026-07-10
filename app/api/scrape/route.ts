import FirecrawlApp from "@mendable/firecrawl-js";

export async function POST(request: Request) {
  try {
    console.log("API started");

    const { url } = await request.json();
    console.log("URL:", url);

    const app = new FirecrawlApp({
      apiKey: process.env.FIRECRAWL_API_KEY!,
    });

    const result = await app.scrape(url, {
      formats: ["markdown"],
    });

    //console.log(result);

    return Response.json(result);
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}