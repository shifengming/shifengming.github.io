(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{214:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"常用指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[t._v("#")]),t._v(" 常用指令")]),t._v(" "),e("h2",{attrs:{id:"v-html"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-html"}},[t._v("#")]),t._v(" v-html")]),t._v(" "),e("p",[e("code",[t._v("v-html")]),t._v("指令：用于输出html代码")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<template>\n    <div id="app">\n         <div v-html="message"></div>\n    </div>\n</template>\n<script>\n    export default{\n        data(){\n            return{\n                message: \'<h1>vue的初次学习</h1>\'\n            }   \n        }\n    }\n<\/script>\n<style>\n\n</style>\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("vue的初次学习\n")])])]),e("h2",{attrs:{id:"v-text"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-text"}},[t._v("#")]),t._v(" v-text")]),t._v(" "),e("p",[e("code",[t._v("v-text")]),t._v("指令：是用于输出文本")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<template>\n    <div id="app">\n         <div v-text="message"></div>\n    </div>\n</template>\n<script>\n    export default{\n        data(){\n            return{\n                message: \'<h1>vue的初次学习</h1>\'\n            }   \n        }\n    }\n<\/script>\n<style>\n\n</style>\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<h1>vue的初次学习</h1>\n")])])]),e("h2",{attrs:{id:"v-if"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-if"}},[t._v("#")]),t._v(" v-if")]),t._v(" "),e("p",[e("code",[t._v("v-if")]),t._v("条件判断指令")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<template>\n    <div id="app">\n        <p v-if="seen">今天是星期五</p>\n        <template v-if="ok">\n            <h1>星期一</h1>\n            <p>每天都要认真学习</p>\n            <p>天天心情都要好</p>\n        </template>\n    </div>\n</template>\n<script>\n    export default{\n        data(){\n            return{\n                    seen: false,\n                    ok: true\n            }   \n        }\n    }\n<\/script>\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("星期一\n每天都要认真学习\n\n天天心情都要好\n")])])]),e("h2",{attrs:{id:"v-for"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-for"}},[t._v("#")]),t._v(" v-for")]),t._v(" "),e("p",[t._v("实现迭代数组")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<template>\n    <div id=\"app\">\n        <ol>\n            <li v-for=\"site in sites\" :key=\"site.id\">\n                {{site.name}}\n            </li>\n        </ol>\n    </div>\n</template>\n<script>\n    export default{\n        data(){\n            return{\n                   sites:[\n                       {name: 'Runoob'},\n                       {name: 'Google'},\n                       {name: 'Taobao'}\n                   ]\n            }   \n        }\n    }\n<\/script>\n")])])]),e("h2",{attrs:{id:"v-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-model"}},[t._v("#")]),t._v(" v-model")]),t._v(" "),e("p",[e("code",[t._v("v-bind")]),t._v("只能实现数据的单向绑定，从M自动绑定到V，无法实现数据的双向绑定")]),t._v(" "),e("p",[e("code",[t._v("v-model")]),t._v("指令则可以实现表单元素和M中数据的双向绑定")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<template>\n    <div id="app">\n        <h4>{{msg}}</h4>\n        <input type="text" style="width: 100%;" v-model="msg">\n    </div>\n</template>\n<script>\n    export default{\n        data(){\n            return{\n                msg: \'星期一\'\n            }   \n        },\n    }\n<\/script>\n')])])]),e("p",[e("img",{attrs:{src:"http://r.photo.store.qq.com/psc?/V121VjTP2yfy1N/uMeul31pGB4ZvQm8Ou4xcbgrKExhfcDZ7wXDvYfdZfU8uBU8gjO40xOsOFVViMMirFYGfQG0IxdQ2KE.mp8x0WfL5Z2sNWGjZHWJwtrsxRY!/r",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"v-on"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-on"}},[t._v("#")]),t._v(" v-on")]),t._v(" "),e("p",[t._v("事件监听可以使用"),e("code",[t._v("v-on")]),t._v("指令")]),t._v(" "),e("p",[t._v("给标签绑定函数，可缩写为@")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<template>\n    <div id="app">\n         <button @click="greet">Greet</button>\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                name: \'Vue.js\'\n            }   \n        },\n        methods: {\n            greet() {\n                // `this` 在方法里指当前 Vue 实例\n                alert(`My age is  ${this.name}  and I love  ${this.name}  !`)\n            }\n        }\n    }\n<\/script>\n')])])]),e("p",[e("img",{attrs:{src:"http://r.photo.store.qq.com/psc?/V121VjTP2yfy1N/uMeul31pGB4ZvQm8Ou4xccLQAOuqhwjN1TSHrKrRIS38j4rZvJEFA*SVugNw6mxvISsJEQpH*oOUTu4vE4OSM5mPbzRDK36CgG.S4BynVgs!/r",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"v-once"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-once"}},[t._v("#")]),t._v(" v-once")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<template>\n    <div id="app">\n         <input type="text" v-model="content">\n         <p v-once>输入内容:{{content}}</p>\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                content: "早上好啊"\n            }   \n        }\n    }\n<\/script>\n')])])]),e("p",[t._v("只渲染一次，后面元素中的数据再更新变化，都不会重新渲染，例如下面：给")]),e("p",[t._v("标签添加了v-once指令，并且content赋了初始值，第一次渲染的时候input控件和p标签都有了初始值，后面我们再更新content值的时候，p标签的内容不会发生变化")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://r.photo.store.qq.com/psc?/V121VjTP2yfy1N/uMeul31pGB4ZvQm8Ou4xcUGjin8F2c.a.B5hIaM1y0L90ull466wZJWJL2MJi80l2iYrol8qA4fJGV6g1X1ougmMEUzZRjRpxV9JK4hMfEE!/r",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"http://r.photo.store.qq.com/psc?/V121VjTP2yfy1N/uMeul31pGB4ZvQm8Ou4xcfMjHj8QgpLCYGGMjomEClXu7y5dYZ7sQG7AJl*FzOHPp11iclAtXy4cvkaQi4OY1Ao817yDiBJoVGKyVV7kdTw!/r",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"v-else"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-else"}},[t._v("#")]),t._v(" v-else")]),t._v(" "),e("p",[t._v("和v-if指令搭配使用，没有对应的值，当v-if的值false，v-else才会被渲染出来")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<template>\n    <div id="app">\n        <p v-if="show1">show</p>\n        <p v-else>v-else</p>\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                show1: false,\n            }   \n        }\n    }\n<\/script>\n')])])]),e("p",[e("img",{attrs:{src:"http://r.photo.store.qq.com/psc?/V121VjTP2yfy1N/uMeul31pGB4ZvQm8Ou4xcQp5YHdiygK.hZ8K4qHt3InXeMRa3nfSMdCwUpF1*0bxjosHtQPK1*5WbG4w*Whoo9rJPthe1wGUtLrPBLz0eQ4!/r",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"v-show"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-show"}},[t._v("#")]),t._v(" v-show")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<template>\n    <div id="app">\n        <h1 v-show="ok">Hello</h1>\n        <h1 v-show="error">Haode</h1>\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                ok: true,\n                error: false\n            }   \n        }\n    }\n<\/script>\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Hello\n")])])]),e("h2",{attrs:{id:"v-bind"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-bind"}},[t._v("#")]),t._v(" v-bind")]),t._v(" "),e("h3",{attrs:{id:"对象类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象类"}},[t._v("#")]),t._v(" 对象类")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<template>\n    <div id="app">\n        <ul class="box" v-bind:class="{\'textColor\':isColor, \'textSize\':isSize}">\n        <li>学习Vue</li>\n        <li>学习Node</li>\n        <li>学习React</li>\n        </ul>\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                isColor:true,\n                isSize:false\n            }   \n        }\n    }\n<\/script>\n<style>\n.box{\n    border:1px dashed #f0f;\n}\n.textColor{\n    color:#f00;\n    background-color:#eef;\n}\n.textSize{\n    font-size:30px;\n    font-weight:bold;\n}\n</style>\n')])])]),e("p",[e("img",{attrs:{src:"http://r.photo.store.qq.com/psc?/V121VjTP2yfy1N/uMeul31pGB4ZvQm8Ou4xcal0t2bG*JT0KqbvP2qdfSmgOIFFTcyj.ldKLwyNDSWFDbKyDVZ9EADpYqFzUqMm*8n5OokIekAjQCHmNn6T3B4!/r",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"三目运算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三目运算"}},[t._v("#")]),t._v(" 三目运算")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<template>\n    <div id=\"app\">\n        <ul class=\"box\" :class=\"[isA?classA:'', classB]\">\n        <li>学习Vue</li>\n        <li>学习Node</li>\n        <li>学习React</li>\n        </ul>\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                classA:'textColor',\n                classB:'textSize',\n                isA:false \n            }   \n        }\n    }\n<\/script>\n<style>\n</style>\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("学习Vue\n学习Node\n学习React\n")])])]),e("h3",{attrs:{id:"数组型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组型"}},[t._v("#")]),t._v(" 数组型")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<template>\n    <div id="app">\n        <ul class="box" :class="[classA, classB]">\n            <li>学习Vue</li>\n            <li>学习Node</li>\n            <li>学习React</li>\n        </ul>\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                classA:\'textColor\',\n                classB:\'textSize\'\n            }   \n        }\n    }\n<\/script>\n<style>\n</style>\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("学习Vue\n学习Node\n学习React\n")])])]),e("h2",{attrs:{id:"v-else-if"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-else-if"}},[t._v("#")]),t._v(" v-else-if")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<template>\n    <div id="app"><div v-if="show < 60">不及格</div><div v-else-if="show > 90">优秀</div><div v-else>及格</div></div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                show: 99\n            }   \n        }\n    }\n<\/script>\n<style>\n</style>\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("优秀\n")])])]),e("h3",{attrs:{id:"利用三元运算符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#利用三元运算符"}},[t._v("#")]),t._v(" 利用三元运算符")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<template>\n    <div id=\"app\">\n        <div v-text=\"show >= 90 ? '优秀' : show >= 60 ? '及格' : '不及格' \"></div>\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                show: 99\n            }   \n        }\n    }\n<\/script>\n<style>\n</style>\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("优秀\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<template>\n    <div id=\"app\">\n        <div v-html=\"show >= 90 ? '优秀' : show >= 60 ? '及格' : '不及格' \"></div>\n      \n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                show: 99\n            }   \n        }\n    }\n<\/script>\n<style>\n</style>\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("优秀\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<template>\n    <div id=\"app\">\n      <div>\n          {{show >= 90 ? '优秀' : show >= 60 ? '及格' : '不及格'}}\n      </div>\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                show: 99\n            }   \n        }\n    }\n<\/script>\n<style>\n</style>\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("优秀\n")])])]),e("h2",{attrs:{id:"v-cloak"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-cloak"}},[t._v("#")]),t._v(" v-cloak")]),t._v(" "),e("p",[t._v("这个一般是用在获取后台数据后渲染到页面上。有可能由于网络慢的原因数据还没获取完就加载了页面导致页面上的值为undefined")]),t._v(" "),e("p",[e("code",[t._v("v-cloak")]),t._v("指令是解决屏幕闪动的好方法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<template>\n    <div id=\"app\" v-cloak>\n          {{context}}\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                 context:'互联网头部玩家钟爱的健身项目'\n            }   \n        }\n    }\n<\/script>\n<style>\n[v-cloak]{\n    display: none;\n}\n</style>\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("互联网头部玩家钟爱的健身项目\n")])])]),e("h2",{attrs:{id:"v-pre"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-pre"}},[t._v("#")]),t._v(" v-pre")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<template>\n    <span v-pre>{{context}}</span>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                 context:'互联网头部玩家钟爱的健身项目'\n            }   \n        }\n    }\n<\/script>\n<style>\n</style>\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("{{context}}\n")])])]),e("h2",{attrs:{id:"v-hide"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v-hide"}},[t._v("#")]),t._v(" v-hide")]),t._v(" "),e("p",[t._v("和v-show相反")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<template>\n    <div id="app">\n        <h1 v-hide="ok">Hello</h1>\n        <h1 v-hide="error">Haode</h1>\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                ok: false,\n                error: true\n            }   \n        }\n    }\n<\/script>\n')])])])])}),[],!1,null,null,null);a.default=n.exports}}]);