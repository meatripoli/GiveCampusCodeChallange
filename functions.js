let codeObj = {};
/*
assuming that array will not be empty
loop through array if next element === currentNumber then add to count 
else replace current element and restart count
*/
codeObj.repeatedNumbers = function(array){
  //starting the countRepeat at 1 because if its in the list its repeated atleast 1 time
  let countRepeat=1;
  let currentNumber=0;
  let maxCount=0;
  array.forEach(num=>{
    if(num===currentNumber){
      countRepeat+=1;
    }
    else{
      countRepeat=1;
    };
    if(countRepeat>maxCount){
      maxCount=countRepeat;
    }
    currentNumber=num;
  });
  return maxCount;
};

/*
assuming that array will not be empty
split and sort birth years
split and sort death years
create a year array
I need to keep track of the max number of people and at what index of the yearArray so I can pull the start and end date
take the first birth year
+1 to count of people
check death year and next birth 
if next birth year comes before death year +1 to count of people
else -1 to count of people*/
codeObj.findYearRange= function(arr){
    let yearArr=[];
    let birthLookup={};
    let deathLookup={};
    let count=0;
    let maxCount=0;
    let index=0;
    //creating the yearArray and the birth and death lookup objects
    arr.forEach(person=>{
        yearArr = yearArr.concat(person);
        birthLookup[person[0]]=1;
        deathLookup[person[1]]=-1;
    });
    //sorthing the years then looping through
    yearArr.sort().forEach((year,i)=>{
        //count how many people were born
        count+=birthLookup[year] || 0;
        if(count>maxCount){
        maxCount=count;
        index=i;
        }
        //count how many people died
        count+=deathLookup[year] || 0;
    });
    let startRange=yearArr[index];
    let lengthRange=yearArr[index+1]-yearArr[index]+1;
    //create an array that lists all the years between range we found above
    return Array(lengthRange).fill().map((_,i) => startRange+i);
};

module.exports = codeObj;