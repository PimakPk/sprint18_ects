class ECTS {
    constructor (score) {
        if (!Number(score)) {
            throw new Error("Score should be a number");
        }
        if (score < 0 || score > 100) {
            throw new Error("Score shoud be in 0-100");
        }
        this.score = score;
    }

    ectsFromScore() {
        if (this.score <= 59) return 'F';
        if (this.score <= 64) return 'E';
        if (this.score <= 73) return 'D';
        if (this.score <= 81) return 'C';
        if (this.score <= 89) return 'B';
        if (this.score <= 100) return 'A';
    }
}

module.exports = ECTS;