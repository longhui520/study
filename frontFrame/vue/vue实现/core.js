class Vue {
    constructor(options) {
        let data = this._data = options.data;

        new Observer(data);

        const _complie = new Compile(options.el, this);

        _complie.compileText();
    }
}
/**
 * 流程
 * 1. 设置数据观测   new Observer
 * 2. 编译模板       new  Complie (new Watch)
 * 3. 设置模板中的数据观察 new  Watch(在获取值前 Dep.target = watch 实例， 获取后 Dep.target = null)
 * 4. 将Watch 实例 添加到依赖中 new Dep(在获取值时getter中判断Dep.target 来决定是否加入依赖中)
 * 5. 值变动时，Observer中触发setter
 * 7. 在setter中执行dep的notify
 * 6. 触发dep中的Dep.target Watch实例的update方法 
 * 7. Watch实例的update方法 中取获取值更新模板
 */

