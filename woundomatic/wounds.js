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

	var result = injury + " " + area;

	document.getElementById("results").innerHTML = result;
}

function fistsInjury()
{
	var injuries = new Array();
	injuries[0] = 'bruised';
	injuries[1] = 'scratched';

	return injuries[ dN( injuries.length ) ];
}

function stabbingInjury()
{
	var injuries = new Array();
	injuries[0] = 'pierced';
	injuries[1] = 'scratched';

	return injuries[ dN( injuries.length ) ];
}

function getWoundedArea()
{
	var areas = new Array();
	areas[0] = 'head';
	areas[1] = 'neck';
	areas[2] = 'stomach';
	areas[3] = 'chest';
	areas[4] = 'upper arm';
	areas[5] = 'shoulder';
	areas[6] = 'thigh';
	areas[7] = 'knee';
	areas[8] = 'ankle';
	areas[9] = 'foot';
	areas[10] = 'eye';
	areas[11] = 'forearm';
	areas[12] = 'shin';

	var rand =  dN( areas.length );

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

function dN(n)
{
	return Math.floor(Math.random() * n);
}