function LCM(arr) {
  arr.sort((a,b) => a-b);

  let ans = LCD(arr[0], arr[0]+1);

  for(let i = arr[0]+2 ; i<=arr[1]; i++){
    ans = LCD(ans, i);
  }

  return ans;
}

function gcd(a, b){
  return a==0 ?  b : gcd(b%a,a);
}

function LCD(a,b){
  return Math.abs(a*b)/gcd(a,b);
}

 
