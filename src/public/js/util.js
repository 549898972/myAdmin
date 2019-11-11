export default {
  isValidArray: function (arr) {
    if(arr!==null && arr!==undefined && arr.length && arr.length>0) {
      return true
    } else {
      return false
    }
  },
}