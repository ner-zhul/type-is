# TypeIs
这个 lib 的功能是为了区分一个变量的类型，js 判断类型的方式比较另类，所以我做了 type-is 这个 lib ，为了能像其他语言一样清晰。

js 有 7 种数据类型，还有 function

```javascript
// js 有 7 大数据类型
undefined
null
boolean
string
number
object
symbol
// 这不属于数据类型，但是也是常用的一种类型
function
```

在这个 lib 中，我们将类型分为了如下 9 种

```javascript
undefined
null
boolean
string
number
object
symbol
function
array
```

## 使用方法

1. names

   names 返回一个对象，这个对象包括了每种类型对应的名称。

2. type

   type 接受一个参数，返回这个参数的类型对应的名称。可以用来在 switch 语句中使用。

3. `isUndefined`、`isNull`、`isBoolean`、`isString`、`isNumber`、`isObject`、`isSymbol`、`isFunction`、`isArray` 

   这些函数都接受一个参数，将会判断参数是否是相应的类型，返回 true 或 false。



> 日子像一口大锅，把青春炖的五味杂陈，你问我最残酷的是什么，我想大概是：多少次梦回，也不能重逢，那些正少年的人。 

