// Punching
var punchingWounds = Array(
	'scratched',
	'bruised',
	'bloodied'
	);

var punchingTarget = Array(
	'eye',
	'side of nose',
	'side of mouth',
	'side of neck',
	'side of chest',
	'shoulder'
	);

// Stabbing
var stabbingWounds = Array(
	'pierced',
	'scratched'
	);

var stabbingTarget = Array(
	'eye',
	'cheek',
	'shoulder',
	'upper arm',
	'forearm',
	'hand',
	'wrist',
	'side of neck',
	'side of chest',
	'side of stomach',
	'thigh',
	'shin'
	);

// Crushing
var crushingWounds = Array(
	'cracked',
	'broken'
	);

var sides = Array(
	'left',
	'right'
	);


function roll()
{
	var type = document.getElementById("weapon-type").value;

	var area, injury;

	switch(type)
	{
		case 'fists':
			injury = punchingWounds[ dN( punchingWounds.length ) ];
			area = getSide() + " " + punchingTarget[ dN( punchingTarget.length ) ];
			break;
		case 'stabbing':
			injury = stabbingWounds[ dN( stabbingWounds.length ) ];
			area = getSide() + " " + stabbingTarget[ dN( stabbingTarget.length ) ];
			break;
		case 'crushing':
			break;
		case 'slashing':
			break;
	}

	var result = injury + " " + area;

	document.getElementById("results").innerHTML = result;
}

function getSide(){
	return sides[ dN(2) ];
}

function dN(n)
{
	return Math.floor(Math.random() * n);
}