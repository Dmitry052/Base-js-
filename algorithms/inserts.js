var arr = [3,1,6,4,7,9,11,33,54,109,0,21321,324324,23];

Array.prototype.selection = function(A){
    var n = A.length;
    for (var i = 0; i < n; i++)
     { var v = A[ i ], j = i-1;
       while (j >= 0 && A[j] > v)
        { A[j+1] = A[j]; j--; }
       A[j+1] = v;
     }  
}

arr.selection(arr);
console.log(arr);