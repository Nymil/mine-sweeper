let _$canvas;
let _ctx;

// rect is array like [startX, startY, width, height]
function drawRect(color, rect, width = null) {
    _ctx.beginPath();
    width === null ? _ctx.fillStyle = color : _ctx.strokeStyle = color;
    if (width !== null) _ctx.lineWidth = width;
    width === null ? _ctx.fillRect(rect[0], rect[1], rect[2], rect[3]) : _ctx.strokeRect(rect[0] + width / 2, rect[1] + width / 2, rect[2] - width, rect[3] - width);
    _ctx.stroke();
}

function drawText(color, text, pos, size) {
    _ctx.font = `${size}px serif`;
    _ctx.fillStyle = color;
    _ctx.fillText(text, pos[0], pos[1]);
}