const canvas = d3.select('.canvas');

const svg = canvas.append('svg')
  .attr('height', 600)
  .attr('width', 600);

// Groups
const group = svg.append('g')
  .attr('transform', 'translate(0, 100)');

//Append shapes to svg container
group.append('rect')
  .attr('height', 200)
  .attr('width', 100)
  .attr('fill', 'blue')
  .attr('x', 20)
  .attr('y', 20);

group.append('circle')
  .attr('r', 50)
  .attr('cx', 300)
  .attr('cy', 70)
  .attr('fill', 'pink');

group.append('line')
  .attr('x1', 370)
  .attr('x2', 400)
  .attr('y1', 20)
  .attr('y2', 120)
  .attr('stroke', 'red');

// Text svg
svg.append('text')
  .attr('x', 20)
  .attr('y', 250)
  .attr('fill', 'grey')
  .text('Hello Jesus Billionaire')
  .style('font-family', 'arial');