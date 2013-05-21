function roll()
{
	var type = document.getElementById("weapon-type").value;

	switch(type)
	{
		case 'fists':
			fistsInjury();
			break;
		case 'stabbing':
			stabbingInjury();
			break;
		case 'crushing':
			crushingInjury();
			break;
		case 'slashing':
			slashingInjury();
			break;
	}
}

function fistsInjury(){
	document.getElementById("results").innerHTML = 1;
	alert(getWoundedArea());
}

function getWoundedArea(){
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

	var rand =  Math.floor(Math.random() * 10);

	var area = areas[rand];

	if( rand >= 4 )
	{
		area = getRandomSide() + " " + area;
	}
	
	return area;
}

function getRandomSide()
{
	var rand = Math.floor(Math.random() + 0.5);

	switch(rand)
	{
		case 0:
			return 'left';
			break;
		case 1:
			return 'right';
			break;
	}
}