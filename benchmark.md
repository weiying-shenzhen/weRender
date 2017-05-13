有无同等屏幕大小的离屏 canvas 性能测试
----------

对例子 (`circle-zoom`) 使用 `timeit` 打点记时工具，记录了 `WeStage` 有无 `_offscreenCanvas`（离屏缓冲）情况的重绘时间

### 数据

- **`Android`**

  - 无： `key:withoutOffscreen:times.length:1630:average:4.108588957055215`
  - 有:  `key:offscreen:times.length:1227:average:12.859005704971475`

- **`IOS`**

  - 无:  `key:withoutOffscreen:times.length:1215:average:5.57283950617284`
  - 有:  `key:offscreen:times.length:1385:average:5.624548736462094`

- **`Chrome`**

  - 无:  `key:withoutOffscreen:times.length:1024:average:0.8701171875`
  - 有:  `key:offscreen:times.length:1020:average:1.607843137254902`

### 统计
| 类别 |有 | 无 |
| --- | --- | --- |
| `Android` | 平均：`12.86ms`| 平均：`4.1ms` |
| `IOS` | 平均：`5.62ms` | 平均：`5.57ms` |
| `Chrome` | 平均：`1.61ms` | 平均：`0.87ms`|

### 结论

对于 `Android`而言，没有离屏 Canvas 性能提升明显；对`IOS`而言，两者基本没有差别；对`Chrome`而言，差距不大。总体而言，同等大小的离屏 Canvas 缓冲没必要存在。