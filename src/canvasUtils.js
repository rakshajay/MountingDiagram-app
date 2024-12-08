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
         ctx.lineTo(rect1X + newWidth + 100 - triangleSize / 2, rect1Y  + 20 + triangleSize / 2); // Bottom-left vertex
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

    }

}