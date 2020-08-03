# TS-study

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

## reference
1. ! (non-null)
```
let a: string;
let aArray: string[] = ['a','b'];

a = aArray.pop(); // type 'string undefined' is not assignable to type 'string'
```

```
a = aArray.pop()!; // not error;
```