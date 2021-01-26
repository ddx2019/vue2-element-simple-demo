// 分组柱状图
export const DATASET_SIMPLE = {
  legend: {},
  tooltip: {},
  color: ['#4a90e2', '#f5a623', '#ff5858'],
  dataset: {
    dimensions: ['product', '2019', '2020', '2021'],
    source: [
      { product: 'Matcha Latte', '2019': 43.3, '2020': 85.8, '2021': 93.7 },
      { product: 'Milk Tea', '2019': 83.1, '2020': 73.4, '2021': 55.1 },
      { product: 'Cheese Cocoa', '2019': 86.4, '2020': 65.2, '2021': 82.5 }
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},

  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
};

// 环形图
export const PIE_DOUGHNUT = {
  // 图形中间文字
  // graphic: {
  //   type: 'text',
  //   left: 'center',
  //   top: 'center',
  //   style: {
  //     //数据总量
  //     text: '',
  //     textAlign: 'center',
  //     fill: 'black',
  //     fontSize: 25
  //   }
  // },
  color: ['#71de2d', '#f1d604', '#f56c6c'],
  title: {
    text: '产品趋势图',
    left: 'center'
  },
  legend: {
    orient: 'vertical',
    left: 0,
    data: ['直接访问', '邮件营销', '联盟广告']
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  series: [
    {
      name: '产品趋势图',
      type: 'pie',
      // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
      radius: ['50%', '70%'],
      // 关闭防止标签重叠策略
      avoidLabelOverlap: false,
      // 开启指示线
      labelLine: {
        show: true
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '18',
          fontWeight: 'bold'
        }
      },
      label: {
        normal: {
          formatter: '{b}: {c} ({d}%)',
          position: 'outer'
        }
      },
      data: [
        // 拿到新值，只改变value值,value值为0，labelLine和label会显示，为 "" 的时候，不会显示
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' }
      ]
    }
  ]
};
