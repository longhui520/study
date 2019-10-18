const FormStore = function(form,initialState){
    if(!form){
        throw new Error('Form is required');
    }
    this.form = form;
    this.states = {test:""};
    for(let prop in initialState){
        if(initialState.hasOwnProperty(prop)&& this.states.hasOwnProperty(prop)){
            this.states[prop] = initialState[prop];
        }
    }
}
FormStore.prototype.mutations = {
    setFormAttribute(states,formAttribute){
        console.log({...states,...formAttribute});
        this.states = {...states,...formAttribute};
    }
}
FormStore.prototype.commit = function(name,...args){
    const mutations = this.mutations;
    if(mutations[name]){
        mutations[name].apply(this,[this.states].concat(args));
    }else{
        throw new Error(`Action not found:${name}`);
    }
}
var form = {};
var store = new FormStore({},{test:1});
store.commit('setFormAttribute',{test:3});
console.log(store.states.test);