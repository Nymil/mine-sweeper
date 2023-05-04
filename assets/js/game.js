class Game {
    constructor() {
        this.fps = 30;
        this.board = new Board(this);
        this.gameOver = false;
        this.addEventListeners();
    }

    failedGame() {
        this.gameOver = true;
    }

    draw() {
        this.board.draw();
    }

    run() {
        setInterval(() => this.draw(), 1000 / this.fps);
    }

    handleWindowClick(e) {
        if (e.target.nodeName !== 'CANVAS' || this.gameOver) {
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

    handelKeyClick(key) {
        if (key === 'r') {
            this.gameOver = false;
            this.board.reset();
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
        document.addEventListener('keydown', (e) => this.handelKeyClick(e.key.toLowerCase()));
    }
}
