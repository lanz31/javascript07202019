class myobj {
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    sumofab() {
        return this.a + this.b;
    }
}

var x = new myobj(2, 3, 4, 5);
var y = new myobj(3, 4, 5, 6);