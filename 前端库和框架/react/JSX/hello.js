function Hello(props){
    return <h1>111</h1>
}
class World extends  React.Component{
    render(){
        return <h1>22222</h1>
    }
}
const HelloC=<Hello />
const WorldC=<World />
ReactDOM.render(
    WorldC,
    document.getElementById('ex')
);
  