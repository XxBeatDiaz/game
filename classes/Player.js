export class Player {
    constructor(name) {
        this.name = name;
        this.times = [];
        // this.seconds= 0;
    }

    // Take start and end time and return the amount of time taken and save 
    recordTime(start, end) {
        const timeTaken = (end - start) / 1000;
        this.times.push(timeTaken)
        return timeTaken;
    }

    // Show stats of player
    showStats() {
        const numbers = this.times;
        let sum = 0;
        for (const num of numbers) {
            sum += num;
        }
        const avg = sum / numbers.length;
        console.log(`${this.name}.\nTotal: ${sum.toFixed(3)}\nAvg: ${avg.toFixed(3)}`);
    }
}