## 第二步： 一个白点

WebGL编程除了需要使用Javascript语言来进行函数调用外，还需要使用OpenGL Shading Language. 我们需要编写对应的顶点着色器和片段着色器，前者负责形状及绘制坐标，后者用来计算最终渲染的颜色和其他属性。



~~~~
// 这行代码告诉编译器我们希望使用OpenGL ES 3.0
#version 300 es
// 设置GPU在计算数据时应该使用的精度， highp表示高精度，lowp表示低精度， mediump在两者之间。
precision mediump float;
in vec3 aVertexPosition;
void main(void) {
    gl_Position = vec4(aVertexPosition, 1.0);
    gl_PointSize = 10.0;
}
~~~~

