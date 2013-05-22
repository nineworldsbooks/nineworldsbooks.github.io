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
	'broken',
	'splintered'
	);

var crushingTarget = Array(
	'side of skull',
	'side of jaw',
	'collar bone',
	'shoulder blade',
	'side of ribcage',
	'femur'
	);

// Slashing
var slashingWounds = Array(
	'cut',
	'slashed',
	'severed'
	);

var slashingTarget = Array(
	'fingers',
	'hand',
	'forearm',
	'upper arm',
	'side of neck',
	'thigh'
	);

var sides = Array(
	'left',
	'right'
	);


function roll()
{
	var results = getFistWounds();

	results += getStabbingWounds();

	results += getCrushingWounds();

	results += getSlashingWounds();
	
	document.getElementById("results").innerHTML = results;
}

function getFistWounds()
{
	var results = "";
	var area, injury;

	var fistwounds = document.getElementById("fists").value;
	results += '<b>Fists:</b><br>';
	for ( var i = 0; i < fistwounds; i++ ) {
		injury = punchingWounds[ dN( punchingWounds.length ) ];
		area = getSide() + " " + punchingTarget[ dN( punchingTarget.length ) ];
		results += injury + " " + area + '<br>';
	};

	return results;
}

function getStabbingWounds()
{
	var results = "";
	var area, injury;

	var stabbingwounds = document.getElementById("stabbing").value;
	results += '<br><b>Stabbing:</b><br>';
	for ( var i = 0; i < stabbingwounds; i++ ) {
		injury = stabbingWounds[ dN( stabbingWounds.length ) ];
		area = getSide() + " " + stabbingTarget[ dN( stabbingTarget.length ) ];
		results += injury + " " + area + '<br>';
	};

	return results;
}

function getCrushingWounds()
{
	var results = "";
	var area, injury;

	var crushingwounds = document.getElementById("crushing").value;
	results += '<br><b>Crushing:</b><br>';
	for ( var i = 0; i < crushingwounds; i++ ) {
		injury = crushingWounds[ dN( crushingWounds.length ) ];
		area = getSide() + " " + crushingTarget[ dN( crushingTarget.length ) ];
		results += injury + " " + area + '<br>';
	};

	return results;
}

function getSlashingWounds()
{
	var results = "";
	var area, injury;

	var slashingwounds = document.getElementById("slashing").value;
	results += '<br><b>Slashing:</b><br>';
	for ( var i = 0; i < slashingwounds; i++ ) {
		injury = slashingWounds[ dN( slashingWounds.length ) ];
		area = getSide() + " " + slashingTarget[ dN( slashingTarget.length ) ];
		results += injury + " " + area + '<br>';
	};

	return results;
}

function getSide(){
	return sides[ dN(2) ];
}

function dN(n)
{
	return Math.floor(Math.random() * n);
}