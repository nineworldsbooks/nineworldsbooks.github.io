function roll()
{
	var type = document.getElementById("weapon-type").value;

	var area = getWoundedArea();

	var injury;

	switch(type)
	{
		case 'fists':
			injury = fistsInjury();
			break;
		case 'stabbing':
			injury = stabbingInjury();
			break;
		case 'crushing':
			injury = crushingInjury();
			break;
		case 'slashing':
			injury = slashingInjury();
			break;
	}

	alert(injury + " " + area);
}

function fistsInjury(){
	var numInjuries = 2;

	var injuries = new Array();
	injuries[0] = 'bruise';
	injuries[1] = 'scratch';

	return injuries[dN(numInjuries)];
}

function getWoundedArea(){
	var numParts = 11;

	var areas = new Array();
	areas[0] = 'head';
	areas[1] = 'neck';
	areas[2] = 'stomach';
	areas[3] = 'chest';
	areas[4] = 'bicep';
	areas[5] = 'shoulder';
	areas[6] = 'thigh';
	areas[7] = 'knee';
	areas[8] = 'ankle';
	areas[9] = 'foot';
	areas[10] = 'eye';

	var rand =  dN(numParts);

	var area = areas[rand];

	if( rand >= 4 )
	{
		area = getRandomSide() + " " + area;
	}
	
	return area;
}

function getRandomSide()
{
	switch(dN(2))
	{
		case 0:
			return 'left';
			break;
		case 1:
			return 'right';
			break;
	}
}

function dN(n){
	return Math.floor(Math.random() * n);
}