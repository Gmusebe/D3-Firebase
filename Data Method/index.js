//We will be using data from Firestore from Firebase
// For now create array data
const data = [
  {width:200, height:100, fill: 'purple'},
  {width:100, height:60, fill: 'pink'},
  {width:50, height:30, fill: 'red'}
];

// Grab refference of SVGz
const svg =d3.select('svg')

//Select rectangle inside the SVG
const rect = svg.selectAll('rect')
  .data(data) //Join data
  .attr('width', (d, i, n) => d.width )  //Function that returns data value //arrow function
  .attr('height', d => d.height)
  .attr('fill', d =>{ 
    return d.fill
  });

console.log(rect)