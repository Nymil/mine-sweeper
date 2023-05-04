class Cell {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.value = 3;
        this.visible = false;
        this.flag = false;
    }

    draw() {
        const borderColor = this.visible ? '#78A5A3' : '#CE5A57';
        const cellColor = this.visible ? '#AAAAAA' : '#E1B16A';
        
        drawRect(cellColor, [this.col * Cell.getLength(), this.row * Cell.getLength(), Cell.getLength(), Cell.getLength()]);
        drawRect(borderColor, [this.col * Cell.getLength(), this.row * Cell.getLength(), Cell.getLength(), Cell.getLength()], 2);

        if (this.visible) {
            drawText('#444C5C', this.value, [this.col * Cell.getLength() + 10, (this.row + 1) * Cell.getLength() - 5], 50);
        } else if (this.flag) {
            drawCircle('#CE5A57', [this.col * Cell.getLength() + Cell.getLength() / 2, this.row * Cell.getLength() + Cell.getLength() / 2], 10);
        }
    }

    static getLength() {
        return _$canvas.height / 16;
    }
}
