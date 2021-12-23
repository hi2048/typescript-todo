---
marp: true
---

# TypeScript and Practice

1. TypeScript
2. Todo

---

# TypeScript
1. 基本类型
2. interface
3. 类
4. 泛型

---
# 基本类型
1. origin data type: number, string, boolean, null, undefined, void, symbol, bigint

2. non-origin data type: object, array, tuple, enum
    const arr: string[] = ['1', '2', '3']
    const tuple: [string, number, string] = ['1', 2, '3']

3. any, unknown, never
any 类型的变量是可以进行任意进行赋值、实例化、函数执行等操作，但是 unknown 只允许赋值，不允许实例化、函数执行等操作
never 的字面意思是 “永不”，在 TS 中代表不存在的值类型，一般用于给函数进行类型声明，函数绝不会有返回值的时候使用，比如函数内抛出错误
---
# interface
    interface Todo {
      content: string;
      readonly user: string;
      time?: string;
      isComplete: boolean;
      [propName: string]: any;
    }
---
# enum
    enum UserId {
      tuture = '666',
      mRcfps = 6,
    }
---

# 函数类型
    const add: (x: number, y: number, z?: number): number = function(x, y) {
      // ...
      return x + y;
    }
---
# 交叉类型 &
    interface ErrorHandling {
      success: boolean;
      error?: { message: string };
    }
    interface ArtistsData {
      artists: { name: string }[];
    }
    const handleArtistsResponse = (response: ArtistsData & ErrorHandling) => {
      if(response.error) {
        console.error(response.error.message);
        return;
      }
      console.log(response.artists);
    }
---
# 联合类型
    const padLeft = (value: string, padding: string | number) => void

---

# 类型守卫
联合类型+字面量类型
字面量类型 TS 类型系统里面最小的类型。 
    数字字面量
    let tuture: 520
    字符串字面量
    let tuture: '520'
主要用于在进行 ”联合“ 的多个类型之间，存在相同的字段，也存在不同的字段，然后需要区分具体什么时候是使用哪个类型

---
# 类型别名
    type NameParams = 'string' | () => 'string';
    function getName(n: NameParams): string {}

---
# 类型别名与接口
    type name = 'string'
    type tuture ={
      tutureCommunity: string;
      editure: string;
      tutureDocs: string;
    }
    interface Tuture {
      tutureCommunity: string;
      editure: string;
      tutureDocs: string;
    }
---

# 类

1. public 代表公共的，表示被此访问限定符修饰的属性，方法可以任何地方访问到：1）类中 2）类的实例对象 3）类的子类中 4）子类的实例对象 等，默认所有类的和方法都是public 修饰的

2. Protected 在类和子类中访问，不能被类的实例对象访问也不能被子类的实例对象访问

3. Private 在类的内部访问
---
# 抽象类与抽象方法
    abstract class Animal {
      abstract makeSound(): void;
      move(): void {
        console.log("Roaming the earth...");
      }
    }
---
# 抽象类的继承
    class Bird extends Animal {
      makeSound(): void {
        console.log('Tuture tuture tuture.');
      }
    }
---
# 构造函数
* 声明的 Animal 类型不包括构造函数 constructor 以及类中的静态方法和静态属性，就像实例对象中是不包含类的构造函数、静态方法和静态属性一样
类与接口
---
# 类实现接口
    interface Alarm {
      alert(): void;
    }
    interface Light {
      lightOn(): void;
      lightOff(): void;
    }
    class Car implements Alarm, Light {
      alert() {
        console.log('Car alarm');
      }
      lightOn() {
        console.log('Car light on');
      }
      lightOff() {
        console.log('Car light off');
      }
    }
    class Door implements Alarm {
      alert() {
        console.log('Door alarm');
      }
    }
---
# 接口继承类
    class Point {
      x: number;
      y: number; 
    }
    interface Point3D extends Point {
      z: number;
    }
- 接口继承的是声明 Point 类时同时声明的用于注解类实例的那个类型, 而这个类型只包含类的实例属性和方法，所以接口继承类也是继承此类的实例属性和方法的类型
类作为接口使用
 1）多个类实现同一个接口来复用接口的属性或者方法 2）一个类实现多个接口 3）接口也可以继承类，只不过是继承类声明时同时声明的同名类型 4）类作为接口，通过进一步应用类声明的两个内容来简化 React 组件代码，提高代码的逻辑性和可复用性

---
# 泛型
---
# 类型的函数
    function getTutureTutorialsInfo<T, U>(info: T[], profile: U): T[] {
      console.log(info.length);
      console.log(profile);
      return info;
    }
    getTutureTutorialsInfo<string, object>(['hello tuture', 'hello world'], { username: 'tuture' });
---
- 泛型是在调用时再限定类型
我们在定义泛型的时候，是一系列类型变量，如 T 、 U 等，这些变量实际的类型我们在定义的时候是不知道的，只有在进行泛型调用的时候，由用户给定实际的类型以这里有一种延迟声明类型的作用。
---
# 匿名函数泛型
    const getTUtureTutorialsInfo: <T>(info: T[]) => T[] = (info) => {
      console.log(info.length);
      return info;
    }
* 泛型默认类型参数
<T, U = number>
* 泛型数组 Array<T>
---
# 类泛型
    class TodoInput extends React.Component<TodoInputProps, TodoInputState>
---
# 接口泛型
        interface Profile<T> {
          username: string;
          nickName: string;
          avatar: string;
          age: T;
        }
        type ProfileWithAge = Profile<string>
---
# 类型别名泛型
        type Profile<T> = {
          username: string;
          age: T;
        }
        type ProfileWithAge = Profile<string>;
---
# 泛型约束
        type Profile<T> = {
          username: string;
          age: T;
        }
        function getTutureTutorialsInfo<T, U extends Profile<string>>(info: T[], profile: U): T[] {
          console.log(info.length);
          console.log(profile);
          return info;
        }
---
# 类：
        class Profile<T>{
          username: string;
          age: T;
        }
---
# 接口:
        interface Profile<T> {
          username: string;
          age: T;
        }
---
# 类型别名：
        type Profile<T> = {
          username: string;
          age: T;
        }
---
# duck typing
* 当看到一只鸟走起来像鸭子、游泳起来像鸭子、叫起来也像鸭子，那么这只鸟就可以被称为鸭子。
* TS 类型是鸭子类型, 是基于代码的实际样子来进行类型注解的
---
# 构造函数的注解
        interface ConstructorFunction<C> {
          new (): C;
        }
---
# 类在声明的时候会声明两个东西：
    const profileConstructor: ConstructorFunction<Profile<string>> = Profile;
  1. 用于注解此类实例的类型 
  2. 以及此类的构造函数。
        
---
# 注解构造函数
    class Profile<T> {
      username: string;
      age: T;
    }
    class TutureProfile extends Profile<string> {
      github: string;
      remote: string[];
    }
    interface ConstructorFunction<C> {
      new (): C;
    }
    function createInstance<A extends Profile<string>>(B: ConstructorFunction<A>) {
      return new B();
    }
    const myTutureProfile = createInstance(TutureProfile);
---
# Todo

todo [github](https://github.com/hi2048/typescript-todo "todo")
---