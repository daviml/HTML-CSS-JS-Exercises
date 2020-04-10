function fib(x){
  
    let fibSeq = [0,1]
  
    for(i=1;i<x;i++){
      fibSeq.push(i)
    }
    fibSeq.pop()
    return fibSeq
  }
  
  fib(13)