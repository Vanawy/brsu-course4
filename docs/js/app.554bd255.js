(function(t){function e(e){for(var i,n,c=e[0],s=e[1],l=e[2],v=0,u=[];v<c.length;v++)n=c[v],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);d&&d(e);while(u.length)u.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],i=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(i=!1)}i&&(a.splice(e--,1),t=n(n.s=r[0]))}return t}var i={},o={app:0},a=[];function n(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=i,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=s;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-content",[r("Main")],1)],1)},a=[],n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{app:"",temporary:"",width:"max"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[r("v-list-item",{attrs:{link:""},on:{click:function(e){t.drawer=!1}}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-close")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Закрыть меню")])],1)],1),r("v-divider"),r("v-list-item",{attrs:{link:""},on:{click:function(e){return t.showFavorites()}}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-star-outline")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Избранные задачи")])],1)],1),r("v-divider"),t._l(t.categories,(function(e,i){return r("v-list-item",{key:i,attrs:{link:""},on:{click:function(r){return t.selectCategory(e.id)}}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-"+t._s(e.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}))],2)],1),r("v-app-bar",{attrs:{app:"",dark:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),r("v-toolbar-title",[t._v("Задачи по информатике | "+t._s(t.titles[t.selected_category]))]),r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:t.showFavorites}},["favs"==this.selected_category?r("v-icon",[t._v("mdi-star")]):r("v-icon",[t._v("mdi-star-outline")])],1)],1),r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("div",[r("v-col",{staticClass:"text-center"},[t._v(" Показано "+t._s(t.selected_problems.length)+" из "+t._s(t.problems.length)+" задач ")])],1)]),r("v-row",{attrs:{align:"center",justify:"center"}},[t._l(t.selected_problems,(function(e){return r("div",{key:e.id},[r("v-col",{staticClass:"text-center"},[r("Problem",{attrs:{problem:e,isFavorite:e.isFavorite},on:{fav:t.toggleFav}})],1)],1)})),0==t.selected_problems.length?r("p",[t._v("В выбранном разделе нет задач")]):t._e()],2)],1)],1),r("v-footer",{attrs:{app:""}},[r("span",[t._v("БрГУ им. А.С. Пушкиина | Сахарчук Илья, Козак Диана © 2019")])])],1)},c=[],s=(r("a4d3"),r("e01a"),r("d28b"),r("4de4"),r("7db0"),r("c975"),r("d3b7"),r("3ca3"),r("ddb0"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{fluid:""}},[r("v-card-title",[t._v("#"+t._s(t.problem.id)+' Задача на тему "'+t._s(t.problem.category_title)+'"')]),r("v-card-text",[t._v(t._s(t.preview))]),r("v-card-actions",[r("TaskModal",{attrs:{problem:t.problem}}),r("v-btn",{on:{click:t.toggleFavorites}},[t.problem.isFavorite?r("v-icon",[t._v("mdi-star")]):r("v-icon",[t._v("mdi-star-outline")])],1)],1)],1)}),l=[],d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[r("v-btn",t._g({},i),[t._v("Условие")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-toolbar",{attrs:{dark:""}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[r("v-icon",[t._v("mdi-close")])],1),r("v-toolbar-title",[t._v("#"+t._s(t.problem.id)+" | "+t._s(t.problem.category_title))])],1),r("v-card",[r("v-container",[r("p",[t._v(t._s(t.problem.text))])])],1)],1)],1)},v=[],u={props:{problem:Object},data:function(){return{dialog:!1}}},g=u,y=r("2877"),p=r("6544"),f=r.n(p),x=r("8336"),m=r("b0af"),b=r("a523"),h=r("169a"),_=r("132d"),w=r("0fd9"),V=r("71d9"),k=r("2a7f"),F=Object(y["a"])(g,d,v,!1,null,null,null),O=F.exports;f()(F,{VBtn:x["a"],VCard:m["a"],VContainer:b["a"],VDialog:h["a"],VIcon:_["a"],VRow:w["a"],VToolbar:V["a"],VToolbarTitle:k["a"]});var j=128,C={name:"Problem",components:{TaskModal:O},props:{problem:Object},computed:{preview:function(){return this.problem.text.length>j?this.problem.text.substring(0,j-3)+"...":this.problem.text}},methods:{toggleFavorites:function(){this.$emit("fav",this.problem.id)}}},P=C,T=r("99d9"),S=Object(y["a"])(P,s,l,!1,null,null,null),$=S.exports;f()(S,{VBtn:x["a"],VCard:m["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VIcon:_["a"]});var A=r("f6f1"),I={components:{Problem:$},props:{source:String},data:function(){return{drawer:null,problems:[],categories:[],prev_category:"favs",selected_category:1,titles:[]}},methods:{showFavorites:function(){this.isFavorites?this.selectCategory(this.prev_category):this.selectCategory("favs")},selectCategory:function(t){this.prev_category=this.selected_category,this.selected_category=t,this.drawer=!1,this.$cookie.set("currnet-category",t)},addProblemToFavorites:function(t){this.problems.find((function(e){return e.id==t})).isFavorite=!0;var e=this.getFavorites();-1==e.indexOf(t)&&e.push(t),this.setFavorites(e)},deleteProblemFromFavorites:function(t){this.problems.find((function(e){return e.id==t})).isFavorite=!1;var e=this.getFavorites();e=e.filter((function(e){return e!=t})),this.setFavorites(e)},toggleFav:function(t){this.isInFavorites(t)?this.deleteProblemFromFavorites(t):this.addProblemToFavorites(t)},setFavorites:function(t){this.$cookie.set("fav-problems",JSON.stringify(t))},getFavorites:function(){var t=JSON.parse(this.$cookie.get("fav-problems"));return null!==t?t:[]},favorites:function(){var t=this,e=[],r=this.getFavorites(),i=!0,o=!1,a=void 0;try{for(var n,c=function(){var r=n.value;e.push(t.problems.find((function(t){return t.id==r})))},s=r[Symbol.iterator]();!(i=(n=s.next()).done);i=!0)c()}catch(l){o=!0,a=l}finally{try{i||null==s.return||s.return()}finally{if(o)throw a}}return e},isInFavorites:function(t){return-1!==this.getFavorites().indexOf(t)}},created:function(){this.categories=A.categories;var t=!0,e=!1,r=void 0;try{for(var i,o=this.categories[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value;this.titles[a.id]=a.title}}catch(g){e=!0,r=g}finally{try{t||null==o.return||o.return()}finally{if(e)throw r}}var n=this.getFavorites();this.titles["favs"]="Избранные",this.problems=[];var c=!0,s=!1,l=void 0;try{for(var d,v=A.data[Symbol.iterator]();!(c=(d=v.next()).done);c=!0){var u=d.value;u.category_title=this.titles[u.category],u.isFavorite=-1!==n.indexOf(u.id),this.problems.push(u)}}catch(g){s=!0,l=g}finally{try{c||null==v.return||v.return()}finally{if(s)throw l}}this.selected_category=this.$cookie.get("currnet-category")?this.$cookie.get("currnet-category"):1},computed:{selected_problems:function(){var t=this;return this.isFavorites?this.favorites():this.problems.filter((function(e){return e.category==t.selected_category}))},isFavorites:function(){return"favs"==this.selected_category}}},B=I,M=r("7496"),N=r("40dc"),J=r("5bc1"),L=r("62ad"),E=r("a75b"),D=r("ce7e"),R=r("553a"),q=r("8860"),K=r("da13"),z=r("1800"),G=r("5d23"),H=r("f774"),Q=r("2fa4"),U=Object(y["a"])(B,n,c,!1,null,null,null),W=U.exports;f()(U,{VApp:M["a"],VAppBar:N["a"],VAppBarNavIcon:J["a"],VBtn:x["a"],VCol:L["a"],VContainer:b["a"],VContent:E["a"],VDivider:D["a"],VFooter:R["a"],VIcon:_["a"],VList:q["a"],VListItem:K["a"],VListItemAction:z["a"],VListItemContent:G["a"],VListItemTitle:G["b"],VNavigationDrawer:H["a"],VRow:w["a"],VSpacer:Q["a"],VToolbarTitle:k["a"]});var X={name:"App",components:{Main:W},data:function(){return{}}},Y=X,Z=Object(y["a"])(Y,o,a,!1,null,null,null),tt=Z.exports;f()(Z,{VApp:M["a"],VContent:E["a"]});var et=r("f309");i["a"].use(et["a"]);var rt=new et["a"]({}),it=r("00e7"),ot=r.n(it);i["a"].config.productionTip=!1,i["a"].use(ot.a),new i["a"]({vuetify:rt,render:function(t){return t(tt)}}).$mount("#app")},f6f1:function(t){t.exports=JSON.parse('{"data":[{"id":"1-1","category":1,"text":"Написать программу нахождения большего из двух чисел. "},{"id":"1-2","category":1,"text":"Написать программу нахождения большего из 3 чисел. "},{"id":"1-3","category":1,"text":"Написать программу определяющую четность(нечетность) числа и выводящую результат на экран. "},{"id":"1-4","category":1,"text":"Из двух чисел с разной четностью вывести на экран нечетное число. "},{"id":"1-5","category":1,"text":"Среди трех чисел найти среднее. Если среди чисел есть равные, вывести сообщение \\"Ошибка\\"."},{"id":"1-6","category":1,"text":"Написать программу, которая вычисляет количество цифр в числе (не более 3). "},{"id":"1-7","category":1,"text":"Написать программу нахождения дискриминанта. "},{"id":"1-8","category":1,"text":"Вывести название дня недели по его номеру. "},{"id":"1-9","category":1,"text":"Даны два числа. Вывести вначале большее, а затем меньшее из них"},{"id":"1-10","category":1,"text":"Даны три целых числа. Найти количество положительных чисел в исходном наборе"},{"id":"2-1","category":2,"text":"Написать программу, которая выводит на экран все натуральные числа от 1 до 10"},{"id":"2-2","category":2,"text":"Написать программу, которая подсчитывает сумму натуральных чисел от 1 до n10"},{"id":"2-3","category":2,"text":"Написать программу, которая выводит на экран: 20 40 80 160 320"},{"id":"2-4","category":2,"text":"Написать программу, которая подсчитывает произведение натуральных чисел от 1 до 10 "},{"id":"2-5","category":2,"text":"Написать программу, выводящую на экран квадраты чисел от 1 до 10. "},{"id":"2-6","category":2,"text":"Написать программу, выводящую на экран таблицу Пифагора. "},{"id":"2-7","category":2,"text":"Написать программу находящую сумму цифр введенного числа. "},{"id":"2-8","category":2,"text":"Даны два целых числа A и B(A<B). С помощью цикла с параметром найти сумму все чисел от A до B. "},{"id":"3-1","category":3,"text":"Вычислить сумму элементов двух массивов с одинаковыми порядковыми номерами. "},{"id":"3-2","category":3,"text":"Отсортировать одномерный массив по возрастанию. "},{"id":"3-3","category":3,"text":"Дан массив А. Необходимо переписать в массив В все числа массива А кратные 3, а также вывести на экран эти элементы и их количество. "},{"id":"4-1","category":4,"text":"Создать массив с помощью ввода элементов массива с клавиатуры и посчитать сумму всех элементов массива. "},{"id":"4-2","category":4,"text":"Создать массив с помощью генератора случайных чисел и посчитать сумму всех чётных чисел. "},{"id":"4-3","category":4,"text":"Создать массив с помощью генератора случайных чисел и посчитать сумму всех нечетных элементов массива. "},{"id":"4-4","category":4,"text":"Создайте массив чисел. Найдите, сколько в нем пар одинаковых соседних элементов. "},{"id":"4-5","category":4,"text":"Дано 100 целых чисел. Распечатать их в обратном порядке по 6 чисел в строке. "},{"id":"4-6","category":4,"text":"Создать массив с помощью ГСЧ и найти максимальный элемент массив. "},{"id":"5-1","category":5,"text":"Создать двумерный массив размерностью 5х5, описать в разделе описания переменных, заполнить его числами с клавиатуры. "},{"id":"5-2","category":5,"text":"Создать двумерный массив размерностью 10х7, описать в разделе описания типов, заполнить его числами с помощью ГСЧ"},{"id":"5-3","category":5,"text":"Создать двумерный массив размерностью 10х7, описать как одномерный, элементами которого являются одномерные, заполнить его числами с помощью ГСЧ"},{"id":"5-4","category":5,"text":"Дано 2 массива. Создать 3 массив, чтобы элементы 3 массива были суммой элементов 1 и 2 массивов. "},{"id":"5-5","category":5,"text":"Дано 2 массива. Создать 3 массив, чтобы элементы 3 массива были произведением элементов 1 и 2 массивов, если итоговое число кратно 3, то заменить его на 0. "},{"id":"6-1","category":6,"text":"Создать двумерный массив размерностью не меньше 10х10 и вывести его на экран. Найти и вывести на экран элемент массива путем ввода с клавиатуры его координат (номера строки и номера столбца). "},{"id":"6-2","category":6,"text":"Создать двумерный массив размерностью не меньше 10х10 и вывести его на экран. Найти количество элементов больших 5 в каждой строке и вывести в отдельный одномерный массив. "},{"id":"6-3","category":6,"text":"Создать квадратный двумерный массив размерностью не меньше 4х4 и вывести его на экран. Создать ещё один двумерный массив, который будет заполняться элементами первого массива стоящими правее середины массива. (соответственно для массива 4х4, это будет массив 4х2)"},{"id":"6-4","category":6,"text":"Составить программу, заменяющую значение любого элемента двухмерного массива на число а. "},{"id":"6-5","category":6,"text":"Дан двумерный массив размерностью 10х10. Определить:<ol><li>сумму элементов главной диагонали массива</li><li>среднее арифметическое элементов главной диагонали.</li><li>среднее арифметическое элементов побочной диагонали</li></ol>"},{"id":"6-6","category":6,"text":"Составить программу, которая проводит замену всех элементов некоторого столбца двухмерного массива на заданное число. "},{"id":"6-7","category":6,"text":"Найти наименьший элемент двумерного массива. Размер n*m. Элементы задаются на интервале [-30, 45]. "},{"id":"6-8","category":6,"text":"Найти номер столбца массива размером n*m, в котором находится наибольшее количество отрицательных элементов"},{"id":"7-1","category":7,"text":"Создать одномерный массив размерностью 10. Отсортировать элементы массива по возрастанию «Пузырьковым методом». "},{"id":"7-2","category":7,"text":"Создать одномерный массив размерностью 10. Отсортировать первые 5 элементов по возрастанию, а оставшиеся по убыванию. "},{"id":"7-3","category":7,"text":"Создать двумерный массив. Отсортировать каждую строку массива по возрастанию. "},{"id":"8-1","category":8,"text":"Дан целочисленный двумерный массив, размерности n х n. Сформировать новый массив, состоящий из противоположных соответствующих элементов (поменять знаки). "},{"id":"8-2","category":8,"text":"Дан целочисленный двумерный массив, размерности n х n. Выяснить, какое первое число встречается в каждой строке — положительное или отрицательное. И вывести + или -. (Значения можно как просто выводить, так и добавлять в массив типа char)"},{"id":"8-3","category":8,"text":"Дан целочисленный двумерный массив, размерности n х n. Выяснить, в какой строке последовательность является возрастающей или убывающей. "},{"id":"8-4","category":8,"text":"Дан целочисленный двумерный массив, размерности n х n. Вывести его элементы, индексы которых являются степенями двойки (1, 2, 4, 8, 16, . . .). "},{"id":"8-5","category":8,"text":"Дан целочисленный двумерный массив, размерности n х n. Вывести на экран элементы, которые являются квадратами какого-либо числа. "},{"id":"8-6","category":8,"text":"Дан целочисленный двумерный массив, размерности n х n. Поменять местами первый и последний элементы. "},{"id":"8-7","category":8,"text":"Дан целочисленный двумерный массив, размерности n х n. Заменить все элементы на их квадраты. "},{"id":"8-8","category":8,"text":"Дан целочисленный двумерный массив, размерности n х n. Найти максимум и минимум. Поменять их местами. "},{"id":"8-9","category":8,"text":"Дан целочисленный двумерный массив, размерности n х n. Вычислить сумму чисел, порядковые номера которых являются числами Фибоначчи. "},{"id":"9-1","category":9,"text":"Отсортировать столбец двумерного массива по возрастанию. Номер столбца вводится с клавиатуры. "},{"id":"9-2","category":9,"text":"Отсортировать строки массива по возрастанию и вывести на экран. Так же вывести минимальное число в каждой строке. Отсортировать столбцы исходного массива по убыванию и вывести максимальные элементы столбцов. "},{"id":"10-1","category":10,"text":"Дан двухмерный массив чисел. Вычислить сумму элементов матрицы, индексы которых составляют в сумме заданное число K (это число вводится пользователем). Вывести результат. "},{"id":"10-2","category":10,"text":"Создать массив 6*6. Отсортировать числа побочной диагонали по возрастанию с 1 столбца до 3 и по убыванию с 4 столбца до 6. "},{"id":"10-3","category":10,"text":"Дан двумерный массив поменять местами числа главной и побочной диагоналей в строке. Вывести на экран измененный массив. Поменять местами в исходном массиве числа главной и побочной диагоналей в столбце. "},{"id":"10-4","category":10,"text":"Дан двумерный массив размерности не менее 5*5. Преобразовать исходный массив так, чтобы последний элемент каждой строки был заменен суммой предыдущих элементов той же строки. "},{"id":"10-5","category":10,"text":"Даны два одномерных массива с различным количеством элементов и натуральное число k (вводится с клавиатуры). Объединить их в один массив, включив второй массив между k-м и (k+1)-м элементами первого. (Решить, используя дополнительный массив)"},{"id":"10-6","category":10,"text":"Даны два одномерных массива с различным количеством элементов и натуральное число k (вводится с клавиатуры). Объединить их в один массив, включив второй массив между k-м и (k+1)-м элементами первого. (Решить без использования дополнительного массива)"},{"id":"11-1","category":11,"text":"Создать и вывести двумерный массив на экран с помощью процедуры"},{"id":"11-2","category":11,"text":"Создать два двумерных массива с использованием процедур и процедуру для их сложения. "},{"id":"11-3","category":11,"text":"Создать два двумерных массива с использованием процедур и процедуру для вычитания значений второго массива из первого. "},{"id":"11-4","category":11,"text":"Написать процедуру вычисления корней квадратного уравнения. "},{"id":"11-5","category":11,"text":"Сформировать массив из случайных целых чисел. Сообщить, есть ли в нем элемент, указанный пользователем. Перед поиском элементы массива отсортировать (при этом оставив исходный массив без изменений). В программе должны быть три процедуры - заполнение массива, сортировка, поиск элемента. "},{"id":"11-6","category":11,"text":"Дана квадратная матрица. Вычесть значения элементов последней строки из соответствующих элементов каждой строки. "},{"id":"12-1","category":12,"text":"Составить функцию находящую факториал числа. "},{"id":"12-2","category":12,"text":"Написать функцию, которая циклически сдвигает одномерный массив вправо или влево на указанное число позиций. Сдвиг также должен быть кольцевым, то есть те элементы, которые уходят вправо или влево за пределы массива, должны помещаться с другого его конца"},{"id":"13-1","category":13,"text":"Написать рекурсивную функцию нахождения факториала числа N. "},{"id":"13-2","category":13,"text":"Написать рекурсивную функцию перевода чисел из десятичной системы счисления в другие. "},{"id":"14-1","category":14,"text":"Определить кол-во слов в строке. Слова отделяются одним или несколькими пробелами. "},{"id":"14-2","category":14,"text":"Определить номера позиций и кол-во повторений запрашиваемого символа в строке, введённой с клавиатуры. "},{"id":"14-3","category":14,"text":"Найти и заменить определённый символ в строке, введённой с клавиатуры. Программа должна запрашивать заменяемый и заменяющий символы, а также подтверждение каждой замены символа с сообщением его номера в строке. "},{"id":"14-4","category":14,"text":"Определить самое короткое и самое длинное слово в строке, введённой с клавиатуры. "},{"id":"15-1","category":15,"text":"Создать файл input.txt содержащий в себе строку из чисел. Переписать все данные из файла input.txt в файл output.txt. "},{"id":"15-2","category":15,"text":"Создать файл input.txt содержащий в себе строку из чисел. Посчитать количество и сумму этих чисел, ответ записать следующей строкой файла input.txt. "},{"id":"15-3","category":15,"text":"Создать файл input.txt содержащий в себе строку из чисел и символов. Посчитать количество и сумму чисел, ответ записать следующей строкой файла input.txt. "}],"categories":[{"id":1,"icon":"crosshairs-question","title":"Условный оператор"},{"id":2,"icon":"repeat","title":"Цикл"},{"id":3,"icon":"code-array","title":"Массивы"},{"id":4,"icon":"code-array","title":"Одномерные массивы"},{"id":5,"icon":"iframe-array-outline","title":"Создание и вывод двумерного массива"},{"id":6,"icon":"iframe-array-outline","title":"Обработка элементов двумерного массив"},{"id":8,"icon":"iframe-array-outline","title":"Работа с квадратными массивами"},{"id":7,"icon":"sort-ascending","title":"Сортировки"},{"id":9,"icon":"sort-variant","title":"Использование способов сортировки при работе с массивами"},{"id":10,"icon":"sort-variant","title":"Использование сортировки при решении задач. Работа с квадратными массивам"},{"id":11,"icon":"function","title":"Использование процедур при решении задач"},{"id":12,"icon":"function","title":"Использование функций при решении зада"},{"id":13,"icon":"refresh","title":"Использование рекурсии при решении задач"},{"id":14,"icon":"format-text","title":"Строки"},{"id":15,"icon":"file","title":"Работа с файлам"}]}')}});
//# sourceMappingURL=app.554bd255.js.map