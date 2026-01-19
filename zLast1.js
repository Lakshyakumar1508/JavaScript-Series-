//Observer Pattern
class Youtube {
    constructor() {
        this.subscribers = [];
    }

    subscribe(user) {
        this.subscribers.push(user);
        user.update("You have subscribed the channel.");
    }

    unsubscribe(user) {
        this.subscribers = this.subscribers.filter(sub => sub !== user);
        user.update("You have un-subscribed the channel.");
    }

    notify(message) {
        this.subscribers.forEach(sub => sub.update(message));
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name}: ${data}`);
    }
}

let sheriyan = new Youtube();

let u1 = new User("Lakshya");
let u2 = new User("Rahul");

sheriyan.subscribe(u1);
sheriyan.subscribe(u2);

sheriyan.notify("New video uploaded 🎥");


//Performance Optimization

