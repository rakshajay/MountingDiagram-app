export const drawTextWithBackground = (ctx, text, x, y, padding = 10, fontSize = 16) => {
    // Measure text width
    const textWidth = ctx.measureText(text).width;

    // Grey background rectangle
    ctx.fillStyle = "lightgrey";
    ctx.fillRect(
        x - textWidth / 2 - padding / 2, // X position
        y - padding, // Y position
        textWidth + padding, // Rectangle width
        padding * 2 // Rectangle height
    );

    // Black border for the rectangle
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.strokeRect(
        x - textWidth / 2 - padding / 2,
        y - padding,
        textWidth + padding,
        padding * 2
    );

    // Draw the text
    ctx.fillStyle = "black";
    ctx.font = `${fontSize}px Arial`; // Text font and size
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, x, y);
};

export const drawMeasurementText = (ctx, measurements, positions) => {
    const { width, height, nicheWidth, nicheHeight } = measurements;
    const { widthPos, heightPos, nicheLeftPos, nicheBottomPos } = positions;

    const textPadding = 30; // Padding for rectangles
    const fontSize = 36; // Font size for the text

    // Draw all text measurements with background
    drawTextWithBackground(ctx, `${width}"`, widthPos.x, widthPos.y, textPadding, fontSize);
    drawTextWithBackground(ctx, `${height}"`, heightPos.x, heightPos.y, textPadding, fontSize);
    drawTextWithBackground(ctx, `${nicheWidth}"`, nicheLeftPos.x, nicheLeftPos.y, textPadding, fontSize);
    drawTextWithBackground(ctx, `${nicheHeight}"`, nicheBottomPos.x, nicheBottomPos.y, textPadding, fontSize);
};
