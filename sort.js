let arr = [8,21,20,2,9,6,7,3,18,12,19,16,17,13,14,15,11,10,4,5,1]
let count = 0;
for(let i = 0;i<arr.length; i++) {
  if(arr[i+1] && arr[i+1] > arr[i]) {
    count ++
    continue
  }else if(arr[i+1]) {
     let _t = arr[i+1]
     arr[i+1] = arr[i]
     arr[i] = _t
    let idx = i // 记录这次交换的角标
    count ++
     if(idx !=0 ){
       for(idx; idx>=0 ; idx --) {
         count ++ 
         if(arr[idx] && arr[idx -1] && arr[idx] < arr[idx -1]) {
           let _p = arr[idx]   
           arr[idx] = arr[idx -1]
           arr[idx-1] = _p
         count ++ 
           
         }else {
           continue
         count ++ 
           
         }
       }
     }else {
       break
     }
  }else{
    break
  }
}



// var times=0;  //210
// var bubbleSort=function(arr){
// 	for(var i=0;i<arr.length-1;i++){
// 		for(var j=i+1;j<arr.length;j++){
// 			if(arr[i]>arr[j]){//如果前面的数据比后面的大就交换
// 				var temp=arr[i];
// 				arr[i]=arr[j];
// 				arr[j]=temp;
// 			}
// 		console.log("第"+(++times)+"次排序后："+arr);
// 		}
// 	} 
// 	return arr;
// }
// console.log("The result is:"+bubbleSort(arr));


// var times=0;
// var quickSort=function(arr){ 
// 	//如果数组长度小于等于1无需判断直接返回即可
// 	if(arr.length<=1){
// 		return arr;
// 	}
// 	var midIndex=Math.floor(arr.length/2);//取基准点
// 	var midIndexVal=arr.splice(midIndex,1);//取基准点的值,splice(index,1)函数可以返回数组中被删除的那个数arr[index+1]
// 	var left=[];//存放比基准点小的数组
// 	var right=[];//存放比基准点大的数组
// 	//遍历数组，进行判断分配
// 	for(var i=0;i<arr.length;i++){
// 		if(arr[i]<midIndexVal){
// 			left.push(arr[i]);//比基准点小的放在左边数组
// 		}
// 		else{
// 			right.push(arr[i]);//比基准点大的放在右边数组
// 		}
// 		console.log("第"+(++times)+"次排序后："+arr);
// 	}
// 	//递归执行以上操作,对左右两个数组进行操作，直到数组长度为<=1；
// 	return quickSort(left).concat(midIndexVal,quickSort(right));
// };
// console.log(quickSort(arr));

console.log(arr)
console.log(count)
