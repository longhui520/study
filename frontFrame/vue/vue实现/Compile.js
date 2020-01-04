class Compile {
    constructor(el, vue) {
        this.$el = document.querySelector(el);
        this.$vue = vue;
    }
    
    compileText() {
        const reg = /\{\{(.*)\}\}/; // 用于匹配 {{name}} 的正则
        
        const fragment = this.node2Fragment(this.$el); // 把操作 DOM 改成操作文档碎片
        const node = fragment.childNodes[0];
        
        if (reg.test(node.textContent)) {
            let matchedName = RegExp.$1;
            node.textContent = this.$vue._data[matchedName]; // 替换数据
            this.$el.appendChild(node); // 编译好的文档碎片放进根节点

            new Watcher(this.$vue, matchedName, function(value) {
                node.textContent = value;
                console.log(node.textContent);
            });
        }
    }
    
    node2Fragment(node) {
        const fragment = document.createDocumentFragment();
        fragment.appendChild(node.firstChild);
        return fragment;
    }
}
