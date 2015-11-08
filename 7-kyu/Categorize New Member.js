/*  Description:

The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input

Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. 
Information consists of an integer for the person's age and an integer for the person's handicap.

Example Input

[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

Output

Output will consist of a list of string values stating whether the respective member is to be placed in the senior or open category.

Example Output

["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/


// Solution #1
function openOrSenior(data){
	var arr = [];
    for (var i = 0; i < data.length; i++) {
    	if (data[i][0] >= 55 && data[i][1] > 7) {
    		arr.push("Senior"); // or arr[i] = "Senior"
    	} else {
    		arr.push("Open"); // or arr[i] = "Open"
    	}
    }
    return arr;
}


// Solution #2
function openOrSenior(data) {
	var arr = data.map(function(d){
		if (d[0] >= 55 && d[1] > 7) {
			return "Senior";
		} else {
			return "Open";
		}
	});
	return arr;
}


// Solution #3: Short version of Solution #2
function openOrSenior(data){
    return data.map(function(d){
        return d[0] >= 55 && d[1] > 7 ? "Senior" : "Open";
    });
}


// Solution #4: Preferred on Codewars
function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}