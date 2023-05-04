class Game {
    constructor() {
        this.fps = 30;
        this.reset();
        this.addEventListeners();
    }

    reset() {
        this.board = new Board();
    }

    draw() {
        this.board.draw();
    }

    run() {
        setInterval(() => this.draw(), 1000 / this.fps);
    }

    handleWindowClick(e) {
        if (e.target.nodeName !== 'CANVAS') {
            return;
        }

        const mouseCoords = this.getMouseCoords(e);
        const boardCoords = Board.coordsToBoardCoords(mouseCoords);

        if (e.which === 1) {
            this.board.leftClick(boardCoords);
        } else if (e.which === 2) {
            this.board.rightClick(boardCoords);
        }
    }

    getMouseCoords(e) {
        var rect = _$canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        
    }

    addEventListeners() {
        document.addEventListener('click', (e) => this.handleWindowClick(e));
    }
}
