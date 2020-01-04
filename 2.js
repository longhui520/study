const fs = require('fs')
let data = fs.readFileSync('./proper.json')
data = data.toString()
function isEmpty(value){
    return value == undefined
}
function isFunc(value){
    return Object.prototype.toString.call(value).slice(8,-1) === 'Function'
}
function getUUID(){
    return Math.random().toString(32).slice(2)
}
let config = {
	components:{
		compInput:{
			props:{
				value:{
				    default:()=>{return {code:'',text:''}},
				    validate:(value)=>{
				        if(value && value.code!==null && value.text==null){
				            return true
				        }
				        return false
				    }
				},
				unit:{
				    default:""
				}
			},
			beforeCreated(props,ctx){
				let p = Object.assign({},props)
				let c = Object.assign({},ctx.props)
				if(p.type === 'textarea'){
				    delete c.type
				    p.compType = 'cpTextarea'
				}
				return {props:p,props:c}
			}
		}
    },
    common:{
		props:{
			cid:{
			    default:(ctx)=>getUUID()
			},
			name:{
			    default:(ctx)=>ctx.compType
			},
			compType:{
			    default:'cpError'
			},
			label:{
			    default:''
			},
			fieldName:{
			    default:'字段名不能为空'
			},
			placeholder:{
			    default:'请输入'
			},
			requiredFlag:{
			    default:false
			},
			disabledFlag:{
			    default:false
			},
			readonlyFlag:{
			    default:false
			},
			showFlag:{
			    default:false
			},
			error:{
			    default:''
			},
			refer:{
			    default:null
			},
			relation:{
			    default:[]
			},
			relationTwo:{
			    default:[]
			}
		}
    }
}    
function isEmpty(value){
    return value == undefined
}
function isFunc(value){
    return Object.prototype.toString.call(value).slice(8,-1) === 'Function'
}
function translateProps(props,ctx){
    let res= {}
    let val = null
    let def = null
	ctx = ctx.beforeCreated?ctx.beforeCreated(props,ctx):ctx
    for(let key in ctx.props){
        val = props[key]
        if(isEmpty(val) ||!isEmpty(ctx.props[key].validate) &&  !ctx.props[key].validate(val)){
            def = ctx.props[key].default
            val = isFunc(def)?def(props):def
        }
        res[key] = val
    }
    return res
}

data = JSON.parse(data)
function translate(data,config){
    const forms = data.main_sheet.forms
    const trlForms = []
    let ctx = {}
    for(let i=0;i<forms.length;i++){
		ctx.props = Object.assign({},config.common.props,config.components[forms[i].compType].props)
		ctx.beforeCreated = config.components[forms[i].compType].beforeCreated;
        trlForms.push(translateProps(forms[i],ctx))
    }
    return trlForms
}
console.log(translate(data,config))

