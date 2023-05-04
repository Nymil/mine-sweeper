class Board {
    constructor() {
        this.cols = 30;
        this.rows = 16;
        this.generated = false;
        this.cells = [];
        this.fillCells();
    }

    fillCells() {
        this.cells = [];
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const cell = new Cell(col, row);
                this.cells.push(cell);
            }   
        }
    }

    draw() {
        this.cells.forEach(cell => cell.draw());
    }

    leftClick(coords) {
        if (!self.generated) {
            this.generate();
            this.generated = true;
        }

        console.log(coords);
    }

    generate() {
        
    }

    rightClick(coords) {

    }

    static coordsToBoardCoords(coords) {
        return {
            col: Math.floor(coords.x / Cell.getLength()),
            row: Math.floor(coords.y / Cell.getLength())
        };
    }
}
