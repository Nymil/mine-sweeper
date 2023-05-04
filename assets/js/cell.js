class Cell {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.value = null;
        this.visible = false;
        this.flag = false;
    }

    static getLength() {
        return _$canvas.heigth / 16;
    }
}
