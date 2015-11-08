/*  Description:

For a given 2D vector described by cartesian coordinates of its initial point and terminal point in the following format: [[x1, y1], [x2, y2]], your function must return this vector's length presented as a float.

Error must be less than 0.0000001 * result.  Coordinates can be integers or floats.
*/


// Solution #1
function vectorLength(v){
	// Extract x1, x2, y1, y2 values from the v array
  	x1 = v[0][0];
  	x2 = v[1][0];
  	y1 = v[0][1];
  	y2 = v[1][1];
  	return Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));  
}


// Solution #2
function vectorLength(v){
  	return Math.sqrt(Math.pow(v[1][0]-v[0][0], 2) + Math.pow(v[1][1]-v[0][1], 2));  
}