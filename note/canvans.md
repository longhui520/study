# canvans

## 1.绘制步骤

1. 创建canvas 标签
2. 获取canvas标签
3. ctx=convas.getContext('2d')获取绘图上下文环境

## 2. 绘制命令

- moveTo(x,y)移动画笔坐标
- lineTo(x,y)当前坐标到想(x,y)坐标的轨迹
- stroke()已有轨迹的描边，默认宽度为2px 和灰色（线条中心与刻度中心对齐导致显示不饱和必须占用2个px的位置。颜色不能解析变成灰色）
- beginPath 开启新路径
- closePath 关闭路径或自动闭合路径(自己手动闭合有缺角)
- strokeStyle 描边颜色
- lineWidth 线条宽度
- fill填充闭合路径
- fillStyle 填充颜色
- lineCap 线两端的样式
  - butt(默认) round square
- lineJoin 相交的拐点样式
  - miter(默认) round  bevel
- setLineDash([])设置虚线
- getLineDash()获取虚线样式
- lineDashOffset 虚线偏移，正值往后偏移，负值往前偏移
- canvas 画布
  - width 画布的宽
  - height 画布的高
- rect 绘制矩形路径
- strokeRect 绘制描边矩形
- fillRect 绘制填充矩形
- clearRect擦除矩形
- createLinearGradient(x,y,x1,y1)创建渐变
- addColorStop(number,color)设置颜色
- arc(x,y,r,start,end,direction) 绘制圆

## 3.填充规则

- 非零填充