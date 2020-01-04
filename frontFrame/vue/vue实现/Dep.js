class Dep {
    constructor(vue) {
        this.subs = []; // 存放订阅者
    }
    
    addSubscribe(subscribe) {
        this.subs.push(subscribe);
    }
    
    notify() {
        let length = this.subs.length;
        while(length--)
        {
            this.subs[length].update();
        }
    }
}
