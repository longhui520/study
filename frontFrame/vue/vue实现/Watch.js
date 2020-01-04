class Watcher {
    constructor(vue, exp, callback) {
        this.vue = vue;
        this.exp = exp;
        this.callback = callback;
        this.value = this.get(true);
    }
    
    get(isFirst) {
        Dep.target = isFirst?this:null;
        let value = this.vue._data[this.exp];
        Dep.target = null;
        return value;
    }
    
    update() {
        this.value = this.get();
        this.callback.call(this.vue, this.value); // 将新的数据传回，用于更新视图
    }
}
