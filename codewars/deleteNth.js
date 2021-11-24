//given an array and an N value, we limit the existence of the number in N times
function deleteNth(arr,n){
    let lstCount = {};
    let newArr = [];
    arr.forEach((elem, index) => {
        if (lstCount[elem]!== undefined) {
            if(lstCount[elem]<n) {
                lstCount[elem]++;
                newArr.push(elem);
            }
        } else {
            if(n>0) {
                lstCount[elem]=1;
                newArr.push(elem);
            }
        }
    });
    return newArr;
  }

  console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));