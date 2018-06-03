function fib(n) {
    const a = 1;
    const b = 2;
    const t=false;
    if ((n==1)||(n==2)){
        t=true;
    } else{
        while (b<=n){
            b=a+b;
            a=b-a;
            if(b==n){ t=true; }
    
        }
    }
    if(t){
        console.log('nr fib');
    } else {
        console.log('not fib');
     }
}


fib(13);