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
        drawRect('black', [0, 0, _$canvas.width, _$canvas.height]);
    }

    run() {
        setInterval(() => this.draw(), 1000 / this.fps);
    }

    handleWindowClick(e) {
        if (e.target.nodeName !== 'CANVAS') {
            return;
        }

        const mouseCoords = this.getMouseCoords(e);

        if (e.which === 1) {
            this.board.leftClick(mouseCoords);
        } else if (e.which === 2) {
            this.board.rightClick(mouseCoords);
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
