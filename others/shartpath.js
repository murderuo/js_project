/*
Shortest Path
HIDE QUESTION
Have the function ShortestPath(strArr) take strArr which will be an array of strings which models a non-looping Graph. The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) in the array as a string. The next N elements will be the nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.). Then after the Nth element, the rest of the elements in the array will be the connections between all of the nodes. They will look like this: (A-B, B-C .. Brick Street-Main Street .. etc.). Although, there may exist no connections at all.

An example of strArr may be: ["4","A","B","C","D","A-B","B-D","B-C","C-D"]. Your program should return the shortest path from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-D. Here is another example with strArr being ["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"]. The output for this array should be A-E-D-F-G. There will only ever be one shortest path for the array. If no path between the first and last node exists, return -1. The array will at minimum have two nodes. Also, the connection A-B for example, means that A can get to B and B can get to A.
*/

/*


1. For input ["3","A","B","C","B-C","A-B"] the output was incorrect. The correct output is A-B-C
2. For input ["5","A","B","C","Z","Y","B-C","A-B","A-Z","C-Y","Z-Y"] the output was incorrect. The correct output is A-Z-Y
3. For input ["6","A","B","C","Z","Y","Q","B-C","A-B","A-Z","C-Y","Z-Y","C-Q"] the output was incorrect. The correct output is A-B-C-Q
4. For input ["6","Z","B","C","A","Y","Q","B-C","A-B","A-Z","C-Y","Z-Y","C-Q"] the output was incorrect. The correct output is Z-Y-C-Q
5. For input ["5","c","h","d","s","m","c-s","s-h","d-m","h-d"] the output was incorrect. The correct output is c-s-h-d-m
6. For input ["2","First Street","Third Street"] the output was incorrect. The correct output is -1
7. For input ["7","D","A","N","I","E","L","B","D-A","A-N","E-B","E-L"] the output was incorrect. The correct output is -1
8. For input ["7","C","B","A","D","E","G","F","A-B","B-E","E-G","C-D","D-B","D-E","E-F"] the output was incorrect. The correct output is C-D-E-F
9. For input ["9","Z","B","C","D","R","A","Y","Q","E","A-Z","A-R","Z-Y","Z-C","C-B","Y-Q","Q-D","D-E","R-E"] the output was incorrect. The correct output is Z-A-R-E
10. For input ["5","N1","N2","N3","N4","N5","N1-N3","N3-N4","N4-N5","N5-N2","N2-N1"] the output was incorrect. The correct output is N1-N2-N5


*/


function ShortestPath(strArr) { 
  const node=Number(strArr[0])
  const last_node=strArr[Number(strArr[0])]
  //console.log(node,last_node)
  let path="A"
  let nod=strArr.slice(1,node+1)
  let nodes=strArr.slice(node+1,)
  console.log("nodlar",nod)//"nodlar" ["A","B","C"]
  console.log("düğümler",nodes)//"düğümler" ["B-C","A-B"]
  let new_nodes=[]
	for (n in nodes){
    new_nodes.push([nod.indexOf(nodes[n][0]),nod.indexOf(nodes[n][2])])
  }
  console.log(new_nodes)//
  let maks_way_indeks=0
  for (i in new_nodes){
    // console.log(new_nodes[i].includes(0))
    if(new_nodes[i].includes(0)){
    		maks_way_indeks=Math.max(...new_nodes[i])
		}		
		
			
		

		console.log(path,maks_way_indeks)
  }



  //return strArr; 

}
   
// keep this function call here 
let arr=["5","A","B","C","Z","Y","B-C","A-B","A-Z","C-Y","Z-Y"]//a-b-c
ShortestPath(arr);