## 第一步： 一块红布

#### 什么是WebGL?
作为一个3D图形库，WebGL让浏览器可以更加有效地进行图形渲染。

为了使用WebGL来绘制图形， 我们首先需要获得一个WebGLRenderingContext. 这个WebGLRenderingContext提供了所有进行图形绘制需要的函数。目前在最新的主流浏览器里：chrome 和 firefox中， 除了常规的WebGLRenderingContext, 还有更新版本和功能更全面的WebGL2RenderingContext. 我们这里主要使用的是WebGL2的版本。它可以通过canvas.getContext("webgl2")函数来获得。

在获取了WebGL2RenderingContext后我们可以调用gl.clearColor(color)函数来定义我们想要使用的颜色。然后通过使用gl.clear(gl.COLOR_BUFFER_BIT)来将设置好的颜色写入颜色缓存，用来绘制。gl.COLOR_BUFFER_BIT是一个用来指定颜色缓存的常数。在后面的例子里我们还会用到深度缓存gl.DEPTH_BUFFER_BIT。


