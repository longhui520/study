<?php
/**
 * Created by PhpStorm.
 * User: 龙辉
 * Date: 2019/2/21
 * Time: 10:27
 */
// app 表单组件属性配置
return Array(
    //输入组件
    "text"=>array(
        "base"=>array(
            "label"=>"输入框",
            "fieldName"=>"shuruzujian",
            "showFlag" =>true,
            "readonlyFlag"=>false,
            "disabledFlag"=>false,
            "requiredFlag"=>false,
            "clearableFlag"=>true
        ),
        "unit"=>"",
        "outerVal"=>array(
            "code"=>"",
            "text"=>""
        ),
        "transform"=>"",
        "placeholder"=>"请输入",
        "type"=>"text",
        "minLen"=>0,
        "maxLen"=>0,
        "regexRule"=>"",
        "regexMsg"=>"",
        "validatorFlag"=>false,
        "compType"=>"compInput"
    ),
    //复选框组件
    "checkbox"=>array(
        "base"=>array(
            "label"=>"复选框",
            "fieldName"=>"fuxuankuang",
            "showFlag" =>true,
            "readonlyFlag"=>false,
            "disabledFlag"=>false,
            "requiredFlag"=>false
        ),
        "outerVal"=>array(),
        "placeholder"=>"请选择",
        "maxNum"=>1,
        "minNum"=>0,
        "dataUrl"=>"",
        "options"=>array(),
        "validatorFlag"=>false,
        "compType"=>"compInput"
    ),
    //时间选择器组件
    "date"=>array(
        "base"=>array(
            "label"=>"时间",
            "fieldName"=>"shijian",
            "showFlag" =>true,
            "readonlyFlag"=>false,
            "disabledFlag"=>false,
            "requiredFlag"=>false,
            "clearableFlag"=>true,
            "dialogFlag"=>false
        ),
        "outerVal"=>array(
            "code"=>"",
            "text"=>""
        ),
        "placeholder"=>"请选择",
        "format"=>"yyyy-MM-dd",
        "type"=>"date",
        "minDate"=>"",
        "maxDate"=>"",
        "minHour"=>0,
        "maxHour"=>23,
        "minMinute"=>0,
        "maxMinute"=>59,
        "validatorFlag"=>false,
        "compType"=>"compInput"
    ),
    //图片上传组件
    "uploadpic"=>array(
        "base"=>array(
            "label"=>"图片上传",
            "fieldName"=>"tupianshangchuan",
            "showFlag" =>true,
            "readonlyFlag"=>false,
            "disabledFlag"=>false,
            "requiredFlag"=>false,
        ),
        "outerVal"=>array(),
        "fileType"=>"none",
        "fileSize"=>1048576,
        "url"=>"",
        "minWidth"=>0,
        "maxWidth"=>-1,
        "minHeight"=>0,
        "maxHeight"=>-1,
        "maximum"=>1,
        "validatorFlag"=>false,
        "compType"=>"compInput",
    ),
    //查找带回组件
    "lookup"=>array(
        "base"=>array(
            "label"=>"查找带回",
            "fieldName"=>"chazaodaihui",
            "showFlag" =>true,
            "readonlyFlag"=>false,
            "disabledFlag"=>false,
            "requiredFlag"=>false,
            "clearableFlag"=>true
        ),
        "outerVal"=>array(
            "code"=>"",
            "text"=>""
        ),
        "placeholder"=>"请选择",
        "dataUrl"=>"",
        "relation"=>array(),
        "validatorFlag"=>false,
        "compType"=>"compLookup"
    ),
    //地址组件
    "areainfomap"=>array(
        "base"=>array(
            "label"=>"地图选址",
            "fieldName"=>"dituxuanzhi",
            "showFlag" =>true,
            "readonlyFlag"=>false,
            "disabledFlag"=>false,
            "requiredFlag"=>false,
            "clearableFlag"=>true
        ),
        "outerVal"=>array(
            "latitude"=>"",
            "longitude"=>"",
            "formattedAddress"=>"",
            "province"=>"",
            "city"=>"",
            "area"=>"",
            "town"=>"",
            "street"=>"",
            "fieldName"=>"",
            "detail"=>""
        ),
        "dataUrl"=>"",
        "validatorFlag"=>false,
        "compType"=>"compMap"
    ),
    //单选框组件
    "radio"=>array(
        "base"=>array(
            "label"=>"单选",
            "fieldName"=>"danxuan",
            "showFlag" =>true,
            "readonlyFlag"=>false,
            "disabledFlag"=>false,
            "requiredFlag"=>false,
        ),
        "outerVal"=>array(
            "code"=>"",
            "text"=>""
        ),
        "placeholder"=>"请选择",
        "dataUrl"=>"",
        "options"=>array(),
        "validatorFlag"=>false,
        "compType"=>"compRadio"
    ),
    //下拉框组件
    "select"=>array(
        "base"=>array(
            "label"=>"下拉框",
            "fieldName"=>"xialakuang",
            "showFlag" =>true,
            "readonlyFlag"=>false,
            "disabledFlag"=>false,
            "requiredFlag"=>false,
            "clearableFlag"=>true,
            "dialogFlag"=>false
        ),
        "outerVal"=>array(
            "code"=>"",
            "text"=>""
        ),
        "placeholder"=>"请选择",
        "dataUrl"=>"",
        "options"=>array(),
        "validatorFlag"=>false,
        "compType"=>"compSelect"
    ),
    //内嵌表组件
    "datatable"=>array(
        "base"=>array(
            "label"=>"内嵌表格",
            "fieldName"=>"neiqianbiaoge",
            "showFlag" =>true,
            "readonlyFlag"=>false,
            "disabledFlag"=>false,
            "requiredFlag"=>false,
            "clearableFlag"=>true,
        ),
        "outerVal"=>array(
            "code"=>"",
            "text"=>""
        ),
         "listUrl"=>"",
        "dataUrl"=>"",
        "validatorFlag"=>false,
        "compType"=>"compSelect"
    )
);