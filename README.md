# Angular 9 modules example

Angular modules example with multiple levels and routing with loadChild. Implementation with router-outlet in components. 

```sh
$ ng g m parent --module=app --routing
$ ng g c parent --skipTests=true
$ ng g m child --module=parent --routing
$ ng g c child --skipTests=true
$ ng g m grandchild --module=child --routing
$ ng g c granchild --skipTests=true
```
  
### Tech

Only Angular 

* [Angular] - Version 9!

### Installation

It does not require npm install

```sh
$ ng serve
```

