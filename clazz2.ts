'use strict';

class ListComponent {

    private _things: ListItem[];

    consturctor() {
        this._things = [];
    }

    get things(): ListItem[] {
        return this._things;
    }
}

class ListItem {

    private _name: string;

    constructor(name) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }
}

// 注意：我们将私有的属性 things,name 重命名为 _things,_name,
// 同时，声明了 get things 和 get name 方法

let item = new ListItem('test');
console.log(item.name);

// 更简洁的写法
class Blog {

    constructor(private _articles: article[]) {}

    get articles(): article[] {
        return this._articles;
    }
}

class article {

    constructor(private _title: string) {}

    get title(): string {
        return this._title;
    }
}

const atc = new article('article\'s title');
console.log(atc.title);

