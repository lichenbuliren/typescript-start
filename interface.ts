/**
 * 接口: 将一系列的属性和和抽象方法到一个计划当中，
 * 将来的类可以实现它而不需要自己定义这些属性和方法，
 * 每个类都可以有自己的实现
 * 一个类如果实现了一个接口，那么它就必须包含接口里面的所有的属性和方法
 */

'use strict';

interface User{
    name: string;
    email: string;
    // 使用的 ? 的方式，来表明这个属性是可选的
    avatar?: Object;
    
    // API
    print(): void;
}

class RegisteredUser implements User{
    
    constructor(public name: string,public email){}
    
    print(): void{
        console.log(`Name: ${this.name} | Email: ${this.email} | No avatar.`);
    }
}

class ImageUser implements User{
    
    constructor(public name: string, public email: string,public avatar: Object){}
    
    print(): void{
        console.log(`Name: ${this.name} | Email: ${this.email} | Has avatar.`);
    }
}

const user = new RegisteredUser('heave','lichenbuliren@gmail.com');
user.print();

