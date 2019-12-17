const refer = {
	"【l1560316698】": {
		"type": "control",
		"actionname": "MisAutoMmn",
		"rules": ["select", "mis_auto_lovqy.xingye", "【行业评价】行业", "MisAutoMmn"]
	},
	"【y1560316702】": {
		"type": "control",
		"actionname": "MisAutoMmn",
		"rules": ["select", "mis_auto_lovqy.chanyelian", "【行业评价】产业链", "MisAutoMmn"]
	},
	"【i1560316735】": {
		"type": "control",
		"actionname": "MisAutoMmn",
		"rules": ["select", "mis_auto_lovqy.xingye", "【行业评价】行业", "MisAutoMmn"]
	},
	"【l1560316739】": {
		"type": "control",
		"actionname": "MisAutoMmn",
		"rules": ["select", "mis_auto_lovqy.chanyelian", "【行业评价】产业链", "MisAutoMmn"]
	},
	"【h1560316763】": {
		"type": "tables",
		"sql_str": "SELECT s.masid FROM mis_auto_eviif_sub_duiyingdexingyechany   s\nWHERE     s.xingye=&quot;【i1560316735】&quot; AND s.chanyelian=&quot;【l1560316739】&quot;"
	},
	"【s1560316193】": {
		"type": "control",
		"actionname": "MisAutoMmn",
		"rules": ["select", "mis_auto_lovqy.xingye", "【行业评价】行业", "MisAutoMmn"]
	},
	"【p1560316197】": {
		"type": "control",
		"actionname": "MisAutoMmn",
		"rules": ["select", "mis_auto_lovqy.chanyelian", "【行业评价】产业链", "MisAutoMmn"]
	},
	"【w1560339869】": {
		"type": "control",
		"actionname": "MisAutoMmn",
		"rules": ["select", "mis_auto_lovqy.xingye", "【行业评价】行业", "MisAutoMmn"]
	},
	"【p1560339906】": {
		"type": "control",
		"actionname": "MisAutoMmn",
		"rules": ["select", "mis_auto_lovqy.xingye", "【行业评价】行业", "MisAutoMmn"]
	},
	"【b1560339929】": {
		"type": "tables",
		"sql_str": "SELECT chanyelian FROM mis_auto_mexfq WHERE id=&quot;【p1560339906】&quot;"
	},
	"【x1560399018】": {
		"type": "control",
		"actionname": "MisAutoMmn",
		"rules": ["select", "mis_auto_lovqy.xingye", "【行业评价】行业", "MisAutoMmn"]
	},
	"【q1567065163】": {
		"type": "control",
		"actionname": "MisAutoMmn",
		"rules": ["text", "mis_auto_lovqy.xingyefuben", "【行业评价】行业副本", "MisAutoMmn"]
	},
	"【c1567065187】": {
		"type": "control",
		"actionname": "MisAutoMmn",
		"rules": ["select", "mis_auto_lovqy.xingye", "【行业评价】行业", "MisAutoMmn"]
	},
	"【t1562648571】": {
		"type": "control",
		"actionname": "MisAutoMmn",
		"rules": ["select", "mis_auto_lovqy.xingye", "【行业评价】行业", "MisAutoMmn"]
	},
	"【u1562648612】": {
		"type": "tables",
		"sql_str": "SELECT chanyelianshuliang FROM mis_auto_mexfq where id=&quot;【t1562648571】&quot;"
	},
	"【r1562648634】": {
		"type": "control",
		"actionname": "MisAutoMmn",
		"rules": ["select", "mis_auto_lovqy.xingye", "【行业评价】行业", "MisAutoMmn"]
	},
	"【k1562648673】": {
		"type": "tables",
		"sql_str": "SELECT chanyelian FROM mis_auto_mexfq WHERE id=&quot;【r1562648634】&quot;"
	}
}
const extractRule = (str,reg)=>{
	return str.match(reg)
}
const repalceRule = (str,repObj,reg)=>{
	return str.replace(reg,p=>repObj[p])
}
const getTables = async (str)=>{
		return await new Promise(resolve=>setTimeout(resolve,1000,str))
	}
const geSpname = async (str)=>{
		return str
	}
const getApi = async (url,type,param)=>{
	return  url
}
const parseRule = async (ctx,rule)=>{
	const fields = ctx.fields
	const refer = ctx.refer
	const ruleObj = refer[rule]
	let value = ""
	switch(ruleObj.type){
		case 'control':
			const fieldName = ruleObj.rules[1].split('.')[1]
			value = fields[fieldName]
			break
		case 'tables':
			value  = await getTables(await parseRuleStr(ctx,ruleObj.sql_str))
			break
		case 'sp':
			value  = await geSpname(await parseRuleStr(ctx,ruleObj.spname))
			break
		case 'api':
			const param_value = ruleObj.param.map((arr)=>arr[1])
			const param_key = ruleObj.param.map((arr)=>arr[0])
			const send_type = ruleObj.send_type
			let asyncTaskResObj = {}
			asyncTaskResObj =  parallelTask(param_value,param_key,parseRuleStr,ctx)
			value = await getApi( await parseRuleStr(ctx,ruleObj.url),send_type,asyncTaskResObj)
			break
	}
	return value
}
const parseRuleStr = async (ctx,str)=>{
	const reg = ctx.reg
	const rules = extractRule(str,reg)
	let asyncTaskResObj = {}
	if(rules){
		asyncTaskResObj = parallelTask(rules,rules,parseRule,ctx)
	}
	return repalceRule(str,asyncTaskResObj,reg)
}
const parallelTask = async (rules,rulesKey,fn,ctx)=>{
		let asyncTask = []
		let asyncTaskResArr = []
		let asyncTaskResObj = {}
		for(let i = 0;i<rules.length;i++){
			asyncTask.push(fn(ctx,rules[i]))
		}
		asyncTaskResArr = await Promise.all(asyncTask)
		for(let i=0;i<asyncTaskResArr.length;i++){
			asyncTaskResObj[rulesKey[i]]=asyncTaskResArr[i]
		}
		return asyncTaskResObj
	}
async function run(){
  try{
    let data = await  parseRule({refer:refer,fields:{xingye:1,chanyelian:2},reg:/(【.*?】)/g},'【h1560316763】')
    console.log(data)
  }catch(e){
    console.log('运行出错')
  }
}
run()