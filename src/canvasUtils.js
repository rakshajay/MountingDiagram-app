export const drawCanvas = (canvasRef, selectedScreen, screenData) => {
    if (!canvasRef.current) return;

    const selectedData = screenData.find(
        (row) => row["Screen MFR"] === selectedScreen
    );
    console.log("selectedScreen", selectedScreen)
    console.log("selectedData", selectedData)
    if (selectedData) {
        const { Height, Width } = selectedData;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // scale in canvas works with pixcel, for visually rigth scale increase the width and hight
        let newWidth = 18 * Width;
        let newHeight = 18 * Height;

        //increasing niche(2.5") proportional to increased height and width.
        let newNiche = 18 * 2.5

        // to get rec in center of screen 
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const rect1X = centerX - (newWidth / 2);
        const rect1Y = centerY - (newHeight / 2);

        // to get niche rec in center of screen 
        const nicheRect1X = centerX - (newWidth / 2 + newNiche / 2);
        const nicheRrect1Y = centerY - (newHeight / 2 + newNiche / 2);

        ctx.lineWidth = 10;
        ctx.strokeRect(rect1X, rect1Y, newWidth, newHeight);

        ctx.lineWidth = 2;
        ctx.strokeRect(nicheRect1X, nicheRrect1Y, newWidth + newNiche, newHeight + newNiche);

        // Draw a filled black triangle at (rect1X, rect1Y)
        const triangleSize = 20; // Customize the size of the triangle
        ctx.fillStyle = "black"; // Set the fill color to black
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(rect1X + 10, rect1Y - 100); // Base-left vertex of the triangle
        ctx.lineTo(rect1X + 10 + triangleSize, rect1Y - triangleSize / 2 - 100); // Top vertex
        ctx.lineTo(rect1X + 10 + triangleSize, rect1Y + triangleSize / 2 - 100); // Bottom vertex
        ctx.closePath();
        ctx.fill(); // Fill the triangle with black

        // Draw a vertical line at rect1X, rect1Y
        const lineLength = 100; // Length of the vertical line
        ctx.beginPath();
        ctx.moveTo(rect1X, rect1Y - 40); // Start point of the line
        ctx.lineTo(rect1X, rect1Y - lineLength); // End point of the line (downward)
        ctx.stroke(); // Render the line

        // Draw a vertical line at the opposite side of the rectangle
        ctx.beginPath();
        ctx.moveTo(rect1X + newWidth, rect1Y - 40); // Start point of the line (right side)
        ctx.lineTo(rect1X + newWidth, rect1Y - lineLength); // End point of the line (downward)
        ctx.stroke(); // Render the line

        // Draw a filled black triangle pointing to the left at the opposite side of the rectangle
        ctx.beginPath();
        ctx.moveTo(rect1X + newWidth - 10, rect1Y - 100); // Base-right vertex of the triangle
        ctx.lineTo(rect1X + newWidth - 10 - triangleSize, rect1Y - triangleSize / 2 - 100); // Top vertex
        ctx.lineTo(rect1X + newWidth - 10 - triangleSize, rect1Y + triangleSize / 2 - 100); // Bottom vertex
        ctx.closePath();
        ctx.fill(); // Fill the triangle with black

        //Draw line connecting two triangles
        ctx.beginPath();
        ctx.moveTo(rect1X + 10, rect1Y - 100); // Start point of the line
        ctx.lineTo(rect1X + newWidth - 10, rect1Y - 100); // End point of the line 
        ctx.stroke();


        // Draw a horiz line on the right top side of the rectangle
        ctx.beginPath();
        ctx.moveTo(rect1X + newWidth + 40, rect1Y); // Right side start point
        ctx.lineTo(rect1X + newWidth + 100, rect1Y); // Horizontal extension
        ctx.stroke();

        // Draw a horiz line on the right top bottom side of the rectangle
        ctx.beginPath();
        ctx.moveTo(rect1X + newWidth + 40, rect1Y + newHeight); // Right side start point
        ctx.lineTo(rect1X + newWidth + 100, rect1Y + newHeight); // Horizontal extension
        ctx.stroke();

        // Draw a filled black triangle on the right up side of the rectangle
        ctx.beginPath();
        ctx.moveTo(rect1X + newWidth + 100, rect1Y + 10); // Top vertex
        ctx.lineTo(rect1X + newWidth + 100 - triangleSize / 2, rect1Y + 20 + triangleSize / 2); // Bottom-left vertex
        ctx.lineTo(rect1X + newWidth + 100 + triangleSize / 2, rect1Y + 20 + triangleSize / 2); // Bottom-right vertex
        ctx.closePath();
        ctx.fill();

        // Draw a filled black triangle on the right down side of the rectangle
        ctx.beginPath();
        ctx.moveTo(rect1X + newWidth + 100, rect1Y + newHeight - 20 + triangleSize / 2); // Bottom vertex
        ctx.lineTo(rect1X + newWidth + 100 - triangleSize / 2, rect1Y + newHeight - 20 - triangleSize / 2); // Top-left vertex
        ctx.lineTo(rect1X + newWidth + 100 + triangleSize / 2, rect1Y + newHeight - 20 - triangleSize / 2); // Top-right vertex
        ctx.closePath();
        ctx.fill();

        //Draw line connecting two vertical triangles
        ctx.beginPath();
        ctx.moveTo(rect1X + newWidth + 100, rect1Y + 10); // Start point of the line
        ctx.lineTo(rect1X + newWidth + 100, rect1Y + newHeight - 20 + triangleSize / 2); // End point of the line 
        ctx.stroke();



        // Left-side configuration for the second rectangle



        // Horizontal line on the left top side of the second rectangle
        ctx.beginPath();
        ctx.moveTo(nicheRect1X - 20, nicheRrect1Y); // Start point
        ctx.lineTo(nicheRect1X - 80, nicheRrect1Y); // Horizontal extension
        ctx.stroke();

        // Horizontal line on the left bottom side of the second rectangle
        ctx.beginPath();
        ctx.moveTo(nicheRect1X - 20, nicheRrect1Y + newHeight + newNiche); // Start point
        ctx.lineTo(nicheRect1X - 80, nicheRrect1Y + newHeight + newNiche); // Horizontal extension
        ctx.stroke();

        // Upward-pointing triangle on the left top side of the second rectangle
        ctx.beginPath();
        ctx.moveTo(nicheRect1X - 80, nicheRrect1Y + 10); // Top vertex
        ctx.lineTo(nicheRect1X - 80 - triangleSize / 2, nicheRrect1Y + 20 + triangleSize / 2); // Bottom-left vertex
        ctx.lineTo(nicheRect1X - 80 + triangleSize / 2, nicheRrect1Y + 20 + triangleSize / 2); // Bottom-right vertex
        ctx.closePath();
        ctx.fill();

        // Downward-pointing triangle on the left bottom side of the second rectangle
        ctx.beginPath();
        ctx.moveTo(nicheRect1X - 80, nicheRrect1Y + newHeight + newNiche - 20 + triangleSize / 2); // Bottom vertex
        ctx.lineTo(nicheRect1X - 80 - triangleSize / 2, nicheRrect1Y + newHeight + newNiche - 20 - triangleSize / 2); // Top-left vertex
        ctx.lineTo(nicheRect1X - 80 + triangleSize / 2, nicheRrect1Y + newHeight + newNiche - 20 - triangleSize / 2); // Top-right vertex
        ctx.closePath();
        ctx.fill();

        // Line connecting the two triangles on the left side of the second rectangle
        ctx.beginPath();
        ctx.moveTo(nicheRect1X - 80, nicheRrect1Y + 10); // Start point (top triangle)
        ctx.lineTo(nicheRect1X - 80, nicheRrect1Y + newHeight + newNiche - 20 + triangleSize / 2); // End point (bottom triangle)
        ctx.stroke();


        // Bottom-side configuration for the second rectangle

        // Draw a verti line on the bottom left side of the second rectangle
        ctx.beginPath();
        ctx.moveTo(nicheRect1X, nicheRrect1Y + newHeight + newNiche + 20); // Start point
        ctx.lineTo(nicheRect1X, nicheRrect1Y + newHeight + newNiche + 150); // Horizontal extension
        ctx.stroke();

        // Draw a verti line on the bottom right side of the second rectangle
        ctx.beginPath();
        ctx.moveTo(nicheRect1X + newWidth + newNiche, nicheRrect1Y + newHeight + newNiche + 20); // Start point
        ctx.lineTo(nicheRect1X + newWidth + newNiche, nicheRrect1Y + newHeight + newNiche + 150); // Horizontal extension
        ctx.stroke();

        // Draw a filled black triangle on the bottom left side of the second rectangle
        ctx.beginPath();
        ctx.moveTo(nicheRect1X + 10, nicheRrect1Y + newHeight + newNiche + 150); // Base vertex
        ctx.lineTo(nicheRect1X + 10 + triangleSize, nicheRrect1Y + newHeight + newNiche + 150 - triangleSize / 2); // Top-left vertex
        ctx.lineTo(nicheRect1X + 10 + triangleSize, nicheRrect1Y + newHeight + newNiche + 150 + triangleSize / 2); // Top-right vertex
        ctx.closePath();
        ctx.fill();

        // Draw a filled black triangle on the bottom right side of the second rectangle
        ctx.beginPath();
        ctx.moveTo(nicheRect1X + newWidth + newNiche - 10, nicheRrect1Y + newHeight + newNiche + 150); // Base vertex
        ctx.lineTo(nicheRect1X + newWidth + newNiche - 10 - triangleSize, nicheRrect1Y + newHeight + newNiche + 150 - triangleSize / 2); // Top-right vertex
        ctx.lineTo(nicheRect1X + newWidth + newNiche - 10 - triangleSize, nicheRrect1Y + newHeight + newNiche + 150 + triangleSize / 2); // Bottom-right vertex
        ctx.closePath();
        ctx.fill();

        // Draw a line connecting the two triangles on the bottom side of the second rectangle
        ctx.beginPath();
        ctx.moveTo(nicheRect1X + 10, nicheRrect1Y + newHeight + newNiche + 150); // Left triangle base
        ctx.lineTo(nicheRect1X + newWidth + newNiche - 10, nicheRrect1Y + newHeight + newNiche + 150); // Right triangle base
        ctx.stroke();

        // Floor

        // Draw a horizontal line at the bottom of the canvas with 500px offset
        ctx.beginPath();
        const yOffset = canvas.height - 150; // 150 pixels offset from the bottom
        ctx.moveTo(150, yOffset); // Start point (left edge of the canvas with 150 offset)
        ctx.lineTo(canvas.width - 150, yOffset); // End point (right edge of the canvas with 150 offset)
        ctx.stroke();

        //Draw triangle on floor line edge bottom
        ctx.beginPath();
        ctx.moveTo(150, yOffset); // Base vertex (aligned with the floor line)
        ctx.lineTo(150 + triangleSize / 2, yOffset - triangleSize); // Bottom-left vertex
        ctx.lineTo(150 - triangleSize / 2, yOffset - triangleSize); // Bottom-right vertex
        ctx.closePath();
        ctx.fill();

        //Draw triangle on center line of TV
        ctx.beginPath();
        const centerYPoint = canvas.height / 2; // Center of the canvas vertically        
        ctx.moveTo(150, centerYPoint); // Top vertex (aligned to the center of the canvas)
        ctx.lineTo(150 - triangleSize / 2, centerYPoint + triangleSize); // Bottom-left vertex
        ctx.lineTo(150 + triangleSize / 2, centerYPoint + triangleSize); // Bottom-right vertex
        ctx.closePath();
        ctx.fill();

        //Draw connecting line
        ctx.beginPath();
        ctx.moveTo(150, yOffset); // Left triangle base
        ctx.lineTo(150, centerYPoint); // Right triangle base
        ctx.stroke();

        // Draw a rotated "Z" symbol with a white background on the connecting line
        ctx.save(); // Save the current context state

        const breaklineX = 150; // X-coordinate (center of the line)
        const breaklineY = (yOffset + centerYPoint) / 2.2; // Y-coordinate (midpoint of the line)
        const textSize = 20; // Font size for the letter "Z"

        // Draw a white background rectangle behind the text
        const bgWidth = textSize + 4; // Width of background rectangle
        const bgHeight = textSize + 4; // Height of background rectangle
        ctx.fillStyle = "white"; // White background
        ctx.fillRect(breaklineX - bgWidth / 2, breaklineY - bgHeight / 2, bgWidth, bgHeight);

        // Draw the letter "Z" rotated by 90 degrees
        ctx.translate(breaklineX, breaklineY); // Move the context to the center of the letter
        ctx.rotate((45 * Math.PI) / 180); // Rotate 90 degrees clockwise

        
        // Thin "Z" with strokeText and reduced opacity
        ctx.globalAlpha = 0.5; // Reduce opacity
        ctx.font = `20px 'Helvetica Neue', 'Segoe UI', Arial, sans-serif`;
        ctx.scale(1, 1.5);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "black";
        ctx.fillText("Z", 0, 0);
        ctx.globalAlpha = 1.0; // Reset opacity

        ctx.restore(); // Restore the original context state


    }

}