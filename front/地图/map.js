 //加载地图资源
 function loadMap(delay=1000,ak='d5d7def68a6b8bd20e5575ffa8570319'){
    return new Promise((resolve,reject)=>{
        window.init=function(){
            resolve(AMap)
        }
        let script=document.createElement("script");
        script.setAttribute('id','map');
        script.type="text/javascript";
        script.src="https://webapi.amap.com/maps?v=1.4.10&key="+ak+"&callback=init";
        document.head.appendChild(script);
    });
}
//加载地图插件
function loadMapPlugin(map,plugins){
    return new Promise((resolve,reject)=>{
        map.plugin(plugins,function(){
            window.AMap=map;
            resolve(map)
        });
    });   
}
// 地图初始化 
function mapInit(AMap,mapId,inputId){
    // 地图实例化
    var map = new AMap.Map(mapId, {resizeEnable: true});
    //数据加载完毕
    document.querySelector('.modal .modal-body').style.display="flex";
    document.querySelector('.modal .loading').style.display='none';


    map.setZoom(13); 
    var geocoder,marker,address,lnglat,autoInput,placeSearch;
    //自动定位
    var geolocation = new AMap.Geolocation({
        enableHighAccuracy: false,
        timeout: 10000,         
        buttonPosition:'RB',    
        buttonOffset: new AMap.Pixel(10, 20),
        zoomToAccuracy: true, 
    });
    // 添加自动定位控件
    map.addControl(geolocation);
    map.addControl(new AMap.Scale());
    map.addControl(new AMap.ToolBar());
    geolocation.getCurrentPosition(function(status,result){
        if(status=='complete'){
            console.log('定位成功');
        }else{
            console.log('定位失败'); 
        }
    }); 
    //点击地图选址
    map.on('click',function(e){regeoCode(e.lnglat)});
    autoInput = new AMap.Autocomplete({input:inputId});
    placeSearch = new AMap.PlaceSearch({map: map});
    AMap.event.addListener(autoInput, "select", function(e){
       placeSearch.setCity(e.poi.adcode);
       placeSearch.search(e.poi.name); 
    });
    AMap.event.addListener(placeSearch, "markerClick", function(e){
        regeoCode(e.data.location)
        console.log(e.data.location) 
    })
    // 根据纬度在地图上标注位置和返回地理编码地址
    function regeoCode(lnglat) {
        return new Promise((resolve,reject)=>{
            if(!geocoder){
                geocoder = new AMap.Geocoder({
                    city: "010", 
                    radius: 1000 
                });
            }
            if(!marker){
                marker = new AMap.Marker();
                map.add(marker);
            }
            marker.setPosition(lnglat);
            geocoder.getAddress(lnglat, function(status, result) {
                if (status === 'complete'&&result.regeocode) {
                    var address=result.regeocode.addressComponent;
                    var province=address.province;
                    var city=address.city;
                    var district=address.district;
                    var street=address.township+address.street+address.streetNumber;
                    var input=document.querySelector('#autoInput');
                    input.value=result.regeocode.formattedAddress;
                    input.value=province+city+district+street
                    resolve(result)
                }else{alert(JSON.stringify(result))}
            });
        })
       
    } 
}  

