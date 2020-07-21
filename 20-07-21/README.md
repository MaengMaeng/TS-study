## 기본
1. .ts 파일 작성
```
const str: string = "type script test";

class Test{
    private name:string;
    private age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}
```

2. 컴파일
```
tsc ts-test.ts
```


## 설정
1. tsc --init
2. .json 파일 수정
```
    "outDir": "./dist",
    "rootDir": "./src",
```
3. 컴파일
```
tsc
```