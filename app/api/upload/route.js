import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const data = await request.formData();
    const file = data.get('file');

    if (!file) {
        return NextResponse.json({ success: false, message: 'No file uploaded' });
    }

    try {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Define the path to the /public/uploads directory
        const dirPath = join(process.cwd(), 'public', 'uploads');
        const filePath = join(dirPath, file.name);

        // Create the /public/uploads directory if it doesn't exist
        if (!existsSync(dirPath)) {
            await mkdir(dirPath, { recursive: true });
        }

        // Save the file
        await writeFile(filePath, buffer);

        console.log(`File uploaded successfully to ${filePath}`);

        // Return success with the public URL of the file
        const publicUrl = `/uploads/${file.name}`;
        return NextResponse.json({ success: true, url: publicUrl });
    } catch (error) {
        console.error('File upload error:', error);
        return NextResponse.json({ success: false, error: error.message });
    }
}
