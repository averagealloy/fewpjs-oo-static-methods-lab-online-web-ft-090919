class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
 static sanitize(string){
   return string.replace( /[^A-Za-z0-9 '-]/g, '' )
 }
 static titleize(sent){
   let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
   let res = []
   let arr = sent.split( " " )
   for (let a = 0; a < arr.length; a++){
     if (a == 0) {
       res.push(this.capitalize(arr[a]))
     } else {
       if (exceptions.includes(arr[a])){
         res.push(arr[a])
       } else{
         res.push(this.capitalize(arr[a]))
       }
     }
   }
   return res.join( " " )
 }
}
