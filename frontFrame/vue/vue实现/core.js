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
 * 2. 编译模板       new  Complie
 * 3. 设置模板中的数据观察 new  Watch，
 * 4. 将Watch 实例 添加到依赖中 new Dep
 * 5. 值变动时，Observer中触发get 
 * 7. 执行dep的notify
 * 6. 触发watch中update 
 * 7. 去获取data中的数据修改模板中的值
 */