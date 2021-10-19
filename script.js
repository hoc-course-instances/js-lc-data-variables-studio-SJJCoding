// Variable               Value
// --------               -----
//
let date	                =  'Monday 2019-03-18'
let time	         =         '10:05:34 AM'
let astronautCount	      =  7
let astronautStatus	    =  'ready'
let averageAstronautMassKg =	80.7
let crewMassKg	         =   astronautCount * averageAstronautMassKg
let fuelMassKg	        =    760000
let shuttleMassKg	  =      74842.31
let totalMassKg	     =     crewMassKg + fuelMassKg + shuttleMassKg
let fuelTempCelsius	   =   -225
let fuelLevel	    =        '100%'
let weatherStatus	  =      'clear'

console.log(
'\n'+ '--------------------' +
'\n'+ '> LC04 - LAUNCH CHECKLIST' +
'\n'+
'\n'+ '--------------------' +
'\n'+ 'Date:' + date +
'\n'+ 'Time:' + time +
'\n'+
'\n'+ '--------------------' +
'\n'+ '> ASTRONAUT INFO' +
'\n'+ '--------------------' +
'\n'+ 'count:' + astronautCount +
'\n'+ 'status:' + astronautStatus +
'\n'+
'\n'+ '--------------------' +
'\n'+ '> FUEL DATA' +
'\n'+ '--------------------' +
'\n'+ 'Fuel temp celsius:' + fuelTempCelsius +
'\n'+ 'Fuel level:' + fuelLevel +
'\n'+
'\n'+ '--------------------' +
'\n'+ '> MASS DATA' +
'\n'+ '--------------------' +
'\n'+ 'Crew mass:' + crewMassKg +
'\n'+ 'Fuel mass:' + fuelMassKg +
'\n'+ 'Shuttle mass:' + shuttleMassKg +
'\n'+ 'Total mass:' + totalMassKg +
'\n'+
'\n'+ '--------------------' +
'\n'+ '> FLIGHT PLAN' +
'\n'+ '--------------------' +
'\n'+ 'weather:' + weatherStatus +
'\n'+ 
'\n'+ '--------------------' +
'\n'+ '> OVERALL STATUS' +
'\n'+ '--------------------' +
'\n'+ 'Clear for takeoff: YES'
)

// Sample Output
//
// -------------------------------------
// > LC04 - LAUNCH CHECKLIST
// -------------------------------------
// Date: Monday 2019-03-18
// Time: 10:05:34 AM

// -------------------------------------
// > ASTRONAUT INFO
// -------------------------------------
// * count: 7
// * status: ready

// -------------------------------------
// > FUEL DATA
// -------------------------------------
// * Fuel temp celsius: -225 C
// * Fuel level: 100%

// -------------------------------------
// > MASS DATA
// -------------------------------------
// * Crew mass: 564.9 kg
// * Fuel mass: 760000 kg
// * Shuttle mass: 74842.31 kg
// * Total mass: 835407.21 kg

// -------------------------------------
// > FLIGHT PLAN
// -------------------------------------
// * weather: clear

// -------------------------------------
// > OVERALL STATUS
// -------------------------------------
// * Clear for takeoff: YES