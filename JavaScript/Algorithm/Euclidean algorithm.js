function gcd(a, b){
  return a==0 ?  b : gcd(b%a,a);
}
