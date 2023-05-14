class Queue {
    constructor() {
        this.queue = []
        this.processing = false;
    }

    addJob(job) {
        this.queue.push(job)
        this.bumpQueue()
    }

    bumpQueue() {
        if (this.processing) return
        const job = this.queue.shift()
        if (!job) return
        const cb = () => {
            this.processing = false
            this.bumpQueue()
        }
        this.processing = true
        job(cb)
    }
}

module.exports = Queue