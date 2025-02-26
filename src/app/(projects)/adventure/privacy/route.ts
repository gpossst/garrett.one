import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // Read the HTML file
    const filePath = path.join(
      process.cwd(),
      "src/app/(projects)/adventure/privacy-policy.html"
    );
    const htmlContent = fs.readFileSync(filePath, "utf8");

    // Return the HTML content with the appropriate content type
    return new NextResponse(htmlContent, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  } catch (error) {
    console.error("Error serving privacy policy:", error);
    return new NextResponse("Error loading privacy policy", { status: 500 });
  }
}
