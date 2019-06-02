let Nonce_str = (len) => {
  var len = len || parseInt(getRandomIntInclusive(16, 32))
  let str = ''
  let arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  for (let i = 0; i < len; i++) {
    str += arr[parseInt(Math.random()*61)]
  }
  // console.log(str)
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
  }
  return str
}

module.exports = Nonce_str